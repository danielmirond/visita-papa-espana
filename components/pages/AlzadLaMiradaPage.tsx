import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import {
  lemaData,
  traduccionesLema,
  razonesEleccion,
  lemasPrevios,
  faqLema,
} from '@/data/alzadLaMirada'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { faqPageSchema } from '@/lib/schema/generators'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: '¿De dónde viene "Alzad la mirada"?',
    title: '"Alzad la mirada": origen y significado del lema de la visita papal',
    subtitle:
      'El claim del viaje apostólico del Papa León XIV a España procede del Evangelio de Juan (4, 35). Explicación del versículo, del contexto bíblico y de por qué lo eligió la Conferencia Episcopal Española.',
    originTitle: 'Origen bíblico: Juan 4, 35',
    sceneTitle: 'El contexto: Jesús y la samaritana',
    literalTitle: 'Significado literal',
    spiritualTitle: 'Significado espiritual',
    whyChosenTitle: 'Por qué la Conferencia Episcopal eligió este lema',
    translationsTitle: 'El lema en 11 idiomas',
    prevMottosTitle: 'Lemas de visitas papales anteriores a España',
    faqTitle: 'Preguntas frecuentes sobre "Alzad la mirada"',
    sourcesTitle: 'Fuentes',
    dataTitle: 'Datos del lema',
    referenceBlt: 'Referencia bíblica',
    bookBlt: 'Libro',
    chapterBlt: 'Capítulo',
    verseBlt: 'Versículo',
    originBlt: 'Origen',
    biblicaLead: 'El lema oficial de la visita apostólica del Papa León XIV a España (6-12 junio 2026) procede de un versículo del Evangelio de san Juan.',
    verseInSpanish: 'Versículo completo (español)',
    verseOriginal: 'Original griego y traducción latina',
    sceneWhere: 'Dónde',
    exploreAlso: 'Explora también',
  },
  en: {
    breadcrumb: 'Where does "Lift up your eyes" come from?',
    title: '"Lift up your eyes": origin and meaning of the papal visit motto',
    subtitle:
      'The claim of Pope Leo XIV\'s apostolic journey to Spain comes from the Gospel of John (4:35). Biblical context, verse and why the Spanish Episcopal Conference chose it.',
    originTitle: 'Biblical origin: John 4:35',
    sceneTitle: 'The context: Jesus and the Samaritan woman',
    literalTitle: 'Literal meaning',
    spiritualTitle: 'Spiritual meaning',
    whyChosenTitle: 'Why the Spanish Episcopal Conference chose this motto',
    translationsTitle: 'The motto in 11 languages',
    prevMottosTitle: 'Mottos of previous papal visits to Spain',
    faqTitle: 'FAQ about "Lift up your eyes"',
    sourcesTitle: 'Sources',
    dataTitle: 'Motto data',
    referenceBlt: 'Biblical reference',
    bookBlt: 'Book',
    chapterBlt: 'Chapter',
    verseBlt: 'Verse',
    originBlt: 'Origin',
    biblicaLead: 'The official motto of Pope Leo XIV\'s apostolic journey to Spain (6-12 June 2026) comes from a verse in the Gospel of John.',
    verseInSpanish: 'Full verse (Spanish)',
    verseOriginal: 'Original Greek and Latin',
    sceneWhere: 'Where',
    exploreAlso: 'Explore also',
  },
  it: {
    breadcrumb: 'Da dove viene "Alzate gli occhi"?',
    title: '"Alzate gli occhi": origine e significato del motto della visita papale',
    subtitle: 'Il motto del viaggio apostolico di Papa Leone XIV in Spagna viene dal Vangelo di Giovanni (4, 35). Contesto biblico, versetto e perché l\'ha scelto la CEE.',
    originTitle: 'Origine biblica: Giovanni 4, 35',
    sceneTitle: 'Il contesto: Gesù e la samaritana',
    literalTitle: 'Significato letterale',
    spiritualTitle: 'Significato spirituale',
    whyChosenTitle: 'Perché la Conferenza Episcopale ha scelto questo motto',
    translationsTitle: 'Il motto in 11 lingue',
    prevMottosTitle: 'Motti di visite papali precedenti in Spagna',
    faqTitle: 'FAQ su "Alzate gli occhi"',
    sourcesTitle: 'Fonti',
    dataTitle: 'Dati del motto',
    referenceBlt: 'Riferimento biblico',
    bookBlt: 'Libro',
    chapterBlt: 'Capitolo',
    verseBlt: 'Versetto',
    originBlt: 'Origine',
    biblicaLead: 'Il motto ufficiale della visita apostolica di Papa Leone XIV in Spagna (6-12 giugno 2026) proviene da un versetto del Vangelo di san Giovanni.',
    verseInSpanish: 'Versetto completo',
    verseOriginal: 'Originale greco e latino',
    sceneWhere: 'Dove',
    exploreAlso: 'Esplora anche',
  },
  fr: {
    breadcrumb: 'D\'où vient "Levez les yeux" ?',
    title: '"Levez les yeux" : origine et sens de la devise de la visite papale',
    subtitle: 'La devise du voyage apostolique du Pape Léon XIV en Espagne vient de l\'Évangile de Jean (4, 35). Contexte biblique, verset et pourquoi la CEE l\'a choisie.',
    originTitle: 'Origine biblique : Jean 4, 35',
    sceneTitle: 'Le contexte : Jésus et la Samaritaine',
    literalTitle: 'Sens littéral',
    spiritualTitle: 'Sens spirituel',
    whyChosenTitle: 'Pourquoi la Conférence Épiscopale a choisi cette devise',
    translationsTitle: 'La devise en 11 langues',
    prevMottosTitle: 'Devises des visites papales précédentes en Espagne',
    faqTitle: 'FAQ sur "Levez les yeux"',
    sourcesTitle: 'Sources',
    dataTitle: 'Données de la devise',
    referenceBlt: 'Référence biblique',
    bookBlt: 'Livre',
    chapterBlt: 'Chapitre',
    verseBlt: 'Verset',
    originBlt: 'Origine',
    biblicaLead: 'La devise officielle du voyage apostolique du Pape Léon XIV en Espagne (6-12 juin 2026) vient d\'un verset de l\'Évangile de saint Jean.',
    verseInSpanish: 'Verset complet',
    verseOriginal: 'Grec original et latin',
    sceneWhere: 'Où',
    exploreAlso: 'Explorer aussi',
  },
  de: {
    breadcrumb: 'Woher kommt "Erhebt eure Augen"?',
    title: '"Erhebt eure Augen": Ursprung und Bedeutung des Papstbesuchsmottos',
    subtitle: 'Das Motto der Apostolischen Reise von Papst Leo XIV nach Spanien stammt aus dem Johannesevangelium (4, 35). Biblischer Kontext, Vers und warum die CEE es wählte.',
    originTitle: 'Biblischer Ursprung: Johannes 4, 35',
    sceneTitle: 'Der Kontext: Jesus und die Samariterin',
    literalTitle: 'Wörtliche Bedeutung',
    spiritualTitle: 'Geistliche Bedeutung',
    whyChosenTitle: 'Warum die Bischofskonferenz dieses Motto wählte',
    translationsTitle: 'Das Motto in 11 Sprachen',
    prevMottosTitle: 'Mottos früherer Papstbesuche in Spanien',
    faqTitle: 'FAQ zu "Erhebt eure Augen"',
    sourcesTitle: 'Quellen',
    dataTitle: 'Motto-Daten',
    referenceBlt: 'Biblische Referenz',
    bookBlt: 'Buch',
    chapterBlt: 'Kapitel',
    verseBlt: 'Vers',
    originBlt: 'Ursprung',
    biblicaLead: 'Das offizielle Motto des Papstbesuchs Leo XIV in Spanien (6.-12. Juni 2026) stammt aus einem Vers des Johannesevangeliums.',
    verseInSpanish: 'Vollständiger Vers',
    verseOriginal: 'Griechisches Original und Latein',
    sceneWhere: 'Wo',
    exploreAlso: 'Entdecken Sie auch',
  },
  pt: {
    breadcrumb: 'De onde vem "Levantai os olhos"?',
    title: '"Levantai os olhos": origem e significado do lema da visita papal',
    subtitle: 'O lema da viagem apostólica do Papa Leão XIV a Espanha vem do Evangelho de João (4, 35). Contexto bíblico, versículo e porque a CEE o escolheu.',
    originTitle: 'Origem bíblica: João 4, 35',
    sceneTitle: 'O contexto: Jesus e a Samaritana',
    literalTitle: 'Significado literal',
    spiritualTitle: 'Significado espiritual',
    whyChosenTitle: 'Porquê a Conferência Episcopal escolheu este lema',
    translationsTitle: 'O lema em 11 línguas',
    prevMottosTitle: 'Lemas de visitas papais anteriores a Espanha',
    faqTitle: 'FAQ sobre "Levantai os olhos"',
    sourcesTitle: 'Fontes',
    dataTitle: 'Dados do lema',
    referenceBlt: 'Referência bíblica',
    bookBlt: 'Livro',
    chapterBlt: 'Capítulo',
    verseBlt: 'Versículo',
    originBlt: 'Origem',
    biblicaLead: 'O lema oficial da viagem apostólica do Papa Leão XIV a Espanha (6-12 junho 2026) provém de um versículo do Evangelho de São João.',
    verseInSpanish: 'Versículo completo',
    verseOriginal: 'Grego original e latim',
    sceneWhere: 'Onde',
    exploreAlso: 'Explorar também',
  },
  ca: {
    breadcrumb: 'D\'on ve "Alceu els ulls"?',
    title: '"Alceu els ulls": origen i significat del lema de la visita papal',
    subtitle: 'El lema del viatge apostòlic del Papa Lleó XIV a Espanya prové de l\'Evangeli de Joan (4, 35). Context bíblic, versicle i per què la CEE el va escollir.',
    originTitle: 'Origen bíblic: Joan 4, 35',
    sceneTitle: 'El context: Jesús i la samaritana',
    literalTitle: 'Significat literal',
    spiritualTitle: 'Significat espiritual',
    whyChosenTitle: 'Per què la Conferència Episcopal va escollir aquest lema',
    translationsTitle: 'El lema en 11 llengües',
    prevMottosTitle: 'Lemes de visites papals anteriors a Espanya',
    faqTitle: 'FAQ sobre "Alceu els ulls"',
    sourcesTitle: 'Fonts',
    dataTitle: 'Dades del lema',
    referenceBlt: 'Referència bíblica',
    bookBlt: 'Llibre',
    chapterBlt: 'Capítol',
    verseBlt: 'Versicle',
    originBlt: 'Origen',
    biblicaLead: 'El lema oficial del viatge apostòlic del Papa Lleó XIV a Espanya (6-12 juny 2026) prové d\'un versicle de l\'Evangeli de sant Joan.',
    verseInSpanish: 'Versicle complet',
    verseOriginal: 'Grec original i llatí',
    sceneWhere: 'On',
    exploreAlso: 'Explora també',
  },
  gl: {
    breadcrumb: 'De onde vén "Erguei os ollos"?',
    title: '"Erguei os ollos": orixe e significado do lema da visita papal',
    subtitle: 'O lema da viaxe apostólica do Papa León XIV a España vén do Evanxeo de Xoán (4, 35). Contexto bíblico, versículo e por que a CEE o escolleu.',
    originTitle: 'Orixe bíblica: Xoán 4, 35',
    sceneTitle: 'O contexto: Xesús e a samaritana',
    literalTitle: 'Significado literal',
    spiritualTitle: 'Significado espiritual',
    whyChosenTitle: 'Por que a Conferencia Episcopal escolleu este lema',
    translationsTitle: 'O lema en 11 linguas',
    prevMottosTitle: 'Lemas de visitas papais anteriores a España',
    faqTitle: 'FAQ sobre "Erguei os ollos"',
    sourcesTitle: 'Fontes',
    dataTitle: 'Datos do lema',
    referenceBlt: 'Referencia bíblica',
    bookBlt: 'Libro',
    chapterBlt: 'Capítulo',
    verseBlt: 'Versículo',
    originBlt: 'Orixe',
    biblicaLead: 'O lema oficial da viaxe apostólica do Papa León XIV a España (6-12 xuño 2026) vén dun versículo do Evanxeo de san Xoán.',
    verseInSpanish: 'Versículo completo',
    verseOriginal: 'Grego orixinal e latín',
    sceneWhere: 'Onde',
    exploreAlso: 'Explora tamén',
  },
  eu: {
    breadcrumb: 'Nondik dator "Jaso begiak"?',
    title: '"Jaso begiak": bisitaldi papalaren lemaren jatorria eta esanahia',
    subtitle: 'Leon XIV.a Aita Santuaren Espainiarako bisitaldiaren lema Joan ebanjelioko 4, 35etik dator. Testuinguru biblikoa, bertsoa eta zergatik aukeratu zuen CEE-k.',
    originTitle: 'Jatorri biblikoa: Joan 4, 35',
    sceneTitle: 'Testuingurua: Jesus eta samariarra',
    literalTitle: 'Esanahi literala',
    spiritualTitle: 'Esanahi espirituala',
    whyChosenTitle: 'Zergatik hautatu zuen Gotzain Batzarrak lema hau',
    translationsTitle: 'Lema 11 hizkuntzatan',
    prevMottosTitle: 'Aurreko bisitaldi papalen lemak Espainian',
    faqTitle: '"Jaso begiak" buruzko ohiko galderak',
    sourcesTitle: 'Iturriak',
    dataTitle: 'Lemaren datuak',
    referenceBlt: 'Erreferentzia biblikoa',
    bookBlt: 'Liburua',
    chapterBlt: 'Kapitulua',
    verseBlt: 'Bertsoa',
    originBlt: 'Jatorria',
    biblicaLead: 'Leon XIV.a Aita Santuaren Espainiarako bidai apostolikoaren (2026ko ekainaren 6-12) lema ofiziala san Joan ebanjelioko bertso batetik dator.',
    verseInSpanish: 'Bertso osoa',
    verseOriginal: 'Grezia jatorrizkoa eta latina',
    sceneWhere: 'Non',
    exploreAlso: 'Esploratu ere',
  },
} as const

