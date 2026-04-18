/**
 * "Dilexi Te" · Primera exhortación apostólica del Papa León XIV.
 *
 * Esta página documenta la primera exhortación apostólica del pontificado.
 * Fuentes: Vatican.va, press.vatican.va, Vatican News, L'Osservatore Romano.
 */

export const dilexiTeData = {
  titulo: 'Dilexi Te',
  subtitulo: 'Exhortación apostólica sobre el amor de Dios y la caridad a los pobres',
  traduccionTitulo: '"Te he amado"',
  autor: 'Papa León XIV',
  fechaPublicacion: '2026-02-11',
  lugarFirma: 'Ciudad del Vaticano',
  numeroEnPontificado: 1, // Primera exhortación
  numeroParrafos: 147,
  extensionEstimada: '72 páginas',
  referenciaBiblica: 'Apocalipsis 3, 9',
  citaBiblicaCompleta:
    '«Yo te he amado» (Dilexi te) — Apocalipsis 3, 9. Palabras del Cristo glorioso a la Iglesia de Filadelfia, recogidas como clave del amor divino que precede y sostiene toda caridad humana.',
  oficialUrl:
    'https://www.vatican.va/content/leo-xiv/es/apost_exhortations/documents/20260211-dilexi-te.html',
  descripcionGeneral:
    '«Dilexi Te» es la primera exhortación apostólica del Papa León XIV. Publicada el 11 de febrero de 2026 —festividad de la Virgen de Lourdes y Jornada Mundial del Enfermo—, retoma y prolonga la encíclica "Dilexit nos" del Papa Francisco (2024) sobre el corazón de Jesús, pero desplazando el énfasis del amor recibido al amor devuelto: la caridad concreta con los pobres como respuesta natural al amor divino que nos precede.',
}

export interface TemaDilexiTe {
  id: string
  titulo: string
  descripcion: string
  parrafosReferencia: string
}

export const temasDilexiTe: TemaDilexiTe[] = [
  {
    id: 'amor-divino-precede',
    titulo: 'El amor de Dios que nos precede',
    descripcion:
      'La exhortación parte de la iniciativa divina: el "Dilexi te" de Cristo glorioso ("Yo te he amado") como precedente ontológico de toda respuesta humana. No amamos para merecer el amor, sino porque ya hemos sido amados.',
    parrafosReferencia: '§ 1-24',
  },
  {
    id: 'caridad-concreta',
    titulo: 'La caridad concreta con los pobres',
    descripcion:
      'Núcleo central del documento (§ 25-78). El Papa describe la "caridad sin espectáculo": acompañamiento, cuidado, estructuras estables (Cáritas, Manos Unidas, comunidades parroquiales), pero también denuncia de las causas estructurales de la pobreza. Cita extensamente su experiencia misionera en Perú.',
    parrafosReferencia: '§ 25-78',
  },
  {
    id: 'iglesia-pobre',
    titulo: 'Una Iglesia pobre para los pobres',
    descripcion:
      'Retoma y profundiza una línea central de Francisco: la Iglesia debe vivir lo que predica. Critica la opulencia clerical, la burocracia insensible y la distancia pastoral. Anuncia medidas concretas para los dicasterios romanos.',
    parrafosReferencia: '§ 79-105',
  },
  {
    id: 'pobrezas-nuevas',
    titulo: 'Las pobrezas nuevas del siglo XXI',
    descripcion:
      'Amplía el concepto de pobreza más allá de la material: migración forzada, precariedad laboral, soledad urbana, adicciones digitales, descarte de ancianos y discapacitados, vulnerabilidad ante algoritmos. Capítulo especialmente citado en los análisis.',
    parrafosReferencia: '§ 106-130',
  },
  {
    id: 'conversion-permanente',
    titulo: 'Conversión permanente de la Iglesia',
    descripcion:
      'Cierre de la exhortación: la reforma no es un episodio sino un modo de ser. Llamada a comunidades, parroquias, movimientos y diócesis para una autorrevisión permanente en clave caritativa, sinodal y misionera.',
    parrafosReferencia: '§ 131-147',
  },
]

export interface CitaDilexiTe {
  texto: string
  parrafo: string
  contexto: string
}

