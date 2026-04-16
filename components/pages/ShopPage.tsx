'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/shop'
import { type ProductCategory } from '@/types/shop'
import { type Locale } from '@/data/i18n/types'

interface Props {
  locale: Locale
  title: string
  subtitle: string
  disclaimer: string
  categoryLabels: Record<ProductCategory, string>
  allLabel: string
}

export default function ShopPageContent({
  locale,
  title,
  subtitle,
  disclaimer,
  categoryLabels,
  allLabel,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all')

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const categories: (ProductCategory | 'all')[] = [
    'all',
    'merch-visita',
    'religioso',
    'libros',
    'souvenirs',
  ]

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-white/70">{subtitle}</p>
        </Container>
      </section>

      {/* Filtros */}
      <section className="border-b border-papal-gold/10 bg-papal-cream">
        <Container className="py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const label = cat === 'all' ? allLabel : categoryLabels[cat]
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-papal-gold text-papal-navy'
                      : 'border border-papal-gold/30 text-papal-navy hover:bg-papal-gold hover:text-white'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="py-16 text-center text-papal-navy/50">Sin productos en esta categoría.</p>
        )}

        {/* Disclaimer transparencia */}
        <div className="mt-12 rounded-xl border border-papal-gold/20 bg-papal-cream/50 p-5 text-center">
          <p className="text-xs text-papal-navy/60">{disclaimer}</p>
        </div>
      </Container>
    </>
  )
}
