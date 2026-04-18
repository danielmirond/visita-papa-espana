import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { visitas, datosAgregados, faqHistoria } from '@/data/historiaVisitas'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { faqPageSchema } from '@/lib/schema/generators'

interface Props {
  locale: Locale
}

// Labels ES — otros locales heredan por fallback
const L = {
  es: {
    breadcrumb: 'Historia de visitas papales',
    title: 'Historia de las visitas papales a España (1982-2026)',
    subtitle: 'De Juan Pablo II a León XIV: cinco décadas de viajes apostólicos papales en España',
    introTitle: 'Tres papas, nueve visitas, una ausencia',
    introBody:
      'Solo tres papas han visitado España en los últimos 50 años: Juan Pablo II lo hizo en cinco ocasiones (1982-2003), Benedicto XVI en tres (2006-2011), y León XIV lo hará del 6 al 12 de junio de 2026. El Papa Francisco (2013-2025) fue el primer pontífice desde Pío XII en no pisar España durante su pontificado.',
    visitsTitle: 'Cronología completa',
    visitByPope: 'Visitas por papa',
    jp2: 'Juan Pablo II',
    bxvi: 'Benedicto XVI',
    francisco: 'Francisco',
    leonXIV: 'León XIV',
    contextTitle: 'Contexto histórico',
    factTitle: 'Dato relevante',
    citiesLbl: 'Ciudades',
    actosLbl: 'Actos principales',
    sourcesLbl: 'Fuentes',
    durationLbl: 'Duración',
    days: 'días',
    faqTitle: 'Preguntas frecuentes sobre visitas papales a España',
    sourcesTitle: 'Fuentes documentales',
    sourcesLead: 'Todos los datos de esta página están verificados con fuentes oficiales.',
    daysLabel: 'días',
    cities: 'ciudades',
    allCities: 'Todas las ciudades visitadas por un papa en España',
    jmjsTitle: 'Jornadas Mundiales de la Juventud en España',
  },
  en: {
    breadcrumb: 'Papal visits history',
    title: 'History of papal visits to Spain (1982-2026)',
    subtitle: 'From John Paul II to Leo XIV: five decades of apostolic journeys',
    introTitle: 'Three popes, nine visits, one absence',
    introBody:
      'Only three popes have visited Spain in the last 50 years: John Paul II (five visits 1982-2003), Benedict XVI (three visits 2006-2011), and Leo XIV (6-12 June 2026). Francis (2013-2025) was the first pope since Pius XII not to visit Spain during his pontificate.',
    visitsTitle: 'Full timeline',
    visitByPope: 'Visits per pope',
    jp2: 'John Paul II',
    bxvi: 'Benedict XVI',
    francisco: 'Francis',
    leonXIV: 'Leo XIV',
    contextTitle: 'Historical context',
    factTitle: 'Noteworthy fact',
    citiesLbl: 'Cities',
    actosLbl: 'Main events',
    sourcesLbl: 'Sources',
    durationLbl: 'Duration',
    days: 'days',
    faqTitle: 'FAQ: papal visits to Spain',
    sourcesTitle: 'Documentary sources',
    sourcesLead: 'All data on this page is verified against official sources.',
    daysLabel: 'days',
    cities: 'cities',
    allCities: 'All cities ever visited by a pope in Spain',
    jmjsTitle: 'World Youth Days held in Spain',
  },
} as const

