/**
 * Traducciones de razonesEleccion, lemasPrevios y faqLema de /alzad-la-mirada
 * a los 8 idiomas no-ES.
 *
 * Las traducciones del versículo (Jn 4,35) ya están en data/alzadLaMirada.ts.
 */

import type { Locale } from '@/data/i18n/types'
import {
  razonesEleccion,
  lemasPrevios,
  faqLema,
  lemaData,
  traduccionesLema,
  type RazonEleccion,
  type FaqLema,
} from '@/data/alzadLaMirada'

// =============================================================================
// Razones de la elección del lema
// =============================================================================

const RAZONES_EN: RazonEleccion[] = [
  { titulo: 'A call to hope in a secular context', descripcion: 'Spain is going through an accelerated process of dechristianisation. "Lift up your eyes" invites Spanish Catholics —and society as a whole— not to be reduced to resignation or apathy, but to recognise the signs of hope and the maturity of the evangelising mission even in an environment perceived as hostile.' },
  { titulo: 'Continuity with Leo XIV and Social Doctrine', descripcion: 'The motto connects with the magisterium of Pope Leo XIV: to look beyond the short economic, technological and political term to attend to the real needs of people. "Lifting up the eyes" is the gesture that today\'s social question demands in the face of artificial intelligence, migration and inequality.' },
  { titulo: 'Samaritan and migrant dimension', descripcion: 'The passage takes place in Samaria, outside Judea, with a woman —a foreigner— as the first missionary of her people. Leo XIV\'s visit includes the Canary Islands because of their status as an Atlantic migratory gateway: the Samaritan echo of the passage takes on a very concrete pastoral force.' },
  { titulo: 'Marian and evangelical simplicity', descripcion: 'The phrase is brief, easy to remember and can be interpreted both in terms of personal prayer ("look up, ask with hope") and community prayer (looking together at the harvest). Its very simplicity makes it translatable into 9 languages without losing force.' },
  { titulo: 'Powerful visual image for communication', descripcion: 'Unlike more abstract mottos, "Lift up your eyes" generates an immediate image —raising one\'s eyes— that works as a visual sign on posters, logos and audiovisuals. The Spanish Episcopal Conference has adopted this image as the graphic sign of the visit.' },
]

const RAZONES_IT: RazonEleccion[] = [
  { titulo: 'Una chiamata alla speranza in un contesto secolarizzato', descripcion: 'La Spagna attraversa un accelerato processo di scristianizzazione. "Alzate gli occhi" invita i cattolici spagnoli —e la società nel suo insieme— a non rassegnarsi né cedere all\'apatia, ma a riconoscere i segni della speranza e la maturità della missione evangelizzatrice anche in un ambiente percepito come ostile.' },
  { titulo: 'Continuità con Leone XIV e la Dottrina Sociale', descripcion: 'Il motto si collega al magistero di Papa Leone XIV: guardare oltre il breve termine economico, tecnologico e politico per attendere ai bisogni reali delle persone. "Alzare lo sguardo" è il gesto che oggi la questione sociale esige di fronte all\'intelligenza artificiale, alle migrazioni e alla disuguaglianza.' },
  { titulo: 'Dimensione samaritana e migrante', descripcion: 'Il brano si svolge in Samaria, fuori dalla Giudea, con una donna —straniera— come prima missionaria del suo popolo. Il viaggio di Leone XIV include le Canarie per la loro condizione di porta migratoria atlantica: l\'eco samaritana del passo assume così una forza pastorale molto concreta.' },
  { titulo: 'Semplicità mariana ed evangelica', descripcion: 'La frase è breve, facile da ricordare e si può intendere sia in chiave di preghiera personale ("alza gli occhi, chiedi con speranza") sia comunitaria (guardare insieme la messe). La sua stessa semplicità la rende traducibile in 9 lingue senza perdere forza.' },
  { titulo: 'Immagine visiva potente per la comunicazione', descripcion: 'A differenza di motti più astratti, "Alzate gli occhi" genera un\'immagine immediata —il sollevare lo sguardo— che funziona come segno visivo su manifesti, loghi e audiovisivi. La Conferenza Episcopale Spagnola ha adottato questa immagine come segno grafico del viaggio.' },
]

const RAZONES_FR: RazonEleccion[] = [
  { titulo: 'Un appel à l\'espérance dans un contexte sécularisé', descripcion: 'L\'Espagne traverse un processus accéléré de déchristianisation. "Levez les yeux" invite les catholiques espagnols —et la société tout entière— à ne pas se réduire à la résignation ou à l\'apathie, mais à reconnaître les signes de l\'espérance et la maturité de la mission évangélisatrice même dans un milieu perçu comme hostile.' },
  { titulo: 'Continuité avec Léon XIV et la Doctrine sociale', descripcion: 'La devise se relie au magistère du Pape Léon XIV : regarder au-delà du court terme économique, technologique et politique pour répondre aux besoins réels des personnes. "Lever les yeux" est le geste que la question sociale d\'aujourd\'hui exige face à l\'intelligence artificielle, aux migrations et à l\'inégalité.' },
  { titulo: 'Dimension samaritaine et migratoire', descripcion: 'Le passage se déroule en Samarie, hors de Judée, avec une femme —étrangère— comme première missionnaire de son peuple. Le voyage de Léon XIV inclut les Canaries en raison de leur statut de porte migratoire atlantique : l\'écho samaritain du passage prend ainsi une force pastorale très concrète.' },
  { titulo: 'Simplicité mariale et évangélique', descripcion: 'La phrase est brève, facile à retenir et peut s\'entendre à la fois comme prière personnelle ("lève les yeux, demande avec espérance") et communautaire (regarder ensemble la moisson). Sa simplicité même la rend traduisible en 9 langues sans rien perdre de sa force.' },
  { titulo: 'Image visuelle puissante pour la communication', descripcion: 'Contrairement aux devises plus abstraites, "Levez les yeux" génère une image immédiate —relever le regard— qui fonctionne comme signe visuel sur affiches, logos et audiovisuels. La Conférence Épiscopale Espagnole a adopté cette image comme signe graphique du voyage.' },
]

