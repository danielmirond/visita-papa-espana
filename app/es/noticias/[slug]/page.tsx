import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { news, getNewsBySlug } from '@/data/news'
import { cities } from '@/data/cities'
import { getAlternates } from '@/lib/i18n-metadata'
import { newsArticleSchema } from '@/lib/schema/generators'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getNewsBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: getAlternates(`/noticias/${params.slug}`, 'es'),
  }
}

export default function NoticiaPage({ params }: Props) {
  const article = getNewsBySlug(params.slug)
  if (!article) notFound()

  const breadcrumbs = [
    { name: 'Inicio', href: localizePath('/', 'es') },
    { name: 'Noticias', href: localizePath('/noticias', 'es') },
    { name: article.title, href: localizePath(`/noticias/${article.slug}`, 'es') },
  ]

  return (
    <>
      {/* NewsArticle rico: author, publisher, mainEntityOfPage, mentions (entidades detectadas) */}
      <JsonLd data={newsArticleSchema(article, 'es')} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-10">
          <Link href={localizePath('/noticias', 'es')} className="text-sm text-papal-gold hover:underline">
            &larr; Todas las noticias
          </Link>
        </Container>
      </section>

      <Container className="py-10">
        <article className="mx-auto max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-papal-navy/40">{article.date}</span>
            {article.source && (
              <span className="text-sm text-papal-navy/40">
                &middot; {article.source}
              </span>
            )}
          </div>
          <h1 className="mt-3 font-heading text-3xl font-bold text-papal-navy">
            {article.title}
          </h1>

          <div className="mt-2 flex flex-wrap gap-1">
            {article.relatedCities.map((slug) => {
              const city = cities.find((c) => c.slug === slug)
              return city ? (
                <Link
                  key={slug}
                  href={`/ciudades/${slug}`}
                  className="rounded bg-gray-100 px-2 py-0.5 text-xs text-papal-navy/60 hover:bg-papal-cream"
                >
                  {city.name}
                </Link>
              ) : null
            })}
          </div>

          <div className="mt-8 space-y-4 text-papal-navy/80 leading-relaxed">
            {article.content.split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {article.sourceUrl && (
            <div className="mt-8 rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-papal-navy/60">
                Fuente:{' '}
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-papal-gold hover:underline"
                >
                  {article.source || article.sourceUrl}
                </a>
              </p>
            </div>
          )}

          <div className="mt-8 border-t border-gray-100 pt-6">
            <Link href="/noticias" className="text-sm font-medium text-papal-gold hover:underline">
              &larr; Ver todas las noticias
            </Link>
          </div>
        </article>
      </Container>
    </>
  )
}
