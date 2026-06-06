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
  dateModified: '2026-06-06T10:40:00+02:00',
  coverageStart: '2026-06-06T09:00:00+02:00',
  coverageEnd: '2026-06-06T23:30:00+02:00',
  entries: [
    {
      time: '10:38',
      datetime: '2026-06-06T10:38:00+02:00',
      title: 'Los Reyes reciben a León XIV en Barajas',
      body: 'El Papa baja del avión y es recibido en la pista por los reyes Felipe VI y Letizia, junto a las autoridades del Estado. Mientras tanto, las campanas de las iglesias de Madrid repican a la vez para darle la bienvenida. Es la primera visita de un Pontífice a España en quince años. Tras el saludo oficial, la comitiva se prepara para el traslado al Palacio Real.',
    },
    {
      time: '10:15',
      datetime: '2026-06-06T10:15:00+02:00',
      title: 'El avión del Papa aterriza en Madrid-Barajas',
      body: 'El avión en el que viaja León XIV toma tierra en el aeropuerto Adolfo Suárez Madrid-Barajas a las 10:15, unos minutos antes de lo previsto. Arranca así su Viaje Apostólico a España (6-12 de junio), el primero como Papa. El recorrido pasará por Madrid, Barcelona, Gran Canaria y Tenerife. Será la primera vez que un Pontífice visita las Islas Canarias.',
    },
    {
      time: '09:30',
      datetime: '2026-06-06T09:30:00+02:00',
      title: 'Madrid, lista para recibir al Papa',
      body: 'Todo está preparado en el aeropuerto y en el Palacio Real para el inicio de la visita. Los Reyes y el presidente del Gobierno aguardan la llegada del Pontífice, que viaja con un séquito de unas 60 personas. La ciudad despliega un amplio dispositivo de seguridad y cortes de tráfico de cara a los actos del día. Más tarde, la gran cita será la vigilia con los jóvenes en la Plaza de Lima.',
    },
  ],
}
