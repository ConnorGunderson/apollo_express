import { Auth0Provider } from '@auth0/auth0-react'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      audience={process.env.AUTH0_AUDIENCE}
    >
      {children}
    </Auth0Provider>
  )
}
