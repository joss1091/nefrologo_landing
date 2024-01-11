import { AppProps } from 'next/app'


import '../styles/libraries.css'
import '../styles/slicky-carousel.css'
import "../styles/scss/style.scss"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Script id="doctoralia">
       {`!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");`}
       </Script>
       <Component {...pageProps} />
  </>
  )
}

export default MyApp
