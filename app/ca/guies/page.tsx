import type { Metadata } from 'next'
import GuiaListPageContent from '@/components/pages/GuiaListPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const dict = getDictionary('ca')

const seo = getSeoMeta('guia', 'ca')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  alternates: getAlternates('/guia', 'ca'),
}

export default function Page() { return <GuiaListPageContent locale="ca" /> }
