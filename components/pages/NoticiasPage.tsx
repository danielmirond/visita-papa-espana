import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getNewsByLocale } from '@/data/i18n/content/news'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

const NEWS_TITLES: Record<Locale, { title: string; subtitle: string; readMore: string }> = {
  es: { title: 'Noticias', subtitle: 'Últimas novedades sobre la visita del Papa León XIV a España', readMore: 'Leer más' },
  en: { title: 'News', subtitle: 'Latest updates on Pope Leo XIV’s visit to Spain', readMore: 'Read more' },
  it: { title: 'Notizie', subtitle: 'Ultime novità sulla visita di Papa Leone XIV in Spagna', readMore: 'Leggi di più' },
  fr: { title: 'Actualités', subtitle: 'Dernières actualités sur la visite du Pape Léon XIV en Espagne', readMore: 'Lire la suite' },
  de: { title: 'Nachrichten', subtitle: 'Neueste Meldungen zum Besuch von Papst Leo XIV. in Spanien', readMore: 'Mehr lesen' },
  pt: { title: 'Notícias', subtitle: 'Últimas novidades sobre a visita do Papa Leão XIV a Espanha', readMore: 'Ler mais' },
  ca: { title: 'Notícies', subtitle: 'Últimes novetats sobre la visita del Papa Lleó XIV a Espanya', readMore: 'Llegir més' },
  gl: { title: 'Novas', subtitle: 'Últimas novas sobre a visita do Papa León XIV a España', readMore: 'Ler máis' },
  eu: { title: 'Albisteak', subtitle: 'Leon XIV.a Aita Santuaren Espainiarako bisitaldiari buruzko azken albisteak', readMore: 'Irakurri gehiago' },
}

export default function NoticiasPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const news = getNewsByLocale(locale)
  const cities = getCitiesByLocale(locale)
  const t = NEWS_TITLES[locale]

  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date))

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.title, href: localizePath('/noticias', locale) },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-6">
          {sortedNews.map((article) => (
            <Link
              key={article.slug}
              href={localizePath(`/noticias/${article.slug}`, locale)}
              className="group block rounded-xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-papal-navy/40">{article.date}</span>
                {article.relatedCities.map((slug) => {
                  const city = cities.find((c) => c.slug === slug)
                  return city ? (
                    <span
                      key={slug}
                      className="rounded bg-gray-100 px-2 py-0.5 text-xs text-papal-navy/60"
                    >
                      {city.name}
                    </span>
                  ) : null
                })}
                {article.source && (
                  <span className="text-xs text-papal-navy/40">· {article.source}</span>
                )}
              </div>
              <h2 className="mt-2 font-heading text-xl font-bold text-papal-navy group-hover:text-papal-gold">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-papal-navy/60">{article.excerpt}</p>
              <p className="mt-3 text-sm font-medium text-papal-gold">{t.readMore} →</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
