import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'torre-de-jesucrist-sagrada-familia'

export const metadata: Metadata = {
  title: 'La Torre de Jesucrist de la Sagrada Família: l\'església més alta del món',
  description:
    "Reportatge visual sobre la Torre de Jesucrist de la Sagrada Família: els 172,5 metres, la creu il·luminada de quatre braços, el mirador interior, les 18 torres, les tres façanes, el centenari de Gaudí i la benedicció del Papa Lleó XIV. Dades, història, vídeos i cronologia.",
  alternates: {
    canonical: `${siteConfig.url}/ca/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/torre-de-jesucristo-sagrada-familia`,
      ca: `${siteConfig.url}/ca/${SLUG}`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/ca/${SLUG}`,
    title: "La Torre de Jesucrist de la Sagrada Família: l'església més alta del món",
    description: 'Els 172,5 m, la creu il·luminada, el mirador, les 18 torres i el centenari de Gaudí. Reportatge visual.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'La Torre de Jesucrist de la Sagrada Família' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "La Torre de Jesucrist de la Sagrada Família: l'església més alta del món",
  datePublished: '2026-06-09T12:00:00+02:00',
  dateModified: '2026-06-09T12:00:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/cities/barcelona.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

const CIFRES = [
  { v: '172,5 m', l: "Alçada total: l'església més alta del món" },
  { v: '17 × 13,5 m', l: 'Dimensions de la creu (≈ 200 tones)' },
  { v: '18', l: 'Torres del temple' },
  { v: '144 anys', l: "D'obres (des de 1882)" },
  { v: '4,83 M', l: 'Visitants el 2024' },
  { v: '100 %', l: 'Finançament privat (donatius i entrades)' },
]

const TORRES = [
  'La torre de Jesucrist (central, la més alta, 172,5 m), coronada per la creu de quatre braços.',
  "La torre de la Mare de Déu, rematada amb una estrella il·luminada (acabada el 2021).",
  'Les quatre torres dels Evangelistes —Mateu, Marc, Lluc i Joan— de 135 m (completades el 2023).',
  'Les dotze torres dels Apòstols, sobre les tres façanes.',
]

const FACANES = [
  { t: 'Façana del Naixement', d: "L'única aixecada en vida de Gaudí. Exuberant i plena de vida, celebra el naixement de Crist. Patrimoni de la Humanitat." },
  { t: 'Façana de la Passió', d: 'Austera i angulosa, orientada a ponent per evocar el patiment i la mort de Jesús. Escultures de Josep Maria Subirachs.' },
  { t: 'Façana de la Glòria', d: "La principal i més gran, dedicada a la glòria de Crist. Encara sense acabar: les obres i l'escalinata monumental continuaran fins a prop del 2034." },
]

const TIMELINE = [
  { y: '1882', t: 'Es col·loca la primera pedra (19 de març).' },
  { y: '1883', t: 'Gaudí assumeix la direcció del projecte i el reconcep per complet.' },
  { y: '1926', t: 'Gaudí mor el 10 de juny, atropellat per un tramvia. Només havia vist acabada una torre.' },
  { y: '2010', t: 'Benet XVI consagra el temple com a basílica menor (7 de novembre), davant 6.500 persones.' },
  { y: '2021', t: "S'inaugura la torre de la Mare de Déu amb la seva estrella il·luminada." },
  { y: '2023', t: 'Es completen les quatre torres dels Evangelistes (135 m).' },
  { y: '2026', t: "El 20 de febrer s'instal·la la peça final de la torre de Jesucrist: el temple arriba als 172,5 m." },
  { y: '2026', t: 'El 10 de juny, centenari de la mort de Gaudí, el Papa Lleó XIV beneeix i inaugura la torre.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quant fa la Torre de Jesucrist de la Sagrada Família?',
      acceptedAnswer: { '@type': 'Answer', text: "La Torre de Jesucrist arriba als 172,5 metres, fet que converteix la Sagrada Família en l'església més alta del món, uns 11 metres per sobre del rècord anterior." },
    },
    {
      '@type': 'Question',
      name: 'Per què la Sagrada Família fa 172,5 metres i no més?',
      acceptedAnswer: { '@type': 'Answer', text: "Gaudí va dissenyar la torre deliberadament per sota de la muntanya de Montjuïc, perquè considerava que cap obra humana no havia de superar l'obra de Déu, és a dir, la naturalesa." },
    },
    {
      '@type': 'Question',
      name: 'Quan beneeix el Papa la Torre de Jesucrist?',
      acceptedAnswer: { '@type': 'Answer', text: 'El Papa Lleó XIV beneeix i inaugura la Torre de Jesucrist el 10 de juny de 2026, durant la missa a la Sagrada Família, coincidint amb el centenari de la mort de Gaudí.' },
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

export default function TorreJesucristCaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Reportatge · Barcelona</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-5xl">
            La Torre de Jesucrist de la Sagrada Família
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            172,5 metres, una creu que brilla dia i nit i 144 anys d&apos;obres: així és el remat del temple de Gaudí
            que el Papa Lleó XIV beneeix en el centenari de la seva mort.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Vídeo d'obertura */}
          <div className="space-y-2">
            <YouTube id="r2y27rprekM" title="La Sagrada Família mostra per primera vegada la creu completa de la Torre de Jesús" />
            <p className="text-xs text-papal-navy/50">La creu completa de la Torre de Jesús, en descobrir-se les bastides (març de 2026).</p>
          </div>

          <p className="text-lg leading-relaxed text-papal-navy/80">
            Després de <strong>144 anys d&apos;obres</strong>, la Sagrada Família ha arribat a la seva alçada definitiva.
            El 20 de febrer de 2026 es va col·locar la peça final de la <strong>Torre de Jesucrist</strong> i el temple
            es va convertir en l&apos;<strong>església més alta del món</strong>. El <strong>10 de juny</strong>, just en
            el centenari de la mort d&apos;Antoni Gaudí, el Papa Lleó XIV la beneeix i la inaugura.
          </p>

          {/* En xifres */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">En xifres</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CIFRES.map((c) => (
                <div key={c.l} className="rounded-xl border border-papal-gold/20 bg-papal-cream p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-papal-gold-dark">{c.v}</p>
                  <p className="mt-1 text-xs text-papal-navy/70">{c.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* La creu */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Una creu que il·lumina Barcelona</h2>
            <p className="leading-relaxed text-papal-navy/80">
              La torre està coronada per una <strong>creu tridimensional de quatre braços</strong> d&apos;uns 17 metres
              d&apos;alçada per 13,5 d&apos;amplada i prop de 200 tones. Està revestida de <strong>ceràmica vidrada
              blanca i vidre</strong>, materials que, com va escriure Gaudí als Àlbums del Temple, havien d&apos;aconseguir
              que la creu «brilli de dia i doni llum de nit». El projecte d&apos;il·luminació —en què col·labora la
              Fundació Endesa— preveu focus als extrems dels braços i llum interior, i converteix el remat en un autèntic
              far espiritual visible des de gairebé tota la ciutat.
            </p>
          </div>

          {/* El mirador */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">El mirador més alt de Barcelona</h2>
            <p className="leading-relaxed text-papal-navy/80">
              L&apos;interior de la torre es concep com un espai visitable. Sota la torre, a 65 metres, hi ha la
              <strong> Sala Creuer</strong>, una gran sala circular amb voltes de rajola i vidre venecià vermell. Un
              <strong> ascensor de vidre</strong> permet pujar fins als 138 metres i, a peu, arribar als 144 metres.
              L&apos;aforament serà molt reduït (tot just una desena de persones alhora) per preservar l&apos;espai. La
              torre interior és de granit blanc perforat amb orificis en forma de rombe pels quals es filtra la llum.
            </p>
          </div>

          {/* Vídeo construcció */}
          <div className="space-y-2">
            <YouTube id="jh3LmIJbAZI" title="La Sagrada Família ja té la seva creu de sis braços completa (RTVE)" />
            <p className="text-xs text-papal-navy/50">La instal·lació de l&apos;última peça de la creu, el febrer de 2026 (RTVE).</p>
          </div>

          {/* Per què 172,5 */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Per què 172,5 metres</h2>
            <p className="leading-relaxed text-papal-navy/80">
              L&apos;alçada no és casual. Gaudí va voler que la seva torre quedés <strong>per sota de la muntanya de
              Montjuïc</strong>: estava convençut que <strong>cap obra humana no havia de superar l&apos;obra de Déu</strong>,
              és a dir, la naturalesa. Així, el punt més alt de Barcelona continua sent el turó, i el temple s&apos;hi inclina.
            </p>
          </div>

          {/* Les 18 torres */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Les 18 torres del temple</h2>
            <ul className="space-y-2">
              {TORRES.map((t) => (
                <li key={t} className="flex gap-2 text-papal-navy/80">
                  <span className="text-papal-gold-dark">▸</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Les 3 façanes */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Les tres façanes</h2>
            <div className="space-y-3">
              {FACANES.map((f) => (
                <div key={f.t} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-papal-navy">{f.t}</h3>
                  <p className="mt-1 text-sm text-papal-navy/75">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cronologia */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">144 anys en una línia de temps</h2>
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

          {/* Papa i centenari */}
          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">El Papa i el centenari de Gaudí</h2>
            <p className="leading-relaxed text-papal-navy/80">
              La benedicció de la Torre de Jesucrist és el cor de la visita del Papa Lleó XIV a Barcelona. La data, el
              <strong> 10 de juny</strong>, no és casual: aquell mateix dia de 1926 moria Gaudí, el procés de
              beatificació del qual està en marxa. El temple, que continua finançant-se <strong>només amb donatius i
              entrades</strong>, culmina així la seva estructura principal, tot i que la façana de la Glòria seguirà en
              obres durant anys.
            </p>
          </div>

          {/* Fonts */}
          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Reportatge elaborat amb dades de la Basílica de la Sagrada Família (web i blog oficials), Vatican News i la
            cobertura de premsa (CNN, Catalan News, RTVE). Xifres i dates subjectes a possibles ajustos.
          </div>

          {/* Enllaços */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/ca/programa-papa-barcelona-10-juny" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Programa del 10 de juny
            </Link>
            <Link href="/ca/recorregut-papa-barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Recorregut del papamòbil
            </Link>
            <Link href="/ca/ciutats/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guia de Barcelona
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
