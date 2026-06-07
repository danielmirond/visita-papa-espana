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

export const liveblogMadrid7: Liveblog = {
  slug: 'visita-papa-madrid-misa-cibeles-movistar-arena-7-junio-directo',
  headline: 'Misa del Papa en Cibeles y Movistar Arena, en directo (7 de junio)',
  description:
    'Seguimiento en directo del segundo día del Papa León XIV en Madrid: la gran misa del Corpus Christi en la plaza de Cibeles, el Ángelus y el encuentro con el mundo de la cultura, el arte, la economía y el deporte en el Movistar Arena.',
  datePublished: '2026-06-07T08:00:00+02:00',
  dateModified: '2026-06-07T11:29:21+02:00',
  coverageStart: '2026-06-07T08:00:00+02:00',
  coverageEnd: '2026-06-07T22:00:00+02:00',
  entries: [
    {
      time: '11:29',
      datetime: '2026-06-07T11:29:21+02:00',
      title: "Llega la procesión del Corpus Christi.",
      body: "Llega la procesión del Corpus Christi. Dentro de la Santa Misa, se celebra también una procesión del Corpus Christi, en la que participan, entre otros, niños y niñas vestidos de Primera Comunión. (Según ABC.)",
    },
    {
      time: '11:28',
      datetime: '2026-06-07T11:28:19+02:00',
      title: "Papa León XIV en Madrid | \"Nadie puede arrodillarse ante Dios y despreciar al hermano",
      body: "El Papa León XIV en la misma ofrecida en Madrid ha sido rotundo al afirmar que \"nadie puede arrodillarse ante Dios y despreciar al hermano\".Asimismo, ha dicho a los presentes que no deben despreciar al hermano y sí salir del \"egoísmo, la indiferencia y de una fe cómoda y privada\" para comprometerse con \"el bien común\".También ha hecho hincapié en la tradición religiosa de España, en el Corpus Christi y en sus \"solemnes procesiones\". Procesiones que, durante siglos, “han plasmado la piedad, el arte, la música, la arquitectura y la vida del pueblo español\". (Según El Español.)",
    },
    {
      time: '11:25',
      datetime: '2026-06-07T11:25:31+02:00',
      title: "Algunas imágenes de la comunión.",
      body: "Algunas imágenes de la comunión. Txema Rodríguez (Según ABC.)",
    },
    {
      time: '10:07',
      datetime: '2026-06-07T10:07:00+02:00',
      title: "Imágenes para la historia",
      body: "Los reyes Felipe y Letizia, junto a sus hijas Leonor y Sofía, son los únicos no religiosos que estarán al lado del Papa León XIV en el escenario de Cibeles. (Según Lecturas.)",
    },
    {
      time: '10:05',
      datetime: '2026-06-07T10:05:09+02:00',
      title: "Sin incidentes en la seguridad del viaje del papa, un test de estrés para la Policía",
      body: "El viaje del papa a España se está desarrollando con normalidad en el amplio dispositivo de seguridad desplegado por la Policía y que supone un reto logístico y un test de \"estrés y resistencia\" para los agentes que participan.Así lo ha asegurado a EFE el comisario jefe de las Unidades de Intervención Policial (UIP), Javier Orcaray, antes de que comience en Cibeles la misa presidida por León XIV, que, según este mando, seguirán al menos unas 800.000 personas en el entorno de esta plaza madrileña.Orcaray ha explicado que, hasta el momento, todo se está desarrollando con \"normalidad\", sin… (Según El Español.)",
    },
    {
      time: '10:03',
      datetime: '2026-06-07T10:03:09+02:00',
      title: "La misa se puede seguir a través de 42 pantallas repartidas por Madrid Para los fieles y seguidores del…",
      body: "La misa se puede seguir a través de 42 pantallas repartidas por Madrid Para los fieles y seguidores del Papa que no hayan podido encontrar un sitio cerca de Cibeles para asistir a la misa del Corpus, se han instalado hasta 42 pantallas por todo Madrid para todos aquellos que quieran verla (Según OKDiario.)",
    },
    {
      time: '10:00',
      datetime: '2026-06-07T10:00:37+02:00',
      title: "Almeida le da la llave de oro de la ciudad al Papa León XIV",
      body: "León XIV recibe la llave de oro de Madrid antes de la gran misa en Cibeles. Tras firmar el Libro de Honor, el Santo Padre se dirige a pie a la sacristía. (Según El Español.)",
    },
    {
      time: '09:57',
      datetime: '2026-06-07T09:57:06+02:00',
      title: "Quedan cinco minutos para la misa del Corpus El pontífice ha llegado al Ayuntamiento de Madrid en papamóvil…",
      body: "Quedan cinco minutos para la misa del Corpus El pontífice ha llegado al Ayuntamiento de Madrid en papamóvil para recibir la llave de oro de la ciudad de Madrid. En breves minutos oficiará la misa del Corpus ante miles de fieles. Es el acto más multitudinario de la visita del Papa León XIV. (Según OKDiario.)",
    },
    {
      time: '09:56',
      datetime: '2026-06-07T09:56:44+02:00',
      title: "Faltan pocos minutos para que dé comienzo la gran misa del Corpus Christi en Cibeles.",
      body: "Faltan pocos minutos para que dé comienzo la gran misa del Corpus Christi en Cibeles. (Según ABC.)",
    },
    {
      time: '09:55',
      datetime: '2026-06-07T09:55:31+02:00',
      title: "Algunas de las autoridades que está previsto que acudan a la misa del Corpus Christi.",
      body: "Algunas de las autoridades que está previsto que acudan a la misa del Corpus Christi. A la misa oficiada por el Papa está previsto que asistan los Reyes Felipe VI y Letizia, la princesa Leonor y la infanta Sofía, además de la presidenta de Madrid, Isabel Díaz Ayuso y el alcalde, José Luis Martínez-Almeida. Desde el Gobierno acude Milagros Tolón, Ministra de Educación, Formación Profesional y Deportes. (Según ABC.)",
    },
    {
      time: '09:54',
      datetime: '2026-06-07T09:54:25+02:00',
      title: "El alcalde de Madrid entrega la llave de oro a León XIV José Luis Martínez-Almeida entrega las llaves de la…",
      body: "El alcalde de Madrid entrega la llave de oro a León XIV José Luis Martínez-Almeida entrega las llaves de la ciudad de Madrid al pontífice. Tras la entrega, el Papa León XIV ha firmado en el Libro de Honor de Madrid bajo la atenta mirada de la familia real. (Según OKDiario.)",
    },
    {
      time: '09:52',
      datetime: '2026-06-07T09:52:03+02:00',
      title: "El Rey recibe al Papa en su llegada a Cibeles Los Reyes, la princesa de Asturias y la infanta reciben al…",
      body: "El Rey recibe al Papa en su llegada a Cibeles Los Reyes, la princesa de Asturias y la infanta reciben al Papa León XIV a su llegada al Ayuntamiento de Madrid. Almeida ha sido la primera autoridad política en saludar al pontífice. (Según OKDiario.)",
    },
    {
      time: '09:50',
      datetime: '2026-06-07T09:50:31+02:00',
      title: "La parroquia de San José repartirá más de 30.000 hostias consagradas en la misa de Cibeles .",
      body: "La parroquia de San José repartirá más de 30.000 hostias consagradas en la misa de Cibeles . Está previsto que alrededor de 300 ministros repartan el Cuerpo y la Sangre de Cristo a todos los que estén participando en la misa. «Celebraremos una Eucaristía a puerta cerrada ese mismo domingo para consagrar todas las formas que nos han enviado desde el arzobispado. Nos han mandado 150 copones y en cada copón van 200 formas, más luego otros cuatro copones para celíacos, otras 500 formas aproximadamente, sin gluten», explicaba su párroco, don José Julio Martín Barba. (Según ABC.)",
    },
    {
      time: '09:00',
      datetime: '2026-06-07T09:00:00+02:00',
      title: 'Segundo día del Papa en Madrid: la gran misa del Corpus en Cibeles',
      body: 'León XIV afronta su segunda jornada en España con dos grandes citas en Madrid. Por la mañana presidirá la solemne misa del Corpus Christi en la plaza de Cibeles, uno de los actos centrales del viaje, para el que la organización espera una asistencia masiva. Por la tarde participará en el encuentro con el mundo de la cultura, el arte, la economía y el deporte en el Movistar Arena.',
    },
    {
      time: '08:30',
      datetime: '2026-06-07T08:30:00+02:00',
      title: 'Cibeles ultima los preparativos de la misa multitudinaria',
      body: 'El entorno de la plaza de Cibeles y el paseo del Prado amanece con un amplio dispositivo de seguridad y cortes de tráfico para acoger la eucaristía. La parroquia de San José, en pleno centro de Madrid, ha preparado decenas de miles de formas para la comunión de los fieles que llenarán la zona.',
    },
    {
      time: '08:00',
      datetime: '2026-06-07T08:00:00+02:00',
      title: 'La agenda del día: Cibeles por la mañana, Movistar Arena por la tarde',
      body: 'La jornada del domingo, festividad del Corpus Christi, tiene dos polos. A las 10:00 el Papa preside la misa en la plaza de Cibeles —tras recorrer en papamóvil el trayecto desde el Instituto Ramiro de Maeztu— seguida del rezo del Ángelus y de la procesión del Corpus hasta la iglesia de San José. A las 18:00, el encuentro «Tejer redes con el mundo de la cultura, el arte, la economía y el deporte» en el Movistar Arena, presentado por Carlos Franganillo, con figuras como Antonio Banderas, Carolina Marín, Rafa Nadal y Teresa Perales.',
    },
  ],
}

