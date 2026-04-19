import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { redesSociales } from '@/data/papaBiografia'
import {
  getTimelineVida,
  getPosicionesMagisterio,
  getFaqPapaLeonXIV,
  biografiaPapa,
  prioridadesMagisterio,
  citasRelevantes,
  raicesChicago,
  familiaPapa,
} from '@/data/i18n/content/papaBiografia'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { faqPageSchema, popeLeoPersonSchema } from '@/lib/schema/generators'
import Link from 'next/link'

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
    chicagoTitle: 'El Papa de Chicago: raíces y cultura personal',
    chicagoNeighborhood: 'Barrio natal',
    chicagoParish: 'Parroquia de la infancia',
    chicagoHS: 'Instituto',
    chicagoTeam: 'Equipo deportivo favorito',
    chicagoEthnicity: 'Ascendencia y etnicidad',
    chicagoLanguage: 'Idioma familiar',
    chicagoFun: 'Dato curioso',
    familyTitle: 'Familia del Papa León XIV',
    positionsTitle: 'Posiciones del magisterio: pro-vida, LGTB, IA, inmigración, Latin Mass',
    positionsLead: 'Resumen de las posiciones del Papa León XIV sobre los temas que más se buscan, con contexto completo y enlace a la fuente.',
    sourceLabel: 'Fuente',
    physicalTitle: 'Datos físicos y personales',
    heightLbl: 'Altura',
    languagesLbl: 'Idiomas que habla',
    shieldTitle: 'Escudo papal y lema',
    mottoTranslation: 'Traducción',
    socialTitle: 'Redes sociales y canales oficiales',
    socialOfficial: 'Cuentas oficiales del Papa',
    faqTitle: 'Preguntas frecuentes sobre el Papa León XIV',
    sourcesTitle: 'Fuentes',
    sourcesLead: 'Datos biográficos recopilados de fuentes oficiales y públicas.',
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
    chicagoTitle: 'The Pope from Chicago: roots and personal culture',
    chicagoNeighborhood: 'Home neighborhood',
    chicagoParish: 'Childhood parish',
    chicagoHS: 'High school',
    chicagoTeam: 'Favorite sports team',
    chicagoEthnicity: 'Ancestry and ethnicity',
    chicagoLanguage: 'Family language',
    chicagoFun: 'Fun fact',
    familyTitle: 'Pope Leo XIV\'s family',
    positionsTitle: 'Teaching positions: pro-life, LGTB, AI, immigration, Latin Mass',
    positionsLead: 'Summary of Pope Leo XIV\'s positions on the most searched topics, with full context and source link.',
    sourceLabel: 'Source',
    physicalTitle: 'Physical and personal data',
    heightLbl: 'Height',
    languagesLbl: 'Languages spoken',
    shieldTitle: 'Papal coat of arms and motto',
    mottoTranslation: 'Translation',
    socialTitle: 'Social media and official channels',
    socialOfficial: 'Pope\'s official accounts',
    faqTitle: 'Frequently asked questions about Pope Leo XIV',
    sourcesTitle: 'Sources',
    sourcesLead: 'Biographical data collected from official and public sources.',
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
    chicagoTitle: 'Il Papa di Chicago: radici e cultura personale',
    chicagoNeighborhood: 'Quartiere natale',
    chicagoParish: 'Parrocchia d\'infanzia',
    chicagoHS: 'Liceo',
    chicagoTeam: 'Squadra sportiva preferita',
    chicagoEthnicity: 'Ascendenza ed etnia',
    chicagoLanguage: 'Lingua in famiglia',
    chicagoFun: 'Curiosità',
    familyTitle: 'Famiglia di Papa Leone XIV',
    positionsTitle: 'Posizioni del magistero: pro-vita, LGBT, IA, immigrazione, Messa in latino',
    positionsLead: 'Sintesi delle posizioni di Papa Leone XIV sui temi più ricercati, con contesto completo e link alla fonte.',
    sourceLabel: 'Fonte',
    physicalTitle: 'Dati fisici e personali',
    heightLbl: 'Altezza',
    languagesLbl: 'Lingue parlate',
    shieldTitle: 'Stemma papale e motto',
    mottoTranslation: 'Traduzione',
    socialTitle: 'Social media e canali ufficiali',
    socialOfficial: 'Account ufficiali del Papa',
    faqTitle: 'Domande frequenti su Papa Leone XIV',
    sourcesTitle: 'Fonti',
    sourcesLead: 'Dati biografici raccolti da fonti ufficiali e pubbliche.',
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
    chicagoTitle: 'Le Pape de Chicago : racines et culture personnelle',
    chicagoNeighborhood: 'Quartier natal',
    chicagoParish: 'Paroisse d\'enfance',
    chicagoHS: 'Lycée',
    chicagoTeam: 'Équipe sportive préférée',
    chicagoEthnicity: 'Ascendance et ethnicité',
    chicagoLanguage: 'Langue familiale',
    chicagoFun: 'Anecdote',
    familyTitle: 'Famille du Pape Léon XIV',
    positionsTitle: 'Positions du magistère : pro-vie, LGBT, IA, immigration, messe en latin',
    positionsLead: 'Résumé des positions du Pape Léon XIV sur les sujets les plus recherchés, avec contexte complet et lien vers la source.',
    sourceLabel: 'Source',
    physicalTitle: 'Données physiques et personnelles',
    heightLbl: 'Taille',
    languagesLbl: 'Langues parlées',
    shieldTitle: 'Blason papal et devise',
    mottoTranslation: 'Traduction',
    socialTitle: 'Réseaux sociaux et canaux officiels',
    socialOfficial: 'Comptes officiels du Pape',
    faqTitle: 'FAQ sur le Pape Léon XIV',
    sourcesTitle: 'Sources',
    sourcesLead: 'Données biographiques collectées auprès de sources officielles et publiques.',
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
    chicagoTitle: 'Der Papst aus Chicago: Wurzeln und persönliche Kultur',
    chicagoNeighborhood: 'Geburtsviertel',
    chicagoParish: 'Kindheitspfarrei',
    chicagoHS: 'Schule',
    chicagoTeam: 'Lieblingssportmannschaft',
    chicagoEthnicity: 'Abstammung und Ethnizität',
    chicagoLanguage: 'Familiensprache',
    chicagoFun: 'Kuriosität',
    familyTitle: 'Familie von Papst Leo XIV',
    positionsTitle: 'Lehrpositionen: Pro-Life, LGBT, KI, Migration, lateinische Messe',
    positionsLead: 'Zusammenfassung der Positionen von Papst Leo XIV zu den meistgesuchten Themen mit vollständigem Kontext und Quellenangabe.',
    sourceLabel: 'Quelle',
    physicalTitle: 'Körperliche und persönliche Daten',
    heightLbl: 'Größe',
    languagesLbl: 'Gesprochene Sprachen',
    shieldTitle: 'Papstwappen und Wahlspruch',
    mottoTranslation: 'Übersetzung',
    socialTitle: 'Soziale Medien und offizielle Kanäle',
    socialOfficial: 'Offizielle Konten des Papstes',
    faqTitle: 'Häufige Fragen zu Papst Leo XIV',
    sourcesTitle: 'Quellen',
    sourcesLead: 'Biografische Daten aus offiziellen und öffentlichen Quellen.',
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
    chicagoTitle: 'O Papa de Chicago: raízes e cultura pessoal',
    chicagoNeighborhood: 'Bairro natal',
    chicagoParish: 'Paróquia de infância',
    chicagoHS: 'Escola secundária',
    chicagoTeam: 'Equipa desportiva favorita',
    chicagoEthnicity: 'Ascendência e etnia',
    chicagoLanguage: 'Língua familiar',
    chicagoFun: 'Curiosidade',
    familyTitle: 'Família do Papa Leão XIV',
    positionsTitle: 'Posições do magistério: pró-vida, LGBT, IA, migração, Missa em latim',
    positionsLead: 'Resumo das posições do Papa Leão XIV sobre os temas mais procurados, com contexto completo e ligação à fonte.',
    sourceLabel: 'Fonte',
    physicalTitle: 'Dados físicos e pessoais',
    heightLbl: 'Altura',
    languagesLbl: 'Idiomas falados',
    shieldTitle: 'Brasão papal e lema',
    mottoTranslation: 'Tradução',
    socialTitle: 'Redes sociais e canais oficiais',
    socialOfficial: 'Contas oficiais do Papa',
    faqTitle: 'Perguntas frequentes sobre o Papa Leão XIV',
    sourcesTitle: 'Fontes',
    sourcesLead: 'Dados biográficos recolhidos de fontes oficiais e públicas.',
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
    chicagoTitle: 'El Papa de Chicago: arrels i cultura personal',
    chicagoNeighborhood: 'Barri natal',
    chicagoParish: 'Parròquia de la infància',
    chicagoHS: 'Institut',
    chicagoTeam: 'Equip esportiu preferit',
    chicagoEthnicity: 'Ascendència i ètnia',
    chicagoLanguage: 'Llengua familiar',
    chicagoFun: 'Curiositat',
    familyTitle: 'Família del Papa Lleó XIV',
    positionsTitle: 'Posicions del magisteri: pro-vida, LGBT, IA, immigració, missa en llatí',
    positionsLead: 'Resum de les posicions del Papa Lleó XIV sobre els temes més cercats, amb context complet i enllaç a la font.',
    sourceLabel: 'Font',
    physicalTitle: 'Dades físiques i personals',
    heightLbl: 'Alçada',
    languagesLbl: 'Llengües parlades',
    shieldTitle: 'Escut papal i lema',
    mottoTranslation: 'Traducció',
    socialTitle: 'Xarxes socials i canals oficials',
    socialOfficial: 'Comptes oficials del Papa',
    faqTitle: 'Preguntes freqüents sobre el Papa Lleó XIV',
    sourcesTitle: 'Fonts',
    sourcesLead: 'Dades biogràfiques recollides de fonts oficials i públiques.',
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
    chicagoTitle: 'O Papa de Chicago: raíces e cultura persoal',
    chicagoNeighborhood: 'Barrio natal',
    chicagoParish: 'Parroquia da infancia',
    chicagoHS: 'Instituto',
    chicagoTeam: 'Equipo deportivo favorito',
    chicagoEthnicity: 'Ascendencia e etnia',
    chicagoLanguage: 'Lingua familiar',
    chicagoFun: 'Curiosidade',
    familyTitle: 'Familia do Papa León XIV',
    positionsTitle: 'Posicións do maxisterio: pro-vida, LGTB, IA, migración, misa en latín',
    positionsLead: 'Resumo das posicións do Papa León XIV sobre os temas máis buscados, con contexto completo e ligazón á fonte.',
    sourceLabel: 'Fonte',
    physicalTitle: 'Datos físicos e persoais',
    heightLbl: 'Altura',
    languagesLbl: 'Linguas faladas',
    shieldTitle: 'Escudo papal e lema',
    mottoTranslation: 'Tradución',
    socialTitle: 'Redes sociais e canles oficiais',
    socialOfficial: 'Contas oficiais do Papa',
    faqTitle: 'Preguntas frecuentes sobre o Papa León XIV',
    sourcesTitle: 'Fontes',
    sourcesLead: 'Datos biográficos recollidos de fontes oficiais e públicas.',
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
    chicagoTitle: 'Chicago-ko Aita Santua: sustraiak eta kultura pertsonala',
    chicagoNeighborhood: 'Jaioterri auzoa',
    chicagoParish: 'Haurtzaroko parrokia',
    chicagoHS: 'Institutua',
    chicagoTeam: 'Kirol talde gogokoena',
    chicagoEthnicity: 'Jatorria eta etnia',
    chicagoLanguage: 'Familiako hizkuntza',
    chicagoFun: 'Jakingarria',
    familyTitle: 'Leon XIV.aren familia',
    positionsTitle: 'Magisterio-jarrerak: bizitzaren alde, LGTB, AA, migrazioa, latineko meza',
    positionsLead: 'Leon XIV.aren jarreren laburpena bilaketa gehien dituzten gaiei buruz, testuinguru osoarekin eta iturrirako estekarekin.',
    sourceLabel: 'Iturria',
    physicalTitle: 'Datu fisikoak eta pertsonalak',
    heightLbl: 'Altuera',
    languagesLbl: 'Hizkuntzak',
    shieldTitle: 'Ikurra eta lema papala',
    mottoTranslation: 'Itzulpena',
    socialTitle: 'Sare sozialak eta kanal ofizialak',
    socialOfficial: 'Aita Santuaren kontu ofizialak',
    faqTitle: 'Leon XIV.ari buruzko ohiko galderak',
    sourcesTitle: 'Iturriak',
    sourcesLead: 'Iturri ofizial eta publikoetatik bildutako datu biografikoak.',
  },
} as const

