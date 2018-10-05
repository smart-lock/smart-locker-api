import * as Boom from 'boom'
import { combineResolvers, skip } from 'graphql-resolvers'
import { hasScopes, isAuthenticated } from '~/auth/logic'
import { IAuthenticatedContext } from '~/graphql/context'

export const authenticated = (_, __, { account }: Partial<IAuthenticatedContext>) => isAuthenticated(account) ? skip : Boom.unauthorized()

export const scopes = (requiredScopes: string[]) =>
  combineResolvers(
    authenticated,
    (_, __, { account }: Partial<IAuthenticatedContext>) =>
      hasScopes(requiredScopes, account.scopes) ? skip : Boom.forbidden())