const RAZONES_DE: RazonEleccion[] = [
  { titulo: 'Ein Ruf zur Hoffnung in säkularem Kontext', descripcion: 'Spanien durchläuft einen beschleunigten Entchristianisierungsprozess. „Erhebt eure Augen" lädt die spanischen Katholiken —und die ganze Gesellschaft— ein, sich nicht mit Resignation oder Apathie zufriedenzugeben, sondern die Zeichen der Hoffnung und die Reife des Evangelisierungsauftrags auch in einem als feindselig empfundenen Umfeld zu erkennen.' },
  { titulo: 'Kontinuität mit Leo XIV. und der Soziallehre', descripcion: 'Der Leitspruch knüpft an das Magisterium von Papst Leo XIV. an: über den kurzfristigen wirtschaftlichen, technologischen und politischen Horizont hinauszublicken, um den wirklichen Bedürfnissen der Menschen zu begegnen. „Den Blick zu erheben" ist die Geste, die die heutige soziale Frage angesichts künstlicher Intelligenz, Migration und Ungleichheit verlangt.' },
  { titulo: 'Samaritanische und migrantische Dimension', descripcion: 'Die Stelle spielt in Samarien, außerhalb Judäas, mit einer Frau —einer Fremden— als erster Missionarin ihres Volkes. Der Besuch Leos XIV. umfasst die Kanarischen Inseln wegen ihrer Stellung als atlantisches Migrationstor: der samaritanische Widerhall der Stelle gewinnt so eine sehr konkrete pastorale Kraft.' },
  { titulo: 'Marianische und evangelische Schlichtheit', descripcion: 'Der Satz ist kurz, leicht zu merken und kann sowohl als persönliches Gebet verstanden werden („erhebe die Augen, bitte mit Hoffnung") als auch als gemeinschaftliches Gebet (gemeinsam auf die Ernte schauen). Gerade seine Schlichtheit macht ihn in 9 Sprachen übersetzbar, ohne an Kraft zu verlieren.' },
  { titulo: 'Starkes visuelles Bild für die Kommunikation', descripcion: 'Anders als abstraktere Leitsprüche erzeugt „Erhebt eure Augen" ein unmittelbares Bild —das Heben des Blicks—, das als visuelles Zeichen auf Plakaten, Logos und audiovisuellen Medien funktioniert. Die Spanische Bischofskonferenz hat dieses Bild als grafisches Zeichen der Reise übernommen.' },
]

const RAZONES_PT: RazonEleccion[] = [
  { titulo: 'Um apelo à esperança num contexto secularizado', descripcion: 'Espanha atravessa um processo acelerado de descristianização. "Levantai os olhos" convida os católicos espanhóis —e a sociedade no seu todo— a não se reduzirem à resignação ou à apatia, mas a reconhecerem os sinais da esperança e a maturidade da missão evangelizadora mesmo num ambiente percebido como hostil.' },
  { titulo: 'Continuidade com Leão XIV e a Doutrina Social', descripcion: 'O lema liga-se ao magistério do Papa Leão XIV: olhar para além do curto prazo económico, tecnológico e político para atender às necessidades reais das pessoas. "Levantar o olhar" é o gesto que a questão social de hoje exige face à inteligência artificial, às migrações e à desigualdade.' },
  { titulo: 'Dimensão samaritana e migrante', descripcion: 'O texto desenrola-se na Samaria, fora da Judeia, com uma mulher —estrangeira— como primeira missionária do seu povo. A viagem de Leão XIV inclui as Canárias pela sua condição de porta migratória atlântica: o eco samaritano do passo ganha assim uma força pastoral muito concreta.' },
  { titulo: 'Simplicidade mariana e evangélica', descripcion: 'A frase é breve, fácil de recordar e pode entender-se tanto em chave de oração pessoal ("levanta os olhos, pede com esperança") como comunitária (olhar juntos para a seara). A sua própria simplicidade torna-a traduzível para 9 línguas sem perder força.' },
  { titulo: 'Imagem visual potente para a comunicação', descripcion: 'Ao contrário de lemas mais abstratos, "Levantai os olhos" gera uma imagem imediata —erguer o olhar— que funciona como sinal visual em cartazes, logótipos e audiovisuais. A Conferência Episcopal Espanhola adotou esta imagem como signo gráfico da viagem.' },
]

const RAZONES_CA: RazonEleccion[] = [
  { titulo: 'Una crida a l\'esperança en un context secularitzat', descripcion: 'Espanya travessa un procés accelerat de descristianització. "Alceu els ulls" convida els catòlics espanyols —i la societat en conjunt— a no reduir-se a la resignació o l\'apatia, sinó a reconèixer els signes de l\'esperança i la maduresa de la missió evangelitzadora fins i tot en un entorn percebut com a hostil.' },
  { titulo: 'Continuïtat amb Lleó XIV i la Doctrina Social', descripcion: 'El lema connecta amb el magisteri del Papa Lleó XIV: mirar més enllà del curt termini econòmic, tecnològic i polític per atendre les necessitats reals de les persones. "Alçar la mirada" és el gest que la qüestió social d\'avui exigeix davant la intel·ligència artificial, les migracions i la desigualtat.' },
  { titulo: 'Dimensió samaritana i migrant', descripcion: 'El passatge es desenvolupa a Samaria, fora de Judea, amb una dona —estrangera— com a primera missionera del seu poble. El viatge de Lleó XIV inclou les Canàries per la seva condició de porta migratòria atlàntica: l\'eco samarità del passatge adquireix així una força pastoral molt concreta.' },
  { titulo: 'Senzillesa mariana i evangèlica', descripcion: 'La frase és breu, fàcil de recordar i es pot entendre tant en clau d\'oració personal ("alça els ulls, demana amb esperança") com comunitària (mirar junts la collita). La seva pròpia senzillesa la fa traduïble a 9 llengües sense perdre força.' },
  { titulo: 'Imatge visual potent per a la comunicació', descripcion: 'A diferència de lemes més abstractes, "Alceu els ulls" genera una imatge immediata —aixecar la mirada— que funciona com a signe visual en cartells, logos i audiovisuals. La Conferència Episcopal Espanyola ha adoptat aquesta imatge com a signe gràfic del viatge.' },
]

