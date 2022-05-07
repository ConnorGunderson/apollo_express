import { ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'
import { createApolloClient, expressClient } from '../lib/apollo'

interface AuthApolloProviderProps {
  children: React.ReactNode
}

export function AuthApolloProvider({ children }: AuthApolloProviderProps) {
  const { getAccessTokenSilently } = useAuth0()

  const authMiddleware = setContext(async (_, prevContext) => {
    const token = await getAccessTokenSilently({
      audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
    })

    return {
      headers: {
        ...prevContext.headers,
        authorization: `Bearer ${token}`,
      },
    }
  })

  const client = createApolloClient(authMiddleware)

  return <ApolloProvider client={expressClient}>{children}</ApolloProvider>
}
