import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import LiveBroadcast from '@/components/home/LiveBroadcast'
import JsonLd from '@/components/seo/JsonLd'
import { liveblogMadrid7 } from '@/data/liveblog'
import { liveblogSchema } from '@/lib/schema/generators'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'visita-papa-madrid-misa-cibeles-movistar-arena-7-junio-directo'

export const metadata: Metadata = {
  title: 'Misa del Papa en Cibeles y Movistar Arena, en directo (7 de junio)',
  description:
    'Sigue en directo el segundo día del Papa León XIV en Madrid: la gran misa del Corpus Christi en la plaza de Cibeles, el Ángelus y el encuentro con la cultura, el arte y el deporte en el Movistar Arena. Vídeo y minuto a minuto.',
  alternates: { canonical: `${siteConfig.url}/es/${SLUG}` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Misa del Papa en Cibeles y Movistar Arena, en directo',
    description: 'Vídeo en directo y minuto a minuto de la misa del Corpus en Cibeles y del encuentro en el Movistar Arena.',
    images: [{ url: `${siteConfig.url}/images/og/papa-directo-1200x675.jpg`, width: 1200, height: 675, alt: 'Misa del Papa León XIV en Madrid' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misa del Papa en Cibeles y Movistar Arena, en directo',
    images: [`${siteConfig.url}/images/og/papa-directo-1200x675.jpg`],
  },
}

// Directos oficiales para contrastar el minuto a minuto.
const FUENTES_DIRECTO = [
  { name: 'El Español', url: 'https://www.elespanol.com/madrid/20260607/visita-papa-leon-xiv-madrid-directo-horario-misa-cibeles-cortes-trafico-agenda-oficial-actos-domingo/1003744276656_10.html' },
  { name: 'OKDiario', url: 'https://okdiario.com/espana/visita-del-papa-leon-xiv-madrid-7-junio-directo-misa-del-corpus-christi-cibeles-agenda-completa-horarios-calles-cortadas-como-llegar-17933286' },
  { name: 'ABC', url: 'https://www.abc.es/sociedad/visita-papa-leon-xiv-madrid-directo-llega-20260605145954-di.html' },
  { name: 'Europa Press', url: 'https://www.europapress.es/sociedad/noticia-visita-papa-espana-2026-directo-agenda-recorrido-discursos-anecdotas-ultima-hora-leon-xiv-20260606055952.html' },
]

export default function EnDirectoMisaCibeles() {
  const lb = liveblogMadrid7
  // Orden cronológico robusto (las fuentes mezclan offsets Z y +02:00).
  const orderedEntries = [...lb.entries].sort(
    (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
  )

  return (
    <>
      <JsonLd data={liveblogSchema(lb, 'es')} />

      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <span className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> EN DIRECTO
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">{lb.headline}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">{lb.description}</p>
        </Container>
      </section>

      {/* Vídeo en directo */}
      <LiveBroadcast locale="es" alwaysEmbed />

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Última hora oficial */}
          <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">📰 Última hora en otros medios</h2>
            <div className="flex flex-wrap gap-2">
              {FUENTES_DIRECTO.map((f) => (
                <a
                  key={f.url}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-papal-navy px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-papal-navy/90"
                >
                  {f.name} →
                </a>
              ))}
            </div>
          </div>

          {/* Feed de actualizaciones (liveblog) */}
          <div>
            <p className="mb-5 font-heading text-2xl font-bold text-papal-navy">Minuto a minuto</p>
            <ol className="relative space-y-8 border-l-2 border-papal-gold/30 pl-6">
              {orderedEntries.map((e) => (
                <li key={e.datetime} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-papal-gold ring-4 ring-white" />
                  <time dateTime={e.datetime} className="text-sm font-bold text-papal-gold-dark">
                    {e.time}
                  </time>
                  <h2 className="mt-1 font-heading text-xl font-bold text-papal-navy">{e.title}</h2>
                  <p className="mt-1 text-papal-navy/75">{e.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs text-papal-navy/50">
              Redacción propia a partir de la agenda oficial y de la cobertura de RTVE, El País, El Mundo, ABC y Europa
              Press. Horarios aproximados; pueden ajustarse por seguridad.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/programa/7-junio" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Programa del día
            </Link>
            <Link href="/es/cortes-trafico/madrid" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Cortes de tráfico y metro
            </Link>
            <Link href="/es/en-directo-madrid-6-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              El directo del día 6
            </Link>
            <Link href="/es/donde-ver" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Dónde ver
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
