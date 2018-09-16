// import { GraphQLServer } from 'graphql-yoga'
// import { resolvers } from './resolvers'
// import { prisma } from './prisma-client'

// const server = new GraphQLServer({
//   typeDefs: './src/schema.graphql',
//   resolvers,
//   context: {
//     db: prisma,
//   },
// } as any)

// server.start(() => console.log('Server is running on http://localhost:4000'))

import { IComponents, system } from './system'

const main = async () => {
  const components: IComponents = await system.start()
  console.log('System is up')

  const adminToken = await components.token.encode({
    id: '1',
    scopes: ['admin'],
  })
}

main()
.catch((err) => {
  console.log(err)
  process.exit(1)
})
