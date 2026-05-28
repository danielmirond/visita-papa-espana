'use client'

import { amazonProductCatalog, buildAmazonUrl } from '@/data/amazon-products'
import { Locale } from '@/data/i18n/types'
import { useState } from 'react'

const CATEGORY_DISPLAY_NAMES: Record<Locale, Record<string, string>> = {
  es: {
    'merchandise-religious': '🙏 Artículos religiosos',
    'travel-gear': '🎒 Equipaje y viaje',
    'comfort-wellness': '👟 Comodidad y bienestar',
    'tech-connectivity': '📱 Tecnología',
    'health-safety': '⚕️ Salud y seguridad',
    'energy-nutrition': '⚡ Energía y nutrición',
    'books-media': '📚 Libros y recursos',
    'accessories': '💼 Accesorios',
  },
  en: {
    'merchandise-religious': '🙏 Religious items',
    'travel-gear': '🎒 Luggage & travel',
    'comfort-wellness': '👟 Comfort & wellness',
    'tech-connectivity': '📱 Technology',
    'health-safety': '⚕️ Health & safety',
    'energy-nutrition': '⚡ Energy & nutrition',
    'books-media': '📚 Books & resources',
    'accessories': '💼 Accessories',
  },
  it: {
    'merchandise-religious': '🙏 Articoli religiosi',
    'travel-gear': '🎒 Bagagli e viaggio',
    'comfort-wellness': '👟 Comfort e benessere',
    'tech-connectivity': '📱 Tecnologia',
    'health-safety': '⚕️ Salute e sicurezza',
    'energy-nutrition': '⚡ Energia e nutrizione',
    'books-media': '📚 Libri e risorse',
    'accessories': '💼 Accessori',
  },
  fr: {
    'merchandise-religious': '🙏 Articles religieux',
    'travel-gear': '🎒 Bagages et voyage',
    'comfort-wellness': '👟 Confort et bien-être',
    'tech-connectivity': '📱 Technologie',
    'health-safety': '⚕️ Santé et sécurité',
    'energy-nutrition': '⚡ Énergie et nutrition',
    'books-media': '📚 Livres et ressources',
    'accessories': '💼 Accessoires',
  },
  de: {
    'merchandise-religious': '🙏 Religiöse Artikel',
    'travel-gear': '🎒 Gepäck und Reisen',
    'comfort-wellness': '👟 Komfort und Wohlbefinden',
    'tech-connectivity': '📱 Technologie',
    'health-safety': '⚕️ Gesundheit und Sicherheit',
    'energy-nutrition': '⚡ Energie und Ernährung',
    'books-media': '📚 Bücher und Ressourcen',
    'accessories': '💼 Zubehör',
  },
  pt: {
    'merchandise-religious': '🙏 Artigos religiosos',
    'travel-gear': '🎒 Bagagem e viagem',
    'comfort-wellness': '👟 Conforto e bem-estar',
    'tech-connectivity': '📱 Tecnologia',
    'health-safety': '⚕️ Saúde e segurança',
    'energy-nutrition': '⚡ Energia e nutrição',
    'books-media': '📚 Livros e recursos',
    'accessories': '💼 Acessórios',
  },
  ca: {
    'merchandise-religious': '🙏 Articles religiosos',
    'travel-gear': '🎒 Equipatge i viatge',
    'comfort-wellness': '👟 Comoditat i benestar',
    'tech-connectivity': '📱 Tecnologia',
    'health-safety': '⚕️ Salut i seguretat',
    'energy-nutrition': '⚡ Energia i nutrició',
    'books-media': '📚 Llibres i recursos',
    'accessories': '💼 Accessoris',
  },
  gl: {
    'merchandise-religious': '🙏 Artigos relixiosos',
    'travel-gear': '🎒 Equipaxe e viaxe',
    'comfort-wellness': '👟 Comodidade e benestar',
    'tech-connectivity': '📱 Tecnoloxía',
    'health-safety': '⚕️ Saúde e seguridade',
    'energy-nutrition': '⚡ Enerxía e nutrición',
    'books-media': '📚 Libros e recursos',
    'accessories': '💼 Accesorios',
  },
  eu: {
    'merchandise-religious': '🙏 Erlijioso artikuluak',
    'travel-gear': '🎒 Ekipajea eta bidaia',
    'comfort-wellness': '👟 Erosotasuna eta ongizatea',
    'tech-connectivity': '📱 Teknologia',
    'health-safety': '⚕️ Osasuna eta seguritatea',
    'energy-nutrition': '⚡ Elikadura eta energia',
    'books-media': '📚 Liburuak eta baliabideak',
    'accessories': '💼 Tresnak',
  },
}

