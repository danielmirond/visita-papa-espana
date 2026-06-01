export interface FaqItem {
  question: string
  answer: string
  category: 'general' | 'inscripcion' | 'transporte' | 'alojamiento' | 'evento'
}

export const faq: FaqItem[] = [
  // General
  {
    question: '¿Cuáles son las fechas exactas de la visita papal por ciudad?',
    answer: 'El Viaje Apostólico del Papa León XIV a España se celebrará del 6 al 12 de junio de 2026. Cronograma por ciudad: MADRID (6-8 junio): Llegada 6 de junio 10:30 en Barajas, encuentro con Reyes, Misa de Corpus Christi en Cibeles (7 jun), Discurso ante Congreso y Senado (8 jun), Encuentro diocesano en Bernabéu (8 jun). BARCELONA (9-10 junio): Llegada 9 de junio 12:25 en El Prat, Vigilia en Montjuïc (9 jun), Misa en Sagrada Familia y bendición Torre de Jesús (10 jun). GRAN CANARIA (11 junio): Llegada en Las Palmas, Encuentro en muelle de Arguineguín, Misa en Estadio de Gran Canaria. TENERIFE (12 junio): Encuentro con migrantes en La Laguna (10:10), Misa de clausura en Puerto de Santa Cruz (12:15).',
    category: 'general',
  },
  {
    question: '¿Cuándo visita el Papa León XIV España?',
    answer: 'El Papa León XIV visitará España del 6 al 12 de junio de 2026. El recorrido incluye Madrid (6-8 junio), Barcelona (9-10 junio), Gran Canaria (11 junio) y Tenerife (12 junio).',
    category: 'general',
  },
  {
    question: '¿Cuál es el lema de la visita papal?',
    answer: 'El lema oficial de la visita apostólica es "Alzad la mirada", tomado del Evangelio de Juan 4,35.',
    category: 'general',
  },
  {
    question: '¿Es la primera vez que un Papa visita España?',
    answer: 'No. Juan Pablo II visitó España en varias ocasiones y Benedicto XVI lo hizo en 2011. Sin embargo, es la primera visita de León XIV y la primera vez en la historia que un Papa visita las Islas Canarias.',
    category: 'general',
  },
  {
    question: '¿Qué ciudades visitará el Papa?',
    answer: 'El Papa visitará cuatro ciudades: Madrid (sede de los actos institucionales y eclesiales), Barcelona (inauguración de la Torre de Jesús en la Sagrada Familia), Gran Canaria (enfoque en migración) y Tenerife (misa de clausura).',
    category: 'general',
  },
  {
    question: '¿Cuál es la web oficial de la visita?',
    answer: 'La web oficial es conelpapa.es, gestionada por la Conferencia Episcopal Española. Para inscribirse a los actos de Madrid se usa madrid.conelpapa.es.',
    category: 'general',
  },

  // Inscripción
  {
    question: '¿Es gratis asistir a los actos del Papa?',
    answer: 'Sí, todos los actos públicos son completamente gratuitos. Sin embargo, es obligatorio inscribirse previamente a través de la web oficial por cuestiones de aforo y seguridad.',
    category: 'inscripcion',
  },
  {
    question: '¿Cómo me inscribo para asistir a los actos?',
    answer: 'Debes registrarte en la web oficial de cada ciudad. Para Madrid, la inscripción se realiza en madrid.conelpapa.es. Selecciona los actos a los que quieres asistir, completa el formulario y recibirás una confirmación por email con tu acreditación.',
    category: 'inscripcion',
  },
  {
    question: '¿Necesito entrada o invitación?',
    answer: 'Para los actos públicos (misas, vigilias) necesitas inscripción previa gratuita. Algunos actos como el discurso en el Congreso o los encuentros privados son solo por invitación y no están abiertos al público general.',
    category: 'inscripcion',
  },
  {
    question: '¿Puedo asistir con niños?',
    answer: 'Sí, los niños pueden asistir a todos los actos públicos. Se recomienda llevar protección solar, agua abundante y comida. Ten en cuenta que los eventos masivos implican largas esperas y pueden no ser adecuados para niños muy pequeños.',
    category: 'inscripcion',
  },
  {
    question: '¿Puedo ser voluntario?',
    answer: 'Sí. La organización necesita miles de voluntarios en cada ciudad. Solo en Madrid se buscan 10.000 voluntarios para tareas de acogida, logística y apoyo. Puedes inscribirte a través de la web oficial conelpapa.es.',
    category: 'inscripcion',
  },

  // Transporte
  {
    question: '¿Cómo llego a Madrid para la visita del Papa?',
    answer: 'Las mejores opciones son el AVE (tren de alta velocidad) desde las principales ciudades españolas o el avión al Aeropuerto Adolfo Suárez Madrid-Barajas. Durante la visita se reforzará el transporte público (Metro y Cercanías) y se ampliarán horarios.',
    category: 'transporte',
  },
  {
    question: '¿Habrá cortes de tráfico?',
    answer: 'Sí, se esperan importantes cortes de tráfico en las zonas de los actos en todas las ciudades. Se recomienda encarecidamente usar el transporte público. En Madrid se verán afectadas las zonas de Cibeles, Castellana y Bernabéu.',
    category: 'transporte',
  },
  {
    question: '¿Cómo llego a Canarias para la visita?',
    answer: 'La única opción es el avión. Hay vuelos directos a Gran Canaria (aeropuerto LPA) y Tenerife (aeropuertos TFN y TFS) desde Madrid y Barcelona. Entre islas hay vuelos interinsulares de 30 minutos y ferris de 1h30. Reserva con mucha antelación porque la demanda será altísima.',
    category: 'transporte',
  },
  {
    question: '¿Se ampliará el horario del transporte público?',
    answer: 'Sí. Metro, autobuses y cercanías ampliarán sus horarios y frecuencias en todas las ciudades durante los días de la visita. Los detalles concretos se publicarán semanas antes del evento.',
    category: 'transporte',
  },

  // Alojamiento
  {
    question: '¿Dónde me alojo en Madrid para la visita?',
    answer: 'Las mejores zonas son Centro, Chamartín y la zona de Castellana, cerca de los principales actos. Reserva con la mayor antelación posible, ya que la demanda será enorme. También habrá alojamiento gratuito en parroquias y colegios religiosos previa inscripción.',
    category: 'alojamiento',
  },
  {
    question: '¿Hay alojamiento gratuito para peregrinos?',
    answer: 'Sí. Parroquias, colegios y congregaciones religiosas ofrecerán alojamiento gratuito a los peregrinos que lo necesiten. El registro para este alojamiento se gestiona a través de la web oficial de cada ciudad.',
    category: 'alojamiento',
  },
  {
    question: '¿Dónde me alojo en Barcelona?',
    answer: 'Las mejores zonas son el Eixample (cerca de la Sagrada Familia) y Sants (buena conexión con Montjuïc y Montserrat). Reserva con antelación porque coincide con temporada alta turística.',
    category: 'alojamiento',
  },

  // Evento
  {
    question: '¿Qué actos se celebran en la Sagrada Familia?',
    answer: 'El 10 de junio el Papa celebrará una misa solemne en la Basílica de la Sagrada Familia y, como acto central, bendecirá e inaugurará la Torre de Jesucristo, de 172,5 metros de altura. Coincide con el centenario de la muerte de Gaudí.',
    category: 'evento',
  },
  {
    question: '¿Qué es la vigilia del Bernabéu?',
    answer: 'El 8 de junio se celebrará un gran encuentro diocesano en el Estadio Santiago Bernabéu con fieles de Madrid. Es uno de los actos públicos más multitudinarios de la visita. Requiere inscripción previa en madrid.conelpapa.es.',
    category: 'evento',
  },
  {
    question: '¿Qué pasa en el muelle de Arguineguín?',
    answer: 'El 11 de junio el Papa visitará el muelle de Arguineguín en Gran Canaria, un lugar simbólico de la crisis migratoria en Canarias. Es un acto con fuerte carga simbólica sobre la acogida y los derechos de los migrantes.',
    category: 'evento',
  },
  {
    question: '¿Se puede ver la visita por televisión?',
    answer: 'Sí. RTVE (La 1, La 2 y RTVE Play) retransmitirá todos los actos principales en directo y en abierto. También habrá cobertura en 13TV, TRECE y Vatican News. Además se instalarán pantallas gigantes en los principales puntos de cada ciudad.',
    category: 'evento',
  },
  {
    question: '¿Qué pasa si llueve?',
    answer: 'Los actos al aire libre se celebrarán salvo condiciones meteorológicas extremas. Se recomienda llevar un paraguas plegable o chubasquero por precaución. Los actos en recintos cerrados (Sagrada Familia, Bernabéu, Movistar Arena) no se ven afectados.',
    category: 'evento',
  },
  {
    question: '¿Qué no puedo llevar a los actos?',
    answer: 'Por seguridad, no se permiten mochilas grandes, objetos punzantes, botellas de cristal, drones ni paraguas largos. Se recomienda llevar solo lo imprescindible en una bolsa pequeña o riñonera. Habrá controles de seguridad en los accesos.',
    category: 'evento',
  },
  {
    question: '¿Pertenece el Papa León XIV al Opus Dei?',
    answer: 'No. El Papa León XIV es religioso de la Orden de San Agustín (OSA), también conocidos como agustinos, no del Opus Dei. Ingresó en el noviciado agustino en 1977 en Saint Louis (Missouri) y fue Prior General mundial de la Orden de San Agustín entre 2001 y 2013. La Orden de San Agustín es una orden religiosa fundada en 1244 que sigue la regla escrita por San Agustín de Hipona, distinta del Opus Dei (prelatura personal fundada por San Josemaría Escrivá en 1928).',
    category: 'general',
  },
  {
    question: '¿Es político el discurso del Papa al Congreso?',
    answer: 'El discurso del Papa León XIV ante el Congreso de los Diputados el 8 de junio (10:30) será un discurso pastoral, no partidista. El Estado español es aconfesional según el artículo 16.3 de la Constitución, lo que no impide la cooperación con las confesiones religiosas. Los discursos papales en parlamentos suelen abordar derechos humanos, dignidad de la persona, paz y bien común, sin entrar en política de partido. Será la primera vez en la historia que un Papa interviene ante el Congreso español, en sesión conjunta con el Senado.',
    category: 'evento',
  },
  {
    question: '¿A qué hora exacta llega el Papa a Barcelona?',
    answer: 'El Papa León XIV llegará al Aeropuerto Josep Tarradellas Barcelona-El Prat el martes 9 de junio a las 12:25 procedente de Madrid. Su primer acto público será a las 13:00 en la Catedral de la Santa Cruz y Santa Eulalia con el rezo de la Hora Media. El acto multitudinario del día será la vigilia de oración a las 20:00 en el Estadio Olímpico Lluís Companys de Montjuïc.',
    category: 'evento',
  },
  {
    question: '¿Hay actos del Papa abiertos al público en La Laguna y Tenerife?',
    answer: 'Sí. El viernes 12 de junio a las 10:10 el Papa León XIV mantendrá un encuentro de integración con personas migrantes en la Plaza del Cristo de San Cristóbal de La Laguna, ante el Real Santuario del Santísimo Cristo. Por la mañana (12:15) presidirá la Santa Misa de clausura del Viaje Apostólico en el Puerto de Santa Cruz de Tenerife, abierta al público con inscripción previa en madrid.conelpapa.es. La visita al centro de acogida Las Raíces a las 9:30 es de carácter pastoral y no abierta al público general.',
    category: 'evento',
  },
]

export const FAQ_CATEGORIES = {
  general: 'Información general',
  inscripcion: 'Inscripción y acceso',
  transporte: 'Transporte',
  alojamiento: 'Alojamiento',
  evento: 'Sobre los actos',
}
