import * as R from 'ramda'
import { IAccount } from '~/auth/account';

export const hasScopes = (requiredScopes: string[], accountScopes: string[]): boolean => {
  if (!accountScopes) {
    return false;
  }
  return R.intersection(requiredScopes, accountScopes).length > 0
}

export const isAuthenticated = (account: IAccount | null) => !!account