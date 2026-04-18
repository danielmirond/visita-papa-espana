/**
 * Biografía del Papa León XIV (Robert Francis Prevost, OSA).
 * Timeline, datos clave y obras escritas. Usado en la página /papa-leon-xiv.
 *
 * Los datos son públicos y verificables en Vatican.va, CNA, AciPrensa,
 * Wikipedia y medios oficiales.
 */

export interface TimelineEntry {
  year: number
  month?: number
  title: string
  description: string
  location?: string
}

export const biografiaPapa = {
  nombreSecular: 'Robert Francis Prevost',
  nombrePapal: 'León XIV',
  orden: 'Orden de San Agustín (OSA)',
  fechaNacimiento: '1955-09-14',
  lugarNacimiento: 'Chicago, Illinois, Estados Unidos',
  nacionalidades: ['Estados Unidos', 'Perú'],
  // Datos físicos (fuentes públicas)
  altura: '1,80 m',
  idiomas: ['Español', 'Inglés', 'Italiano', 'Francés', 'Portugués', 'Latín (lectura)', 'Quechua (nivel básico)'],
  lemaEpiscopal: 'In illo uno unum', // «En aquel que es uno, seamos uno»
  lemaTraduccion: 'En aquel que es uno, seamos uno',
  escudoDescripcion:
    'Escudo con el corazón de San Agustín atravesado por la flecha del amor divino, sobre campo azul y dorado. Lema "In illo uno unum" adaptado del comentario de San Agustín al Salmo 127.',
  fechaEleccion: '2025-05-08',
  conclaveRonda: 'Cuarta votación del cónclave',
  nombreElegido: {
    razon:
      'Elegido en memoria de León XIII, autor de la Rerum Novarum (1891) y pionero de la Doctrina Social de la Iglesia. León XIV ha manifestado su voluntad de continuar el magisterio social frente a los desafíos contemporáneos: inteligencia artificial, migraciones, desigualdad y cuidado de la casa común.',
  },
  wikidataId: 'Q6109517',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/es.html',
}

