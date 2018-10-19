import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from '~/resolvers'

export const typeDefs = importSchema('./src/graphql/schema.graphql')

export const buildSchema = () => {
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  })
}

export const schema = buildSchema()
