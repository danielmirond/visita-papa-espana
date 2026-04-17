import type { Metadata } from 'next'
import { getProfilesByLocale, getProfileBySlugLocale } from '@/data/i18n/content/perfiles'
import GuiaDetailPageContent from '@/components/pages/GuiaDetailPage'
import { getAlternates } from '@/lib/i18n-metadata'

export function generateStaticParams() {
  return getProfilesByLocale('it').map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProfileBySlugLocale('it', params.slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    alternates: getAlternates(`/guia/${params.slug}`, 'it'),
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <GuiaDetailPageContent locale="it" slug={params.slug} />
}
