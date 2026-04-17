import type { Metadata } from 'next'
import { getProfilesByLocale, getProfileBySlugLocale } from '@/data/i18n/content/perfiles'
import GuiaDetailPageContent from '@/components/pages/GuiaDetailPage'
import { getAlternates } from '@/lib/i18n-metadata'

export function generateStaticParams() {
  return getProfilesByLocale('eu').map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProfileBySlugLocale('eu', params.slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    alternates: getAlternates(`/guia/${params.slug}`, 'eu'),
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <GuiaDetailPageContent locale="eu" slug={params.slug} />
}
