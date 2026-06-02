import type { Metadata } from 'next'
import NoticiaDetailPageContent from '@/components/pages/NoticiaDetailPage'
import { getNewsByLocale } from '@/data/i18n/content/news'
import { newsMetadata } from '@/lib/i18n-metadata'

export function generateStaticParams() {
  return getNewsByLocale('de').map((n) => ({ slug: n.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getNewsByLocale('de').find(n => n.slug === params.slug)
  if (!article) return {}
  return newsMetadata(article, params.slug, 'de')
}

export default function Page({ params }: { params: { slug: string } }) {
  return <NoticiaDetailPageContent locale="de" slug={params.slug} />
}
