import type { Metadata } from 'next'
import CiudadesPageContent from '@/components/pages/CiudadesPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'

const t = getPagesDict('ca')

export const metadata: Metadata = {
  title: t.ciudades.title,
  description: t.ciudades.subtitle,
  alternates: getAlternates('/ciudades', 'ca'),
}

export default function Page() { return <CiudadesPageContent locale="ca" /> }
