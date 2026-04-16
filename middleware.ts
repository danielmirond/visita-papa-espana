import { NextRequest, NextResponse } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'

function getBrowserLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') || ''
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

  // Skip: assets, API, etc.
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
    const response = NextResponse.next()
    // Ayuda a cachés y a Google a saber que la respuesta varía por idioma
    response.headers.set('Vary', 'Accept-Language')
    return response
  }

  // Raíz o ruta sin locale: redirigir al idioma detectado.
  //
  // Nota sobre el status code:
  //   - 307 sería semánticamente correcto si el destino depende del
  //     Accept-Language del cliente (distintos usuarios → distintos destinos).
  //   - 302 con Vary: Accept-Language es la opción preferida por Google Search.
  //   - NO usamos 301/308 (permanente) porque el destino no es fijo: un mismo
  //     usuario con otro idioma del navegador iría a otra URL.
  //
  // Para el redirect .es → .com (dominio completo) SÍ se usa 308 (= 301 SEO)
  // y se configura en Vercel Dashboard → Settings → Domains.
  const detectedLocale = getBrowserLocale(request)
  const target = pathname === '/' ? `/${detectedLocale}` : `/${detectedLocale}${pathname}`
  const redirectUrl = new URL(target, request.url)
  redirectUrl.search = request.nextUrl.search

  const response = NextResponse.redirect(redirectUrl, 302)
  response.headers.set('Vary', 'Accept-Language')
  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|.*\\..*).*)'],
}
