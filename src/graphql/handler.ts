import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { ENV } from '~/common/consts'
import { contextFromExpressReq } from './context'
import { schema } from './schema'

export const graphqlHandler = graphqlExpress(async (req) => ({
  schema,
  debug: process.env.NODE_ENV !== ENV.prod,
  context: await contextFromExpressReq(req),
}))

export const graphiqlHandler = graphiqlExpress({ endpointURL: '/graphql' })
