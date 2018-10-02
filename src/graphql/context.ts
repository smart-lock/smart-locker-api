import { ContextParameters } from 'graphql-yoga/dist/types';
import { IComponents } from '~/system';
import { IAccount, accountFromReq } from '~/auth/account';

export interface IContext {
  components: IComponents
}

export interface IAuthenticatedContext {
  account: IAccount
  components: IComponents
}

export const contextFromReq = async (req: ContextParameters, deps: IComponents): Promise<IAuthenticatedContext | IContext> => {
  return {
    components: deps,
    account: await accountFromReq(req, deps)
  }
}