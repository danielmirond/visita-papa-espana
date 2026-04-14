import { NextResponse } from 'next/server'
import { schedule } from '@/data/schedule'
import { cities } from '@/data/cities'

function formatIcsDate(date: string, time: string): string {
  const [year, month, day] = date.split('-')
  const [hour, min] = time.split(':')
  return `${year}${month}${day}T${hour}${min}00`
}

function escapeIcs(text: string): string {
  return text.replace(/[,;\\]/g, (m) => '\\' + m).replace(/\n/g, '\\n')
}

export async function GET() {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Visita Papa España 2026//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Visita Papa León XIV a España',
    'X-WR-TIMEZONE:Europe/Madrid',
  ]

  for (const day of schedule) {
    const city = cities.find((c) => c.slug === day.citySlug)
    for (const event of day.events) {
      const dtStart = formatIcsDate(event.date, event.startTime)
      const endHour = parseInt(event.startTime.split(':')[0]) + 2
      const dtEnd = formatIcsDate(event.date, `${endHour.toString().padStart(2, '0')}:00`)

      // Use Canary timezone for Canary Islands
      const tz = ['gran-canaria', 'tenerife'].includes(event.citySlug)
        ? 'Atlantic/Canary'
        : 'Europe/Madrid'

      lines.push('BEGIN:VEVENT')
      lines.push(`DTSTART;TZID=${tz}:${dtStart}`)
      lines.push(`DTEND;TZID=${tz}:${dtEnd}`)
      lines.push(`SUMMARY:${escapeIcs(event.title)}`)
      lines.push(`DESCRIPTION:${escapeIcs(event.description)}`)
      lines.push(`LOCATION:${escapeIcs(event.location)}${city ? ', ' + city.name : ''}`)
      lines.push(`UID:${event.id}@visitapapa2026.es`)
      lines.push(`CATEGORIES:${event.isPublic ? 'Público' : 'Privado'}`)
      if (event.registrationUrl) {
        lines.push(`URL:${event.registrationUrl}`)
      }
      lines.push('END:VEVENT')
    }
  }

  lines.push('END:VCALENDAR')

  return new NextResponse(lines.join('\r\n'), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="visita-papa-espana-2026.ics"',
    },
  })
}
