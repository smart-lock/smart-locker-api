import { IAuthenticatedContext } from "~/graphql/context";
import { isAuthenticated, hasScopes } from "~/auth/logic";
import { combineResolvers, skip } from 'graphql-resolvers'
import * as Boom from 'boom'

export const authenticated = (_, __, { account }: Partial<IAuthenticatedContext>) => isAuthenticated(account) ? skip : Boom.unauthorized()

export const scopes = (requiredScopes: string[]) =>
  combineResolvers(
    authenticated,
    (_, __, { account }: Partial<IAuthenticatedContext>) =>
      hasScopes(requiredScopes, account.scopes) ? skip : Boom.forbidden())
