import { AppProps } from 'next/app'

import "../styles/scss/style.scss"
import '../styles/libraries.css'
// import '../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
