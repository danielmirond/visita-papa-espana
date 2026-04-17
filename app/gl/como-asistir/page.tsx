import type { Metadata } from 'next'
import ComingSoonPage from '@/components/pages/ComingSoonPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('gl')

export const metadata: Metadata = {
  title: dict.nav.comoAsistir,
  alternates: getAlternates('/como-asistir', 'gl'),
}

export default function Page() {
  return <ComingSoonPage locale="gl" pageTitle={dict.nav.comoAsistir} pagePath="/como-asistir" />
}
