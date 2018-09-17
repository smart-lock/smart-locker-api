import { lockerControllers } from "~/lockers/controllers";
import { IContext } from "~/graphql/context";

export interface IClaimLockerArgs {
  lockerId: string
}

export const lockerMutation = {
  claimLocker: (value, args: IClaimLockerArgs, ctx: IContext, info) => {
    return lockerControllers.claimLocker(args.lockerId, ctx.account, ctx.components)
  }
}