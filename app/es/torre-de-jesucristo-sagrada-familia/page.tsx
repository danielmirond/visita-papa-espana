import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'torre-de-jesucristo-sagrada-familia'

export const metadata: Metadata = {
  title: 'La Torre de Jesucristo de la Sagrada Familia: la iglesia más alta del mundo',
  description:
    'Reportaje visual sobre la Torre de Jesucristo de la Sagrada Familia: sus 172,5 metros, la cruz iluminada de cuatro brazos, el mirador interior, las 18 torres, las tres fachadas, el centenario de Gaudí y la bendición del Papa León XIV. Datos, historia, vídeos y cronología.',
  alternates: {
    canonical: `${siteConfig.url}/es/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/${SLUG}`,
      ca: `${siteConfig.url}/ca/torre-de-jesucrist-sagrada-familia`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'La Torre de Jesucristo de la Sagrada Familia: la iglesia más alta del mundo',
    description: 'Los 172,5 m, la cruz iluminada, el mirador, las 18 torres y el centenario de Gaudí. Reportaje visual.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'La Torre de Jesucristo de la Sagrada Familia' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'La Torre de Jesucristo de la Sagrada Familia: la iglesia más alta del mundo',
  datePublished: '2026-06-09T12:00:00+02:00',
  dateModified: '2026-06-09T12:00:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/cities/barcelona.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

const CIFRAS = [
  { v: '172,5 m', l: 'Altura total: la iglesia más alta del mundo' },
  { v: '17 × 13,5 m', l: 'Dimensiones de la cruz (≈ 200 toneladas)' },
  { v: '18', l: 'Torres del templo' },
  { v: '144 años', l: 'De obras (desde 1882)' },
  { v: '4,83 M', l: 'Visitantes en 2024' },
  { v: '100 %', l: 'Financiación privada (donativos y entradas)' },
]

const TORRES = [
  'La torre de Jesucristo (central, la más alta, 172,5 m), coronada por la cruz de cuatro brazos.',
  'La torre de la Virgen María, rematada con una estrella iluminada (terminada en 2021).',
  'Las cuatro torres de los Evangelistas —Mateo, Marcos, Lucas y Juan— de 135 m (completadas en 2023).',
  'Las doce torres de los Apóstoles, sobre las tres fachadas.',
]

const FACHADAS = [
  { t: 'Fachada del Nacimiento', d: 'La única levantada en vida de Gaudí. Exuberante y llena de vida, celebra el nacimiento de Cristo. Patrimonio de la Humanidad.' },
  { t: 'Fachada de la Pasión', d: 'Austera y angulosa, orientada al poniente para evocar el sufrimiento y la muerte de Jesús. Esculturas de Josep Maria Subirachs.' },
  { t: 'Fachada de la Gloria', d: 'La principal y mayor, dedicada a la gloria de Cristo. Aún sin terminar: las obras y la escalinata monumental continuarán hasta cerca de 2034.' },
]

const TIMELINE = [
  { y: '1882', t: 'Se coloca la primera piedra (19 de marzo).' },
  { y: '1883', t: 'Gaudí asume la dirección del proyecto y lo reconcibe por completo.' },
  { y: '1926', t: 'Gaudí muere el 10 de junio, atropellado por un tranvía. Solo había visto terminada una torre.' },
  { y: '2010', t: 'Benedicto XVI consagra el templo como basílica menor (7 de noviembre), ante 6.500 personas.' },
  { y: '2021', t: 'Se inaugura la torre de la Virgen María con su estrella iluminada.' },
  { y: '2023', t: 'Se completan las cuatro torres de los Evangelistas (135 m).' },
  { y: '2026', t: 'El 20 de febrero se instala la pieza final de la torre de Jesucristo: el templo alcanza 172,5 m.' },
  { y: '2026', t: 'El 10 de junio, centenario de la muerte de Gaudí, el Papa León XIV bendice e inaugura la torre.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto mide la Torre de Jesucristo de la Sagrada Familia?',
      acceptedAnswer: { '@type': 'Answer', text: 'La Torre de Jesucristo alcanza los 172,5 metros, lo que convierte a la Sagrada Familia en la iglesia más alta del mundo, unos 11 metros por encima del anterior récord.' },
    },
    {
      '@type': 'Question',
      name: '¿Por qué la Sagrada Familia mide 172,5 metros y no más?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gaudí diseñó la torre deliberadamente por debajo de la montaña de Montjuïc, porque consideraba que ninguna obra humana debía superar a la obra de Dios, es decir, a la naturaleza.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo bendice el Papa la Torre de Jesucristo?',
      acceptedAnswer: { '@type': 'Answer', text: 'El Papa León XIV bendice e inaugura la Torre de Jesucristo el 10 de junio de 2026, durante la misa en la Sagrada Familia, coincidiendo con el centenario de la muerte de Gaudí.' },
    },
  ],
}

function YouTube({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-papal-gold/20 shadow-sm">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default function TorreJesucristoPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Reportaje · Barcelona</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-5xl">
            La Torre de Jesucristo de la Sagrada Familia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            172,5 metros, una cruz que brilla día y noche y 144 años de obras: así es el remate del templo de Gaudí
            que el Papa León XIV bendice en el centenario de su muerte.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Vídeo de apertura */}
          <div className="space-y-2">
            <YouTube id="r2y27rprekM" title="La Sagrada Familia muestra por primera vez la cruz completa de la Torre de Jesús" />
            <p className="text-xs text-papal-navy/50">La cruz completa de la Torre de Jesús, al descubrirse los andamios (marzo de 2026).</p>
          </div>

          <p className="text-lg leading-relaxed text-papal-navy/80">
            Después de <strong>144 años de obras</strong>, la Sagrada Familia ha alcanzado su altura definitiva. El 20 de
            febrero de 2026 se colocó la pieza final de la <strong>Torre de Jesucristo</strong> y el templo se convirtió
            en la <strong>iglesia más alta del mundo</strong>. El <strong>10 de junio</strong>, justo en el centenario de
            la muerte de Antoni Gaudí, el Papa León XIV la bendice e inaugura.
          </p>

          {/* En cifras */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">En cifras</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CIFRAS.map((c) => (
                <div key={c.l} className="rounded-xl border border-papal-gold/20 bg-papal-cream p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-papal-gold-dark">{c.v}</p>
                  <p className="mt-1 text-xs text-papal-navy/70">{c.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* La cruz */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Una cruz que ilumina Barcelona</h2>
            <p className="leading-relaxed text-papal-navy/80">
              La torre está coronada por una <strong>cruz tridimensional de cuatro brazos</strong> de unos 17 metros de
              alto por 13,5 de ancho y cerca de 200 toneladas. Está revestida de <strong>cerámica vidriada blanca y
              vidrio</strong>, materiales que, como escribió Gaudí en los Álbumes del Templo, debían lograr que la cruz
              «brille de día y dé luz de noche». El proyecto de iluminación —en el que colabora la Fundación Endesa—
              prevé focos en los extremos de los brazos y luz interior, convirtiendo el remate en un auténtico faro
              espiritual visible desde casi toda la ciudad.
            </p>
          </div>

          {/* El mirador */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">El mirador más alto de Barcelona</h2>
            <p className="leading-relaxed text-papal-navy/80">
              El interior de la torre se concibe como un espacio visitable. Bajo la torre, a 65 metros, se encuentra la
              <strong> Sala Crucero</strong>, una gran sala circular con bóvedas de azulejo y vidrio veneciano rojo.
              Un <strong>ascensor de vidrio</strong> permite subir hasta los 138 metros y, a pie, alcanzar los 144 metros.
              El aforo será muy reducido (apenas una decena de personas a la vez) para preservar el espacio. La torre
              interior es de granito blanco perforado con orificios en forma de rombo por los que se filtra la luz.
            </p>
          </div>

          {/* Vídeo construcción */}
          <div className="space-y-2">
            <YouTube id="jh3LmIJbAZI" title="La Sagrada Familia ya tiene su cruz de seis brazos completa (RTVE)" />
            <p className="text-xs text-papal-navy/50">La instalación de la última pieza de la cruz, en febrero de 2026 (RTVE).</p>
          </div>

          {/* Por qué 172,5 */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Por qué 172,5 metros</h2>
            <p className="leading-relaxed text-papal-navy/80">
              La altura no es casual. Gaudí quiso que su torre quedara <strong>por debajo de la montaña de Montjuïc</strong>:
              estaba convencido de que <strong>ninguna obra humana debía superar a la obra de Dios</strong>, es decir, a
              la naturaleza. Así, el punto más alto de Barcelona sigue siendo la colina, y el templo se inclina ante ella.
            </p>
          </div>

          {/* Las 18 torres */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Las 18 torres del templo</h2>
            <ul className="space-y-2">
              {TORRES.map((t) => (
                <li key={t} className="flex gap-2 text-papal-navy/80">
                  <span className="text-papal-gold-dark">▸</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Las 3 fachadas */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Las tres fachadas</h2>
            <div className="space-y-3">
              {FACHADAS.map((f) => (
                <div key={f.t} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-papal-navy">{f.t}</h3>
                  <p className="mt-1 text-sm text-papal-navy/75">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cronología */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">144 años en una línea de tiempo</h2>
            <ol className="relative space-y-5 border-l-2 border-papal-gold/30 pl-6">
              {TIMELINE.map((e, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-papal-gold ring-4 ring-white" />
                  <span className="font-heading text-sm font-bold text-papal-gold-dark">{e.y}</span>
                  <p className="mt-0.5 text-papal-navy/80">{e.t}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Papa y centenario */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">El Papa y el centenario de Gaudí</h2>
            <p className="leading-relaxed text-papal-navy/80">
              La bendición de la Torre de Jesucristo es el corazón de la visita del Papa León XIV a Barcelona. La fecha,
              el <strong>10 de junio</strong>, no es casual: ese mismo día de 1926 moría Gaudí, cuyo proceso de
              beatificación está en marcha. El templo, que sigue financiándose <strong>solo con donativos y entradas</strong>,
              culmina así su estructura principal, aunque la fachada de la Gloria seguirá en obras durante años.
            </p>
          </div>

          {/* Fuentes */}
          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Reportaje elaborado con datos de la Basílica de la Sagrada Familia (web y blog oficiales), Vatican News y la
            cobertura de prensa (CNN, Catalan News, RTVE). Cifras y fechas sujetas a posibles ajustes.
          </div>

          {/* Enlaces */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/programa-papa-barcelona-10-junio" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Programa del 10 de junio
            </Link>
            <Link href="/es/recorrido-papa-barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Recorrido del papamóvil
            </Link>
            <Link href="/es/ciudades/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guía de Barcelona
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
