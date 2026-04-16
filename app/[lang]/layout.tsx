import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, HTML_LANG, type Locale } from '@/data/i18n/types'
import { getDictionary } from '@/data/i18n/dictionaries'
import { siteConfig } from '@/data/siteConfig'

export async function generateStaticParams() {
  return LOCALES.filter((l) => l !== 'es').map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = params.lang as Locale
  if (!LOCALES.includes(lang) || lang === 'es') return {}
  const dict = getDictionary(lang)
  return {
    title: `${dict.home.heroTitle} ${dict.home.heroCountry}`,
    alternates: {
      canonical: `${siteConfig.url}/${lang}`,
      languages: {
        'es-ES': siteConfig.url,
        'en-GB': `${siteConfig.url}/en`,
        'it-IT': `${siteConfig.url}/it`,
        'fr-FR': `${siteConfig.url}/fr`,
        'de-DE': `${siteConfig.url}/de`,
        'pt-PT': `${siteConfig.url}/pt`,
        'x-default': siteConfig.url,
      },
    },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang as Locale
  if (!LOCALES.includes(lang) || lang === 'es') notFound()
  // Ojo: el <html lang> se define en el root layout. Aquí no podemos
  // cambiarlo. Lo tratamos en un wrapper superior si se necesita.
  return <>{children}</>
}
