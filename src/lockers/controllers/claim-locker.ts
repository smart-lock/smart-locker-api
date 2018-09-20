import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { LockerSessionNode } from "~/prisma-client";
import { updateBusyState, insertLockerSession } from "~/lockers/controllers/common";

export const claimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerSessionNode> => {
  const user = await components.prismaClient.db.user({
    id: account.id
  })

  if (user.credit < 100) {
    throw new Error('InsufficientCredit')
  }

  const locker = await components.prismaClient.db.locker({
    id: lockerId
  })

  if (!locker) {
    throw new Error('LockerNotFound')
  }

  const lockerSession = await insertLockerSession(lockerId, account.id, components);

  await updateBusyState(lockerId, true, components);
  return lockerSession
}