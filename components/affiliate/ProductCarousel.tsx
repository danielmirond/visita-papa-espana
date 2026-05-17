import AffiliateLink from './AffiliateLink'
import type { Locale } from '@/data/i18n/types'

/**
 * Carrusel de productos Amazon afiliados para la sección «Qué llevar»
 * de /como-asistir. Una tarjeta por categoría con búsqueda Amazon ya
 * filtrada por keyword y tag de afiliación nuus-21.
 *
 * En mobile: scroll horizontal (snap). En desktop: grid 4 columnas.
 *
 * Tracking GA4: cada click emite 'affiliate_click' con
 * provider=amazon, category=gear, placement=carousel, productId=<slug>.
 */

const TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || 'nuus-21'
function amzSearch(query: string): string {
  return `https://www.amazon.es/s?k=${encodeURIComponent(query)}&tag=${TAG}`
}

type Product = {
  id: string
  icon: string
  href: string
}

// Catálogo de productos: enlaces afiliados (curados cuando es posible
// con amzn.to + tag=nuus-21, fallback a búsqueda con tag aplicado).
const PRODUCTS: Product[] = [
  { id: 'bandera-vaticano', icon: '🏳️', href: 'https://amzn.to/43d7Z2F' },
  { id: 'paraguas-plegable', icon: '☂️', href: amzSearch('paraguas plegable resistente automatico') },
  { id: 'sudadera-ligera', icon: '🧥', href: amzSearch('sudadera ligera capucha unisex') },
  { id: 'rosario-biblia', icon: '📿', href: amzSearch('rosario olivo Tierra Santa Biblia Jerusalen') },
  { id: 'cojin-asiento', icon: '🪑', href: amzSearch('cojin plegable estadio camping ligero') },
  { id: 'bateria-externa', icon: '🔋', href: amzSearch('powerbank 20000 mah carga rapida usb-c') },
  { id: 'crema-solar', icon: '☀️', href: amzSearch('protector solar SPF 50 facial corporal') },
]

type Labels = {
  title: string
  subtitle: string
  cta: string
  products: Record<string, { name: string; tagline: string }>
  sponsoredNote: string
}

