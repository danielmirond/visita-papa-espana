/**
 * Kit del peregrino: productos recomendados para asistir a actos multitudinarios
 * al aire libre (vigilia, misas masivas, procesiones). Enlaces Amazon con tag
 * de afiliado — se reemplaza TUAFFILIATEID en producción por el tag real.
 *
 * Las URLs son búsquedas genéricas (no ASIN fijo) para evitar productos
 * descatalogados; Amazon paga comisión igualmente por la sesión.
 */

const AMZN_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || 'TUAFFILIATEID-21'

function amzSearch(query: string): string {
  const q = encodeURIComponent(query)
  return `https://www.amazon.es/s?k=${q}&tag=${AMZN_TAG}`
}

export type KitCategory =
  | 'esenciales'
  | 'hidratacion'
  | 'proteccion-sol'
  | 'comodidad'
  | 'energia'
  | 'religioso'
  | 'seguridad'

export interface KitItem {
  id: string
  category: KitCategory
  title: string
  description: string
  priceRange: string // ej: "15-25 €"
  priority: 'imprescindible' | 'recomendado' | 'opcional'
  amazonQuery: string
  url: string
}

const items: Omit<KitItem, 'url'>[] = [
  // ESENCIALES
  {
    id: 'mochila',
    category: 'esenciales',
    title: 'Mochila ligera plegable',
    description: 'Mochila plegable 20-25L para llevar agua, comida y chubasquero. Obligatoria si pasas varias horas en el recinto.',
    priceRange: '12-20 €',
    priority: 'imprescindible',
    amazonQuery: 'mochila plegable ligera senderismo',
  },
  {
    id: 'gorra',
    category: 'esenciales',
    title: 'Gorra o sombrero con ala',
    description: 'Imprescindible. Junio en Madrid y Canarias supera los 30°C. Mejor con ala de 360° que simple gorra frontal.',
    priceRange: '8-15 €',
    priority: 'imprescindible',
    amazonQuery: 'gorra sol ala ancha unisex',
  },
  {
    id: 'silla-plegable',
    category: 'comodidad',
    title: 'Silla plegable / taburete de camping',
    description: 'La vigilia del sábado son 4-5 horas de espera. Un taburete plegable con correa marca la diferencia entre disfrutar y sufrir.',
    priceRange: '15-30 €',
    priority: 'recomendado',
    amazonQuery: 'taburete plegable camping ligero',
  },
  {
    id: 'cantimplora',
    category: 'hidratacion',
    title: 'Cantimplora aislante 750 ml',
    description: 'Agua fresca 12 horas. Se pueden rellenar en los puestos de agua del recinto. Mejor que botella de plástico de un solo uso.',
    priceRange: '15-25 €',
    priority: 'imprescindible',
    amazonQuery: 'botella agua termica acero inoxidable 750ml',
  },
  // PROTECCIÓN SOL
  {
    id: 'protector-solar',
    category: 'proteccion-sol',
    title: 'Protector solar SPF 50+',
    description: 'Stick o crema. La UVA del mediodía en Canarias es radiación extrema. Aplicar cada 2 horas. Imprescindible para niños.',
    priceRange: '10-18 €',
    priority: 'imprescindible',
    amazonQuery: 'protector solar spf 50 rostro cuerpo',
  },
  {
    id: 'gafas-sol',
    category: 'proteccion-sol',
    title: 'Gafas de sol con protección UV400',
    description: 'No valen las del chino. Buscar etiqueta UV400 o CE category 3. Protección real contra cataratas a largo plazo.',
    priceRange: '15-35 €',
    priority: 'recomendado',
    amazonQuery: 'gafas de sol uv400 polarizadas unisex',
  },
  {
    id: 'abanico',
    category: 'proteccion-sol',
    title: 'Abanico plegable resistente',
    description: 'Práctico cuando no corre aire en el recinto. Los de madera de calidad duran años; los de plástico se rompen el primer día.',
    priceRange: '8-15 €',
    priority: 'recomendado',
    amazonQuery: 'abanico español madera plegable',
  },
  // ENERGÍA
  {
    id: 'bateria-externa',
    category: 'energia',
    title: 'Batería externa 10.000-20.000 mAh',
    description: 'Con tantas fotos, vídeos y uso de Maps, el móvil no llega. 10.000 mAh cargan dos veces un móvil moderno.',
    priceRange: '20-40 €',
    priority: 'imprescindible',
    amazonQuery: 'powerbank 20000mah carga rapida usb c',
  },
  {
    id: 'cable-usb',
    category: 'energia',
    title: 'Cable USB 2 en 1 (Lightning + USB-C)',
    description: 'Para compartir batería con quien sea. Los cables trenzados duran mucho más que los planos.',
    priceRange: '8-15 €',
    priority: 'recomendado',
    amazonQuery: 'cable usb c lightning 2 en 1 trenzado',
  },
  // RELIGIOSO
  {
    id: 'rosario',
    category: 'religioso',
    title: 'Rosario de madera de olivo',
    description: 'Los rosarios artesanales de Tierra Santa en olivo son los más usados. Ligeros, silenciosos, resistentes.',
    priceRange: '10-25 €',
    priority: 'opcional',
    amazonQuery: 'rosario madera olivo tierra santa',
  },
  {
    id: 'biblia-liturgia',
    category: 'religioso',
    title: 'Misal con lecturas del día',
    description: 'Seguir la liturgia en tu idioma sin depender de Wi-Fi. El Misal de la Iglesia Latina o el Misal Romano básico.',
    priceRange: '15-30 €',
    priority: 'opcional',
    amazonQuery: 'misal romano liturgia diaria',
  },
  // SEGURIDAD
  {
    id: 'chubasquero',
    category: 'seguridad',
    title: 'Chubasquero plegable de emergencia',
    description: 'Junio en Madrid puede soltar una tormenta seca en 15 minutos. Que sea con capucha y no “poncho desechable”.',
    priceRange: '10-25 €',
    priority: 'recomendado',
    amazonQuery: 'chubasquero impermeable plegable ligero',
  },
  {
    id: 'botiquin',
    category: 'seguridad',
    title: 'Mini botiquín + tiritas',
    description: 'Ampollas de zapato, alergias, dolor de cabeza. Lo más usado: tiritas, paracetamol, antihistamínico.',
    priceRange: '8-15 €',
    priority: 'recomendado',
    amazonQuery: 'botiquin primeros auxilios portatil',
  },
  {
    id: 'riñonera-seguridad',
    category: 'seguridad',
    title: 'Riñonera antirrobo oculta',
    description: 'Aglomeraciones = carteristas. Riñonera bajo la camiseta para pasaporte, tarjetas y dinero. No prescindible.',
    priceRange: '10-20 €',
    priority: 'recomendado',
    amazonQuery: 'riñonera oculta pasaporte antirrobo viaje',
  },
  // ENERGÍA / COMODIDAD
  {
    id: 'barritas',
    category: 'energia',
    title: 'Barritas energéticas / frutos secos',
    description: 'Las colas para comer en un macroevento son de 40 minutos. Llevar algo propio evita desfallecer.',
    priceRange: '10-15 €',
    priority: 'recomendado',
    amazonQuery: 'barritas energeticas pack frutos secos',
  },
  {
    id: 'calzado',
    category: 'comodidad',
    title: 'Plantillas de gel para caminar mucho',
    description: 'Pasarás entre 6 y 10 km andando cada día. Unas plantillas de gel dentro de tus zapatillas cambian la experiencia.',
    priceRange: '12-20 €',
    priority: 'recomendado',
    amazonQuery: 'plantillas gel absorcion impacto',
  },
]

export const kitPeregrino: KitItem[] = items.map((it) => ({
  ...it,
  url: amzSearch(it.amazonQuery),
}))

export const KIT_CATEGORIES: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Esenciales', icon: '🎒' },
  { id: 'hidratacion', label: 'Hidratación', icon: '💧' },
  { id: 'proteccion-sol', label: 'Protección solar', icon: '☀️' },
  { id: 'energia', label: 'Energía y batería', icon: '🔋' },
  { id: 'comodidad', label: 'Comodidad', icon: '🪑' },
  { id: 'religioso', label: 'Artículos religiosos', icon: '✝️' },
  { id: 'seguridad', label: 'Seguridad', icon: '🛡️' },
]
