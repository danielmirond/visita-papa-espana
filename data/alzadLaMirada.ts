/**
 * Datos sobre el lema de la visita apostólica del Papa León XIV a España:
 * "Alzad la mirada" (Juan 4, 35).
 *
 * Fuentes: Conferencia Episcopal Española (nota oficial sobre el lema);
 * Sagrada Biblia (edición CEE, La Casa de la Biblia, Biblia de Jerusalén);
 * Catholic News Agency; Vatican News.
 */

export interface TraduccionLema {
  locale: string
  idioma: string
  lema: string
  versiculoCompleto: string
  biblia: string
}

// El lema traducido a los 9 idiomas del sitio + versión original griega y latina
export const traduccionesLema: TraduccionLema[] = [
  {
    locale: 'es',
    idioma: 'Español',
    lema: 'Alzad la mirada',
    versiculoCompleto:
      '«¿No decís vosotros: "Cuatro meses más y llega la siega"? Pues bien, yo os digo: Alzad la mirada y contemplad los campos, que ya están dorados para la siega.»',
    biblia: 'Sagrada Biblia, versión oficial de la Conferencia Episcopal Española',
  },
  {
    locale: 'en',
    idioma: 'English',
    lema: 'Lift up your eyes',
    versiculoCompleto:
      '«Do you not say, "Four months more and then the harvest"? I tell you, open your eyes and look at the fields! They are ripe for harvest.»',
    biblia: 'New International Version (NIV)',
  },
  {
    locale: 'it',
    idioma: 'Italiano',
    lema: 'Alzate gli occhi',
    versiculoCompleto:
      '«Non dite voi: "Ancora quattro mesi e poi viene la mietitura"? Ecco, io vi dico: alzate i vostri occhi e guardate i campi, che già biondeggiano per la mietitura.»',
    biblia: 'Bibbia CEI',
  },
  {
    locale: 'fr',
    idioma: 'Français',
    lema: 'Levez les yeux',
    versiculoCompleto:
      '«Ne dites-vous pas: "Encore quatre mois et viendra la moisson"? Eh bien, je vous dis: Levez les yeux et regardez les champs: ils sont blancs pour la moisson.»',
    biblia: 'Traduction liturgique officielle',
  },
  {
    locale: 'de',
    idioma: 'Deutsch',
    lema: 'Erhebt eure Augen',
    versiculoCompleto:
      '«Sagt ihr nicht: Noch vier Monate, dann kommt die Ernte? Seht, ich sage euch: Erhebt eure Augen und schaut, die Felder sind weiß, reif zur Ernte.»',
    biblia: 'Einheitsübersetzung',
  },
  {
    locale: 'pt',
    idioma: 'Português',
    lema: 'Levantai os olhos',
    versiculoCompleto:
      '«Não dizeis vós: "Quatro meses e virá a ceifa"? Pois eu digo-vos: Levantai os vossos olhos e vede como os campos estão brancos para a ceifa.»',
    biblia: 'Bíblia da Conferência Episcopal Portuguesa',
  },
  {
    locale: 'ca',
    idioma: 'Català',
    lema: 'Alceu els ulls',
    versiculoCompleto:
      '«No dieu vosaltres: "Encara falten quatre mesos perquè arribi la sega"? Jo us dic: Alceu els ulls i mireu els camps, que ja són rossos a punt per a la sega.»',
    biblia: 'Bíblia Catalana Interconfessional (BCI)',
  },
  {
    locale: 'gl',
    idioma: 'Galego',
    lema: 'Erguei os ollos',
    versiculoCompleto:
      '«Non dicides vós: "Catro meses máis e chega a sega"? Pois eu dígovos: Erguei os ollos e contemplade os campos, que xa están dourados para a sega.»',
    biblia: 'Biblia, edición Conferencia Episcopal de Galicia',
  },
  {
    locale: 'eu',
    idioma: 'Euskara',
    lema: 'Jaso begiak',
    versiculoCompleto:
      '«Ez duzue esaten: "Oraindik lau hilabete, eta uzta bilduko dugu"? Bada, nik diotsuet: Jaso begiak eta ikus itzazue soroak: horia dira uzta biltzeko.»',
    biblia: 'Elizen Arteko Biblia',
  },
  {
    locale: 'la',
    idioma: 'Latín (Vulgata)',
    lema: 'Levate oculos vestros',
    versiculoCompleto:
      '«Nonne vos dicitis: "Adhuc quattuor menses sunt et messis venit"? Ecce dico vobis: Levate oculos vestros et videte regiones, quia albae sunt iam ad messem.»',
    biblia: 'Vulgata Clementina (Vg)',
  },
  {
    locale: 'grc',
    idioma: 'Griego koiné',
    lema: 'Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν',
    versiculoCompleto:
      '«οὐχ ὑμεῖς λέγετε ὅτι Ἔτι τετράμηνός ἐστιν καὶ ὁ θερισμὸς ἔρχεται; ἰδοὺ λέγω ὑμῖν, ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν καὶ θεάσασθε τὰς χώρας ὅτι λευκαί εἰσιν πρὸς θερισμόν.»',
    biblia: 'Novum Testamentum Graece (Nestle-Aland 28 ed.)',
  },
]

