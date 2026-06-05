const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

/**
 * Recorta un texto a `max` caracteres por límite de palabra y añade «…».
 * Pensado para meta descriptions (objetivo ≤160) sin cortes feos.
 */
export function clampText(text: string, max = 160): string {
  if (!text) return text
  const t = text.trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  const base = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut
  return base.replace(/[.,;:\s]+$/, '') + '…'
}

export function formatDateLong(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  return `${DAYS[date.getDay()]} ${date.getDate()} de ${MONTHS[date.getMonth()]} de ${date.getFullYear()}`
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  return `${date.getDate()} de ${MONTHS[date.getMonth()]}`
}

export function slugToDate(slug: string): string | null {
  const match = slug.match(/^(\d{1,2})-junio$/)
  if (!match) return null
  const day = parseInt(match[1], 10)
  if (day < 6 || day > 12) return null
  return `2026-06-${day.toString().padStart(2, '0')}`
}

export function dateToSlug(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  return `${date.getDate()}-junio`
}
