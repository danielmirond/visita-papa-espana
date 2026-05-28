'use client'

import {
  getProductsByPlacement,
  buildAmazonUrl,
  type AmazonProduct,
} from '@/data/amazon-products'
import { Locale } from '@/data/i18n/types'

const HOME_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    title: '✨ Essentials para tu visita',
    subtitle: 'Selección de productos imprescindibles para una experiencia cómoda',
    shop: 'Ver en Amazon',
  },
  en: {
    title: '✨ Essentials for your visit',
    subtitle: 'Selection of must-have products for a comfortable experience',
    shop: 'View on Amazon',
  },
  it: {
    title: '✨ Essential per la tua visita',
    subtitle: 'Selezione di prodotti essenziali per un\'esperienza confortevole',
    shop: 'Visualizza su Amazon',
  },
  fr: {
    title: '✨ Essentiels pour votre visite',
    subtitle: 'Sélection de produits incontournables pour une expérience confortable',
    shop: 'Voir sur Amazon',
  },
  de: {
    title: '✨ Essentials für Ihren Besuch',
    subtitle: 'Auswahl wichtiger Produkte für ein komfortables Erlebnis',
    shop: 'Auf Amazon ansehen',
  },
  pt: {
    title: '✨ Essenciais para sua visita',
    subtitle: 'Seleção de produtos imprescindíveis para uma experiência confortável',
    shop: 'Ver na Amazon',
  },
  ca: {
    title: '✨ Essencials per a la teva visita',
    subtitle: 'Selecció de productes imprescindibles per a una experiència còmoda',
    shop: 'Veure a Amazon',
  },
  gl: {
    title: '✨ Essenciais para a túa visita',
    subtitle: 'Selección de productos imprescindibles para unha experiencia cómoda',
    shop: 'Ver en Amazon',
  },
  eu: {
    title: '✨ Bisitarako esentziala',
    subtitle: 'Produktuen aukera komfortableko esperientzia baterako',
    shop: 'Amazon-en ikusi',
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
  const hasTag = product.tags.length > 0
  const mainTag = product.tags[0]

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="nofollow noopener noreferrer sponsored"
      className="group flex h-full flex-col rounded-lg border border-papal-gold/30 bg-white p-4 shadow-sm transition-all hover:border-papal-gold hover:shadow-md"
    >
      {hasTag && (
        <div className="mb-2 inline-flex w-fit rounded-full bg-papal-gold/10 px-2 py-1">
          <span className="text-[10px] font-semibold uppercase text-papal-gold">
            {mainTag}
          </span>
        </div>
      )}
      <h4 className="font-semibold text-papal-navy line-clamp-2 group-hover:text-papal-gold">
        {title}
      </h4>
      <p className="mt-2 text-xs text-papal-navy/60 line-clamp-2 flex-1">
        {description}
      </p>
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="font-bold text-papal-gold">{price}</span>
        <span className="text-[10px] text-papal-navy/40">Amazon</span>
      </div>
    </a>
  )
}

interface HomeProductShowcaseProps {
  locale: Locale
}

export default function HomeProductShowcase({
  locale,
}: HomeProductShowcaseProps) {
  const labels = HOME_LABELS[locale] || HOME_LABELS.es

  // Get products marked as 'essencial' or 'bestseller' for home
  const allProducts = getProductsByPlacement('que-llevar').concat(
    getProductsByPlacement('como-llegar'),
    getProductsByPlacement('programa')
  )

  // Deduplicate and filter featured products
  const seenIds = new Set<string>()
  const featured = allProducts.filter((p) => {
    if (seenIds.has(p.id)) return false
    seenIds.add(p.id)
    return p.tags.includes('essencial') || p.tags.includes('bestseller')
  })

  const displayProducts = featured.slice(0, 6)

  if (displayProducts.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-papal-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-papal-navy">
            {labels.title}
          </h2>
          <p className="mt-2 text-papal-navy/60">{labels.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>

        <p className="mt-4 text-center text-[9px] text-papal-navy/40">
          Enlaces de afiliación · Amazon Associate
        </p>
      </div>
    </section>
  )
}
