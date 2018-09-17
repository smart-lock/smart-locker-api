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
};
