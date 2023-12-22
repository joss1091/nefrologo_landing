import { AppProps } from 'next/app'


import '../styles/libraries.css'
import "../styles/scss/style.scss"
// import '../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
