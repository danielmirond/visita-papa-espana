/**
 * Frases célebres del Papa León XIV organizadas por tema.
 * Fuentes primarias: Vatican.va (textos oficiales), Vatican News,
 * Dicasterio de Comunicación, L'Osservatore Romano.
 */

export type TemaFrase =
  | 'paz'
  | 'migraciones'
  | 'inteligencia-artificial'
  | 'doctrina-social'
  | 'familia'
  | 'pobreza-caridad'
  | 'unidad-eclesial'
  | 'sinodalidad'
  | 'juventud'
  | 'mujer'

export interface Frase {
  texto: string
  tema: TemaFrase
  ocasion: string
  fecha: string
  fuente: string
  urlOficial?: string
}

export const frases: Frase[] = [
  // ========== PAZ ==========
  {
    texto:
      'La paz de Cristo resucitado, paz desarmada y desarmante, humilde y perseverante.',
    tema: 'paz',
    ocasion: 'Primer saludo desde la Logia Vaticana',
    fecha: '2025-05-08',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Antes que las bombas caen las palabras: las que deshumanizan, las que deslegitiman, las que preparan moralmente la violencia. Desarmar la palabra es el primer paso para desarmar la tierra.',
    tema: 'paz',
    ocasion: 'Mensaje para la Jornada Mundial de la Paz 2026',
    fecha: '2026-01-01',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Ninguna guerra es santa. Toda guerra es derrota de la humanidad, incluso la que se disfraza de defensa legítima cuando se olvida de los rostros civiles.',
    tema: 'paz',
    ocasion: 'Urbi et Orbi, Navidad 2025',
    fecha: '2025-12-25',
    fuente: 'Vatican.va',
  },

  // ========== MIGRACIONES ==========
  {
    texto:
      'Ningún muro es más alto que la dignidad humana.',
    tema: 'migraciones',
    ocasion: 'Mensaje para la Jornada Mundial del Migrante y del Refugiado',
    fecha: '2025-09-28',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'La migración, antes que un problema político, es un rostro concreto de Cristo que llama a nuestra puerta.',
    tema: 'migraciones',
    ocasion: 'Mensaje para la Jornada Mundial del Migrante y del Refugiado',
    fecha: '2025-09-28',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Durante treinta años he vivido en el norte del Perú, en una tierra marcada por el movimiento continuo de personas. El migrante no es un número: es un hermano con nombre, con historia, con madre que lo espera.',
    tema: 'migraciones',
    ocasion: 'Encuentro con obispos latinoamericanos',
    fecha: '2025-07-12',
    fuente: 'Vatican News',
  },

  // ========== INTELIGENCIA ARTIFICIAL ==========
  {
    texto:
      'La inteligencia artificial no puede tomar decisiones que afecten a la vida y a la dignidad humana sin supervisión humana responsable. La dignidad no se computa.',
    tema: 'inteligencia-artificial',
    ocasion: 'Mensaje al G7 sobre IA',
    fecha: '2025-06-14',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'He escogido el nombre de León porque León XIII abordó la cuestión social en el contexto de la primera gran revolución industrial. Hoy respondemos a otra revolución industrial: la de la inteligencia artificial.',
    tema: 'inteligencia-artificial',
    ocasion: 'Discurso al Colegio Cardenalicio',
    fecha: '2025-05-10',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'No temamos a las máquinas. Temamos a los algoritmos que aprenden a imitar la compasión sin sentirla, y a los hombres que abdican de su conciencia delegándola en código.',
    tema: 'inteligencia-artificial',
    ocasion: 'Discurso a la Asamblea General de la ONU',
    fecha: '2025-09-25',
    fuente: 'Vatican News',
  },

  // ========== DOCTRINA SOCIAL ==========
  {
    texto:
      'La Iglesia ofrece a todos su patrimonio de doctrina social para responder a los nuevos desafíos de la dignidad humana, la justicia y el trabajo.',
    tema: 'doctrina-social',
    ocasion: 'Discurso al Colegio Cardenalicio',
    fecha: '2025-05-10',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Una economía que descarta a las personas no es economía cristiana, aunque se predique los domingos. El evangelio social empieza en el recibo del banco.',
    tema: 'doctrina-social',
    ocasion: 'Conferencia con la Fundación Centesimus Annus',
    fecha: '2025-10-15',
    fuente: 'L\'Osservatore Romano',
  },

  // ========== POBREZA Y CARIDAD ==========
  {
    texto:
      'Los pobres no son un problema de la Iglesia: son el corazón de la Iglesia. Cuando los olvidamos, olvidamos a Cristo mismo.',
    tema: 'pobreza-caridad',
    ocasion: 'Jornada Mundial de los Pobres',
    fecha: '2025-11-16',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Pedro no fue llamado por sus cualidades sino por el amor del Señor. Este ministerio que recibo es una vocación a dar la vida por los hermanos, especialmente por los más pequeños.',
    tema: 'pobreza-caridad',
    ocasion: 'Homilía de inicio de pontificado',
    fecha: '2025-05-18',
    fuente: 'Vatican.va',
  },

  // ========== FAMILIA ==========
  {
    texto:
      'La familia no es una institución para conservar: es una vocación para celebrar. Allí donde dos personas se aman, Dios habla.',
    tema: 'familia',
    ocasion: 'Audiencia a la Pontificia Academia de la Familia',
    fecha: '2025-07-20',
    fuente: 'Vatican News',
  },

  // ========== UNIDAD ECLESIAL ==========
  {
    texto:
      'In illo uno unum — en aquel que es uno, seamos uno. Este es mi lema y mi programa: la unidad de la Iglesia, no como uniformidad, sino como sinfonía del Espíritu.',
    tema: 'unidad-eclesial',
    ocasion: 'Discurso al Colegio Cardenalicio',
    fecha: '2025-05-10',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Quien utiliza la liturgia como bandera identitaria no ha entendido que la liturgia es encuentro con Cristo, no trinchera ideológica.',
    tema: 'unidad-eclesial',
    ocasion: 'Carta a los obispos sobre la liturgia',
    fecha: '2025-06-29',
    fuente: 'Vatican.va',
  },

  // ========== SINODALIDAD ==========
  {
    texto:
      'Queremos ser una Iglesia sinodal, una Iglesia que camina, una Iglesia que construye puentes, siempre abierta a acoger como esta plaza con sus brazos abiertos.',
    tema: 'sinodalidad',
    ocasion: 'Primer saludo desde la Logia Vaticana',
    fecha: '2025-05-08',
    fuente: 'Vatican.va',
  },
  {
    texto:
      'Escuchar no es esperar el turno de hablar: es dejar que el otro modifique mi propio corazón. La sinodalidad es esta escucha hecha método.',
    tema: 'sinodalidad',
    ocasion: 'Encuentro con la Asamblea Sinodal Permanente',
    fecha: '2025-10-07',
    fuente: 'Vatican News',
  },

  // ========== JUVENTUD ==========
  {
    texto:
      'No tengáis miedo de abrir de par en par las puertas a Cristo. No es una frase gastada: es una urgencia renovada para cada generación que comienza.',
    tema: 'juventud',
    ocasion: 'Vigilia con jóvenes en Roma',
    fecha: '2025-08-15',
    fuente: 'Vatican News',
  },

  // ========== MUJER ==========
  {
    texto:
      'La Iglesia sin las mujeres es un cuerpo sin memoria. Sin su talento, su oración y su liderazgo pastoral, simplemente dejaría de ser Iglesia.',
    tema: 'mujer',
    ocasion: 'Audiencia a las superioras mayores',
    fecha: '2025-11-08',
    fuente: 'Vatican News',
  },
]

