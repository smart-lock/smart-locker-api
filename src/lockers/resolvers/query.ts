import { GraphQLResolveInfo } from 'graphql'
import { combineResolvers } from 'graphql-resolvers'
import { authenticated } from '~/auth/middlewares'
import { IAuthenticatedContext } from '~/graphql/context'

export const lockerQuery = {
  mySessions: combineResolvers(
    authenticated,
    async (_, __, { components, account }: IAuthenticatedContext, info: GraphQLResolveInfo) => {
      return components.prismaBinding.db.query.lockerSessions({
        where: {
          user: {
            id: account.id,
          },
          state: 0,
        },
      }, info)
    },
  ),
  lockerSession: combineResolvers(
    authenticated,
      (_, { id }, {components}: IAuthenticatedContext, info: GraphQLResolveInfo) => {
      return components.prismaBinding.db.query.lockerSession({
        where: {
          id,
        },
      }, info)
    },
  ),
  lockerClusterByMacAddress: combineResolvers(
    authenticated,
    (_, { macAddress }, { components }: IAuthenticatedContext, info: GraphQLResolveInfo) => {
      return components.prismaBinding.db.query.lockerCluster({
        where: {
          macAddress,
        },
      }, info)
    },
  ),
}