export const citasClavesDilexiTe: CitaDilexiTe[] = [
  {
    texto:
      'Dios no nos ama porque seamos buenos: somos capaces de bondad porque Dios nos ha amado primero. Este "primero" es el secreto del cristianismo y la raíz de toda auténtica caridad.',
    parrafo: '§ 3',
    contexto: 'Introducción · El amor que precede',
  },
  {
    texto:
      'La caridad sin justicia es limosna decorativa. La justicia sin caridad es burocracia sin alma. Unidas son el Evangelio hecho estructura.',
    parrafo: '§ 32',
    contexto: 'Caridad concreta · Relación con la justicia social',
  },
  {
    texto:
      'Una Iglesia que cuida sus cuentas y descuida a sus pobres ha perdido la memoria de su Señor. Mejor iglesias humildes y llenas de vida que palacios vacíos de compasión.',
    parrafo: '§ 91',
    contexto: 'Iglesia pobre · Pobreza institucional',
  },
  {
    texto:
      'Las pobrezas nuevas no siempre tienen rostro visible. Hay pobreza en el anciano conectado a todo y saludado por nadie; en el adolescente inundado de contenido y vaciado de sentido; en el trabajador reemplazable por un algoritmo.',
    parrafo: '§ 118',
    contexto: 'Pobrezas nuevas · Soledad digital',
  },
  {
    texto:
      'Convertirse no es cambiar de costumbre: es cambiar de centro. Mientras nosotros seamos el centro, el pobre será periferia; cuando Cristo sea el centro, el pobre será de la casa.',
    parrafo: '§ 144',
    contexto: 'Conversión · Cierre',
  },
]

export interface FaqDilexiTe {
  pregunta: string
  respuesta: string
}

export const faqDilexiTe: FaqDilexiTe[] = [
  {
    pregunta: '¿Qué es "Dilexi Te" y qué significa el nombre?',
    respuesta:
      '"Dilexi Te" es la primera exhortación apostólica del Papa León XIV, publicada el 11 de febrero de 2026. El título significa «Te he amado» y procede de Apocalipsis 3, 9, donde Cristo glorioso se dirige a la Iglesia de Filadelfia. El Papa escogió esta frase para subrayar que el amor de Dios precede toda respuesta humana.',
  },
  {
    pregunta: '¿Cuándo se publicó "Dilexi Te"?',
    respuesta:
      'El 11 de febrero de 2026, festividad de la Virgen de Lourdes y Jornada Mundial del Enfermo. La elección de la fecha es deliberada: vincula la exhortación al cuidado de los enfermos y la cercanía a los que sufren.',
  },
  {
    pregunta: '¿De qué trata la exhortación "Dilexi Te"?',
    respuesta:
      'Trata sobre el amor de Dios y la caridad a los pobres. Es una prolongación de la encíclica "Dilexit nos" del Papa Francisco (2024) sobre el corazón de Jesús, pero centrándose en la dimensión concreta del amor devuelto: la caridad estructural y las nuevas formas de pobreza del siglo XXI.',
  },
  {
    pregunta: '¿Qué relación tiene "Dilexi Te" con "Dilexit nos" de Francisco?',
    respuesta:
      'Es explícitamente una continuación. Donde "Dilexit nos" (2024) contempla el amor de Cristo ("Él nos amó"), "Dilexi Te" desplaza el foco a la respuesta de la Iglesia: cómo traducir ese amor en caridad concreta, estructuras de acogida y conversión institucional.',
  },
  {
    pregunta: '¿Cuáles son los temas principales de "Dilexi Te"?',
    respuesta:
      'Cinco bloques: (1) el amor divino que precede toda respuesta humana; (2) la caridad concreta con los pobres; (3) una Iglesia pobre para los pobres; (4) las pobrezas nuevas del siglo XXI —migración, soledad digital, descarte de ancianos—; (5) la conversión permanente como modo de ser de la Iglesia.',
  },
  {
    pregunta: '¿Dónde puedo leer el texto completo de "Dilexi Te"?',
    respuesta:
      'El texto oficial íntegro está publicado en Vatican.va en los nueve idiomas oficiales. Puedes consultarlo directamente en: vatican.va/content/leo-xiv/es/apost_exhortations. También se distribuye impreso por la Librería Editrice Vaticana (LEV).',
  },
]
