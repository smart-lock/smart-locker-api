import { IContext } from "~/graphql/context";

export const resolvers = {
  Query: {
    hello: async (value, args , ctx: IContext) => {
      await ctx.mqtt.publish('inTopic', '1')
      return 'Hello'
    },
  },
};
