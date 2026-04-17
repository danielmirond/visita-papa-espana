/**
 * Generadores de JSON-LD schema.org.
 *
 * Todos siguen el patrón:
 *   - Input: datos tipados de la app
 *   - Output: objeto plano listo para <script type="application/ld+json">
 *
 * Incluyen siempre:
 *   - @context: https://schema.org
 *   - inLanguage cuando es multilingüe
 *   - sameAs a Wikipedia/Wikidata para reforzar identificación de entidades
 */

import { ENTITIES, cityEntity, detectMentionedEntities } from './entities'
import { siteConfig } from '@/data/siteConfig'
import { type Locale, HTML_LANG } from '@/data/i18n/types'
import type { City } from '@/types/city'
import type { PapalEvent, ScheduleDay } from '@/types/schedule'
import type { NewsArticle } from '@/types/news'
import type { FaqItem } from '@/data/faq'

// -------------------------- Entidades base --------------------------

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: ENTITIES.site.legalName,
    alternateName: ENTITIES.site.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: ENTITIES.site.logo,
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
  }
}

export function popeLeoPersonSchema() {
  const p = ENTITIES.popeLeoXIV
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': p.wikidata,
    name: p.name,
    givenName: 'Robert',
    familyName: 'Prevost',
    additionalName: 'Francis',
    honorificPrefix: p.honorificPrefix,
    birthDate: p.birthDate,
    birthPlace: {
      '@type': 'Place',
      name: p.birthPlace,
    },
    jobTitle: p.jobTitle,
    image: p.image,
    sameAs: [p.wikidata, p.wikipediaEs, p.wikipediaEn],
  }
}

export function webSiteSchema(locale: Locale = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: HTML_LANG[locale],
    publisher: { '@id': `${siteConfig.url}#organization` },
    // SearchAction permite a Google mostrar sitelinks searchbox
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/${locale}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// -------------------------- Breadcrumbs -----------------------------

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }
}

// -------------------------- Event -----------------------------------

/**
 * Detecta el venue entity por nombre de location.
 */
function detectVenue(locationName: string) {
  const lower = locationName.toLowerCase()
  for (const venue of Object.values(ENTITIES.venues)) {
    if (lower.includes(venue.name.toLowerCase())) {
      return venue
    }
  }
  return null
}

export function eventSchema(event: PapalEvent, city: City | undefined, locale: Locale = 'es') {
  const venue = detectVenue(event.location)
  const cityEnt = city ? cityEntity(city.slug) : null

  const location: any = {
    '@type': 'Place',
    name: event.location,
    ...(cityEnt && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityEnt.name,
        addressCountry: 'ES',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: cityEnt.lat,
        longitude: cityEnt.lng,
      },
      containedInPlace: {
        '@type': 'City',
        name: cityEnt.name,
        sameAs: cityEnt.wikidata,
      },
    }),
  }

  if (venue) {
    const v = venue as { wikidata?: string; wikipediaEs?: string }
    location.sameAs = v.wikidata || v.wikipediaEs
  }

  const startDateTime = `${event.date}T${event.startTime}:00${
    ['gran-canaria', 'tenerife'].includes(event.citySlug) ? '+01:00' : '+02:00'
  }`

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${siteConfig.url}/es/programa/#${event.id}`,
    name: event.title,
    description: event.description,
    startDate: startDateTime,
    endDate: startDateTime, // eventos con duración no especificada
    eventAttendanceMode: event.isPublic
      ? 'https://schema.org/OfflineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: event.isConfirmed
      ? 'https://schema.org/EventScheduled'
      : 'https://schema.org/EventPostponed',
    inLanguage: HTML_LANG[locale],
    location,
    performer: { '@id': ENTITIES.popeLeoXIV.wikidata },
    organizer: {
      '@type': 'Organization',
      name: ENTITIES.cee.name,
      url: ENTITIES.cee.url,
      sameAs: ENTITIES.cee.wikidata,
    },
    ...(event.isPublic &&
      event.registrationUrl && {
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: event.registrationUrl,
          validFrom: '2026-04-07',
        },
      }),
    isAccessibleForFree: event.isPublic,
    superEvent: {
      '@type': 'Event',
      name: 'Visita apostólica del Papa León XIV a España',
      startDate: '2026-06-06',
      endDate: '2026-06-12',
    },
  }
}

