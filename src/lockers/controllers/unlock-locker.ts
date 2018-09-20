import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { findActiveLockerSessionForUserWithLockerInfo, updateLockState } from "~/lockers/controllers/common";
import { Locker } from "~/generated/prisma";
import { topicForLocker, CMD_UNLOCK } from "~/lockers/logic";

export const unlockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<Locker> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  components.mqtt.publish(topicForLocker(session.locker.cluster, session.locker), CMD_UNLOCK);

  const updatedLocker = await updateLockState(session.locker.id, false, components)
  return updatedLocker
}