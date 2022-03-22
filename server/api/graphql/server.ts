import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { authRouter } from '../routes'
import { schema } from './nexus'

require('dotenv').config()

const prisma = new PrismaClient()

export const startServer = async () => {
  const app = express()

  const server = new ApolloServer({ schema, context: () => ({ prisma }) })
  await server.start()

  server.applyMiddleware({ app })

  app.use(express.urlencoded({ extended: true }))
  app.use('/auth', authRouter)
  app.get('/', (_, res) => {
    res.redirect('/graphql')
  })

  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server currently listening \nPORT: ${process.env.PORT} \nGraphQL: ${server.graphqlPath} \nAuth: /auth`
    )
  })
}
