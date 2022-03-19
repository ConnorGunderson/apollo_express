import { ApolloServer, Config, ExpressContext } from 'apollo-server-express'
import express from 'express'
import { authRouter } from '../routes'
import { schema } from './nexus'
import { context } from './prisma'

require('dotenv').config()

export const startServer = async () => {
  const app = express()

  // init Apollo
  const server = new ApolloServer({ schema, context })
  await server.start()

  // wrap express server around Apollo
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
