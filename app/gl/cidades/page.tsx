import type { Metadata } from 'next'
import CiudadesPageContent from '@/components/pages/CiudadesPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const t = getPagesDict('gl')

const seo = getSeoMeta('ciudades', 'gl')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/ciudades', 'gl'),
}

export default function Page() { return <CiudadesPageContent locale="gl" /> }
