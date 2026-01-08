import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/aluminate.svg" type="image/svg+xml" />
        
        {/* Character encoding */}
        <meta charSet="utf-8" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Performance and Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL - will be overridden per page */}
        <link rel="canonical" href="https://cse-aluminate.cse.club" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
