import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getDiscursos, getTiposDiscurso } from '@/data/i18n/content/discursos'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: 'Discursos',
    title: 'Discursos del Papa León XIV: homilías, mensajes y audiencias',
    subtitle:
      'Colección cronológica de los discursos, homilías y mensajes más relevantes del Papa León XIV, con contexto, fragmento oficial y enlace al texto completo en Vaticano.va.',
    allTypes: 'Todos los tipos',
    readFull: 'Leer texto oficial completo →',
    summary: 'Resumen',
    fragment: 'Fragmento',
    themes: 'Temas',
    exploreAlso: 'Explora también',
  },
  en: {
    breadcrumb: 'Speeches',
    title: 'Pope Leo XIV Speeches: Homilies, Messages & Audiences',
    subtitle:
      'Chronological collection of Pope Leo XIV\'s most relevant speeches, homilies and messages with context, official excerpt and link to the full text on Vatican.va.',
    allTypes: 'All types',
    readFull: 'Read full official text →',
    summary: 'Summary',
    fragment: 'Excerpt',
    themes: 'Topics',
    exploreAlso: 'Explore also',
  },
  it: {
    breadcrumb: 'Discorsi',
    title: 'Discorsi di Papa Leone XIV: omelie, messaggi e udienze',
    subtitle: 'Raccolta cronologica dei discorsi, omelie e messaggi più rilevanti di Papa Leone XIV, con contesto, frammento ufficiale e link al testo completo su Vatican.va.',
    allTypes: 'Tutti i tipi',
    readFull: 'Leggi il testo ufficiale completo →',
    summary: 'Sintesi',
    fragment: 'Frammento',
    themes: 'Temi',
    exploreAlso: 'Esplora anche',
  },
  fr: {
    breadcrumb: 'Discours',
    title: 'Discours du Pape Léon XIV : homélies, messages et audiences',
    subtitle: 'Collection chronologique des discours, homélies et messages les plus pertinents du Pape Léon XIV, avec contexte, extrait officiel et lien vers le texte complet sur Vatican.va.',
    allTypes: 'Tous les types',
    readFull: 'Lire le texte officiel complet →',
    summary: 'Résumé',
    fragment: 'Extrait',
    themes: 'Thèmes',
    exploreAlso: 'Explorer aussi',
  },
  de: {
    breadcrumb: 'Ansprachen',
    title: 'Ansprachen von Papst Leo XIV: Predigten, Botschaften, Audienzen',
    subtitle: 'Chronologische Sammlung der wichtigsten Reden, Predigten und Botschaften von Papst Leo XIV mit Kontext, offiziellem Auszug und Link zum vollständigen Text auf Vatican.va.',
    allTypes: 'Alle Typen',
    readFull: 'Vollständigen offiziellen Text lesen →',
    summary: 'Zusammenfassung',
    fragment: 'Auszug',
    themes: 'Themen',
    exploreAlso: 'Entdecken Sie auch',
  },
  pt: {
    breadcrumb: 'Discursos',
    title: 'Discursos do Papa Leão XIV: homilias, mensagens e audiências',
    subtitle: 'Coleção cronológica dos discursos, homilias e mensagens mais relevantes do Papa Leão XIV, com contexto, fragmento oficial e link para o texto completo em Vatican.va.',
    allTypes: 'Todos os tipos',
    readFull: 'Ler o texto oficial completo →',
    summary: 'Resumo',
    fragment: 'Fragmento',
    themes: 'Temas',
    exploreAlso: 'Explorar também',
  },
  ca: {
    breadcrumb: 'Discursos',
    title: 'Discursos del Papa Lleó XIV: homilies, missatges i audiències',
    subtitle: 'Col·lecció cronològica dels discursos, homilies i missatges més rellevants del Papa Lleó XIV, amb context, fragment oficial i enllaç al text complet a Vatican.va.',
    allTypes: 'Tots els tipus',
    readFull: 'Llegir el text oficial complet →',
    summary: 'Resum',
    fragment: 'Fragment',
    themes: 'Temes',
    exploreAlso: 'Explora també',
  },
  gl: {
    breadcrumb: 'Discursos',
    title: 'Discursos do Papa León XIV: homilías, mensaxes e audiencias',
    subtitle: 'Colección cronolóxica dos discursos, homilías e mensaxes máis relevantes do Papa León XIV, con contexto, fragmento oficial e ligazón ao texto completo en Vatican.va.',
    allTypes: 'Todos os tipos',
    readFull: 'Ler o texto oficial completo →',
    summary: 'Resumo',
    fragment: 'Fragmento',
    themes: 'Temas',
    exploreAlso: 'Explora tamén',
  },
  eu: {
    breadcrumb: 'Hitzaldiak',
    title: 'Leon XIV.aren hitzaldiak: homiliak, mezuak eta ikusteak',
    subtitle: 'Leon XIV.a Aita Santuaren hitzaldi, homilia eta mezu nagusien bilduma kronologikoa, testuinguru, zati ofizial eta Vatican.va-ko testu osoaren estekarekin.',
    allTypes: 'Mota guztiak',
    readFull: 'Irakurri testu ofizial osoa →',
    summary: 'Laburpena',
    fragment: 'Zatia',
    themes: 'Gaiak',
    exploreAlso: 'Esploratu ere',
  },
} as const

