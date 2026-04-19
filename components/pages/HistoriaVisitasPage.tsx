import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { getVisitas, getFaqHistoria, datosAgregados } from '@/data/i18n/content/historiaVisitas'
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
  it: {
    breadcrumb: 'Storia delle visite papali',
    title: 'Storia delle visite papali in Spagna (1982-2026)',
    subtitle: 'Da Giovanni Paolo II a Leone XIV: cinque decenni di viaggi apostolici in Spagna',
    introTitle: 'Tre papi, nove visite, un\'assenza',
    introBody:
      'Solo tre papi hanno visitato la Spagna negli ultimi 50 anni: Giovanni Paolo II (5 visite 1982-2003), Benedetto XVI (3 visite 2006-2011) e Leone XIV (6-12 giugno 2026). Francesco (2013-2025) è stato il primo papa dai tempi di Pio XII a non visitare la Spagna.',
    visitsTitle: 'Cronologia completa',
    visitByPope: 'Visite per papa',
    jp2: 'Giovanni Paolo II',
    bxvi: 'Benedetto XVI',
    francisco: 'Francesco',
    leonXIV: 'Leone XIV',
    contextTitle: 'Contesto storico',
    factTitle: 'Dato rilevante',
    citiesLbl: 'Città',
    actosLbl: 'Eventi principali',
    sourcesLbl: 'Fonti',
    durationLbl: 'Durata',
    days: 'giorni',
    faqTitle: 'FAQ sulle visite papali in Spagna',
    sourcesTitle: 'Fonti documentali',
    sourcesLead: 'Tutti i dati di questa pagina sono verificati da fonti ufficiali.',
    daysLabel: 'giorni',
    cities: 'città',
    allCities: 'Tutte le città visitate da un papa in Spagna',
    jmjsTitle: 'Giornate Mondiali della Gioventù tenutesi in Spagna',
  },
  fr: {
    breadcrumb: 'Histoire des visites papales',
    title: 'Histoire des visites papales en Espagne (1982-2026)',
    subtitle: 'De Jean-Paul II à Léon XIV : cinq décennies de voyages apostoliques en Espagne',
    introTitle: 'Trois papes, neuf visites, une absence',
    introBody:
      'Seuls trois papes ont visité l\'Espagne ces 50 dernières années : Jean-Paul II (5 visites 1982-2003), Benoît XVI (3 visites 2006-2011) et Léon XIV (6-12 juin 2026). François (2013-2025) fut le premier pape depuis Pie XII à ne pas s\'y rendre.',
    visitsTitle: 'Chronologie complète',
    visitByPope: 'Visites par pape',
    jp2: 'Jean-Paul II',
    bxvi: 'Benoît XVI',
    francisco: 'François',
    leonXIV: 'Léon XIV',
    contextTitle: 'Contexte historique',
    factTitle: 'Fait notable',
    citiesLbl: 'Villes',
    actosLbl: 'Événements principaux',
    sourcesLbl: 'Sources',
    durationLbl: 'Durée',
    days: 'jours',
    faqTitle: 'FAQ sur les visites papales en Espagne',
    sourcesTitle: 'Sources documentaires',
    sourcesLead: 'Toutes les données de cette page sont vérifiées auprès de sources officielles.',
    daysLabel: 'jours',
    cities: 'villes',
    allCities: 'Toutes les villes visitées par un pape en Espagne',
    jmjsTitle: 'Journées Mondiales de la Jeunesse tenues en Espagne',
  },
  de: {
    breadcrumb: 'Geschichte der Papstbesuche',
    title: 'Geschichte der Papstbesuche in Spanien (1982-2026)',
    subtitle: 'Von Johannes Paul II. bis Leo XIV.: fünf Jahrzehnte apostolischer Reisen nach Spanien',
    introTitle: 'Drei Päpste, neun Besuche, eine Abwesenheit',
    introBody:
      'Nur drei Päpste haben Spanien in den letzten 50 Jahren besucht: Johannes Paul II. (5 Besuche 1982-2003), Benedikt XVI. (3 Besuche 2006-2011) und Leo XIV. (6.-12. Juni 2026). Franziskus (2013-2025) war seit Pius XII. der erste Papst, der Spanien nicht besuchte.',
    visitsTitle: 'Vollständige Chronologie',
    visitByPope: 'Besuche pro Papst',
    jp2: 'Johannes Paul II.',
    bxvi: 'Benedikt XVI.',
    francisco: 'Franziskus',
    leonXIV: 'Leo XIV.',
    contextTitle: 'Historischer Kontext',
    factTitle: 'Bemerkenswerte Tatsache',
    citiesLbl: 'Städte',
    actosLbl: 'Hauptveranstaltungen',
    sourcesLbl: 'Quellen',
    durationLbl: 'Dauer',
    days: 'Tage',
    faqTitle: 'FAQ zu Papstbesuchen in Spanien',
    sourcesTitle: 'Dokumentquellen',
    sourcesLead: 'Alle Daten dieser Seite sind durch offizielle Quellen verifiziert.',
    daysLabel: 'Tage',
    cities: 'Städte',
    allCities: 'Alle von einem Papst in Spanien besuchten Städte',
    jmjsTitle: 'In Spanien abgehaltene Weltjugendtage',
  },
  pt: {
    breadcrumb: 'História das visitas papais',
    title: 'História das visitas papais a Espanha (1982-2026)',
    subtitle: 'De João Paulo II a Leão XIV: cinco décadas de viagens apostólicas a Espanha',
    introTitle: 'Três papas, nove visitas, uma ausência',
    introBody:
      'Apenas três papas visitaram Espanha nos últimos 50 anos: João Paulo II (5 visitas 1982-2003), Bento XVI (3 visitas 2006-2011) e Leão XIV (6-12 junho 2026). Francisco (2013-2025) foi o primeiro papa desde Pio XII a não visitar Espanha.',
    visitsTitle: 'Cronologia completa',
    visitByPope: 'Visitas por papa',
    jp2: 'João Paulo II',
    bxvi: 'Bento XVI',
    francisco: 'Francisco',
    leonXIV: 'Leão XIV',
    contextTitle: 'Contexto histórico',
    factTitle: 'Facto relevante',
    citiesLbl: 'Cidades',
    actosLbl: 'Atos principais',
    sourcesLbl: 'Fontes',
    durationLbl: 'Duração',
    days: 'dias',
    faqTitle: 'FAQ sobre visitas papais a Espanha',
    sourcesTitle: 'Fontes documentais',
    sourcesLead: 'Todos os dados desta página são verificados com fontes oficiais.',
    daysLabel: 'dias',
    cities: 'cidades',
    allCities: 'Todas as cidades visitadas por um papa em Espanha',
    jmjsTitle: 'Jornadas Mundiais da Juventude realizadas em Espanha',
  },
  ca: {
    breadcrumb: 'Història de visites papals',
    title: 'Història de les visites papals a Espanya (1982-2026)',
    subtitle: 'De Joan Pau II a Lleó XIV: cinc dècades de viatges apostòlics a Espanya',
    introTitle: 'Tres papes, nou visites, una absència',
    introBody:
      'Només tres papes han visitat Espanya els darrers 50 anys: Joan Pau II (5 visites 1982-2003), Benet XVI (3 visites 2006-2011) i Lleó XIV (6-12 juny 2026). Francesc (2013-2025) va ser el primer papa des de Pius XII a no visitar Espanya.',
    visitsTitle: 'Cronologia completa',
    visitByPope: 'Visites per papa',
    jp2: 'Joan Pau II',
    bxvi: 'Benet XVI',
    francisco: 'Francesc',
    leonXIV: 'Lleó XIV',
    contextTitle: 'Context històric',
    factTitle: 'Dada rellevant',
    citiesLbl: 'Ciutats',
    actosLbl: 'Actes principals',
    sourcesLbl: 'Fonts',
    durationLbl: 'Durada',
    days: 'dies',
    faqTitle: 'FAQ sobre visites papals a Espanya',
    sourcesTitle: 'Fonts documentals',
    sourcesLead: 'Totes les dades d\'aquesta pàgina estan verificades amb fonts oficials.',
    daysLabel: 'dies',
    cities: 'ciutats',
    allCities: 'Totes les ciutats visitades per un papa a Espanya',
    jmjsTitle: 'Jornades Mundials de la Joventut celebrades a Espanya',
  },
  gl: {
    breadcrumb: 'Historia de visitas papais',
    title: 'Historia das visitas papais a España (1982-2026)',
    subtitle: 'De Xoán Paulo II a León XIV: cinco décadas de viaxes apostólicas a España',
    introTitle: 'Tres papas, nove visitas, unha ausencia',
    introBody:
      'Só tres papas visitaron España nos últimos 50 anos: Xoán Paulo II (5 visitas 1982-2003), Bieito XVI (3 visitas 2006-2011) e León XIV (6-12 xuño 2026). Francisco (2013-2025) foi o primeiro papa dende Pío XII en non visitar España.',
    visitsTitle: 'Cronoloxía completa',
    visitByPope: 'Visitas por papa',
    jp2: 'Xoán Paulo II',
    bxvi: 'Bieito XVI',
    francisco: 'Francisco',
    leonXIV: 'León XIV',
    contextTitle: 'Contexto histórico',
    factTitle: 'Dato relevante',
    citiesLbl: 'Cidades',
    actosLbl: 'Actos principais',
    sourcesLbl: 'Fontes',
    durationLbl: 'Duración',
    days: 'días',
    faqTitle: 'FAQ sobre visitas papais a España',
    sourcesTitle: 'Fontes documentais',
    sourcesLead: 'Todos os datos desta páxina están verificados con fontes oficiais.',
    daysLabel: 'días',
    cities: 'cidades',
    allCities: 'Todas as cidades visitadas por un papa en España',
    jmjsTitle: 'Xornadas Mundiais da Xuventude celebradas en España',
  },
  eu: {
    breadcrumb: 'Bisitaldi papalen historia',
    title: 'Bisitaldi papalen historia Espainian (1982-2026)',
    subtitle: 'Joan Paulo II.etik Leon XIV.era: bost hamarkada bidai apostoliko Espainiara',
    introTitle: 'Hiru aita santu, bederatzi bisita, absentzia bat',
    introBody:
      'Azken 50 urteetan hiru aita santuk bakarrik bisitatu dute Espainia: Joan Paulo II.ak (5 bisita 1982-2003), Benedikto XVI.ak (3 bisita 2006-2011) eta Leon XIV.ak (2026ko ekainaren 6-12). Frantzisko (2013-2025) Pio XII.az geroztik Espainia bisitatu ez zuen lehen aita santua izan zen.',
    visitsTitle: 'Kronologia osoa',
    visitByPope: 'Bisitak aita santuko',
    jp2: 'Joan Paulo II.a',
    bxvi: 'Benedikto XVI.a',
    francisco: 'Frantzisko',
    leonXIV: 'Leon XIV.a',
    contextTitle: 'Testuinguru historikoa',
    factTitle: 'Datu garrantzitsua',
    citiesLbl: 'Hiriak',
    actosLbl: 'Ekitaldi nagusiak',
    sourcesLbl: 'Iturriak',
    durationLbl: 'Iraupena',
    days: 'egun',
    faqTitle: 'Bisitaldi papalei buruzko ohiko galderak',
    sourcesTitle: 'Dokumentu-iturriak',
    sourcesLead: 'Orri honetako datu guztiak iturri ofizialekin egiaztatuak daude.',
    daysLabel: 'egun',
    cities: 'hiri',
    allCities: 'Aita santuak Espainian bisitatu dituen hiri guztiak',
    jmjsTitle: 'Espainian egindako Gazteen Munduko Jardunaldiak',
  },
} as const

export default function HistoriaVisitasPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es
  const visitas = getVisitas(locale)
  const faqHistoria = getFaqHistoria(locale)

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

        {/* Internal linking · Explora también */}
        <nav aria-label="Related" className="mt-10 rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
          <h2 className="mb-4 font-heading text-xl font-bold text-papal-navy">
            Explora también
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={localizePath('/papa-leon-xiv', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Biografía del Papa León XIV
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Edad · familia · idiomas · posiciones</p>
            </Link>
            <Link href={localizePath('/programa', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Programa 2026
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">24 actos · 6-12 junio 2026</p>
            </Link>
            <Link href={localizePath('/ciudades', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                Ciudades de la visita
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Madrid · Barcelona · Gran Canaria · Tenerife</p>
            </Link>
          </div>
        </nav>
      </Container>
    </>
  )
}
