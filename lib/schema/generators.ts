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
    alternateName: ['Pope Leo XIV', 'Papa Leone XIV', 'Papst Leo XIV', 'Robert Francis Prevost'],
    givenName: 'Robert',
    familyName: 'Prevost',
    additionalName: 'Francis',
    honorificPrefix: p.honorificPrefix,
    birthDate: p.birthDate,
    birthPlace: {
      '@type': 'Place',
      name: 'Chicago, Illinois, Estados Unidos',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        addressCountry: 'US',
      },
    },
    nationality: [
      { '@type': 'Country', name: 'Estados Unidos', sameAs: 'https://www.wikidata.org/wiki/Q30' },
      { '@type': 'Country', name: 'Perú', sameAs: 'https://www.wikidata.org/wiki/Q419' },
    ],
    height: {
      '@type': 'QuantitativeValue',
      value: 180,
      unitCode: 'CMT', // UN/CEFACT for centimetres
    },
    knowsLanguage: ['es', 'en', 'it', 'fr', 'pt', 'la', 'qu'],
    jobTitle: p.jobTitle,
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Obispo de Roma, Sucesor de Pedro, Sumo Pontífice de la Iglesia católica',
    },
    worksFor: {
      '@type': 'Organization',
      '@id': p.worksFor,
      name: 'Santa Sede',
      url: 'https://www.vatican.va',
    },
    affiliation: {
      '@type': 'Organization',
      name: 'Orden de San Agustín',
      alternateName: 'Augustinian Order',
      url: 'https://www.osanet.org',
      sameAs: 'https://www.wikidata.org/wiki/Q285762',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Villanova University',
        sameAs: 'https://www.wikidata.org/wiki/Q1629544',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Catholic Theological Union',
        sameAs: 'https://www.wikidata.org/wiki/Q1052181',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Pontificia Universidad Santo Tomás de Aquino (Angelicum)',
        sameAs: 'https://www.wikidata.org/wiki/Q1133066',
      },
    ],
    parent: [
      {
        '@type': 'Person',
        name: 'Louis Marius Prevost',
        gender: 'Male',
      },
      {
        '@type': 'Person',
        name: 'Mildred Martínez',
        gender: 'Female',
      },
    ],
    sibling: [
      { '@type': 'Person', name: 'Louis Prevost', gender: 'Male' },
      { '@type': 'Person', name: 'John Prevost', gender: 'Male' },
    ],
    award: [
      'Cardenal (2023)',
      'Elegido 267.º Papa de la Iglesia católica (8 mayo 2025)',
    ],
    image: {
      '@type': 'ImageObject',
      url: p.image,
      contentUrl: p.image,
      width: 1024,
      height: 1024,
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      creditText: 'Vatican Media / Wikimedia Commons',
    },
    url: 'https://www.vatican.va/content/leo-xiv/es.html',
    sameAs: [
      p.wikidata,
      p.wikipediaEs,
      p.wikipediaEn,
      'https://it.wikipedia.org/wiki/Papa_Leone_XIV',
      'https://de.wikipedia.org/wiki/Leo_XIV.',
      'https://fr.wikipedia.org/wiki/L%C3%A9on_XIV',
      'https://pt.wikipedia.org/wiki/Papa_Le%C3%A3o_XIV',
      'https://ca.wikipedia.org/wiki/Lle%C3%B3_XIV',
      'https://www.vatican.va/content/leo-xiv/es.html',
      'https://twitter.com/Pontifex',
      'https://www.instagram.com/franciscus',
    ],
    description:
      'Robert Francis Prevost (Chicago, 14 sept. 1955), conocido como León XIV, es el 267.º Papa de la Iglesia católica, elegido el 8 de mayo de 2025. Religioso agustino, fue misionero y obispo en Perú durante más de tres décadas, prior general de la Orden de San Agustín y prefecto del Dicasterio para los Obispos.',
  }
}

export function webSiteSchema(locale: Locale = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: 'Papa en España · Guía independiente',
    description: siteConfig.description,
    disambiguatingDescription:
      'Sitio informativo independiente. No tiene vinculación oficial con la Santa Sede, con la Conferencia Episcopal Española ni con ninguna diócesis u organización del viaje apostólico del Papa León XIV a España.',
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

/**
 * Global @graph: consolida Organization + WebSite + Person en un único
 * bloque JSON-LD. Reduce ~10 KB en cada HTML respecto a emitirlos por
 * separado, y Google los procesa igual (los engines soportan @graph
 * desde 2019 en schema.org).
 *
 * Uso recomendado: sustituir las 3 llamadas <JsonLd data={...}/> en
 * app/layout.tsx por una sola <JsonLd data={globalGraphSchema(locale)}/>.
 */
export function globalGraphSchema(locale: Locale = 'es') {
  // Construir cada entidad sin el @context individual (se centraliza arriba)
  const org = organizationSchema()
  const web = webSiteSchema(locale)
  const person = popeLeoPersonSchema()
  // Limpiar @context anidados para que solo haya uno al principio
  const stripContext = ({ ['@context']: _ctx, ...rest }: any) => rest
  return {
    '@context': 'https://schema.org',
    '@graph': [stripContext(org), stripContext(web), stripContext(person)],
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
