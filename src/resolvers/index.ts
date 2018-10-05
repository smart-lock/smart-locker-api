import { authMutation } from '~/auth/resolvers/mutation'
import { authQuery } from '~/auth/resolvers/query'
import { lockerSubscriptions } from '~/auth/resolvers/subscriptions'
import { lockerMutation } from '~/lockers/resolvers/mutation'
import { lockerQuery } from '~/lockers/resolvers/query'

export const resolvers = {
  Query: {
    ...lockerQuery,
    ...authQuery,
  },
  Mutation: {
    ...lockerMutation,
    ...authMutation,
  },
  Subscription: {
    ...lockerSubscriptions,
  },
}
