'use client'

import Image from 'next/image'
import {
  getContextualProducts,
  buildAmazonUrl,
  type AmazonProduct,
} from '@/data/amazon-products'
import { Locale } from '@/data/i18n/types'

interface ScheduleEvent {
  eventType: string
  title: string
}

const EVENT_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    title: '🎒 Productos recomendados para este día',
    subtitle: 'Selección según los actos previstos',
    misa: '🙏 Para la Misa',
    vigilia: '🕯️ Para la Vigilia',
    procesion: '👟 Para la Procesión',
    encuentro: '🤝 Para Encuentros',
    shop: 'Comprar en Amazon',
  },
  en: {
    title: '🎒 Recommended products for today',
    subtitle: 'Selection based on scheduled events',
    misa: '🙏 For the Mass',
    vigilia: '🕯️ For the Vigil',
    procesion: '👟 For the Procession',
    encuentro: '🤝 For Encounters',
    shop: 'Shop on Amazon',
  },
  it: {
    title: '🎒 Prodotti consigliati per oggi',
    subtitle: 'Selezione in base agli eventi programmati',
    misa: '🙏 Per la Messa',
    vigilia: '🕯️ Per la Veglia',
    procesion: '👟 Per la Processione',
    encuentro: '🤝 Per gli Incontri',
    shop: 'Acquista su Amazon',
  },
  fr: {
    title: '🎒 Produits recommandés pour aujourd\'hui',
    subtitle: 'Sélection selon les événements prévus',
    misa: '🙏 Pour la Messe',
    vigilia: '🕯️ Pour la Veillée',
    procesion: '👟 Pour la Procession',
    encuentro: '🤝 Pour les Rencontres',
    shop: 'Acheter sur Amazon',
  },
  de: {
    title: '🎒 Empfehlung für heute',
    subtitle: 'Auswahl basierend auf geplanten Veranstaltungen',
    misa: '🙏 Für die Messe',
    vigilia: '🕯️ Für die Andacht',
    procesion: '👟 Für die Prozession',
    encuentro: '🤝 Für Treffen',
    shop: 'Bei Amazon kaufen',
  },
  pt: {
    title: '🎒 Produtos recomendados para hoje',
    subtitle: 'Seleção de acordo com eventos programados',
    misa: '🙏 Para a Missa',
    vigilia: '🕯️ Para a Vigília',
    procesion: '👟 Para a Procissão',
    encuentro: '🤝 Para Encontros',
    shop: 'Comprar na Amazon',
  },
  ca: {
    title: '🎒 Productes recomanats per avui',
    subtitle: 'Selecció segons els actes previstos',
    misa: '🙏 Per la Missa',
    vigilia: '🕯️ Per la Vetlla',
    procesion: '👟 Per la Processó',
    encuentro: '🤝 Per als Encuentres',
    shop: 'Comprar a Amazon',
  },
  gl: {
    title: '🎒 Produtos recomendados para hoxe',
    subtitle: 'Selección segundo os actos previstos',
    misa: '🙏 Para a Misa',
    vigilia: '🕯️ Para a Vixilia',
    procesion: '👟 Para a Procesión',
    encuentro: '🤝 Para Encontros',
    shop: 'Comprar en Amazon',
  },
  eu: {
    title: '🎒 Gaur gomendatutako produktuak',
    subtitle: 'Hautaketa planifikatutako ekitaldien arabera',
    misa: '🙏 Meza denean',
    vigilia: '🕯️ Argiaren oroitzapenean',
    procesion: '👟 Prozesioari dagokionez',
    encuentro: '🤝 Topaketetarako',
    shop: 'Amazon-en erosi',
  },
}

interface ProductCardProps {
  product: AmazonProduct
  locale: Locale
}

function ProductCard({ product, locale }: ProductCardProps) {
  const title = product.title[locale] || product.title.es || 'Product'
  const description = product.description[locale] || product.description.es || ''
  const price = `€${product.priceRange.min}-${product.priceRange.max}`
  const amazonUrl = buildAmazonUrl(product.amazonQuery, locale)

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="nofollow noopener noreferrer sponsored"
      className="group rounded-lg border border-papal-gold/30 bg-white p-4 transition-all hover:border-papal-gold hover:shadow-md"
    >
      <div className="space-y-2">
        <div>
          <h4 className="font-semibold text-papal-navy group-hover:text-papal-gold">
            {title}
          </h4>
          <p className="mt-1 text-xs text-papal-navy/60 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-end justify-between gap-2 pt-2">
          <div>
            <p className="text-sm font-bold text-papal-gold">{price}</p>
          </div>
          <span className="text-xs text-papal-navy/50">Amazon</span>
        </div>
      </div>
    </a>
  )
}

interface EventProductKitProps {
  events: ScheduleEvent[]
  locale: Locale
}

export default function EventProductKit({
  events,
  locale,
}: EventProductKitProps) {
  const labels = EVENT_LABELS[locale] || EVENT_LABELS.es

  // Extraer tipos de evento del día
  const eventTypes = Array.from(new Set(events.map((e) => e.eventType))) as Array<
    'misa' | 'vigilia' | 'procesion' | 'encuentro'
  >

  // Obtener productos contextuales según tipos de evento
  const allProducts: AmazonProduct[] = []
  const grouped: Record<string, AmazonProduct[]> = {}

  for (const eventType of eventTypes) {
    const products = getContextualProducts({
      eventType: eventType as 'misa' | 'vigilia' | 'procesion' | 'encuentro',
      placement: 'programa',
    })

    if (!grouped[eventType]) {
      grouped[eventType] = []
    }

    products.forEach((p) => {
      if (!allProducts.find((ap) => ap.id === p.id)) {
        allProducts.push(p)
        grouped[eventType].push(p)
      }
    })
  }

  if (allProducts.length === 0) {
    return null
  }

  return (
    <section className="rounded-xl border border-papal-gold/20 bg-gradient-to-br from-papal-cream to-white p-6">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-papal-navy">
          {labels.title}
        </h3>
        <p className="mt-1 text-sm text-papal-navy/70">{labels.subtitle}</p>
      </div>

      <div className="space-y-4">
        {/* Misa */}
        {grouped.misa && grouped.misa.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.misa}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.misa.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Vigilia */}
        {grouped.vigilia && grouped.vigilia.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.vigilia}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.vigilia.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Procesión */}
        {grouped.procesion && grouped.procesion.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.procesion}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.procesion.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Encuentros */}
        {grouped.encuentro && grouped.encuentro.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.encuentro}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.encuentro.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-[10px] text-papal-navy/40">
        Enlaces de afiliación - Recibimos una comisión sin coste adicional para ti
      </p>
    </section>
  )
}
