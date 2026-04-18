/**
 * Historia de las visitas papales a España.
 *
 * Tres papas han pisado suelo español en la era moderna: Juan Pablo II (5),
 * Benedicto XVI (3) y —en 2026— León XIV.
 * El Papa Francisco (2013-2025) fue el primer pontífice en más de medio
 * siglo en no visitar España durante su pontificado.
 *
 * Fuentes:
 * - Vatican.va — sección "Viajes apostólicos"
 * - Conferencia Episcopal Española, archivo histórico
 * - Press office Santa Sede (press.vatican.va)
 * - Hemeroteca ABC, El País, La Vanguardia
 */

export interface VisitaHistorica {
  id: string
  papa: 'juan-pablo-ii' | 'benedicto-xvi' | 'francisco' | 'leon-xiv'
  papaNombre: string
  year: number
  fechaInicio: string // ISO
  fechaFin: string
  nombre: string
  ciudades: string[]
  actos: string[]
  contextoHistorico: string
  datoRelevante: string
  numeroEnPontificado: number
  numeroDias: number
  fuentes: string[]
}

export const visitas: VisitaHistorica[] = [
  // ====== JUAN PABLO II ======
  {
    id: 'jp2-1982',
    papa: 'juan-pablo-ii',
    papaNombre: 'Juan Pablo II',
    year: 1982,
    fechaInicio: '1982-10-31',
    fechaFin: '1982-11-09',
    nombre: 'Primer viaje apostólico: «El Papa peregrino en España»',
    ciudades: ['Madrid', 'Ávila', 'Alba de Tormes', 'Guadalupe', 'Toledo', 'Segovia', 'Sevilla', 'Granada', 'Loyola', 'Javier', 'Zaragoza', 'Barcelona', 'Montserrat', 'Valencia', 'Santiago de Compostela'],
    actos: [
      'Beatificación de la madre Maravillas de Jesús en Segovia',
      'Acto europeo en Santiago de Compostela ("Europa, vuelve a encontrarte a ti misma")',
      'Misa en la Plaza de Colón de Madrid',
      'Encuentro con jóvenes en el Bernabéu',
      'Visita a Santa Teresa de Jesús en Ávila',
    ],
    contextoHistorico:
      'Primera visita de un Papa a España desde el Concordato de 1953. España acababa de celebrar elecciones generales con victoria del PSOE. Juan Pablo II pronunció en Santiago el célebre discurso-manifiesto del "Acto Europeo": «Yo, Obispo de Roma y Pastor de la Iglesia universal, desde Santiago te lanzo, vieja Europa, un grito lleno de amor: Vuelve a encontrarte. Sé tú misma».',
    datoRelevante: '10 días, 16 ciudades, más de 10 millones de personas asistieron a los actos. Fue uno de los viajes más intensos de todo el pontificado wojtyliano.',
    numeroEnPontificado: 15,
    numeroDias: 10,
    fuentes: [
      'https://www.vatican.va/content/john-paul-ii/es/travels/1982/travels/documents/trav_spagna.html',
      'Conferencia Episcopal Española',
    ],
  },
  {
    id: 'jp2-1984',
    papa: 'juan-pablo-ii',
    papaNombre: 'Juan Pablo II',
    year: 1984,
    fechaInicio: '1984-10-11',
    fechaFin: '1984-10-13',
    nombre: 'Visita a Zaragoza: centenario del Pilar',
    ciudades: ['Zaragoza'],
    actos: [
      'Misa en la Plaza de las Catedrales (Pilar y La Seo)',
      'Rezo del rosario ante la Virgen del Pilar',
      'Acto con el episcopado español',
    ],
    contextoHistorico:
      'Viaje dedicado a la devoción mariana del Pilar en el contexto del año mariano. Escala técnica con alto contenido espiritual, más breve que el viaje de 1982.',
    datoRelevante:
      'Juan Pablo II rezó ante la imagen del Pilar más tiempo de lo previsto y dejó su anillo pastoral como ofrenda a la Virgen.',
    numeroEnPontificado: 24,
    numeroDias: 3,
    fuentes: ['https://www.vatican.va/content/john-paul-ii/es/travels/1984.html'],
  },
  {
    id: 'jp2-1989',
    papa: 'juan-pablo-ii',
    papaNombre: 'Juan Pablo II',
    year: 1989,
    fechaInicio: '1989-08-19',
    fechaFin: '1989-08-21',
    nombre: 'IV Jornada Mundial de la Juventud (JMJ Santiago de Compostela 1989)',
    ciudades: ['Santiago de Compostela', 'Oviedo'],
    actos: [
      'Vigilia juvenil en el Monte del Gozo',
      'Misa conclusiva de la JMJ con cerca de 400.000 jóvenes',
      'Peregrinación jacobea',
      'Visita a la Catedral de Oviedo (reliquias de la Cámara Santa)',
    ],
    contextoHistorico:
      'Cuarta JMJ de la historia, primera en tierra española y la primera con peregrinaje jacobeo. Marcó un hito en la vinculación de los jóvenes católicos con el Camino de Santiago.',
    datoRelevante:
      'Más de 400.000 jóvenes de 100 países. El lema "Yo soy el camino, la verdad y la vida" (Jn 14,6) sigue siendo uno de los más recordados de todas las JMJ.',
    numeroEnPontificado: 43,
    numeroDias: 3,
    fuentes: [
      'https://www.vatican.va/content/john-paul-ii/es/travels/1989/documents/trav_santiago.html',
    ],
  },
  {
    id: 'jp2-1993',
    papa: 'juan-pablo-ii',
    papaNombre: 'Juan Pablo II',
    year: 1993,
    fechaInicio: '1993-06-12',
    fechaFin: '1993-06-17',
    nombre: 'Peregrinación a Santiago de Compostela: Año Santo Compostelano',
    ciudades: ['Madrid', 'Huelva', 'Sevilla', 'Santiago de Compostela'],
    actos: [
      'Clausura del XLV Congreso Eucarístico Internacional en Sevilla',
      'Celebración del V centenario del descubrimiento de América en Huelva',
      'Peregrinación jacobea en el Año Santo',
    ],
    contextoHistorico:
      'Viaje triple: cierre del Congreso Eucarístico, V centenario del descubrimiento, Año Santo Jacobeo. España era el epicentro católico del año 1993.',
    datoRelevante:
      'Juan Pablo II recorrió más de 3.000 km en suelo español durante estos 6 días.',
    numeroEnPontificado: 59,
    numeroDias: 6,
    fuentes: ['https://www.vatican.va/content/john-paul-ii/es/travels/1993.html'],
  },
  {
    id: 'jp2-2003',
    papa: 'juan-pablo-ii',
    papaNombre: 'Juan Pablo II',
    year: 2003,
    fechaInicio: '2003-05-03',
    fechaFin: '2003-05-04',
    nombre: 'Canonización de cinco españoles',
    ciudades: ['Madrid'],
    actos: [
      'Canonización de Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz y Maravillas de Jesús',
      'Encuentro con jóvenes en la Plaza de Colón',
      'Misa en la Plaza de Colón con 700.000 personas',
    ],
    contextoHistorico:
      'Última visita de Juan Pablo II a España, ya muy mermado por el Parkinson. A pesar de la enfermedad evidente, pronunció el célebre: «Yo también fui joven como vosotros». Emoción multitudinaria.',
    datoRelevante:
      '700.000 personas en Plaza de Colón. La última vez que un Papa pisó España antes de la JMJ de Benedicto XVI en 2011.',
    numeroEnPontificado: 99,
    numeroDias: 2,
    fuentes: ['https://www.vatican.va/content/john-paul-ii/es/travels/2003.html'],
  },

  // ====== BENEDICTO XVI ======
  {
    id: 'bxvi-2006',
    papa: 'benedicto-xvi',
    papaNombre: 'Benedicto XVI',
    year: 2006,
    fechaInicio: '2006-07-08',
    fechaFin: '2006-07-09',
    nombre: 'V Encuentro Mundial de las Familias en Valencia',
    ciudades: ['Valencia'],
    actos: [
      'Festival de testimonios en la Ciudad de las Artes y las Ciencias',
      'Misa de clausura del EMF con cerca de 1,5 millones de fieles',
      'Encuentro con el rey Juan Carlos I',
    ],
    contextoHistorico:
      'Primera visita de Benedicto XVI a España. Contexto de tensión con el gobierno de Rodríguez Zapatero por la legalización del matrimonio entre personas del mismo sexo (2005). Discurso del Papa marcadamente doctrinal sobre la familia.',
    datoRelevante:
      '1,5 millones de personas en la misa de clausura, récord de asistencia para un acto católico en Valencia. El Papa evitó mencionar directamente leyes españolas, pero defendió el matrimonio entre hombre y mujer como "constitutivo de la familia".',
    numeroEnPontificado: 3,
    numeroDias: 2,
    fuentes: ['https://www.vatican.va/content/benedict-xvi/es/travels/2006/documents/trav_valencia.html'],
  },
  {
    id: 'bxvi-2010',
    papa: 'benedicto-xvi',
    papaNombre: 'Benedicto XVI',
    year: 2010,
    fechaInicio: '2010-11-06',
    fechaFin: '2010-11-07',
    nombre: 'Peregrinación a Santiago y dedicación de la Sagrada Familia',
    ciudades: ['Santiago de Compostela', 'Barcelona'],
    actos: [
      'Misa ante la Catedral de Santiago (Año Santo Compostelano)',
      'Abrazo al Apóstol Santiago',
      'Dedicación de la Basílica de la Sagrada Familia como templo consagrado',
      'Proclamación de la Sagrada Familia como "Basílica menor"',
      'Visita a la Obra Benéfico-Social Nen Déu',
    ],
    contextoHistorico:
      'Viaje simbólico: peregrinación jubilar a Santiago + consagración del mayor templo de Gaudí, 128 años después de iniciarse. La dedicación fue transmitida en directo a todo el mundo.',
    datoRelevante:
      'Benedicto XVI dedicó la Sagrada Familia el 7 de noviembre de 2010 tras 128 años de construcción. La Basílica todavía estaba (y sigue) en obras: aún faltan las torres centrales.',
    numeroEnPontificado: 17,
    numeroDias: 2,
    fuentes: ['https://www.vatican.va/content/benedict-xvi/es/travels/2010/documents/trav_sagrada-familia.html'],
  },
  {
    id: 'bxvi-2011',
    papa: 'benedicto-xvi',
    papaNombre: 'Benedicto XVI',
    year: 2011,
    fechaInicio: '2011-08-18',
    fechaFin: '2011-08-21',
    nombre: 'XXVI Jornada Mundial de la Juventud (JMJ Madrid 2011)',
    ciudades: ['Madrid'],
    actos: [
      'Vigilia en el aeródromo de Cuatro Vientos (tormenta histórica)',
      'Misa final de la JMJ con cerca de 2 millones de jóvenes',
      'Vía Crucis en la Castellana',
      'Encuentro con jóvenes profesores universitarios en El Escorial',
      'Visita a religiosas contemplativas',
    ],
    contextoHistorico:
      'JMJ más multitudinaria en Europa desde la de París 1997. Durante la vigilia del sábado, una tormenta eléctrica histórica obligó a interrumpir temporalmente el acto. Benedicto XVI rezó con los jóvenes "ni el viento ni la lluvia pueden apagar la luz de Cristo".',
    datoRelevante:
      '1,5-2 millones de jóvenes de 190 países. Considerada la mayor movilización juvenil católica en España. Coste estimado 50 M€, financiado por donaciones y empresas privadas.',
    numeroEnPontificado: 21,
    numeroDias: 4,
    fuentes: [
      'https://www.vatican.va/content/benedict-xvi/es/travels/2011/documents/trav_madrid.html',
      'https://www.madrid11.com (web oficial JMJ)',
    ],
  },

  // ====== FRANCISCO (ausencia de visita) ======
  {
    id: 'fc-no-visita',
    papa: 'francisco',
    papaNombre: 'Francisco',
    year: 2013,
    fechaInicio: '2013-03-13',
    fechaFin: '2025-04-21',
    nombre: 'Pontificado sin visita a España (2013-2025)',
    ciudades: [],
    actos: [],
    contextoHistorico:
      'El Papa Francisco falleció el 21 de abril de 2025 sin haber visitado España en sus 12 años de pontificado. Es el primer papa desde Pío XII (1939-1958) en no pisar suelo español durante su papado. Las razones ofrecidas públicamente fueron: priorización de los países con cristianos minoritarios o marginados, la centralidad geográfica europea ya "cubierta" por sus predecesores, y la agenda marcada por conflictos (Iraq, Mongolia, Sudán del Sur, Kazajistán).',
    datoRelevante:
      'Bergoglio sí visitó Portugal en dos ocasiones (JMJ Lisboa 2023, Fátima 2017) y Francia (Marsella 2023 y Estrasburgo). España fue el único gran país católico de Europa occidental que no visitó.',
    numeroEnPontificado: 0,
    numeroDias: 0,
    fuentes: [
      'https://www.vatican.va/content/francesco/es/travels.index.html',
      'Declaraciones del cardenal Cañizares en COPE, 2018',
      'Entrevista de Francisco a La Vanguardia, 2014',
    ],
  },

  // ====== LEÓN XIV ======
  {
    id: 'leon-xiv-2026',
    papa: 'leon-xiv',
    papaNombre: 'León XIV',
    year: 2026,
    fechaInicio: '2026-06-06',
    fechaFin: '2026-06-12',
    nombre: 'Viaje apostólico a España: Madrid, Barcelona, Gran Canaria y Tenerife',
    ciudades: ['Madrid', 'Barcelona', 'Gran Canaria', 'Tenerife'],
    actos: [
      'Llegada y misa en Cibeles (Madrid)',
      'Vigilia juvenil en la Plaza de Lima (Bernabéu)',
      'Encuentros pastorales en Madrid',
      'Inauguración de la Torre de Jesucristo de la Sagrada Familia (Barcelona)',
      'Acto por el centenario del nacimiento arquitectónico de Gaudí',
      'Encuentro migratorio en Gran Canaria',
      'Misa de clausura en Tenerife',
    ],
    contextoHistorico:
      'Primer viaje apostólico mayor de León XIV a Europa. Primer Papa estadounidense (y con nacionalidad peruana) que pisa España. Contextualmente relevante: inauguración de la Torre de Jesucristo en Barcelona (elemento más alto de la Sagrada Familia), y foco migratorio en Canarias tras la crisis de la ruta atlántica 2020-2025.',
    datoRelevante:
      'Primera vez que una visita papal a España incluye las Islas Canarias. Fechas elegidas tras los exámenes universitarios (facilitar asistencia juvenil) y antes del pico turístico de verano.',
    numeroEnPontificado: 2,
    numeroDias: 7,
    fuentes: [
      'https://conelpapa.es',
      'Conferencia Episcopal Española, nota oficial',
      'Oficina de Prensa de la Santa Sede',
    ],
  },
]