export const lemaData = {
  lemaEs: 'Alzad la mirada',
  referenciaBiblica: 'Juan 4, 35',
  referenciaBiblicaLarga: 'Evangelio según san Juan, capítulo 4, versículo 35',
  origen: 'Nuevo Testamento',
  libro: 'Evangelio de Juan',
  capitulo: 4,
  versiculo: 35,

  // Contexto narrativo
  contextoPasaje: {
    escena: 'Jesús y la samaritana en el pozo de Sicar (Samaria)',
    descripcion:
      'Jesús, camino de Galilea, pasa por Samaria y se detiene junto al pozo de Jacob, cerca del pueblo de Sicar. Cansado del viaje, se sienta al borde del pozo alrededor del mediodía. Una mujer samaritana llega a sacar agua y se entabla un diálogo profundo sobre el agua viva, la verdadera adoración y la identidad mesiánica de Jesús. Cuando la mujer vuelve al pueblo para anunciar lo que ha vivido, los discípulos regresan con comida. Es entonces, viendo a los samaritanos acercarse en grupo hacia Jesús, cuando Él pronuncia las palabras: «Alzad la mirada y contemplad los campos, que ya están dorados para la siega» (Jn 4, 35).',
    significadoLiteral:
      'La frase usa una imagen agrícola familiar para los oyentes del siglo I: cuatro meses separan la siembra de la siega. Pero Jesús invierte el tiempo ordinario al ver a los samaritanos acercarse: la mies —la humanidad lista para recibir el Evangelio— ya está madura, aunque parezca demasiado pronto.',
    significadoEspiritual:
      'No es sólo una observación agrícola. Es una llamada a los discípulos —y a la Iglesia en cada época— a no posponer la misión, a no mirarse los pies, a reconocer que la humanidad entera está esperando el encuentro con Cristo. "Alzar la mirada" significa salir de uno mismo, del pesimismo, del "aún no es el momento", y entrar en la urgencia evangelizadora.',
  },
}

// Por qué la CEE lo eligió para esta visita en concreto
export interface RazonEleccion {
  titulo: string
  descripcion: string
}

export const razonesEleccion: RazonEleccion[] = [
  {
    titulo: 'Llamada a la esperanza en contexto secular',
    descripcion:
      'España vive un proceso de descristianización acelerado. "Alzad la mirada" invita a los católicos españoles —y a la sociedad entera— a no reducirse a la resignación o la apatía, sino a reconocer los signos de esperanza y la madurez de la misión evangelizadora incluso en un entorno percibido como hostil.',
  },
  {
    titulo: 'Continuidad con León XIV y la Doctrina Social',
    descripcion:
      'El lema conecta con el magisterio del Papa León XIV: mirar más allá del corto plazo económico, tecnológico y político para atender las necesidades reales de las personas. "Alzar la mirada" es el gesto que exige la cuestión social hoy frente a la inteligencia artificial, las migraciones y la desigualdad.',
  },
  {
    titulo: 'Dimensión samaritana y migrante',
    descripcion:
      'El pasaje ocurre en Samaria, fuera de Judea, con una mujer —extranjera— como primera misionera de su pueblo. La visita de León XIV incluye Canarias por su condición de puerta migratoria atlántica: el eco samaritano del pasaje cobra una fuerza pastoral muy concreta.',
  },
  {
    titulo: 'Simplicidad mariana y evangélica',
    descripcion:
      'La frase es breve, fácil de recordar y se puede interpretar en clave de oración personal ("mira hacia arriba, pide con esperanza") o comunitaria (mirar juntos la mies). La misma sencillez la hace traducible a 9 idiomas sin perder fuerza.',
  },
  {
    titulo: 'Imagen visual potente para la comunicación',
    descripcion:
      'A diferencia de lemas más abstractos, "Alzad la mirada" genera una imagen inmediata —levantar los ojos— que funciona como signo visual en cartelería, logotipos y audiovisuales. La CEE ha adoptado esta imagen como signo gráfico de la visita.',
  },
]

