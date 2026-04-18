import type { Metadata } from 'next'
import MapaPageContent from '@/components/pages/MapaPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('mapa', 'pt')

export const metadata: Metadata = {
  alternates: getAlternates('/mapa', 'pt'),
}

export default function Page() { return <MapaPageContent locale="pt" /> }
