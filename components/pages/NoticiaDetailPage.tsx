import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getNewsByLocale } from '@/data/i18n/content/news'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getDictionary } from '@/data/i18n/dictionaries'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { newsArticleSchema } from '@/lib/schema/generators'

const BACK_LABELS: Record<Locale, string> = {
  es: 'Todas las noticias',
  en: 'All news',
  it: 'Tutte le notizie',
  fr: 'Toutes les actualités',
  de: 'Alle Nachrichten',
  pt: 'Todas as notícias',
  ca: 'Totes les notícies',
  gl: 'Todas as novas',
  eu: 'Albiste guztiak',
}
const SOURCE_LABELS: Record<Locale, string> = {
  es: 'Fuente',
  en: 'Source',
  it: 'Fonte',
  fr: 'Source',
  de: 'Quelle',
  pt: 'Fonte',
  ca: 'Font',
  gl: 'Fonte',
  eu: 'Iturria',
}

export default function NoticiaDetailPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const news = getNewsByLocale(locale)
  const cities = getCitiesByLocale(locale)
  const nav = getDictionary(locale)
  const article = news.find((n) => n.slug === slug)
  if (!article) notFound()

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: nav.nav.noticias, href: localizePath('/noticias', locale) },
    { name: article.title, href: localizePath(`/noticias/${article.slug}`, locale) },
  ]

  return (
    <>
      <JsonLd data={newsArticleSchema(article, locale)} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-10">
          <Link
            href={localizePath('/noticias', locale)}
            className="text-sm text-papal-gold hover:underline"
          >
            &larr; {BACK_LABELS[locale]}
          </Link>
        </Container>
      </section>

      <Container className="py-10">
        <article className="mx-auto max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-papal-navy/40">{article.date}</span>
            {article.source && (
              <span className="text-sm text-papal-navy/40">&middot; {article.source}</span>
            )}
          </div>
          <h1 className="mt-3 font-heading text-3xl font-bold text-papal-navy">{article.title}</h1>

          <div className="mt-2 flex flex-wrap gap-1">
            {article.relatedCities.map((slug) => {
              const city = cities.find((c) => c.slug === slug)
              return city ? (
                <Link
                  key={slug}
                  href={localizePath(`/ciudades/${slug}`, locale)}
                  className="rounded bg-gray-100 px-2 py-0.5 text-xs text-papal-navy/60 hover:bg-papal-cream"
                >
                  {city.name}
                </Link>
              ) : null
            })}
          </div>

          <div className="mt-8 space-y-4 leading-relaxed text-papal-navy/80">
            {article.content.split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {article.sourceUrl && (
            <div className="mt-8 rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-papal-navy/60">
                {SOURCE_LABELS[locale]}:{' '}
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
            <Link
              href={localizePath('/noticias', locale)}
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              &larr; {BACK_LABELS[locale]}
            </Link>
          </div>
        </article>
      </Container>
    </>
  )
}
