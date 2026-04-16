import type { Metadata } from 'next'
import ProgramaPageContent from '@/components/pages/ProgramaPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'

const t = getPagesDict('eu')

export const metadata: Metadata = {
  title: t.programa.title,
  description: t.programa.subtitle,
  alternates: getAlternates('/programa', 'eu'),
}

export default function Page() { return <ProgramaPageContent locale="eu" /> }
