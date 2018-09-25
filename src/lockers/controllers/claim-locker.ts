import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { LockerSessionNode } from "~/prisma-client";
import { updateBusyState, insertLockerSession, findActiveLockerSessionForUserWithLockerInfo, findActiveLockerSessionForUser } from "~/lockers/controllers/common";
import { topicForLocker, CMD_CLAIM } from "~/lockers/logic";

export const claimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerSessionNode> => {
  const user = await components.prismaClient.db.user({
    id: account.id
  })

  if (user.credit < 100) {
    throw new Error('InsufficientCredit')
  }

  const locker = await components.prismaBinding.db.query.locker({
    where: {
      id: lockerId,
    }
  }, `{
    id
    idInCluster
    busy
    cluster {
      id
      macAddress
    }
  }`)

  if (!locker) {
    throw new Error('LockerNotFound')
  }
  
  const session = await findActiveLockerSessionForUser(account.id, lockerId, components)

  if (session) {
    throw new Error('LockerBusy')
  }

  const lockerSession = await insertLockerSession(lockerId, account.id, components);
  await components.prismaClient.db.updateLocker({
    where: {
      id: lockerId
    },
    data: {
      currentOwner: {
        connect: {id: account.id}
      }
    }
  })
  
  await updateBusyState(lockerId, true, components);
  components.mqtt.publish(topicForLocker(locker.cluster, locker), `${locker.idInCluster}${CMD_CLAIM}`)

  console.log(topicForLocker(locker.cluster, locker), `${locker.idInCluster}${CMD_CLAIM}`)
  return lockerSession
}