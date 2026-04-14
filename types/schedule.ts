export type EventType = 'misa' | 'vigilia' | 'encuentro' | 'inauguracion' | 'traslado' | 'llegada' | 'despedida' | 'acto-publico'

export interface PapalEvent {
  id: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  startTime: string // HH:mm
  endTime?: string
  citySlug: string
  location: string
  eventType: EventType
  isPublic: boolean
  isConfirmed: boolean
  registrationUrl?: string
}

export interface ScheduleDay {
  date: string // YYYY-MM-DD
  citySlug: string
  label: string // "Sabado 6 de junio"
  events: PapalEvent[]
}
