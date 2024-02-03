import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import meta from "../lib/data/meta"
const URL = "https://www.nefrologojosuemolina.com.mx"

import { useRouter } from 'next/router'
export default function Meta({title }) {
  const router = useRouter()
  const prefix = "Dr. Josue Molina | Nefrologo en Cancun | Especialista en nefrologia"
  return (
    <>
    <DefaultSeo 
      title={`${title}`}
      titleTemplate={` %s | ${prefix}`}
      defaultTitle="Especialista en Nefrologia"
      description={meta.description} 
      canonical={`${URL}${router.asPath}`}
      themeColor='#000'
      openGraph={{
        url: `${URL}${router.asPath}`,
        title: `${title} | ${prefix}`,
        description: meta.description,
        
        
        siteName: 'Dr ',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      />
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
     
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

     
      
     
    </Head>
    </>
  )
}
