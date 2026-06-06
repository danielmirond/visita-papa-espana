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
  dateModified: '2026-06-06T12:09:00+02:00',
  coverageStart: '2026-06-06T09:00:00+02:00',
  coverageEnd: '2026-06-06T23:30:00+02:00',
  entries: [
    {
      time: '11:59',
      datetime: '2026-06-06T11:59:00+02:00',
      title: 'Salvas, himnos y revista a la Guardia de Honor',
      body: 'Tras los saludos, el Papa y el Rey pasan revista a la Guardia de Honor en el patio del Palacio Real. Suenan el himno pontificio y el himno español, acompañados de las salvas de cañón y los honores a las banderas. El acto, de marcado peso protocolario, escenifica la dimensión de Estado de la visita. A continuación se suceden las presentaciones de autoridades civiles y eclesiásticas.',
    },
    {
      time: '11:50',
      datetime: '2026-06-06T11:50:00+02:00',
      title: 'La Familia Real recibe al Papa en el Palacio Real',
      body: 'Los Reyes Felipe VI y Letizia, acompañados de sus hijas, dan la bienvenida a León XIV en la entrada del Palacio Real. El Papa es recibido entre vivas y cánticos de «esta es la juventud del Papa» de los fieles concentrados en los alrededores. Empieza la ceremonia oficial de Estado del primer día del viaje.',
    },
    {
      time: '11:41',
      datetime: '2026-06-06T11:41:00+02:00',
      title: 'León XIV: los abusos en la Iglesia son «una herida abierta»',
      body: 'El Papa ha hecho una declaración contundente sobre los abusos en el seno de la Iglesia, a los que ha calificado de «herida abierta». Ha reafirmado su compromiso de seguir luchando contra ellos y de mantener la escucha activa a las víctimas. El mensaje confirma uno de los ejes más delicados de la visita.',
    },
    {
      time: '11:03',
      datetime: '2026-06-06T11:03:00+02:00',
      title: 'La anécdota del día: el Papa, simpatizante del Real Madrid',
      body: 'Entre los fieles circula una anécdota distendida en la jornada de bienvenida. Aunque suele decirse que «el Papa es de todos los equipos», León XIV ha reconocido en alguna ocasión su simpatía por el Real Madrid. Un guiño futbolístico que ha arrancado sonrisas en una mañana de fuerte carga institucional.',
    },
    {
      time: '10:57',
      datetime: '2026-06-06T10:57:00+02:00',
      title: 'El Papa se reunirá con víctimas de abusos en España',
      body: 'Antes de aterrizar, León XIV ha dejado claro que durante su viaje mantendrá un encuentro con víctimas de abusos en el seno de la Iglesia. Con ello busca despejar dudas y subrayar el compromiso con la reparación y la escucha. El encuentro se enmarca en la agenda más sensible de la visita. La organización no ha detallado aún la hora ni el lugar exactos.',
    },
    {
      time: '10:46',
      datetime: '2026-06-06T10:46:00+02:00',
      title: 'El Papa, camino del Palacio Real',
      body: 'Tras el recibimiento en Barajas, la comitiva pontificia se pone en marcha hacia el Palacio Real, primera parada oficial de la jornada. Allí tendrá lugar la ceremonia de bienvenida con los Reyes y una recepción de Estado. El traslado se realiza con un fuerte dispositivo de seguridad por las calles de Madrid. Se esperan cortes de tráfico en el entorno del recorrido.',
    },
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
