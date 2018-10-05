import { IContext } from '~/graphql/context'

export const lockerSession = {
  LockerSession: {
    user: ({ id }, value, ctx: IContext) => {
      return ctx.components.prismaClient.db.lockerSession({
        id,
      }).user()
    },
    locker: ({ id }, value, ctx: IContext) => {
      return ctx.components.prismaClient.db.lockerSession({
        id,
      }).locker()
    },
  },
}
