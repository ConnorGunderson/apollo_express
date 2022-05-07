import { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default CustomApp
