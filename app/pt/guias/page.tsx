import type { Metadata } from 'next'
import ComingSoonPage from '@/components/pages/ComingSoonPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('pt')

export const metadata: Metadata = {
  title: dict.nav.guias,
  alternates: getAlternates('/guia', 'pt'),
}

export default function Page() {
  return <ComingSoonPage locale="pt" pageTitle={dict.nav.guias} pagePath="/guia" />
}