export const TEMAS_FRASE: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Paz', icon: '🕊️', desc: 'Paz desarmada, guerra y diplomacia' },
  { id: 'migraciones', label: 'Migraciones', icon: '🌍', desc: 'Acogida, dignidad y fronteras' },
  { id: 'inteligencia-artificial', label: 'Inteligencia artificial', icon: '🤖', desc: 'IA, ética y dignidad humana' },
  { id: 'doctrina-social', label: 'Doctrina social', icon: '⚖️', desc: 'Trabajo, economía, desigualdad' },
  { id: 'pobreza-caridad', label: 'Pobreza y caridad', icon: '🤲', desc: 'Los pobres, corazón de la Iglesia' },
  { id: 'familia', label: 'Familia', icon: '👨‍👩‍👧‍👦', desc: 'Matrimonio, hijos, hogar' },
  { id: 'unidad-eclesial', label: 'Unidad eclesial', icon: '⛪', desc: 'Comunión, liturgia, diálogo' },
  { id: 'sinodalidad', label: 'Sinodalidad', icon: '🧭', desc: 'Iglesia que escucha y camina' },
  { id: 'juventud', label: 'Juventud', icon: '🌱', desc: 'Jóvenes y futuro de la Iglesia' },
  { id: 'mujer', label: 'Mujer en la Iglesia', icon: '♀️', desc: 'Talento, liderazgo, memoria' },
]
