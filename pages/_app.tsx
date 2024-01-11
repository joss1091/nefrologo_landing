import { AppProps } from 'next/app'


import '../styles/libraries.css'
import '../styles/slicky-carousel.css'
import "../styles/scss/style.scss"
import "@fortawesome/fontawesome-free/css/all.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
