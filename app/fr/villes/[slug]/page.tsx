import type { Metadata } from "next"
import CiudadDetailPage from "@/components/pages/CiudadDetailPage"
import { cities, getCityBySlug } from "@/data/cities"
import { getCitiesByLocale } from "@/data/i18n/content/cities"
import { getAlternates } from "@/lib/i18n-metadata"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.slug)
  if (!city) return {}
  const localized = getCitiesByLocale("fr").find((c) => c.slug === params.slug)
  const cityName = localized?.name || city.name
  const start = new Date(city.papalDates.start)
  const end = new Date(city.papalDates.end)
  const fmt = (d: Date) => d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })
  const datesLabel = start.toDateString() === end.toDateString() ? fmt(start) : `${fmt(start)} — ${fmt(end)}`
  return {
    title: `Pope Leo XIV in ${cityName} · ${datesLabel} 2026`,
    description: `Programme, events, how to attend, transport and accommodation for Pope Leo XIV\u2019s visit to ${cityName} (${datesLabel} 2026). Map, weather and practical guide.`,
    alternates: getAlternates(`/ciudades/${params.slug}`, "fr"),
    openGraph: {
      images: [{ url: `/images/cities/${city.slug}.webp`, width: 1200, height: 630, alt: `${cityName} — Pope Leo XIV` }],
    },
  }
}

export default function Page({ params }: Props) {
  return <CiudadDetailPage locale="fr" slug={params.slug} />
}
