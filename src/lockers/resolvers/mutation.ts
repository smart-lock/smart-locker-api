import { lockerControllers } from "~/lockers/controllers";
import { IContext } from "~/graphql/context";

export interface IClaimLockerArgs {
  lockerId: string
}

export interface IUnclaimLockerArgs {
  lockerId: string
}

export interface ILockLockerArgs {
  lockerId: string
}
export interface IUnlockLockerArgs {
  lockerId: string
}

export const lockerMutation = {
  claimLocker: (_, args: IClaimLockerArgs, ctx: IContext) => {
    return lockerControllers.claimLocker(args.lockerId, ctx.account, ctx.components)
  },
  unclaimLocker: (_, args: IUnclaimLockerArgs, ctx: IContext) => {
    return lockerControllers.unclaimLocker(args.lockerId, ctx.account, ctx.components)
  },
  lockLocker: (_, args: ILockLockerArgs, ctx: IContext) => {
    return lockerControllers.lockLocker(args.lockerId, ctx.account, ctx.components)
  },
  unlockLocker: (_, args: IUnlockLockerArgs, ctx: IContext) => {
    return lockerControllers.unlockLocker(args.lockerId, ctx.account, ctx.components)
  },
}