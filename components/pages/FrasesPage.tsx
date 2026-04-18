import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { frases, TEMAS_FRASE, type TemaFrase } from '@/data/frasesPapa'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: 'Frases',
    title: 'Frases célebres del Papa León XIV: citas por temas',
    subtitle:
      'Recopilación de las frases más significativas del Papa León XIV pronunciadas en discursos, homilías, mensajes y audiencias. Organizadas por tema y con referencia al momento exacto.',
    source: 'Fuente',
    occasion: 'Ocasión',
    quotesCount: 'citas',
    exploreAlso: 'Explora también',
  },
  en: {
    breadcrumb: 'Quotes',
    title: 'Pope Leo XIV\'s Famous Quotes: Sayings by Topic',
    subtitle:
      'Collection of Pope Leo XIV\'s most significant quotes from speeches, homilies, messages and audiences. Organised by topic and referenced to the exact moment.',
    source: 'Source',
    occasion: 'Occasion',
    quotesCount: 'quotes',
    exploreAlso: 'Explore also',
  },
  it: {
    breadcrumb: 'Citazioni',
    title: 'Citazioni celebri di Papa Leone XIV per tema',
    subtitle: 'Raccolta delle frasi più significative di Papa Leone XIV pronunciate in discorsi, omelie, messaggi e udienze. Ordinate per tema con riferimento al momento esatto.',
    source: 'Fonte',
    occasion: 'Occasione',
    quotesCount: 'citazioni',
    exploreAlso: 'Esplora anche',
  },
  fr: {
    breadcrumb: 'Citations',
    title: 'Citations célèbres du Pape Léon XIV par thème',
    subtitle: 'Recueil des phrases les plus significatives du Pape Léon XIV prononcées dans des discours, homélies, messages et audiences. Classées par thème avec référence au moment exact.',
    source: 'Source',
    occasion: 'Occasion',
    quotesCount: 'citations',
    exploreAlso: 'Explorer aussi',
  },
  de: {
    breadcrumb: 'Zitate',
    title: 'Berühmte Zitate von Papst Leo XIV nach Themen',
    subtitle: 'Sammlung der bedeutendsten Aussagen von Papst Leo XIV aus Reden, Predigten, Botschaften und Audienzen. Nach Themen geordnet mit Referenz zum genauen Moment.',
    source: 'Quelle',
    occasion: 'Anlass',
    quotesCount: 'Zitate',
    exploreAlso: 'Entdecken Sie auch',
  },
  pt: {
    breadcrumb: 'Citações',
    title: 'Citações célebres do Papa Leão XIV por tema',
    subtitle: 'Coletânea das frases mais significativas do Papa Leão XIV proferidas em discursos, homilias, mensagens e audiências. Organizadas por tema com referência ao momento exato.',
    source: 'Fonte',
    occasion: 'Ocasião',
    quotesCount: 'citações',
    exploreAlso: 'Explorar também',
  },
  ca: {
    breadcrumb: 'Frases',
    title: 'Frases cèlebres del Papa Lleó XIV per temes',
    subtitle: 'Recull de les frases més significatives del Papa Lleó XIV pronunciades en discursos, homilies, missatges i audiències. Ordenades per tema amb referència al moment exacte.',
    source: 'Font',
    occasion: 'Ocasió',
    quotesCount: 'frases',
    exploreAlso: 'Explora també',
  },
  gl: {
    breadcrumb: 'Frases',
    title: 'Frases célebres do Papa León XIV por temas',
    subtitle: 'Recompilación das frases máis significativas do Papa León XIV pronunciadas en discursos, homilías, mensaxes e audiencias. Organizadas por tema con referencia ao momento exacto.',
    source: 'Fonte',
    occasion: 'Ocasión',
    quotesCount: 'frases',
    exploreAlso: 'Explora tamén',
  },
  eu: {
    breadcrumb: 'Aipuak',
    title: 'Leon XIV.a Aita Santuaren aipu ospetsuak gaien arabera',
    subtitle: 'Leon XIV.a Aita Santuak hitzaldi, homilia, mezu eta ikustaldietan esandako esaldi adierazgarrienen bilduma, gaika antolatua eta une zehatzaren erreferentziarekin.',
    source: 'Iturria',
    occasion: 'Aukera',
    quotesCount: 'aipu',
    exploreAlso: 'Esploratu ere',
  },
} as const

export default function FrasesPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/frases', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        {/* Índice por temas */}
        <nav className="mb-8 flex flex-wrap gap-2">
          {TEMAS_FRASE.map((tp) => {
            const count = frases.filter((f) => f.tema === tp.id).length
            return (
              <a
                key={tp.id}
                href={`#${tp.id}`}
                className="inline-flex items-center gap-1 rounded-full border border-papal-gold/30 bg-white px-3 py-1 text-sm text-papal-navy/80 transition hover:bg-papal-gold/10"
              >
                {tp.icon} {tp.label} <span className="text-xs text-papal-navy/50">({count})</span>
              </a>
            )
          })}
        </nav>

        {/* Frases por tema */}
        <div className="space-y-10">
          {TEMAS_FRASE.map((tp) => {
            const ftema = frases.filter((f) => f.tema === (tp.id as TemaFrase))
            if (ftema.length === 0) return null
            return (
              <section key={tp.id} id={tp.id}>
                <header className="mb-4">
                  <h2 className="font-heading text-2xl font-bold text-papal-navy">
                    <span className="mr-2">{tp.icon}</span>
                    {tp.label}
                  </h2>
                  <p className="text-sm text-papal-navy/60">{tp.desc}</p>
                </header>
                <div className="grid gap-4 md:grid-cols-2">
                  {ftema.map((f, i) => (
                    <blockquote
                      key={i}
                      className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5"
                    >
                      <p className="font-serif italic leading-relaxed text-papal-navy">
                        « {f.texto} »
                      </p>
                      <footer className="mt-3 text-xs text-papal-navy/60">
                        <p>
                          <strong>{t.occasion}:</strong> {f.ocasion}
                        </p>
                        <p>
                          {f.fecha} · {t.source}: {f.fuente}
                          {f.urlOficial && (
                            <>
                              {' · '}
                              <a
                                href={f.urlOficial}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-papal-gold-dark"
                              >
                                ver
                              </a>
                            </>
                          )}
                        </p>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Explora también */}
        <nav aria-label="Related" className="mt-10 rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
          <h2 className="mb-4 font-heading text-xl font-bold text-papal-navy">{t.exploreAlso}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={localizePath('/discursos', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Discursos del Papa León XIV
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Homilías, mensajes y audiencias</p>
            </Link>
            <Link href={localizePath('/dilexi-te', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Dilexi Te
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Primera exhortación apostólica</p>
            </Link>
            <Link href={localizePath('/papa-leon-xiv', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Biografía del Papa León XIV
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Vida, familia, magisterio</p>
            </Link>
          </div>
        </nav>
      </Container>
    </>
  )
}