export const timelineVida: TimelineEntry[] = [
  {
    year: 1955,
    month: 9,
    title: 'Nacimiento en Chicago',
    description:
      'Nace el 14 de septiembre en Chicago (Illinois), en una familia católica de raíces francesas, italianas y españolas. Es el menor de tres hermanos.',
    location: 'Chicago, Estados Unidos',
  },
  {
    year: 1977,
    title: 'Licenciatura en Matemáticas',
    description:
      'Se gradúa en Matemáticas por la Villanova University (Pensilvania), institución agustiniana.',
    location: 'Villanova, Estados Unidos',
  },
  {
    year: 1977,
    title: 'Ingresa en la Orden de San Agustín',
    description:
      'Entra en el noviciado agustino en San Luis (Misuri). Estudia teología en la Unión Teológica Católica de Chicago.',
    location: 'San Luis, Estados Unidos',
  },
  {
    year: 1982,
    month: 6,
    title: 'Ordenación sacerdotal',
    description:
      'Ordenado sacerdote el 19 de junio de 1982 en Roma. Envía carta de profesión solemne a la Orden.',
    location: 'Roma, Italia',
  },
  {
    year: 1985,
    title: 'Misionero en Perú',
    description:
      'Inicio de su larga etapa misionera en el norte del Perú, región de Chulucanas y posteriormente Trujillo. Pastoral rural, formación de seminaristas, cooperativas campesinas.',
    location: 'Chulucanas, Perú',
  },
  {
    year: 1987,
    title: 'Doctorado en Derecho Canónico',
    description:
      'Defiende su tesis doctoral en la Pontificia Universidad Santo Tomás de Aquino (Angelicum) de Roma, sobre el gobierno del prior local agustino.',
    location: 'Roma, Italia',
  },
  {
    year: 1999,
    title: 'Prior provincial de los agustinos en Chicago',
    description:
      'Regresa a Estados Unidos para dirigir la provincia agustiniana del Medio Oeste.',
    location: 'Chicago, Estados Unidos',
  },
  {
    year: 2001,
    title: 'Prior general de la Orden de San Agustín',
    description:
      'Elegido máximo responsable mundial de la Orden de San Agustín. Reelegido en 2007. 12 años en el gobierno central de la orden.',
    location: 'Roma, Italia',
  },
  {
    year: 2014,
    title: 'Obispo de Chiclayo',
    description:
      'El Papa Francisco lo nombra administrador apostólico de la diócesis de Chiclayo (Perú). Adquiere la nacionalidad peruana en 2015. En 2015 es nombrado obispo titular.',
    location: 'Chiclayo, Perú',
  },
  {
    year: 2020,
    title: 'Etapa de pandemia y compromiso social',
    description:
      'Durante la COVID-19 organiza en Chiclayo redes de ayuda, alimentos y atención sanitaria. Refuerza su perfil pastoral cercano a los más pobres.',
    location: 'Chiclayo, Perú',
  },
  {
    year: 2023,
    month: 1,
    title: 'Prefecto del Dicasterio para los Obispos',
    description:
      'El Papa Francisco lo llama a Roma como prefecto del Dicasterio para los Obispos —uno de los cargos más influyentes del Vaticano, responsable de proponer los nuevos obispos en todo el mundo.',
    location: 'Ciudad del Vaticano',
  },
  {
    year: 2023,
    month: 9,
    title: 'Creado cardenal',
    description:
      'En el consistorio del 30 de septiembre de 2023 es creado cardenal con el título de Santa Mónica de los Agustinos.',
    location: 'Ciudad del Vaticano',
  },
  {
    year: 2025,
    month: 5,
    title: 'Elegido Papa',
    description:
      'Tras el fallecimiento del Papa Francisco el 21 de abril de 2025, el cónclave lo elige Sucesor de Pedro el 8 de mayo. Toma el nombre de León XIV. Primer Papa nacido en Estados Unidos y con nacionalidad peruana.',
    location: 'Ciudad del Vaticano',
  },
  {
    year: 2025,
    month: 5,
    title: 'Inicio del pontificado',
    description:
      'Misa de inicio del pontificado el 18 de mayo de 2025 en la Plaza de San Pedro. Primeras encíclicas previstas sobre doctrina social, paz y ecología integral.',
    location: 'Ciudad del Vaticano',
  },
  {
    year: 2026,
    month: 6,
    title: 'Viaje apostólico a España',
    description:
      'Primer viaje apostólico internacional mayor a España: Madrid, Barcelona, Gran Canaria y Tenerife del 6 al 12 de junio de 2026.',
    location: 'España',
  },
]

export interface PrioridadMagisterio {
  titulo: string
  descripcion: string
}

export const prioridadesMagisterio: PrioridadMagisterio[] = [
  {
    titulo: 'Doctrina social y justicia económica',
    descripcion:
      'Herencia directa de León XIII: renovación de la Rerum Novarum para el siglo XXI. Trabajo digno, brecha entre ricos y pobres, tecnología al servicio del hombre.',
  },
  {
    titulo: 'Inteligencia artificial y dignidad humana',
    descripcion:
      'El Papa ha mencionado varias veces que el nombre "León" evoca también el reto de la IA, como la industrialización lo fue en tiempos de León XIII.',
  },
  {
    titulo: 'Migraciones y acogida',
    descripcion:
      'Hijo de una familia con raíces migrantes y obispo en Perú, sitúa la migración como una prioridad pastoral. Vinculación con el viaje a Canarias.',
  },
  {
    titulo: 'Unidad y comunión eclesial',
    descripcion:
      'Su lema «In illo uno unum» expresa un programa de pontificado centrado en la unidad de la Iglesia en un momento de tensiones internas.',
  },
  {
    titulo: 'Cercanía pastoral y sinodalidad',
    descripcion:
      'Continuidad con la línea sinodal del Papa Francisco: Iglesia que escucha, Iglesia en camino, descentralización real.',
  },
]

export interface CitaPapa {
  texto: string
  ocasion: string
  fecha: string
}

