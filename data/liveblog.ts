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
  dateModified: '2026-06-06T12:56:45+02:00',
  coverageStart: '2026-06-06T09:00:00+02:00',
  coverageEnd: '2026-06-06T23:30:00+02:00',
  entries: [
    {
      time: '12:56',
      datetime: '2026-06-06T12:56:45+02:00',
      title: "Su Majestad hace referencia a los «valores democráticos y la legalidad internacional» en su discurso.",
      body: "Su Majestad hace referencia a los «valores democráticos y la legalidad internacional» en su discurso. «En este tiempo corremos el riesgo de olvidar aquello que de verdad importa, de deslizarnos hacia la errada creencia de que —abolidas muchas de nuestras referencias por el pulso de la actualidad— todo vale, todo es admisible, negociable y justificable. Y no es así. La dignidad de la persona, los derechos humanos, los valores democráticos y la legalidad internacional deben seguir siendo nuestros números primos... (Según ABC.)",
    },
    {
      time: '12:54',
      datetime: '2026-06-06T12:54:51+02:00',
      title: "El rey se refiere a la labor del Papa frente a los abusos en la Iglesia.",
      body: "El rey se refiere a la labor del Papa frente a los abusos en la Iglesia. «No puede haber mayor contraste con todo ello que el dolor causado por los casos de abuso, que ni son ni pueden ser representativos de la inmensa comunidad eclesial. Vuestra claridad y firmeza, que también quiero reconocer, son esenciales en el proceso sanador y de reparación del daño infligido: lo son para las víctimas, para los fieles, para la Iglesia y para la sociedad en su conjunto», ha dicho Felipe VI. (Según ABC.)",
    },
    {
      time: '12:53',
      datetime: '2026-06-06T12:53:43+02:00',
      title: "La fe católica está enraizada en nuestro país».",
      body: "«La fe católica está enraizada en nuestro país». «La fe católica está enraizada en nuestro país y sin ella —bien lo sabéis— nuestra historia y nuestra cultura no se entenderían», ha indicado el Rey, antes de reconocer la labor social de la Iglesia Católica. (Según ABC.)",
    },
    {
      time: '14:52',
      datetime: '2026-06-06T12:52:22Z',
      title: "Se prevé asistencia masiva a los actos del Papa masivos en Madrid",
      body: "La organización de la visita del Papa prevé una asistencia masiva para los dos actos principales en Madrid. A estas horas son más de 240.000 personas las inscritas a través los formularios de acreditación para participar en la vigilia de esta tarde en la plaza de Lima, y 380.000 de cara a la gran misa de mañana en Cibeles. En total, los inscritos superan las 620.000 personas en todos los actos programados en la capital. Unas cifras que aún serán mayores, según considera el director de comunicación de la visita del Papa, Rafa Rubio: &amp;quot;La inscripción no es obligatoria, por lo que… (Según El Mundo.)",
    },
    {
      time: '12:50',
      datetime: '2026-06-06T12:50:51+02:00',
      title: "El Rey Felipe VI comienza su discurso por la visita del Papa León XIV a España.",
      body: "El Rey Felipe VI comienza su discurso por la visita del Papa León XIV a España. (Según ABC.)",
    },
    {
      time: '12:46',
      datetime: '2026-06-06T12:46:11+02:00',
      title: "El Santo Padre se encuentra con las autoridades, acompañado de la Familia Real.",
      body: "El Santo Padre se encuentra con las autoridades, acompañado de la Familia Real. Dentro de la visita de cortesía a Sus Majestades los Reyes de España, de la foto oficial, del Intercambio de regalos privado y del encuentro privado en el Salón de los Espejos, el Papa se ha dirigido con sus majestades al Salón de Columnas para el encuentro con las Autoridades, saludando a los presidentes de las Autonomías y otros líderes políticos de los diferentes partidos. (Según ABC.)",
    },
    {
      time: '12:40',
      datetime: '2026-06-06T12:40:35+02:00',
      title: "Momentos de complicidad entre la Familia Real Española y el Papa León.",
      body: "Momentos de complicidad entre la Familia Real Española y el Papa León. (Según ABC.)",
    },
    {
      time: '12:35',
      datetime: '2026-06-06T12:35:50+02:00',
      title: "La juventud espera al Papa: «Hemos rezado un montón para que el viaje dé sus frutos».",
      body: "La juventud espera al Papa: «Hemos rezado un montón para que el viaje dé sus frutos». Varias jóvenes de entre 13 y 26 años viajan desde Córdoba hasta la capital para asistir a la visita del Pontífice a Madrid. «Esta es la juventud del Papa», corean las andaluzas en su primera parada del día, en la Nunciatura Apostólica. «Hemos rezado un montón para que el viaje dé sus frutos. (Según ABC.)",
    },
    {
      time: '12:33',
      datetime: '2026-06-06T12:33:22+02:00',
      title: "Salvas de cañón, himnos y honores a las banderas para recibir al Papa León XIV en el Palacio Real .",
      body: "Salvas de cañón, himnos y honores a las banderas para recibir al Papa León XIV en el Palacio Real . El Papa ha sido recibido con todos los honores a su llegada al Palacio Real, donde le esperaban los Reyes Felipe VI y Letizia y sus hijas, la princesa Leonor y la Infanta Sofía. Consulta cómo ha sido el momento en este artículo de Inés Romero. (Según ABC.)",
    },
    {
      time: '14:31',
      datetime: '2026-06-06T12:31:50Z',
      title: "El Ensache de Vallecas ya recibe autocares de fieles que llegan de distintos puntos para ver al papa",
      body: "Está previsto que lleguen hasta 400 autocares de fieles que aparcarán en el barrio del Ensanche de Vallecas. Desde allí se espera que cojan el Metro y distintos medios de transporte para trasladarse a los actos del Papa. A estas horas ya hay varios autobuses aparcados en la zona. (Según El Mundo.)",
    },
    {
      time: '12:26',
      datetime: '2026-06-06T12:26:31+02:00',
      title: "El exclusivo barrio de Madrid donde está la residencia del Papa León XIV: entre los más ricos de la capital…",
      body: "El exclusivo barrio de Madrid donde está la residencia del Papa León XIV: entre los más ricos de la capital y con 25.000 vecinos . A pesar de todo el bullicio que se espera en las calles más céntricas de Madrid, lo cierto es que el Papa tan solo pasará por allí para acudir a los eventos multitudinarios. El resto del tiempo que pase en la capital se alojará en uno de los barrios residenciales más tranquilos, situado en pleno distrito de Chamartín, a apenas unos minutos a pie de la estación de tren Madrid-Chamartín-Clara Campoamor. Lee en este enlace el artículo completo de María Albert. (Según ABC.)",
    },
    {
      time: '12:25',
      datetime: '2026-06-06T12:25:53+02:00',
      title: "Sergio Dalma, Beret, Álvaro Soler y Conchita actuarán en el acto del Papa en el Estadi Olímpic de Barcelona",
      body: "Sergio Dalma, Beret, Álvaro Soler, Conchita y Siloé son algunos de los artistas que cantarán en el acto del Papa León XIV que se celebrará en el Estadi Olímpic de Barcelona el próximo 9 de junio, según ha informado la organización de la visita del Papa. (Según Europa Press.)",
    },
    {
      time: '12:18',
      datetime: '2026-06-06T12:18:21+02:00',
      title: "El Papa, sobre si los jóvenes irán a verle a él o a Bad Bunny: «Habrá algunos aquí para ver al Papa.",
      body: "El Papa, sobre si los jóvenes irán a verle a él o a Bad Bunny: «Habrá algunos aquí para ver al Papa. Y eso dice mucho». En el avión, sobre el momento católico en España. «Me alegran mucho los informes que estoy recibiendo [sobre el aumento del número de conversiones]», afirmó. (Según ABC.)",
    },
    {
      time: '12:17',
      datetime: '2026-06-06T12:17:15+02:00',
      title: "Papa.- Cientos de fieles dan la bienvenida a León XIV: \"Papa León, te queremos un montón",
      body: "Cientos de fieles procedentes de distintos puntos de España, así como de otras partes del mundo, se han congregado este sábado 6 de junio en las inmediaciones del Palacio Real de Madrid para dar la bienvenida al Papa León XIV en la recepción oficial, uno de los actos con los que comienza su viaje a España. (Según Europa Press.)",
    },
    {
      time: '12:15',
      datetime: '2026-06-06T12:15:32+02:00',
      title: "El mensaje de los atuendos del Papa.",
      body: "El mensaje de los atuendos del Papa. Del ropaje de Jefe de Estado al recuerdo de su sacerdocio, el Pontífice llevará casi una veintena de prendas o accesorios en su viaje por España, todos con una simbología propia. Consulta en este enlace el reportaje completo de Javier Martínez-Brocal (texto) y Rodrigo Parrado (diseño e ilustración). (Según ABC.)",
    },
    {
      time: '12:10',
      datetime: '2026-06-06T12:10:21+02:00',
      title: "León XIV, recibido con honores por los Reyes y sus hijas a su llegada al Palacio Real",
      body: "El Papa León XIV ha sido recibido con honores por los Reyes Felipe VI y Letizia junto a la Princesa de Asturias y la Infanta Sofía a su llegada al Palacio Real de Madrid para el que será el primer acto oficial de la agenda de su visita a España, la primera de un Pontífice desde la que realizó Benedicto XIV en 2011. (Según Europa Press.)",
    },
    {
      time: '12:09',
      datetime: '2026-06-06T12:09:04+02:00',
      title: "El momento en el que la Familia Real ha saludado a las autoridades eclesiásticas en el Palacio Real.",
      body: "El momento en el que la Familia Real ha saludado a las autoridades eclesiásticas en el Palacio Real. (Según ABC.)",
    },
    {
      time: '12:07',
      datetime: '2026-06-06T12:07:37+02:00',
      title: "Los vestidos negros de la Princesa Leonor y la Infanta Sofía para recibir al Papa .",
      body: "Los vestidos negros de la Princesa Leonor y la Infanta Sofía para recibir al Papa . Las hijas de los Reyes apuestan por la sobriedad para dar la bienvenida a León XIV. Consulta el artículo completo de Araceli Nicolás en este enlace . Los Reyes con sus hijas esperando al Papa en el Palacio Real. (Según ABC.)",
    },
    {
      time: '12:05',
      datetime: '2026-06-06T12:05:48+02:00',
      title: "El Rey y el Papa pasan revista a la Guardia de Honor, vídeo del momento:.",
      body: "El Rey y el Papa pasan revista a la Guardia de Honor, vídeo del momento:. (Según ABC.)",
    },
    {
      time: '12:00',
      datetime: '2026-06-06T12:00:58+02:00',
      title: "Así ha sido el momento en el que han sonado el himno de España y las salvas y honores ante el Papa.",
      body: "Así ha sido el momento en el que han sonado el himno de España y las salvas y honores ante el Papa. (Según ABC.)",
    },
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
