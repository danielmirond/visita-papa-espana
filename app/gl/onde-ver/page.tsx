import type { Metadata } from 'next'
import DondeVerPageContent from '@/components/pages/DondeVerPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('donde-ver', 'gl')

export const metadata: Metadata = {
  alternates: getAlternates('/donde-ver', 'gl'),
}

export default function Page() { return <DondeVerPageContent locale="gl" /> }
