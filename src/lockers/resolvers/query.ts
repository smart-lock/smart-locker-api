import { IContext } from "~/graphql/context";
import { GraphQLResolveInfo } from "graphql";

export const lockerQuery = {
  myLockers: async (value, args, { components, account }: IContext, info: GraphQLResolveInfo) => {
    return components.prismaBinding.db.query.lockers({
      where: {
        currentOwner: {
          id: account.id,
        }
      }
    }, info)
  },
  mySessions: async (value, args, { components, account }: IContext, info: GraphQLResolveInfo) => {
    return components.prismaBinding.db.query.lockerSessions({
      where: {
        user: {
          id: account.id
        },
        state: 0,
      }
    }, info)
  },
}