export const liveblogMadrid6: Liveblog = {
  slug: 'en-directo-madrid-6-junio',
  headline: 'Visita del Papa León XIV a Madrid, en directo (6 de junio)',
  description:
    'Seguimiento en directo del primer día del viaje del Papa León XIV a España: llegada a Madrid, bienvenida en el Palacio Real y vigilia con los jóvenes en la Plaza de Lima.',
  datePublished: '2026-06-06T21:00:00+02:00',
  dateModified: '2026-06-07T08:01:31+02:00',
  coverageStart: '2026-06-06T09:00:00+02:00',
  coverageEnd: '2026-06-06T23:30:00+02:00',
  entries: [
    {
      time: '08:01',
      datetime: '2026-06-07T08:01:31+02:00',
      title: "La parroquia de San José repartirá más de 30.000 hostias en la misa de Cibeles .",
      body: "La parroquia de San José repartirá más de 30.000 hostias en la misa de Cibeles . No hay madrileño (ni forastero) que no haya pasado por las puertas de la parroquia de San José, en pleno corazón de Madrid. Su fachada, de ladrillo rojo y con una Virgen del Carmen en lo alto, forma parte de una de las estampas más reconocibles de la capital, frente al edificio Metrópoli y junto al Banco de España, en un rincón por el que cada día transitan miles de personas. Sin embargo, no todos conocen la vida que hay detrás. (Según ABC.)",
    },
    {
      time: '07:45',
      datetime: '2026-06-07T07:45:37+02:00',
      title: "Los niños de Comunión que saldrán en la procesión del Corpus ya esperan al Papa.",
      body: "Los niños de Comunión que saldrán en la procesión del Corpus ya esperan al Papa. Una imagen de Fermín Canas desde los preparativos de la misa. (Según ABC.)",
    },
    {
      time: '07:30',
      datetime: '2026-06-07T07:30:31+02:00',
      title: "Encuentro en el Movistar Arena con distintos sectores de la sociedad.",
      body: "Encuentro en el Movistar Arena con distintos sectores de la sociedad. Por la tarde, el Pontífice participará en el encuentro 'Tejer redes con el mundo de la cultura, el arte, la economía y el deporte', presentado por Carlos Franganillo. En el acto participarán Antonio Banderas, el vicerrector de la Universidad Complutense, José María Coello de Portugal; representantes del mundo económico y también del deporte, entre los que se encuentran Carolina Marín, Rafa Nadal y Teresa Perales. (Según ABC.)",
    },
    {
      time: '01:01',
      datetime: '2026-06-07T01:01:31+02:00',
      title: "Cantos, alabanza y mucha oración: así se vivió la vigilia de los jóvenes con el Papa en comunidad .",
      body: "Cantos, alabanza y mucha oración: así se vivió la vigilia de los jóvenes con el Papa en comunidad . Conforme miles de jóvenes peregrinos fueron acercándose al paseo de la Castellana, las puertas de acceso para entrar a la vigilia de los jóvenes con el Papa cada vez fueron más complicadas. Aún lo fue más si antes de esta celebración habías tenido que venir directo y con prisas de una comunión, como les ocurrió a los jóvenes de la parroquia de San José. «Venimos de la comunión de Santi, un niño de nuestra comunidad. (Según ABC.)",
    },
    {
      time: '00:48',
      datetime: '2026-06-06T22:48:11Z',
      title: "El Papa de \"la luz\" que habla \"claro y firme\" al mundo desde España desborda Madrid de júbilo",
      body: "Recados para todos y mensajes por doquier. El primer día de León XIV en España dejó tres alocuciones públicas del Papa y una intervención en el avión que ya han servido para remover conciencias y sembrar semillas de reflexión. El Papa comenzó ayer su primera jornada del viaje oficial que realiza a territorio nacional con una intensa agenda, sorpresas y discursos que confirman lo que ya se sospechaba: que Robert Prevost es un hombre con criterio propio -iluminado por el Espíritu Santo- y que cada una de sus palabras tiene un propósito detrás. Lea aquí la información completa de Marina Pina. (Según El Mundo.)",
    },
    {
      time: '00:31',
      datetime: '2026-06-07T00:31:31+02:00',
      title: "La vigilia del Papa León XIV, en imágenes .",
      body: "La vigilia del Papa León XIV, en imágenes . El Papa León XIV ha presidido en la plaza de Lima la vigilia con los jóvenes, un acto multitudinario en el que se esperan medio millón de personas y que cierra el primer día del Pontífice en España. Consulta aquí todas las imágenes. (Según ABC.)",
    },
    {
      time: '00:01',
      datetime: '2026-06-07T00:01:31+02:00',
      title: "El Papa ante el «giro católico» de los jóvenes: «Las ideologías pasan, la verdad permanece» .",
      body: "El Papa ante el «giro católico» de los jóvenes: «Las ideologías pasan, la verdad permanece» . Dicen que lo católico está de moda, sobre todo entre los jóvenes. A cuenta de la vocación en 'Los Domingos', del parafraseo hagiográfico de Rosalía en 'Lux' o de las conversiones de los retiros de impacto exhibidas hasta el descaro por los 'influencers' cristianos, llevamos meses llenando páginas sobre el «giro 200.000 representantes de esta generación, a caballo entre los 'millennials' y la Z, las inquietudes sobre cómo «reconocer la voz de Dios» en el ruido del mundo y sobre la misión concreta… (Según ABC.)",
    },
    {
      time: '23:49',
      datetime: '2026-06-06T23:49:02+02:00',
      title: "Bad Bunny, en su concierto, y el Papa, en la Vigilia, avisan a los jóvenes sobre las redes sociales",
      body: "Bad Bunny ha alcanzado, con el concierto de este sábado 6 de junio, el ecuador de su residencia de 10 recitales en Madrid. El quinto y sexto de ellos coinciden con la presencia del Papa León XIV, que justamente este sábado ha protagonizado la Vigilia con jóvenes la Plaza de Lima. (Según Europa Press.)",
    },
    {
      time: '23:31',
      datetime: '2026-06-06T23:31:31+02:00',
      title: "Vive Dios»: Antonio Banderas pone música y baile al Evangelio en la vigilia de oración .",
      body: "«Vive Dios»: Antonio Banderas pone música y baile al Evangelio en la vigilia de oración . Los actores del musical 'Godspell' han protagonizado el momento más inesperado de la vigilia de hoy en la plaza de Lima al interpretar algunos de los temas -en la versión de Antonio Banderas- del clásico de Broadway frente al Papa León XIV. Durante unos minutos, un elenco de cantantes vestidos de formas estrambóticas y con un acompañamiento musical que ha elevado los decibelios frente al Santiago Bernabéu, han cantado y bailado un popurrí con algunos de los temas más inolvidables de la obra, incluido… (Según ABC.)",
    },
    {
      time: '23:05',
      datetime: '2026-06-06T23:05:51+02:00',
      title: "Papa.-Primer día de León XVI en España: Pide acabar con la polarización y alienta a los jóvenes a \"cambiar...",
      body: "El primer día de León XVI en España ha estado marcado por su llamamiento al diálogo y el encuentro en la ceremonia del Palacio Real, sin olvidar su mensaje a los jóvenes en la Vigilia de la Plaza de Lima o su encuentro con los más desfavorecidos en el centro para personas en exclusión de Cáritas Madrid. (Según Europa Press.)",
    },
    {
      time: '23:00',
      datetime: '2026-06-06T23:00:31+02:00',
      title: "El grupo religioso Hakuna cierra la vigilia.",
      body: "El grupo religioso Hakuna cierra la vigilia. El grupo católico Hakuna cierra la vigilia en la primera jornada de León XIV en España, que ha incluido también el recibimiento de la Familia Real en el Palacio, la visita al centro CEDIA de Cáritas. (Según ABC.)",
    },
    {
      time: '22:50',
      datetime: '2026-06-06T22:50:22+02:00',
      title: "La cifra de asistentes a la vigilia ronda el medio millón.",
      body: "La cifra de asistentes a la vigilia ronda el medio millón. El número de personas que han asistido a la vigilia con el Papa León XIV ronda el medio millón, de acuerdo con Delegación del Gobierno de Madrid. (Según ABC.)",
    },
    {
      time: '22:02',
      datetime: '2026-06-06T22:02:01+02:00',
      title: "La adoración al Santísimo silencia la Castellena.",
      body: "La adoración al Santísimo silencia la Castellena. Mientras el Papa rezaba de rodillas ante la custodia, el medio millón de jóvenes que llenan el paseo de la Castellana han permanecido en silencio, recogidos también en oración. Más de cinco minutos en los que los jóvenes se centraban en el silencio para buscar la respuesta de Dios, como les había dicho el Papa poco antes. Informa José Ramón Navarro-Pareja . (Según ABC.)",
    },
    {
      time: '21:53',
      datetime: '2026-06-06T21:53:23+02:00',
      title: "Lectura del santo Evangelio según san Juan.",
      body: "Lectura del santo Evangelio según san Juan. Proclamación del Evangelio según san Juan con la lectura del pasaje del milagro de los panes y los peces, según el cual con solo cinco panes y dos peces Jesús alimentó a una multitud de más de 5.000 hombres, además de mujeres y niños, y sobraron 12 canastas. (Según ABC.)",
    },
    {
      time: '21:51',
      datetime: '2026-06-06T19:51:33Z',
      title: "León XIV interpela a los jóvenes en Madrid: \"Ante el vacío de la indiferencia y el conformismo, sed…",
      body: "Todo era jolgorio en el madrileño paseo de la Castellana. Decenas de miles de jóvenes cantaban, coreaban y disfrutaban de los alrededores de la plaza de Lima desde las cuatro y media de la tarde, esperando en comunión y con paciencia al Santo Padre. Oficialmente, la organización trasladó que 240.000 personas se habían apuntado a la vigilia previa al Corpus Christi, sin embargo, asumían que dos tercios no se apuntan a estos eventos y van por libre, por lo que fácilmente se juntaron medio millón de personas en la cita de los jóvenes, la que cerró el primer día del Papa en España. Lea aquí la… (Según El Mundo.)",
    },
    {
      time: '21:49',
      datetime: '2026-06-06T21:49:47+02:00',
      title: "Papa.- León XIV a los jóvenes españoles: \"Vosotros podéis cambiar la historia, hacedlo con el amor",
      body: "El Papa León XIV ha invitado a los jóvenes españoles a \"cambiar la historia\" con \"el amor\". Así se ha pronunciado este sábado durante la Vigilia celebrada en la Plaza de Lima, ante cientos de miles de jóvenes. (Según Europa Press.)",
    },
    {
      time: '21:48',
      datetime: '2026-06-06T21:48:19+02:00',
      title: "El Papa saca la Sagrada Forma y la expone en la custodia ante de los jóvenes.",
      body: "El Papa saca la Sagrada Forma y la expone en la custodia ante de los jóvenes. León XIV saca Sagrada Forma del sagrario y la expone ante los jóvenes antes de un momento de oración, meditación y lectura y proclamación de la palabra. (Según ABC.)",
    },
    {
      time: '21:47',
      datetime: '2026-06-06T19:47:26Z',
      title: "El Papa León XIV inicia la adoración eucarística en la Plaza de Lima",
      body: "El Pontífice, ante miles de jóvenes congregados en la Plaza de Lima, inicia la adoración eucarística. El rezo es el acto central de una ceremonia en la que el Papa León XIV ha contestado a las inquietudes de un grupo de jóvenes madrileños. (Según El Mundo.)",
    },
    {
      time: '21:46',
      datetime: '2026-06-06T21:46:04+02:00',
      title: "Suena el himno 'Ubi caritas' antes de la exposición del Santísimo.",
      body: "Suena el himno 'Ubi caritas' antes de la exposición del Santísimo. Suena el himno 'Ubi caritas' antes de la exposición del Santísimo, uno de los momentos culmen de todas las vigilias de los Papas con los jóvenes. (Según ABC.)",
    },
    {
      time: '21:39',
      datetime: '2026-06-06T19:39:18Z',
      title: "Los jóvenes aguardan al inicio del rezo ante el Santo Padre",
      body: "En un momento que no estaba contemplado en el guion inicial, los jóvenes le han pedido al Papa León XIV que firme la Cruz de los jóvenes, mientras la gente coreaba: &amp;quot;León, amigo, el Papa está contigo&amp;quot;. Informa Marina Pina. A continuación, mientras el Santo Padre se marchaba a revestirse para rezar antes del Corpus que se celebrará mañana, el cantante de Siloe junto a un párroco han interpretado el tema &amp;apos;Búfalo&amp;apos;, en el que afirma: &amp;quot;Tú me das la fuerza de un búfalo, tú eres mi roca y mi verdad&amp;quot;. (Según El Mundo.)",
    },
    {
      time: '21:38',
      datetime: '2026-06-06T21:38:19+02:00',
      title: "Fito Robles, voz de Siloé, canta con el sacerdote Jaime Salmoreno.",
      body: "Fito Robles, voz de Siloé, canta con el sacerdote Jaime Salmoreno. El vocalista de Siloé, Fito Robles, canta con el sacerdote Jaime Salmoreno. (Según ABC.)",
    },
    {
      time: '21:37',
      datetime: '2026-06-06T21:37:16+02:00',
      title: "El Papa firma una cruz que le llevan los jóvenes.",
      body: "El Papa firma una cruz que le llevan los jóvenes. (Según ABC.)",
    },
    {
      time: '21:36',
      datetime: '2026-06-06T21:36:27+02:00',
      title: "El Pontífice: «Sed humanos, hombres y mujeres de carne y hueso».",
      body: "El Pontífice: «Sed humanos, hombres y mujeres de carne y hueso». «Quiero confiraros a todos una misión, sed humanos, hombres y mujeres de carne y hueso. No apariencias, sino rostros fiables, personas que buscan la Justicia», urge el Papa. (Según ABC.)",
    },
    {
      time: '13:04',
      datetime: '2026-06-06T13:04:00+02:00',
      title: "El Santo Padre hace mención a la paz, las ideologías y la verdad.",
      body: "El Santo Padre hace mención a la paz, las ideologías y la verdad. «Vengo entre ustedes para confirmar, alentar e inspirar una renovada fidelidad de los creyentes al Evangelio, así como una reconciliación y una cooperación más profundas entre las distintas fuerzas de esta Nación. De hecho, su propia historia sugiere que no es la cultura del enfrentamiento , sino la del encuentro, la que genera estabilidad y prosperidad. El mensaje de paz que en estos tiempos, por desgracia, resuena para algunos como ingenuo y para otros como provocador, encuentra acogida en quienes no se encierran en… (Según ABC.)",
    },
    {
      time: '13:02',
      datetime: '2026-06-06T13:02:43+02:00',
      title: "León XIV, sobre España: «¡Es un pueblo lleno de pasión, que ama la vida y lo manifiesta!».",
      body: "León XIV, sobre España: «¡Es un pueblo lleno de pasión, que ama la vida y lo manifiesta!». (Según ABC.)",
    },
    {
      time: '15:01',
      datetime: '2026-06-06T13:01:16Z',
      title: "Unas 130.000 personas han recibido a León XIV en las calles de Madrid entre el Palacio Real y la Nunciatura",
      body: "Unas 130.000 personas han recibido a León XIV en las calles de la capital entre el Palacio Real y la Nunciatura, ha cuantificado la Delegación de Gobierno en Madrid en un comunicado. El Papa ha iniciado cerca de las 13.40 horas de este 6 de junio su primer recorrido en papamóvil por las calles de Madrid, acompañado en aplausos, saludos y cánticos de &amp;apos;¡Viva el Papa!&amp;apos; y &amp;apos;Alza la mirada&amp;apos;, lema oficial de la visita a España, que ha comenzado con la recepción oficial celebrada en el Palacio Real con autoridades del Estado y representantes del cuerpo… (Según El Mundo.)",
    },
    {
      time: '13:00',
      datetime: '2026-06-06T13:00:59+02:00',
      title: "El Pontífice agradece la invitación a nuestro país y enaltece «la riqueza multifacética de un gran país».",
      body: "El Pontífice agradece la invitación a nuestro país y enaltece «la riqueza multifacética de un gran país». (Según ABC.)",
    },
    {
      time: '12:59',
      datetime: '2026-06-06T12:59:39+02:00',
      title: "Felipe VI concluye su discurso de bienvenida al Papa.",
      body: "Felipe VI concluye su discurso de bienvenida al Papa. «Bien merece ser pauta de conducta universal: la unidad como vehículo e instrumento para la paz. De nuevo, Santidad, bienvenido a España», finalizaba Su Majestad. (Según ABC.)",
    },
    {
      time: '12:58',
      datetime: '2026-06-06T12:58:52+02:00',
      title: "Se hacen imprescindibles la empatía, la comprensión y la escucha», expone el Rey.",
      body: "«Se hacen imprescindibles la empatía, la comprensión y la escucha», expone el Rey. «En un mundo anegado de datos y mensajes se hacen imprescindibles la empatía, la comprensión y la escucha. Vuestro predecesor, Su Santidad el Papa Francisco, insistía a menudo en la importancia de saber escuchar», y ha añadido que «cuando la atención está en el otro, en quién tenemos enfrente, podemos identificarnos con su dolor, con su alegría, con sus debilidades y fortalezas..., podemos ponernos en su lugar». (Según ABC.)",
    },
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