const L: Record<Locale, Labels> = {
  es: {
    title: 'Compra el kit del peregrino',
    subtitle: 'Todo lo que necesitas para vivir la visita del Papa con comodidad. Enlaces de afiliación: si compras a través de ellos recibimos una pequeña comisión sin coste para ti.',
    cta: 'Ver en Amazon',
    products: {
      'bandera-vaticano': { name: 'Bandera del Vaticano', tagline: 'Para vigilias y misas multitudinarias' },
      'paraguas-plegable': { name: 'Paraguas plegable', tagline: 'Por si llega una tormenta de verano' },
      'sudadera-ligera': { name: 'Sudadera ligera', tagline: 'Para vigilias nocturnas y madrugadas' },
      'rosario-biblia': { name: 'Rosario y Biblia', tagline: 'Rosarios de olivo, Biblia de Jerusalén' },
      'cojin-asiento': { name: 'Cojín plegable', tagline: 'Para 4-5 horas en plaza o estadio' },
      'bateria-externa': { name: 'Batería externa', tagline: '20.000 mAh para foto, vídeo y mapas' },
      'crema-solar': { name: 'Crema solar SPF 50+', tagline: 'Sol fuerte en Madrid y Canarias' },
    },
    sponsoredNote: 'Enlaces patrocinados · Amazon Afiliados',
  },
  en: {
    title: 'Buy the pilgrim kit',
    subtitle: 'Everything you need to experience the Pope’s visit comfortably. Affiliate links: if you buy through them we earn a small commission at no cost to you.',
    cta: 'See on Amazon',
    products: {
      'bandera-vaticano': { name: 'Vatican flag', tagline: 'For vigils and mass Eucharists' },
      'paraguas-plegable': { name: 'Foldable umbrella', tagline: 'In case of a summer storm' },
      'sudadera-ligera': { name: 'Light hoodie', tagline: 'For night vigils and early mornings' },
      'rosario-biblia': { name: 'Rosary and Bible', tagline: 'Olive wood rosaries, Jerusalem Bible' },
      'cojin-asiento': { name: 'Folding cushion', tagline: 'For 4-5 hours in square or stadium' },
      'bateria-externa': { name: 'Power bank', tagline: '20,000 mAh for photo, video and maps' },
      'crema-solar': { name: 'SPF 50+ sunscreen', tagline: 'Strong sun in Madrid and Canaries' },
    },
    sponsoredNote: 'Sponsored links · Amazon Affiliates',
  },
  it: {
    title: 'Compra il kit del pellegrino',
    subtitle: 'Tutto ciò che serve per vivere la visita del Papa con comodità. Link di affiliazione: se acquisti tramite essi, riceviamo una piccola commissione senza costi per te.',
    cta: 'Vedi su Amazon',
    products: {
      'bandera-vaticano': { name: 'Bandiera del Vaticano', tagline: 'Per veglie e messe multitudinarie' },
      'paraguas-plegable': { name: 'Ombrello pieghevole', tagline: 'In caso di temporale estivo' },
      'sudadera-ligera': { name: 'Felpa leggera', tagline: 'Per veglie notturne e mattinate' },
      'rosario-biblia': { name: 'Rosario e Bibbia', tagline: 'Rosari di olivo, Bibbia di Gerusalemme' },
      'cojin-asiento': { name: 'Cuscino pieghevole', tagline: 'Per 4-5 ore in piazza o stadio' },
      'bateria-externa': { name: 'Power bank', tagline: '20.000 mAh per foto, video e mappe' },
      'crema-solar': { name: 'Crema solare SPF 50+', tagline: 'Sole forte a Madrid e nelle Canarie' },
    },
    sponsoredNote: 'Link sponsorizzati · Amazon Affiliati',
  },
  fr: {
    title: 'Achetez le kit du pèlerin',
    subtitle: 'Tout ce dont vous avez besoin pour vivre la visite du Pape confortablement. Liens d’affiliation : si vous achetez via eux, nous recevons une petite commission sans coût pour vous.',
    cta: 'Voir sur Amazon',
    products: {
      'bandera-vaticano': { name: 'Drapeau du Vatican', tagline: 'Pour veillées et messes multitudinaires' },
      'paraguas-plegable': { name: 'Parapluie pliable', tagline: 'En cas d’orage estival' },
      'sudadera-ligera': { name: 'Sweat léger', tagline: 'Pour veillées nocturnes et matinées' },
      'rosario-biblia': { name: 'Rosaire et Bible', tagline: 'Rosaires en olivier, Bible de Jérusalem' },
      'cojin-asiento': { name: 'Coussin pliable', tagline: 'Pour 4-5 heures en place ou stade' },
      'bateria-externa': { name: 'Batterie externe', tagline: '20 000 mAh pour photo, vidéo et cartes' },
      'crema-solar': { name: 'Crème solaire SPF 50+', tagline: 'Soleil fort à Madrid et aux Canaries' },
    },
    sponsoredNote: 'Liens sponsorisés · Amazon Affiliés',
  },
  de: {
    title: 'Pilgerausrüstung kaufen',
    subtitle: 'Alles, was Sie für den Papstbesuch bequem brauchen. Affiliate-Links: Wenn Sie darüber kaufen, erhalten wir eine kleine Provision ohne Kosten für Sie.',
    cta: 'Auf Amazon ansehen',
    products: {
      'bandera-vaticano': { name: 'Vatikanflagge', tagline: 'Für Vigilien und Großmessen' },
      'paraguas-plegable': { name: 'Faltschirm', tagline: 'Für den Fall eines Sommergewitters' },
      'sudadera-ligera': { name: 'Leichter Hoodie', tagline: 'Für Nachtvigilien und frühe Morgenstunden' },
      'rosario-biblia': { name: 'Rosenkranz und Bibel', tagline: 'Olivenholz-Rosenkränze, Jerusalemer Bibel' },
      'cojin-asiento': { name: 'Faltkissen', tagline: 'Für 4-5 Stunden auf Platz oder Stadion' },
      'bateria-externa': { name: 'Powerbank', tagline: '20.000 mAh für Foto, Video und Karten' },
      'crema-solar': { name: 'Sonnencreme LSF 50+', tagline: 'Starke Sonne in Madrid und auf den Kanaren' },
    },
    sponsoredNote: 'Gesponserte Links · Amazon Partner',
  },
  pt: {
    title: 'Compre o kit do peregrino',
    subtitle: 'Tudo o que precisa para viver a visita do Papa com conforto. Links de afiliação: se comprar através deles recebemos uma pequena comissão sem custo para si.',
    cta: 'Ver na Amazon',
    products: {
      'bandera-vaticano': { name: 'Bandeira do Vaticano', tagline: 'Para vigílias e missas multitudinárias' },
      'paraguas-plegable': { name: 'Guarda-chuva dobrável', tagline: 'No caso de tempestade de verão' },
      'sudadera-ligera': { name: 'Sweatshirt leve', tagline: 'Para vigílias noturnas e madrugadas' },
      'rosario-biblia': { name: 'Rosário e Bíblia', tagline: 'Rosários de oliveira, Bíblia de Jerusalém' },
      'cojin-asiento': { name: 'Almofada dobrável', tagline: 'Para 4-5 horas em praça ou estádio' },
      'bateria-externa': { name: 'Power bank', tagline: '20.000 mAh para foto, vídeo e mapas' },
      'crema-solar': { name: 'Protetor solar FPS 50+', tagline: 'Sol forte em Madrid e nas Canárias' },
    },
    sponsoredNote: 'Links patrocinados · Amazon Afiliados',
  },
  ca: {
    title: 'Compra el kit del pelegrí',
    subtitle: 'Tot el que necessites per viure la visita del Papa amb comoditat. Enllaços d’afiliació: si compres a través d’ells rebem una petita comissió sense cost per a tu.',
    cta: 'Veure a Amazon',
    products: {
      'bandera-vaticano': { name: 'Bandera del Vaticà', tagline: 'Per vetlles i misses multitudinàries' },
      'paraguas-plegable': { name: 'Paraigua plegable', tagline: 'Per si arriba una tempesta d’estiu' },
      'sudadera-ligera': { name: 'Dessuadora lleugera', tagline: 'Per vetlles nocturnes i matinades' },
      'rosario-biblia': { name: 'Rosari i Bíblia', tagline: 'Rosaris d’olivera, Bíblia de Jerusalem' },
      'cojin-asiento': { name: 'Coixí plegable', tagline: 'Per 4-5 hores en plaça o estadi' },
      'bateria-externa': { name: 'Bateria externa', tagline: '20.000 mAh per foto, vídeo i mapes' },
      'crema-solar': { name: 'Crema solar SPF 50+', tagline: 'Sol fort a Madrid i a les Canàries' },
    },
    sponsoredNote: 'Enllaços patrocinats · Amazon Afiliats',
  },
  gl: {
    title: 'Merca o kit do peregrino',
    subtitle: 'Todo o que precisas para vivir a visita do Papa con comodidade. Ligazóns de afiliación: se mercas a través delas recibimos unha pequena comisión sen custo para ti.',
    cta: 'Ver en Amazon',
    products: {
      'bandera-vaticano': { name: 'Bandeira do Vaticano', tagline: 'Para vixilias e misas multitudinarias' },
      'paraguas-plegable': { name: 'Paraugas pregable', tagline: 'Por se chega unha tormenta de verán' },
      'sudadera-ligera': { name: 'Sudadeira lixeira', tagline: 'Para vixilias nocturnas e mañás temperás' },
      'rosario-biblia': { name: 'Rosario e Biblia', tagline: 'Rosarios de oliveira, Biblia de Xerusalén' },
      'cojin-asiento': { name: 'Coxín pregable', tagline: 'Para 4-5 horas en praza ou estadio' },
      'bateria-externa': { name: 'Batería externa', tagline: '20.000 mAh para foto, vídeo e mapas' },
      'crema-solar': { name: 'Protector solar FPS 50+', tagline: 'Sol forte en Madrid e nas Canarias' },
    },
    sponsoredNote: 'Ligazóns patrocinadas · Amazon Afiliados',
  },
  eu: {
    title: 'Erosi erromes-kita',
    subtitle: 'Aita Santuaren bisita erosotasunez bizitzeko behar duzun guztia. Afiliazio-estekak: haien bidez erosten baduzu komisio txiki bat jasotzen dugu, kosturik gabe zuretzat.',
    cta: 'Ikusi Amazonen',
    products: {
      'bandera-vaticano': { name: 'Vatikanoaren bandera', tagline: 'Bijilietarako eta masa-mezatarako' },
      'paraguas-plegable': { name: 'Aterki tolesgarria', tagline: 'Udako ekaitza iristen bada' },
      'sudadera-ligera': { name: 'Sudadera arina', tagline: 'Gaueko bijiliarako eta goizaldetarako' },
      'rosario-biblia': { name: 'Arrosarioa eta Biblia', tagline: 'Olibondo-arrosarioak, Jerusalemgo Biblia' },
      'cojin-asiento': { name: 'Kuxin tolesgarria', tagline: 'Plazan edo estadioan 4-5 ordurako' },
      'bateria-externa': { name: 'Kanpoko bateria', tagline: '20.000 mAh argazki, bideo eta mapatarako' },
      'crema-solar': { name: 'Eguzki-krema FPS 50+', tagline: 'Eguzki bortitza Madrilen eta Kanarietan' },
    },
    sponsoredNote: 'Estekak babestuak · Amazon Afiliatuak',
  },
}

