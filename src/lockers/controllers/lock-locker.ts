import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { findActiveLockerSessionForUserWithLockerInfo, updateLockState } from "~/lockers/controllers/common";
import { topicForLocker, CMD_LOCK } from "~/lockers/logic";
import { LockerNode } from "~/prisma-client";

export const lockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  if (!session.locker.closed) {
    throw new Error('LockerNotClosed')
  }
  const topic = topicForLocker(session.locker.cluster, session.locker)
  const payload = `${session.locker.idInCluster}${CMD_LOCK}`
  components.mqtt.publish(topic, payload);

  return session.locker
}