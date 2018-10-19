import { ContextParameters } from 'graphql-yoga/dist/types'
import { accountFromExpressReq, accountFromReq, IAccount } from '~/auth/account'
import { IComponents } from '~/system'

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
    account: await accountFromReq(req, deps),
  }
}

export const contextFromExpressReq = async (req): Promise<IAuthenticatedContext | IContext> => {
  return {
    components: req.components,
    account: await accountFromExpressReq(req),
  }
}
