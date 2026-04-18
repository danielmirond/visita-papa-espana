import type { Metadata } from 'next'
import NoticiasPageContent from '@/components/pages/NoticiasPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('noticias', 'de')

export const metadata: Metadata = {
  alternates: getAlternates('/noticias', 'de'),
}

export default function Page() { return <NoticiasPageContent locale="de" /> }
