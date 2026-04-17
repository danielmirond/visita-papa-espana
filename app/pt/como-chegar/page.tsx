import type { Metadata } from 'next'
import ComingSoonPage from '@/components/pages/ComingSoonPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('pt')

export const metadata: Metadata = {
  title: dict.nav.comoAsistir,
  alternates: getAlternates('/como-llegar', 'pt'),
}

export default function Page() {
  return <ComingSoonPage locale="pt" pageTitle="como-chegar" pagePath="/como-llegar" />
}
