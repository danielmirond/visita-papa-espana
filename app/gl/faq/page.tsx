import type { Metadata } from 'next'
import FaqPageContent from '@/components/pages/FaqPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const t = getPagesDict('gl')

const seo = getSeoMeta('faq', 'gl')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/faq', 'gl'),
}

export default function Page() { return <FaqPageContent locale="gl" /> }
