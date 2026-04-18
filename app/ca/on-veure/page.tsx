import type { Metadata } from 'next'
import DondeVerPageContent from '@/components/pages/DondeVerPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('donde-ver', 'ca')

export const metadata: Metadata = {
  alternates: getAlternates('/donde-ver', 'ca'),
}

export default function Page() { return <DondeVerPageContent locale="ca" /> }
