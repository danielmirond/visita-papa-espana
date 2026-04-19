/**
 * Traducciones del contenido biográfico del Papa León XIV.
 *
 * Patrón: ES en data/papaBiografia.ts es la fuente de verdad.
 * Este archivo sobreescribe los textos traducibles por locale.
 * Los datos estructurales (fechas ISO, nombres propios, Wikidata IDs,
 * URLs) permanecen universales en el archivo base.
 *
 * Las traducciones EN, IT y FR están completas. DE, PT, CA, GL, EU
 * heredan ES con fallback automático (se traducirán en futuras pasadas).
 */

import type { Locale } from '@/data/i18n/types'
import {
  biografiaPapa,
  timelineVida,
  prioridadesMagisterio,
  citasRelevantes,
  raicesChicago,
  familiaPapa,
  posicionesMagisterio,
  faqPapaLeonXIV,
  type TimelineEntry,
  type PrioridadMagisterio,
  type CitaPapa,
  type MiembroFamilia,
  type PosicionMagisterio,
  type FaqPapa,
} from '@/data/papaBiografia'

// =============================================================================
// Timeline — 15 entradas traducidas por locale
// =============================================================================

type TimelineI18n = { title: string; description: string; location?: string }

const TIMELINE_BASE_KEYS = [
  '1955-09', '1977-math', '1977-osa', '1982-06', '1985',
  '1987', '1999', '2001', '2014', '2020',
  '2023-01', '2023-09', '2025-05-elected', '2025-05-inicio', '2026-06',
] as const

// Mapeo ES (source) usando mismos índices que TIMELINE_BASE_KEYS
const TIMELINE_EN: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Birth in Chicago', description: 'Born on 14 September in Chicago (Illinois), into a Catholic family with French, Italian and Spanish roots. He is the youngest of three brothers.', location: 'Chicago, United States' },
  '1977-math': { title: 'Mathematics degree', description: 'Graduates in Mathematics from Villanova University (Pennsylvania), an Augustinian institution.', location: 'Villanova, United States' },
  '1977-osa': { title: 'Enters the Order of Saint Augustine', description: 'Joins the Augustinian novitiate in Saint Louis (Missouri). Studies theology at the Catholic Theological Union of Chicago.', location: 'Saint Louis, United States' },
  '1982-06': { title: 'Priestly ordination', description: 'Ordained priest on 19 June 1982 in Rome. Takes solemn profession in the Order.', location: 'Rome, Italy' },
  '1985': { title: 'Missionary in Peru', description: 'Begins his long missionary stage in northern Peru, in the regions of Chulucanas and later Trujillo. Rural pastoral care, seminarian formation, peasant cooperatives.', location: 'Chulucanas, Peru' },
  '1987': { title: 'Doctorate in Canon Law', description: 'Defends his doctoral thesis at the Pontifical University of Saint Thomas Aquinas (Angelicum) in Rome, on the government of the local Augustinian prior.', location: 'Rome, Italy' },
  '1999': { title: 'Augustinian provincial prior in Chicago', description: 'Returns to the United States to lead the Midwest Augustinian province.', location: 'Chicago, United States' },
  '2001': { title: 'Prior General of the Order of Saint Augustine', description: 'Elected worldwide head of the Order of Saint Augustine. Re-elected in 2007. Twelve years in the central government of the order.', location: 'Rome, Italy' },
  '2014': { title: 'Bishop of Chiclayo', description: 'Pope Francis names him apostolic administrator of the diocese of Chiclayo (Peru). Acquires Peruvian nationality in 2015. In 2015 he is appointed titular bishop.', location: 'Chiclayo, Peru' },
  '2020': { title: 'Pandemic and social commitment', description: 'During COVID-19 he organises aid networks, food and healthcare in Chiclayo. Strengthens his pastoral profile close to the poorest.', location: 'Chiclayo, Peru' },
  '2023-01': { title: 'Prefect of the Dicastery for Bishops', description: 'Pope Francis calls him to Rome as prefect of the Dicastery for Bishops — one of the Vatican\'s most influential positions, responsible for proposing new bishops worldwide.', location: 'Vatican City' },
  '2023-09': { title: 'Created cardinal', description: 'In the consistory of 30 September 2023 he is created cardinal with the title of Saint Monica of the Augustinians.', location: 'Vatican City' },
  '2025-05-elected': { title: 'Elected Pope', description: 'After the death of Pope Francis on 21 April 2025, the conclave elects him Successor of Peter on 8 May. He takes the name Leo XIV. First Pope born in the United States and with Peruvian nationality.', location: 'Vatican City' },
  '2025-05-inicio': { title: 'Beginning of the pontificate', description: 'Mass for the beginning of the pontificate on 18 May 2025 in Saint Peter\'s Square. First encyclicals expected on social doctrine, peace and integral ecology.', location: 'Vatican City' },
  '2026-06': { title: 'Apostolic journey to Spain', description: 'First major international apostolic journey to Spain: Madrid, Barcelona, Gran Canaria and Tenerife from 6 to 12 June 2026.', location: 'Spain' },
}