export default function AlzadLaMiradaPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es
  const versEs = traduccionesLema.find((x) => x.locale === 'es')!
  const versGrc = traduccionesLema.find((x) => x.locale === 'grc')!
  const versLa = traduccionesLema.find((x) => x.locale === 'la')!

  return (
    <>
      <JsonLd
        data={faqPageSchema(
          faqLema.map((f) => ({ question: f.pregunta, answer: f.respuesta, category: 'general' })),
          locale
        )}
      />

      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs
            items={[
              { name: t.breadcrumb, href: localizePath('/alzad-la-mirada', locale) },
            ]}
          />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            {/* Lead */}
            <section className="rounded-xl border border-papal-gold/30 bg-papal-cream p-6">
              <p className="text-papal-navy/85">{t.biblicaLead}</p>
              <blockquote className="mt-4 rounded-lg border-l-4 border-papal-gold bg-white p-5 font-serif text-lg italic text-papal-navy">
                {versEs.versiculoCompleto}
                <footer className="mt-2 text-sm not-italic text-papal-navy/60">
                  — {lemaData.referenciaBiblicaLarga} ({versEs.biblia})
                </footer>
              </blockquote>
            </section>

            {/* Origen bíblico */}
            <section>
              <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
                {t.originTitle}
              </h2>
              <div className="space-y-4 text-papal-navy/85">
                <h3 className="font-heading text-lg font-bold text-papal-navy">{t.sceneTitle}</h3>
                <p className="text-sm text-papal-navy/60">
                  <strong>{t.sceneWhere}:</strong> {lemaData.contextoPasaje.escena}
                </p>
                <p>{lemaData.contextoPasaje.descripcion}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-5 shadow-sm">
                    <h4 className="mb-2 font-heading font-bold text-papal-navy">{t.literalTitle}</h4>
                    <p className="text-sm text-papal-navy/80">
                      {lemaData.contextoPasaje.significadoLiteral}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-5 shadow-sm">
                    <h4 className="mb-2 font-heading font-bold text-papal-navy">{t.spiritualTitle}</h4>
                    <p className="text-sm text-papal-navy/80">
                      {lemaData.contextoPasaje.significadoEspiritual}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Original griego y latín */}
            <section>
              <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
                {t.verseOriginal}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">
                    {versGrc.idioma}
                  </p>
                  <p className="mt-2 font-serif text-lg text-papal-navy">
                    {versGrc.lema}
                  </p>
                  <p className="mt-2 text-sm text-papal-navy/70">{versGrc.versiculoCompleto}</p>
                  <p className="mt-2 text-xs italic text-papal-navy/50">{versGrc.biblia}</p>
                </div>
                <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">
                    {versLa.idioma}
                  </p>
                  <p className="mt-2 font-serif text-lg italic text-papal-navy">{versLa.lema}</p>
                  <p className="mt-2 text-sm text-papal-navy/70">{versLa.versiculoCompleto}</p>
                  <p className="mt-2 text-xs italic text-papal-navy/50">{versLa.biblia}</p>
                </div>
              </div>
            </section>

            {/* Por qué la CEE */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.whyChosenTitle}
              </h2>
              <div className="space-y-3">
                {razonesEleccion.map((r) => (
                  <article
                    key={r.titulo}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-heading text-base font-bold text-papal-navy">{r.titulo}</h3>
                    <p className="mt-2 text-sm text-papal-navy/75">{r.descripcion}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Traducciones */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.translationsTitle}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {traduccionesLema
                  .filter((x) => !['grc', 'la'].includes(x.locale))
                  .map((tr) => (
                    <div
                      key={tr.locale}
                      className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">
                        {tr.idioma}
                      </p>
                      <p className="mt-1 font-heading text-lg font-bold text-papal-navy">
                        «{tr.lema}»
                      </p>
                      <p className="mt-2 text-xs text-papal-navy/65">{tr.versiculoCompleto}</p>
                    </div>
                  ))}
              </div>
            </section>

            {/* Lemas previos */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.prevMottosTitle}
              </h2>
              <ul className="space-y-2">
                {lemasPrevios.map((l, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-gray-100 bg-white p-4 text-sm shadow-sm"
                  >
                    <p className="text-xs text-papal-gold-dark">
                      <strong>{l.papa}</strong> · {l.año} · {l.visita}
                    </p>
                    <p className="mt-1 font-serif italic text-papal-navy">«{l.lema}»</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.faqTitle}
              </h2>
              <div className="space-y-2">
                {faqLema.map((f, i) => (
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

            {/* Internal linking */}
            <nav aria-label="Related" className="rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
              <h2 className="mb-4 font-heading text-xl font-bold text-papal-navy">
                {t.exploreAlso}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href={localizePath('/papa-leon-xiv', locale)}
                  className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                    Papa León XIV
                  </h3>
                  <p className="mt-1 text-xs text-papal-navy/60">
                    Biografía · magisterio · familia · idiomas
                  </p>
                </Link>
                <Link
                  href={localizePath('/historia-visitas-papales', locale)}
                  className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                    Historia de visitas papales
                  </h3>
                  <p className="mt-1 text-xs text-papal-navy/60">JP II · Benedicto · León XIV</p>
                </Link>
                <Link
                  href={localizePath('/himno', locale)}
                  className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                    Himno oficial
                  </h3>
                  <p className="mt-1 text-xs text-papal-navy/60">Letra, audio y partitura</p>
                </Link>
              </div>
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
              <h2 className="font-heading text-lg font-bold text-papal-navy">{t.dataTitle}</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.referenceBlt}
                  </dt>
                  <dd className="font-heading font-bold text-papal-navy">
                    {lemaData.referenciaBiblica}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.bookBlt}
                  </dt>
                  <dd className="text-papal-navy">{lemaData.libro}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.chapterBlt}
                  </dt>
                  <dd className="text-papal-navy">{lemaData.capitulo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.verseBlt}
                  </dt>
                  <dd className="text-papal-navy">{lemaData.versiculo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.originBlt}
                  </dt>
                  <dd className="text-papal-navy">{lemaData.origen}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <p className="text-center font-serif text-2xl italic text-papal-gold">
                «{lemaData.lemaEs}»
              </p>
              <p className="mt-2 text-center text-xs text-white/50">
                {lemaData.referenciaBiblica}
              </p>
            </div>

            <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-2 font-heading text-base font-bold text-papal-navy">
                📚 {t.sourcesTitle}
              </h3>
              <ul className="space-y-1 text-xs text-papal-navy/70">
                <li>
                  •{' '}
                  <a
                    href="https://www.conferenciaepiscopal.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-papal-gold-dark"
                  >
                    Conferencia Episcopal Española — nota oficial sobre el lema
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://www.vatican.va/archive/ESL0506/__PWK.HTM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-papal-gold-dark"
                  >
                    Evangelio según san Juan (Vaticano.va, edición española)
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://www.biblegateway.com/passage/?search=John+4%3A35"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-papal-gold-dark"
                  >
                    BibleGateway — Jn 4, 35 en múltiples versiones
                  </a>
                </li>
                <li>• Sagrada Biblia, edición oficial de la Conferencia Episcopal Española (BAC).</li>
                <li>• Novum Testamentum Graece, Nestle-Aland 28ª ed.</li>
                <li>• Vulgata Clementina (ed. Colunga-Turrado, BAC).</li>
              </ul>
            </section>
          </aside>
        </div>
      </Container>
    </>
  )
}
