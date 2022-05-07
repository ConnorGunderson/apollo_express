import { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { AuthApolloProvider } from '../providers/AuthApolloProvider'
import { AuthProvider } from '../providers/AuthProvider'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AuthApolloProvider>
        <Head>
          <title>Welcome to client!</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthApolloProvider>
    </AuthProvider>
  )
}

export default CustomApp
