import { ApolloProvider } from '@apollo/client'
import { expressClient } from '../lib/apollo'

interface AuthApolloProviderProps {
  children: React.ReactNode
}

export function AuthApolloProvider({ children }: AuthApolloProviderProps) {
  return <ApolloProvider client={expressClient}>{children}</ApolloProvider>
}
