import { NextRequest, NextResponse } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'

function getBrowserLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') || ''
  // Parse: "es-ES,es;q=0.9,en;q=0.8" → ['es', 'en']
  const parts = acceptLanguage
    .split(',')
    .map((p) => p.trim().split(';')[0].toLowerCase().slice(0, 2))
  for (const lang of parts) {
    if (LOCALES.includes(lang as Locale)) return lang as Locale
  }
  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip: assets, API, etc
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/sitemap-0.xml' ||
    pathname === '/favicon.ico' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Si ya tiene locale, continuar
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocale) {
    return NextResponse.next()
  }

  // Raíz o ruta sin locale: redirigir al idioma detectado
  const detectedLocale = getBrowserLocale(request)
  const redirectUrl = new URL(
    pathname === '/' ? `/${detectedLocale}` : `/${detectedLocale}${pathname}`,
    request.url
  )
  // Preservar query string
  redirectUrl.search = request.nextUrl.search

  return NextResponse.redirect(redirectUrl, 307)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|.*\\..*).*)'],
}
