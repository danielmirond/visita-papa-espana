import type { Metadata } from 'next'
import LocalizedHome from '@/components/home/LocalizedHome'
import { getAlternates } from '@/lib/i18n-metadata'
import { getMetadataOgImages } from '@/lib/og-image-generator'

export const metadata: Metadata = {
  alternates: getAlternates('', 'es'),
  openGraph: {
    images: getMetadataOgImages('papa-leon-xiv', 'es'),
  },
}

export default function Page() {
  return <LocalizedHome locale="es" />
}