export default function PapaBiografiaPage({ locale }: Props) {
  // Fallback a ES para claves no traducidas (nuevas secciones)
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es
  const timelineVida = getTimelineVida(locale)
  const posicionesMagisterio = getPosicionesMagisterio(locale)
  const faqPapaLeonXIV = getFaqPapaLeonXIV(locale)

  return (
    <>
      {/* Schema Person expandido: birthPlace, nationality, height, languages, parents, alumniOf, sameAs */}
      <JsonLd data={popeLeoPersonSchema()} />

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

            {/* Chicago: raíces personales */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.chicagoTitle}
              </h2>
              <dl className="grid gap-3 rounded-xl border border-gray-100 bg-white p-5 text-sm shadow-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.chicagoNeighborhood}</dt>
                  <dd className="text-papal-navy">{raicesChicago.barrioNatal}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.chicagoParish}</dt>
                  <dd className="text-papal-navy">{raicesChicago.parroquiaInfancia}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.chicagoHS}</dt>
                  <dd className="text-papal-navy">{raicesChicago.instituto}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.chicagoTeam}</dt>
                  <dd className="text-papal-navy">{raicesChicago.equipoDeportivo}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.chicagoEthnicity}</dt>
                  <dd className="text-papal-navy">{raicesChicago.etnicidad}</dd>
                </div>
              </dl>
              <p className="mt-3 rounded bg-papal-cream px-3 py-2 text-sm italic text-papal-navy/80">
                🎯 {t.chicagoFun}: {raicesChicago.datoCurioso}
              </p>
            </section>

            {/* Familia */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.familyTitle}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {familiaPapa.map((m) => (
                  <div key={m.nombre} className="rounded-xl border border-gray-100 bg-white p-4 text-sm shadow-sm">
                    <p className="text-xs font-semibold uppercase text-papal-gold-dark">{m.relacion}</p>
                    <p className="mt-1 font-heading font-bold text-papal-navy">{m.nombre}</p>
                    <p className="mt-1 text-papal-navy/70">{m.datos}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Posiciones del magisterio */}
            <section>
              <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">
                {t.positionsTitle}
              </h2>
              <p className="mb-4 text-sm text-papal-navy/70">{t.positionsLead}</p>
              <div className="space-y-3">
                {posicionesMagisterio.map((p) => (
                  <details
                    key={p.tema}
                    className="rounded-xl border border-papal-gold/20 bg-white p-4 shadow-sm"
                  >
                    <summary className="cursor-pointer select-none font-heading font-bold text-papal-navy">
                      {p.tema} — <span className="font-normal text-papal-navy/70">{p.resumen}</span>
                    </summary>
                    <p className="mt-3 text-sm text-papal-navy/85">{p.detalle}</p>
                    <p className="mt-2 text-xs italic text-papal-navy/50">
                      {t.sourceLabel}: {p.fuente}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Escudo y lema */}
            <section>
              <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
                {t.shieldTitle}
              </h2>
              <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
                <p className="font-serif text-lg italic text-papal-navy">
                  « {biografiaPapa.lemaEpiscopal} »
                </p>
                <p className="mt-1 text-sm text-papal-navy/70">
                  <strong>{t.mottoTranslation}:</strong> {biografiaPapa.lemaTraduccion}
                </p>
                <p className="mt-3 text-sm text-papal-navy/80">
                  {biografiaPapa.escudoDescripcion}
                </p>
              </div>
            </section>

            {/* FAQ con schema */}
            <section>
              <JsonLd
                data={faqPageSchema(
                  faqPapaLeonXIV.map((f) => ({
                    question: f.pregunta,
                    answer: f.respuesta,
                    category: 'general',
                  })),
                  locale
                )}
              />
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.faqTitle}
              </h2>
              <div className="space-y-2">
                {faqPapaLeonXIV.map((f, i) => (
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

            {/* Fuentes */}
            <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">
                📚 {t.sourcesTitle}
              </h2>
              <p className="mb-3 text-sm text-papal-navy/70">{t.sourcesLead}</p>
              <ul className="space-y-1 text-xs text-papal-navy/70">
                <li>• <a href="https://www.vatican.va/content/leo-xiv/es.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican.va — ficha biográfica oficial del Papa León XIV</a></li>
                <li>• <a href="https://press.vatican.va" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Sala Stampa de la Santa Sede — boletines y discursos oficiales</a></li>
                <li>• <a href="https://www.vaticannews.va/es.html" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Vatican News (multilingüe) — noticias oficiales de la Santa Sede</a></li>
                <li>• <a href="https://www.catholicnewsagency.com" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Catholic News Agency (CNA)</a> y <a href="https://www.aciprensa.com" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">ACI Prensa</a> — cobertura eclesial</li>
                <li>• <a href="https://www.osanet.org" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Orden de San Agustín (Curia Generalicia, Roma)</a> — archivos de la OSA</li>
                <li>• <a href="https://www.diocesisdechiclayo.org" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Diócesis de Chiclayo (Perú)</a> — etapa episcopal</li>
                <li>• <a href="https://en.wikipedia.org/wiki/Pope_Leo_XIV" target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">Wikipedia (EN/ES) — con referencias cruzadas verificadas</a></li>
                <li>• Hemeroteca: <em>El País, ABC, COPE, L&apos;Osservatore Romano, America Magazine, Crux, Il Sismografo</em> (mayo 2025 — presente).</li>
              </ul>
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
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.heightLbl}</dt>
                  <dd className="text-papal-navy">{biografiaPapa.altura}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.languagesLbl}</dt>
                  <dd className="text-papal-navy">{biografiaPapa.idiomas.join(', ')}</dd>
                </div>
              </dl>
            </div>

            {/* Redes sociales / canales oficiales */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-heading text-base font-bold text-papal-navy">
                {t.socialTitle}
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">{redesSociales.pontifex.descripcion}</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={redesSociales.pontifex.twitter} target="_blank" rel="noopener noreferrer"
                     className="text-papal-gold hover:underline">
                    @Pontifex en X (Twitter) →
                  </a>
                </li>
                <li>
                  <a href={redesSociales.pontifex.instagram} target="_blank" rel="noopener noreferrer"
                     className="text-papal-gold hover:underline">
                    Franciscus en Instagram →
                  </a>
                </li>
                <li>
                  <a href={redesSociales.vaticanNews.url} target="_blank" rel="noopener noreferrer"
                     className="text-papal-gold hover:underline">
                    Vatican News (53 idiomas) →
                  </a>
                </li>
                <li>
                  <a href={redesSociales.vaticano.url} target="_blank" rel="noopener noreferrer"
                     className="text-papal-gold hover:underline">
                    Vatican.va (portal oficial) →
                  </a>
                </li>
              </ul>
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

        {/* Internal linking · Explora también */}
        <nav aria-label="Related" className="mt-12 rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
          <h2 className="mb-4 font-heading text-xl font-bold text-papal-navy">
            {locale === 'en' ? 'Explore also' :
             locale === 'it' ? 'Esplora anche' :
             locale === 'fr' ? 'Explorer aussi' :
             locale === 'de' ? 'Entdecken Sie auch' :
             locale === 'pt' ? 'Explorar também' :
             locale === 'ca' ? 'Explora també' :
             locale === 'gl' ? 'Explora tamén' :
             locale === 'eu' ? 'Esploratu ere' :
             'Explora también'}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={localizePath('/historia-visitas-papales', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                {locale === 'en' ? 'Papal Visits to Spain (1982-2026)' :
                 locale === 'it' ? 'Visite papali in Spagna (1982-2026)' :
                 locale === 'fr' ? 'Visites papales en Espagne (1982-2026)' :
                 locale === 'de' ? 'Papstbesuche in Spanien (1982-2026)' :
                 locale === 'pt' ? 'Visitas papais a Espanha (1982-2026)' :
                 locale === 'ca' ? 'Visites papals a Espanya (1982-2026)' :
                 locale === 'gl' ? 'Visitas papais a España (1982-2026)' :
                 locale === 'eu' ? 'Bisitaldi papalak Espainian (1982-2026)' :
                 'Historia de visitas papales a España (1982-2026)'}
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">
                Juan Pablo II · Benedicto XVI · León XIV
              </p>
            </Link>
            <Link href={localizePath('/programa', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                {locale === 'en' ? 'Full Schedule of the Visit' :
                 locale === 'it' ? 'Programma completo della visita' :
                 locale === 'fr' ? 'Programme complet de la visite' :
                 locale === 'de' ? 'Vollständiges Besuchsprogramm' :
                 locale === 'pt' ? 'Programa completo da visita' :
                 locale === 'ca' ? 'Programa complet de la visita' :
                 locale === 'gl' ? 'Programa completo da visita' :
                 locale === 'eu' ? 'Bisitaldiaren egitaraua' :
                 'Programa completo de la visita'}
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">6-12 junio 2026 · 24 actos</p>
            </Link>
            <Link href={localizePath('/ciudades', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                {locale === 'en' ? 'Cities of the Visit' :
                 locale === 'it' ? 'Città della visita' :
                 locale === 'fr' ? 'Villes de la visite' :
                 locale === 'de' ? 'Besuchsstädte' :
                 locale === 'pt' ? 'Cidades da visita' :
                 locale === 'ca' ? 'Ciutats de la visita' :
                 locale === 'gl' ? 'Cidades da visita' :
                 locale === 'eu' ? 'Bisitaldiaren hiriak' :
                 'Ciudades de la visita'}
              </h3>
              <p className="mt-1 text-xs text-papal-navy/60">Madrid · Barcelona · Gran Canaria · Tenerife</p>
            </Link>
          </div>
        </nav>
      </Container>
    </>
  )
}
