import { NewsArticle } from '@/types/news'

export const news: NewsArticle[] = [
  {
    slug: 'confirmada-visita-papa-leon-xiv-espana',
    title: 'Confirmada la visita del Papa Leon XIV a Espana del 6 al 12 de junio',
    excerpt: 'La Santa Sede confirma oficialmente el viaje apostolico del Papa Leon XIV a Espana, con paradas en Madrid, Barcelona, Gran Canaria y Tenerife.',
    content: 'El Vaticano ha confirmado oficialmente que el Papa Leon XIV visitara Espana del 6 al 12 de junio de 2026. El viaje apostolico incluira paradas en Madrid, Barcelona, Gran Canaria y Tenerife. Es la primera visita de un Papa a Espana desde la de Benedicto XVI en 2011 y la primera visita papal a las Islas Canarias. El viaje se presenta bajo el lema "Alzad la mirada" (Juan 4,35).',
    date: '2026-02-25',
    source: 'Oficina de Prensa de la Santa Sede',
    relatedCities: ['madrid', 'barcelona', 'gran-canaria', 'tenerife'],
  },
  {
    slug: 'registro-actos-madrid-abierto',
    title: 'Abierto el registro para asistir a los actos en Madrid',
    excerpt: 'Desde el 7 de abril se puede tramitar la inscripcion para participar en los actos papales de Madrid a traves de madrid.conelpapa.es.',
    content: 'La Archidiocesis de Madrid ha abierto el proceso de inscripcion para los actos publicos de la visita papal. Los interesados pueden registrarse en madrid.conelpapa.es. Los actos son gratuitos pero requieren inscripcion previa por cuestiones de aforo y seguridad. Se espera una afluencia masiva.',
    date: '2026-04-07',
    source: 'Archidiocesis de Madrid',
    sourceUrl: 'https://madrid.conelpapa.es',
    relatedCities: ['madrid'],
  },
  {
    slug: 'logo-himno-visita-papal',
    title: 'Presentados el logo y el himno oficial "Alza la mirada"',
    excerpt: 'El comite organizador desvela la imagen oficial disenada por Maria del Mar Chapa y el himno grabado en cuatro catedrales con mas de 1.700 voces.',
    content: 'La identidad visual de la visita ha sido desvelada. El logo, disenado por Maria del Mar Chapa, fue presentado el 7 de abril. El himno oficial "Alza la mirada" fue grabado el 22 de marzo de 2026 de forma simultanea en cuatro catedrales espanolas con la participacion de mas de 1.700 voces.',
    date: '2026-04-07',
    relatedCities: ['madrid', 'barcelona', 'gran-canaria', 'tenerife'],
  },
  {
    slug: 'sagrada-familia-torre-jesus',
    title: 'El Papa bendecira la Torre de Jesus de la Sagrada Familia',
    excerpt: 'El acto estrella en Barcelona: la bendicion de la torre de 172,5 metros coincidira con el centenario de la muerte de Gaudi.',
    content: 'Uno de los momentos mas esperados de la visita sera la inauguracion y bendicion de la Torre de Jesucristo de la Sagrada Familia, que con 172,5 metros sera la mas alta de la basilica. El acto coincide con el centenario de la muerte de Antoni Gaudi en 2026, y se enmarca en su proceso de beatificacion.',
    date: '2026-03-15',
    relatedCities: ['barcelona'],
  },
  {
    slug: 'primera-visita-papal-canarias',
    title: 'Canarias recibira por primera vez en la historia a un Papa',
    excerpt: 'La visita a Gran Canaria y Tenerife sera historica: ningun pontifice habia visitado las islas. El enfoque sera la crisis migratoria.',
    content: 'La etapa canaria de la visita sera historica: es la primera vez que un Papa visita las Islas Canarias. El eje tematico sera la caridad y la migracion. En Gran Canaria el Papa visitara el muelle de Arguineguin, simbolo de la crisis migratoria, y en Tenerife el centro de acogida de Las Raices.',
    date: '2026-03-20',
    relatedCities: ['gran-canaria', 'tenerife'],
  },
  {
    slug: 'voluntarios-madrid-10000',
    title: 'Madrid busca 10.000 voluntarios para la visita papal',
    excerpt: 'La Archidiocesis de Madrid necesita 10.000 voluntarios para tareas de acogida, hospitality y apoyo logistico durante los actos.',
    content: 'La organizacion de la visita papal en Madrid requiere un ejercito de voluntarios. Se necesitan 10.000 personas para tareas de bienvenida, hospitality, alojamiento de familias, apoyo en eventos y preparacion. El plazo de inscripcion finaliza el 24 de abril de 2026.',
    date: '2026-04-01',
    source: 'Archidiocesis de Madrid',
    relatedCities: ['madrid'],
  },
]

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return news.find((n) => n.slug === slug)
}

export function getNewsByCity(citySlug: string): NewsArticle[] {
  return news.filter((n) => n.relatedCities.includes(citySlug))
}
