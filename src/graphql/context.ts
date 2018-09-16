import { ContextParameters } from 'graphql-yoga/dist/types';
import { prisma, Prisma } from '~/prisma-client'
import { IMQTTComponent } from '~/components/mqtt';
import { IComponents } from '~/system';
import { IAccount, accountFromReq } from '~/auth/account';

export interface IContext {
  db: Prisma
  mqtt: IMQTTComponent
  account: IAccount
}
export const contextFromReq = async (req: ContextParameters, deps: IComponents): Promise<IContext> => ({
  db: prisma,
  mqtt: deps.mqtt,
  account: await accountFromReq(req, deps)
})