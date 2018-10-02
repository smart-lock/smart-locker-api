import { IAuthenticatedContext } from "~/graphql/context";
import { combineResolvers } from 'graphql-resolvers'
import { authenticated } from "~/auth/middlewares";

export const lockerSubscriptions = {
  myLockers: {
    subscribe: combineResolvers(
      authenticated,
      (_, __, { components, account }: IAuthenticatedContext) => {
        const pubsubInstance = components.pubsub.instance
        const channel = `${account.id}.lockers`
        return pubsubInstance.asyncIterator(channel)
      }
    ),
  },
  lockerState: {
    subscribe: combineResolvers(
      authenticated,
      async (_, { lockerId }, { components }: IAuthenticatedContext) => {
        const pubsubInstance = components.pubsub.instance
        const channel = `lockers.${lockerId}`
        return pubsubInstance.asyncIterator(channel)
      },
    ),
  }
}