import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { findActiveLockerSessionForUserWithLockerInfo, updateLockState } from "~/lockers/controllers/common";
import { Locker } from "~/generated/prisma";
import { topicForLocker, CMD_LOCK } from "~/lockers/logic";
import { LockerNode } from "~/prisma-client";

export const lockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  console.log(session)
  const topic = topicForLocker(session.locker.cluster, session.locker)
  const payload = `${session.locker.idInCluster}${CMD_LOCK}`

  console.log(topic, payload)
  components.mqtt.publish(topic, payload);

  const updatedLocker = await updateLockState(session.locker.id, true, components)
  return updatedLocker
}