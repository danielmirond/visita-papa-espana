export type ProductCategory =
  | 'merch-visita' // Merch oficial de la visita (propio, print-on-demand)
  | 'religioso' // Artículos religiosos (rosarios, medallas, cruces)
  | 'libros' // Libros sobre el Papa, devocionales
  | 'souvenirs' // Recuerdos de las ciudades (Madrid, BCN, Canarias)
  | 'ropa' // Camisetas, sudaderas
  | 'viaje' // Equipaje, mochilas, bolsas de viaje
  | 'salud-bienestar' // Protección solar, calcetines, botella, etc.
  | 'tech' // Power banks, cables, auriculares, GPS
  | 'nutricion' // Barras proteína, frutos secos, bebidas

export type ProductSource = 'amazon' | 'printful' | 'redbubble' | 'teespring' | 'other'

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  /** Precio de referencia en EUR. null si es variable */
  price: number | null
  /** URLs de imágenes del producto. La primera es la principal. */
  images: string[]
  category: ProductCategory
  source: ProductSource
  /** URL de compra (afiliado cuando aplica) */
  buyUrl: string
  /** Si es true, es merchandising propio (PoD con nuestro diseño) */
  isOfficialMerch: boolean
  /** Etiquetas adicionales para filtrado: "nuevo", "agotado", "destacado", etc. */
  tags?: string[]
  /** Ciudad relacionada (si aplica): madrid, barcelona, gran-canaria, tenerife */
  relatedCity?: string
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  'merch-visita': 'Recuerdos de la visita',
  religioso: 'Artículos religiosos',
  libros: 'Libros',
  souvenirs: 'Souvenirs',
  ropa: 'Ropa',
  viaje: 'Equipaje y viaje',
  'salud-bienestar': 'Salud y bienestar',
  tech: 'Tecnología',
  nutricion: 'Nutrición y energía',
}