// Datos agregados para la página
export const datosAgregados = {
  totalVisitas: 9,
  visitasJP2: 5,
  visitasBenedicto: 3,
  visitasLeon: 1,
  visitasFrancisco: 0,
  ciudadesTotalesDistintas: [
    'Madrid', 'Barcelona', 'Santiago de Compostela', 'Valencia', 'Sevilla', 'Zaragoza',
    'Ávila', 'Toledo', 'Segovia', 'Granada', 'Huelva', 'Loyola', 'Javier', 'Montserrat',
    'Guadalupe', 'Alba de Tormes', 'Oviedo', 'Gran Canaria', 'Tenerife',
  ],
  jmjEnEspana: ['Santiago de Compostela 1989', 'Madrid 2011'],
}

// Mini FAQ sobre historia papal en España
export interface FaqHistoria {
  pregunta: string
  respuesta: string
}

export const faqHistoria: FaqHistoria[] = [
  {
    pregunta: '¿Cuántos papas han visitado España?',
    respuesta:
      'Tres papas han visitado España en la era contemporánea: Juan Pablo II (5 viajes entre 1982 y 2003), Benedicto XVI (3 viajes entre 2006 y 2011) y León XIV (viaje previsto del 6 al 12 de junio de 2026). Francisco (2013-2025) fue el primer papa en más de medio siglo en no pisar España durante su pontificado.',
  },
  {
    pregunta: '¿Cuándo fue la primera visita de un papa a España?',
    respuesta:
      'La primera visita apostólica de un papa a España tuvo lugar del 31 de octubre al 9 de noviembre de 1982, cuando Juan Pablo II realizó su célebre peregrinación por 16 ciudades españolas. Fue el XV viaje apostólico de su pontificado.',
  },
  {
    pregunta: '¿Por qué el Papa Francisco nunca visitó España?',
    respuesta:
      'El Papa Francisco falleció el 21 de abril de 2025 sin haber visitado España en sus 12 años de pontificado. Privilegió viajes a países con minorías católicas (Iraq, Mongolia, Kazajistán), regiones en conflicto (Sudán del Sur) y zonas de "periferia" según su propio lenguaje. Sí visitó Portugal (JMJ 2023, Fátima 2017) y Francia, pero no España. Es el primer pontífice desde Pío XII (1939-1958) en no pisar suelo español durante su papado.',
  },
  {
    pregunta: '¿Cuántas veces visitó España Juan Pablo II?',
    respuesta:
      'Juan Pablo II visitó España en 5 ocasiones: 1982 (primer viaje por 16 ciudades), 1984 (Zaragoza, centenario del Pilar), 1989 (JMJ Santiago de Compostela), 1993 (Año Santo Jacobeo, Sevilla, Huelva) y 2003 (canonización de 5 españoles en Madrid, última visita antes de fallecer).',
  },
  {
    pregunta: '¿Cuándo fue la JMJ de Madrid 2011?',
    respuesta:
      'La Jornada Mundial de la Juventud se celebró en Madrid del 16 al 21 de agosto de 2011 con el Papa Benedicto XVI. Congregó a 1,5-2 millones de jóvenes de 190 países. Fue la JMJ más multitudinaria en Europa desde la de París 1997. La célebre vigilia del 20 de agosto en el aeródromo de Cuatro Vientos se vio interrumpida por una tormenta eléctrica histórica.',
  },
  {
    pregunta: '¿Ha visitado algún papa las Islas Canarias antes?',
    respuesta:
      'No. La visita de León XIV en junio de 2026 será la primera vez que un papa pise las Islas Canarias. Ni Juan Pablo II ni Benedicto XVI incluyeron nunca el archipiélago en sus visitas a España. El foco canario del viaje está vinculado a la migración atlántica.',
  },
  {
    pregunta: '¿Cuándo fue la última vez que un papa estuvo en Santiago de Compostela?',
    respuesta:
      'La última visita papal a Santiago de Compostela fue la de Benedicto XVI el 6 de noviembre de 2010, en el Año Santo Compostelano. Antes, Juan Pablo II visitó la ciudad tres veces: 1982 (célebre "Acto Europeo"), 1989 (IV JMJ) y 1993 (Año Santo). León XIV no incluye Santiago en su visita de 2026.',
  },
]