const TIMELINE_IT: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Nascita a Chicago', description: 'Nasce il 14 settembre a Chicago (Illinois), in una famiglia cattolica con radici francesi, italiane e spagnole. È il minore di tre fratelli.', location: 'Chicago, Stati Uniti' },
  '1977-math': { title: 'Laurea in Matematica', description: 'Si laurea in Matematica alla Villanova University (Pennsylvania), istituzione agostiniana.', location: 'Villanova, Stati Uniti' },
  '1977-osa': { title: 'Entra nell\'Ordine di Sant\'Agostino', description: 'Entra nel noviziato agostiniano a Saint Louis (Missouri). Studia teologia alla Catholic Theological Union di Chicago.', location: 'Saint Louis, Stati Uniti' },
  '1982-06': { title: 'Ordinazione sacerdotale', description: 'Ordinato sacerdote il 19 giugno 1982 a Roma. Pronuncia la professione solenne nell\'Ordine.', location: 'Roma, Italia' },
  '1985': { title: 'Missionario in Perù', description: 'Inizia la sua lunga fase missionaria nel nord del Perù, nelle regioni di Chulucanas e Trujillo. Pastorale rurale, formazione di seminaristi, cooperative contadine.', location: 'Chulucanas, Perù' },
  '1987': { title: 'Dottorato in Diritto Canonico', description: 'Difende la tesi dottorale presso la Pontificia Università San Tommaso d\'Aquino (Angelicum) di Roma, sul governo del priore locale agostiniano.', location: 'Roma, Italia' },
  '1999': { title: 'Priore provinciale degli agostiniani a Chicago', description: 'Ritorna negli Stati Uniti per dirigere la provincia agostiniana del Midwest.', location: 'Chicago, Stati Uniti' },
  '2001': { title: 'Priore Generale dell\'Ordine di Sant\'Agostino', description: 'Eletto massimo responsabile mondiale dell\'Ordine di Sant\'Agostino. Rieletto nel 2007. Dodici anni nel governo centrale dell\'ordine.', location: 'Roma, Italia' },
  '2014': { title: 'Vescovo di Chiclayo', description: 'Papa Francesco lo nomina amministratore apostolico della diocesi di Chiclayo (Perù). Acquisisce la nazionalità peruviana nel 2015. Nel 2015 è nominato vescovo titolare.', location: 'Chiclayo, Perù' },
  '2020': { title: 'Pandemia e impegno sociale', description: 'Durante il COVID-19 organizza a Chiclayo reti di aiuto, cibo e assistenza sanitaria. Rafforza il suo profilo pastorale vicino ai più poveri.', location: 'Chiclayo, Perù' },
  '2023-01': { title: 'Prefetto del Dicastero per i Vescovi', description: 'Papa Francesco lo chiama a Roma come prefetto del Dicastero per i Vescovi — uno dei ruoli più influenti del Vaticano, responsabile di proporre i nuovi vescovi in tutto il mondo.', location: 'Città del Vaticano' },
  '2023-09': { title: 'Creato cardinale', description: 'Nel concistoro del 30 settembre 2023 è creato cardinale con il titolo di Santa Monica degli Agostiniani.', location: 'Città del Vaticano' },
  '2025-05-elected': { title: 'Eletto Papa', description: 'Dopo la morte di Papa Francesco il 21 aprile 2025, il conclave lo elegge Successore di Pietro l\'8 maggio. Assume il nome di Leone XIV. Primo Papa nato negli Stati Uniti e con nazionalità peruviana.', location: 'Città del Vaticano' },
  '2025-05-inicio': { title: 'Inizio del pontificato', description: 'Messa di inizio del pontificato il 18 maggio 2025 in Piazza San Pietro. Prime encicliche previste sulla dottrina sociale, la pace e l\'ecologia integrale.', location: 'Città del Vaticano' },
  '2026-06': { title: 'Viaggio apostolico in Spagna', description: 'Primo grande viaggio apostolico internazionale in Spagna: Madrid, Barcellona, Gran Canaria e Tenerife dal 6 al 12 giugno 2026.', location: 'Spagna' },
}

