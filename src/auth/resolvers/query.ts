import { GraphQLResolveInfo } from "graphql";
import { IContext } from "~/graphql/context";
import * as Boom from 'boom'

export const authQuery = {
  me: async (_, __, { components, account }: IContext, info: GraphQLResolveInfo) => {
    const user = await components.prismaBinding.db.query.user({ where: { id: account.id }}, info)
    if (!user) {
      throw Boom.notFound('UserNotFound')
    }

    return user
  }
}