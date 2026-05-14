import { Product, ProductCategory } from '@/types/shop'

/**
 * Catálogo de la tienda.
 *
 * Modelo mixto:
 * - Afiliación (Amazon, etc.): la mayoría de libros, artículos religiosos.
 *   Tag de Amazon Afiliados: nuus-21 (Daniel Mirón).
 * - Print-on-demand (Printful, Redbubble): merch propio de la visita.
 *   Para activar, crea los productos en el proveedor y pega la URL aquí.
 *
 * Imágenes: usa /images/shop/<slug>.webp. Si no existe, cae en un
 * placeholder generado por el componente ProductCard.
 */
export const products: Product[] = [
  // ============================================================
  // MERCHANDISING OFICIAL DE LA VISITA (Print-on-demand)
  // ============================================================
  {
    id: 'merch-camiseta-alzad-mirada',
    slug: 'camiseta-alzad-la-mirada',
    name: 'Camiseta "Alzad la mirada"',
    description:
      'Camiseta conmemorativa de la visita papal con el lema oficial "Alzad la mirada" y las fechas 6-12 junio 2026. Algodón 100%.',
    price: 22.9,
    images: ['/images/shop/camiseta-lema.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#', // TODO: URL de Printful cuando esté creado
    isOfficialMerch: true,
    tags: ['nuevo', 'destacado'],
  },
  {
    id: 'merch-sudadera-visita',
    slug: 'sudadera-visita-papa-2026',
    name: 'Sudadera "Visita Papa León XIV España 2026"',
    description:
      'Sudadera con capucha conmemorativa. Diseño con el logo oficial y las 4 ciudades de la visita. Algodón orgánico.',
    price: 42.9,
    images: ['/images/shop/sudadera-visita.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#',
    isOfficialMerch: true,
    tags: ['nuevo'],
  },
  {
    id: 'merch-taza-papa',
    slug: 'taza-alzad-la-mirada',
    name: 'Taza conmemorativa',
    description:
      'Taza de cerámica blanca con el lema "Alzad la mirada" y el logo de la visita. Apta para microondas y lavavajillas.',
    price: 14.9,
    images: ['/images/shop/taza.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#',
    isOfficialMerch: true,
  },
  {
    id: 'merch-pegatinas-pack',
    slug: 'pack-pegatinas-visita',
    name: 'Pack de pegatinas de la visita',
    description:
      'Set de 6 pegatinas vinílicas con motivos de la visita papal: logo oficial, cruz, mapa del recorrido, lema.',
    price: 8.9,
    images: ['/images/shop/pegatinas.webp'],
    category: 'merch-visita',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
  },
  {
    id: 'merch-tote-bag',
    slug: 'tote-bag-peregrino',
    name: 'Bolsa de tela del peregrino',
    description:
      'Bolsa de tela 100% algodón reutilizable con diseño exclusivo de la visita. Perfecta para llevar a los actos.',
    price: 12.9,
    images: ['/images/shop/tote-bag.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#',
    isOfficialMerch: true,
  },

  // ============================================================
  // ARTÍCULOS RELIGIOSOS (Amazon afiliados)
  // ============================================================
  {
    id: 'rosario-madera-olivo',
    slug: 'rosario-madera-olivo-tierra-santa',
    name: 'Rosario de madera de olivo de Tierra Santa',
    description:
      'Rosario artesanal de madera de olivo traído de Tierra Santa. Ideal para acompañar la visita papal.',
    price: 19.9,
    images: ['/images/shop/rosario-olivo.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=rosario+madera+olivo+tierra+santa&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'medalla-san-benito',
    slug: 'medalla-san-benito-plata',
    name: 'Medalla de San Benito (plata)',
    description: 'Medalla de San Benito en plata de ley con cadena. Protección espiritual tradicional.',
    price: 29.9,
    images: ['/images/shop/medalla-san-benito.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=medalla+san+benito+plata&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'cruz-pectoral',
    slug: 'cruz-pectoral-madera',
    name: 'Cruz pectoral de madera',
    description:
      'Cruz pectoral de madera tallada artesanalmente. Modelo similar al uso pontifical.',
    price: 24.9,
    images: ['/images/shop/cruz-pectoral.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=cruz+pectoral+madera&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'vela-corpus-christi',
    slug: 'vela-liturgica-corpus',
    name: 'Vela litúrgica para Corpus Christi',
    description:
      'Vela litúrgica artesanal para acompañar la procesión de Corpus Christi del 7 de junio.',
    price: 9.9,
    images: ['/images/shop/vela-liturgica.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=vela+liturgica+procesion&tag=nuus-21',
    isOfficialMerch: false,
    relatedCity: 'madrid',
  },

  // ============================================================
  // LIBROS (Amazon afiliados)
  // ============================================================
  {
    id: 'libro-papa-leon-biografia',
    slug: 'biografia-papa-leon-xiv',
    name: 'Biografía del Papa León XIV',
    description:
      'Biografía autorizada del Papa León XIV, desde su nacimiento en Chicago hasta su elección al pontificado. Lectura imprescindible antes de la visita.',
    price: 21.9,
    images: ['/images/shop/libro-biografia.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=papa+leon+xiv+biografia&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['destacado'],
  },
  {
    id: 'libro-alzad-mirada',
    slug: 'alzad-la-mirada-libro',
    name: 'Alzad la mirada — Reflexiones sobre la visita',
    description:
      'Compendio de reflexiones sobre el lema "Alzad la mirada" y su significado en la Iglesia del siglo XXI.',
    price: 16.9,
    images: ['/images/shop/libro-alzad-mirada.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=alzad+la+mirada+papa&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'libro-encíclica',
    slug: 'encicllica-leon-xiv',
    name: 'Primera encíclica del Papa León XIV',
    description:
      'Texto completo de la primera encíclica del Papa León XIV, con introducción crítica y notas de contexto.',
    price: 14.9,
    images: ['/images/shop/libro-enciclica.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=enciclica+leon+xiv&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'libro-sagrada-familia-gaudi',
    slug: 'sagrada-familia-gaudi-libro',
    name: 'La Sagrada Familia y Gaudí — Edición centenario',
    description:
      'Libro ilustrado sobre la Sagrada Familia con motivo del centenario de Gaudí (2026) y la inauguración de la Torre de Jesús.',
    price: 34.9,
    images: ['/images/shop/libro-gaudi.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=sagrada+familia+gaudi+centenario&tag=nuus-21',
    isOfficialMerch: false,
    relatedCity: 'barcelona',
    tags: ['destacado'],
  },
  {
    id: 'biblia-jerusalen',
    slug: 'biblia-jerusalen',
    name: 'Biblia de Jerusalén',
    description:
      'Edición tapa dura de la Biblia de Jerusalén, la traducción católica de referencia en español.',
    price: 39.9,
    images: ['/images/shop/biblia-jerusalen.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=biblia+de+jerusalen+tapa+dura&tag=nuus-21',
    isOfficialMerch: false,
  },

  // ============================================================
  // SOUVENIRS de las ciudades
  // ============================================================
  {
    id: 'souvenir-bernabeu-visita',
    slug: 'poster-vigilia-bernabeu',
    name: 'Póster Vigilia del Bernabéu',
    description:
      'Póster conmemorativo de la Vigilia juvenil en el Santiago Bernabéu. Impresión giclée en papel de alta calidad.',
    price: 19.9,
    images: ['/images/shop/poster-bernabeu.webp'],
    category: 'souvenirs',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
    relatedCity: 'madrid',
  },
  {
    id: 'souvenir-sagrada-familia',
    slug: 'poster-torre-jesus-sagrada-familia',
    name: 'Póster Torre de Jesús de la Sagrada Familia',
    description:
      'Ilustración conmemorativa de la inauguración de la Torre de Jesucristo (172,5 m) por el Papa el 10 de junio.',
    price: 19.9,
    images: ['/images/shop/poster-sagrada-familia.webp'],
    category: 'souvenirs',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
    relatedCity: 'barcelona',
    tags: ['destacado'],
  },
  {
    id: 'souvenir-canarias',
    slug: 'poster-visita-canarias',
    name: 'Póster Primera visita papal a Canarias',
    description:
      'Póster histórico conmemorando la primera visita de un Papa a las Islas Canarias (Gran Canaria y Tenerife, 11-12 junio).',
    price: 19.9,
    images: ['/images/shop/poster-canarias.webp'],
    category: 'souvenirs',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
    relatedCity: 'gran-canaria',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags?.includes('destacado'))
}
