import { AppProps } from 'next/app'
import "@fortawesome/fontawesome-free/scss/solid.scss"
import "@fortawesome/fontawesome-free/scss/regular.scss"
import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import '../styles/libraries.css'
import '../styles/slicky-carousel.css'
import "../styles/scss/style.scss"
import {initializeGoogleTagManager} from "../lib/tagmanager_initialize"


import Script from 'next/script'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() =>{
    initializeGoogleTagManager("GTM-T8CBV7F7")
  }
  ,[])
  return (
  <>

  
       <Component {...pageProps} />
  </>
  )
}

export default MyApp
