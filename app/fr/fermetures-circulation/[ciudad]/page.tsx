import type { Metadata } from 'next'
import CortesCiudadPage, { CORTES_CITIES, getCortesCityMeta } from '@/components/pages/CortesCiudadPage'
import { getAlternates } from '@/lib/i18n-metadata'

interface Props {
  params: { ciudad: string }
}

export function generateStaticParams() {
  return CORTES_CITIES.map((ciudad) => ({ ciudad }))
}

export function generateMetadata({ params }: Props): Metadata {
  const meta = getCortesCityMeta(params.ciudad, 'fr')
  return {
    title: meta.title,
    description: meta.description,
    alternates: getAlternates(`/cortes-trafico/${params.ciudad}`, 'fr'),
  }
}

export default function Page({ params }: Props) {
  return <CortesCiudadPage locale="fr" slug={params.ciudad} />
}
