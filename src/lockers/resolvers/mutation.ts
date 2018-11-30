import { combineResolvers } from 'graphql-resolvers'
import { authenticated } from '~/auth/middlewares'
import { IAuthenticatedContext } from '~/graphql/context'
import { lockerControllers } from '~/lockers/controllers'

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
  claimLocker: combineResolvers(
    authenticated,
    (_, args: IClaimLockerArgs, ctx: IAuthenticatedContext) => {
      return lockerControllers.claimLocker(args.lockerId, ctx.account, ctx.components)
    },
  ),
  unclaimLocker: combineResolvers(
    authenticated,
    (_, args: IUnclaimLockerArgs, ctx: IAuthenticatedContext) => {
      return lockerControllers.unclaimLocker(args.lockerId, ctx.account, ctx.components)
    },
  ),
  lockLocker: combineResolvers(
    authenticated,
    (_, args: ILockLockerArgs, ctx: IAuthenticatedContext) => {
      return lockerControllers.lockLocker(args.lockerId, ctx.account, ctx.components)
    },
  ),
  unlockLocker: combineResolvers(
    authenticated,
      (_, args: IUnlockLockerArgs, ctx: IAuthenticatedContext) => {
      return lockerControllers.unlockLocker(args.lockerId, ctx.account, ctx.components)
    },
  ),
}