export const citasRelevantes: CitaPapa[] = [
  {
    texto:
      'La paz sea con todos ustedes. Gracias, queridos hermanos, por este encuentro. La paz de Cristo resucitado, paz desarmada y desarmante, humilde y perseverante.',
    ocasion: 'Primer saludo desde la Logia Vaticana',
    fecha: '2025-05-08',
  },
  {
    texto:
      'He escogido el nombre de León porque el Papa León XIII, con la histórica encíclica Rerum Novarum, abordó la cuestión social en el contexto de la primera gran revolución industrial. Hoy la Iglesia ofrece a todos su patrimonio de doctrina social para responder a otra revolución industrial: la de la inteligencia artificial.',
    ocasion: 'Discurso al Colegio Cardenalicio',
    fecha: '2025-05-10',
  },
]

// Raíces, ancestros y etnicidad
export const raicesChicago = {
  barrioNatal: 'Dolton, suburbio sur de Chicago, Illinois',
  parroquiaInfancia: 'Parroquia de St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (aficionado declarado, presente en el Juego 1 de la Serie Mundial 2005)',
  etnicidad:
    'Orígenes mixtos: franceses (por parte del padre), italianos, y españoles-criollos con raíces en Luisiana (por parte de la madre). La familia Prevost procede del norte de Francia.',
  idiomaEnCasa: 'Inglés',
  datoCurioso:
    'En 2005, antes de ser obispo, viajó expresamente a Chicago para presenciar el Juego 1 de la Serie Mundial que los White Sox acabaron ganando — romperían una sequía de 88 años. Primer papa aficionado abierto al béisbol americano.',
}

// Familia
export interface MiembroFamilia {
  relacion: string
  nombre: string
  datos: string
}

export const familiaPapa: MiembroFamilia[] = [
  {
    relacion: 'Padre',
    nombre: 'Louis Marius Prevost',
    datos:
      'Hijo de emigrantes franceses. Veterano de la Segunda Guerra Mundial (desembarco de Normandía). Superintendente de escuelas católicas en el sur de Chicago. Fallecido en 1997.',
  },
  {
    relacion: 'Madre',
    nombre: 'Mildred Martínez',
    datos:
      'De ascendencia española e italiana, con raíces familiares en Nueva Orleans (Luisiana). Bibliotecaria y educadora. Fallecida en 1990. Transmitió al futuro Papa la lengua española y la devoción mariana.',
  },
  {
    relacion: 'Hermano mayor',
    nombre: 'Louis Prevost',
    datos: 'Militar retirado y empresario. Vive en Port Charlotte, Florida.',
  },
  {
    relacion: 'Hermano mediano',
    nombre: 'John Prevost',
    datos: 'Director de escuela católica jubilado. Reside cerca de Chicago.',
  },
]

// Posiciones sobre temas clave (su magisterio)
export interface PosicionMagisterio {
  tema: string
  resumen: string
  detalle: string
  fuente: string
}

