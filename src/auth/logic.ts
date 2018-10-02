import * as R from 'ramda'
import { IAccount } from '~/auth/account';
import { UserNode } from '~/prisma-client';
import { ITokenComponent } from '~/components/token';

export const hasScopes = (requiredScopes: string[], accountScopes: string[]): boolean => {
  if (!accountScopes) {
    return false;
  }
  return R.intersection(requiredScopes, accountScopes).length > 0
}

export const isAuthenticated = (account: IAccount | null) => !!account

export const encodeUser = (user: UserNode, token: ITokenComponent): Promise<string> => {
  return token.encode({
    id: user.id,
    email: user.email,
    scopes: [],
  })
}