const TIMELINE_FR: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Naissance à Chicago', description: 'Naît le 14 septembre à Chicago (Illinois), dans une famille catholique aux racines françaises, italiennes et espagnoles. Il est le cadet de trois frères.', location: 'Chicago, États-Unis' },
  '1977-math': { title: 'Licence en Mathématiques', description: 'Diplômé en Mathématiques de l\'Université Villanova (Pennsylvanie), institution augustine.', location: 'Villanova, États-Unis' },
  '1977-osa': { title: 'Entre dans l\'Ordre de Saint-Augustin', description: 'Entre au noviciat augustin à Saint-Louis (Missouri). Étudie la théologie à la Catholic Theological Union de Chicago.', location: 'Saint-Louis, États-Unis' },
  '1982-06': { title: 'Ordination sacerdotale', description: 'Ordonné prêtre le 19 juin 1982 à Rome. Prononce sa profession solennelle dans l\'Ordre.', location: 'Rome, Italie' },
  '1985': { title: 'Missionnaire au Pérou', description: 'Commence sa longue période missionnaire dans le nord du Pérou, région de Chulucanas puis Trujillo. Pastorale rurale, formation de séminaristes, coopératives paysannes.', location: 'Chulucanas, Pérou' },
  '1987': { title: 'Doctorat en Droit Canon', description: 'Défend sa thèse doctorale à l\'Université Pontificale Saint-Thomas d\'Aquin (Angelicum) de Rome, sur le gouvernement du prieur local augustin.', location: 'Rome, Italie' },
  '1999': { title: 'Prieur provincial des augustins à Chicago', description: 'Retourne aux États-Unis pour diriger la province augustine du Midwest.', location: 'Chicago, États-Unis' },
  '2001': { title: 'Prieur Général de l\'Ordre de Saint-Augustin', description: 'Élu plus haut responsable mondial de l\'Ordre de Saint-Augustin. Réélu en 2007. Douze ans au gouvernement central de l\'ordre.', location: 'Rome, Italie' },
  '2014': { title: 'Évêque de Chiclayo', description: 'Le Pape François le nomme administrateur apostolique du diocèse de Chiclayo (Pérou). Obtient la nationalité péruvienne en 2015. En 2015, il est nommé évêque titulaire.', location: 'Chiclayo, Pérou' },
  '2020': { title: 'Pandémie et engagement social', description: 'Durant le COVID-19, il organise à Chiclayo des réseaux d\'aide, de nourriture et de soins. Renforce son profil pastoral proche des plus pauvres.', location: 'Chiclayo, Pérou' },
  '2023-01': { title: 'Préfet du Dicastère pour les Évêques', description: 'Le Pape François l\'appelle à Rome comme préfet du Dicastère pour les Évêques — l\'une des fonctions les plus influentes du Vatican, responsable de proposer les nouveaux évêques dans le monde entier.', location: 'Cité du Vatican' },
  '2023-09': { title: 'Créé cardinal', description: 'Lors du consistoire du 30 septembre 2023, il est créé cardinal avec le titre de Sainte-Monique des Augustins.', location: 'Cité du Vatican' },
  '2025-05-elected': { title: 'Élu Pape', description: 'Après la mort du Pape François le 21 avril 2025, le conclave l\'élit Successeur de Pierre le 8 mai. Il prend le nom de Léon XIV. Premier Pape né aux États-Unis et avec la nationalité péruvienne.', location: 'Cité du Vatican' },
  '2025-05-inicio': { title: 'Début du pontificat', description: 'Messe d\'inauguration du pontificat le 18 mai 2025 sur la place Saint-Pierre. Premières encycliques prévues sur la doctrine sociale, la paix et l\'écologie intégrale.', location: 'Cité du Vatican' },
  '2026-06': { title: 'Voyage apostolique en Espagne', description: 'Premier grand voyage apostolique international en Espagne : Madrid, Barcelone, Grande Canarie et Ténérife du 6 au 12 juin 2026.', location: 'Espagne' },
}

// Mapeo índice → key (el orden en timelineVida coincide con TIMELINE_BASE_KEYS)
function getTimelineKey(index: number): string {
  return TIMELINE_BASE_KEYS[index] || `entry-${index}`
}

// =============================================================================
// Posiciones del magisterio — 8 entradas
// =============================================================================

type PosicionI18n = { tema: string; resumen: string; detalle: string }

