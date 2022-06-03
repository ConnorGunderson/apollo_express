import { AppState, Auth0Provider } from '@auth0/auth0-react'
import Router from 'next/router'

interface AuthProviderProps {
  children: React.ReactNode
}

const onRedirectCallback = (appState?: AppState) => {
  Router.replace(appState?.returnTo || '/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENTID!}
      redirectUri="http://localhost:4000"
      onRedirectCallback={onRedirectCallback}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
    >
      {children}
    </Auth0Provider>
  )
}
