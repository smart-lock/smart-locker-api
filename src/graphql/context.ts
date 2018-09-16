import { ContextParameters } from 'graphql-yoga/dist/types';
import { prisma, Prisma } from '~/prisma-client'
import { IMQTTComponent } from '~/components/mqtt';
import { IComponents } from '~/system';

export interface IContext {
  db: Prisma
  mqtt: IMQTTComponent
}
export const contextFromReq = async (req: ContextParameters, deps: IComponents): Promise<IContext> => ({
  db: prisma,
  mqtt: deps.mqtt
})