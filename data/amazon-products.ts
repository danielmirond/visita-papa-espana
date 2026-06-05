/**
 * Amazon Affiliate Products Catalog
 *
 * Estructura centralizada de todos los productos Amazon afiliados.
 * Tag: nuus-21 (Daniel Mirón, ~5% commission)
 *
 * Cada producto:
 * - id: unique identifier (kebab-case)
 * - category: tipo de producto (merchandising, travel, health, tech, religious, energy, book)
 * - title: nombre del producto (multiidioma)
 * - description: descripción corta
 * - amazonQuery: búsqueda específica para encontrar en Amazon (ej: "bloqueador solar spf 50 resistente agua")
 * - priceRange: rango de precios {min, max} en EUR
 * - tags: metadata (nuevo, bestseller, oferta, essencial, contextual)
 * - placement: dónde aparece el producto (tienda, que-llevar, ciudades, programa, etc.)
 * - context: condiciones de aparición (climate, eventType, duration)
 * - image: ruta a imagen opcional
 */

import type { Locale } from '@/data/i18n/types'

export interface AmazonProduct {
  id: string
  category:
    | 'merchandise-religious'
    | 'travel-gear'
    | 'comfort-wellness'
    | 'tech-connectivity'
    | 'health-safety'
    | 'energy-nutrition'
    | 'books-media'
    | 'accessories'
  title: Partial<Record<Locale, string>>
  description: Partial<Record<Locale, string>>
  amazonQuery: string // búsqueda para encontrar el producto
  priceRange: { min: number; max: number }
  tags: Array<'nuevo' | 'bestseller' | 'oferta' | 'essencial' | 'contextual' | 'premium'>
  placement: Array<'tienda' | 'que-llevar' | 'ciudades' | 'programa' | 'faq' | 'como-llegar' | 'como-asistir' | 'cortes-trafico' | 'oracion' | 'guia'>
  context?: {
    cities?: Array<'madrid' | 'barcelona' | 'gran-canaria' | 'tenerife'>
    eventTypes?: Array<'misa' | 'vigilia' | 'procesion' | 'encuentro'>
    minTemp?: number
    maxTemp?: number
    minDuration?: number // horas
  }
  image?: string
}

// ============================================================
// 1. MERCHANDISE RELIGIOSO (8 items)
// ============================================================