const RAZONES_GL: RazonEleccion[] = [
  { titulo: 'Unha chamada á esperanza nun contexto secularizado', descripcion: 'España atravesa un proceso acelerado de descristianización. "Erguei os ollos" convida os católicos españois —e a sociedade no seu conxunto— a non reducirse á resignación ou á apatía, senón a recoñecer os signos da esperanza e a madurez da misión evanxelizadora mesmo nun ambiente percibido como hostil.' },
  { titulo: 'Continuidade con León XIV e a Doutrina Social', descripcion: 'O lema conecta co maxisterio do Papa León XIV: mirar máis aló do curto prazo económico, tecnolóxico e político para atender ás necesidades reais das persoas. "Erguer a mirada" é o xesto que a cuestión social de hoxe esixe ante a intelixencia artificial, as migracións e a desigualdade.' },
  { titulo: 'Dimensión samaritana e migrante', descripcion: 'O pasaxe desenvólvese en Samaria, fóra de Xudea, cunha muller —estranxeira— como primeira misioneira do seu pobo. A viaxe de León XIV inclúe Canarias pola súa condición de porta migratoria atlántica: o eco samaritano do paso adquire así unha forza pastoral moi concreta.' },
  { titulo: 'Sinxeleza mariana e evanxélica', descripcion: 'A frase é breve, fácil de lembrar e pode entenderse tanto en clave de oración persoal ("ergue os ollos, pide con esperanza") como comunitaria (ollar xuntos a sementeira). A súa propia sinxeleza faina traducible a 9 linguas sen perder forza.' },
  { titulo: 'Imaxe visual potente para a comunicación', descripcion: 'A diferenza de lemas máis abstractos, "Erguei os ollos" xera unha imaxe inmediata —erguer a mirada— que funciona como signo visual en carteis, logos e audiovisuais. A Conferencia Episcopal Española adoptou esta imaxe como signo gráfico da viaxe.' },
]

const RAZONES_EU: RazonEleccion[] = [
  { titulo: 'Itxaropenerako deia testuinguru sekularizatuan', descripcion: 'Espainia kristautasunaren galera azkartu bat bizitzen ari da. "Jaso begiak" katoliko espainiarrei —eta gizarte osoari— gonbita egiten die etsipenera edo apatiara ez murrizteko, baizik eta itxaropenaren zeinuak eta ebanjelizazio-misioaren heldutasuna aitortzeko, ingurune etsai bat irizten zaionean ere.' },
  { titulo: 'Leon XIV.arekiko eta Dotrina Sozialarekiko jarraitutasuna', descripcion: 'Leloa Leon XIV. Aita Santuaren magisterioarekin lotzen da: epe laburreko ikuspegi ekonomiko, teknologiko eta politikoaz haratago begiratu, pertsonen benetako beharrei erantzuteko. "Begirada jasotzea" da gaur egungo gizarte-galderak adimen artifizialaren, migrazioen eta desberdintasunaren aurrean eskatzen duen keinua.' },
  { titulo: 'Samariar eta migrante dimentsioa', descripcion: 'Pasartea Samarian gertatzen da, Judeatik kanpo, emakume bat —atzerritarra— bere herriko lehen misiolari gisa. Leon XIV.aren bidaiak Kanariak hartzen ditu bere baitan, atlantiar atari migratorio izatearen kondizioagatik: pasartearen oihartzun samariarrak indar pastoral oso zehatza hartzen du horrela.' },
  { titulo: 'Maria-tasun eta ebanjelio-sinpletasuna', descripcion: 'Esaldia laburra da, gogoratzeko erraza, eta bai otoitz pertsonalaren giltzan ("jaso begiak, eskatu itxaropenez") bai komunitarioan (uzta elkarrekin begiratu) uler daiteke. Bere sinpletasunak berak ematen dio 9 hizkuntzatara itzulgarri izateko aukera, indarra galdu gabe.' },
  { titulo: 'Komunikaziorako irudi bisual indartsua', descripcion: 'Lelo abstraktuagoekin alderatuta, "Jaso begiak" berehalako irudia sortzen du —begirada altxatzea— eta zeinu bisual gisa funtzionatzen du kartel, logo eta ikus-entzunezkoetan. Espainiako Apezpiku Konferentziak irudi hau hartu du bidaiaren zeinu grafiko gisa.' },
]

// =============================================================================
// Lemas previos (visitas papales históricas a España)
// =============================================================================

const LEMAS_PREVIOS_EN = [
  { papa: 'Benedict XVI', año: 2011, visita: 'WYD Madrid', lema: 'Rooted and built up in Christ, firm in the faith (Col 2:7)' },
  { papa: 'Benedict XVI', año: 2010, visita: 'Santiago and Barcelona', lema: 'Pilgrims in faith / Dedication of the Sagrada Familia' },
  { papa: 'John Paul II', año: 2003, visita: 'Madrid', lema: 'Canonisation of five Spaniards' },
  { papa: 'John Paul II', año: 1989, visita: 'WYD Santiago de Compostela', lema: 'I am the Way, the Truth and the Life (Jn 14:6)' },
  { papa: 'John Paul II', año: 1982, visita: 'First visit to Spain', lema: 'Witness of Jesus Christ, Son of the Living God' },
]

const LEMAS_PREVIOS_IT = [
  { papa: 'Benedetto XVI', año: 2011, visita: 'GMG Madrid', lema: 'Radicati e fondati in Cristo, saldi nella fede (Col 2,7)' },
  { papa: 'Benedetto XVI', año: 2010, visita: 'Santiago e Barcellona', lema: 'Pellegrini nella fede / Dedicazione della Sagrada Familia' },
  { papa: 'Giovanni Paolo II', año: 2003, visita: 'Madrid', lema: 'Canonizzazione di cinque spagnoli' },
  { papa: 'Giovanni Paolo II', año: 1989, visita: 'GMG Santiago de Compostela', lema: 'Io sono la Via, la Verità e la Vita (Gv 14,6)' },
  { papa: 'Giovanni Paolo II', año: 1982, visita: 'Prima visita in Spagna', lema: 'Testimoni di Gesù Cristo, Figlio del Dio vivo' },
]

