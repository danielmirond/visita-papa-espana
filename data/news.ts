import { NewsArticle } from '@/types/news'

export const news: NewsArticle[] = [
  {
    slug: 'confirmada-visita-papa-leon-xiv-espana',
    title: 'Confirmada la visita del Papa León XIV a España del 6 al 12 de junio',
    excerpt: 'La Santa Sede confirma oficialmente el viaje apostólico del Papa León XIV a España, con paradas en Madrid, Barcelona, Gran Canaria y Tenerife.',
    content: 'El Vaticano ha confirmado oficialmente que el Papa León XIV visitará España del 6 al 12 de junio de 2026. El viaje apostólico incluirá paradas en Madrid, Barcelona, Gran Canaria y Tenerife. Es la primera visita de un Papa a España desde la de Benedicto XVI en 2011 y la primera visita papal a las Islas Canarias. El viaje se presenta bajo el lema "Alzad la mirada" (Juan 4,35).',
    date: '2026-02-25',
    source: 'Oficina de Prensa de la Santa Sede',
    relatedCities: ['madrid', 'barcelona', 'gran-canaria', 'tenerife'],
  },
  {
    slug: 'registro-actos-madrid-abierto',
    title: 'Abierto el registro para asistir a los actos en Madrid',
    excerpt: 'Desde el 7 de abril se puede tramitar la inscripción para participar en los actos papales de Madrid a través de madrid.conelpapa.es.',
    content: 'La Archidiócesis de Madrid ha abierto el proceso de inscripción para los actos públicos de la visita papal. Los interesados pueden registrarse en madrid.conelpapa.es. Los actos son gratuitos pero requieren inscripción previa por cuestiones de aforo y seguridad. Se espera una afluencia masiva.',
    date: '2026-04-07',
    source: 'Archidiócesis de Madrid',
    sourceUrl: 'https://madrid.conelpapa.es',
    relatedCities: ['madrid'],
  },
  {
    slug: 'logo-himno-visita-papal',
    title: 'Presentados el logo y el himno oficial "Alza la mirada"',
    excerpt: 'El comité organizador desvela la imagen oficial diseñada por María del Mar Chapa y el himno grabado en cuatro catedrales con más de 1.700 voces.',
    content: 'La identidad visual de la visita ha sido desvelada. El logo, diseñado por María del Mar Chapa, fue presentado el 7 de abril. El himno oficial "Alza la mirada" fue grabado el 22 de marzo de 2026 de forma simultánea en cuatro catedrales españolas con la participación de más de 1.700 voces.',
    date: '2026-04-07',
    relatedCities: ['madrid', 'barcelona', 'gran-canaria', 'tenerife'],
  },
  {
    slug: 'sagrada-familia-torre-jesus',
    title: 'El Papa bendecirá la Torre de Jesús de la Sagrada Familia',
    excerpt: 'El acto estrella en Barcelona: la bendición de la torre de 172,5 metros coincidirá con el centenario de la muerte de Gaudí.',
    content: 'Uno de los momentos más esperados de la visita será la inauguración y bendición de la Torre de Jesucristo de la Sagrada Familia, que con 172,5 metros será la más alta de la basílica. El acto coincide con el centenario de la muerte de Antoni Gaudí en 2026, y se enmarca en su proceso de beatificación.',
    date: '2026-03-15',
    relatedCities: ['barcelona'],
  },
  {
    slug: 'primera-visita-papal-canarias',
    title: 'Canarias recibirá por primera vez en la historia a un Papa',
    excerpt: 'La visita a Gran Canaria y Tenerife será histórica: ningún pontífice había visitado las islas. El enfoque será la crisis migratoria.',
    content: 'La etapa canaria de la visita será histórica: es la primera vez que un Papa visita las Islas Canarias. El eje temático será la caridad y la migración. En Gran Canaria el Papa visitará el muelle de Arguineguín, símbolo de la crisis migratoria, y en Tenerife el centro de acogida de Las Raíces.',
    date: '2026-03-20',
    relatedCities: ['gran-canaria', 'tenerife'],
  },
  {
    slug: 'voluntarios-madrid-10000',
    title: 'Madrid busca 10.000 voluntarios para la visita papal',
    excerpt: 'La Archidiócesis de Madrid necesita 10.000 voluntarios para tareas de acogida, hospitality y apoyo logístico durante los actos.',
    content: 'La organización de la visita papal en Madrid requiere un ejército de voluntarios. Se necesitan 10.000 personas para tareas de bienvenida, hospitality, alojamiento de familias, apoyo en eventos y preparación. El plazo de inscripción finaliza el 24 de abril de 2026.',
    date: '2026-04-01',
    source: 'Archidiócesis de Madrid',
    relatedCities: ['madrid'],
  },
]

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return news.find((n) => n.slug === slug)
}

export function getNewsByCity(citySlug: string): NewsArticle[] {
  return news.filter((n) => n.relatedCities.includes(citySlug))
}
