import { ApolloClient, InMemoryCache } from '@apollo/client'

export const expressClient = new ApolloClient({
  uri: process.env.EXPRESS_API_URI,
  cache: new InMemoryCache(),
})

// export const rocketClient = new ApolloClient({
//   uri: process.env.APOLLO_API_URI,
//   cache: new InMemoryCache(),
// })
