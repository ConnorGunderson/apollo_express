import { ApolloServer, Config, ExpressContext } from 'apollo-server-express'
import express from 'express'
import { authRouter } from '../routes'
import { schema } from './nexus'

require('dotenv').config()

export const startServer = async (
  typeDefs?: Config<ExpressContext>['typeDefs'],
  resolvers?: Config<ExpressContext>['resolvers']
) => {
  const app = express()

  // // Init Apollo
  const server = new ApolloServer({ typeDefs, resolvers, schema })
  await server.start()

  // // wrap express server around Apollo
  server.applyMiddleware({ app })

  // custom routes and application config
  app.use(express.urlencoded({ extended: true }))
  app.use('/auth', authRouter)

  // start server
  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server currently listening \nPORT: ${process.env.PORT} \nGraphQL: ${server.graphqlPath} \nAuth: /auth`
    )
  })
}
