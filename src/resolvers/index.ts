import { IContext } from "~/graphql/context";
import { lockerQuery } from "~/lockers/resolvers/query";
import { lockerMutation } from "~/lockers/resolvers/mutation";
import { lockerSession } from "~/lockers/resolvers/locker-session";

export const resolvers = {
  Query: {
    hello: async (value, args, ctx: IContext) => {
      // await ctx.mqtt.publish('inTopic', '1')
      // return ctx.account.email
    },
    ...lockerQuery
  },
  ...lockerSession,
  Mutation: {
    ...lockerMutation,
  },
  Subscription: {
    lockerState: {
      subscribe: async (_, { lockerId }, { components }: IContext) => {
        const pubsubInstance = components.pubsub.instance
        return pubsubInstance.asyncIterator(`lockers.${lockerId}`)
      },
    }
  },
};

/*
Should we send a first message about the locker state upon subscription ?

setTimeout(async () => {
  const locker = await components.prismaClient.db.locker({
    id: lockerId,
  })

  pubsubInstance.publish(`lockers.${lockerId}`, {
    lockerState: {
      busy: locker.busy,
      locked: locker.locked,
      closed: locker.closed,
      alarm: locker.alarm,
    }
  })
})
*/
