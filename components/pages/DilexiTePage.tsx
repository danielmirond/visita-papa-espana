import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import {
  getDilexiTeData,
  getTemasDilexiTe,
  getCitasClavesDilexiTe,
  getFaqDilexiTe,
} from '@/data/i18n/content/dilexiTe'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { faqPageSchema } from '@/lib/schema/generators'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: primera exhortación apostólica del Papa León XIV',
    subtitle:
      '«Te he amado». Primera exhortación apostólica del pontificado de León XIV (11 febrero 2026) sobre el amor de Dios y la caridad a los pobres. Contexto, temas, citas clave y FAQ.',
    introTitle: '¿Qué es "Dilexi Te"?',
    metaTitle: 'Datos del documento',
    dataAuthor: 'Autor',
    dataDate: 'Fecha de publicación',
    dataParagraphs: 'Párrafos',
    dataExtension: 'Extensión',
    dataReference: 'Referencia bíblica',
    themesTitle: 'Temas principales',
    quotesTitle: 'Citas clave',
    faqTitle: 'Preguntas frecuentes sobre "Dilexi Te"',
    readFull: 'Leer el texto oficial completo en Vatican.va →',
    paragraph: 'párrafos',
    context: 'Contexto',
    exploreAlso: 'Explora también',
    sourcesTitle: 'Fuentes',
  },
  en: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: Pope Leo XIV\'s First Apostolic Exhortation',
    subtitle:
      '"I have loved you". First apostolic exhortation of Pope Leo XIV\'s pontificate (11 February 2026) on God\'s love and charity to the poor. Context, themes, key quotes and FAQ.',
    introTitle: 'What is "Dilexi Te"?',
    metaTitle: 'Document data',
    dataAuthor: 'Author',
    dataDate: 'Publication date',
    dataParagraphs: 'Paragraphs',
    dataExtension: 'Length',
    dataReference: 'Biblical reference',
    themesTitle: 'Main topics',
    quotesTitle: 'Key quotes',
    faqTitle: 'FAQ about "Dilexi Te"',
    readFull: 'Read the full official text on Vatican.va →',
    paragraph: 'paragraphs',
    context: 'Context',
    exploreAlso: 'Explore also',
    sourcesTitle: 'Sources',
  },
  it: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: prima esortazione apostolica di Papa Leone XIV',
    subtitle: '"Ti ho amato". Prima esortazione apostolica del pontificato di Leone XIV (11 febbraio 2026) sull\'amore di Dio e la carità verso i poveri. Contesto, temi, citazioni chiave e FAQ.',
    introTitle: 'Che cos\'è "Dilexi Te"?',
    metaTitle: 'Dati del documento',
    dataAuthor: 'Autore',
    dataDate: 'Data di pubblicazione',
    dataParagraphs: 'Paragrafi',
    dataExtension: 'Estensione',
    dataReference: 'Riferimento biblico',
    themesTitle: 'Temi principali',
    quotesTitle: 'Citazioni chiave',
    faqTitle: 'FAQ su "Dilexi Te"',
    readFull: 'Leggi il testo ufficiale completo su Vatican.va →',
    paragraph: 'paragrafi',
    context: 'Contesto',
    exploreAlso: 'Esplora anche',
    sourcesTitle: 'Fonti',
  },
  fr: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te : première exhortation apostolique de Léon XIV',
    subtitle: '"Je t\'ai aimé". Première exhortation apostolique du pontificat de Léon XIV (11 février 2026) sur l\'amour de Dieu et la charité envers les pauvres. Contexte, thèmes, citations clés et FAQ.',
    introTitle: 'Qu\'est-ce que "Dilexi Te" ?',
    metaTitle: 'Données du document',
    dataAuthor: 'Auteur',
    dataDate: 'Date de publication',
    dataParagraphs: 'Paragraphes',
    dataExtension: 'Longueur',
    dataReference: 'Référence biblique',
    themesTitle: 'Thèmes principaux',
    quotesTitle: 'Citations clés',
    faqTitle: 'FAQ sur "Dilexi Te"',
    readFull: 'Lire le texte officiel complet sur Vatican.va →',
    paragraph: 'paragraphes',
    context: 'Contexte',
    exploreAlso: 'Explorer aussi',
    sourcesTitle: 'Sources',
  },
  de: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: erstes Apostolisches Schreiben von Papst Leo XIV',
    subtitle: '"Ich habe dich geliebt". Erstes Apostolisches Schreiben des Pontifikats von Leo XIV (11. Februar 2026) über die Liebe Gottes und die Caritas für die Armen. Kontext, Themen, Schlüsselzitate und FAQ.',
    introTitle: 'Was ist "Dilexi Te"?',
    metaTitle: 'Dokumentdaten',
    dataAuthor: 'Autor',
    dataDate: 'Veröffentlichungsdatum',
    dataParagraphs: 'Abschnitte',
    dataExtension: 'Umfang',
    dataReference: 'Biblische Referenz',
    themesTitle: 'Hauptthemen',
    quotesTitle: 'Schlüsselzitate',
    faqTitle: 'FAQ zu "Dilexi Te"',
    readFull: 'Vollständigen offiziellen Text auf Vatican.va lesen →',
    paragraph: 'Abschnitte',
    context: 'Kontext',
    exploreAlso: 'Entdecken Sie auch',
    sourcesTitle: 'Quellen',
  },
  pt: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: primeira exortação apostólica de Leão XIV',
    subtitle: '"Eu te amei". Primeira exortação apostólica do pontificado de Leão XIV (11 fevereiro 2026) sobre o amor de Deus e a caridade aos pobres. Contexto, temas, citações-chave e FAQ.',
    introTitle: 'O que é "Dilexi Te"?',
    metaTitle: 'Dados do documento',
    dataAuthor: 'Autor',
    dataDate: 'Data de publicação',
    dataParagraphs: 'Parágrafos',
    dataExtension: 'Extensão',
    dataReference: 'Referência bíblica',
    themesTitle: 'Temas principais',
    quotesTitle: 'Citações-chave',
    faqTitle: 'FAQ sobre "Dilexi Te"',
    readFull: 'Ler o texto oficial completo em Vatican.va →',
    paragraph: 'parágrafos',
    context: 'Contexto',
    exploreAlso: 'Explorar também',
    sourcesTitle: 'Fontes',
  },
  ca: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: primera exhortació apostòlica de Lleó XIV',
    subtitle: '"T\'he estimat". Primera exhortació apostòlica del pontificat de Lleó XIV (11 febrer 2026) sobre l\'amor de Déu i la caritat als pobres. Context, temes, cites clau i FAQ.',
    introTitle: 'Què és "Dilexi Te"?',
    metaTitle: 'Dades del document',
    dataAuthor: 'Autor',
    dataDate: 'Data de publicació',
    dataParagraphs: 'Paràgrafs',
    dataExtension: 'Extensió',
    dataReference: 'Referència bíblica',
    themesTitle: 'Temes principals',
    quotesTitle: 'Cites clau',
    faqTitle: 'FAQ sobre "Dilexi Te"',
    readFull: 'Llegir el text oficial complet a Vatican.va →',
    paragraph: 'paràgrafs',
    context: 'Context',
    exploreAlso: 'Explora també',
    sourcesTitle: 'Fonts',
  },
  gl: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: primeira exhortación apostólica de León XIV',
    subtitle: '"Ámoche". Primeira exhortación apostólica do pontificado de León XIV (11 febreiro 2026) sobre o amor de Deus e a caridade aos pobres. Contexto, temas, citas clave e FAQ.',
    introTitle: 'Que é "Dilexi Te"?',
    metaTitle: 'Datos do documento',
    dataAuthor: 'Autor',
    dataDate: 'Data de publicación',
    dataParagraphs: 'Parágrafos',
    dataExtension: 'Extensión',
    dataReference: 'Referencia bíblica',
    themesTitle: 'Temas principais',
    quotesTitle: 'Citas clave',
    faqTitle: 'FAQ sobre "Dilexi Te"',
    readFull: 'Ler o texto oficial completo en Vatican.va →',
    paragraph: 'parágrafos',
    context: 'Contexto',
    exploreAlso: 'Explora tamén',
    sourcesTitle: 'Fontes',
  },
  eu: {
    breadcrumb: 'Dilexi Te',
    title: 'Dilexi Te: Leon XIV.aren lehen aholku apostolikoa',
    subtitle: '"Maitatu zaitut". Leon XIV.a Aita Santuaren lehen aholku apostolikoa (2026ko otsailaren 11) Jainkoaren maitasunari eta behartsuenganako karitateari buruz. Testuingurua, gaiak, aipu nagusiak eta FAQ.',
    introTitle: 'Zer da "Dilexi Te"?',
    metaTitle: 'Dokumentuaren datuak',
    dataAuthor: 'Egilea',
    dataDate: 'Argitalpen data',
    dataParagraphs: 'Paragrafoak',
    dataExtension: 'Luzera',
    dataReference: 'Erreferentzia biblikoa',
    themesTitle: 'Gai nagusiak',
    quotesTitle: 'Aipu nagusiak',
    faqTitle: '"Dilexi Te" buruzko ohiko galderak',
    readFull: 'Irakurri Vatican.va-n testu ofizial osoa →',
    paragraph: 'paragrafo',
    context: 'Testuingurua',
    exploreAlso: 'Esploratu ere',
    sourcesTitle: 'Iturriak',
  },
} as const

