const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

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
