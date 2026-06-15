import './globals.css'

export const metadata = {
  metadataBase: new URL('https://smallclaimshelper.com'),
  title: {
    default: 'Free Small Claims Court Forms — All 50 States | SmallClaimsHelper.com',
    template: '%s | SmallClaimsHelper.com',
  },
  description: 'Free small claims court document builder for all 50 US states. Fill out your form online, get a ready-to-file PDF in minutes. No lawyer needed.',
  keywords: [
    'small claims court', 'small claims form', 'sue someone without a lawyer',
    'small claims court forms free', 'how to file small claims court',
    'small claims court all 50 states', 'free legal forms USA',
  ],
  authors: [{ name: 'SmallClaimsHelper' }],
  creator: 'SmallClaimsHelper',
  publisher: 'SmallClaimsHelper',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smallclaimshelper.com',
    siteName: 'SmallClaimsHelper',
    title: 'Free Small Claims Court Forms — All 50 States',
    description: 'Build your small claims court complaint in minutes. Free PDF generator for every US state.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SmallClaimsHelper — Free Small Claims Court Forms' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Small Claims Court Forms — All 50 States',
    description: 'Build your small claims court complaint in minutes. Free PDF for every US state.',
    images: ['/og-image.png'],
    creator: '@smallclaimshelp',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://smallclaimshelper.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* Structured data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SmallClaimsHelper',
              url: 'https://smallclaimshelper.com',
              description: 'Free small claims court document builder for all 50 US states.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://smallclaimshelper.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
