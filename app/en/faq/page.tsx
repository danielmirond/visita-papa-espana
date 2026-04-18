import type { Metadata } from 'next'
import FaqPageContent from '@/components/pages/FaqPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const t = getPagesDict('en')

const seo = getSeoMeta('faq', 'en')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/faq', 'en'),
}

export default function Page() { return <FaqPageContent locale="en" /> }