const POSICIONES_EN: PosicionI18n[] = [
  { tema: 'Social doctrine and inequality', resumen: 'Continuity of Rerum Novarum adapted to the 21st century.', detalle: 'The central axis of his pontificate. In his first address to the College of Cardinals he explained that he chose the name Leo to link the 19th-century social question with today\'s challenges: job insecurity, rich-poor gap, concentrated technology.' },
  { tema: 'Artificial intelligence', resumen: 'Second industrial revolution demanding Church response.', detalle: 'Leo XIV has made AI a priority of his magisterium. He calls for international regulation guaranteeing human dignity against labour displacement and algorithmic manipulation, and a Church that does not shy away from technology debates.' },
  { tema: 'Migration', resumen: 'Welcome as pastoral priority tied to his biography.', detalle: 'Son of a migrant-rooted family and bishop in Peru for more than three decades, he has placed migration as an ethical test of the century. He insists that no wall is higher than human dignity and criticises the political instrumentalisation of migration.' },
  { tema: 'Pro-life and dignity of the person', resumen: 'Unwavering defence of life from conception to natural death.', detalle: 'Classic firm Church position, with no opening to abortion. He extends the approach to the death penalty, euthanasia and undignified living conditions (poverty, war, trafficking). He has stressed that "pro-life" means defending all life, not just prenatal.' },
  { tema: 'LGBT people and synodality', resumen: 'Pastoral welcome within traditional teaching.', detalle: 'Continues the line of "Fiducia supplicans" of Pope Francis (blessings for people in irregular relationships, without equating to sacramental marriage). Advocates listening and welcoming pastoral care, without altering the doctrine on the sacrament of marriage.' },
  { tema: 'Traditional Mass (Latin rite)', resumen: 'Ecclesial communion above ritual form.', detalle: 'He has remained prudent on Traditionis custodes. Recognises the value of the extraordinary rite for those who live it in ecclesial communion, but discourages its use as an identity banner. Prioritises Church unity over liturgical dispute.' },
  { tema: 'Female ordination to the diaconate', resumen: 'Question open to synodal discernment.', detalle: 'Does not close the door to the study of female diaconate (as Francis did not), but insists that it is an ecclesial discernment, not an ideological demand. Maintains the reservation of the ministerial priesthood to men.' },
  { tema: 'Peace and war', resumen: 'Unarmed and disarming peace, active diplomacy.', detalle: 'From his first words at the Vatican Loggia he mentioned "unarmed and disarming peace". Continues Francis\'s magisterium on Ukraine, Gaza, Sudan and other crises, denouncing the arms race and the use of autonomous weapons.' },
]

const POSICIONES_IT: PosicionI18n[] = [
  { tema: 'Dottrina sociale e disuguaglianza', resumen: 'Continuità della Rerum Novarum adattata al XXI secolo.', detalle: 'L\'asse centrale del suo pontificato. Nel primo discorso al Collegio Cardinalizio ha spiegato di aver scelto il nome Leone per collegare la questione sociale ottocentesca alle sfide attuali: precarietà lavorativa, divario ricchi-poveri, tecnologia concentrata.' },
  { tema: 'Intelligenza artificiale', resumen: 'Seconda rivoluzione industriale che richiede risposta della Chiesa.', detalle: 'Leone XIV ha reso l\'IA una priorità del suo magistero. Chiede una regolamentazione internazionale che garantisca la dignità umana contro la sostituzione lavorativa e la manipolazione algoritmica, e una Chiesa che non rifugga dal dibattito tecnologico.' },
  { tema: 'Migrazioni', resumen: 'Accoglienza come priorità pastorale legata alla sua biografia.', detalle: 'Figlio di una famiglia con radici migranti e vescovo in Perù per oltre tre decenni, ha posto la migrazione come banco di prova etico del secolo. Insiste che nessun muro è più alto della dignità umana e critica la strumentalizzazione politica del fenomeno migratorio.' },
  { tema: 'Pro-vita e dignità della persona', resumen: 'Difesa senza cedimenti della vita dal concepimento alla morte naturale.', detalle: 'Posizione classica e ferma della Chiesa, senza aperture all\'aborto. Estende l\'approccio anche alla pena di morte, all\'eutanasia e alle condizioni di vita indegne (povertà, guerra, tratta). Ha sottolineato che "pro-vita" significa difendere tutta la vita, non solo quella prenatale.' },
  { tema: 'Persone LGBT e sinodalità', resumen: 'Accoglienza pastorale, nel magistero tradizionale.', detalle: 'Continua la linea di "Fiducia supplicans" di Papa Francesco (benedizioni a persone in relazioni irregolari, senza equipararle al matrimonio sacramentale). Auspica una pastorale dell\'ascolto e dell\'accoglienza, senza alterare la dottrina sul sacramento del matrimonio.' },
  { tema: 'Messa tradizionale (rito latino)', resumen: 'Comunione ecclesiale al di sopra della forma rituale.', detalle: 'Si è mantenuto prudente su Traditionis custodes. Riconosce il valore del rito straordinario per chi lo vive in comunione ecclesiale, ma scoraggia il suo uso come bandiera identitaria. Privilegia l\'unità della Chiesa rispetto alla disputa liturgica.' },
  { tema: 'Ordinazione femminile al diaconato', resumen: 'Questione aperta al discernimento sinodale.', detalle: 'Non chiude la porta allo studio del diaconato femminile (come non l\'ha chiusa Francesco), ma insiste che si tratta di un discernimento ecclesiale, non di una rivendicazione ideologica. Mantiene la riserva del sacerdozio ministeriale ai maschi.' },
  { tema: 'Pace e guerra', resumen: 'Pace disarmata e disarmante, diplomazia attiva.', detalle: 'Dalle sue prime parole nella Loggia Vaticana ha menzionato la "pace disarmata e disarmante". Continua il magistero di Francesco su Ucraina, Gaza, Sudan e altre crisi, denunciando la corsa agli armamenti e l\'uso di armi autonome.' },
]