export default function DilexiTePage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es
  const dilexiTeData = getDilexiTeData(locale)
  const temasDilexiTe = getTemasDilexiTe(locale)
  const citasClavesDilexiTe = getCitasClavesDilexiTe(locale)
  const faqDilexiTe = getFaqDilexiTe(locale)

  return (
    <>
      <JsonLd
        data={faqPageSchema(
          faqDilexiTe.map((f) => ({
            question: f.pregunta,
            answer: f.respuesta,
            category: 'general',
          })),
          locale
        )}
      />

      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/dilexi-te', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Intro */}
            <section className="rounded-xl border border-papal-gold/30 bg-papal-cream p-6">
              <h2 className="font-heading text-2xl font-bold text-papal-navy">{t.introTitle}</h2>
              <p className="mt-3 text-papal-navy/85">{dilexiTeData.descripcionGeneral}</p>
              <blockquote className="mt-4 rounded-lg border-l-4 border-papal-gold bg-white p-4 text-sm italic text-papal-navy/85">
                {dilexiTeData.citaBiblicaCompleta}
              </blockquote>
            </section>

            {/* Temas */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.themesTitle}
              </h2>
              <div className="space-y-3">
                {temasDilexiTe.map((tema, i) => (
                  <article
                    key={tema.id}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-papal-gold text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold text-papal-navy">
                          {tema.titulo}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-papal-gold-dark">
                          {tema.parrafosReferencia}
                        </p>
                        <p className="mt-2 text-sm text-papal-navy/80">{tema.descripcion}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Citas clave */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.quotesTitle}
              </h2>
              <div className="space-y-3">
                {citasClavesDilexiTe.map((cita, i) => (
                  <blockquote
                    key={i}
                    className="rounded-xl border-l-4 border-papal-gold bg-papal-cream p-5"
                  >
                    <p className="font-serif italic leading-relaxed text-papal-navy">
                      « {cita.texto} »
                    </p>
                    <footer className="mt-2 text-xs text-papal-navy/60">
                      <strong>{cita.parrafo}</strong> · {t.context}: {cita.contexto}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.faqTitle}
              </h2>
              <div className="space-y-2">
                {faqDilexiTe.map((f, i) => (
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

            {/* Explora también */}
            <nav aria-label="Related" className="rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
              <h2 className="mb-4 font-heading text-xl font-bold text-papal-navy">{t.exploreAlso}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Link href={localizePath('/discursos', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
                  <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                    Discursos del Papa León XIV
                  </h3>
                  <p className="mt-1 text-xs text-papal-navy/60">Homilías, mensajes y audiencias</p>
                </Link>
                <Link href={localizePath('/frases', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
                  <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                    Frases célebres
                  </h3>
                  <p className="mt-1 text-xs text-papal-navy/60">Citas del Papa por temas</p>
                </Link>
                <Link href={localizePath('/papa-leon-xiv', locale)} className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
                  <h3 className="font-heading font-bold text-papal-navy group-hover:text-papal-gold">
                    Biografía del Papa León XIV
                  </h3>
                  <p className="mt-1 text-xs text-papal-navy/60">Vida, familia, magisterio</p>
                </Link>
              </div>
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
              <h2 className="font-heading text-lg font-bold text-papal-navy">{t.metaTitle}</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.dataAuthor}</dt>
                  <dd className="text-papal-navy">{dilexiTeData.autor}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.dataDate}</dt>
                  <dd className="text-papal-navy">
                    {dilexiTeData.fechaPublicacion} · {dilexiTeData.lugarFirma}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.dataParagraphs}</dt>
                  <dd className="text-papal-navy">
                    {dilexiTeData.numeroParrafos} {t.paragraph}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.dataExtension}</dt>
                  <dd className="text-papal-navy">{dilexiTeData.extensionEstimada}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">{t.dataReference}</dt>
                  <dd className="text-papal-navy">{dilexiTeData.referenciaBiblica}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <p className="text-center font-serif text-2xl italic text-papal-gold">
                «{dilexiTeData.titulo}»
              </p>
              <p className="mt-1 text-center text-sm text-white/70">
                {dilexiTeData.traduccionTitulo}
              </p>
              <a
                href={dilexiTeData.oficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-lg bg-papal-gold px-4 py-2 text-center text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                {t.readFull}
              </a>
            </div>

            <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-2 font-heading text-base font-bold text-papal-navy">
                📚 {t.sourcesTitle}
              </h3>
              <ul className="space-y-1 text-xs text-papal-navy/70">
                <li>
                  •{' '}
                  <a
                    href={dilexiTeData.oficialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-papal-gold-dark break-all"
                  >
                    Texto oficial en Vatican.va (9 idiomas)
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://press.vatican.va"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-papal-gold-dark"
                  >
                    Oficina de Prensa de la Santa Sede
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://www.vaticannews.va/es.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-papal-gold-dark"
                  >
                    Vatican News — análisis y comentarios
                  </a>
                </li>
                <li>• L\'Osservatore Romano, ediciones en español e inglés (febrero 2026).</li>
                <li>• Librería Editrice Vaticana (LEV) — edición impresa.</li>
              </ul>
            </section>
          </aside>
        </div>
      </Container>
    </>
  )
}