const LEMAS_PREVIOS_FR = [
  { papa: 'Benoît XVI', año: 2011, visita: 'JMJ Madrid', lema: 'Enracinés et fondés en Christ, fermes dans la foi (Col 2, 7)' },
  { papa: 'Benoît XVI', año: 2010, visita: 'Saint-Jacques et Barcelone', lema: 'Pèlerins dans la foi / Dédicace de la Sagrada Familia' },
  { papa: 'Jean-Paul II', año: 2003, visita: 'Madrid', lema: 'Canonisation de cinq Espagnols' },
  { papa: 'Jean-Paul II', año: 1989, visita: 'JMJ Saint-Jacques-de-Compostelle', lema: 'Je suis le Chemin, la Vérité et la Vie (Jn 14, 6)' },
  { papa: 'Jean-Paul II', año: 1982, visita: 'Première visite en Espagne', lema: 'Témoins de Jésus-Christ, Fils du Dieu vivant' },
]

const LEMAS_PREVIOS_DE = [
  { papa: 'Benedikt XVI.', año: 2011, visita: 'Weltjugendtag Madrid', lema: 'In Christus verwurzelt und auf ihn gegründet, fest im Glauben (Kol 2,7)' },
  { papa: 'Benedikt XVI.', año: 2010, visita: 'Santiago und Barcelona', lema: 'Pilger im Glauben / Weihe der Sagrada Familia' },
  { papa: 'Johannes Paul II.', año: 2003, visita: 'Madrid', lema: 'Heiligsprechung von fünf Spaniern' },
  { papa: 'Johannes Paul II.', año: 1989, visita: 'Weltjugendtag Santiago de Compostela', lema: 'Ich bin der Weg, die Wahrheit und das Leben (Joh 14,6)' },
  { papa: 'Johannes Paul II.', año: 1982, visita: 'Erste Spanienreise', lema: 'Zeugen Jesu Christi, des Sohnes des lebendigen Gottes' },
]

const LEMAS_PREVIOS_PT = [
  { papa: 'Bento XVI', año: 2011, visita: 'JMJ Madrid', lema: 'Radicados e edificados em Cristo, firmes na fé (Cl 2,7)' },
  { papa: 'Bento XVI', año: 2010, visita: 'Santiago e Barcelona', lema: 'Peregrinos na fé / Dedicação da Sagrada Família' },
  { papa: 'João Paulo II', año: 2003, visita: 'Madrid', lema: 'Canonização de cinco espanhóis' },
  { papa: 'João Paulo II', año: 1989, visita: 'JMJ Santiago de Compostela', lema: 'Eu sou o Caminho, a Verdade e a Vida (Jo 14,6)' },
  { papa: 'João Paulo II', año: 1982, visita: 'Primeira visita a Espanha', lema: 'Testemunhas de Jesus Cristo, Filho do Deus vivo' },
]

const LEMAS_PREVIOS_CA = [
  { papa: 'Benet XVI', año: 2011, visita: 'JMJ Madrid', lema: 'Arrelats i edificats en Crist, ferms en la fe (Col 2,7)' },
  { papa: 'Benet XVI', año: 2010, visita: 'Santiago i Barcelona', lema: 'Pelegrins en la fe / Dedicació de la Sagrada Família' },
  { papa: 'Joan Pau II', año: 2003, visita: 'Madrid', lema: 'Canonització de cinc espanyols' },
  { papa: 'Joan Pau II', año: 1989, visita: 'JMJ Santiago de Compostel·la', lema: 'Jo sóc el Camí, la Veritat i la Vida (Jn 14,6)' },
  { papa: 'Joan Pau II', año: 1982, visita: 'Primera visita a Espanya', lema: 'Testimonis de Jesucrist, Fill del Déu vivent' },
]

const LEMAS_PREVIOS_GL = [
  { papa: 'Bieito XVI', año: 2011, visita: 'XMX Madrid', lema: 'Arraigados e edificados en Cristo, firmes na fe (Col 2,7)' },
  { papa: 'Bieito XVI', año: 2010, visita: 'Santiago e Barcelona', lema: 'Peregrinos na fe / Dedicación da Sagrada Familia' },
  { papa: 'Xoán Paulo II', año: 2003, visita: 'Madrid', lema: 'Canonización de cinco españois' },
  { papa: 'Xoán Paulo II', año: 1989, visita: 'XMX Santiago de Compostela', lema: 'Eu son o Camiño, a Verdade e a Vida (Xn 14,6)' },
  { papa: 'Xoán Paulo II', año: 1982, visita: 'Primeira visita a España', lema: 'Testemuñas de Xesús Cristo, Fillo do Deus vivo' },
]

const LEMAS_PREVIOS_EU = [
  { papa: 'Benedikto XVI.a', año: 2011, visita: 'GMJ Madril', lema: 'Kristoren baitan errotuak eta eraikiak, sinesmenean sendoak (Kol 2,7)' },
  { papa: 'Benedikto XVI.a', año: 2010, visita: 'Santiago eta Bartzelona', lema: 'Sinesmeneko erromesak / Sagrada Familiaren dedikazioa' },
  { papa: 'Joan Paulo II.a', año: 2003, visita: 'Madril', lema: 'Bost espainiarren kanonizazioa' },
  { papa: 'Joan Paulo II.a', año: 1989, visita: 'GMJ Santiago de Compostela', lema: 'Ni naiz Bidea, Egia eta Bizia (Jn 14,6)' },
  { papa: 'Joan Paulo II.a', año: 1982, visita: 'Lehen Espainia bisita', lema: 'Jesu Kristoren, Jainko biziaren Semearen, lekukoak' },
]

// =============================================================================
// FAQ del lema
// =============================================================================