const POSICIONES_FR: PosicionI18n[] = [
  { tema: 'Doctrine sociale et inégalité', resumen: 'Continuité de Rerum Novarum adaptée au XXIe siècle.', detalle: 'L\'axe central de son pontificat. Dans son premier discours au Collège cardinalice, il a expliqué avoir choisi le nom de Léon pour relier la question sociale du XIXe siècle aux défis actuels : précarité du travail, écart riches-pauvres, technologie concentrée.' },
  { tema: 'Intelligence artificielle', resumen: 'Seconde révolution industrielle exigeant une réponse de l\'Église.', detalle: 'Léon XIV a fait de l\'IA une priorité de son magistère. Il appelle à une régulation internationale garantissant la dignité humaine face au remplacement du travail et à la manipulation algorithmique, et une Église qui n\'esquive pas le débat technologique.' },
  { tema: 'Migrations', resumen: 'Accueil comme priorité pastorale liée à sa biographie.', detalle: 'Fils d\'une famille aux racines migrantes et évêque au Pérou pendant plus de trois décennies, il a placé la migration comme épreuve éthique du siècle. Il insiste qu\'aucun mur n\'est plus haut que la dignité humaine et critique l\'instrumentalisation politique de la migration.' },
  { tema: 'Pro-vie et dignité de la personne', resumen: 'Défense sans faille de la vie de la conception à la mort naturelle.', detalle: 'Position classique et ferme de l\'Église, sans ouverture à l\'avortement. Étend l\'approche à la peine de mort, l\'euthanasie et aux conditions de vie indignes (pauvreté, guerre, traite). Il a souligné que "pro-vie" signifie défendre toute vie, pas seulement prénatale.' },
  { tema: 'Personnes LGBT et synodalité', resumen: 'Accueil pastoral, dans le magistère traditionnel.', detalle: 'Poursuit la ligne de "Fiducia supplicans" du Pape François (bénédictions aux personnes en relations irrégulières, sans équivaloir au mariage sacramentel). Prône une pastorale d\'écoute et d\'accueil, sans altérer la doctrine sur le sacrement du mariage.' },
  { tema: 'Messe traditionnelle (rite latin)', resumen: 'Communion ecclésiale au-dessus de la forme rituelle.', detalle: 'Il est resté prudent sur Traditionis custodes. Reconnaît la valeur du rite extraordinaire pour ceux qui le vivent en communion ecclésiale, mais décourage son usage comme bannière identitaire. Privilégie l\'unité de l\'Église au conflit liturgique.' },
  { tema: 'Ordination féminine au diaconat', resumen: 'Question ouverte au discernement synodal.', detalle: 'Ne ferme pas la porte à l\'étude du diaconat féminin (comme François ne l\'a pas fait), mais insiste qu\'il s\'agit d\'un discernement ecclésial, non d\'une revendication idéologique. Maintient la réserve du sacerdoce ministériel aux hommes.' },
  { tema: 'Paix et guerre', resumen: 'Paix désarmée et désarmante, diplomatie active.', detalle: 'Dès ses premières paroles à la Loge vaticane, il a mentionné la "paix désarmée et désarmante". Poursuit le magistère de François sur l\'Ukraine, Gaza, le Soudan et d\'autres crises, dénonçant la course aux armements et l\'usage d\'armes autonomes.' },
]

// =============================================================================
// FAQ — 12 preguntas
// =============================================================================