export default function DiscursosPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es

  // Orden cronológico inverso (más reciente arriba)
  const discursos = getDiscursos(locale)
  const tiposDiscurso = getTiposDiscurso(locale)
  const ordenados = [...discursos].sort((a, b) => b.fecha.localeCompare(a.fecha))

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/discursos', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        {/* Leyenda de tipos */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tiposDiscurso.map((tp) => (
            <span
              key={tp.id}
              className="inline-flex items-center gap-1 rounded-full border border-papal-gold/30 bg-white px-3 py-1 text-xs text-papal-navy/70"
            >
              {tp.icon} {tp.label}
            </span>
          ))}
        </div>

        {/* Cronología de discursos */}
        <ol className="relative space-y-5 border-l-2 border-papal-gold/40 pl-5">
          {ordenados.map((d) => {
            const tp = tiposDiscurso.find((x) => x.id === d.tipo)
            return (
              <li key={d.id} className="relative">
                <div className="absolute -left-[9px] top-3 h-4 w-4 rounded-full bg-papal-gold" />
                <article className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  <header className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-papal-gold/20 px-2 py-0.5 text-xs font-semibold text-papal-gold-dark">
                          {tp?.icon} {tp?.label}
                        </span>
                        <time className="text-xs text-papal-navy/60">{d.fecha}</time>
                      </div>
                      <h2 className="mt-2 font-heading text-lg font-bold text-papal-navy">
                        {d.titulo}
                      </h2>
                      <p className="mt-1 text-xs text-papal-navy/60">
                        {d.lugar} · {d.ocasion}
                      </p>
                    </div>
                  </header>

                  <div className="mt-3 rounded-lg bg-papal-cream p-3 text-sm text-papal-navy/85">
                    <p className="font-semibold text-papal-navy">{t.summary}</p>
                    <p className="mt-1">{d.resumen}</p>
                  </div>

                  <blockquote className="mt-3 rounded-lg border-l-4 border-papal-gold bg-white px-4 py-3 font-serif italic text-papal-navy">
                    « {d.fragmento} »
                  </blockquote>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1">
                      {d.temas.map((tema) => (
                        <span
                          key={tema}
                          className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-papal-navy/70"
                        >
                          {tema}
                        </span>
                      ))}
                    </div>
                    <a
                      href={d.urlOficial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-papal-gold hover:underline"
                    >
                      {t.readFull}
                    </a>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>

        {/* Explora también */}
        <nav aria-label="Related" className="mt-10 rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
          <h2 className="mb-4 font-heading text-xl font-bold text-papal-navy">{t.exploreAlso}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={localizePath('/frases', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Frases célebres del Papa León XIV
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Citas por temas</p>
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
              <p className="mt-1 text-xs text-papal-navy/60">Vida y magisterio</p>
            </Link>
          </div>
        </nav>

        {/* Fuentes */}
        <section className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="mb-2 font-heading text-base font-bold text-papal-navy">📚 Fuentes</h2>
          <ul className="space-y-1 text-xs text-papal-navy/70">
            <li>• <a href="https://www.vatican.va/content/leo-xiv/es.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican.va — textos oficiales del Papa León XIV</a></li>
            <li>• <a href="https://press.vatican.va" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Oficina de Prensa de la Santa Sede</a></li>
            <li>• <a href="https://www.vaticannews.va/es.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican News</a></li>
            <li>• L\'Osservatore Romano (archivos digitales).</li>
          </ul>
        </section>
      </Container>
    </>
  )
}
