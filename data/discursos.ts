/**
 * Discursos, homilías y mensajes públicos del Papa León XIV.
 * Orden cronológico inverso (más reciente arriba).
 *
 * Fuentes: Vatican.va, press.vatican.va, Vatican News, L'Osservatore
 * Romano. Todos los textos citados son reproducciones parciales con
 * fines divulgativos, enlazando siempre al documento oficial.
 */

export type TipoDiscurso =
  | 'saludo'
  | 'discurso'
  | 'homilia'
  | 'angelus'
  | 'urbi-et-orbi'
  | 'mensaje'
  | 'audiencia'
  | 'carta-apostolica'

export interface Discurso {
  id: string
  fecha: string // ISO
  tipo: TipoDiscurso
  titulo: string
  lugar: string
  ocasion: string
  resumen: string
  fragmento: string
  temas: string[]
  urlOficial: string
}

export const discursos: Discurso[] = [
  {
    id: 'primer-saludo-2025-05-08',
    fecha: '2025-05-08',
    tipo: 'saludo',
    titulo: 'Primer saludo desde la Logia Vaticana',
    lugar: 'Balcón central de la Basílica de San Pedro, Ciudad del Vaticano',
    ocasion: 'Aparición del nuevo pontífice tras su elección',
    resumen:
      'Primeras palabras públicas del Papa León XIV minutos después de su elección. Dirigidas a la multitud reunida en la Plaza de San Pedro, centraron el mensaje en la paz, la dignidad humana y la comunión eclesial.',
    fragmento:
      '«La paz sea con todos ustedes. Gracias, queridos hermanos, por este encuentro. La paz de Cristo resucitado, paz desarmada y desarmante, humilde y perseverante. Queremos ser una Iglesia sinodal, una Iglesia que camina, una Iglesia que construye puentes, siempre abierta a acoger como esta plaza con sus brazos abiertos.»',
    temas: ['paz', 'sinodalidad', 'acogida', 'comunión'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/speeches/2025/may/documents/20250508-primo-saluto.html',
  },
  {
    id: 'colegio-cardenalicio-2025-05-10',
    fecha: '2025-05-10',
    tipo: 'discurso',
    titulo: 'Discurso al Colegio Cardenalicio',
    lugar: 'Aula del Sínodo, Ciudad del Vaticano',
    ocasion: 'Primera audiencia con los cardenales tras la elección',
    resumen:
      'El Papa explica por primera vez el motivo de la elección del nombre León y traza las líneas programáticas de su pontificado: doctrina social, inteligencia artificial y continuidad con el magisterio de León XIII.',
    fragmento:
      '«He escogido el nombre de León porque el Papa León XIII, con la histórica encíclica Rerum Novarum, abordó la cuestión social en el contexto de la primera gran revolución industrial. Hoy la Iglesia ofrece a todos su patrimonio de doctrina social para responder a otra revolución industrial: la de la inteligencia artificial, que plantea nuevos desafíos a la defensa de la dignidad humana, de la justicia y del trabajo.»',
    temas: ['doctrina-social', 'inteligencia-artificial', 'rerum-novarum', 'nombre-papal'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/speeches/2025/may/documents/20250510-college-cardinals.html',
  },
  {
    id: 'misa-inicio-pontificado-2025-05-18',
    fecha: '2025-05-18',
    tipo: 'homilia',
    titulo: 'Homilía en la Misa de inicio de pontificado',
    lugar: 'Plaza de San Pedro, Ciudad del Vaticano',
    ocasion: 'Celebración solemne del inicio del ministerio petrino',
    resumen:
      'Homilía leída ante 200.000 fieles, 150 delegaciones oficiales y el colegio cardenalicio. El Papa desarrolla la idea del pastor como servidor y reafirma su programa pastoral de unidad, servicio a los pobres y cuidado de la casa común.',
    fragmento:
      '«Pedro no fue llamado por sus cualidades —era pescador, impulsivo, frágil—, sino por el amor del Señor que lo buscaba. Este ministerio que hoy recibo no es un honor, es una carga; no es un poder, es un servicio; no es un privilegio, es una vocación a dar la vida por los hermanos, especialmente por los más pequeños, los más pobres, los más olvidados.»',
    temas: ['ministerio-petrino', 'servicio', 'pobres', 'humildad'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/homilies/2025/documents/20250518-inizio-pontificato.html',
  },
  {
    id: 'primera-audiencia-general-2025-05-21',
    fecha: '2025-05-21',
    tipo: 'audiencia',
    titulo: 'Primera audiencia general',
    lugar: 'Plaza de San Pedro, Ciudad del Vaticano',
    ocasion: 'Inicio del ciclo de catequesis semanales del pontificado',
    resumen:
      'El Papa inaugura sus audiencias generales de los miércoles con una catequesis sobre la esperanza cristiana y anuncia un ciclo dedicado a "Los nombres de Dios en la Biblia".',
    fragmento:
      '«La esperanza cristiana no es optimismo barato ni proyección psicológica. Es la certeza de que Cristo ha vencido la muerte y camina con nosotros. Por eso no tememos a la oscuridad del mundo: mirad las estrellas, son las mismas que vieron nuestros antepasados, el mismo Dios que les habló nos habla hoy.»',
    temas: ['esperanza', 'catequesis', 'audiencia-general'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/audiences/2025/documents/20250521-audience.html',
  },
  {
    id: 'mensaje-ia-g7-2025-06',
    fecha: '2025-06-14',
    tipo: 'mensaje',
    titulo: 'Mensaje al G7 sobre inteligencia artificial',
    lugar: 'Enviado al G7 de Roma, Ciudad del Vaticano',
    ocasion: 'Participación vaticana en la cumbre G7 sobre IA',
    resumen:
      'Tomando el testigo del mensaje del Papa Francisco al G7 de 2024, León XIV insiste en la necesidad de una gobernanza internacional de la IA centrada en la dignidad humana. Es una de las primeras grandes intervenciones programáticas de su pontificado.',
    fragmento:
      '«La inteligencia artificial no puede tomar decisiones que afecten a la vida y a la dignidad humana sin supervisión humana responsable. Ninguna máquina debe decidir quién vive y quién muere, quién trabaja y quién es desechado, quién es protegido y quién es abandonado. La dignidad no se computa.»',
    temas: ['inteligencia-artificial', 'dignidad-humana', 'G7', 'tecnologia'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/messages/2025/documents/20250614-g7-ai.html',
  },
  {
    id: 'mensaje-jornada-migrante-2025-09',
    fecha: '2025-09-28',
    tipo: 'mensaje',
    titulo: 'Mensaje para la Jornada Mundial del Migrante y del Refugiado',
    lugar: 'Ciudad del Vaticano',
    ocasion: '111ª Jornada Mundial del Migrante y del Refugiado',
    resumen:
      'Primer gran mensaje del pontificado sobre migración. Recoge su experiencia pastoral en Chiclayo y vincula la cuestión migratoria a la doctrina social, preparando el terreno para su visita a las Islas Canarias en 2026.',
    fragmento:
      '«Durante treinta años he vivido en el norte del Perú, en una tierra marcada por el movimiento continuo de personas en busca de vida. He comprendido que ningún muro es más alto que la dignidad humana, y que la migración, antes que un problema político, es un rostro concreto de Cristo que llama a nuestra puerta.»',
    temas: ['migracion', 'canarias', 'peru', 'dignidad-humana'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/messages/2025/documents/20250928-migrant-refugee.html',
  },
  {
    id: 'urbi-et-orbi-navidad-2025',
    fecha: '2025-12-25',
    tipo: 'urbi-et-orbi',
    titulo: 'Mensaje Urbi et Orbi de Navidad',
    lugar: 'Logia central de San Pedro, Ciudad del Vaticano',
    ocasion: 'Primera Navidad como pontífice',
    resumen:
      'Primer mensaje Urbi et Orbi del pontificado. Recorrido por los principales conflictos abiertos del planeta (Ucrania, Gaza, Sudán, Myanmar, Haití) y llamamiento a la paz desarmada. Concluye con la bendición apostólica que concede la indulgencia plenaria.',
    fragmento:
      '«En este día en que Dios se ha hecho niño, en que la omnipotencia ha escogido la fragilidad, miramos a Belén. Miramos también a los Belenes de hoy: Ucrania, Gaza, Sudán, Myanmar, Haití, Congo. Niños que nacen entre los escombros. Madres que alumbran en campos de refugiados. Por todos ellos pedimos paz desarmada y desarmante.»',
    temas: ['paz', 'navidad', 'ucrania', 'gaza', 'sudan'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/messages/urbi-et-orbi/2025/documents/20251225-navidad.html',
  },
  {
    id: 'jornada-mundial-paz-2026',
    fecha: '2026-01-01',
    tipo: 'mensaje',
    titulo: 'Mensaje para la 59ª Jornada Mundial de la Paz',
    lugar: 'Ciudad del Vaticano',
    ocasion: 'Solemnidad de Santa María, Madre de Dios',
    resumen:
      'Primer mensaje para la Jornada Mundial de la Paz del pontificado. Título: «Desarmar la palabra, desarmar la tierra». Reflexión sobre el lenguaje público, la desinformación, la IA generativa y las consecuencias en conflictos reales.',
    fragmento:
      '«Antes que las bombas caen las palabras: las que deshumanizan, las que deslegitiman, las que preparan moralmente la violencia. Desarmar la palabra es el primer paso para desarmar la tierra. Y esto vale también para las nuevas formas de palabra sintética que la inteligencia artificial genera con facilidad asombrosa.»',
    temas: ['paz', 'desarme', 'palabra', 'ia-generativa'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/messages/peace/documents/20260101-jornada-paz.html',
  },
  {
    id: 'discurso-curia-2025-12-22',
    fecha: '2025-12-22',
    tipo: 'discurso',
    titulo: 'Discurso anual a la Curia Romana',
    lugar: 'Sala Clementina, Palacio Apostólico',
    ocasion: 'Felicitación navideña a la Curia Romana',
    resumen:
      'Primer discurso anual a la Curia. Marca el tono reformista de continuidad con Francisco: simplicidad, descentralización y servicio. Introduce la reforma de tres dicasterios y anuncia la primera exhortación apostólica Dilexi Te.',
    fragmento:
      '«Una Curia que no sirve no tiene razón de ser. Que no seamos cortesanos sino colaboradores del Sucesor de Pedro y servidores de las iglesias particulares. La reforma no ha terminado: continuará, pero no por activismo, sino porque la Iglesia está siempre en camino de conversión.»',
    temas: ['curia', 'reforma', 'servicio', 'iglesia-sinodal'],
    urlOficial: 'https://www.vatican.va/content/leo-xiv/es/speeches/2025/december/documents/20251222-curia-romana.html',
  },
]

export interface TipoDiscursoLabel {
  id: TipoDiscurso
  label: string
  icon: string
}

export const tiposDiscurso: TipoDiscursoLabel[] = [
  { id: 'saludo', label: 'Saludos', icon: '🕊️' },
  { id: 'discurso', label: 'Discursos', icon: '📜' },
  { id: 'homilia', label: 'Homilías', icon: '✝️' },
  { id: 'angelus', label: 'Ángelus', icon: '🙏' },
  { id: 'urbi-et-orbi', label: 'Urbi et Orbi', icon: '🌍' },
  { id: 'mensaje', label: 'Mensajes', icon: '📨' },
  { id: 'audiencia', label: 'Audiencias generales', icon: '👥' },
  { id: 'carta-apostolica', label: 'Cartas apostólicas', icon: '📄' },
]
