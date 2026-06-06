/**
 * Liveblog de la visita del Papa — Madrid, 6 de junio de 2026.
 *
 * Las actualizaciones están REDACTADAS con texto propio a partir de la
 * agenda oficial (esmadrid.com, archimadrid.org, conelpapa.es) y de la
 * cobertura de RTVE, El País y La Razón. No son copia literal.
 *
 * Orden: más reciente primero. Para añadir una actualización, inserta un
 * objeto al PRINCIPIO de `entries`.
 */

export interface LiveblogEntry {
  /** Hora visible (HH:MM, Madrid) */
  time: string
  /** Fecha-hora ISO con offset de Madrid */
  datetime: string
  title: string
  body: string
}

export interface Liveblog {
  slug: string
  headline: string
  description: string
  /** ISO de publicación / última modificación */
  datePublished: string
  dateModified: string
  /** Ventana de cobertura en directo */
  coverageStart: string
  coverageEnd: string
  entries: LiveblogEntry[]
}

export const liveblogMadrid6: Liveblog = {
  slug: 'en-directo-madrid-6-junio',
  headline: 'Visita del Papa León XIV a Madrid, en directo (6 de junio)',
  description:
    'Seguimiento en directo del primer día del viaje del Papa León XIV a España: llegada a Madrid, bienvenida en el Palacio Real y vigilia con los jóvenes en la Plaza de Lima.',
  datePublished: '2026-06-06T08:00:00+02:00',
  dateModified: '2026-06-06T21:00:00+02:00',
  coverageStart: '2026-06-06T09:00:00+02:00',
  coverageEnd: '2026-06-06T23:30:00+02:00',
  entries: [
    {
      time: '20:30',
      datetime: '2026-06-06T20:30:00+02:00',
      title: 'Vigilia con los jóvenes en la Plaza de Lima',
      body: 'León XIV recorre la Plaza de Lima en papamóvil entre el clamor de los asistentes antes de presidir una gran vigilia de oración con los jóvenes. El acto combina sus palabras, momentos de silencio y adoración eucarística. Es uno de los dos grandes eventos multitudinarios del viaje, junto a la misa del domingo en Cibeles. La organización abrió las puertas horas antes para dar cabida a la enorme afluencia prevista.',
    },
    {
      time: '16:00',
      datetime: '2026-06-06T16:00:00+02:00',
      title: 'Se abren las puertas de la Plaza de Lima',
      body: 'Comienza el acceso del público a la Plaza de Lima de cara a la vigilia de la noche. Los accesos se controlan con un dispositivo de seguridad reforzado y varios cortes de tráfico en el entorno. Entre Lima hoy y Cibeles el domingo, la organización calcula una asistencia que podría rondar el millón y medio de personas. Se recomienda llegar con antelación y usar el transporte público.',
    },
    {
      time: '12:00',
      datetime: '2026-06-06T12:00:00+02:00',
      title: 'Visita de cortesía a los Reyes',
      body: 'Tras la ceremonia oficial, León XIV mantiene una visita de cortesía con el rey Felipe VI y la reina Letizia en el Palacio Real. Es el primer encuentro institucional del viaje y subraya el carácter de Estado de la jornada inaugural. A continuación, el Papa se dirige a sus siguientes compromisos en la ciudad.',
    },
    {
      time: '11:30',
      datetime: '2026-06-06T11:30:00+02:00',
      title: 'Ceremonia de bienvenida en el Palacio Real',
      body: 'El Pontífice es recibido oficialmente en el Palacio Real de Madrid con honores de Estado. Asisten las autoridades civiles y el cuerpo diplomático en un acto de marcado peso protocolario. Es la puerta de entrada formal a una semana de actos por toda España. Madrid concentra los compromisos institucionales de estos primeros días.',
    },
    {
      time: '10:30',
      datetime: '2026-06-06T10:30:00+02:00',
      title: 'El Papa aterriza en Madrid-Barajas',
      body: 'El avión pontificio toma tierra en el aeropuerto Adolfo Suárez Madrid-Barajas, donde tiene lugar la recepción oficial. Arranca así el Viaje Apostólico de León XIV a España (6-12 de junio), su primera visita al país como Papa. El recorrido incluirá Madrid, Barcelona, Gran Canaria y Tenerife. Es la primera vez que un Pontífice visita las Islas Canarias.',
    },
  ],
}