export const posicionesMagisterio: PosicionMagisterio[] = [
  {
    tema: 'Doctrina social y desigualdad',
    resumen: 'Continuidad de la Rerum Novarum adaptada al siglo XXI.',
    detalle:
      'Es el eje central de su pontificado. En su primer discurso al Colegio Cardenalicio explicó que escogió el nombre León para vincular la cuestión social decimonónica con los desafíos actuales: precariedad laboral, brecha ricos-pobres, y tecnología concentrada.',
    fuente: 'Discurso al Colegio Cardenalicio, 10 mayo 2025',
  },
  {
    tema: 'Inteligencia artificial',
    resumen: 'Segunda revolución industrial que exige respuesta de la Iglesia.',
    detalle:
      'León XIV ha convertido la IA en un tema prioritario de su magisterio. Pide una regulación internacional que garantice la dignidad humana frente al desplazamiento laboral y la manipulación algorítmica, y una Iglesia que no rehúya el debate tecnológico.',
    fuente: 'Mensajes al G7 y a la ONU, 2025',
  },
  {
    tema: 'Migraciones',
    resumen: 'Acogida como prioridad pastoral vinculada a su biografía.',
    detalle:
      'Hijo de una familia con raíces migrantes y obispo en Perú durante más de tres décadas, ha situado la migración como una prueba ética del siglo. Insiste en que ningún muro es más alto que la dignidad humana y critica la instrumentalización política del fenómeno migratorio.',
    fuente: 'Homilías recurrentes, 2025',
  },
  {
    tema: 'Pro-vida y dignidad de la persona',
    resumen: 'Defensa sin fisuras de la vida desde la concepción hasta la muerte natural.',
    detalle:
      'Posición clásica y firme de la Iglesia, sin apertura al aborto. Amplía el enfoque también a la pena de muerte, la eutanasia y las condiciones de vida indigna (pobreza, guerra, trata). Ha subrayado que "pro-vida" significa defender toda la vida, no solo la prenatal.',
    fuente: 'Entrevistas como prefecto del Dicasterio para los Obispos, 2023-2024',
  },
  {
    tema: 'Personas LGTB y sinodalidad',
    resumen: 'Acogida pastoral, dentro del magisterio tradicional.',
    detalle:
      'Continúa la línea de "Fiducia supplicans" del Papa Francisco (bendiciones a personas en relaciones irregulares, sin equiparar al matrimonio sacramental). Aboga por una pastoral de escucha y acogida, sin alterar la doctrina sobre sacramento del matrimonio.',
    fuente: 'Intervención sinodal, octubre 2024',
  },
  {
    tema: 'Misa tradicional (rito latino)',
    resumen: 'Comunión eclesial por encima de la forma ritual.',
    detalle:
      'Se ha mantenido prudente sobre Traditionis custodes. Reconoce el valor del rito extraordinario para quienes lo viven con comunión eclesial, pero desalienta su uso como bandera identitaria. Prioriza la unidad de la Iglesia antes que la disputa litúrgica.',
    fuente: 'Carta a los obispos, junio 2025',
  },
  {
    tema: 'Ordenación femenina al diaconado',
    resumen: 'Cuestión abierta al discernimiento sinodal.',
    detalle:
      'No cierra la puerta al estudio del diaconado femenino (como no la cerró Francisco), pero insiste en que es un discernimiento eclesial, no una reivindicación ideológica. Mantiene firme la reserva del sacerdocio ministerial a los varones.',
    fuente: 'Entrevista Vatican News, julio 2025',
  },
  {
    tema: 'Paz y guerra',
    resumen: 'Paz desarmada y desarmante, diplomacia activa.',
    detalle:
      'Desde sus primeras palabras en la Logia Vaticana mencionó la "paz desarmada y desarmante". Continúa el magisterio de Francisco sobre Ucrania, Gaza, Sudán y otras crisis, denunciando la carrera armamentística y el uso de armas autónomas.',
    fuente: 'Primer saludo, 8 mayo 2025',
  },
]

// Redes sociales oficiales
export const redesSociales = {
  pontifex: {
    twitter: 'https://twitter.com/Pontifex',
    instagram: 'https://instagram.com/franciscus',
    descripcion:
      'Las cuentas @Pontifex (X/Twitter) y Franciscus (Instagram) son las cuentas oficiales del Papa —heredadas del pontificado anterior y mantenidas como cuentas de la Sede Petrina. Disponibles en 9 idiomas en X.',
  },
  vaticanNews: {
    url: 'https://www.vaticannews.va',
    descripcion: 'Noticias oficiales de la Santa Sede en 53 idiomas (audio, video, texto).',
  },
  vaticano: {
    url: 'https://www.vatican.va',
    descripcion: 'Portal oficial de la Santa Sede: documentos, discursos, homilías, biografía.',
  },
}

// FAQ principales sobre el Papa León XIV (para Schema FAQPage + UI)
export interface FaqPapa {
  pregunta: string
  respuesta: string
}

