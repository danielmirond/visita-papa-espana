import type { Metadata } from 'next'
import NoticiaDetailPageContent from '@/components/pages/NoticiaDetailPage'
import { getNewsByLocale } from '@/data/i18n/content/news'
import { getAlternates } from '@/lib/i18n-metadata'

export function generateStaticParams() {
  return getNewsByLocale('gl').map((n) => ({ slug: n.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getNewsByLocale('gl').find(n => n.slug === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: getAlternates(`/noticias/${params.slug}`, 'gl'),
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <NoticiaDetailPageContent locale="gl" slug={params.slug} />
}
