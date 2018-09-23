import { IContext } from "~/graphql/context";
import { lockerQuery } from "~/lockers/resolvers/query";
import { lockerMutation } from "~/lockers/resolvers/mutation";

export const resolvers = {
  Query: {
    ...lockerQuery
  },
  Mutation: {
    ...lockerMutation,
  },
  Subscription: {
    myLockers: {
      subscribe: (_, __, { components, account }: IContext) => {
        const pubsubInstance = components.pubsub.instance
        const channel = `${account.id}.lockers`
        return pubsubInstance.asyncIterator(channel)
      }
    },
    lockerState: {
      subscribe: async (_, { lockerId }, { components }: IContext) => {
        const pubsubInstance = components.pubsub.instance
        const channel = `lockers.${lockerId}`
        console.log(channel)
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
        return pubsubInstance.asyncIterator(channel)
      },
    }
  },
};
