import { IAccount } from "~/auth/account";
import { IComponents } from "~/system";
import { LockerSessionNode } from "~/prisma-client";

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

  const lockerSession = await components.prismaClient.db.createLockerSession({
    user: {
      connect: {
        id: account.id,
      }
    },
    locker: {
      connect: {
        id: lockerId,
      }
    },
    startedAt: components.clock.getDate(),
    state: 0,
  })

  return lockerSession
}