const FAQ_EN: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'How old is Pope Leo XIV?', respuesta: 'Pope Leo XIV was born on 14 September 1955 in Chicago (United States). He will turn 71 during his apostolic journey to Spain in June 2026.' },
  { pregunta: 'What is Pope Leo XIV\'s real name?', respuesta: 'His birth name is Robert Francis Prevost. He is a religious of the Order of Saint Augustine (OSA). When elected on 8 May 2025 he chose the name Leo XIV.' },
  { pregunta: 'Why did the Pope choose the name Leo XIV?', respuesta: 'In homage to Leo XIII (1878-1903), author of the encyclical Rerum Novarum (1891) which inaugurated the Church\'s Social Doctrine. He has explained that, as Leo XIII responded to the industrial revolution, he wants to respond to the technological and artificial intelligence revolution.' },
  { pregunta: 'How tall is Pope Leo XIV?', respuesta: 'Pope Leo XIV is approximately 1.80 metres (5\'11"). He is one of the tallest popes in recent history.' },
  { pregunta: 'How many languages does Pope Leo XIV speak?', respuesta: 'Pope Leo XIV speaks Spanish, English, Italian, French and Portuguese fluently. He reads Latin. He understands and uses expressions in Quechua, learned during his decades as a missionary in Peru. One of the most polyglot popes in history.' },
  { pregunta: 'Is Pope Leo XIV conservative or progressive?', respuesta: 'He avoids those labels. He sits in continuity with Popes Francis, Benedict XVI and John Paul II. Doctrinally firm (pro-life, sacramental marriage man-woman) and pastorally welcoming (continues synodal line and welcoming of LGBT people). His priorities are social doctrine, peace, migration and AI.' },
  { pregunta: 'Where is Pope Leo XIV from?', respuesta: 'Born in Chicago, Illinois (United States). First Pope born in the United States. In 2015 he obtained Peruvian nationality after decades as missionary and bishop in Peru, making him also the first Pope with a Peruvian passport.' },
  { pregunta: 'Who are Pope Leo XIV\'s parents?', respuesta: 'His father, Louis Marius Prevost, was a WWII veteran and superintendent of Catholic schools (died 1997). His mother, Mildred Martínez, of Spanish-Italian descent with roots in Louisiana, was a librarian and educator (died 1990). He has two brothers: Louis and John.' },
  { pregunta: 'What is Pope Leo XIV\'s motto?', respuesta: 'His episcopal motto, kept as papal motto, is "In illo uno unum" ("In him who is one, let us be one"). A phrase from Saint Augustine\'s commentary on Psalm 127, expressing his priority of ecclesial unity.' },
  { pregunta: 'What is Pope Leo XIV\'s education?', respuesta: 'Bachelor\'s in Mathematics from Villanova University (Pennsylvania, 1977). Master of Divinity from Catholic Theological Union of Chicago. Doctorate in Canon Law from Pontifical University of Saint Thomas Aquinas (Angelicum) in Rome, 1987.' },
  { pregunta: 'When was Pope Leo XIV elected?', respuesta: 'Elected on 8 May 2025 in the fourth vote of the conclave, after the death of Pope Francis on 21 April 2025. Mass beginning of pontificate on 18 May 2025.' },
  { pregunta: 'When will Pope Leo XIV visit Spain?', respuesta: 'Pope Leo XIV\'s apostolic journey to Spain will take place from 6 to 12 June 2026. He will visit four cities: Madrid (6-9 June), Barcelona (9-10 June), Gran Canaria (11 June) and Tenerife (11-12 June).' },
]

