import { NextRequest, NextResponse } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, Locale } from '@/data/i18n/types'

function getBrowserLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const parts = acceptLanguage.split(',').map((p) => p.trim().split(';')[0].slice(0, 2).toLowerCase())
  for (const lang of parts) {
    if (LOCALES.includes(lang as Locale)) return lang as Locale
  }
  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // No interferir con API, next internals, static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Comprobar si ya tiene locale en la URL
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (hasLocale) {
    return NextResponse.next()
  }

  // Para la raíz y cualquier otra ruta sin locale, detectar navegador
  // y no hacer redirect (mantenemos español como default sin prefijo)
  // Solo si hay preferencia distinta de español, proponemos otro
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|.*\\..*).*)'],
}
