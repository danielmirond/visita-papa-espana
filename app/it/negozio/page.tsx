import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ShopPageContent from '@/components/pages/ShopPage'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getAlternates } from '@/lib/i18n-metadata'
import { featureFlags } from '@/data/siteConfig'
import type { ProductCategory } from '@/types/shop'

const t = getPagesDict('it')

export const metadata: Metadata = {
  title: t.shop.title,
  description: t.shop.subtitle,
  alternates: getAlternates('/tienda', 'it'),
  // Mientras la tienda esté oculta, no queremos que Google la indexe
  robots: featureFlags.shopEnabled ? undefined : { index: false, follow: false },
}

const categoryLabels: Record<ProductCategory, string> = {
  'merch-visita': t.shop.categoryMerch,
  religioso: t.shop.categoryReligioso,
  libros: t.shop.categoryLibros,
  souvenirs: t.shop.categorySouvenirs,
  ropa: t.shop.categoryRopa,
}

export default function Page() {
  if (!featureFlags.shopEnabled) {
    notFound()
  }
  return (
    <ShopPageContent
      locale="it"
      title={t.shop.title}
      subtitle={t.shop.subtitle}
      disclaimer={t.shop.disclaimer}
      categoryLabels={categoryLabels}
      allLabel={t.shop.all}
    />
  )
}
