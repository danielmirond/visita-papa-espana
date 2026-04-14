import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { news } from '@/data/news'
import { cities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Noticias sobre la visita',
  description: 'Ultimas noticias y actualizaciones sobre la visita del Papa Leon XIV a Espana en junio de 2026.',
}

export default function NoticiasPage() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Noticias
          </h1>
          <p className="mt-3 text-white/70">
            Ultimas novedades sobre la visita del Papa Leon XIV a Espana
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-6">
          {sortedNews.map((article) => (
            <Link
              key={article.slug}
              href={`/noticias/${article.slug}`}
              className="group block rounded-xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-papal-navy/40">{article.date}</span>
                {article.relatedCities.map((slug) => {
                  const city = cities.find((c) => c.slug === slug)
                  return city ? (
                    <span key={slug} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-papal-navy/60">
                      {city.name}
                    </span>
                  ) : null
                })}
                {article.source && (
                  <span className="text-xs text-papal-navy/40">
                    Fuente: {article.source}
                  </span>
                )}
              </div>
              <h2 className="mt-2 font-heading text-xl font-bold text-papal-navy group-hover:text-papal-gold">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-papal-navy/60">
                {article.excerpt}
              </p>
              <p className="mt-3 text-sm font-medium text-papal-gold">
                Leer mas &rarr;
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