const FAQ_LEMA_EN: FaqLema[] = [
  { pregunta: 'Where does the motto "Lift up your eyes" come from?', respuesta: 'The motto comes from the Gospel of John, chapter 4, verse 35 (Jn 4:35). It is a phrase spoken by Jesus to his disciples at Jacob\'s well, in Samaria, during the encounter with the Samaritan woman. The full version is: "Lift up your eyes and look at the fields, which are already ripe for harvest."' },
  { pregunta: 'What does "Lift up your eyes" mean in the context of the Pope\'s visit?', respuesta: 'It is a call to hope and evangelising mission. It invites the Spanish to recognise that, despite dechristianisation or cultural pessimism, humanity is "ripe for harvest": ready to receive the Gospel. The motto encourages looking beyond the short term, going out of oneself and opening one\'s eyes to the real needs of one\'s neighbour.' },
  { pregunta: 'Who chose the motto "Lift up your eyes" for the papal visit?', respuesta: 'It was chosen by the Spanish Episcopal Conference (CEE) in collaboration with the host dioceses (Madrid, Barcelona, Canary Islands and Tenerife), and approved by the Secretariat of State of the Holy See before becoming official. It is traditional for the episcopal conference of the receiving country to propose the motto to the Pope.' },
  { pregunta: 'In what passage of the Bible does it appear?', respuesta: 'In the Gospel of John, chapter 4, verse 35. The context is the dialogue between Jesus and the Samaritan woman at Jacob\'s well, near the town of Sychar. After speaking with the Samaritan woman, Jesus turns to his disciples and says: "Do you not say: \'Four more months and harvest comes\'? Well, I tell you: Lift up your eyes and look at the fields, which are already ripe for harvest."' },
  { pregunta: 'How is "Lift up your eyes" translated into other languages?', respuesta: 'In Spanish: "Alzad la mirada". In Italian: "Alzate gli occhi". In French: "Levez les yeux". In German: "Erhebt eure Augen". In Portuguese: "Levantai os olhos". In Catalan: "Alceu els ulls". In Galician: "Erguei os ollos". In Basque: "Jaso begiak". In Latin (Vulgate): "Levate oculos vestros". In Koine Greek (original): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'What mottos did previous papal visits to Spain have?', respuesta: 'WYD Madrid 2011 had "Rooted and built up in Christ, firm in the faith" (Col 2:7). WYD Santiago 1989 had "I am the Way, the Truth and the Life" (Jn 14:6). John Paul II\'s first visit in 1982 had "Witness of Jesus Christ, Son of the Living God". Each motto reflects the historical and ecclesial context of the moment.' },
]

