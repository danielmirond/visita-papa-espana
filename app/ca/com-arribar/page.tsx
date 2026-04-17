import type { Metadata } from 'next'
import ComingSoonPage from '@/components/pages/ComingSoonPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('ca')

export const metadata: Metadata = {
  title: dict.nav.comoAsistir,
  alternates: getAlternates('/como-llegar', 'ca'),
}

export default function Page() {
  return <ComingSoonPage locale="ca" pageTitle="com-arribar" pagePath="/como-llegar" />
}