export const religiousMerchandise: AmazonProduct[] = [
  {
    id: 'rosario-meditacion-premium',
    category: 'merchandise-religious',
    title: {
      es: 'Rosario meditación (cuentas de madera)',
      en: 'Meditation Rosary (wooden beads)',
      it: 'Rosario meditazione (perle di legno)',
      fr: 'Chapelet méditation (perles en bois)',
      de: 'Meditationsrosenkranz (Holzperlen)',
      pt: 'Rosário meditação (contas de madeira)',
      ca: 'Rosari meditació (beates de fusta)',
      gl: 'Rosario meditación (contas de madeira)',
      eu: 'Errosetak meditazioa (egurrez egindako kontaak)',
    },
    description: {
      es: 'Rosario artesanal de cuentas de madera, ideal para meditación y oración durante la visita. Incluye crucifijo metálico y bolsa de tela.',
      en: 'Handcrafted wooden bead rosary, perfect for meditation and prayer. Includes metal crucifix and cloth bag.',
    },
    amazonQuery: 'rosario meditacion cuentas madera crucifijo',
    priceRange: { min: 12, max: 25 },
    tags: ['essencial', 'premium'],
    placement: ['tienda', 'oracion', 'programa'],
    context: {
      eventTypes: ['misa', 'vigilia'],
    },
  },
  {
    id: 'medalla-milagrosa-plata',
    category: 'merchandise-religious',
    title: {
      es: 'Medalla milagrosa (plata 925)',
      en: 'Miraculous Medal (925 silver)',
      it: 'Medaglia miracolosa (argento 925)',
    },
    description: {
      es: 'Medalla milagrosa de plata 925, con cadena. Símbolo de protección espiritual.',
      en: 'Sterling silver miraculous medal with chain. Symbol of spiritual protection.',
    },
    amazonQuery: 'medalla milagrosa plata 925 cadena',
    priceRange: { min: 15, max: 40 },
    tags: ['premium', 'essencial'],
    placement: ['tienda', 'oracion', 'como-asistir'],
  },
  {
    id: 'pulsera-rosario-discreto',
    category: 'merchandise-religious',
    title: {
      es: 'Pulsera rosario (discreto)',
      en: 'Rosary Bracelet (discreet)',
    },
    description: {
      es: 'Pulsera con cuentas que forman rosario, fácil de llevar en muñeca. Ajustable.',
      en: 'Wrist rosary bracelet with adjustable sizing. Discreet and easy to wear.',
    },
    amazonQuery: 'pulsera rosario bracelet discreto ajustable',
    priceRange: { min: 8, max: 18 },
    tags: ['essencial', 'nuevo'],
    placement: ['tienda', 'que-llevar', 'programa'],
  },
  {
    id: 'estampa-papa-leon-xiv',
    category: 'merchandise-religious',
    title: {
      es: 'Estampa Papa León XIV (plastificada)',
      en: 'Pope Leo XIV Holy Card (laminated)',
    },
    description: {
      es: 'Estampa religiosa con imagen del Papa León XIV, plastificada y resistente al agua.',
      en: 'Laminated holy card of Pope Leo XIV, waterproof and durable.',
    },
    amazonQuery: 'estampa papa leon xiv plastificada',
    priceRange: { min: 2, max: 5 },
    tags: ['essencial', 'oferta'],
    placement: ['tienda', 'programa', 'faq'],
  },
  {
    id: 'biblia-bolsillo-rv',
    category: 'books-media',
    title: {
      es: 'Biblia de bolsillo (Reina Valera)',
      en: 'Pocket Bible (King James)',
    },
    description: {
      es: 'Biblia de bolsillo compacta, perfecta para llevar durante la visita. Encuadernación resistente.',
      en: 'Compact pocket Bible with durable binding. Easy to carry.',
    },
    amazonQuery: 'biblia bolsillo reina valera compacta',
    priceRange: { min: 12, max: 20 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'guia'],
  },
  {
    id: 'libro-papa-leon-xiv-biografia',
    category: 'books-media',
    title: {
      es: 'Biografía Papa León XIV',
      en: 'Biography of Pope Leo XIV',
    },
    description: {
      es: 'Libro biografía completa del Papa León XIV, su vida, papado y enseñanzas.',
      en: 'Comprehensive biography of Pope Leo XIV covering his life and papacy.',
    },
    amazonQuery: 'biografia papa leon xiv libro',
    priceRange: { min: 16, max: 28 },
    tags: ['nuevo', 'essencial'],
    placement: ['tienda', 'guia'],
  },
  {
    id: 'novena-papa-leon-xiv',
    category: 'books-media',
    title: {
      es: 'Novena al Papa León XIV (folleto)',
      en: 'Novena to Pope Leo XIV (pamphlet)',
    },
    description: {
      es: 'Folleto con novena de 9 días al Papa León XIV, oraciones diarias.',
      en: 'Nine-day novena prayers to Pope Leo XIV in pamphlet form.',
    },
    amazonQuery: 'novena papa leon xiv folleto oraciones',
    priceRange: { min: 4, max: 8 },
    tags: ['essencial', 'oferta'],
    placement: ['tienda', 'oracion', 'faq'],
  },
  {
    id: 'vela-conmemorativa-visita',
    category: 'merchandise-religious',
    title: {
      es: 'Vela conmemorativa (sin aroma)',
      en: 'Commemorative Candle (unscented)',
    },
    description: {
      es: 'Vela conmemorativa de la visita papal, sin perfume, larga duración.',
      en: 'Long-lasting commemorative pillar candle of the papal visit.',
    },
    amazonQuery: 'vela conmemorativa papa visita sin aroma',
    priceRange: { min: 8, max: 15 },
    tags: ['nuevo'],
    placement: ['tienda', 'programa'],
  },
]

// ============================================================
// 2. TRAVEL GEAR (8 items)
// ============================================================

