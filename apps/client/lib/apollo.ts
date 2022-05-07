import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

export const expressClient = new ApolloClient({
  uri: process.env.EXPRESS_API_URI,
  cache: new InMemoryCache(),
})

const httpLink = new HttpLink({
  uri: process.env.EXPRESS_API_URI,
  credentials: 'include',
})

export const createApolloClient = (middleware: ApolloLink) =>
  new ApolloClient({
    link: middleware.concat(httpLink),
    cache: new InMemoryCache(),
  })
