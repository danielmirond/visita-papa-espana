import type { Metadata } from 'next'
import NoticiasPageContent from '@/components/pages/NoticiasPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('noticias', 'it')

export const metadata: Metadata = {
  alternates: getAlternates('/noticias', 'it'),
}

export default function Page() { return <NoticiasPageContent locale="it" /> }
