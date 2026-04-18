import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import {
  biografiaPapa,
  timelineVida,
  prioridadesMagisterio,
  citasRelevantes,
} from '@/data/papaBiografia'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: 'Papa León XIV',
    title: 'Papa León XIV — biografía, magisterio y contexto de su pontificado',
    subtitle: 'Robert Francis Prevost OSA, primer papa nacido en EE. UU. y con nacionalidad peruana',
    whoTitle: '¿Quién es el Papa León XIV?',
    whoBody:
      'Robert Francis Prevost (Chicago, 1955) es el 267.º papa de la Iglesia católica. Religioso agustino, ha sido misionero en Perú durante décadas, prior general de su orden, obispo de Chiclayo y prefecto del Dicasterio para los Obispos. Elegido en el cónclave del 8 de mayo de 2025 tras la muerte del Papa Francisco, escogió el nombre de León XIV en referencia expresa a León XIII y su Doctrina Social.',
    timelineTitle: 'Línea de tiempo',
    priorityTitle: 'Prioridades de su magisterio',
    quotesTitle: 'Citas relevantes',
    dataTitle: 'Datos clave',
    nameLbl: 'Nombre secular',
    orderLbl: 'Orden religiosa',
    birthLbl: 'Nacimiento',
    natLbl: 'Nacionalidades',
    mottoLbl: 'Lema episcopal',
    electionLbl: 'Elección',
    whyName: 'Por qué "León"',
    moreInfo: 'Más información',
    vaticanLink: 'Ficha oficial en Vaticano.va',
  },
  en: {
    breadcrumb: 'Pope Leo XIV',
    title: 'Pope Leo XIV — biography, teaching and context of his pontificate',
    subtitle: 'Robert Francis Prevost OSA, first pope born in the USA and with Peruvian nationality',
    whoTitle: 'Who is Pope Leo XIV?',
    whoBody:
      'Robert Francis Prevost (Chicago, 1955) is the 267th Pope. An Augustinian friar, missionary in Peru for decades, prior general of his order, bishop of Chiclayo and prefect of the Dicastery for Bishops. Elected on 8 May 2025.',
    timelineTitle: 'Timeline',
    priorityTitle: 'Priorities of his teaching',
    quotesTitle: 'Relevant quotes',
    dataTitle: 'Key data',
    nameLbl: 'Birth name',
    orderLbl: 'Religious order',
    birthLbl: 'Birth',
    natLbl: 'Nationalities',
    mottoLbl: 'Episcopal motto',
    electionLbl: 'Elected',
    whyName: 'Why "Leo"',
    moreInfo: 'More information',
    vaticanLink: 'Official profile on Vatican.va',
  },
  it: {
    breadcrumb: 'Papa Leone XIV',
    title: 'Papa Leone XIV — biografia, magistero e contesto del suo pontificato',
    subtitle: 'Robert Francis Prevost OSA, primo papa nato negli USA e con nazionalità peruviana',
    whoTitle: 'Chi è Papa Leone XIV?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267° papa. Agostiniano, missionario in Perù, priore generale, vescovo di Chiclayo, prefetto del Dicastero per i Vescovi. Eletto l’8 maggio 2025.',
    timelineTitle: 'Linea del tempo',
    priorityTitle: 'Priorità del suo magistero',
    quotesTitle: 'Citazioni rilevanti',
    dataTitle: 'Dati chiave',
    nameLbl: 'Nome di battesimo',
    orderLbl: 'Ordine religioso',
    birthLbl: 'Nascita',
    natLbl: 'Nazionalità',
    mottoLbl: 'Motto episcopale',
    electionLbl: 'Elezione',
    whyName: 'Perché "Leone"',
    moreInfo: 'Più informazioni',
    vaticanLink: 'Profilo ufficiale su Vatican.va',
  },
  fr: {
    breadcrumb: 'Pape Léon XIV',
    title: 'Pape Léon XIV — biographie, magistère et contexte de son pontificat',
    subtitle: 'Robert Francis Prevost OSA, premier pape né aux USA et de nationalité péruvienne',
    whoTitle: 'Qui est le Pape Léon XIV?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267e pape. Augustin, missionnaire au Pérou, prieur général, évêque de Chiclayo, préfet du Dicastère pour les Évêques. Élu le 8 mai 2025.',
    timelineTitle: 'Chronologie',
    priorityTitle: 'Priorités de son magistère',
    quotesTitle: 'Citations pertinentes',
    dataTitle: 'Données clés',
    nameLbl: 'Nom de naissance',
    orderLbl: 'Ordre religieux',
    birthLbl: 'Naissance',
    natLbl: 'Nationalités',
    mottoLbl: 'Devise épiscopale',
    electionLbl: 'Élection',
    whyName: 'Pourquoi "Léon"',
    moreInfo: 'Plus d’informations',
    vaticanLink: 'Profil officiel sur Vatican.va',
  },
  de: {
    breadcrumb: 'Papst Leo XIV',
    title: 'Papst Leo XIV — Biografie, Lehre und Kontext seines Pontifikats',
    subtitle: 'Robert Francis Prevost OSA, erster in den USA geborener Papst mit peruanischer Staatsangehörigkeit',
    whoTitle: 'Wer ist Papst Leo XIV?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267. Papst. Augustiner, Missionar in Peru, Generalprior, Bischof von Chiclayo, Präfekt des Dikasteriums für die Bischöfe. Gewählt am 8. Mai 2025.',
    timelineTitle: 'Zeitleiste',
    priorityTitle: 'Prioritäten seiner Lehre',
    quotesTitle: 'Relevante Zitate',
    dataTitle: 'Schlüsseldaten',
    nameLbl: 'Geburtsname',
    orderLbl: 'Orden',
    birthLbl: 'Geburt',
    natLbl: 'Staatsangehörigkeiten',
    mottoLbl: 'Bischofswahlspruch',
    electionLbl: 'Wahl',
    whyName: 'Warum "Leo"',
    moreInfo: 'Mehr Informationen',
    vaticanLink: 'Offizielles Profil auf Vatican.va',
  },
  pt: {
    breadcrumb: 'Papa Leão XIV',
    title: 'Papa Leão XIV — biografia, magistério e contexto do seu pontificado',
    subtitle: 'Robert Francis Prevost OSA, primeiro papa nascido nos EUA e com nacionalidade peruana',
    whoTitle: 'Quem é o Papa Leão XIV?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267.º papa. Agostiniano, missionário no Peru, prior-geral, bispo de Chiclayo, prefeito do Dicastério para os Bispos. Eleito a 8 de maio de 2025.',
    timelineTitle: 'Linha cronológica',
    priorityTitle: 'Prioridades do seu magistério',
    quotesTitle: 'Citações relevantes',
    dataTitle: 'Dados-chave',
    nameLbl: 'Nome de batismo',
    orderLbl: 'Ordem religiosa',
    birthLbl: 'Nascimento',
    natLbl: 'Nacionalidades',
    mottoLbl: 'Lema episcopal',
    electionLbl: 'Eleição',
    whyName: 'Porquê "Leão"',
    moreInfo: 'Mais informações',
    vaticanLink: 'Perfil oficial em Vatican.va',
  },
  ca: {
    breadcrumb: 'Papa Lleó XIV',
    title: 'Papa Lleó XIV — biografia, magisteri i context del seu pontificat',
    subtitle: 'Robert Francis Prevost OSA, primer papa nascut als EUA i amb nacionalitat peruana',
    whoTitle: 'Qui és el Papa Lleó XIV?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267è papa. Agustí, missioner al Perú, prior general, bisbe de Chiclayo, prefecte del Dicasteri per als Bisbes. Elegit el 8 de maig de 2025.',
    timelineTitle: 'Línia del temps',
    priorityTitle: 'Prioritats del seu magisteri',
    quotesTitle: 'Cites rellevants',
    dataTitle: 'Dades clau',
    nameLbl: 'Nom de baptisme',
    orderLbl: 'Orde religiós',
    birthLbl: 'Naixement',
    natLbl: 'Nacionalitats',
    mottoLbl: 'Lema episcopal',
    electionLbl: 'Elecció',
    whyName: 'Per què "Lleó"',
    moreInfo: 'Més informació',
    vaticanLink: 'Perfil oficial a Vatican.va',
  },
  gl: {
    breadcrumb: 'Papa León XIV',
    title: 'Papa León XIV — biografía, maxisterio e contexto do seu pontificado',
    subtitle: 'Robert Francis Prevost OSA, primeiro papa nacido nos EUA e con nacionalidade peruana',
    whoTitle: 'Quen é o Papa León XIV?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267º papa. Agostiño, misioneiro no Perú, prior xeral, bispo de Chiclayo, prefecto do Dicasterio para os Bispos. Elixido o 8 de maio de 2025.',
    timelineTitle: 'Liña de tempo',
    priorityTitle: 'Prioridades do seu maxisterio',
    quotesTitle: 'Citas relevantes',
    dataTitle: 'Datos clave',
    nameLbl: 'Nome de bautismo',
    orderLbl: 'Orde relixiosa',
    birthLbl: 'Nacemento',
    natLbl: 'Nacionalidades',
    mottoLbl: 'Lema episcopal',
    electionLbl: 'Elección',
    whyName: 'Por que "León"',
    moreInfo: 'Máis información',
    vaticanLink: 'Perfil oficial en Vatican.va',
  },
  eu: {
    breadcrumb: 'Leon XIV.a Aita Santua',
    title: 'Leon XIV.a Aita Santua — biografia, magisterioa eta bere pontifikatuaren testuingurua',
    subtitle: 'Robert Francis Prevost OSA, AEBan jaiotako lehen aita santua Peruko nazionalitatearekin',
    whoTitle: 'Nor da Leon XIV.a Aita Santua?',
    whoBody: 'Robert Francis Prevost (Chicago, 1955), 267. aita santua. Agustindarra, misiolaria Perun, ordenaren priore nagusia, Chiclayo-ko gotzaina, Gotzainentzako Dikasterioaren prefektua. 2025eko maiatzaren 8an hautatua.',
    timelineTitle: 'Kronologia',
    priorityTitle: 'Bere magisterioaren lehentasunak',
    quotesTitle: 'Aipu garrantzitsuak',
    dataTitle: 'Datu nagusiak',
    nameLbl: 'Bataio-izena',
    orderLbl: 'Ordena erlijiosoa',
    birthLbl: 'Jaiotza',
    natLbl: 'Nazionalitateak',
    mottoLbl: 'Lema episkopala',
    electionLbl: 'Hautaketa',
    whyName: 'Zergatik "Leon"',
    moreInfo: 'Informazio gehiago',
    vaticanLink: 'Profil ofiziala Vatican.va-n',
  },
} as const satisfies Record<Locale, any>

