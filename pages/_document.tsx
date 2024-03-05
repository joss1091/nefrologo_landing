import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'
export default function Document() {
  return (
    <Html lang="en" >
      <Head>

      
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Roboto:wght@400;700&display=swap"
        />
       
      </Head>

      <body>
      
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
