import type { Metadata } from 'next'
import GuiaListPageContent from '@/components/pages/GuiaListPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const dict = getDictionary('en')

const seo = getSeoMeta('guia', 'en')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  alternates: getAlternates('/guia', 'en'),
}

export default function Page() { return <GuiaListPageContent locale="en" /> }