interface Props {
  locale: Locale
}

export default function ProductCarousel({ locale }: Props) {
  const t = L[locale] || L.es

  return (
    <section className="mt-8" aria-labelledby="product-carousel-title">
      <h3 id="product-carousel-title" className="font-heading text-xl font-bold text-papal-navy">
        🛒 {t.title}
      </h3>
      <p className="mt-1 text-sm text-papal-navy/70">{t.subtitle}</p>

      <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div className="flex snap-x snap-mandatory gap-3 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {PRODUCTS.map((p) => {
            const labels = t.products[p.id] || { name: p.id, tagline: '' }
            return (
              <AffiliateLink
                key={p.id}
                href={p.href}
                provider="amazon"
                category="gear"
                placement="kit"
                productId={p.id}
                className="group flex w-44 flex-shrink-0 snap-start flex-col rounded-xl border border-papal-gold/30 bg-white p-4 transition-shadow hover:shadow-md sm:w-auto"
                ariaLabel={`${labels.name} en Amazon`}
              >
                <span className="text-3xl" aria-hidden="true">{p.icon}</span>
                <p className="mt-2 font-heading text-sm font-bold text-papal-navy">
                  {labels.name}
                </p>
                <p className="mt-1 flex-grow text-xs text-papal-navy/60">{labels.tagline}</p>
                <span className="mt-3 inline-block rounded bg-papal-navy px-3 py-1.5 text-center text-xs font-semibold text-white transition-colors group-hover:bg-papal-navy/90">
                  {t.cta} →
                </span>
              </AffiliateLink>
            )
          })}
        </div>
      </div>

      <p className="mt-2 text-[10px] text-papal-navy/40">{t.sponsoredNote}</p>
    </section>
  )
}