const FAQ_LEMA_IT: FaqLema[] = [
  { pregunta: 'Da dove proviene il motto "Alzate gli occhi"?', respuesta: 'Il motto proviene dal Vangelo di Giovanni, capitolo 4, versetto 35 (Gv 4,35). È una frase pronunciata da Gesù ai suoi discepoli presso il pozzo di Giacobbe, in Samaria, durante l\'incontro con la samaritana. La versione integrale è: "Alzate gli occhi e guardate i campi, che già biondeggiano per la mietitura".' },
  { pregunta: 'Cosa significa "Alzate gli occhi" nel contesto del viaggio del Papa?', respuesta: 'È un appello alla speranza e alla missione evangelizzatrice. Invita gli spagnoli a riconoscere che, nonostante la scristianizzazione o il pessimismo culturale, l\'umanità è "matura per la mietitura": pronta a ricevere il Vangelo. Il motto incoraggia a guardare oltre il breve termine, a uscire da se stessi e ad aprire gli occhi sui bisogni reali del prossimo.' },
  { pregunta: 'Chi ha scelto il motto "Alzate gli occhi" per il viaggio papale?', respuesta: 'È stato scelto dalla Conferenza Episcopale Spagnola (CEE) in collaborazione con le diocesi che ospitano la visita (Madrid, Barcellona, Canarie e Tenerife), e approvato dalla Segreteria di Stato della Santa Sede prima di diventare ufficiale. È tradizione che la conferenza episcopale del Paese che riceve il Papa proponga il motto.' },
  { pregunta: 'In quale passo della Bibbia compare?', respuesta: 'Nel Vangelo di Giovanni, capitolo 4, versetto 35. Il contesto è il dialogo tra Gesù e la samaritana presso il pozzo di Giacobbe, nei pressi della città di Sicar. Dopo aver parlato con la samaritana, Gesù si rivolge ai discepoli e dice: "Voi non dite forse: \'Ancora quattro mesi e poi viene la mietitura\'? Ecco, io vi dico: alzate gli occhi e guardate i campi che già biondeggiano per la mietitura".' },
  { pregunta: 'Come si traduce "Alzate gli occhi" nelle altre lingue?', respuesta: 'In spagnolo: "Alzad la mirada". In italiano: "Alzate gli occhi". In francese: "Levez les yeux". In tedesco: "Erhebt eure Augen". In portoghese: "Levantai os olhos". In catalano: "Alceu els ulls". In galiziano: "Erguei os ollos". In basco: "Jaso begiak". In latino (Vulgata): "Levate oculos vestros". In greco koinè (originale): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'Quali motti hanno avuto le precedenti visite papali in Spagna?', respuesta: 'La GMG Madrid 2011 ebbe "Radicati e fondati in Cristo, saldi nella fede" (Col 2,7). La GMG Santiago 1989 ebbe "Io sono la Via, la Verità e la Vita" (Gv 14,6). La prima visita di Giovanni Paolo II nel 1982 ebbe "Testimoni di Gesù Cristo, Figlio del Dio vivo". Ogni motto riflette il contesto storico ed ecclesiale del momento.' },
]

const FAQ_LEMA_FR: FaqLema[] = [
  { pregunta: 'D\'où vient la devise « Levez les yeux » ?', respuesta: 'La devise provient de l\'Évangile de Jean, chapitre 4, verset 35 (Jn 4, 35). C\'est une phrase prononcée par Jésus à ses disciples au puits de Jacob, en Samarie, lors de la rencontre avec la Samaritaine. La version complète est : « Levez les yeux et regardez les champs : ils sont déjà blancs pour la moisson. »' },
  { pregunta: 'Que signifie « Levez les yeux » dans le contexte du voyage du Pape ?', respuesta: 'C\'est un appel à l\'espérance et à la mission évangélisatrice. Il invite les Espagnols à reconnaître que, malgré la déchristianisation ou le pessimisme culturel, l\'humanité est « mûre pour la moisson » : prête à recevoir l\'Évangile. La devise pousse à regarder au-delà du court terme, à sortir de soi et à ouvrir les yeux sur les besoins réels du prochain.' },
  { pregunta: 'Qui a choisi la devise « Levez les yeux » pour le voyage papal ?', respuesta: 'Elle a été choisie par la Conférence Épiscopale Espagnole (CEE) en collaboration avec les diocèses hôtes (Madrid, Barcelone, Canaries et Ténérife), et approuvée par la Secrétairerie d\'État du Saint-Siège avant d\'être officielle. La tradition veut que la conférence épiscopale du pays qui reçoit le Pape propose la devise.' },
  { pregunta: 'Dans quel passage de la Bible apparaît-elle ?', respuesta: 'Dans l\'Évangile de Jean, chapitre 4, verset 35. Le contexte est le dialogue entre Jésus et la Samaritaine au puits de Jacob, près de la ville de Sychar. Après avoir parlé à la Samaritaine, Jésus se tourne vers ses disciples et dit : « Ne dites-vous pas : "Encore quatre mois et viendra la moisson" ? Eh bien, moi je vous dis : levez les yeux et regardez les champs, déjà ils blanchissent pour la moisson. »' },
  { pregunta: 'Comment traduit-on « Levez les yeux » dans les autres langues ?', respuesta: 'En espagnol : « Alzad la mirada ». En italien : « Alzate gli occhi ». En français : « Levez les yeux ». En allemand : « Erhebt eure Augen ». En portugais : « Levantai os olhos ». En catalan : « Alceu els ulls ». En galicien : « Erguei os ollos ». En basque : « Jaso begiak ». En latin (Vulgate) : « Levate oculos vestros ». En grec koinè (original) : « Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν ».' },
  { pregunta: 'Quelles devises ont eu les précédentes visites papales en Espagne ?', respuesta: 'Les JMJ Madrid 2011 ont eu « Enracinés et fondés en Christ, fermes dans la foi » (Col 2, 7). Les JMJ Saint-Jacques 1989 ont eu « Je suis le Chemin, la Vérité et la Vie » (Jn 14, 6). La première visite de Jean-Paul II en 1982 a eu « Témoins de Jésus-Christ, Fils du Dieu vivant ». Chaque devise reflète le contexte historique et ecclésial du moment.' },
]

const FAQ_LEMA_DE: FaqLema[] = [
  { pregunta: 'Woher stammt der Leitspruch „Erhebt eure Augen"?', respuesta: 'Der Leitspruch stammt aus dem Johannesevangelium, Kapitel 4, Vers 35 (Joh 4,35). Es ist ein Satz, den Jesus zu seinen Jüngern am Jakobsbrunnen in Samarien sagt, während der Begegnung mit der Samariterin. Die vollständige Fassung lautet: „Erhebt eure Augen und seht die Felder: sie sind schon weiß zur Ernte."' },
  { pregunta: 'Was bedeutet „Erhebt eure Augen" im Kontext der Papstreise?', respuesta: 'Es ist ein Ruf zur Hoffnung und zum Evangelisierungsauftrag. Er lädt die Spanier ein, anzuerkennen, dass die Menschheit trotz Entchristianisierung oder kulturellem Pessimismus „reif zur Ernte" ist: bereit, das Evangelium zu empfangen. Der Leitspruch ermutigt, über den kurzen Horizont hinauszublicken, aus sich selbst herauszugehen und die Augen für die wirklichen Bedürfnisse des Nächsten zu öffnen.' },
  { pregunta: 'Wer hat den Leitspruch „Erhebt eure Augen" für die Papstreise gewählt?', respuesta: 'Er wurde von der Spanischen Bischofskonferenz (CEE) in Zusammenarbeit mit den gastgebenden Diözesen (Madrid, Barcelona, Kanarische Inseln und Teneriffa) gewählt und vom Staatssekretariat des Heiligen Stuhls genehmigt, bevor er offiziell wurde. Es ist Tradition, dass die Bischofskonferenz des empfangenden Landes den Leitspruch vorschlägt.' },
  { pregunta: 'In welcher Bibelstelle erscheint er?', respuesta: 'Im Johannesevangelium, Kapitel 4, Vers 35. Der Kontext ist der Dialog zwischen Jesus und der Samariterin am Jakobsbrunnen, in der Nähe der Stadt Sychar. Nach dem Gespräch mit der Samariterin wendet sich Jesus an die Jünger und sagt: „Sagt ihr nicht: ‚Noch vier Monate, dann kommt die Ernte\'? Ich sage euch: Erhebt eure Augen und seht die Felder: sie sind schon weiß zur Ernte."' },
  { pregunta: 'Wie wird „Erhebt eure Augen" in andere Sprachen übersetzt?', respuesta: 'Auf Spanisch: „Alzad la mirada". Auf Italienisch: „Alzate gli occhi". Auf Französisch: „Levez les yeux". Auf Deutsch: „Erhebt eure Augen". Auf Portugiesisch: „Levantai os olhos". Auf Katalanisch: „Alceu els ulls". Auf Galicisch: „Erguei os ollos". Auf Baskisch: „Jaso begiak". Auf Latein (Vulgata): „Levate oculos vestros". Auf Koine-Griechisch (Original): „Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'Welche Leitsprüche hatten die früheren Papstreisen nach Spanien?', respuesta: 'Der Weltjugendtag Madrid 2011 hatte „In Christus verwurzelt und auf ihn gegründet, fest im Glauben" (Kol 2,7). Der Weltjugendtag Santiago 1989 hatte „Ich bin der Weg, die Wahrheit und das Leben" (Joh 14,6). Die erste Reise Johannes Pauls II. 1982 hatte „Zeugen Jesu Christi, des Sohnes des lebendigen Gottes". Jeder Leitspruch spiegelt den geschichtlichen und kirchlichen Kontext des jeweiligen Augenblicks wider.' },
]

const FAQ_LEMA_PT: FaqLema[] = [
  { pregunta: 'De onde vem o lema "Levantai os olhos"?', respuesta: 'O lema provém do Evangelho de João, capítulo 4, versículo 35 (Jo 4,35). É uma frase pronunciada por Jesus aos seus discípulos junto ao poço de Jacob, na Samaria, durante o encontro com a samaritana. A versão integral é: "Levantai os olhos e vede os campos, que já branquejam para a ceifa".' },
  { pregunta: 'O que significa "Levantai os olhos" no contexto da viagem do Papa?', respuesta: 'É um apelo à esperança e à missão evangelizadora. Convida os espanhóis a reconhecerem que, apesar da descristianização ou do pessimismo cultural, a humanidade está "madura para a ceifa": pronta para receber o Evangelho. O lema incentiva a olhar para além do curto prazo, a sair de si e a abrir os olhos para as necessidades reais do próximo.' },
  { pregunta: 'Quem escolheu o lema "Levantai os olhos" para a viagem papal?', respuesta: 'Foi escolhido pela Conferência Episcopal Espanhola (CEE) em colaboração com as dioceses que acolhem a visita (Madrid, Barcelona, Canárias e Tenerife), e aprovado pela Secretaria de Estado da Santa Sé antes de se tornar oficial. É tradição que a conferência episcopal do país que recebe o Papa proponha o lema.' },
  { pregunta: 'Em que passagem da Bíblia aparece?', respuesta: 'No Evangelho de João, capítulo 4, versículo 35. O contexto é o diálogo entre Jesus e a samaritana junto ao poço de Jacob, perto da cidade de Sicar. Depois de falar com a samaritana, Jesus dirige-se aos discípulos e diz: "Não dizeis vós que ainda há quatro meses até à ceifa? Pois eu vos digo: levantai os olhos e vede os campos, que já branquejam para a ceifa".' },
  { pregunta: 'Como se traduz "Levantai os olhos" nas outras línguas?', respuesta: 'Em espanhol: "Alzad la mirada". Em italiano: "Alzate gli occhi". Em francês: "Levez les yeux". Em alemão: "Erhebt eure Augen". Em português: "Levantai os olhos". Em catalão: "Alceu els ulls". Em galego: "Erguei os ollos". Em basco: "Jaso begiak". Em latim (Vulgata): "Levate oculos vestros". Em grego koiné (original): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'Que lemas tiveram as anteriores visitas papais a Espanha?', respuesta: 'A JMJ Madrid 2011 teve "Radicados e edificados em Cristo, firmes na fé" (Cl 2,7). A JMJ Santiago 1989 teve "Eu sou o Caminho, a Verdade e a Vida" (Jo 14,6). A primeira visita de João Paulo II em 1982 teve "Testemunhas de Jesus Cristo, Filho do Deus vivo". Cada lema reflete o contexto histórico e eclesial do momento.' },
]

const FAQ_LEMA_CA: FaqLema[] = [
  { pregunta: 'D\'on prové el lema "Alceu els ulls"?', respuesta: 'El lema prové de l\'Evangeli de Joan, capítol 4, versicle 35 (Jn 4,35). És una frase pronunciada per Jesús als seus deixebles al pou de Jacob, a Samaria, durant la trobada amb la samaritana. La versió íntegra és: "Alceu els ulls i mireu els camps, que ja són rossos per a la sega".' },
  { pregunta: 'Què significa "Alceu els ulls" en el context del viatge del Papa?', respuesta: 'És una crida a l\'esperança i a la missió evangelitzadora. Convida els espanyols a reconèixer que, malgrat la descristianització o el pessimisme cultural, la humanitat és "madura per a la sega": preparada per rebre l\'Evangeli. El lema empeny a mirar més enllà del curt termini, a sortir d\'un mateix i a obrir els ulls a les necessitats reals del proïsme.' },
  { pregunta: 'Qui ha escollit el lema "Alceu els ulls" per al viatge papal?', respuesta: 'L\'ha escollit la Conferència Episcopal Espanyola (CEE) en col·laboració amb les diòcesis que acullen la visita (Madrid, Barcelona, Canàries i Tenerife), i ha estat aprovat per la Secretaria d\'Estat de la Santa Seu abans de fer-se oficial. És tradició que la conferència episcopal del país que rep el Papa proposi el lema.' },
  { pregunta: 'En quin passatge de la Bíblia apareix?', respuesta: 'A l\'Evangeli de Joan, capítol 4, versicle 35. El context és el diàleg entre Jesús i la samaritana al pou de Jacob, prop de la ciutat de Sicar. Després de parlar amb la samaritana, Jesús es dirigeix als deixebles i diu: "No dieu vosaltres que encara queden quatre mesos perquè vingui la sega? Doncs jo us dic: alceu els ulls i mireu els camps, que ja són rossos per a la sega".' },
  { pregunta: 'Com es tradueix "Alceu els ulls" a les altres llengües?', respuesta: 'En espanyol: "Alzad la mirada". En italià: "Alzate gli occhi". En francès: "Levez les yeux". En alemany: "Erhebt eure Augen". En portuguès: "Levantai os olhos". En català: "Alceu els ulls". En gallec: "Erguei os ollos". En basc: "Jaso begiak". En llatí (Vulgata): "Levate oculos vestros". En grec koinè (original): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'Quins lemes han tingut les visites papals anteriors a Espanya?', respuesta: 'La JMJ Madrid 2011 va tenir "Arrelats i edificats en Crist, ferms en la fe" (Col 2,7). La JMJ Santiago 1989 va tenir "Jo sóc el Camí, la Veritat i la Vida" (Jn 14,6). La primera visita de Joan Pau II el 1982 va tenir "Testimonis de Jesucrist, Fill del Déu vivent". Cada lema reflecteix el context històric i eclesial del moment.' },
]

const FAQ_LEMA_GL: FaqLema[] = [
  { pregunta: 'De onde vén o lema "Erguei os ollos"?', respuesta: 'O lema vén do Evanxeo de Xoán, capítulo 4, versículo 35 (Xn 4,35). É unha frase pronunciada por Xesús aos seus discípulos no pozo de Xacob, en Samaria, durante o encontro coa samaritana. A versión íntegra é: "Erguei os ollos e mirade os campos, que xa branquean para a sega".' },
  { pregunta: 'Que significa "Erguei os ollos" no contexto da viaxe do Papa?', respuesta: 'É unha chamada á esperanza e á misión evanxelizadora. Convida os españois a recoñecer que, a pesar da descristianización ou do pesimismo cultural, a humanidade está "madura para a sega": preparada para recibir o Evanxeo. O lema empuxa a ollar máis aló do curto prazo, a saír de si mesmo e a abrir os ollos ás necesidades reais do próximo.' },
  { pregunta: 'Quen escolleu o lema "Erguei os ollos" para a viaxe papal?', respuesta: 'Escolleuno a Conferencia Episcopal Española (CEE) en colaboración coas dioceses que acollen a visita (Madrid, Barcelona, Canarias e Tenerife), e foi aprobado pola Secretaría de Estado da Santa Sede antes de ser oficial. É tradición que a conferencia episcopal do país que recibe o Papa propoña o lema.' },
  { pregunta: 'En que pasaxe da Biblia aparece?', respuesta: 'No Evanxeo de Xoán, capítulo 4, versículo 35. O contexto é o diálogo entre Xesús e a samaritana no pozo de Xacob, preto da cidade de Sicar. Despois de falar coa samaritana, Xesús diríxese aos discípulos e di: "¿Non dicides vós: \'Aínda catro meses e chega a sega\'? Pois eu dígovos: erguei os ollos e mirade os campos, que xa branquean para a sega".' },
  { pregunta: 'Como se traduce "Erguei os ollos" ás outras linguas?', respuesta: 'En español: "Alzad la mirada". En italiano: "Alzate gli occhi". En francés: "Levez les yeux". En alemán: "Erhebt eure Augen". En portugués: "Levantai os olhos". En catalán: "Alceu els ulls". En galego: "Erguei os ollos". En éuscaro: "Jaso begiak". En latín (Vulgata): "Levate oculos vestros". En grego koiné (orixinal): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'Que lemas tiveron as anteriores visitas papais a España?', respuesta: 'A XMX Madrid 2011 tivo "Arraigados e edificados en Cristo, firmes na fe" (Col 2,7). A XMX Santiago 1989 tivo "Eu son o Camiño, a Verdade e a Vida" (Xn 14,6). A primeira visita de Xoán Paulo II en 1982 tivo "Testemuñas de Xesús Cristo, Fillo do Deus vivo". Cada lema reflicte o contexto histórico e eclesial do momento.' },
]

const FAQ_LEMA_EU: FaqLema[] = [
  { pregunta: 'Nondik dator "Jaso begiak" leloa?', respuesta: 'Leloa Joanen Ebanjelioko 4. kapituluko 35. bertsetik dator (Jn 4,35). Jesusek bere ikasleei esandako esaldia da, Jakoben putzuan, Samarian, samariarrarekin elkartzean. Bertsio osoa hau da: "Jaso begiak eta begira soroak: jada zurituta daude uztarako".' },
  { pregunta: 'Zer esan nahi du "Jaso begiak" Aita Santuaren bidaiaren testuinguruan?', respuesta: 'Itxaropenerako eta ebanjelizazio-eginkizunerako deia da. Espainiarrei gonbita egiten die kristautasunaren galera edo pesimismo kulturala gorabehera, gizadia "uztarako helduta" dagoela aitortzeko: Ebanjelioa hartzeko prest. Leloak epe laburreko ikuspegitik haratago begiratzera bultzatzen du, norbere baitatik atera eta hurkoaren benetako beharretara begiak irekitzera.' },
  { pregunta: 'Nork hautatu zuen "Jaso begiak" lelo papal-ekin?', respuesta: 'Espainiako Apezpiku Konferentziak (CEE) hautatu zuen, bisita hartzen duten elizbarrutiekin (Madril, Bartzelona, Kanariak eta Tenerife) lankidetzan, eta Aulki Santuaren Estatu Idazkaritzak onartu zuen ofiziala bihurtu aurretik. Tradizio batean, Aita Santua hartzen duen herrialdeko apezpiku-konferentziak proposatzen du leloa.' },
  { pregunta: 'Bibliako zein pasartetan ageri da?', respuesta: 'Joanen Ebanjelioko 4. kapituluko 35. bertsetan. Testuingurua Jesusen eta samariarraren elkarrizketa da, Jakoben putzuan, Sikar hiriaren ondoan. Samariarrarekin hitz egin ondoren, Jesusek ikasleei zuzentzen die hitza eta esaten die: "Ez al duzue zuek esaten: \'Lau hilabete oraindik eta uzta etorriko da\'? Bada, nik diotsuet: jaso begiak eta begira soroak, jada zurituta baitaude uztarako".' },
  { pregunta: 'Nola itzultzen da "Jaso begiak" beste hizkuntzetara?', respuesta: 'Gaztelaniaz: "Alzad la mirada". Italieraz: "Alzate gli occhi". Frantsesez: "Levez les yeux". Alemanez: "Erhebt eure Augen". Portugesez: "Levantai os olhos". Katalanez: "Alceu els ulls". Galegoz: "Erguei os ollos". Euskaraz: "Jaso begiak". Latinez (Vulgata): "Levate oculos vestros". Koine grezieraz (jatorrizkoa): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'Zer lelo izan zituzten Espainiako aurreko bisita papalek?', respuesta: 'Madrilgo 2011ko GMJk "Kristoren baitan errotuak eta eraikiak, sinesmenean sendoak" izan zuen (Kol 2,7). Santiagoko 1989ko GMJk "Ni naiz Bidea, Egia eta Bizia" izan zuen (Jn 14,6). Joan Paulo II.aren 1982ko lehen bisitak "Jesu Kristoren, Jainko biziaren Semearen, lekukoak" izan zuen. Lelo bakoitzak bere uneko testuinguru historiko eta eklesiala islatzen du.' },
]

// =============================================================================
// Getters
// =============================================================================

export function getRazonesEleccion(locale: Locale): RazonEleccion[] {
  switch (locale) {
    case 'en': return RAZONES_EN
    case 'it': return RAZONES_IT
    case 'fr': return RAZONES_FR
    case 'de': return RAZONES_DE
    case 'pt': return RAZONES_PT
    case 'ca': return RAZONES_CA
    case 'gl': return RAZONES_GL
    case 'eu': return RAZONES_EU
    default: return razonesEleccion
  }
}

export function getLemasPrevios(locale: Locale) {
  switch (locale) {
    case 'en': return LEMAS_PREVIOS_EN
    case 'it': return LEMAS_PREVIOS_IT
    case 'fr': return LEMAS_PREVIOS_FR
    case 'de': return LEMAS_PREVIOS_DE
    case 'pt': return LEMAS_PREVIOS_PT
    case 'ca': return LEMAS_PREVIOS_CA
    case 'gl': return LEMAS_PREVIOS_GL
    case 'eu': return LEMAS_PREVIOS_EU
    default: return lemasPrevios
  }
}

export function getFaqLema(locale: Locale): FaqLema[] {
  switch (locale) {
    case 'en': return FAQ_LEMA_EN
    case 'it': return FAQ_LEMA_IT
    case 'fr': return FAQ_LEMA_FR
    case 'de': return FAQ_LEMA_DE
    case 'pt': return FAQ_LEMA_PT
    case 'ca': return FAQ_LEMA_CA
    case 'gl': return FAQ_LEMA_GL
    case 'eu': return FAQ_LEMA_EU
    default: return faqLema
  }
}

export { lemaData, traduccionesLema }
export type { RazonEleccion, FaqLema }
