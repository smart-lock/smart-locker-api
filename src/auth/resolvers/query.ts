import { GraphQLResolveInfo } from "graphql";
import { IAuthenticatedContext } from "~/graphql/context";
import * as Boom from 'boom'
import { combineResolvers } from 'graphql-resolvers'
import { authenticated } from "~/auth/middlewares";

export const authQuery = {
  me: combineResolvers(
    authenticated,
    async (_, __, { components, account }: IAuthenticatedContext, info: GraphQLResolveInfo) => {
      const user = await components.prismaBinding.db.query.user({ where: { id: account.id }}, info)
      if (!user) {
        throw Boom.notFound('UserNotFound')
      }
  
      return user
    }
  )
}