export default function PapaBiografiaPage({ locale }: Props) {
  const t = L[locale] || L.es

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/papa-leon-xiv', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold text-papal-navy">{t.whoTitle}</h2>
              <p className="mt-3 text-papal-navy/80">{t.whoBody}</p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t.timelineTitle}</h2>
              <ol className="relative border-l-2 border-papal-gold/40 pl-5">
                {timelineVida.map((e, i) => (
                  <li key={i} className="mb-6">
                    <div className="absolute -left-[7px] flex h-3 w-3 items-center justify-center rounded-full bg-papal-gold" />
                    <div className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">
                      {e.year}
                      {e.month ? ` · ${String(e.month).padStart(2, '0')}` : ''}
                      {e.location ? ` · ${e.location}` : ''}
                    </div>
                    <h3 className="mt-1 font-heading text-base font-bold text-papal-navy">{e.title}</h3>
                    <p className="mt-1 text-sm text-papal-navy/80">{e.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t.priorityTitle}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {prioridadesMagisterio.map((p) => (
                  <article
                    key={p.titulo}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-heading text-base font-bold text-papal-navy">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-papal-navy/70">{p.descripcion}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t.quotesTitle}</h2>
              <div className="space-y-4">
                {citasRelevantes.map((c, i) => (
                  <blockquote
                    key={i}
                    className="rounded-xl border-l-4 border-papal-gold bg-papal-cream p-5"
                  >
                    <p className="font-serif italic text-papal-navy">« {c.texto} »</p>
                    <footer className="mt-2 text-xs text-papal-navy/60">
                      {c.ocasion} · {c.fecha}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
              <h2 className="font-heading text-lg font-bold text-papal-navy">{t.dataTitle}</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.nameLbl}</dt>
                  <dd className="text-papal-navy">{biografiaPapa.nombreSecular}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.orderLbl}</dt>
                  <dd className="text-papal-navy">{biografiaPapa.orden}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.birthLbl}</dt>
                  <dd className="text-papal-navy">
                    {biografiaPapa.fechaNacimiento} · {biografiaPapa.lugarNacimiento}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.natLbl}</dt>
                  <dd className="text-papal-navy">{biografiaPapa.nacionalidades.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.mottoLbl}</dt>
                  <dd className="font-serif italic text-papal-navy">
                    {biografiaPapa.lemaEpiscopal}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.electionLbl}</dt>
                  <dd className="text-papal-navy">
                    {biografiaPapa.fechaEleccion} · {biografiaPapa.conclaveRonda}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <h3 className="font-heading text-base font-bold">{t.whyName}</h3>
              <p className="mt-2 text-sm text-white/85">{biografiaPapa.nombreElegido.razon}</p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-heading text-base font-bold text-papal-navy">{t.moreInfo}</h3>
              <a
                href={biografiaPapa.oficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-papal-gold hover:underline"
              >
                {t.vaticanLink} →
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}
