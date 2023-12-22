import { AppProps } from 'next/app'


import '../styles/libraries.css'

import '../styles/slicky-carousel.css'
import "../styles/scss/style.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