export const travelGear: AmazonProduct[] = [
  {
    id: 'mochila-30l-ergonomica',
    category: 'travel-gear',
    title: {
      es: 'Mochila 30L ergonómica',
      en: '30L Ergonomic Backpack',
    },
    description: {
      es: 'Mochila senderismo 30L con sistema de ventilación dorsal. Ideal para peregrinación.',
      en: 'Hiking backpack with ventilation system, perfect for pilgrimage.',
    },
    amazonQuery: 'mochila 30l ergonomica senderismo ventilacion',
    priceRange: { min: 35, max: 65 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'botas-senderismo-merrell',
    category: 'travel-gear',
    title: {
      es: 'Botas senderismo Merrell',
      en: 'Merrell Hiking Boots',
    },
    description: {
      es: 'Botas de senderismo cómodas y duraderas, con tracción excelente.',
      en: 'Comfortable, durable hiking boots with excellent traction.',
    },
    amazonQuery: 'botas senderismo merrell comodas',
    priceRange: { min: 80, max: 140 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'botas-impermeables-mujer',
    category: 'travel-gear',
    title: {
      es: 'Botas impermeables mujer (Barcelona)',
      en: 'Waterproof Boots for Women',
    },
    description: {
      es: 'Botas impermeables y ligeras, perfectas para lluvia en Barcelona.',
      en: 'Lightweight waterproof boots for rainy weather.',
    },
    amazonQuery: 'botas impermeables mujer ligeras',
    priceRange: { min: 50, max: 90 },
    tags: ['contextual'],
    placement: ['tienda', 'ciudades'],
    context: {
      cities: ['barcelona'],
    },
  },
  {
    id: 'maleta-carryon-samsonite',
    category: 'travel-gear',
    title: {
      es: 'Maleta carry-on Samsonite',
      en: 'Samsonite Carry-On Luggage',
    },
    description: {
      es: 'Maleta de mano resistente, perfecta para viajes de 1 semana.',
      en: 'Durable carry-on luggage suitable for week-long trips.',
    },
    amazonQuery: 'maleta carryon samsonite 55cm resistente',
    priceRange: { min: 70, max: 130 },
    tags: ['essencial'],
    placement: ['tienda', 'como-llegar'],
  },
  {
    id: 'sombrero-panama-plegable',
    category: 'travel-gear',
    title: {
      es: 'Sombrero Panamá plegable',
      en: 'Foldable Panama Hat',
    },
    description: {
      es: 'Sombrero de paja plegable, protección solar. Ideal para Madrid.',
      en: 'Packable straw hat with sun protection.',
    },
    amazonQuery: 'sombrero panama plegable sol',
    priceRange: { min: 15, max: 35 },
    tags: ['contextual', 'essencial'],
    placement: ['tienda', 'que-llevar', 'ciudades'],
    context: {
      cities: ['madrid', 'gran-canaria', 'tenerife'],
      minTemp: 32,
    },
  },
  {
    id: 'paraguas-invertido',
    category: 'travel-gear',
    title: {
      es: 'Paraguas invertido resistente',
      en: 'Inverted Umbrella (wind-resistant)',
    },
    description: {
      es: 'Paraguas de doble capa, resistente al viento. Perfecto para Barcelona.',
      en: 'Double-layer windproof umbrella, ideal for rainy weather.',
    },
    amazonQuery: 'paraguas invertido resistente viento doble capa',
    priceRange: { min: 20, max: 40 },
    tags: ['contextual', 'essencial'],
    placement: ['tienda', 'ciudades'],
    context: {
      cities: ['barcelona'],
    },
  },
  {
    id: 'gafas-uv400-polarizadas',
    category: 'travel-gear',
    title: {
      es: 'Gafas UV400 polarizadas',
      en: 'Polarized UV400 Sunglasses',
    },
    description: {
      es: 'Gafas de sol con protección UV400 y lentes polarizadas. Premium quality.',
      en: 'Polarized sunglasses with UV400 protection. Premium quality.',
    },
    amazonQuery: 'gafas uv400 polarizadas premium',
    priceRange: { min: 25, max: 60 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'ciudades'],
    context: {
      minTemp: 28,
    },
  },
  {
    id: 'cinturon-dinero-viaje',
    category: 'travel-gear',
    title: {
      es: 'Cinturón dinero y documentos',
      en: 'Travel Money and Document Belt',
    },
    description: {
      es: 'Cinturón seguridad con bolsillos internos para dinero, documentos y pasaporte.',
      en: 'Security belt with pockets for money, documents, and passport.',
    },
    amazonQuery: 'cinturon dinero documentos pasaporte viaje seguridad',
    priceRange: { min: 12, max: 22 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'como-llegar'],
  },
]

// ============================================================
// 3. HEALTH & WELLNESS (10 items)
// ============================================================

export const healthWellness: AmazonProduct[] = [
  {
    id: 'bloqueador-solar-spf50',
    category: 'health-safety',
    title: {
      es: 'Bloqueador solar SPF 50+ resistente agua',
      en: 'Sunscreen SPF 50+ Water-Resistant',
    },
    description: {
      es: 'Bloqueador solar de amplio espectro, resistente al agua 80 min. Esencial para junio en España.',
      en: 'Broad-spectrum sunscreen, water-resistant. Essential for June in Spain.',
    },
    amazonQuery: 'bloqueador solar spf 50 resistente agua',
    priceRange: { min: 12, max: 22 },
    tags: ['essencial', 'bestseller'],
    placement: ['tienda', 'que-llevar', 'ciudades', 'programa'],
    context: {
      minTemp: 25,
    },
  },
  {
    id: 'calcetines-merino-antiblister',
    category: 'health-safety',
    title: {
      es: 'Calcetines merino anti-ampollas',
      en: 'Merino Wool Anti-Blister Socks',
    },
    description: {
      es: 'Calcetines de lana merino, previenen ampollas y malos olores. Paquete de 3 pares.',
      en: 'Merino wool socks prevent blisters and odor. Pack of 3 pairs.',
    },
    amazonQuery: 'calcetines merino antiblister 3 pares',
    priceRange: { min: 18, max: 32 },
    tags: ['essencial', 'bestseller'],
    placement: ['tienda', 'que-llevar', 'faq'],
    context: {
      minDuration: 4,
    },
  },
  {
    id: 'ibuprofen-400mg-paquete',
    category: 'health-safety',
    title: {
      es: 'Ibuprofeno 400mg (120 tabletas)',
      en: 'Ibuprofen 400mg (120 tablets)',
    },
    description: {
      es: 'Ibuprofeno 400mg para dolor y fiebre. Paquete económico 120 tabletas.',
      en: 'Ibuprofen 400mg for pain relief. Pack of 120 tablets.',
    },
    amazonQuery: 'ibuprofeno 400mg 120 tabletas',
    priceRange: { min: 8, max: 14 },
    tags: ['essencial', 'oferta'],
    placement: ['tienda', 'que-llevar', 'faq'],
  },
  {
    id: 'vendaje-elastico-tobillo',
    category: 'health-safety',
    title: {
      es: 'Vendaje elástico tobillo (compresión)',
      en: 'Elastic Ankle Support Wrap',
    },
    description: {
      es: 'Vendaje elástico para tobillo con soporte de compresión. Ajustable y reutilizable.',
      en: 'Adjustable elastic ankle support with compression.',
    },
    amazonQuery: 'vendaje elastico tobillo compresion ajustable',
    priceRange: { min: 8, max: 16 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'faq'],
  },
  {
    id: 'parches-ampollas-leukoplast',
    category: 'health-safety',
    title: {
      es: 'Parches ampollas (Leukoplast)',
      en: 'Blister Patches (Leukoplast)',
    },
    description: {
      es: 'Parches preventivos para ampollas, cuidado de pies. Paquete 40 piezas.',
      en: 'Blister prevention patches. Pack of 40 pieces.',
    },
    amazonQuery: 'parches ampollas leukoplast 40',
    priceRange: { min: 6, max: 12 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'faq'],
  },
  {
    id: 'almohada-cervical-memory-foam',
    category: 'comfort-wellness',
    title: {
      es: 'Almohada cervical memory foam',
      en: 'Cervical Memory Foam Pillow',
    },
    description: {
      es: 'Almohada ergonómica para cuello y cabeza, perfecta para viajes y dormir cómodo.',
      en: 'Ergonomic neck pillow for comfortable travel sleep.',
    },
    amazonQuery: 'almohada cervical memory foam viaje',
    priceRange: { min: 15, max: 35 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'como-llegar'],
  },
  {
    id: 'electrolitos-polvo-rehidratacion',
    category: 'health-safety',
    title: {
      es: 'Electrolitos polvo (rehidratación)',
      en: 'Electrolyte Powder (Hydration)',
    },
    description: {
      es: 'Polvo de electrolitos para preparar bebidas de rehidratación. Ideal para eventos al aire libre.',
      en: 'Electrolyte powder for hydration during outdoor activities.',
    },
    amazonQuery: 'electrolitos polvo rehidratacion deporte',
    priceRange: { min: 10, max: 18 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'programa'],
    context: {
      minTemp: 28,
      minDuration: 4,
    },
  },
  {
    id: 'crema-antiinflamatoria-gel',
    category: 'health-safety',
    title: {
      es: 'Crema antiinflamatoria (gel)',
      en: 'Anti-inflammatory Gel Cream',
    },
    description: {
      es: 'Gel antiinflamatorio para dolores musculares y articulares. Absorción rápida.',
      en: 'Fast-absorbing anti-inflammatory gel for muscle and joint pain.',
    },
    amazonQuery: 'crema antiinflamatoria gel muscular',
    priceRange: { min: 8, max: 15 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'linterna-led-frontal',
    category: 'tech-connectivity',
    title: {
      es: 'Linterna frontal LED',
      en: 'LED Headlamp Flashlight',
    },
    description: {
      es: 'Linterna frontal LED con batería recargable. Ideal para vigilia nocturna.',
      en: 'Rechargeable LED headlamp. Perfect for nighttime vigils.',
    },
    amazonQuery: 'linterna frontal led recargable vigilia',
    priceRange: { min: 12, max: 25 },
    tags: ['essencial', 'contextual'],
    placement: ['tienda', 'que-llevar', 'programa'],
    context: {
      eventTypes: ['vigilia'],
    },
  },
  {
    id: 'botella-agua-insulated-1l',
    category: 'health-safety',
    title: {
      es: 'Botella agua insulated 1L',
      en: '1L Insulated Water Bottle',
    },
    description: {
      es: 'Botella de agua térmica que mantiene bebidas frías 24h o calientes 12h.',
      en: 'Insulated water bottle keeps drinks cold for 24h or hot for 12h.',
    },
    amazonQuery: 'botella agua insulated 1 litro termica',
    priceRange: { min: 20, max: 35 },
    tags: ['essencial', 'bestseller'],
    placement: ['tienda', 'que-llevar', 'ciudades', 'programa'],
    context: {
      minTemp: 25,
    },
  },
]

// ============================================================
// 4. TECH & CONNECTIVITY (10 items)
// ============================================================

export const techConnectivity: AmazonProduct[] = [
  {
    id: 'power-bank-20000mah',
    category: 'tech-connectivity',
    title: {
      es: 'Power bank 20000mAh fast-charge',
      en: 'Power Bank 20000mAh Fast Charging',
    },
    description: {
      es: 'Batería externa 20000mAh con carga rápida QC 3.0. Esencial para coordinar durante la visita.',
      en: 'Portable charger with fast charging. Essential for staying connected.',
    },
    amazonQuery: 'power bank 20000mah fast charge qc3',
    priceRange: { min: 20, max: 35 },
    tags: ['essencial', 'bestseller'],
    placement: ['tienda', 'que-llevar', 'como-llegar', 'programa'],
  },
  {
    id: 'cargador-rapido-usb-c-65w',
    category: 'tech-connectivity',
    title: {
      es: 'Cargador rápido USB-C 65W',
      en: 'USB-C Fast Charger 65W',
    },
    description: {
      es: 'Cargador USB-C de pared 65W, carga múltiples dispositivos simultáneamente.',
      en: 'Wall charger supports multiple devices simultaneously.',
    },
    amazonQuery: 'cargador usb-c 65w rapido multiple puertos',
    priceRange: { min: 18, max: 32 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'como-llegar'],
  },
  {
    id: 'cable-usb-c-3pack',
    category: 'tech-connectivity',
    title: {
      es: 'Cables USB-C (pack de 3)',
      en: 'USB-C Cables (Pack of 3)',
    },
    description: {
      es: 'Pack de 3 cables USB-C de diferentes longitudes (1m, 2m, 3m).',
      en: 'Pack of 3 USB-C cables in different lengths.',
    },
    amazonQuery: 'cables usb-c pack 3 longitudes',
    priceRange: { min: 12, max: 22 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'auriculares-bluetooth-anker',
    category: 'tech-connectivity',
    title: {
      es: 'Auriculares Bluetooth Anker',
      en: 'Anker Bluetooth Earbuds',
    },
    description: {
      es: 'Auriculares inalámbricos con cancelación de ruido activa. 8h batería.',
      en: 'Wireless earbuds with active noise cancellation. 8-hour battery.',
    },
    amazonQuery: 'auriculares bluetooth anker cancelacion ruido',
    priceRange: { min: 25, max: 50 },
    tags: ['essencial'],
    placement: ['tienda', 'como-llegar'],
  },
  {
    id: 'adaptador-viaje-universal',
    category: 'tech-connectivity',
    title: {
      es: 'Adaptador universal multi-país',
      en: 'Universal Travel Adapter',
    },
    description: {
      es: 'Adaptador de corriente para todos los países con puertos USB.',
      en: 'Universal plug adapter with USB ports for any country.',
    },
    amazonQuery: 'adaptador universal viaje multipais usb',
    priceRange: { min: 12, max: 22 },
    tags: ['essencial'],
    placement: ['tienda'],
  },
  {
    id: 'tripod-movil-smartphone',
    category: 'tech-connectivity',
    title: {
      es: 'Trípode para smartphone',
      en: 'Smartphone Tripod Stand',
    },
    description: {
      es: 'Trípode plegable y ligero para fotografía y video. Compatible con todos los móviles.',
      en: 'Compact tripod for smartphone photography and video recording.',
    },
    amazonQuery: 'tripode movil smartphone plegable ligero',
    priceRange: { min: 10, max: 20 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'esim-internacional-viaje',
    category: 'tech-connectivity',
    title: {
      es: 'eSIM internacional (datos)',
      en: 'International eSIM (Data)',
    },
    description: {
      es: 'eSIM con datos internacionales. Conectividad sin cambiar SIM física.',
      en: 'Digital SIM for international data connectivity.',
    },
    amazonQuery: 'esim internacional datos españa',
    priceRange: { min: 15, max: 40 },
    tags: ['essencial'],
    placement: ['tienda', 'como-llegar'],
  },
  {
    id: 'cargador-coche-qc3',
    category: 'tech-connectivity',
    title: {
      es: 'Cargador coche QC 3.0 dual',
      en: 'Car Charger QC 3.0 Dual Port',
    },
    description: {
      es: 'Cargador para coche con 2 puertos USB, carga rápida QC 3.0.',
      en: 'Dual-port car charger with fast charging support.',
    },
    amazonQuery: 'cargador coche qc3 dual puerto usb',
    priceRange: { min: 12, max: 22 },
    tags: ['essencial'],
    placement: ['tienda', 'como-llegar', 'cortes-trafico'],
  },
  {
    id: 'speaker-bluetooth-portable',
    category: 'tech-connectivity',
    title: {
      es: 'Speaker Bluetooth portátil',
      en: 'Portable Bluetooth Speaker',
    },
    description: {
      es: 'Altavoz inalámbrico portátil con batería 12h. Sonido estéreo.',
      en: 'Portable wireless speaker with 12-hour battery.',
    },
    amazonQuery: 'speaker bluetooth portable bateria 12h',
    priceRange: { min: 30, max: 65 },
    tags: ['essencial'],
    placement: ['tienda'],
  },
  {
    id: 'gps-tracker-llavero',
    category: 'health-safety',
    title: {
      es: 'GPS tracker (llavero)',
      en: 'GPS Tracker Keychain',
    },
    description: {
      es: 'Rastreador GPS compacto para encontrar teléfono, mochilas o llaves.',
      en: 'Compact GPS tracker to locate phone, bag, or keys.',
    },
    amazonQuery: 'gps tracker llavero airtag localizador',
    priceRange: { min: 15, max: 35 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
]

// ============================================================
// 5. ENERGY & NUTRITION (6 items)
// ============================================================

export const energyNutrition: AmazonProduct[] = [
  {
    id: 'barras-proteina-clif',
    category: 'energy-nutrition',
    title: {
      es: 'Barras proteína (Clif Bar, pack 12)',
      en: 'Protein Bars (Clif Bar, Pack of 12)',
    },
    description: {
      es: 'Barras de proteína energética con ingredientes naturales. Pack de 12 unidades.',
      en: 'Energy protein bars with natural ingredients. Pack of 12.',
    },
    amazonQuery: 'barras proteina clif bar 12 pack',
    priceRange: { min: 18, max: 28 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'programa'],
    context: {
      minDuration: 3,
    },
  },
  {
    id: 'frutos-secos-mix-premium',
    category: 'energy-nutrition',
    title: {
      es: 'Frutos secos mix (almendra, nuez)',
      en: 'Mixed Nuts & Dried Fruits',
    },
    description: {
      es: 'Mix de almendras, nueces, pasas y arándanos. Energía natural.',
      en: 'Mix of almonds, walnuts, raisins and blueberries.',
    },
    amazonQuery: 'frutos secos mix almendra nuez pasas arandanos',
    priceRange: { min: 12, max: 22 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'cafe-instantaneo-premium',
    category: 'energy-nutrition',
    title: {
      es: 'Café instantáneo premium',
      en: 'Premium Instant Coffee',
    },
    description: {
      es: 'Café instantáneo de calidad, sin agregados. Perfecto para vigilia nocturna.',
      en: 'Premium instant coffee with no additives. Perfect for long nights.',
    },
    amazonQuery: 'cafe instantaneo premium puro',
    priceRange: { min: 8, max: 16 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
    context: {
      eventTypes: ['vigilia'],
    },
  },
  {
    id: 'chocolate-energetico-dark',
    category: 'energy-nutrition',
    title: {
      es: 'Chocolate energético (70% cacao)',
      en: 'Energy Dark Chocolate (70% cocoa)',
    },
    description: {
      es: 'Chocolate oscuro 70% cacao con ginseng para energía sostenida.',
      en: 'Dark chocolate with ginseng for sustained energy.',
    },
    amazonQuery: 'chocolate energetico 70 cacao ginseng',
    priceRange: { min: 5, max: 12 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
  {
    id: 'bebida-isotonica-polvo',
    category: 'energy-nutrition',
    title: {
      es: 'Bebida isotónica (polvo)',
      en: 'Isotonic Sports Drink (Powder)',
    },
    description: {
      es: 'Polvo para preparar bebida isotónica con electrolitos y carbohidratos.',
      en: 'Powder for isotonic drink with electrolytes and carbs.',
    },
    amazonQuery: 'bebida isotonica polvo electrolitos',
    priceRange: { min: 8, max: 15 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'programa'],
    context: {
      minTemp: 28,
    },
  },
  {
    id: 'suplemento-vitamina-c',
    category: 'health-safety',
    title: {
      es: 'Vitamina C 1000mg (efervescentes)',
      en: 'Vitamin C 1000mg (Effervescent)',
    },
    description: {
      es: 'Tabletas efervescentes de vitamina C, refuerza inmunidad durante viajes.',
      en: 'Effervescent vitamin C tablets for immune support.',
    },
    amazonQuery: 'vitamina c 1000mg efervescente',
    priceRange: { min: 8, max: 14 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar'],
  },
]

// ============================================================
// Exportar catálogo completo
// ============================================================

// ============================================================
// ESSENTIALS CLIMA (carrusel global de una fila)
// ============================================================

export const climateEssentials: AmazonProduct[] = [
  {
    id: 'ventilador-mano-portatil',
    category: 'comfort-wellness',
    title: {
      es: 'Ventilador de mano portátil',
      en: 'Portable handheld fan',
    },
    description: {
      es: 'Ventilador de mano recargable por USB, 3 velocidades. Imprescindible para las largas esperas al sol.',
      en: 'Rechargeable USB handheld fan, 3 speeds. A must for long waits in the sun.',
    },
    amazonQuery: 'ventilador de mano portatil recargable usb',
    priceRange: { min: 8, max: 20 },
    tags: ['essencial', 'bestseller'],
    placement: ['tienda', 'que-llevar', 'programa', 'como-asistir'],
  },
  {
    id: 'abanico-espanol',
    category: 'accessories',
    title: {
      es: 'Abanico español',
      en: 'Spanish hand fan',
    },
    description: {
      es: 'Abanico tradicional de madera y tela, ligero y plegable. Alivia el calor en misas y vigilias.',
      en: 'Traditional wooden hand fan, light and foldable. Beats the heat at Masses and vigils.',
    },
    amazonQuery: 'abanico español madera tela plegable',
    priceRange: { min: 6, max: 15 },
    tags: ['essencial'],
    placement: ['tienda', 'que-llevar', 'programa', 'como-asistir'],
  },
]

export const amazonProductCatalog: AmazonProduct[] = [
  ...religiousMerchandise,
  ...travelGear,
  ...healthWellness,
  ...techConnectivity,
  ...energyNutrition,
  ...climateEssentials,
]

/**
 * IDs de los productos del carrusel global de "essentials" (clima/calor),
 * en el orden en que deben mostrarse en toda la web.
 */
export const CAROUSEL_ESSENTIAL_IDS = [
  'ventilador-mano-portatil',
  'power-bank-20000mah',
  'sombrero-panama-plegable',
  'gafas-uv400-polarizadas',
  'abanico-espanol',
  'botella-agua-insulated-1l',
] as const

/**
 * Obtener productos por una lista de ids, respetando el orden de la lista.
 */
export function getProductsByIds(ids: readonly string[]): AmazonProduct[] {
  return ids
    .map((id) => amazonProductCatalog.find((p) => p.id === id))
    .filter((p): p is AmazonProduct => Boolean(p))
}

// ============================================================
// Funciones de utilidad
// ============================================================

/**
 * Obtener productos por categoría
 */
export function getProductsByCategory(category: AmazonProduct['category']): AmazonProduct[] {
  return amazonProductCatalog.filter((p) => p.category === category)
}

/**
 * Obtener productos por placement (página)
 */
export function getProductsByPlacement(placement: AmazonProduct['placement'][number]): AmazonProduct[] {
  return amazonProductCatalog.filter((p) => p.placement.includes(placement))
}

/**
 * Obtener productos contextuales (clima, tipo evento, duración)
 */
export function getContextualProducts(params: {
  city?: 'madrid' | 'barcelona' | 'gran-canaria' | 'tenerife'
  eventType?: 'misa' | 'vigilia' | 'procesion' | 'encuentro'
  temperature?: number
  durationHours?: number
  placement: AmazonProduct['placement'][number]
}): AmazonProduct[] {
  return amazonProductCatalog.filter((p) => {
    // Must be in placement
    if (!p.placement.includes(params.placement)) return false

    // If no context, include it
    if (!p.context) return true

    // Check city
    if (params.city && p.context.cities && !p.context.cities.includes(params.city)) return false

    // Check event type
    if (params.eventType && p.context.eventTypes && !p.context.eventTypes.includes(params.eventType))
      return false

    // Check temperature
    if (params.temperature) {
      if (p.context.minTemp && params.temperature < p.context.minTemp) return false
      if (p.context.maxTemp && params.temperature > p.context.maxTemp) return false
    }

    // Check duration
    if (params.durationHours && p.context.minDuration && params.durationHours < p.context.minDuration)
      return false

    return true
  })
}

/**
 * Build Amazon search URL with affiliate tag
 */
export function buildAmazonUrl(amazonQuery: string, locale: Locale = 'es'): string {
  const domain = locale === 'en' ? 'amazon.com' : `amazon.es`
  const searchUrl = `https://${domain}/s?k=${encodeURIComponent(amazonQuery)}&tag=nuus-21`
  return searchUrl
}
