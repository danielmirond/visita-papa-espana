import type { Metadata } from 'next'
import CiudadDetailPage from '@/components/pages/CiudadDetailPage'
import { cities, getCityBySlug } from '@/data/cities'
import { getAlternates } from '@/lib/i18n-metadata'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.slug)
  if (!city) return {}
  const start = new Date(city.papalDates.start)
  const end = new Date(city.papalDates.end)
  const fmt = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })
  const datesLabel = start.toDateString() === end.toDateString() ? fmt(start) : `${fmt(start)} al ${fmt(end)}`
  return {
    title: `Visita del Papa León XIV a ${city.name} · ${datesLabel} 2026`,
    description: `Programa, actos, cómo asistir, cómo llegar y alojamiento para la visita del Papa León XIV a ${city.name} (${datesLabel} 2026). Mapa, meteo y guía práctica.`,
    alternates: getAlternates(`/ciudades/${params.slug}`, 'es'),
    openGraph: {
      images: [
        {
          url: `/images/cities/${city.slug}.webp`,
          width: 1200,
          height: 630,
          alt: `${city.name} — Visita Papa León XIV`,
        },
      ],
    },
  }
}

export default function Page({ params }: Props) {
  return <CiudadDetailPage locale="es" slug={params.slug} />
}
