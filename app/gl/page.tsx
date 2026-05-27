import type { Metadata } from 'next'
import LocalizedHome from '@/components/home/LocalizedHome'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'
import { getMetadataOgImages } from '@/lib/og-image-generator'

const dict = getDictionary('gl')

export const metadata: Metadata = {
  title: `${dict.home.heroTitle} ${dict.home.heroCountry}`,
  alternates: getAlternates('', 'gl'),
  openGraph: {
    images: getMetadataOgImages('papa-leon-xiv', 'gl'),
  },
}

export default function Page() { return <LocalizedHome locale="gl" /> }
