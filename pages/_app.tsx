import '../styles/globals.css'
import 'corpjorge-bcs-sass/dist/css/bcs.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
