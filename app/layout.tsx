import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | GemuCube Solutions',
    default: 'GemuCube Solutions — Business & IT Partnership Firm Philippines',
  },
  description:
    'GemuCube Solutions partners with startups and growing businesses to build systems, automate operations, and scale technology. IT operations partner based in the Philippines.',
  keywords: [
    'business IT partnership firm',
    'IT operations partner Philippines',
    'fractional CTO Philippines',
    'CRM implementation Philippines',
    'business automation partner Philippines',
    'embedded IT team Philippines',
  ],
  metadataBase: new URL('https://gemucube.com'),
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://gemucube.com',
    siteName: 'GemuCube Solutions',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#080808] text-[#f0f0f0] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