export const faqPapaLeonXIV: FaqPapa[] = [
  {
    pregunta: '¿Cuántos años tiene el Papa León XIV?',
    respuesta:
      'El Papa León XIV nació el 14 de septiembre de 1955 en Chicago (Estados Unidos). Cumplirá 71 años durante su viaje apostólico a España en junio de 2026.',
  },
  {
    pregunta: '¿Cómo se llama realmente el Papa León XIV?',
    respuesta:
      'Su nombre secular es Robert Francis Prevost. Es religioso de la Orden de San Agustín (OSA). Al ser elegido el 8 de mayo de 2025 escogió el nombre de León XIV.',
  },
  {
    pregunta: '¿Por qué el Papa eligió el nombre de León XIV?',
    respuesta:
      'En homenaje a León XIII (1878-1903), autor de la encíclica Rerum Novarum (1891) que inauguró la Doctrina Social de la Iglesia. Ha explicado que, como León XIII respondió a la revolución industrial, él quiere responder a la revolución tecnológica e inteligencia artificial.',
  },
  {
    pregunta: '¿Cuánto mide el Papa León XIV?',
    respuesta:
      'El Papa León XIV mide aproximadamente 1,80 metros. Es uno de los papas más altos de la historia reciente.',
  },
  {
    pregunta: '¿Cuántos idiomas habla el Papa León XIV?',
    respuesta:
      'El Papa León XIV habla con fluidez español, inglés, italiano, francés y portugués. Lee latín. Entiende y maneja expresiones en quechua, aprendidas durante sus décadas como misionero en Perú. Es uno de los papas más políglotas de la historia.',
  },
  {
    pregunta: '¿Es el Papa León XIV conservador o progresista?',
    respuesta:
      'Evita esas etiquetas. Se sitúa en la continuidad de los Papas Francisco, Benedicto XVI y Juan Pablo II. Doctrinalmente firme (pro-vida, matrimonio sacramental varón-mujer) y pastoralmente acogedor (continúa la línea de sinodalidad y acogida a personas LGTB). Sus prioridades son la doctrina social, la paz, las migraciones y la IA.',
  },
  {
    pregunta: '¿De dónde es el Papa León XIV?',
    respuesta:
      'Nació en Chicago, Illinois (Estados Unidos). Es el primer papa nacido en Estados Unidos. En 2015 obtuvo la nacionalidad peruana tras décadas como misionero y obispo en el Perú, lo que le convierte también en el primer papa con pasaporte peruano.',
  },
  {
    pregunta: '¿Quiénes son los padres del Papa León XIV?',
    respuesta:
      'Su padre, Louis Marius Prevost, fue veterano de la II Guerra Mundial y superintendente de escuelas católicas (fallecido en 1997). Su madre, Mildred Martínez, de ascendencia española-italiana con raíces en Luisiana, fue bibliotecaria y educadora (fallecida en 1990). Tiene dos hermanos: Louis y John.',
  },
  {
    pregunta: '¿Cuál es el lema del Papa León XIV?',
    respuesta:
      'Su lema episcopal, que conserva como lema papal, es "In illo uno unum" ("En aquel que es uno, seamos uno"). Es una frase extraída del comentario de San Agustín al Salmo 127 y expresa su prioridad de unidad eclesial.',
  },
  {
    pregunta: '¿Qué estudios tiene el Papa León XIV?',
    respuesta:
      'Licenciatura en Matemáticas por la Villanova University (Pensilvania, 1977). Master of Divinity por la Catholic Theological Union de Chicago. Doctorado en Derecho Canónico por la Pontificia Universidad Santo Tomás de Aquino (Angelicum) de Roma, 1987.',
  },
  {
    pregunta: '¿Cuándo fue elegido el Papa León XIV?',
    respuesta:
      'Fue elegido el 8 de mayo de 2025, en la cuarta votación del cónclave, tras el fallecimiento del Papa Francisco el 21 de abril de 2025. La misa de inicio de pontificado fue el 18 de mayo de 2025.',
  },
  {
    pregunta: '¿Cuándo visitará el Papa León XIV España?',
    respuesta:
      'El viaje apostólico del Papa León XIV a España se celebrará del 6 al 12 de junio de 2026. Visitará cuatro ciudades: Madrid (6-9 junio), Barcelona (9-10 junio), Gran Canaria (11 junio) y Tenerife (11-12 junio).',
  },
]
