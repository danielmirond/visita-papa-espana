import type { Metadata } from 'next'
import NoticiasPageContent from '@/components/pages/NoticiasPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  alternates: getAlternates('/noticias', 'pt'),
}

export default function Page() { return <NoticiasPageContent locale="pt" /> }
