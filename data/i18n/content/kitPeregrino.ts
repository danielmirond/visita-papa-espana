/**
 * Traducción EN del kit del peregrino (16 productos + 7 categorías).
 */

import type { Locale } from '@/data/i18n/types'
import {
  kitPeregrino,
  KIT_CATEGORIES,
  type KitItem,
  type KitCategory,
} from '@/data/kitPeregrino'

type KitItemTranslation = { title: string; description: string }

// Orden exacto de data/kitPeregrino.ts (16 items)
const KIT_EN: KitItemTranslation[] = [
  { title: 'Lightweight foldable backpack', description: 'Foldable 20-25L backpack to carry water, food and raincoat. Mandatory if you spend several hours in the venue.' },
  { title: 'Cap or brimmed hat', description: 'Essential. June in Madrid and the Canaries exceeds 30°C. Better a 360° brim than a simple frontal cap.' },
  { title: 'Folding chair / camping stool', description: 'Saturday vigil means 4-5 hours of waiting. A folding stool with strap makes the difference between enjoying and suffering.' },
  { title: '750 ml insulated water bottle', description: 'Fresh water for 12 hours. Can be refilled at water points inside the venue. Better than single-use plastic bottles.' },
  { title: 'SPF 50+ sunscreen', description: 'Stick or cream. Midday UVA in the Canaries is extreme radiation. Reapply every 2 hours. Essential for children.' },
  { title: 'UV400 sunglasses', description: 'Cheap shop ones don\'t cut it. Look for UV400 or CE category 3 label. Real long-term protection against cataracts.' },
  { title: 'Sturdy foldable fan', description: 'Practical when there\'s no air flow in the venue. Quality wooden ones last years; plastic ones break day one.' },
  { title: 'Power bank 10,000-20,000 mAh', description: 'With so many photos, videos and Maps usage, your phone won\'t last. 10,000 mAh charges a modern phone twice.' },
  { title: 'USB cable 2-in-1 (Lightning + USB-C)', description: 'To share battery with anyone. Braided cables last much longer than flat ones.' },
  { title: 'Olive wood rosary', description: 'Handcrafted rosaries from the Holy Land in olive wood are the most used. Light, quiet, resistant.' },
  { title: 'Missal with daily readings', description: 'Follow the liturgy in your language without Wi-Fi. The Roman Missal or basic Latin Church Missal.' },
  { title: 'Foldable emergency raincoat', description: 'June in Madrid can drop a dry storm in 15 minutes. Hooded raincoat, not a "disposable poncho".' },
  { title: 'Mini first-aid kit + plasters', description: 'Shoe blisters, allergies, headache. Most used: plasters, paracetamol, antihistamine.' },
  { title: 'Hidden anti-theft money belt', description: 'Crowds = pickpockets. Money belt under the t-shirt for passport, cards and cash. Not optional.' },
  { title: 'Energy bars / nuts', description: 'Queues for food at a mass event are 40 minutes. Bringing your own prevents fainting.' },
  { title: 'Gel insoles for walking', description: 'You\'ll walk 6-10 km each day. Gel insoles inside your sneakers change the experience.' },
]

const KIT_CATEGORIES_EN: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Essentials', icon: '🎒' },
  { id: 'hidratacion', label: 'Hydration', icon: '💧' },
  { id: 'proteccion-sol', label: 'Sun protection', icon: '☀️' },
  { id: 'energia', label: 'Energy and battery', icon: '🔋' },
  { id: 'comodidad', label: 'Comfort', icon: '🪑' },
  { id: 'religioso', label: 'Religious items', icon: '✝️' },
  { id: 'seguridad', label: 'Safety', icon: '🛡️' },
]

export function getKitPeregrino(locale: Locale): KitItem[] {
  if (locale !== 'en') return kitPeregrino
  return kitPeregrino.map((it, i) => {
    const tr = KIT_EN[i]
    if (!tr) return it
    return { ...it, title: tr.title, description: tr.description }
  })
}

export function getKitCategories(locale: Locale) {
  if (locale === 'en') return KIT_CATEGORIES_EN
  return KIT_CATEGORIES
}

export { kitPeregrino, KIT_CATEGORIES }
export type { KitItem, KitCategory }
