import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { findActiveLockerSessionForUserWithLockerInfo, updateLockState } from "~/lockers/controllers/common";
import { Locker } from "~/generated/prisma";
import { topicForLocker, CMD_LOCK } from "~/lockers/logic";

export const lockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<Locker> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  components.mqtt.publish(topicForLocker(session.locker.cluster, session.locker), CMD_LOCK);

  const updatedLocker = await updateLockState(session.locker.id, true, components)
  return updatedLocker
}