import { ApolloServer, Config, ExpressContext } from 'apollo-server-express'
import express from 'express'
import { schema } from './nexus'

export const startServer = (
  typeDefs?: Config<ExpressContext>['typeDefs'],
  resolvers?: Config<ExpressContext>['resolvers']
) => {
  const app = express()
  const server = new ApolloServer({ typeDefs, resolvers, schema })
  server.applyMiddleware({ app })

  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server currently listening on port ${process.env.PORT} ${server.graphqlPath}`
    )
  })
}