/**
 * Evento principal de toda la visita (super-event).
 */
export function visitMainEventSchema(locale: Locale = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${siteConfig.url}#visit-event`,
    name: 'Visita apostólica del Papa León XIV a España',
    alternateName: 'Viaje apostólico León XIV España 2026',
    description: siteConfig.description,
    startDate: '2026-06-06',
    endDate: '2026-06-12',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    inLanguage: HTML_LANG[locale],
    location: Object.values(ENTITIES.cities).map((c) => ({
      '@type': 'City',
      name: c.name,
      sameAs: c.wikidata,
    })),
    performer: { '@id': ENTITIES.popeLeoXIV.wikidata },
    organizer: {
      '@type': 'Organization',
      name: ENTITIES.cee.name,
      url: ENTITIES.cee.url,
      sameAs: ENTITIES.cee.wikidata,
    },
    isAccessibleForFree: true,
    image: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`,
  }
}

// -------------------------- Place -----------------------------------

export function citySchema(city: City, locale: Locale = 'es') {
  const cityEnt = cityEntity(city.slug)
  if (!cityEnt) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'City',
    '@id': cityEnt.wikidata,
    name: city.name,
    alternateName: cityEnt.name,
    description: city.description,
    inLanguage: HTML_LANG[locale],
    image: `${siteConfig.url}${city.heroImage}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    },
    containedInPlace: {
      '@type': 'Country',
      name: ENTITIES.spain.name,
      sameAs: ENTITIES.spain.wikidata,
    },
    sameAs: [cityEnt.wikidata, cityEnt.wikipediaEs],
  }
}

// -------------------------- NewsArticle -----------------------------

export function newsArticleSchema(article: NewsArticle, locale: Locale = 'es') {
  const mentions = detectMentionedEntities(article.content)

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${siteConfig.url}/${locale}/noticias/${article.slug}`,
    headline: article.title,
    description: article.excerpt,
    articleBody: article.content,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: HTML_LANG[locale],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/${locale}/noticias/${article.slug}`,
    },
    author: article.source
      ? { '@type': 'Organization', name: article.source, ...(article.sourceUrl && { url: article.sourceUrl }) }
      : { '@id': `${siteConfig.url}#organization` },
    publisher: { '@id': `${siteConfig.url}#organization` },
    image: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`,
    about: { '@id': `${siteConfig.url}#visit-event` },
    ...(mentions.length > 0 && {
      mentions: mentions.map((m) => ({
        '@type': 'Thing',
        name: m.name,
        sameAs: m.sameAs,
      })),
    }),
    isAccessibleForFree: true,
  }
}

// -------------------------- FAQPage ---------------------------------

export function faqPageSchema(faqs: FaqItem[], locale: Locale = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: HTML_LANG[locale],
    // SpeakableSpecification: optimiza para búsqueda por voz (Google Assistant)
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['details summary', 'details p'],
    },
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

// -------------------------- HowTo -----------------------------------

export function howToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>,
  locale: Locale = 'es'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: HTML_LANG[locale],
    totalTime: 'PT5M',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

// -------------------------- ItemList (Programa) ---------------------

export function programmeItemListSchema(
  schedule: ScheduleDay[],
  locale: Locale = 'es'
) {
  const allEvents: PapalEvent[] = schedule.flatMap((d) => d.events)
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Programa de la visita apostólica',
    inLanguage: HTML_LANG[locale],
    numberOfItems: allEvents.length,
    itemListElement: allEvents.map((ev, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: ev.title,
      url: `${siteConfig.url}/${locale}/programa#${ev.id}`,
    })),
  }
}
