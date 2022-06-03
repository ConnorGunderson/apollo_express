import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_EXPRESS_API_URI,
  credentials: 'include',
})

export const createApolloClient = (middleware: ApolloLink) =>
  new ApolloClient({
    link: middleware.concat(httpLink),
    cache: new InMemoryCache(),
  })