const LABELS: Record<Locale, { filter: string; view: string; back: string; amazon: string }> = {
  es: { filter: 'Filtrar por:', view: 'Ver en Amazon →', back: '← Volver', amazon: 'Comprar en Amazon' },
  en: { filter: 'Filter by:', view: 'View on Amazon →', back: '← Back', amazon: 'Buy on Amazon' },
  it: { filter: 'Filtra per:', view: 'Visualizza su Amazon →', back: '← Indietro', amazon: 'Acquista su Amazon' },
  fr: { filter: 'Filtrer par:', view: 'Voir sur Amazon →', back: '← Retour', amazon: 'Acheter sur Amazon' },
  de: { filter: 'Filtern nach:', view: 'Auf Amazon ansehen →', back: '← Zurück', amazon: 'Bei Amazon kaufen' },
  pt: { filter: 'Filtrar por:', view: 'Ver na Amazon →', back: '← Voltar', amazon: 'Comprar na Amazon' },
  ca: { filter: 'Filtrar per:', view: 'Veure a Amazon →', back: '← Tornar', amazon: 'Comprar a Amazon' },
  gl: { filter: 'Filtrar por:', view: 'Ver en Amazon →', back: '← Atrás', amazon: 'Comprar en Amazon' },
  eu: { filter: 'Filtratu:', view: 'Amazon-en ikusi →', back: '← Atzera', amazon: 'Amazon-en erosi' },
}

interface ProductKitCarouselProps {
  locale: Locale
  placement?: 'que-llevar'
}

export default function ProductKitCarousel({
  locale,
  placement = 'que-llevar',
}: ProductKitCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const labels = LABELS[locale]
  const categoryNames = CATEGORY_DISPLAY_NAMES[locale]

  // Filtrar productos para esta página
  const products = amazonProductCatalog.filter((p) =>
    p.placement.includes(placement as any)
  )

  // Agrupar por categoría
  const grouped = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof products>
  )

  // Categorías disponibles en orden
  const categories = Object.keys(grouped).sort() as Array<keyof typeof grouped>
  const filteredProducts = selectedCategory
    ? grouped[selectedCategory]
    : products

  return (
    <div className="space-y-6">
      {/* Filtro por categoría */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selectedCategory === null
              ? 'bg-papal-gold text-papal-navy'
              : 'border border-papal-gold/30 text-papal-navy hover:border-papal-gold'
          }`}
        >
          Todos ({products.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-papal-gold text-papal-navy'
                : 'border border-papal-gold/30 text-papal-navy hover:border-papal-gold'
            }`}
          >
            {categoryNames[cat]} ({grouped[cat].length})
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          const title = product.title[locale] || product.title.es || 'Product'
          const description =
            product.description[locale] || product.description.es || ''
          const price = `€${product.priceRange.min}-${product.priceRange.max}`
          const amazonUrl = buildAmazonUrl(product.amazonQuery, locale)
          const tag = product.tags.join(', ')

          return (
            <a
              key={product.id}
              href={amazonUrl}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="group rounded-lg border border-papal-gold/20 bg-white p-4 transition-all hover:border-papal-gold hover:shadow-md"
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
                    {tag && (
                      <p className="text-[10px] text-papal-navy/40 uppercase tracking-wide">
                        {tag}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-papal-navy/50">Amazon</span>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="rounded-lg border border-papal-gold/20 bg-papal-cream p-6 text-center">
          <p className="text-papal-navy/70">
            No products found in this category
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-3 text-sm font-medium text-papal-gold hover:underline"
          >
            {labels.back}
          </button>
        </div>
      )}

      {/* Disclaimer */}
      <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
        <p className="text-[11px] text-papal-navy/60">
          🔗 Algunos productos incluyen enlaces de afiliación de Amazon. Si
          compras a través de ellos, recibimos una pequeña comisión sin coste
          adicional para ti. Esto ayuda a mantener esta guía actualizada y sin
          publicidad intrusiva.
        </p>
      </div>
    </div>
  )
}
