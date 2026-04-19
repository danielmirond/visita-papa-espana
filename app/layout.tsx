import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/layout/Header'
import UnofficialNotice from '@/components/shared/UnofficialNotice'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'
import CookieBanner from '@/components/shared/CookieBanner'
import { siteConfig } from '@/data/siteConfig'
import {
  organizationSchema,
  popeLeoPersonSchema,
  webSiteSchema,
} from '@/lib/schema/generators'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#1B2A4A',
  width: 'device-width',
  initialScale: 1,
}

/**
 * Metadata a nivel de layout: NO incluye canonical ni alternates.
 * Cada página los define con getAlternates(path, locale).
 *
 * Solo contiene:
 * - título / descripción por defecto
 * - iconos, manifest
 * - verificación Search Console
 * - robots
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'Papa León XIV',
    'visita Papa España 2026',
    'Papa Madrid',
    'Papa Barcelona',
    'Papa Canarias',
    'Sagrada Familia',
    'Alzad la mirada',
    'visita papal',
    'León XIV España',
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/hero/papa-leon-xiv.webp',
        width: 1200,
        height: 800,
        alt: 'Papa León XIV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/images/hero/papa-leon-xiv.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/hero/papa-leon-xiv.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <GoogleAnalytics />
        {/*
          Schemas globales (en cada página):
          - Organization: identidad del sitio
          - WebSite: permite sitelinks searchbox
          - Person: Papa León XIV con sameAs a Wikidata/Wikipedia
            (se referencia por @id desde los Event schemas)
        */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema('es')} />
        <JsonLd data={popeLeoPersonSchema()} />
        <UnofficialNotice />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
