import type { Metadata } from 'next'
import ProgramaPageContent from '@/components/pages/ProgramaPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const t = getPagesDict('es')

const seo = getSeoMeta('programa', 'es')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/programa', 'es'),
}

export default function Page() {
  return <ProgramaPageContent locale="es" />
}
