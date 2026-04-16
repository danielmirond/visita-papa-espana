import type { Metadata } from 'next'
import FaqPageContent from '@/components/pages/FaqPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'

const t = getPagesDict('pt')

export const metadata: Metadata = {
  title: t.faq.title,
  description: t.faq.subtitle,
  alternates: getAlternates('/faq', 'pt'),
}

export default function Page() { return <FaqPageContent locale="pt" /> }
