import type { Metadata } from 'next'
import ComingSoonPage from '@/components/pages/ComingSoonPage'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAlternates } from '@/lib/i18n-metadata'

const dict = getDictionary('eu')

export const metadata: Metadata = {
  title: dict.nav.comoAsistir,
  alternates: getAlternates('/como-llegar', 'eu'),
}

export default function Page() {
  return <ComingSoonPage locale="eu" pageTitle="nola-heldu" pagePath="/como-llegar" />
}
