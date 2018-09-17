import { ContextParameters } from 'graphql-yoga/dist/types';
import { prisma, Prisma } from '~/prisma-client'
import { Prisma as PrismaBinding } from '~/generated/prisma'
import { IMQTTComponent } from '~/components/mqtt';
import { IComponents } from '~/system';
import { IAccount, accountFromReq } from '~/auth/account';
import { PrismaComponent } from '~/components/prisma';

export interface IContext {
  account: IAccount
  components: IComponents
}
export const contextFromReq = async (req: ContextParameters, deps: IComponents): Promise<IContext> => {
  return {
    components: deps,
    account: await accountFromReq(req, deps)
  }
}