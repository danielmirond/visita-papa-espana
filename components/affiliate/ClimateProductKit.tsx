'use client'

import Image from 'next/image'
import {
  getContextualProducts,
  buildAmazonUrl,
  type AmazonProduct,
} from '@/data/amazon-products'
import { Locale } from '@/data/i18n/types'

// Mapa de ciudades a datos contextuales (clima, tipo de evento)
const CITY_CONTEXT: Record<
  string,
  {
    temperature: number // temperatura promedio en junio
    climate: 'hot' | 'mild' | 'variable'
    eventTypes: Array<'misa' | 'vigilia' | 'procesion' | 'encuentro'>
  }
> = {
  madrid: {
    temperature: 28, // Madrid: muy caluroso en junio
    climate: 'hot',
    eventTypes: ['misa', 'vigilia', 'procesion', 'encuentro'],
  },
  barcelona: {
    temperature: 24, // Barcelona: templado, posible lluvia
    climate: 'variable',
    eventTypes: ['misa', 'vigilia', 'encuentro'],
  },
  'gran-canaria': {
    temperature: 26, // Canarias: caluroso, sol intenso
    climate: 'hot',
    eventTypes: ['misa', 'encuentro'],
  },
  tenerife: {
    temperature: 26,
    climate: 'hot',
    eventTypes: ['misa', 'encuentro'],
  },
}

const CLIMATE_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    title: '🎒 Kit esencial por clima',
    subtitle: 'Productos recomendados según el clima de esta ciudad',
    sun: '☀️ Protección solar',
    rain: '🌧️ Resistencia al agua',
    comfort: '👟 Comodidad',
    energy: '⚡ Energía',
    tech: '📱 Conectividad',
    shop: 'Comprar en Amazon',
  },
  en: {
    title: '🎒 Climate-based kit',
    subtitle: 'Recommended products for this city\'s climate',
    sun: '☀️ Sun protection',
    rain: '🌧️ Water resistance',
    comfort: '👟 Comfort',
    energy: '⚡ Energy',
    tech: '📱 Connectivity',
    shop: 'Shop on Amazon',
  },
  it: {
    title: '🎒 Kit basato sul clima',
    subtitle: 'Prodotti consigliati per il clima di questa città',
    sun: '☀️ Protezione solare',
    rain: '🌧️ Resistenza all\'acqua',
    comfort: '👟 Comfort',
    energy: '⚡ Energia',
    tech: '📱 Connettività',
    shop: 'Acquista su Amazon',
  },
  fr: {
    title: '🎒 Kit selon le climat',
    subtitle: 'Produits recommandés pour le climat de cette ville',
    sun: '☀️ Protection solaire',
    rain: '🌧️ Résistance à l\'eau',
    comfort: '👟 Confort',
    energy: '⚡ Énergie',
    tech: '📱 Connectivité',
    shop: 'Acheter sur Amazon',
  },
  de: {
    title: '🎒 Klimagerechtes Kit',
    subtitle: 'Empfehlung für das Klima dieser Stadt',
    sun: '☀️ Sonnenschutz',
    rain: '🌧️ Wasserbeständigkeit',
    comfort: '👟 Komfort',
    energy: '⚡ Energie',
    tech: '📱 Konnektivität',
    shop: 'Bei Amazon kaufen',
  },
  pt: {
    title: '🎒 Kit baseado no clima',
    subtitle: 'Produtos recomendados para o clima desta cidade',
    sun: '☀️ Proteção solar',
    rain: '🌧️ Resistência à água',
    comfort: '👟 Conforto',
    energy: '⚡ Energia',
    tech: '📱 Conectividade',
    shop: 'Comprar na Amazon',
  },
  ca: {
    title: '🎒 Kit segons el clima',
    subtitle: 'Productes recomanats pel clima d\'aquesta ciutat',
    sun: '☀️ Protecció solar',
    rain: '🌧️ Resistència a l\'aigua',
    comfort: '👟 Comoditat',
    energy: '⚡ Energia',
    tech: '📱 Connectivitat',
    shop: 'Comprar a Amazon',
  },
  gl: {
    title: '🎒 Kit segundo o clima',
    subtitle: 'Produtos recomendados para o clima desta cidade',
    sun: '☀️ Protección solar',
    rain: '🌧️ Resistencia á auga',
    comfort: '👟 Comodidade',
    energy: '⚡ Enerxía',
    tech: '📱 Conectividade',
    shop: 'Comprar en Amazon',
  },
  eu: {
    title: '🎒 Klima-oinarriko kit',
    subtitle: 'Hiriko kliman gomendatutako produktuak',
    sun: '☀️ Eguzkiaren babesa',
    rain: '🌧️ Urzaren erresistentzia',
    comfort: '👟 Erosotasuna',
    energy: '⚡ Energia',
    tech: '📱 Konektibitate',
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
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h4 className="font-semibold text-papal-navy group-hover:text-papal-gold">
            {title}
          </h4>
          <p className="mt-1 text-xs text-papal-navy/60 line-clamp-2">
            {description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-bold text-papal-gold">{price}</span>
            <span className="text-xs text-papal-navy/50">Amazon</span>
          </div>
        </div>
      </div>
    </a>
  )
}

interface ClimateProductKitProps {
  citySlug: string
  locale: Locale
}

export default function ClimateProductKit({
  citySlug,
  locale,
}: ClimateProductKitProps) {
  const labels = CLIMATE_LABELS[locale] || CLIMATE_LABELS.es
  const context = CITY_CONTEXT[citySlug]

  if (!context) {
    // Si no hay contexto definido, no mostramos nada
    return null
  }

  // Obtener productos contextuales según la ciudad y clima
  const products = getContextualProducts({
    city: citySlug as 'madrid' | 'barcelona' | 'gran-canaria' | 'tenerife',
    temperature: context.temperature,
    placement: 'ciudades',
  })

  if (products.length === 0) {
    return null
  }

  // Agrupar productos por categoría/propósito
  const grouped = {
    sun: products.filter((p) =>
      ['bloqueador-solar-spf50', 'sombrero-panama', 'gafas-polarizadas']
        .includes(p.id)
    ),
    rain: products.filter((p) =>
      ['paraguas-invertido', 'botas-senderismo-impermeables', 'mochila-30l-peregrino']
        .includes(p.id)
    ),
    comfort: products.filter((p) =>
      ['calcetines-merino', 'almohada-cervical', 'vendaje-tobillo']
        .includes(p.id)
    ),
    energy: products.filter((p) =>
      ['barras-proteina-clif', 'bebida-isotonica', 'electrolitos-bebida']
        .includes(p.id)
    ),
    tech: products.filter((p) =>
      ['power-bank-20000mah', 'linterna-frontal-led', 'cargador-65w-multipuerto']
        .includes(p.id)
    ),
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
        {/* Sun protection */}
        {grouped.sun.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.sun}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.sun.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Rain/water resistance */}
        {grouped.rain.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.rain}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.rain.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Comfort */}
        {grouped.comfort.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.comfort}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.comfort.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Energy & Nutrition */}
        {grouped.energy.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.energy}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.energy.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Tech */}
        {grouped.tech.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-papal-navy text-sm">
              {labels.tech}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {grouped.tech.slice(0, 2).map((p) => (
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