export default function HistoriaVisitasPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/historia-visitas-papales', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <section className="mb-10 rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
          <h2 className="font-heading text-2xl font-bold text-papal-navy">{t.introTitle}</h2>
          <p className="mt-3 text-papal-navy/85">{t.introBody}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg bg-white p-3 text-center">
              <div className="text-2xl font-bold text-papal-gold-dark">{datosAgregados.visitasJP2}</div>
              <div className="text-xs text-papal-navy/70">{t.jp2}</div>
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <div className="text-2xl font-bold text-papal-gold-dark">{datosAgregados.visitasBenedicto}</div>
              <div className="text-xs text-papal-navy/70">{t.bxvi}</div>
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <div className="text-2xl font-bold text-gray-400">{datosAgregados.visitasFrancisco}</div>
              <div className="text-xs text-papal-navy/70">{t.francisco}</div>
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <div className="text-2xl font-bold text-papal-gold">{datosAgregados.visitasLeon}</div>
              <div className="text-xs text-papal-navy/70">{t.leonXIV}</div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 font-heading text-2xl font-bold text-papal-navy">{t.visitsTitle}</h2>
          <ol className="relative space-y-6 border-l-2 border-papal-gold/40 pl-5">
            {visitas.map((v) => (
              <li key={v.id} className="relative">
                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-papal-gold" />
                <article className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  <header className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">
                        {v.papaNombre} · {v.year}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold text-papal-navy">
                        {v.nombre}
                      </h3>
                      <p className="mt-1 text-xs text-papal-navy/60">
                        {v.fechaInicio} — {v.fechaFin}
                        {v.numeroDias > 0 && ` · ${v.numeroDias} ${t.daysLabel}`}
                      </p>
                    </div>
                  </header>

                  {v.ciudades.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase text-papal-navy/60">
                        {t.citiesLbl}
                      </p>
                      <p className="mt-1 text-sm text-papal-navy/80">{v.ciudades.join(' · ')}</p>
                    </div>
                  )}

                  {v.actos.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase text-papal-navy/60">
                        {t.actosLbl}
                      </p>
                      <ul className="mt-1 space-y-0.5 text-sm text-papal-navy/80">
                        {v.actos.map((a, i) => (
                          <li key={i}>• {a}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 rounded-lg bg-papal-cream p-3 text-sm text-papal-navy/85">
                    <p className="font-semibold text-papal-navy">{t.contextTitle}</p>
                    <p className="mt-1">{v.contextoHistorico}</p>
                  </div>

                  <p className="mt-3 rounded-lg border-l-4 border-papal-gold bg-white px-3 py-2 text-sm italic text-papal-navy/85">
                    💡 <strong>{t.factTitle}:</strong> {v.datoRelevante}
                  </p>

                  {v.fuentes.length > 0 && (
                    <details className="mt-3 text-xs text-papal-navy/60">
                      <summary className="cursor-pointer hover:text-papal-gold-dark">
                        📚 {t.sourcesLbl} ({v.fuentes.length})
                      </summary>
                      <ul className="mt-2 space-y-1 pl-4">
                        {v.fuentes.map((f, i) => (
                          <li key={i}>
                            {f.startsWith('http') ? (
                              <a href={f} target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark break-all">
                                {f}
                              </a>
                            ) : (
                              <span>{f}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-papal-gold/20 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-papal-navy">{t.allCities}</h3>
            <p className="mt-2 text-sm text-papal-navy/70">
              {datosAgregados.ciudadesTotalesDistintas.join(' · ')}
            </p>
          </div>
          <div className="rounded-xl bg-papal-navy p-6 text-white">
            <h3 className="font-heading text-lg font-bold">{t.jmjsTitle}</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/85">
              {datosAgregados.jmjEnEspana.map((j) => (
                <li key={j}>✨ {j}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <JsonLd
            data={faqPageSchema(
              faqHistoria.map((f) => ({
                question: f.pregunta,
                answer: f.respuesta,
                category: 'general',
              })),
              locale
            )}
          />
          <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t.faqTitle}</h2>
          <div className="space-y-2">
            {faqHistoria.map((f, i) => (
              <details
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm open:bg-papal-cream"
              >
                <summary className="cursor-pointer select-none font-heading font-semibold text-papal-navy">
                  {f.pregunta}
                </summary>
                <p className="mt-2 text-sm text-papal-navy/80">{f.respuesta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">📚 {t.sourcesTitle}</h2>
          <p className="mb-3 text-sm text-papal-navy/70">{t.sourcesLead}</p>
          <ul className="space-y-1 text-xs text-papal-navy/70">
            <li>• <a href="https://www.vatican.va/content/john-paul-ii/es/travels.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican.va — viajes apostólicos de Juan Pablo II</a></li>
            <li>• <a href="https://www.vatican.va/content/benedict-xvi/es/travels.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican.va — viajes apostólicos de Benedicto XVI</a></li>
            <li>• <a href="https://www.vatican.va/content/francesco/es/travels.index.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican.va — viajes apostólicos del Papa Francisco (ninguno a España)</a></li>
            <li>• <a href="https://press.vatican.va" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Sala Stampa de la Santa Sede — boletines oficiales de cada viaje</a></li>
            <li>• Conferencia Episcopal Española — <a href="https://conferenciaepiscopal.es" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">conferenciaepiscopal.es</a></li>
            <li>• Hemeroteca ABC, El País, La Vanguardia, COPE (1982-2026).</li>
            <li>• Archivos diocesanos de Santiago de Compostela, Madrid, Barcelona y Valencia.</li>
          </ul>
        </section>
      </Container>
    </>
  )
}
