import type { Metadata } from 'next'
import ProgramaPageContent from '@/components/pages/ProgramaPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'

const t = getPagesDict('de')

export const metadata: Metadata = {
  title: t.programa.title,
  description: t.programa.subtitle,
  alternates: getAlternates('/programa', 'de'),
}

export default function Page() { return <ProgramaPageContent locale="de" /> }
