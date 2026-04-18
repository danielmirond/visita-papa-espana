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
  lemaEpiscopal: 'In illo uno unum', // «En aquel que es uno, seamos uno»
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
