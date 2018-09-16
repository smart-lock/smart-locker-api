import { ContextParameters } from 'graphql-yoga/dist/types';
import { prisma, Prisma } from '~/prisma-client'

export interface IContext {
  db: Prisma
}
export const contextFromReq = async (req: ContextParameters): Promise<IContext> => ({
  db: prisma
})