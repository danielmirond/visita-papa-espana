/**
 * Entidades canónicas del sitio con enlaces a Wikipedia y Wikidata.
 *
 * Estas referencias se usan en los schemas JSON-LD (propiedad `sameAs`)
 * para conectar nuestro contenido con el Knowledge Graph de Google.
 *
 * Referencia: https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
 */

import { siteConfig } from '@/data/siteConfig'

export const ENTITIES = {
  // Papa León XIV (Robert Francis Prevost)
  popeLeoXIV: {
    name: 'León XIV',
    fullName: 'Robert Francis Prevost',
    honorificPrefix: 'Papa',
    birthDate: '1955-09-14',
    birthPlace: 'Chicago, Estados Unidos',
    wikidata: 'https://www.wikidata.org/wiki/Q6109517',
    wikipediaEs: 'https://es.wikipedia.org/wiki/Le%C3%B3n_XIV',
    wikipediaEn: 'https://en.wikipedia.org/wiki/Pope_Leo_XIV',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pope_Leo_XIV_1.png',
    jobTitle: 'Papa',
    worksFor: 'https://www.wikidata.org/wiki/Q237', // Santa Sede
  },

  // Vaticano / Santa Sede
  holySee: {
    name: 'Santa Sede',
    wikidata: 'https://www.wikidata.org/wiki/Q159583',
    wikipediaEs: 'https://es.wikipedia.org/wiki/Santa_Sede',
    sameAs: ['https://www.vatican.va', 'https://www.vaticannews.va'],
  },

  // Conferencia Episcopal Española
  cee: {
    name: 'Conferencia Episcopal Española',
    url: 'https://www.conferenciaepiscopal.es',
    wikidata: 'https://www.wikidata.org/wiki/Q2039089',
    wikipediaEs: 'https://es.wikipedia.org/wiki/Conferencia_Episcopal_Espa%C3%B1ola',
  },

  // España
  spain: {
    name: 'España',
    wikidata: 'https://www.wikidata.org/wiki/Q29',
    wikipediaEs: 'https://es.wikipedia.org/wiki/Espa%C3%B1a',
    addressCountry: 'ES',
  },

  // Ciudades
  cities: {
    madrid: {
      name: 'Madrid',
      wikidata: 'https://www.wikidata.org/wiki/Q2807',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Madrid',
      lat: 40.4168,
      lng: -3.7038,
      population: 3305408,
    },
    barcelona: {
      name: 'Barcelona',
      wikidata: 'https://www.wikidata.org/wiki/Q1492',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Barcelona',
      lat: 41.3874,
      lng: 2.1686,
      population: 1636193,
    },
    'gran-canaria': {
      name: 'Gran Canaria',
      wikidata: 'https://www.wikidata.org/wiki/Q16574',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Gran_Canaria',
      lat: 28.1235,
      lng: -15.4363,
      population: 853262,
    },
    tenerife: {
      name: 'Tenerife',
      wikidata: 'https://www.wikidata.org/wiki/Q39153',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Tenerife',
      lat: 28.4636,
      lng: -16.2518,
      population: 928604,
    },
  },

  // Lugares destacados (venues de actos)
  venues: {
    plazaLima: {
      name: 'Plaza de Lima',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Plaza_de_Lima_(Madrid)',
      city: 'madrid',
    },
    plazaCibeles: {
      name: 'Plaza de Cibeles',
      wikidata: 'https://www.wikidata.org/wiki/Q3030655',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Plaza_de_Cibeles',
      city: 'madrid',
    },
    sagradaFamilia: {
      name: 'Basílica de la Sagrada Familia',
      wikidata: 'https://www.wikidata.org/wiki/Q159182',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Templo_Expiatorio_de_la_Sagrada_Familia',
      city: 'barcelona',
    },
    bernabeu: {
      name: 'Estadio Santiago Bernabéu',
      wikidata: 'https://www.wikidata.org/wiki/Q167809',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Estadio_Santiago_Bernab%C3%A9u',
      city: 'madrid',
    },
    almudena: {
      name: 'Catedral de la Almudena',
      wikidata: 'https://www.wikidata.org/wiki/Q158117',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Catedral_de_la_Almudena',
      city: 'madrid',
    },
    zarzuela: {
      name: 'Palacio de la Zarzuela',
      wikidata: 'https://www.wikidata.org/wiki/Q752033',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Palacio_de_la_Zarzuela',
      city: 'madrid',
    },
    montjuic: {
      name: 'Montjuïc',
      wikidata: 'https://www.wikidata.org/wiki/Q180402',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Montju%C3%AFc',
      city: 'barcelona',
    },
    montserrat: {
      name: 'Monasterio de Montserrat',
      wikidata: 'https://www.wikidata.org/wiki/Q214805',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Abad%C3%ADa_de_Santa_Mar%C3%ADa_de_Montserrat',
      city: 'barcelona',
    },
    arguineguin: {
      name: 'Arguineguín',
      wikidata: 'https://www.wikidata.org/wiki/Q685527',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Arguineguín',
      city: 'gran-canaria',
    },
    movistarArena: {
      name: 'Movistar Arena Madrid',
      wikidata: 'https://www.wikidata.org/wiki/Q3499562',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Movistar_Arena_(Madrid)',
      city: 'madrid',
    },
  },

  // Personas relacionadas
  people: {
    gaudi: {
      name: 'Antoni Gaudí',
      wikidata: 'https://www.wikidata.org/wiki/Q1609',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Antoni_Gaud%C3%AD',
    },
    felipeVI: {
      name: 'Felipe VI de España',
      wikidata: 'https://www.wikidata.org/wiki/Q191045',
      wikipediaEs: 'https://es.wikipedia.org/wiki/Felipe_VI_de_Espa%C3%B1a',
    },
  },

  // El sitio como organización/marca
  site: {
    name: siteConfig.shortName,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
  },
}

/**
 * Mapea un slug de ciudad a la entidad correspondiente.
 */
export function cityEntity(slug: string) {
  return ENTITIES.cities[slug as keyof typeof ENTITIES.cities]
}

/**
 * Detecta entidades mencionadas en un texto para poder usarlas
 * como propiedad `mentions` en NewsArticle/Article schemas.
 */
export function detectMentionedEntities(text: string): Array<{ name: string; sameAs: string }> {
  const mentions: Array<{ name: string; sameAs: string }> = []
  const textLower = text.toLowerCase()

  // Ciudades
  for (const [slug, city] of Object.entries(ENTITIES.cities)) {
    if (textLower.includes(city.name.toLowerCase())) {
      mentions.push({ name: city.name, sameAs: city.wikidata })
    }
  }

  // Venues
  for (const [key, venue] of Object.entries(ENTITIES.venues)) {
    if (textLower.includes(venue.name.toLowerCase())) {
      const v = venue as { name: string; wikidata?: string; wikipediaEs?: string }
      mentions.push({ name: venue.name, sameAs: v.wikidata || v.wikipediaEs || '' })
    }
  }

  // Personas
  if (textLower.includes('león xiv') || textLower.includes('leon xiv')) {
    mentions.push({ name: ENTITIES.popeLeoXIV.name, sameAs: ENTITIES.popeLeoXIV.wikidata })
  }
  if (textLower.includes('gaudí') || textLower.includes('gaudi')) {
    mentions.push({ name: ENTITIES.people.gaudi.name, sameAs: ENTITIES.people.gaudi.wikidata })
  }

  // Deduplicar
  const seen = new Set<string>()
  return mentions.filter((m) => {
    if (seen.has(m.sameAs)) return false
    seen.add(m.sameAs)
    return true
  })
}
