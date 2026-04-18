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
