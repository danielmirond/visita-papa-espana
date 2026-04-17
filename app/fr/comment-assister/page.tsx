import type { Metadata } from 'next'
import ComingSoonPage from '@/components/pages/ComingSoonPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('fr')

export const metadata: Metadata = {
  title: dict.nav.comoAsistir,
  alternates: getAlternates('/como-asistir', 'fr'),
}

export default function Page() {
  return <ComingSoonPage locale="fr" pageTitle={dict.nav.comoAsistir} pagePath="/como-asistir" />
}
