import type { Metadata } from 'next'
import LocalizedHome from '@/components/home/LocalizedHome'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('de')

export const metadata: Metadata = {
  title: `${dict.home.heroTitle} ${dict.home.heroCountry}`,
  alternates: getAlternates('', 'de'),
}

export default function Page() { return <LocalizedHome locale="de" /> }