const FAQ_IT: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Quanti anni ha Papa Leone XIV?', respuesta: 'Papa Leone XIV è nato il 14 settembre 1955 a Chicago (Stati Uniti). Compirà 71 anni durante il suo viaggio apostolico in Spagna nel giugno 2026.' },
  { pregunta: 'Qual è il vero nome di Papa Leone XIV?', respuesta: 'Il suo nome di battesimo è Robert Francis Prevost. È religioso dell\'Ordine di Sant\'Agostino (OSA). Alla sua elezione l\'8 maggio 2025 ha scelto il nome di Leone XIV.' },
  { pregunta: 'Perché il Papa ha scelto il nome di Leone XIV?', respuesta: 'In omaggio a Leone XIII (1878-1903), autore dell\'enciclica Rerum Novarum (1891) che inaugurò la Dottrina Sociale della Chiesa. Ha spiegato che, come Leone XIII rispose alla rivoluzione industriale, lui vuole rispondere alla rivoluzione tecnologica e dell\'intelligenza artificiale.' },
  { pregunta: 'Quanto è alto Papa Leone XIV?', respuesta: 'Papa Leone XIV è alto circa 1,80 metri. È uno dei papi più alti della storia recente.' },
  { pregunta: 'Quante lingue parla Papa Leone XIV?', respuesta: 'Papa Leone XIV parla fluentemente spagnolo, inglese, italiano, francese e portoghese. Legge il latino. Comprende e usa espressioni in quechua, apprese durante i suoi decenni come missionario in Perù. Uno dei papi più poliglotti della storia.' },
  { pregunta: 'Papa Leone XIV è conservatore o progressista?', respuesta: 'Evita queste etichette. Si pone in continuità con i Papi Francesco, Benedetto XVI e Giovanni Paolo II. Dottrinalmente fermo (pro-vita, matrimonio sacramentale uomo-donna) e pastoralmente accogliente (continua la linea sinodale e l\'accoglienza delle persone LGBT). Le sue priorità sono dottrina sociale, pace, migrazioni e IA.' },
  { pregunta: 'Di dov\'è Papa Leone XIV?', respuesta: 'Nato a Chicago, Illinois (Stati Uniti). Primo Papa nato negli Stati Uniti. Nel 2015 ha ottenuto la nazionalità peruviana dopo decenni come missionario e vescovo in Perù, il che lo rende anche il primo Papa con passaporto peruviano.' },
  { pregunta: 'Chi sono i genitori di Papa Leone XIV?', respuesta: 'Suo padre, Louis Marius Prevost, è stato un veterano della II Guerra Mondiale e sovrintendente di scuole cattoliche (morto nel 1997). Sua madre, Mildred Martínez, di origine spagnola-italiana con radici in Louisiana, è stata bibliotecaria ed educatrice (morta nel 1990). Ha due fratelli: Louis e John.' },
  { pregunta: 'Qual è il motto di Papa Leone XIV?', respuesta: 'Il suo motto episcopale, conservato come motto papale, è "In illo uno unum" ("In colui che è uno, siamo uno"). Una frase dal commento di Sant\'Agostino al Salmo 127 che esprime la sua priorità di unità ecclesiale.' },
  { pregunta: 'Quali studi ha Papa Leone XIV?', respuesta: 'Laurea in Matematica alla Villanova University (Pennsylvania, 1977). Master of Divinity dalla Catholic Theological Union di Chicago. Dottorato in Diritto Canonico dalla Pontificia Università San Tommaso d\'Aquino (Angelicum) di Roma, 1987.' },
  { pregunta: 'Quando è stato eletto Papa Leone XIV?', respuesta: 'Eletto l\'8 maggio 2025, alla quarta votazione del conclave, dopo la morte di Papa Francesco il 21 aprile 2025. Messa di inizio del pontificato il 18 maggio 2025.' },
  { pregunta: 'Quando Papa Leone XIV visiterà la Spagna?', respuesta: 'Il viaggio apostolico di Papa Leone XIV in Spagna si svolgerà dal 6 al 12 giugno 2026. Visiterà quattro città: Madrid (6-9 giugno), Barcellona (9-10 giugno), Gran Canaria (11 giugno) e Tenerife (11-12 giugno).' },
]

