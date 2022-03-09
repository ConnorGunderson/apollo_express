import { ApolloServer, Config, ExpressContext } from 'apollo-server-express'
import express from 'express'
import { schema } from './nexus'
require('dotenv').config()

export const startServer = async (
  typeDefs?: Config<ExpressContext>['typeDefs'],
  resolvers?: Config<ExpressContext>['resolvers']
) => {
  const app = express()
  const server = new ApolloServer({ typeDefs, resolvers, schema })
  await server.start()

  server.applyMiddleware({ app })

  app.use(express.urlencoded({ extended: true }))

  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server currently listening \nPORT: ${process.env.PORT} \nGraphQL: ${server.graphqlPath}`
    )
  })
}
