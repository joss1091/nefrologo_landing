import { AppProps } from 'next/app'
import '../styles/style.css'
import '../styles/libraries.css'
import "../styles/scss/style.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