const FAQ_FR: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Quel âge a le Pape Léon XIV ?', respuesta: 'Le Pape Léon XIV est né le 14 septembre 1955 à Chicago (États-Unis). Il aura 71 ans pendant son voyage apostolique en Espagne en juin 2026.' },
  { pregunta: 'Quel est le vrai nom du Pape Léon XIV ?', respuesta: 'Son nom de naissance est Robert Francis Prevost. Il est religieux de l\'Ordre de Saint-Augustin (OSA). Élu le 8 mai 2025, il a choisi le nom de Léon XIV.' },
  { pregunta: 'Pourquoi le Pape a-t-il choisi le nom de Léon XIV ?', respuesta: 'En hommage à Léon XIII (1878-1903), auteur de l\'encyclique Rerum Novarum (1891) qui inaugura la Doctrine Sociale de l\'Église. Il a expliqué que, comme Léon XIII répondit à la révolution industrielle, il veut répondre à la révolution technologique et à l\'intelligence artificielle.' },
  { pregunta: 'Quelle est la taille du Pape Léon XIV ?', respuesta: 'Le Pape Léon XIV mesure environ 1,80 mètre. Il est l\'un des papes les plus grands de l\'histoire récente.' },
  { pregunta: 'Combien de langues parle le Pape Léon XIV ?', respuesta: 'Le Pape Léon XIV parle couramment espagnol, anglais, italien, français et portugais. Il lit le latin. Il comprend et utilise des expressions en quechua, apprises durant ses décennies comme missionnaire au Pérou. L\'un des papes les plus polyglottes de l\'histoire.' },
  { pregunta: 'Le Pape Léon XIV est-il conservateur ou progressiste ?', respuesta: 'Il évite ces étiquettes. Il se place dans la continuité des Papes François, Benoît XVI et Jean-Paul II. Doctrinalement ferme (pro-vie, mariage sacramentel homme-femme) et pastoralement accueillant (continue la ligne synodale et l\'accueil des personnes LGBT). Ses priorités sont la doctrine sociale, la paix, les migrations et l\'IA.' },
  { pregunta: 'D\'où vient le Pape Léon XIV ?', respuesta: 'Né à Chicago, Illinois (États-Unis). Premier Pape né aux États-Unis. En 2015, il a obtenu la nationalité péruvienne après des décennies comme missionnaire et évêque au Pérou, ce qui fait de lui aussi le premier Pape avec un passeport péruvien.' },
  { pregunta: 'Qui sont les parents du Pape Léon XIV ?', respuesta: 'Son père, Louis Marius Prevost, fut vétéran de la Seconde Guerre mondiale et surintendant d\'écoles catholiques (décédé en 1997). Sa mère, Mildred Martínez, d\'ascendance espagnole-italienne avec des racines en Louisiane, fut bibliothécaire et éducatrice (décédée en 1990). Il a deux frères : Louis et John.' },
  { pregunta: 'Quelle est la devise du Pape Léon XIV ?', respuesta: 'Sa devise épiscopale, conservée comme devise papale, est "In illo uno unum" ("En celui qui est un, soyons un"). Une phrase du commentaire de Saint Augustin sur le Psaume 127, exprimant sa priorité d\'unité ecclésiale.' },
  { pregunta: 'Quelle est la formation du Pape Léon XIV ?', respuesta: 'Licence en Mathématiques de l\'Université Villanova (Pennsylvanie, 1977). Master of Divinity de la Catholic Theological Union de Chicago. Doctorat en Droit Canon de l\'Université Pontificale Saint-Thomas d\'Aquin (Angelicum) de Rome, 1987.' },
  { pregunta: 'Quand le Pape Léon XIV a-t-il été élu ?', respuesta: 'Élu le 8 mai 2025, au quatrième vote du conclave, après la mort du Pape François le 21 avril 2025. Messe d\'inauguration du pontificat le 18 mai 2025.' },
  { pregunta: 'Quand le Pape Léon XIV visitera-t-il l\'Espagne ?', respuesta: 'Le voyage apostolique du Pape Léon XIV en Espagne aura lieu du 6 au 12 juin 2026. Il visitera quatre villes : Madrid (6-9 juin), Barcelone (9-10 juin), Grande Canarie (11 juin) et Ténérife (11-12 juin).' },
]

// =============================================================================
// Getters
// =============================================================================

export function getTimelineVida(locale: Locale): TimelineEntry[] {
  if (locale === 'es') return timelineVida
  const dict =
    locale === 'en' ? TIMELINE_EN :
    locale === 'it' ? TIMELINE_IT :
    locale === 'fr' ? TIMELINE_FR : null
  if (!dict) return timelineVida // fallback ES
  return timelineVida.map((e, i) => {
    const tr = dict[getTimelineKey(i)]
    if (!tr) return e
    return { ...e, title: tr.title, description: tr.description, location: tr.location ?? e.location }
  })
}

export function getPosicionesMagisterio(locale: Locale): PosicionMagisterio[] {
  if (locale === 'es') return posicionesMagisterio
  const dict =
    locale === 'en' ? POSICIONES_EN :
    locale === 'it' ? POSICIONES_IT :
    locale === 'fr' ? POSICIONES_FR : null
  if (!dict) return posicionesMagisterio
  return posicionesMagisterio.map((p, i) => {
    const tr = dict[i]
    if (!tr) return p
    return { ...p, tema: tr.tema, resumen: tr.resumen, detalle: tr.detalle }
  })
}

export function getFaqPapaLeonXIV(locale: Locale): FaqPapa[] {
  if (locale === 'es') return faqPapaLeonXIV
  const dict =
    locale === 'en' ? FAQ_EN :
    locale === 'it' ? FAQ_IT :
    locale === 'fr' ? FAQ_FR : null
  if (!dict) return faqPapaLeonXIV
  return dict as FaqPapa[]
}

// Re-export de los datos que permanecen universales (no traducidos todavía)
export { prioridadesMagisterio, citasRelevantes, raicesChicago, familiaPapa, biografiaPapa }
export type { TimelineEntry, PosicionMagisterio, FaqPapa, PrioridadMagisterio, CitaPapa, MiembroFamilia }
