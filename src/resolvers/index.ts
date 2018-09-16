import { IContext } from "~/graphql/context";

export const resolvers = {
  Query: {
    hello: async (value, args , ctx: IContext) => {
      await ctx.mqtt.publish('inTopic', '1')
      return ctx.account.email
    },
    lockerCluster: async (value, args, ctx: IContext, info) => {
      return ctx.prismaBinding.db.query.lockerCluster({
        where: {
          id: args.id,
        }
      }, info)
    }
  },
  LockerCluster: {
    lockers: async (value, args, ctx: IContext) => {
      return ctx.db.lockers({
        where: {
          cluster: {
            id: value.id,
          },
        }
      })
    }
  }
};
