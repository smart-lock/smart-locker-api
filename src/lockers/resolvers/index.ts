import { lockerMutation } from '~/lockers/resolvers/mutation'
import { lockerQuery } from '~/lockers/resolvers/query'

export const lockersResolvers = {
  Query: lockerQuery,
  Mutation: lockerMutation,
}