export const lemasPrevios = [
  {
    papa: 'Benedicto XVI',
    año: 2011,
    visita: 'JMJ Madrid',
    lema: 'Arraigados y edificados en Cristo, firmes en la fe (Col 2, 7)',
  },
  {
    papa: 'Benedicto XVI',
    año: 2010,
    visita: 'Santiago y Barcelona',
    lema: 'Peregrinos en la fe / Dedicación de la Sagrada Familia',
  },
  {
    papa: 'Juan Pablo II',
    año: 2003,
    visita: 'Madrid',
    lema: 'Canonización de cinco españoles',
  },
  {
    papa: 'Juan Pablo II',
    año: 1989,
    visita: 'JMJ Santiago de Compostela',
    lema: 'Yo soy el Camino, la Verdad y la Vida (Jn 14, 6)',
  },
  {
    papa: 'Juan Pablo II',
    año: 1982,
    visita: 'Primera visita a España',
    lema: 'Testigo de Jesucristo, Hijo de Dios vivo',
  },
]

export interface FaqLema {
  pregunta: string
  respuesta: string
}

export const faqLema: FaqLema[] = [
  {
    pregunta: '¿De dónde viene el lema "Alzad la mirada"?',
    respuesta:
      'El lema procede del Evangelio de Juan, capítulo 4, versículo 35 (Jn 4, 35). Es una frase pronunciada por Jesús a sus discípulos junto al pozo de Sicar, en Samaria, durante el encuentro con la samaritana. La versión íntegra es: «Alzad la mirada y contemplad los campos, que ya están dorados para la siega».',
  },
  {
    pregunta: '¿Qué significa "Alzad la mirada" en el contexto de la visita del Papa?',
    respuesta:
      'Es una llamada a la esperanza y a la misión evangelizadora. Invita a los españoles a reconocer que, a pesar de la descristianización o el pesimismo cultural, la humanidad está "madura para la siega": dispuesta a recibir el Evangelio. El lema anima a mirar más allá del corto plazo, salir de uno mismo y abrir los ojos a las necesidades reales del prójimo.',
  },
  {
    pregunta: '¿Quién eligió el lema "Alzad la mirada" para la visita papal?',
    respuesta:
      'Lo eligió la Conferencia Episcopal Española (CEE) en colaboración con las diócesis receptoras (Madrid, Barcelona, Canarias y Tenerife), y fue aprobado por la Secretaría de Estado de la Santa Sede antes de hacerse oficial. Es tradición que la conferencia episcopal del país receptor proponga el lema al Papa.',
  },
  {
    pregunta: '¿En qué pasaje de la Biblia aparece exactamente?',
    respuesta:
      'En el Evangelio de Juan, capítulo 4, versículo 35. El contexto es el diálogo de Jesús con la mujer samaritana en el pozo de Jacob, cerca del pueblo de Sicar. Tras hablar con la samaritana, Jesús se dirige a sus discípulos y les dice: «¿No decís vosotros: "Cuatro meses más y llega la siega"? Pues bien, yo os digo: Alzad la mirada y contemplad los campos, que ya están dorados para la siega».',
  },
  {
    pregunta: '¿Cómo se traduce "Alzad la mirada" a otros idiomas?',
    respuesta:
      'En inglés: "Lift up your eyes". En italiano: "Alzate gli occhi". En francés: "Levez les yeux". En alemán: "Erhebt eure Augen". En portugués: "Levantai os olhos". En catalán: "Alceu els ulls". En gallego: "Erguei os ollos". En euskera: "Jaso begiak". En latín (Vulgata): "Levate oculos vestros". En griego koiné (original): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".',
  },
  {
    pregunta: '¿Qué lemas tuvieron las visitas papales anteriores a España?',
    respuesta:
      'La JMJ de Madrid 2011 tuvo "Arraigados y edificados en Cristo, firmes en la fe" (Col 2, 7). La JMJ de Santiago 1989 tuvo "Yo soy el Camino, la Verdad y la Vida" (Jn 14, 6). La primera visita de Juan Pablo II en 1982 tuvo "Testigo de Jesucristo, Hijo de Dios vivo". Cada lema refleja el contexto histórico y eclesial del momento.',
  },
]
