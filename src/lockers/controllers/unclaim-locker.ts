import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { LockerSessionNode } from "~/prisma-client";
import { finishLockerSession, updateBusyState, findActiveLockerSessionForUserWithLockerInfo } from "~/lockers/controllers/common";
import { topicForLocker, CMD_UNCLAIM } from "~/lockers/logic";

export const unclaimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerSessionNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  const finishedSession = await finishLockerSession(session.id, components)
  await updateBusyState(lockerId, false, components);
  const { locker } = session

  if (!locker.closed) {
    throw new Error('LockerNotClosed')
  }
  components.mqtt.publish(topicForLocker(locker.cluster, locker), `${locker.idInCluster}${CMD_UNCLAIM}`)
  return finishedSession
}