import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import VaticanFlagBanner from '@/components/shared/VaticanFlagBanner'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props { locale: Locale }

type Fact = { label: string; value: string }
type Quote = { who: string; year: string; context: string; quote: string }
type FaqItem = { q: string; a: string }

type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  quickFacts: Fact[]
  whyHistoricTitle: string
  whyHistoricBody: string[]
  contextTitle: string
  contextBody: string
  precedentsTitle: string
  precedents: Quote[]
  programTitle: string
  programIntro: string
  programSteps: { time: string; act: string }[]
  themesTitle: string
  themesIntro: string
  themes: { title: string; body: string }[]
  protocolTitle: string
  protocolBody: string
  watchTitle: string
  watchBody: string
  faqTitle: string
  faq: FaqItem[]
  relatedTitle: string
  related: { href: string; text: string }[]
}

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Papa León XIV en el Congreso',
    title: 'El Papa León XIV en el Congreso de los Diputados · 8 junio 2026',
    subtitle: 'Primera vez en la historia que un Papa pronuncia un discurso en el Parlamento español. Sesión conjunta del Congreso y el Senado · 10:30 horas · Carrera de San Jerónimo.',
    intro: 'El lunes 8 de junio de 2026, a las 10:30, el Papa León XIV hablará ante el Pleno conjunto del Congreso de los Diputados y el Senado. Ningún Papa había intervenido antes en el Parlamento español; ocurrirá ahora, dentro del viaje del Pontífice a España (6-12 de junio de 2026). En esta página están los detalles del acto, el protocolo, los precedentes en otros parlamentos europeos y las preguntas más habituales sobre el discurso.',
    quickFacts: [
      { label: 'Fecha', value: 'Lunes 8 de junio de 2026' },
      { label: 'Hora', value: '10:30 (hora local Madrid)' },
      { label: 'Lugar', value: 'Congreso de los Diputados · Carrera de San Jerónimo' },
      { label: 'Tipo de sesión', value: 'Pleno conjunto Congreso + Senado' },
      { label: 'Acto previo', value: '09:30 audiencia con Pedro Sánchez en la Nunciatura' },
      { label: 'Carácter del discurso', value: 'Histórico · primera vez de un Papa en las Cortes Generales' },
    ],
    whyHistoricTitle: 'Por qué es un acto histórico',
    whyHistoricBody: [
      'Ningún Papa anterior había hablado en el Parlamento español. Juan Pablo II visitó España cinco veces entre 1982 y 2003 y nunca pisó el Congreso para pronunciar un discurso. Benedicto XVI hizo dos viajes (2010 y 2011) y tampoco. Francisco directamente no vino a España.',
      'León XIV cubre así un hueco que ya estaba lleno en otros países. Juan Pablo II habló en el Bundestag alemán, en la Asamblea Nacional polaca y en el Parlamento Europeo. Benedicto XVI lo hizo en Westminster Hall, otra vez en el Bundestag (2011) y en el Parlamento francés. Las Cortes Generales se suman ahora a esa lista.',
      'La sesión es conjunta del Congreso y del Senado. La Constitución reserva este formato para ocasiones de Estado muy concretas (la jura del Rey, declaraciones de guerra, mociones de gravedad excepcional). Es la primera vez que se usa para recibir a un jefe de Estado extranjero con dimensión religiosa universal.',
    ],
    contextTitle: 'Contexto político y eclesial',
    contextBody: 'El discurso llega en un momento delicado en la relación Iglesia-Estado en España. Están abiertos a la vez el debate sobre la financiación eclesiástica, el de la enseñanza religiosa y el de los abusos sexuales en el clero. La Santa Sede suele pedir en este tipo de intervenciones que el Papa se ciña a valores universales (dignidad humana, paz, migración, ecología integral) y evite meterse en discusiones partidistas. Las referencias inevitables son los discursos de Benedicto XVI en Westminster (2010) y de Francisco en Estrasburgo (2014).',
    precedentsTitle: 'Otros Papas en parlamentos europeos',
    precedents: [
      { who: 'Juan Pablo II', year: '1996', context: 'Bundestag alemán · Berlín', quote: 'Habló de la unidad europea, la libertad de conciencia y los desafíos de la reunificación alemana.' },
      { who: 'Benedicto XVI', year: '2010', context: 'Westminster Hall · Londres', quote: 'Disertó sobre el papel de la religión en el debate político y los fundamentos éticos de la democracia.' },
      { who: 'Benedicto XVI', year: '2011', context: 'Bundestag alemán · Berlín', quote: 'Habló sobre los fundamentos del derecho positivo y la ecología humana.' },
      { who: 'Francisco', year: '2014', context: 'Parlamento Europeo · Estrasburgo', quote: 'Discurso sobre los derechos humanos, la centralidad de la persona y la dignidad del trabajo.' },
      { who: 'León XIV', year: '2026', context: 'Congreso de los Diputados · Madrid', quote: 'Primer Papa en hablar ante las Cortes Generales españolas en sesión conjunta Congreso + Senado.' },
    ],
    programTitle: 'Programa del 8 de junio',
    programIntro: 'El lunes es la jornada más institucional de la visita. Incluye cinco actos consecutivos en Madrid:',
    programSteps: [
      { time: '09:30', act: 'Audiencia privada con Pedro Sánchez en la Nunciatura Apostólica' },
      { time: '10:30', act: 'Discurso al Pleno conjunto del Congreso y el Senado · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Encuentro con los obispos españoles en la sede de la CEE' },
      { time: '17:00', act: 'Oración mariana en la Catedral de la Almudena (ofrenda floral)' },
      { time: '19:00', act: 'Encuentro diocesano en el Estadio Santiago Bernabéu' },
    ],
    themesTitle: 'De qué hablará probablemente',
    themesIntro: 'A partir de lo que ha ido diciendo León XIV en este primer año de pontificado, hay cinco asuntos que es muy probable que aparezcan en el discurso:',
    themes: [
      { title: 'Inteligencia artificial y dignidad de la persona', body: 'Es el tema central de su pontificado y el corazón de su primera encíclica, Magnifica humanitas (25 de mayo de 2026). Pedirá una gobernanza internacional de la IA que ponga a la persona en el centro.' },
      { title: 'Migración', body: 'Enlaza con sus visitas de los días siguientes a Arguineguín (Gran Canaria) y al centro Las Raíces (Tenerife). La frase que ya ha repetido varias veces: «ningún muro es más alto que la dignidad humana».' },
      { title: 'Doctrina social y desigualdad', body: 'Continúa la línea de Rerum Novarum, que cumple 135 años en 2026. Hablará de precariedad laboral, brecha de rentas y cómo el trabajo se está transformando con lo digital.' },
      { title: 'Paz y desarme', body: 'Su «paz desarmada y desarmante», dirigida sobre todo a Europa. Lo dirá en un contexto de guerra en Ucrania, conflicto en Gaza y rearme generalizado.' },
      { title: 'Ecología integral', body: 'Retomará la Laudato si’ de Francisco para vincular justicia climática y justicia social.' },
    ],
    protocolTitle: 'Cómo es el acto',
    protocolBody: 'La sesión la convocan formalmente las Mesas conjuntas del Congreso y del Senado, presididas por Francina Armengol y Pedro Rollán. Los dos recibirán al Papa en la entrada de la Carrera de San Jerónimo. El discurso se pronuncia desde el atril central del hemiciclo del Congreso, ampliado al Senado por pantallas. Durará alrededor de 50 minutos. No hay turno de réplica de los grupos parlamentarios. Después, recepción breve en el Salón de los Pasos Perdidos.',
    watchTitle: 'Cómo seguirlo en directo',
    watchBody: 'La sesión se retransmite en directo por el Canal Parlamento del Congreso, por TVE (La 1 y Canal 24 Horas) y por las plataformas oficiales del Vaticano (Vatican Media en YouTube, vaticannews.va). En radio se puede seguir por RNE y por la COPE, las dos con cobertura especial. Las cadenas autonómicas emiten resúmenes y conexiones en directo por la mañana. El texto íntegro del discurso aparecerá en vatican.va en cuanto se pronuncie.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Es la primera vez que un Papa habla en el Congreso español?', a: 'Sí. Ningún Pontífice anterior se había dirigido al Pleno del Congreso de los Diputados o del Senado de España. Juan Pablo II y Benedicto XVI realizaron varias visitas pero no intervinieron en las Cortes.' },
      { q: '¿Por qué se celebra una sesión conjunta del Congreso y el Senado?', a: 'La sesión conjunta es la modalidad institucional más solemne del Parlamento español, reservada para grandes ocasiones de Estado. Recibir al Papa con esa fórmula sitúa el acto al máximo nivel protocolario.' },
      { q: '¿De qué hablará el Papa León XIV en su discurso?', a: 'No se ha hecho público el texto previo. Sobre la base de sus prioridades programáticas, los temas más probables son: inteligencia artificial y dignidad humana, migración, doctrina social, paz y desarme, y ecología integral.' },
      { q: '¿Puede el público asistir al discurso?', a: 'No. La sesión es estrictamente parlamentaria y solo asisten diputados, senadores, miembros del Gobierno, cuerpo diplomático e invitados institucionales. Se retransmite en directo por Canal Parlamento y TVE.' },
      { q: '¿A qué hora exacta comienza?', a: 'La sesión está convocada para las 10:30 del lunes 8 de junio de 2026. El Papa llega previamente de la Nunciatura tras su audiencia con el presidente del Gobierno a las 9:30.' },
      { q: '¿Pueden intervenir los grupos parlamentarios después del discurso?', a: 'No. El protocolo previsto no incluye turno de intervenciones de los grupos. El Papa pronuncia su discurso y a continuación se celebra una breve recepción en el Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/programa', text: 'Programa completo del viaje León XIV' },
      { href: '/ciudades/madrid', text: 'Madrid · ciudad anfitriona' },
      { href: '/papa-bernabeu', text: 'Encuentro diocesano en el Bernabéu (8 jun 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · primera encíclica' },
      { href: '/historia-visitas-papales', text: 'Historia de las visitas papales a España' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Pope Leo XIV at the Spanish Congress',
    title: 'Pope Leo XIV at the Congress of Deputies · 8 June 2026',
    subtitle: 'First time in history that a Pope delivers a speech in the Spanish Parliament. Joint session of Congress and Senate · 10:30 · Carrera de San Jerónimo, Madrid.',
    intro: 'On Monday 8 June 2026, at 10:30, Pope Leo XIV will speak to the joint plenary session of the Spanish Congress of Deputies and Senate. No Pope had ever addressed the Spanish Parliament before; it will happen now, inside the Pope’s journey to Spain (6-12 June 2026). This page brings together the details of the event, the protocol, what other Popes did in European parliaments and the questions readers ask most often.',
    quickFacts: [
      { label: 'Date', value: 'Monday 8 June 2026' },
      { label: 'Time', value: '10:30 (Madrid local time)' },
      { label: 'Venue', value: 'Congress of Deputies · Carrera de San Jerónimo' },
      { label: 'Session type', value: 'Joint plenary Congress + Senate' },
      { label: 'Previous act', value: '09:30 audience with Pedro Sánchez at the Apostolic Nunciature' },
      { label: 'Character', value: 'Historic · first time of a Pope at the Spanish Cortes Generales' },
    ],
    whyHistoricTitle: 'Why it is a historic event',
    whyHistoricBody: [
      'No Pope had ever spoken to the Spanish Parliament before. John Paul II visited Spain five times between 1982 and 2003 and never delivered a speech in Congress. Benedict XVI made two trips (2010 and 2011) and did not either. Francis never came to Spain.',
      'With this speech Leo XIV closes a gap that other countries had already filled. John Paul II spoke at the German Bundestag, the Polish National Assembly and the European Parliament. Benedict XVI did the same at Westminster Hall, the Bundestag (in 2011) and the French Parliament. The Spanish Cortes Generales now join that list.',
      'The session is a joint sitting of Congress and Senate. The Spanish Constitution keeps this format for very specific state occasions, like the swearing in of a new King, declarations of war or motions of exceptional gravity. This will be the first time it is used to receive a foreign head of state with a universal religious role.',
    ],
    contextTitle: 'Political and ecclesial context',
    contextBody: 'The speech lands at a delicate moment for Church-State relations in Spain. Three debates are open at once: how the Catholic Church is funded, the place of religious education in schools and the handling of sexual abuse in the clergy. In speeches like this one the Holy See usually asks the Pope to stick to universal values (human dignity, peace, migration, integral ecology) and stay away from partisan ground. The two natural references are Benedict XVI at Westminster (2010) and Francis at Strasbourg (2014).',
    precedentsTitle: 'Other Popes in European parliaments',
    precedents: [
      { who: 'John Paul II', year: '1996', context: 'German Bundestag · Berlin', quote: 'He spoke of European unity, freedom of conscience and the challenges of German reunification.' },
      { who: 'Benedict XVI', year: '2010', context: 'Westminster Hall · London', quote: 'He addressed the role of religion in political debate and the ethical foundations of democracy.' },
      { who: 'Benedict XVI', year: '2011', context: 'German Bundestag · Berlin', quote: 'He spoke on the foundations of positive law and human ecology.' },
      { who: 'Francis', year: '2014', context: 'European Parliament · Strasbourg', quote: 'Speech on human rights, the centrality of the person and the dignity of work.' },
      { who: 'Leo XIV', year: '2026', context: 'Congress of Deputies · Madrid', quote: 'First Pope to speak to the Spanish Cortes Generales in a joint session Congress + Senate.' },
    ],
    programTitle: 'Programme for 8 June',
    programIntro: 'Monday is the most institutional day of the visit. It includes five consecutive acts in Madrid:',
    programSteps: [
      { time: '09:30', act: 'Private audience with Pedro Sánchez at the Apostolic Nunciature' },
      { time: '10:30', act: 'Speech to the joint Plenary of Congress and Senate · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Meeting with Spanish bishops at the headquarters of the Episcopal Conference' },
      { time: '17:00', act: 'Marian prayer at the Almudena Cathedral (floral offering)' },
      { time: '19:00', act: 'Diocesan gathering at the Santiago Bernabéu Stadium' },
    ],
    themesTitle: 'What he will probably talk about',
    themesIntro: 'Based on what Leo XIV has been saying during his first year as Pope, five themes are very likely to appear in the speech:',
    themes: [
      { title: 'Artificial intelligence and human dignity', body: 'This is the central theme of his pontificate and the heart of his first encyclical, Magnifica humanitas (25 May 2026). He will call for an international governance of AI that puts the person at the centre.' },
      { title: 'Migration', body: 'It connects directly with his visits in the days after, to Arguineguín (Gran Canaria) and the Las Raíces centre (Tenerife). He has already repeated this idea: "no wall is higher than human dignity".' },
      { title: 'Social doctrine and inequality', body: 'He will pick up the line of Rerum Novarum, which turns 135 in 2026. Expect mentions of precarious work, income inequality and how digital technologies are changing labour.' },
      { title: 'Peace and disarmament', body: 'His "unarmed and disarming peace", aimed especially at Europe, against the background of war in Ukraine, conflict in Gaza and widespread rearmament.' },
      { title: 'Integral ecology', body: 'He will continue Francis’s Laudato si’ and tie climate justice to social justice.' },
    ],
    protocolTitle: 'How the event works',
    protocolBody: 'The joint Bureaus of Congress and Senate, chaired by Francina Armengol and Pedro Rollán, formally convene the session. Both will welcome the Pope at the main entrance on Carrera de San Jerónimo. He will speak from the central lectern of the Congress hemicycle, with the speech relayed to the Senate via screens. It is expected to last around 50 minutes. There is no reply turn for the parliamentary groups. A short reception follows in the Salón de los Pasos Perdidos.',
    watchTitle: 'How to follow it live',
    watchBody: 'The session goes out live on Canal Parlamento, on TVE (La 1 and Canal 24 Horas) and on the official Vatican platforms (Vatican Media on YouTube, vaticannews.va). Radio: RNE and COPE will offer special coverage. Regional Spanish channels broadcast summaries and live cut-ins during the morning. The full text of the speech will be posted on vatican.va as soon as it has been delivered.',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Is it the first time a Pope speaks at the Spanish Congress?', a: 'Yes. No previous Pontiff had addressed the Plenary of the Spanish Congress of Deputies or the Senate. John Paul II and Benedict XVI made several visits but did not intervene at the Cortes.' },
      { q: 'Why is a joint session of Congress and Senate held?', a: 'The joint session is the most solemn institutional modality of the Spanish Parliament, reserved for great state occasions. Receiving the Pope with this formula places the act at the highest protocol level.' },
      { q: 'What will Pope Leo XIV speak about?', a: 'The previous text has not been made public. Based on his programmatic priorities, the most probable themes are: artificial intelligence and human dignity, migration, social doctrine, peace and disarmament, and integral ecology.' },
      { q: 'Can the public attend the speech?', a: 'No. The session is strictly parliamentary and only deputies, senators, members of the Government, the diplomatic corps and institutional guests attend. It is broadcast live by Canal Parlamento and TVE.' },
      { q: 'What is the exact start time?', a: 'The session is convened for 10:30 on Monday 8 June 2026. The Pope arrives previously from the Nunciature after his audience with the President of the Government at 09:30.' },
      { q: 'Can the parliamentary groups speak after the address?', a: 'No. The expected protocol does not include a turn of interventions from the groups. The Pope delivers his speech and then a brief reception is held at the Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Related pages',
    related: [
      { href: '/programa', text: 'Full schedule of Leo XIV’s journey' },
      { href: '/ciudades/madrid', text: 'Madrid · host city' },
      { href: '/papa-bernabeu', text: 'Diocesan gathering at the Bernabéu (8 Jun 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · first encyclical' },
      { href: '/historia-visitas-papales', text: 'History of papal visits to Spain' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Papa Leone XIV al Congresso spagnolo',
    title: 'Papa Leone XIV al Congresso dei Deputati · 8 giugno 2026',
    subtitle: 'Per la prima volta nella storia un Papa pronuncia un discorso al Parlamento spagnolo. Seduta congiunta del Congresso e del Senato · ore 10:30 · Carrera de San Jerónimo, Madrid.',
    intro: 'Lunedì 8 giugno 2026, alle ore 10:30, Papa Leone XIV pronuncerà un discorso alla seduta plenaria congiunta del Congresso dei Deputati e del Senato spagnolo. È la prima volta che un Pontefice si rivolge al Parlamento spagnolo, un traguardo istituzionale all’interno del Viaggio Apostolico in Spagna (6-12 giugno 2026). Questa pagina raccoglie i dettagli dell’atto, il protocollo, i precedenti con altre visite papali a parlamenti europei e le domande frequenti sul discorso.',
    quickFacts: [
      { label: 'Data', value: 'Lunedì 8 giugno 2026' },
      { label: 'Ora', value: '10:30 (ora locale di Madrid)' },
      { label: 'Sede', value: 'Congresso dei Deputati · Carrera de San Jerónimo' },
      { label: 'Tipo di seduta', value: 'Plenaria congiunta Congresso + Senato' },
      { label: 'Atto precedente', value: '09:30 udienza con Pedro Sánchez alla Nunziatura Apostolica' },
      { label: 'Carattere', value: 'Storico · prima volta di un Papa alle Cortes Generales spagnole' },
    ],
    whyHistoricTitle: 'Perché è un atto storico',
    whyHistoricBody: [
      'Nessun Pontefice precedente si era rivolto al Parlamento spagnolo nell’esercizio del suo ministero. Giovanni Paolo II visitò la Spagna cinque volte tra il 1982 e il 2003, ma non pronunciò mai un discorso al Congresso. Anche Benedetto XVI non intervenne alle Cortes nei suoi due viaggi (2010 e 2011). Francesco non visitò la Spagna.',
      'Leone XIV inaugura così una tradizione che esisteva in altri paesi europei: Giovanni Paolo II parlò al Bundestag tedesco, all’Assemblea nazionale polacca e al Parlamento europeo. Benedetto XVI lo fece a Westminster Hall (Regno Unito), al Bundestag (2011) e al Parlamento francese. L’intervento di Leone XIV al Congresso spagnolo colloca per la prima volta le Cortes Generales in quella stessa categoria.',
      'L’atto si tiene in seduta congiunta del Congresso dei Deputati e del Senato, modalità costituzionalmente riservata a grandi occasioni di Stato (giuramento dei Re, dichiarazioni di guerra, mozioni di eccezionale gravità). È la prima volta che tale modalità viene usata per ricevere un capo di Stato estero con dimensione religiosa universale.',
    ],
    contextTitle: 'Contesto politico ed ecclesiale',
    contextBody: 'Il discorso di Papa Leone XIV al Congresso si colloca in un momento di particolare sensibilità sui rapporti Chiesa-Stato in Spagna, con dibattiti aperti su finanziamento ecclesiastico, insegnamento religioso e abusi sessuali nel clero. La Santa Sede ha tradizionalmente chiesto che questi interventi si concentrino su valori universali —dignità umana, pace, migrazione, ecologia integrale— evitando posizioni partitiche. I precedenti di Benedetto XVI a Westminster (2010) e Francesco a Strasburgo (2014) sono riferimenti obbligati.',
    precedentsTitle: 'Precedenti · Papi nei parlamenti europei',
    precedents: [
      { who: 'Giovanni Paolo II', year: '1996', context: 'Bundestag tedesco · Berlino', quote: 'Parlò dell’unità europea, della libertà di coscienza e delle sfide della riunificazione tedesca.' },
      { who: 'Benedetto XVI', year: '2010', context: 'Westminster Hall · Londra', quote: 'Dissertò sul ruolo della religione nel dibattito politico e sui fondamenti etici della democrazia.' },
      { who: 'Benedetto XVI', year: '2011', context: 'Bundestag tedesco · Berlino', quote: 'Parlò dei fondamenti del diritto positivo e dell’ecologia umana.' },
      { who: 'Francesco', year: '2014', context: 'Parlamento europeo · Strasburgo', quote: 'Discorso sui diritti umani, sulla centralità della persona e sulla dignità del lavoro.' },
      { who: 'Leone XIV', year: '2026', context: 'Congresso dei Deputati · Madrid', quote: 'Primo Papa a parlare alle Cortes Generales spagnole in seduta congiunta Congresso + Senato.' },
    ],
    programTitle: 'Programma dell’8 giugno',
    programIntro: 'Il lunedì è la giornata più istituzionale della visita. Include cinque atti consecutivi a Madrid:',
    programSteps: [
      { time: '09:30', act: 'Udienza privata con Pedro Sánchez alla Nunziatura Apostolica' },
      { time: '10:30', act: 'Discorso alla Plenaria congiunta di Congresso e Senato · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Incontro con i vescovi spagnoli alla sede della Conferenza Episcopale' },
      { time: '17:00', act: 'Preghiera mariana alla Cattedrale dell’Almudena (offerta floreale)' },
      { time: '19:00', act: 'Incontro diocesano allo Stadio Santiago Bernabéu' },
    ],
    themesTitle: 'Possibili temi del discorso',
    themesIntro: 'Sulla base delle priorità programmatiche annunciate da Leone XIV fin dall’inizio del suo pontificato (maggio 2025), il discorso potrebbe affrontare cinque grandi assi:',
    themes: [
      { title: 'Intelligenza artificiale e dignità umana', body: 'Tema centrale del pontificato e asse della sua prima enciclica «Magnifica humanitas» (25 maggio 2026). Appello a una governance internazionale dell’IA che rispetti la persona.' },
      { title: 'Migrazione come prova etica del secolo', body: 'Connessa con la sua successiva visita ad Arguineguín (Gran Canaria) e al centro Las Raíces (Tenerife). «Nessun muro è più alto della dignità umana».' },
      { title: 'Dottrina sociale e disuguaglianza', body: 'Continuità della Rerum Novarum (135° anniversario nel 2026). Precarietà lavorativa, divario di reddito, sfide del lavoro nell’era digitale.' },
      { title: 'Pace e disarmo', body: 'La sua «pace disarmata e disarmante» rivolta in particolare all’Europa in un contesto di guerra in Ucraina, conflitto a Gaza e riarmo generalizzato.' },
      { title: 'Ecologia integrale', body: 'Continuità della Laudato si’ di Francesco. Legame tra giustizia climatica e giustizia sociale.' },
    ],
    protocolTitle: 'Protocollo dell’atto',
    protocolBody: 'La seduta è convocata formalmente dagli Uffici di Presidenza congiunti del Congresso e del Senato, presieduti dalla presidente del Congresso Francina Armengol e dal presidente del Senato Pedro Rollán. Il Papa sarà ricevuto all’ingresso principale della Carrera de San Jerónimo da entrambi i presidenti. Il discorso si pronuncia dal podio centrale dell’aula del Congresso, esteso al Senato tramite schermi. La durata prevista è di circa 50 minuti, senza turno di interventi dei gruppi parlamentari. Dopo il discorso, breve ricevimento al Salón de los Pasos Perdidos.',
    watchTitle: 'Come seguire il discorso in diretta',
    watchBody: 'La seduta è trasmessa in diretta dal Canale Parlamento del Congresso, da TVE (La 1 e Canal 24 Horas) e dalle piattaforme ufficiali del Vaticano (Vatican Media YouTube, vaticannews.va). Radio: RNE e COPE con copertura speciale. I canali autonomici trasmetteranno la mattina riassunti e collegamenti in diretta. I testi integrali del discorso saranno pubblicati su vatican.va una volta pronunciati.',
    faqTitle: 'Domande frequenti',
    faq: [
      { q: 'È la prima volta che un Papa parla al Congresso spagnolo?', a: 'Sì. Nessun Pontefice precedente si era rivolto alla Plenaria del Congresso dei Deputati o del Senato spagnolo. Giovanni Paolo II e Benedetto XVI fecero diverse visite ma non intervennero alle Cortes.' },
      { q: 'Perché si tiene una seduta congiunta di Congresso e Senato?', a: 'La seduta congiunta è la modalità istituzionale più solenne del Parlamento spagnolo, riservata a grandi occasioni di Stato. Ricevere il Papa con questa formula colloca l’atto al massimo livello protocollare.' },
      { q: 'Di cosa parlerà Papa Leone XIV?', a: 'Il testo previo non è stato reso pubblico. Sulla base delle sue priorità programmatiche, i temi più probabili sono: intelligenza artificiale e dignità umana, migrazione, dottrina sociale, pace e disarmo, ed ecologia integrale.' },
      { q: 'Il pubblico può assistere al discorso?', a: 'No. La seduta è strettamente parlamentare e vi assistono solo deputati, senatori, membri del Governo, corpo diplomatico e ospiti istituzionali. È trasmessa in diretta dal Canale Parlamento e da TVE.' },
      { q: 'A che ora esatta inizia?', a: 'La seduta è convocata per le 10:30 di lunedì 8 giugno 2026. Il Papa arriva precedentemente dalla Nunziatura dopo la sua udienza con il presidente del Governo alle 09:30.' },
      { q: 'I gruppi parlamentari possono intervenire dopo il discorso?', a: 'No. Il protocollo previsto non include un turno di interventi dei gruppi. Il Papa pronuncia il suo discorso e poi si tiene un breve ricevimento al Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Pagine correlate',
    related: [
      { href: '/programa', text: 'Programma completo del viaggio di Leone XIV' },
      { href: '/ciudades/madrid', text: 'Madrid · città ospitante' },
      { href: '/papa-bernabeu', text: 'Incontro diocesano al Bernabéu (8 giu 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · prima enciclica' },
      { href: '/historia-visitas-papales', text: 'Storia delle visite papali in Spagna' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Pape Léon XIV au Parlement espagnol',
    title: 'Le Pape Léon XIV au Congrès des députés · 8 juin 2026',
    subtitle: 'Première fois dans l’histoire qu’un Pape prononce un discours au Parlement espagnol. Séance conjointe du Congrès et du Sénat · 10h30 · Carrera de San Jerónimo, Madrid.',
    intro: 'Le lundi 8 juin 2026 à 10h30, le Pape Léon XIV prononcera un discours devant la séance plénière conjointe du Congrès des députés et du Sénat espagnol. C’est la première fois qu’un Pontife s’adresse au Parlement espagnol, jalon institutionnel inscrit dans le Voyage apostolique en Espagne (6-12 juin 2026). Cette page rassemble les détails de l’acte, le protocole, les précédents avec d’autres visites papales aux parlements européens et les questions fréquentes sur le discours.',
    quickFacts: [
      { label: 'Date', value: 'Lundi 8 juin 2026' },
      { label: 'Heure', value: '10h30 (heure locale Madrid)' },
      { label: 'Lieu', value: 'Congrès des députés · Carrera de San Jerónimo' },
      { label: 'Type de séance', value: 'Plénière conjointe Congrès + Sénat' },
      { label: 'Acte précédent', value: '9h30 audience avec Pedro Sánchez à la Nonciature apostolique' },
      { label: 'Caractère', value: 'Historique · première fois d’un Pape aux Cortes Generales espagnoles' },
    ],
    whyHistoricTitle: 'Pourquoi c’est un acte historique',
    whyHistoricBody: [
      'Aucun Pontife antérieur ne s’était adressé au Parlement espagnol dans l’exercice de son ministère. Jean-Paul II visita l’Espagne cinq fois entre 1982 et 2003, mais ne prononça jamais de discours au Congrès. Benoît XVI n’intervint pas non plus aux Cortes lors de ses deux voyages (2010 et 2011). François ne visita pas l’Espagne.',
      'Léon XIV inaugure ainsi une tradition existante dans d’autres pays européens : Jean-Paul II parla au Bundestag allemand, à l’Assemblée nationale polonaise et au Parlement européen. Benoît XVI le fit à Westminster Hall (Royaume-Uni), au Bundestag (2011) et au Parlement français. L’intervention de Léon XIV au Congrès espagnol place pour la première fois les Cortes Generales dans cette même catégorie.',
      'L’acte se tient en séance conjointe du Congrès des députés et du Sénat, modalité réservée constitutionnellement aux grandes occasions d’État (serment des Rois, déclarations de guerre, motions de gravité exceptionnelle). C’est la première fois que cette modalité est utilisée pour recevoir un chef d’État étranger à dimension religieuse universelle.',
    ],
    contextTitle: 'Contexte politique et ecclésial',
    contextBody: 'Le discours du Pape Léon XIV au Congrès intervient dans un moment de sensibilité particulière sur les relations Église-État en Espagne, avec des débats ouverts sur le financement ecclésiastique, l’enseignement religieux et les abus sexuels dans le clergé. Le Saint-Siège a traditionnellement demandé que ces interventions se concentrent sur des valeurs universelles —dignité humaine, paix, migration, écologie intégrale— et évitent les positions partisanes. Les précédents de Benoît XVI à Westminster (2010) et François à Strasbourg (2014) sont des références obligées.',
    precedentsTitle: 'Précédents · Papes aux parlements européens',
    precedents: [
      { who: 'Jean-Paul II', year: '1996', context: 'Bundestag allemand · Berlin', quote: 'Il parla de l’unité européenne, de la liberté de conscience et des défis de la réunification allemande.' },
      { who: 'Benoît XVI', year: '2010', context: 'Westminster Hall · Londres', quote: 'Il aborda le rôle de la religion dans le débat politique et les fondements éthiques de la démocratie.' },
      { who: 'Benoît XVI', year: '2011', context: 'Bundestag allemand · Berlin', quote: 'Il parla des fondements du droit positif et de l’écologie humaine.' },
      { who: 'François', year: '2014', context: 'Parlement européen · Strasbourg', quote: 'Discours sur les droits humains, la centralité de la personne et la dignité du travail.' },
      { who: 'Léon XIV', year: '2026', context: 'Congrès des députés · Madrid', quote: 'Premier Pape à s’adresser aux Cortes Generales espagnoles en séance conjointe Congrès + Sénat.' },
    ],
    programTitle: 'Programme du 8 juin',
    programIntro: 'Le lundi est la journée la plus institutionnelle de la visite. Elle comprend cinq actes consécutifs à Madrid :',
    programSteps: [
      { time: '9h30', act: 'Audience privée avec Pedro Sánchez à la Nonciature apostolique' },
      { time: '10h30', act: 'Discours à la Plénière conjointe du Congrès et du Sénat · Carrera de San Jerónimo' },
      { time: '12h30', act: 'Rencontre avec les évêques espagnols au siège de la Conférence épiscopale' },
      { time: '17h00', act: 'Prière mariale à la cathédrale de l’Almudena (offrande florale)' },
      { time: '19h00', act: 'Rencontre diocésaine au stade Santiago Bernabéu' },
    ],
    themesTitle: 'Thèmes possibles du discours',
    themesIntro: 'Sur la base des priorités programmatiques annoncées par Léon XIV depuis le début de son pontificat (mai 2025), le discours pourrait aborder cinq grands axes :',
    themes: [
      { title: 'Intelligence artificielle et dignité humaine', body: 'Thème central du pontificat et axe de sa première encyclique « Magnifica humanitas » (25 mai 2026). Appel à une gouvernance internationale de l’IA respectant la personne.' },
      { title: 'Migration comme épreuve éthique du siècle', body: 'Connecté à sa visite ultérieure à Arguineguín (Grande Canarie) et au centre Las Raíces (Ténérife). « Aucun mur n’est plus haut que la dignité humaine ».' },
      { title: 'Doctrine sociale et inégalité', body: 'Continuité de Rerum Novarum (135e anniversaire en 2026). Précarité du travail, écart de revenus, défis du travail à l’ère numérique.' },
      { title: 'Paix et désarmement', body: 'Sa « paix désarmée et désarmante » adressée particulièrement à l’Europe dans un contexte de guerre en Ukraine, conflit à Gaza et réarmement généralisé.' },
      { title: 'Écologie intégrale', body: 'Continuité de Laudato si’ de François. Lien entre justice climatique et justice sociale.' },
    ],
    protocolTitle: 'Protocole de l’acte',
    protocolBody: 'La séance est formellement convoquée par les Bureaux conjoints du Congrès et du Sénat, présidés par la présidente du Congrès Francina Armengol et le président du Sénat Pedro Rollán. Le Pape sera reçu à l’entrée principale de la Carrera de San Jerónimo par les deux présidents. Le discours se prononce depuis le pupitre central de l’hémicycle du Congrès, étendu au Sénat par des écrans. La durée prévue est d’environ 50 minutes, sans tour d’interventions des groupes parlementaires. Après le discours, brève réception au Salón de los Pasos Perdidos.',
    watchTitle: 'Comment suivre le discours en direct',
    watchBody: 'La séance est retransmise en direct par Canal Parlamento du Congrès, par TVE (La 1 et Canal 24 Horas) et par les plateformes officielles du Vatican (Vatican Media YouTube, vaticannews.va). Radio : RNE et COPE avec couverture spéciale. Les chaînes régionales diffuseront le matin des résumés et des connexions en direct. Les textes intégraux du discours seront publiés sur vatican.va une fois prononcés.',
    faqTitle: 'Questions fréquentes',
    faq: [
      { q: 'Est-ce la première fois qu’un Pape parle au Congrès espagnol ?', a: 'Oui. Aucun Pontife antérieur ne s’était adressé à la Plénière du Congrès des députés ou du Sénat espagnol. Jean-Paul II et Benoît XVI firent plusieurs visites mais n’intervinrent pas aux Cortes.' },
      { q: 'Pourquoi une séance conjointe du Congrès et du Sénat ?', a: 'La séance conjointe est la modalité institutionnelle la plus solennelle du Parlement espagnol, réservée aux grandes occasions d’État. Recevoir le Pape avec cette formule place l’acte au plus haut niveau protocolaire.' },
      { q: 'De quoi parlera le Pape Léon XIV ?', a: 'Le texte préalable n’a pas été rendu public. Sur la base de ses priorités programmatiques, les thèmes les plus probables sont : intelligence artificielle et dignité humaine, migration, doctrine sociale, paix et désarmement, et écologie intégrale.' },
      { q: 'Le public peut-il assister au discours ?', a: 'Non. La séance est strictement parlementaire et n’y assistent que députés, sénateurs, membres du Gouvernement, corps diplomatique et invités institutionnels. Elle est retransmise en direct par Canal Parlamento et TVE.' },
      { q: 'À quelle heure exacte commence-t-il ?', a: 'La séance est convoquée pour 10h30 le lundi 8 juin 2026. Le Pape arrive auparavant de la Nonciature après son audience avec le président du Gouvernement à 9h30.' },
      { q: 'Les groupes parlementaires peuvent-ils intervenir après le discours ?', a: 'Non. Le protocole prévu n’inclut pas de tour d’interventions des groupes. Le Pape prononce son discours puis une brève réception se tient au Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Pages liées',
    related: [
      { href: '/programa', text: 'Programme complet du voyage de Léon XIV' },
      { href: '/ciudades/madrid', text: 'Madrid · ville hôte' },
      { href: '/papa-bernabeu', text: 'Rencontre diocésaine au Bernabéu (8 juin 19h)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · première encyclique' },
      { href: '/historia-visitas-papales', text: 'Histoire des visites papales en Espagne' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Papst Leo XIV. im spanischen Parlament',
    title: 'Papst Leo XIV. im Abgeordnetenkongress · 8. Juni 2026',
    subtitle: 'Erstmals in der Geschichte hält ein Papst eine Rede vor dem spanischen Parlament. Gemeinsame Sitzung von Kongress und Senat · 10:30 Uhr · Carrera de San Jerónimo, Madrid.',
    intro: 'Am Montag, dem 8. Juni 2026, um 10:30 Uhr wird Papst Leo XIV. eine Rede vor der gemeinsamen Plenarsitzung des spanischen Abgeordnetenkongresses und des Senats halten. Es ist das erste Mal, dass sich ein Pontifex an das spanische Parlament wendet, ein institutioneller Meilenstein im Rahmen der Apostolischen Reise nach Spanien (6.-12. Juni 2026). Diese Seite sammelt die Details des Akts, das Protokoll, die Präzedenzfälle mit anderen Papstbesuchen in europäischen Parlamenten und die häufig gestellten Fragen zur Rede.',
    quickFacts: [
      { label: 'Datum', value: 'Montag, 8. Juni 2026' },
      { label: 'Uhrzeit', value: '10:30 Uhr (Ortszeit Madrid)' },
      { label: 'Ort', value: 'Abgeordnetenkongress · Carrera de San Jerónimo' },
      { label: 'Sitzungsart', value: 'Gemeinsames Plenum Kongress + Senat' },
      { label: 'Vorheriger Akt', value: '09:30 Audienz mit Pedro Sánchez in der Apostolischen Nuntiatur' },
      { label: 'Charakter', value: 'Historisch · erstmals ein Papst in den spanischen Cortes Generales' },
    ],
    whyHistoricTitle: 'Warum es ein historischer Akt ist',
    whyHistoricBody: [
      'Kein vorheriger Pontifex hatte sich im Rahmen seines Amtes an das spanische Parlament gewandt. Johannes Paul II. besuchte Spanien zwischen 1982 und 2003 fünfmal, hielt aber nie eine Rede im Kongress. Auch Benedikt XVI. sprach bei seinen beiden Reisen (2010 und 2011) nicht vor den Cortes. Franziskus besuchte Spanien nicht.',
      'Leo XIV. eröffnet damit eine Tradition, die in anderen europäischen Ländern bereits bestand: Johannes Paul II. sprach im Deutschen Bundestag, in der polnischen Nationalversammlung und im Europäischen Parlament. Benedikt XVI. tat es in Westminster Hall (Vereinigtes Königreich), im Bundestag (2011) und im französischen Parlament. Leo XIV.s Intervention im spanischen Kongress stellt die Cortes Generales erstmals in dieselbe Kategorie.',
      'Der Akt findet in einer gemeinsamen Sitzung des Abgeordnetenkongresses und des Senats statt, einer Modalität, die verfassungsrechtlich für große Staatsanlässe reserviert ist (Königlicher Eid, Kriegserklärungen, Anträge von außergewöhnlicher Schwere). Erstmals wird diese Modalität verwendet, um ein ausländisches Staatsoberhaupt mit universaler religiöser Dimension zu empfangen.',
    ],
    contextTitle: 'Politischer und kirchlicher Kontext',
    contextBody: 'Die Rede von Papst Leo XIV. im Kongress fällt in einen Moment besonderer Sensibilität hinsichtlich der Kirche-Staat-Beziehungen in Spanien, mit offenen Debatten über kirchliche Finanzierung, Religionsunterricht und sexuellen Missbrauch im Klerus. Der Heilige Stuhl hat traditionell darum gebeten, dass solche Interventionen sich auf universale Werte konzentrieren —Menschenwürde, Frieden, Migration, ganzheitliche Ökologie— und parteiische Stellungnahmen vermeiden. Die Präzedenzfälle Benedikts XVI. in Westminster (2010) und Franziskus’ in Straßburg (2014) sind verbindliche Referenzen.',
    precedentsTitle: 'Präzedenzfälle · Päpste in europäischen Parlamenten',
    precedents: [
      { who: 'Johannes Paul II.', year: '1996', context: 'Deutscher Bundestag · Berlin', quote: 'Er sprach über die europäische Einheit, die Gewissensfreiheit und die Herausforderungen der deutschen Wiedervereinigung.' },
      { who: 'Benedikt XVI.', year: '2010', context: 'Westminster Hall · London', quote: 'Er behandelte die Rolle der Religion in der politischen Debatte und die ethischen Grundlagen der Demokratie.' },
      { who: 'Benedikt XVI.', year: '2011', context: 'Deutscher Bundestag · Berlin', quote: 'Er sprach über die Grundlagen des positiven Rechts und die menschliche Ökologie.' },
      { who: 'Franziskus', year: '2014', context: 'Europäisches Parlament · Straßburg', quote: 'Rede über Menschenrechte, die Zentralität der Person und die Würde der Arbeit.' },
      { who: 'Leo XIV.', year: '2026', context: 'Abgeordnetenkongress · Madrid', quote: 'Erster Papst, der zu den spanischen Cortes Generales in gemeinsamer Sitzung Kongress + Senat spricht.' },
    ],
    programTitle: 'Programm des 8. Juni',
    programIntro: 'Der Montag ist der institutionellste Tag des Besuchs. Er umfasst fünf aufeinanderfolgende Akte in Madrid:',
    programSteps: [
      { time: '09:30', act: 'Privataudienz mit Pedro Sánchez in der Apostolischen Nuntiatur' },
      { time: '10:30', act: 'Rede vor dem gemeinsamen Plenum von Kongress und Senat · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Begegnung mit den spanischen Bischöfen am Sitz der Bischofskonferenz' },
      { time: '17:00', act: 'Marianisches Gebet in der Kathedrale Almudena (Blumenopfer)' },
      { time: '19:00', act: 'Diözesanbegegnung im Stadion Santiago Bernabéu' },
    ],
    themesTitle: 'Mögliche Themen der Rede',
    themesIntro: 'Auf der Grundlage der programmatischen Prioritäten, die Leo XIV. seit Beginn seines Pontifikats (Mai 2025) angekündigt hat, könnte die Rede fünf große Achsen behandeln:',
    themes: [
      { title: 'Künstliche Intelligenz und Menschenwürde', body: 'Zentrales Thema des Pontifikats und Achse seiner ersten Enzyklika „Magnifica humanitas" (25. Mai 2026). Aufruf zu internationaler KI-Governance, die die Person respektiert.' },
      { title: 'Migration als ethischer Prüfstein des Jahrhunderts', body: 'Verbunden mit seinem späteren Besuch in Arguineguín (Gran Canaria) und im Zentrum Las Raíces (Teneriffa). „Keine Mauer ist höher als die Menschenwürde."' },
      { title: 'Soziallehre und Ungleichheit', body: 'Kontinuität von Rerum Novarum (135. Jahrestag 2026). Arbeitsprekarität, Einkommensschere, Herausforderungen der Arbeit im digitalen Zeitalter.' },
      { title: 'Frieden und Abrüstung', body: 'Sein „entwaffneter und entwaffnender Friede", besonders an Europa gerichtet in einem Kontext des Krieges in der Ukraine, des Konflikts in Gaza und allgemeiner Wiederaufrüstung.' },
      { title: 'Ganzheitliche Ökologie', body: 'Kontinuität von Franziskus’ Laudato si’. Verbindung zwischen Klimagerechtigkeit und sozialer Gerechtigkeit.' },
    ],
    protocolTitle: 'Protokoll des Akts',
    protocolBody: 'Die Sitzung wird formell von den gemeinsamen Präsidien des Kongresses und des Senats einberufen, geleitet von der Kongresspräsidentin Francina Armengol und dem Senatspräsidenten Pedro Rollán. Der Papst wird am Haupteingang der Carrera de San Jerónimo von beiden Präsidenten empfangen. Die Rede wird vom zentralen Rednerpult des Kongressplenarsaals gehalten, mit Verlängerung in den Senat per Bildschirm. Die geplante Dauer beträgt etwa 50 Minuten, ohne Beiträge der Fraktionen. Nach der Rede kurzer Empfang im Salón de los Pasos Perdidos.',
    watchTitle: 'Wie man die Rede live verfolgen kann',
    watchBody: 'Die Sitzung wird live übertragen vom Canal Parlamento des Kongresses, von TVE (La 1 und Canal 24 Horas) und von den offiziellen Vatikan-Plattformen (Vatican Media YouTube, vaticannews.va). Im Radio: RNE und COPE mit Sonderberichterstattung. Regionalsender werden morgens Zusammenfassungen und Live-Schaltungen senden. Die vollständigen Texte der Rede werden nach der Verkündung auf vatican.va veröffentlicht.',
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Ist es das erste Mal, dass ein Papst im spanischen Kongress spricht?', a: 'Ja. Kein vorheriger Pontifex hatte sich an das Plenum des spanischen Abgeordnetenkongresses oder des Senats gewandt. Johannes Paul II. und Benedikt XVI. machten mehrere Besuche, intervenierten aber nicht in den Cortes.' },
      { q: 'Warum eine gemeinsame Sitzung von Kongress und Senat?', a: 'Die gemeinsame Sitzung ist die feierlichste institutionelle Modalität des spanischen Parlaments, reserviert für große Staatsanlässe. Den Papst mit dieser Formel zu empfangen, stellt den Akt auf die höchste Protokollebene.' },
      { q: 'Worüber wird Papst Leo XIV. sprechen?', a: 'Der vorherige Text wurde nicht veröffentlicht. Auf der Grundlage seiner programmatischen Prioritäten sind die wahrscheinlichsten Themen: künstliche Intelligenz und Menschenwürde, Migration, Soziallehre, Frieden und Abrüstung sowie ganzheitliche Ökologie.' },
      { q: 'Kann das Publikum der Rede beiwohnen?', a: 'Nein. Die Sitzung ist streng parlamentarisch und nur Abgeordnete, Senatoren, Regierungsmitglieder, das diplomatische Korps und institutionelle Gäste nehmen teil. Sie wird live vom Canal Parlamento und TVE übertragen.' },
      { q: 'Um wie viel Uhr beginnt sie genau?', a: 'Die Sitzung ist für 10:30 Uhr am Montag, dem 8. Juni 2026, einberufen. Der Papst kommt zuvor aus der Nuntiatur nach seiner Audienz mit dem Ministerpräsidenten um 09:30 Uhr.' },
      { q: 'Können die Fraktionen nach der Rede sprechen?', a: 'Nein. Das vorgesehene Protokoll sieht keine Beiträge der Fraktionen vor. Der Papst hält seine Rede, und anschließend findet ein kurzer Empfang im Salón de los Pasos Perdidos statt.' },
    ],
    relatedTitle: 'Verwandte Seiten',
    related: [
      { href: '/programa', text: 'Vollständiges Programm der Reise Leos XIV.' },
      { href: '/ciudades/madrid', text: 'Madrid · Gaststadt' },
      { href: '/papa-bernabeu', text: 'Diözesanbegegnung im Bernabéu (8. Juni 19 Uhr)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · erste Enzyklika' },
      { href: '/historia-visitas-papales', text: 'Geschichte der Papstreisen nach Spanien' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Papa Leão XIV no Parlamento espanhol',
    title: 'Papa Leão XIV no Congresso dos Deputados · 8 de junho de 2026',
    subtitle: 'Pela primeira vez na história um Papa profere um discurso no Parlamento espanhol. Sessão conjunta do Congresso e do Senado · 10:30 · Carrera de San Jerónimo, Madrid.',
    intro: 'Na segunda-feira, 8 de junho de 2026, às 10:30, o Papa Leão XIV proferirá um discurso perante a sessão plenária conjunta do Congresso dos Deputados e do Senado espanhol. É a primeira vez que um Pontífice se dirige ao Parlamento espanhol, marco institucional dentro da Viagem Apostólica a Espanha (6-12 de junho de 2026). Esta página reúne os detalhes do ato, o protocolo, os precedentes com outras visitas papais a parlamentos europeus e as perguntas frequentes sobre o discurso.',
    quickFacts: [
      { label: 'Data', value: 'Segunda-feira 8 de junho de 2026' },
      { label: 'Hora', value: '10:30 (hora local de Madrid)' },
      { label: 'Local', value: 'Congresso dos Deputados · Carrera de San Jerónimo' },
      { label: 'Tipo de sessão', value: 'Plenário conjunto Congresso + Senado' },
      { label: 'Ato anterior', value: '09:30 audiência com Pedro Sánchez na Nunciatura Apostólica' },
      { label: 'Caráter', value: 'Histórico · primeira vez de um Papa nas Cortes Generales espanholas' },
    ],
    whyHistoricTitle: 'Por que é um ato histórico',
    whyHistoricBody: [
      'Nenhum Pontífice anterior se dirigira ao Parlamento espanhol no exercício do seu ministério. João Paulo II visitou Espanha cinco vezes entre 1982 e 2003, mas nunca proferiu um discurso no Congresso. Bento XVI também não interveio nas Cortes durante as suas duas viagens (2010 e 2011). Francisco não visitou Espanha.',
      'Leão XIV inaugura assim uma tradição que existia noutros países europeus: João Paulo II falou no Bundestag alemão, na Assembleia Nacional polaca e no Parlamento Europeu. Bento XVI fê-lo em Westminster Hall (Reino Unido), no Bundestag (2011) e no Parlamento francês. A intervenção de Leão XIV no Congresso espanhol coloca pela primeira vez as Cortes Generales na mesma categoria.',
      'O ato celebra-se em sessão conjunta do Congresso dos Deputados e do Senado, modalidade reservada constitucionalmente para grandes ocasiões de Estado (juramento dos Reis, declarações de guerra, moções de excecional gravidade). É a primeira vez que essa modalidade é usada para receber um chefe de Estado estrangeiro com dimensão religiosa universal.',
    ],
    contextTitle: 'Contexto político e eclesial',
    contextBody: 'O discurso do Papa Leão XIV no Congresso enquadra-se num momento de especial sensibilidade sobre a relação Igreja-Estado em Espanha, com debates abertos sobre o financiamento eclesiástico, o ensino religioso e os abusos sexuais no clero. A Santa Sé tem pedido tradicionalmente que estas intervenções se concentrem em valores universais —dignidade humana, paz, migração, ecologia integral— e evitem posicionamentos partidários. Os precedentes de Bento XVI em Westminster (2010) e Francisco em Estrasburgo (2014) são referência obrigatória.',
    precedentsTitle: 'Precedentes · Papas em parlamentos europeus',
    precedents: [
      { who: 'João Paulo II', year: '1996', context: 'Bundestag alemão · Berlim', quote: 'Falou da unidade europeia, da liberdade de consciência e dos desafios da reunificação alemã.' },
      { who: 'Bento XVI', year: '2010', context: 'Westminster Hall · Londres', quote: 'Dissertou sobre o papel da religião no debate político e os fundamentos éticos da democracia.' },
      { who: 'Bento XVI', year: '2011', context: 'Bundestag alemão · Berlim', quote: 'Falou sobre os fundamentos do direito positivo e a ecologia humana.' },
      { who: 'Francisco', year: '2014', context: 'Parlamento Europeu · Estrasburgo', quote: 'Discurso sobre os direitos humanos, a centralidade da pessoa e a dignidade do trabalho.' },
      { who: 'Leão XIV', year: '2026', context: 'Congresso dos Deputados · Madrid', quote: 'Primeiro Papa a discursar nas Cortes Generales espanholas em sessão conjunta Congresso + Senado.' },
    ],
    programTitle: 'Programa de 8 de junho',
    programIntro: 'Segunda-feira é a jornada mais institucional da visita. Inclui cinco atos consecutivos em Madrid:',
    programSteps: [
      { time: '09:30', act: 'Audiência privada com Pedro Sánchez na Nunciatura Apostólica' },
      { time: '10:30', act: 'Discurso ao Plenário conjunto de Congresso e Senado · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Encontro com os bispos espanhóis na sede da Conferência Episcopal' },
      { time: '17:00', act: 'Oração mariana na Catedral da Almudena (oferta floral)' },
      { time: '19:00', act: 'Encontro diocesano no Estádio Santiago Bernabéu' },
    ],
    themesTitle: 'Possíveis temas do discurso',
    themesIntro: 'Com base nas prioridades programáticas anunciadas por Leão XIV desde o início do seu pontificado (maio 2025), o discurso poderia abordar cinco grandes eixos:',
    themes: [
      { title: 'Inteligência artificial e dignidade humana', body: 'Tema central do pontificado e eixo da sua primeira encíclica «Magnifica humanitas» (25 maio 2026). Apelo a uma governança internacional da IA que respeite a pessoa.' },
      { title: 'Migração como prova ética do século', body: 'Conectada com a sua posterior visita a Arguineguín (Gran Canária) e ao centro Las Raíces (Tenerife). «Nenhum muro é mais alto do que a dignidade humana».' },
      { title: 'Doutrina social e desigualdade', body: 'Continuidade da Rerum Novarum (135º aniversário em 2026). Precariedade laboral, fosso de rendimentos, desafios do trabalho na era digital.' },
      { title: 'Paz e desarmamento', body: 'A sua «paz desarmada e desarmante» dirigida especialmente à Europa num contexto de guerra na Ucrânia, conflito em Gaza e rearmamento generalizado.' },
      { title: 'Ecologia integral', body: 'Continuidade da Laudato si’ de Francisco. Vínculo entre justiça climática e justiça social.' },
    ],
    protocolTitle: 'Protocolo do ato',
    protocolBody: 'A sessão é convocada formalmente pelas Mesas conjuntas do Congresso e do Senado, presididas pela presidente do Congresso Francina Armengol e pelo presidente do Senado Pedro Rollán. O Papa será recebido à entrada principal da Carrera de San Jerónimo por ambos os presidentes. O discurso é proferido a partir do púlpito central do hemiciclo do Congresso, alargado ao Senado através de ecrãs. A duração prevista é de aproximadamente 50 minutos, sem turno de intervenções dos grupos parlamentares. Após o discurso, breve receção no Salón de los Pasos Perdidos.',
    watchTitle: 'Como acompanhar o discurso em direto',
    watchBody: 'A sessão é transmitida em direto pelo Canal Parlamento do Congresso, pela TVE (La 1 e Canal 24 Horas) e pelas plataformas oficiais do Vaticano (Vatican Media YouTube, vaticannews.va). Em rádio: RNE e COPE com cobertura especial. Os canais regionais emitirão de manhã resumos e ligações em direto. Os textos integrais do discurso serão publicados em vatican.va após serem proferidos.',
    faqTitle: 'Perguntas frequentes',
    faq: [
      { q: 'É a primeira vez que um Papa discursa no Congresso espanhol?', a: 'Sim. Nenhum Pontífice anterior se dirigira ao Plenário do Congresso dos Deputados ou do Senado espanhol. João Paulo II e Bento XVI fizeram várias visitas mas não intervieram nas Cortes.' },
      { q: 'Porquê uma sessão conjunta de Congresso e Senado?', a: 'A sessão conjunta é a modalidade institucional mais solene do Parlamento espanhol, reservada para grandes ocasiões de Estado. Receber o Papa com essa fórmula coloca o ato ao mais alto nível protocolar.' },
      { q: 'Sobre o que falará o Papa Leão XIV?', a: 'O texto prévio não foi tornado público. Com base nas suas prioridades programáticas, os temas mais prováveis são: inteligência artificial e dignidade humana, migração, doutrina social, paz e desarmamento, e ecologia integral.' },
      { q: 'O público pode assistir ao discurso?', a: 'Não. A sessão é estritamente parlamentar e só assistem deputados, senadores, membros do Governo, corpo diplomático e convidados institucionais. É transmitida em direto pelo Canal Parlamento e pela TVE.' },
      { q: 'A que horas exatas começa?', a: 'A sessão está convocada para as 10:30 de segunda-feira, 8 de junho de 2026. O Papa chega previamente da Nunciatura após a sua audiência com o presidente do Governo às 09:30.' },
      { q: 'Os grupos parlamentares podem intervir depois do discurso?', a: 'Não. O protocolo previsto não inclui turno de intervenções dos grupos. O Papa profere o seu discurso e a seguir realiza-se uma breve receção no Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/programa', text: 'Programa completo da viagem de Leão XIV' },
      { href: '/ciudades/madrid', text: 'Madrid · cidade anfitriã' },
      { href: '/papa-bernabeu', text: 'Encontro diocesano no Bernabéu (8 jun 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · primeira encíclica' },
      { href: '/historia-visitas-papales', text: 'História das visitas papais a Espanha' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Papa Lleó XIV al Congrés espanyol',
    title: 'El Papa Lleó XIV al Congrés dels Diputats · 8 de juny de 2026',
    subtitle: 'Per primera vegada en la història un Papa pronuncia un discurs al Parlament espanyol. Sessió conjunta del Congrés i del Senat · 10:30 · Carrera de San Jerónimo, Madrid.',
    intro: 'El dilluns 8 de juny de 2026, a les 10:30 del matí, el Papa Lleó XIV pronunciarà un discurs davant el Ple conjunt del Congrés dels Diputats i el Senat espanyol. És la primera vegada que un Pontífex s’adreça al Parlament espanyol, fita institucional inscrita en el Viatge Apostòlic a Espanya (6-12 de juny de 2026). Aquesta pàgina recull els detalls de l’acte, el protocol, els precedents amb altres visites papals a parlaments europeus i les preguntes freqüents sobre el discurs.',
    quickFacts: [
      { label: 'Data', value: 'Dilluns 8 de juny de 2026' },
      { label: 'Hora', value: '10:30 (hora local de Madrid)' },
      { label: 'Lloc', value: 'Congrés dels Diputats · Carrera de San Jerónimo' },
      { label: 'Tipus de sessió', value: 'Ple conjunt Congrés + Senat' },
      { label: 'Acte previ', value: '09:30 audiència amb Pedro Sánchez a la Nunciatura Apostòlica' },
      { label: 'Caràcter', value: 'Històric · primera vegada d’un Papa a les Corts Generals espanyoles' },
    ],
    whyHistoricTitle: 'Per què és un acte històric',
    whyHistoricBody: [
      'Cap Pontífex anterior s’havia adreçat al Parlament espanyol en l’exercici del seu ministeri. Joan Pau II va visitar Espanya cinc vegades entre 1982 i 2003, però mai va pronunciar un discurs al Congrés. Benet XVI tampoc va intervenir a les Corts durant els seus dos viatges (2010 i 2011). Francesc no va visitar Espanya.',
      'Lleó XIV inaugura així una tradició que existia en altres països europeus: Joan Pau II va parlar al Bundestag alemany, a l’Assemblea Nacional polonesa i al Parlament Europeu. Benet XVI ho va fer a Westminster Hall (Regne Unit), al Bundestag (2011) i al Parlament francès. La intervenció de Lleó XIV al Congrés espanyol situa per primera vegada les Corts Generals en aquesta mateixa categoria.',
      'L’acte se celebra en sessió conjunta del Congrés dels Diputats i el Senat, modalitat reservada constitucionalment a grans ocasions d’Estat (jurament dels Reis, declaracions de guerra, mocions d’excepcional gravetat). És la primera vegada que aquesta modalitat s’utilitza per rebre un cap d’Estat estranger amb dimensió religiosa universal.',
    ],
    contextTitle: 'Context polític i eclesial',
    contextBody: 'El discurs del Papa Lleó XIV al Congrés s’emmarca en un moment d’especial sensibilitat sobre la relació Església-Estat a Espanya, amb debats oberts sobre el finançament eclesiàstic, l’ensenyament religiós i els abusos sexuals al clergat. La Santa Seu ha demanat tradicionalment que aquestes intervencions se centrin en valors universals —dignitat humana, pau, migració, ecologia integral— i evitin posicionaments partidistes. Els precedents de Benet XVI a Westminster (2010) i Francesc a Estrasburg (2014) són referència obligada.',
    precedentsTitle: 'Precedents · Papes en parlaments europeus',
    precedents: [
      { who: 'Joan Pau II', year: '1996', context: 'Bundestag alemany · Berlín', quote: 'Va parlar de la unitat europea, la llibertat de consciència i els reptes de la reunificació alemanya.' },
      { who: 'Benet XVI', year: '2010', context: 'Westminster Hall · Londres', quote: 'Va dissertar sobre el paper de la religió en el debat polític i els fonaments ètics de la democràcia.' },
      { who: 'Benet XVI', year: '2011', context: 'Bundestag alemany · Berlín', quote: 'Va parlar sobre els fonaments del dret positiu i l’ecologia humana.' },
      { who: 'Francesc', year: '2014', context: 'Parlament Europeu · Estrasburg', quote: 'Discurs sobre els drets humans, la centralitat de la persona i la dignitat del treball.' },
      { who: 'Lleó XIV', year: '2026', context: 'Congrés dels Diputats · Madrid', quote: 'Primer Papa que parla a les Corts Generals espanyoles en sessió conjunta Congrés + Senat.' },
    ],
    programTitle: 'Programa del 8 de juny',
    programIntro: 'El dilluns és la jornada més institucional de la visita. Inclou cinc actes consecutius a Madrid:',
    programSteps: [
      { time: '09:30', act: 'Audiència privada amb Pedro Sánchez a la Nunciatura Apostòlica' },
      { time: '10:30', act: 'Discurs al Ple conjunt del Congrés i el Senat · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Trobada amb els bisbes espanyols a la seu de la Conferència Episcopal' },
      { time: '17:00', act: 'Pregària mariana a la Catedral de la Almudena (ofrena floral)' },
      { time: '19:00', act: 'Trobada diocesana a l’Estadi Santiago Bernabéu' },
    ],
    themesTitle: 'Temes possibles del discurs',
    themesIntro: 'Sobre la base de les prioritats programàtiques anunciades per Lleó XIV des de l’inici del seu pontificat (maig 2025), el discurs podria abordar cinc grans eixos:',
    themes: [
      { title: 'Intel·ligència artificial i dignitat humana', body: 'Tema central del pontificat i eix de la seva primera encíclica «Magnifica humanitas» (25 maig 2026). Crida a una governança internacional de la IA que respecti la persona.' },
      { title: 'Migració com a prova ètica del segle', body: 'Connectat amb la seva visita posterior a Arguineguín (Gran Canària) i al centre Las Raíces (Tenerife). «Cap mur no és més alt que la dignitat humana».' },
      { title: 'Doctrina social i desigualtat', body: 'Continuïtat de Rerum Novarum (135è aniversari el 2026). Precarietat laboral, escletxa de rendes, reptes del treball en l’era digital.' },
      { title: 'Pau i desarmament', body: 'La seva «pau desarmada i desarmant» adreçada especialment a Europa en un context de guerra a Ucraïna, conflicte a Gaza i rearmament generalitzat.' },
      { title: 'Ecologia integral', body: 'Continuïtat de Laudato si’ de Francesc. Vincle entre justícia climàtica i justícia social.' },
    ],
    protocolTitle: 'Protocol de l’acte',
    protocolBody: 'La sessió és convocada formalment per les Meses conjuntes del Congrés i el Senat, presidides per la presidenta del Congrés Francina Armengol i pel president del Senat Pedro Rollán. El Papa serà rebut a l’entrada principal de la Carrera de San Jerónimo per tots dos presidents. El discurs es pronuncia des de l’atril central de l’hemicicle del Congrés, ampliat al Senat amb pantalles. La durada prevista és d’aproximadament 50 minuts, sense torn d’intervencions dels grups parlamentaris. Després del discurs, breu recepció al Salón de los Pasos Perdidos.',
    watchTitle: 'Com seguir el discurs en directe',
    watchBody: 'La sessió es retransmet en directe pel Canal Parlament del Congrés, per TVE (La 1 i Canal 24 Hores) i per les plataformes oficials del Vaticà (Vatican Media YouTube, vaticannews.va). En ràdio: RNE i COPE amb cobertura especial. Les cadenes autonòmiques emetran al matí resums i connexions en directe. Els textos íntegres del discurs es publicaran a vatican.va una vegada pronunciats.',
    faqTitle: 'Preguntes freqüents',
    faq: [
      { q: 'És la primera vegada que un Papa parla al Congrés espanyol?', a: 'Sí. Cap Pontífex anterior s’havia adreçat al Ple del Congrés dels Diputats o del Senat espanyol. Joan Pau II i Benet XVI van fer diverses visites però no van intervenir a les Corts.' },
      { q: 'Per què es fa una sessió conjunta de Congrés i Senat?', a: 'La sessió conjunta és la modalitat institucional més solemne del Parlament espanyol, reservada a grans ocasions d’Estat. Rebre el Papa amb aquesta fórmula situa l’acte al màxim nivell protocol·lari.' },
      { q: 'De què parlarà el Papa Lleó XIV?', a: 'El text previ no s’ha fet públic. Sobre la base de les seves prioritats programàtiques, els temes més probables són: intel·ligència artificial i dignitat humana, migració, doctrina social, pau i desarmament, i ecologia integral.' },
      { q: 'El públic pot assistir al discurs?', a: 'No. La sessió és estrictament parlamentària i només hi assisteixen diputats, senadors, membres del Govern, cos diplomàtic i convidats institucionals. Es retransmet en directe pel Canal Parlament i TVE.' },
      { q: 'A quina hora exacta comença?', a: 'La sessió està convocada per a les 10:30 del dilluns 8 de juny de 2026. El Papa hi arriba prèviament des de la Nunciatura després de la seva audiència amb el president del Govern a les 09:30.' },
      { q: 'Els grups parlamentaris poden intervenir després del discurs?', a: 'No. El protocol previst no inclou torn d’intervencions dels grups. El Papa pronuncia el seu discurs i tot seguit se celebra una breu recepció al Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Pàgines relacionades',
    related: [
      { href: '/programa', text: 'Programa complet del viatge de Lleó XIV' },
      { href: '/ciudades/madrid', text: 'Madrid · ciutat amfitriona' },
      { href: '/papa-bernabeu', text: 'Trobada diocesana al Bernabéu (8 juny 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · primera encíclica' },
      { href: '/historia-visitas-papales', text: 'Història de les visites papals a Espanya' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Papa León XIV no Congreso español',
    title: 'O Papa León XIV no Congreso dos Deputados · 8 de xuño de 2026',
    subtitle: 'Por primeira vez na historia un Papa pronuncia un discurso no Parlamento español. Sesión conxunta do Congreso e do Senado · 10:30 · Carrera de San Jerónimo, Madrid.',
    intro: 'O luns 8 de xuño de 2026, ás 10:30 da mañá, o Papa León XIV pronunciará un discurso ante o Pleno conxunto do Congreso dos Deputados e o Senado español. É a primeira vez que un Pontífice se dirixe ao Parlamento español, fito institucional inscrito na Viaxe Apostólica a España (6-12 de xuño de 2026). Esta páxina recolle os detalles do acto, o protocolo, os precedentes con outras visitas papais a parlamentos europeos e as preguntas frecuentes sobre o discurso.',
    quickFacts: [
      { label: 'Data', value: 'Luns 8 de xuño de 2026' },
      { label: 'Hora', value: '10:30 (hora local de Madrid)' },
      { label: 'Lugar', value: 'Congreso dos Deputados · Carrera de San Jerónimo' },
      { label: 'Tipo de sesión', value: 'Pleno conxunto Congreso + Senado' },
      { label: 'Acto previo', value: '09:30 audiencia con Pedro Sánchez na Nunciatura Apostólica' },
      { label: 'Carácter', value: 'Histórico · primeira vez dun Papa nas Cortes Xerais españolas' },
    ],
    whyHistoricTitle: 'Por que é un acto histórico',
    whyHistoricBody: [
      'Ningún Pontífice anterior se dirixira ao Parlamento español no exercicio do seu ministerio. Xoán Paulo II visitou España cinco veces entre 1982 e 2003, pero nunca pronunciou un discurso no Congreso. Bieito XVI tampouco interveu nas Cortes durante as súas dúas viaxes (2010 e 2011). Francisco non visitou España.',
      'León XIV inaugura así unha tradición que existía noutros países europeos: Xoán Paulo II falou no Bundestag alemán, na Asemblea Nacional polaca e no Parlamento Europeo. Bieito XVI fíxoo en Westminster Hall (Reino Unido), no Bundestag (2011) e no Parlamento francés. A intervención de León XIV no Congreso español sitúa por primeira vez as Cortes Xerais nesa mesma categoría.',
      'O acto celébrase en sesión conxunta do Congreso dos Deputados e o Senado, modalidade reservada constitucionalmente para grandes ocasións de Estado (xuramento dos Reis, declaracións de guerra, mocións de excepcional gravidade). É a primeira vez que esa modalidade se utiliza para recibir un xefe de Estado estranxeiro con dimensión relixiosa universal.',
    ],
    contextTitle: 'Contexto político e eclesial',
    contextBody: 'O discurso do Papa León XIV no Congreso enmárcase nun momento de especial sensibilidade sobre a relación Igrexa-Estado en España, con debates abertos sobre o financiamento eclesiástico, o ensino relixioso e os abusos sexuais no clero. A Santa Sé pediu tradicionalmente que estas intervencións se centren en valores universais —dignidade humana, paz, migración, ecoloxía integral— e eviten posicionamentos partidarios. Os precedentes de Bieito XVI en Westminster (2010) e Francisco en Estrasburgo (2014) son referencia obrigada.',
    precedentsTitle: 'Precedentes · Papas en parlamentos europeos',
    precedents: [
      { who: 'Xoán Paulo II', year: '1996', context: 'Bundestag alemán · Berlín', quote: 'Falou da unidade europea, a liberdade de conciencia e os retos da reunificación alemá.' },
      { who: 'Bieito XVI', year: '2010', context: 'Westminster Hall · Londres', quote: 'Disertou sobre o papel da relixión no debate político e os fundamentos éticos da democracia.' },
      { who: 'Bieito XVI', year: '2011', context: 'Bundestag alemán · Berlín', quote: 'Falou sobre os fundamentos do dereito positivo e a ecoloxía humana.' },
      { who: 'Francisco', year: '2014', context: 'Parlamento Europeo · Estrasburgo', quote: 'Discurso sobre os dereitos humanos, a centralidade da persoa e a dignidade do traballo.' },
      { who: 'León XIV', year: '2026', context: 'Congreso dos Deputados · Madrid', quote: 'Primeiro Papa que fala nas Cortes Xerais españolas en sesión conxunta Congreso + Senado.' },
    ],
    programTitle: 'Programa do 8 de xuño',
    programIntro: 'O luns é a xornada máis institucional da visita. Inclúe cinco actos consecutivos en Madrid:',
    programSteps: [
      { time: '09:30', act: 'Audiencia privada con Pedro Sánchez na Nunciatura Apostólica' },
      { time: '10:30', act: 'Discurso ao Pleno conxunto do Congreso e o Senado · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Encontro cos bispos españois na sede da Conferencia Episcopal' },
      { time: '17:00', act: 'Oración mariana na Catedral da Almudena (ofrenda floral)' },
      { time: '19:00', act: 'Encontro diocesano no Estadio Santiago Bernabéu' },
    ],
    themesTitle: 'Posibles temas do discurso',
    themesIntro: 'Sobre a base das prioridades programáticas anunciadas por León XIV desde o inicio do seu pontificado (maio 2025), o discurso podería abordar cinco grandes eixos:',
    themes: [
      { title: 'Intelixencia artificial e dignidade humana', body: 'Tema central do pontificado e eixo da súa primeira encíclica «Magnifica humanitas» (25 maio 2026). Chamamento a unha gobernanza internacional da IA que respecte a persoa.' },
      { title: 'Migración como proba ética do século', body: 'Conectada coa súa visita posterior a Arguineguín (Gran Canaria) e ao centro Las Raíces (Tenerife). «Ningún muro é máis alto que a dignidade humana».' },
      { title: 'Doutrina social e desigualdade', body: 'Continuidade de Rerum Novarum (135º aniversario en 2026). Precariedade laboral, fenda de rendas, retos do traballo na era dixital.' },
      { title: 'Paz e desarme', body: 'A súa «paz desarmada e desarmante» dirixida especialmente a Europa nun contexto de guerra en Ucraína, conflito en Gaza e rearme xeneralizado.' },
      { title: 'Ecoloxía integral', body: 'Continuidade da Laudato si’ de Francisco. Vínculo entre xustiza climática e xustiza social.' },
    ],
    protocolTitle: 'Protocolo do acto',
    protocolBody: 'A sesión é convocada formalmente polas Mesas conxuntas do Congreso e do Senado, presididas pola presidenta do Congreso Francina Armengol e polo presidente do Senado Pedro Rollán. O Papa será recibido na entrada principal da Carrera de San Jerónimo por ambos os presidentes. O discurso pronúnciase desde o atril central do hemiciclo do Congreso, ampliado ao Senado mediante pantallas. A duración prevista é de aproximadamente 50 minutos, sen quenda de intervencións dos grupos parlamentarios. Tras o discurso, breve recepción no Salón de los Pasos Perdidos.',
    watchTitle: 'Como seguir o discurso en directo',
    watchBody: 'A sesión retransmítese en directo pola Canle Parlamento do Congreso, por TVE (La 1 e Canal 24 Horas) e polas plataformas oficiais do Vaticano (Vatican Media YouTube, vaticannews.va). En radio: RNE e COPE con cobertura especial. As canles autonómicas emitirán pola mañá resumos e conexións en directo. Os textos íntegros do discurso publicaranse en vatican.va unha vez pronunciados.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: 'É a primeira vez que un Papa fala no Congreso español?', a: 'Si. Ningún Pontífice anterior se dirixira ao Pleno do Congreso dos Deputados ou do Senado español. Xoán Paulo II e Bieito XVI fixeron varias visitas pero non interveron nas Cortes.' },
      { q: 'Por que se celebra unha sesión conxunta de Congreso e Senado?', a: 'A sesión conxunta é a modalidade institucional máis solemne do Parlamento español, reservada para grandes ocasións de Estado. Recibir o Papa con esa fórmula sitúa o acto ao máximo nivel protocolario.' },
      { q: 'De que falará o Papa León XIV?', a: 'O texto previo non se fixo público. Sobre a base das súas prioridades programáticas, os temas máis probables son: intelixencia artificial e dignidade humana, migración, doutrina social, paz e desarme, e ecoloxía integral.' },
      { q: 'Pode o público asistir ao discurso?', a: 'Non. A sesión é estritamente parlamentaria e só asisten deputados, senadores, membros do Goberno, corpo diplomático e convidados institucionais. Retransmítese en directo pola Canle Parlamento e TVE.' },
      { q: 'A que hora exacta comeza?', a: 'A sesión está convocada para as 10:30 do luns 8 de xuño de 2026. O Papa chega previamente da Nunciatura tras a súa audiencia co presidente do Goberno ás 09:30.' },
      { q: 'Os grupos parlamentarios poden intervir tras o discurso?', a: 'Non. O protocolo previsto non inclúe quenda de intervencións dos grupos. O Papa pronuncia o seu discurso e a continuación celébrase unha breve recepción no Salón de los Pasos Perdidos.' },
    ],
    relatedTitle: 'Páxinas relacionadas',
    related: [
      { href: '/programa', text: 'Programa completo da viaxe de León XIV' },
      { href: '/ciudades/madrid', text: 'Madrid · cidade anfitrioa' },
      { href: '/papa-bernabeu', text: 'Encontro diocesano no Bernabéu (8 xuño 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · primeira encíclica' },
      { href: '/historia-visitas-papales', text: 'Historia das visitas papais a España' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Leon XIV.a Espainiako Parlamentuan',
    title: 'Leon XIV.a Diputatuen Kongresuan · 2026ko ekainaren 8a',
    subtitle: 'Historian lehen aldiz Aita Santu batek hitzaldia ematen du Espainiako Parlamentuan. Kongresuaren eta Senatuaren saio bateratua · 10:30 · Carrera de San Jerónimo, Madril.',
    intro: '2026ko ekainaren 8an, astelehenez, 10:30ean, Leon XIV.a Aita Santuak hitzaldia emango du Espainiako Diputatuen Kongresuaren eta Senatuaren saio bateratuko osokoaren aurrean. Aita Santu bat Espainiako Parlamentuari zuzentzen zaion lehen aldia da, Espainiarako Bidaia Apostolikoaren barneko (2026ko ekainaren 6-12) mugarri instituzionala. Orrialde honek ekitaldiaren xehetasunak, protokoloa, beste bisita papalek Europako parlamentuetan dituzten aurrekariak eta hitzaldiari buruzko ohiko galderak biltzen ditu.',
    quickFacts: [
      { label: 'Data', value: 'Astelehena, 2026ko ekainaren 8a' },
      { label: 'Ordua', value: '10:30 (Madrilgo tokiko ordua)' },
      { label: 'Lekua', value: 'Diputatuen Kongresua · Carrera de San Jerónimo' },
      { label: 'Saio mota', value: 'Osoko bateratua Kongresua + Senatua' },
      { label: 'Aurreko ekitaldia', value: '09:30 Pedro Sánchezekin audientzia Nuntziatura Apostolikoan' },
      { label: 'Izaera', value: 'Historikoa · Aita Santu baten lehen aldia Espainiako Gorte Nagusietan' },
    ],
    whyHistoricTitle: 'Zergatik den ekitaldi historikoa',
    whyHistoricBody: [
      'Aurreko Pontifizerik ez zen Espainiako Parlamentuari zuzendu bere zerbitzu zibilaren barruan. Joan Paulo II.ak Espainia bost aldiz bisitatu zuen 1982-2003 artean, baina ez zuen inoiz hitzaldirik eman Kongresuan. Benedikto XVI.ak ere ez zuen Gorteetan parte hartu bere bi bidaietan (2010 eta 2011). Frantziskok ez zuen Espainia bisitatu.',
      'Leon XIV.ak, beraz, Europako beste herrialde batzuetan zegoen tradizioa inauguratzen du: Joan Paulo II.ak Alemaniako Bundestag-ean, Poloniako Asanblada Nazionalean eta Europako Parlamentuan hitz egin zuen. Benedikto XVI.ak Westminster Hall-en (Erresuma Batuan), Bundestag-ean (2011) eta Frantziako Parlamentuan egin zuen. Leon XIV.aren esku-hartzeak Espainiako Kongresuan kokatzen ditu lehen aldiz Gorte Nagusiak kategoria horretan.',
      'Ekitaldia Diputatuen Kongresuaren eta Senatuaren saio bateratuan ospatzen da, Estatu-ekitaldi handietarako konstituzionalki gordetako modalitatea (Erregeen zina, gerra-deklarazioak, aparteko garrantzizko mozioak). Modalitate hori erabiltzen den lehen aldia da unibertsal erlijio-dimentsioa duen atzerriko Estatuburu bat hartzeko.',
    ],
    contextTitle: 'Testuinguru politiko eta eklesiala',
    contextBody: 'Leon XIV.a Aita Santuaren Kongresuko hitzaldia Espainian Eliza-Estatu harremanen gaineko sentsibilitate berezi batean kokatzen da, finantzaketa eklesiastikoari, erlijio-irakaskuntzari eta apaizen sexu-abusuei buruzko eztabaida irekiekin. Aulki Santuak tradizionalki eskatu izan du esku-hartze horiek balore unibertsaletan zentratzea —giza duintasuna, bakea, migrazioa, ekologia integrala— eta alderdikeria saihestea. Benedikto XVI.aren Westminster-eko (2010) eta Frantzisko Estrasburgokoaren (2014) aurrekariak nahitaezko erreferentziak dira.',
    precedentsTitle: 'Aurrekariak · Aita Santuak Europako parlamentuetan',
    precedents: [
      { who: 'Joan Paulo II.a', year: '1996', context: 'Alemaniako Bundestag · Berlin', quote: 'Europako batasunaz, kontzientzia-askatasunaz eta Alemaniako berbatzearen erronkez hitz egin zuen.' },
      { who: 'Benedikto XVI.a', year: '2010', context: 'Westminster Hall · Londres', quote: 'Eztabaida politikoan erlijioak duen rolaz eta demokraziaren oinarri etikoez aritu zen.' },
      { who: 'Benedikto XVI.a', year: '2011', context: 'Alemaniako Bundestag · Berlin', quote: 'Zuzenbide positiboaren oinarriez eta giza ekologiaz hitz egin zuen.' },
      { who: 'Frantzisko', year: '2014', context: 'Europako Parlamentua · Estrasburgo', quote: 'Giza eskubideei, pertsonaren zentraltasunari eta lanaren duintasunari buruzko hitzaldia.' },
      { who: 'Leon XIV.a', year: '2026', context: 'Diputatuen Kongresua · Madril', quote: 'Espainiako Gorte Nagusietan saio bateratuan (Kongresua + Senatua) hitz egiten duen lehen Aita Santua.' },
    ],
    programTitle: 'Ekainaren 8ko programa',
    programIntro: 'Astelehena bisitaren egunik instituzionalena da. Madrilen elkarren ondoko bost ekitaldi ditu:',
    programSteps: [
      { time: '09:30', act: 'Audientzia pribatua Pedro Sánchezekin Nuntziatura Apostolikoan' },
      { time: '10:30', act: 'Kongresuaren eta Senatuaren Osoko bateratuari hitzaldia · Carrera de San Jerónimo' },
      { time: '12:30', act: 'Espainiako apezpikuekin topaketa Apezpiku Konferentziaren egoitzan' },
      { time: '17:00', act: 'Maria-otoitza Almudenako Katedralean (lore-eskaintza)' },
      { time: '19:00', act: 'Elizbarrutiko topaketa Santiago Bernabéu Estadioan' },
    ],
    themesTitle: 'Hitzaldiaren gai posibleak',
    themesIntro: 'Leon XIV.ak bere pontifikatuaren hasieratik (2025eko maiatza) iragarritako lehentasun programatikoetan oinarrituta, hitzaldiak bost ardatz handi landu ditzake:',
    themes: [
      { title: 'Adimen artifiziala eta giza duintasuna', body: 'Pontifikatuaren gai nagusia eta bere lehen entzikliko «Magnifica humanitas»-en ardatza (2026ko maiatzaren 25a). Pertsona errespetatzen duen IAren nazioarteko gobernantzarako deia.' },
      { title: 'Migrazioa mendeko proba etiko gisa', body: 'Bere ondorengo Arguineguíngo (Gran Canaria) eta Las Raíces zentroko (Tenerife) bisitarekin lotua. «Inolako murru ez da giza duintasuna baino altuagoa».' },
      { title: 'Dotrina soziala eta desberdintasuna', body: 'Rerum Novarum-en jarraitutasuna (135. urteurrena 2026an). Lan-prekarietatea, errenta-arrakala, lanaren erronkak aro digitalean.' },
      { title: 'Bakea eta desarmea', body: 'Bere «bake desarmatua eta desarmatzailea» Europari bereziki zuzendua, Ukrainan gerra, Gazan gatazka eta orokorrean berriz armatzea testuinguruan.' },
      { title: 'Ekologia integrala', body: 'Frantziskoren Laudato si’ jarraitzen du. Klima-justiziaren eta gizarte-justiziaren arteko lotura.' },
    ],
    protocolTitle: 'Ekitaldiaren protokoloa',
    protocolBody: 'Saioa Kongresuaren eta Senatuaren Mahai bateratuek deitzen dute formalki, Francina Armengol Kongresuko presidenteak eta Pedro Rollán Senatuko presidenteak buru daudela. Aita Santua Carrera de San Jerónimoko sarrera nagusian harrera egingo diote bi presidenteek. Hitzaldia Kongresuko hemizikloko erdiko atrilean ematen da, Senatura pantailen bidez hedatuta. Aurreikusitako iraupena 50 minutu ingurukoa da, talde parlamentarioen esku-hartze txandarik gabe. Hitzaldiaren ondoren, harrera laburra Salón de los Pasos Perdidos-en.',
    watchTitle: 'Nola jarraitu hitzaldia zuzenean',
    watchBody: 'Saioa Kongresuaren Parlamentu Kanalak, TVEk (La 1 eta Canal 24 Horas) eta Vatikanoaren plataforma ofizialek (Vatican Media YouTube, vaticannews.va) zuzenean ematen dute. Irratian: RNE eta COPE estaldura bereziarekin. Autonomia-kateek goizean laburpenak eta zuzeneko konexioak emango dituzte. Hitzaldiaren testu osoak vatican.va-n argitaratuko dira eman ondoren.',
    faqTitle: 'Maiz egiten diren galderak',
    faq: [
      { q: 'Aita Santu batek Espainiako Kongresuan hitz egiten duen lehen aldia da?', a: 'Bai. Aurreko Pontifizerik ez zen Espainiako Diputatuen Kongresuko edo Senatuko Osokoari zuzendu. Joan Paulo II.ak eta Benedikto XVI.ak hainbat bisita egin zituzten baina ez zuten Gorteetan parte hartu.' },
      { q: 'Zergatik egiten da Kongresuaren eta Senatuaren saio bateratu bat?', a: 'Saio bateratua Espainiako Parlamentuaren modalitate instituzional solemneena da, Estatu-ekitaldi handietarako gordeta. Aita Santua formula horrekin hartzeak ekitaldia protokolo-maila gorenean kokatzen du.' },
      { q: 'Zertaz hitz egingo du Leon XIV.a Aita Santuak?', a: 'Aurretiko testua ez da argitaratu. Bere lehentasun programatikoetan oinarrituta, ziurrenez gehien diren gaiak hauek dira: adimen artifiziala eta giza duintasuna, migrazioa, dotrina soziala, bakea eta desarmea, eta ekologia integrala.' },
      { q: 'Publikoak hitzaldira joan al daiteke?', a: 'Ez. Saioa parlamentarioa baino ez da eta diputatu, senatari, Gobernuko kide, gorputz diplomatiko eta gonbidatu instituzionalek baino ez dute parte hartzen. Zuzenean ematen dute Parlamentu Kanalak eta TVEk.' },
      { q: 'Zer ordutan zehazki hasten da?', a: 'Saioa 2026ko ekainaren 8, astelehenez, 10:30erako deitu da. Aita Santua aurretik Nuntziaturatik dator, Gobernuko presidentearekin 09:30ean izandako audientziaren ondoren.' },
      { q: 'Talde parlamentarioek hitzaldiaren ondoren esku har dezakete?', a: 'Ez. Aurreikusitako protokoloak ez du taldeen esku-hartze txandarik aurreikusten. Aita Santuak bere hitzaldia ematen du eta gero Salón de los Pasos Perdidos-en harrera labur bat ospatzen da.' },
    ],
    relatedTitle: 'Erlazionatutako orriak',
    related: [
      { href: '/programa', text: 'Leon XIV.aren bidaiaren programa osoa' },
      { href: '/ciudades/madrid', text: 'Madril · hiri anfitrioia' },
      { href: '/papa-bernabeu', text: 'Bernabéuko elizbarrutiko topaketa (ekainak 8, 19:00)' },
      { href: '/magnifica-humanitas', text: 'Magnifica humanitas · lehen entziklikoa' },
      { href: '/historia-visitas-papales', text: 'Espainiako bisita papalen historia' },
    ],
  },
}

export default function PapaCongresoDiputadosPage({ locale }: Props) {
  const t = L[locale]
  const breadcrumbs = [
    { name: t.breadcrumbHome, href: localizePath('/', locale) },
    { name: t.breadcrumbCurrent, href: '#' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {t.quickFacts.map((f, i) => (
              <div key={i} className="rounded-lg bg-white/10 px-4 py-2">
                <p className="text-xs uppercase tracking-wide text-papal-gold">{f.label}</p>
                <p className="text-sm font-medium text-white">{f.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <VaticanFlagBanner locale={locale} className="mb-8" />

        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.whyHistoricTitle}</h2>
          {t.whyHistoricBody.map((p, i) => <p key={i}>{p}</p>)}

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.contextTitle}</h2>
          <p>{t.contextBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.precedentsTitle}</h2>
          <div className="not-prose mt-4 overflow-hidden rounded-lg border border-papal-navy/10">
            <table className="w-full text-sm">
              <thead className="bg-papal-cream">
                <tr>
                  <th className="px-3 py-2 text-left">Año</th>
                  <th className="px-3 py-2 text-left">Papa</th>
                  <th className="px-3 py-2 text-left">Lugar</th>
                  <th className="px-3 py-2 text-left">Tema</th>
                </tr>
              </thead>
              <tbody>
                {t.precedents.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-papal-cream/40'}>
                    <td className="px-3 py-2 font-bold text-papal-navy">{p.year}</td>
                    <td className="px-3 py-2 text-papal-navy">{p.who}</td>
                    <td className="px-3 py-2 text-papal-navy/70">{p.context}</td>
                    <td className="px-3 py-2 text-papal-navy/70">{p.quote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.programTitle}</h2>
          <p>{t.programIntro}</p>
          <ol className="not-prose mt-4 space-y-2">
            {t.programSteps.map((s, i) => (
              <li key={i} className="flex gap-4 rounded-lg border border-papal-navy/10 bg-white p-3">
                <span className="font-bold text-papal-gold">{s.time}</span>
                <span className="text-papal-navy/80">{s.act}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.themesTitle}</h2>
          <p>{t.themesIntro}</p>
          <ul className="not-prose mt-4 space-y-2">
            {t.themes.map((th, i) => (
              <li key={i} className="rounded-lg border-l-4 border-papal-gold bg-papal-cream/50 p-3">
                <p className="font-heading text-sm font-bold text-papal-navy">{th.title}</p>
                <p className="mt-1 text-sm text-papal-navy/80">{th.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.protocolTitle}</h2>
          <p>{t.protocolBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.watchTitle}</h2>
          <p>{t.watchBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.faqTitle}</h2>
          <dl className="not-prose mt-4 space-y-3">
            {t.faq.map((f, i) => (
              <div key={i} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <dt className="font-heading text-sm font-bold text-papal-navy">{f.q}</dt>
                <dd className="mt-2 text-sm text-papal-navy/80">{f.a}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.related.map((link) => (
              <li key={link.href}>
                <Link href={localizePath(link.href, locale)} className="text-papal-navy underline decoration-papal-gold underline-offset-4 hover:text-papal-gold">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  )
}
