import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { LockerSessionNode } from "~/prisma-client";
import { findActiveLockerSessionForUser, finishLockerSession, updateBusyState } from "~/lockers/controllers/common";

export const unclaimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerSessionNode> => {
  const session = await findActiveLockerSessionForUser(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  const finishedSession = await finishLockerSession(session.id, components)
  await updateBusyState(lockerId, false, components);
  return finishedSession
}