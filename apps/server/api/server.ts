import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './schema'
import { context } from './context'
import { expressjwt as jwt } from 'express-jwt'
import jwks from 'jwks-rsa'
require('dotenv').config()

const corsOptions = {
  origin: ['http://localhost:4000'],
  path: '/graphql',
  credentials: true,
}

export const startServer = async () => {
  const app = express()

  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.JWT_JWKS_URI as string,
    }) as jwks.GetVerificationKey,
    audience: process.env.JWT_AUDIENCE,
    issuer: process.env.JWT_ISSUER,
    algorithms: ['RS256'],
  })

  app.use(jwtCheck)

  // express middleware setup
  app.use(express.urlencoded({ extended: true }))

  const server = new ApolloServer({ schema, context, csrfPrevention: true })
  await server.start()

  server.applyMiddleware({ app, cors: corsOptions })

  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server currently listening \nPORT: ${process.env.PORT} \nGraphQL: ${server.graphqlPath}`
    )
  })
}
