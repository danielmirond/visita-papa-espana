'use client'

import {
  getProductsByPlacement,
  type AmazonProduct,
  buildAmazonUrl,
} from '@/data/amazon-products'
import { Locale } from '@/data/i18n/types'

const CATEGORY_PRODUCT_TYPES: Record<string, string[]> = {
  transporte: ['travel-gear', 'comfort-wellness', 'tech-connectivity'],
  alojamiento: ['travel-gear', 'comfort-wellness'],
  evento: ['merchandise-religious', 'comfort-wellness', 'energy-nutrition'],
  inscripcion: ['comfort-wellness', 'health-safety'],
  general: ['travel-gear', 'comfort-wellness'],
}

const FAQ_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    title: '💡 Productos relacionados',
  },
  en: {
    title: '💡 Related products',
  },
  it: {
    title: '💡 Prodotti correlati',
  },
  fr: {
    title: '💡 Produits connexes',
  },
  de: {
    title: '💡 Verwandte Produkte',
  },
  pt: {
    title: '💡 Produtos relacionados',
  },
  ca: {
    title: '💡 Productes relacionats',
  },
  gl: {
    title: '💡 Produtos relacionados',
  },
  eu: {
    title: '💡 Erlazionatutako produktuak',
  },
}

interface ProductCardProps {
  product: AmazonProduct
  locale: Locale
}

function ProductCard({ product, locale }: ProductCardProps) {
  const title = product.title[locale] || product.title.es || 'Product'
  const price = `€${product.priceRange.min}-${product.priceRange.max}`
  const amazonUrl = buildAmazonUrl(product.amazonQuery, locale)

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="nofollow noopener noreferrer sponsored"
      className="inline-flex items-center gap-2 rounded-full border border-papal-gold/50 bg-papal-cream px-3 py-1.5 text-xs font-medium text-papal-navy transition-all hover:border-papal-gold hover:bg-papal-gold hover:text-white"
    >
      <span>{title}</span>
      <span className="font-bold text-papal-gold group-hover:text-white">
        {price}
      </span>
      <span className="ml-1 text-[10px] opacity-70">→</span>
    </a>
  )
}

interface FAQProductRecommendationsProps {
  category: string
  locale: Locale
}

export default function FAQProductRecommendations({
  category,
  locale,
}: FAQProductRecommendationsProps) {
  // Get products for FAQ placement
  const allFaqProducts = getProductsByPlacement('faq')

  if (allFaqProducts.length === 0) {
    return null
  }

  // Filter products by relevant categories for this FAQ category
  const relevantTypes = CATEGORY_PRODUCT_TYPES[category] || []
  const recommendedProducts = allFaqProducts
    .filter((p) => relevantTypes.includes(p.category))
    .slice(0, 2) // Show max 2 products to avoid clutter

  if (recommendedProducts.length === 0) {
    return null
  }

  const labels = FAQ_LABELS[locale] || FAQ_LABELS.es

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
      <span className="text-[10px] font-semibold text-papal-navy/60">
        {labels.title}:
      </span>
      <div className="flex flex-wrap gap-2">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
    </div>
  )
}
