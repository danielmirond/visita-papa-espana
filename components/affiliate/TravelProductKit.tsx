'use client'

import {
  getProductsByPlacement,
  buildAmazonUrl,
  type AmazonProduct,
} from '@/data/amazon-products'
import { Locale } from '@/data/i18n/types'

const TRAVEL_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    title: '🎒 Equipaje y viaje',
    subtitle: 'Productos para viajar cómodo a la visita',
    luggage: '🧳 Equipaje',
    comfort: '👟 Comodidad',
    gear: '🎒 Accesorios de viaje',
    shop: 'Ver en Amazon',
  },
  en: {
    title: '🎒 Travel & luggage',
    subtitle: 'Products for comfortable travel',
    luggage: '🧳 Luggage',
    comfort: '👟 Comfort',
    gear: '🎒 Travel accessories',
    shop: 'View on Amazon',
  },
  it: {
    title: '🎒 Viaggio e bagagli',
    subtitle: 'Prodotti per viaggiare comodamente',
    luggage: '🧳 Bagagli',
    comfort: '👟 Comfort',
    gear: '🎒 Accessori da viaggio',
    shop: 'Visualizza su Amazon',
  },
  fr: {
    title: '🎒 Voyage et bagages',
    subtitle: 'Produits pour voyager confortablement',
    luggage: '🧳 Bagages',
    comfort: '👟 Confort',
    gear: '🎒 Accessoires de voyage',
    shop: 'Voir sur Amazon',
  },
  de: {
    title: '🎒 Reisen und Gepäck',
    subtitle: 'Produkte für komfortables Reisen',
    luggage: '🧳 Gepäck',
    comfort: '👟 Komfort',
    gear: '🎒 Reisezubehör',
    shop: 'Auf Amazon ansehen',
  },
  pt: {
    title: '🎒 Viagem e bagagem',
    subtitle: 'Produtos para viajar confortavelmente',
    luggage: '🧳 Bagagem',
    comfort: '👟 Conforto',
    gear: '🎒 Acessórios de viagem',
    shop: 'Ver na Amazon',
  },
  ca: {
    title: '🎒 Viatge i equipatge',
    subtitle: 'Productes per viajar confortablement',
    luggage: '🧳 Equipatge',
    comfort: '👟 Comoditat',
    gear: '🎒 Accessoris de viatge',
    shop: 'Veure a Amazon',
  },
  gl: {
    title: '🎒 Viaxe e equipaxe',
    subtitle: 'Produtos para viajar confortablemente',
    luggage: '🧳 Equipaxe',
    comfort: '👟 Comodidade',
    gear: '🎒 Accesorios de viaxe',
    shop: 'Ver en Amazon',
  },
  eu: {
    title: '🎒 Bidaia eta ekipajea',
    subtitle: 'Produktuak erosoki bidaiatzeko',
    luggage: '🧳 Ekipajea',
    comfort: '👟 Erosotasuna',
    gear: '🎒 Bidaia-tresnak',
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

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="nofollow noopener noreferrer sponsored"
      className="block rounded-lg border border-papal-gold/30 bg-white p-4 transition-all hover:border-papal-gold hover:shadow-md"
    >
      <h4 className="font-semibold text-papal-navy line-clamp-2">
        {title}
      </h4>
      <p className="mt-1 text-xs text-papal-navy/60 line-clamp-1">
        {description}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-bold text-papal-gold">{price}</span>
        <span className="text-xs text-papal-navy/50">Amazon</span>
      </div>
    </a>
  )
}

interface TravelProductKitProps {
  locale: Locale
}

export default function TravelProductKit({
  locale,
}: TravelProductKitProps) {
  const labels = TRAVEL_LABELS[locale] || TRAVEL_LABELS.es

  // Get all travel products for como-llegar placement
  const allProducts = getProductsByPlacement('como-llegar')

  if (allProducts.length === 0) {
    return null
  }

  // Group by category for better organization
  const grouped: Record<string, AmazonProduct[]> = {
    luggage: allProducts.filter(p =>
      p.category === 'travel-gear' &&
      (p.id.includes('mochila') || p.id.includes('maleta') || p.id.includes('bolsa'))
    ),
    comfort: allProducts.filter(p =>
      p.category === 'comfort-wellness' &&
      (p.id.includes('calcetines') || p.id.includes('almohada') || p.id.includes('zapatos') || p.id.includes('botas'))
    ),
    gear: allProducts.filter(p =>
      p.category === 'travel-gear' &&
      !p.id.includes('mochila') && !p.id.includes('maleta') && !p.id.includes('bolsa')
    ),
  }

  return (
    <div className="rounded-xl border border-papal-gold/20 bg-gradient-to-br from-papal-cream to-white p-5">
      <h3 className="font-heading text-lg font-bold text-papal-navy">
        {labels.title}
      </h3>
      <p className="mt-1 text-xs text-papal-navy/60">
        {labels.subtitle}
      </p>

      <div className="mt-4 space-y-4">
        {/* Luggage */}
        {grouped.luggage.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-papal-navy">
              {labels.luggage}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {grouped.luggage.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Comfort */}
        {grouped.comfort.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-papal-navy">
              {labels.comfort}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {grouped.comfort.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Travel gear */}
        {grouped.gear.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-papal-navy">
              {labels.gear}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {grouped.gear.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-3 text-[9px] text-papal-navy/40">
        Enlaces de afiliación
      </p>
    </div>
  )
}
