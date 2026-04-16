import { NewsArticle } from '@/types/news'
import { news as newsEs } from '@/data/news'
import { Locale } from '@/data/i18n/types'

type T = { title: string; excerpt: string; content: string; source?: string }

const newsTranslations: Record<Locale, Record<string, T>> = {
  es: {},
  en: {
    'vigilia-plaza-lima-misa-cibeles-confirmadas': {
      title: 'Times and venues confirmed: Vigil at Plaza de Lima and Corpus Christi Mass at Cibeles',
      excerpt: 'The organisation confirms that on Saturday 6 June at 20:00 a great youth vigil will take place at Plaza de Lima, and on Sunday 7 at 9:30 the Corpus Christi Mass at Plaza de Cibeles.',
      content: 'The organising committee has confirmed details of the main massive events of the papal visit to Madrid. On Saturday 6 June at 20:00, Pope Leo XIV will preside over a great youth vigil at Plaza de Lima, where he will tour the area in the popemobile before the event with his words and Eucharistic adoration. On Sunday 7 June at 9:30 he will celebrate the Corpus Christi Mass from Plaza de Cibeles, followed by Eucharistic procession. In the Canary Islands, the Mass at Gran Canaria Stadium will be on Thursday 11 at 18:30 and the closing Mass in Tenerife on Friday 12 at midday at the Port of Santa Cruz. Registration for all events is open at inscripciones.conelpapa.es/auth.',
    },
    'confirmada-visita-papa-leon-xiv-espana': {
      title: 'Pope Leo XIV’s visit to Spain confirmed for 6-12 June',
      excerpt: 'The Holy See officially confirms the apostolic journey of Pope Leo XIV to Spain, with stops in Madrid, Barcelona, Gran Canaria and Tenerife.',
      content: 'The Vatican has officially confirmed that Pope Leo XIV will visit Spain from 6 to 12 June 2026. The apostolic journey will include stops in Madrid, Barcelona, Gran Canaria and Tenerife. It is the first visit by a Pope to Spain since Benedict XVI in 2011 and the first papal visit to the Canary Islands. The visit is presented under the motto "Lift up your eyes" (John 4:35).',
      source: 'Holy See Press Office',
    },
    'registro-actos-madrid-abierto': {
      title: 'Registration open for Madrid events',
      excerpt: 'Since 7 April registration has been open at madrid.conelpapa.es to attend the papal events in Madrid.',
      content: 'The Archdiocese of Madrid has opened the registration process for the public acts of the papal visit. Those interested can register at inscripciones.conelpapa.es. The events are free but require prior registration due to capacity and security considerations. A massive turnout is expected.',
      source: 'Archdiocese of Madrid',
    },
    'logo-himno-visita-papal': {
      title: 'Official logo and hymn "Alza la mirada" presented',
      excerpt: 'The organising committee unveils the official image designed by María del Mar Chapa and the hymn recorded in four cathedrals with more than 1,700 voices.',
      content: 'The visual identity of the visit has been unveiled. The logo, designed by María del Mar Chapa, was presented on 7 April. The official hymn "Alza la mirada" was recorded simultaneously on 22 March 2026 in four Spanish cathedrals with more than 1,700 voices.',
    },
    'sagrada-familia-torre-jesus': {
      title: 'The Pope will bless the Tower of Jesus at the Sagrada Familia',
      excerpt: 'The flagship event in Barcelona: the blessing of the 172.5-metre tower will coincide with the centenary of Gaudí’s death.',
      content: 'One of the most anticipated moments of the visit will be the inauguration and blessing of the Tower of Jesus Christ at the Sagrada Familia, which at 172.5 metres will be the tallest of the basilica. The event coincides with the centenary of Antoni Gaudí’s death in 2026, and is part of his beatification process.',
    },
    'primera-visita-papal-canarias': {
      title: 'Canary Islands to receive a Pope for the first time in history',
      excerpt: 'The visit to Gran Canaria and Tenerife will be historic: no pontiff had visited the islands before. The focus will be the migration crisis.',
      content: 'The Canarian stage of the visit will be historic: it is the first time a Pope visits the Canary Islands. The thematic focus will be charity and migration. In Gran Canaria the Pope will visit Arguineguín dock, symbol of the migration crisis, and in Tenerife the Las Raíces reception centre.',
    },
    'voluntarios-madrid-10000': {
      title: 'Madrid seeks 10,000 volunteers for the papal visit',
      excerpt: 'The Archdiocese of Madrid needs 10,000 volunteers for welcome, hospitality and logistical support tasks during the events.',
      content: 'The organisation of the papal visit in Madrid requires an army of volunteers. 10,000 people are needed for welcoming, hospitality, family accommodation, event support and preparation tasks. Registration closes on 24 April 2026.',
      source: 'Archdiocese of Madrid',
    },
  },
  it: {
    'vigilia-plaza-lima-misa-cibeles-confirmadas': {
      title: 'Orari e luoghi confermati: Veglia a Plaza de Lima e Messa del Corpus Christi a Cibeles',
      excerpt: 'L’organizzazione conferma che sabato 6 giugno alle 20:00 si terrà una grande veglia giovanile in Plaza de Lima e domenica 7 alle 9:30 la Messa del Corpus Christi in Plaza de Cibeles.',
      content: 'Il comitato organizzatore ha confermato i dettagli dei principali eventi di massa della visita papale a Madrid. Sabato 6 giugno alle 20:00, Papa Leone XIV presiederà una grande veglia con i giovani in Plaza de Lima, dove percorrerà la zona in papamobile prima dell’evento con le sue parole e l’adorazione eucaristica. Domenica 7 giugno alle 9:30 celebrerà la Messa del Corpus Christi da Plaza de Cibeles, seguita dalla processione eucaristica. Alle Canarie, la Messa allo Stadio di Gran Canaria sarà giovedì 11 alle 18:30 e la messa di chiusura a Tenerife venerdì 12 verso mezzogiorno al Porto di Santa Cruz. Iscrizioni aperte su inscripciones.conelpapa.es/auth.',
    },
    'confirmada-visita-papa-leon-xiv-espana': {
      title: 'Confermata la visita di Papa Leone XIV in Spagna dal 6 al 12 giugno',
      excerpt: 'La Santa Sede conferma ufficialmente il viaggio apostolico di Papa Leone XIV in Spagna, con tappe a Madrid, Barcellona, Gran Canaria e Tenerife.',
      content: 'Il Vaticano ha ufficialmente confermato che Papa Leone XIV visiterà la Spagna dal 6 al 12 giugno 2026. Il viaggio apostolico includerà tappe a Madrid, Barcellona, Gran Canaria e Tenerife. È la prima visita di un Papa in Spagna dopo quella di Benedetto XVI nel 2011 e la prima visita papale alle Isole Canarie. Il viaggio si presenta sotto il motto "Alzate lo sguardo" (Giovanni 4,35).',
      source: 'Ufficio Stampa della Santa Sede',
    },
    'registro-actos-madrid-abierto': {
      title: 'Aperte le iscrizioni per gli eventi di Madrid',
      excerpt: 'Dal 7 aprile è possibile iscriversi a inscripciones.conelpapa.es per partecipare agli eventi papali di Madrid.',
      content: 'L’Arcidiocesi di Madrid ha aperto il processo di iscrizione agli atti pubblici della visita papale. Gli interessati possono registrarsi su inscripciones.conelpapa.es. Gli atti sono gratuiti ma richiedono iscrizione preventiva per motivi di capienza e sicurezza. Si prevede un’enorme affluenza.',
      source: 'Arcidiocesi di Madrid',
    },
    'logo-himno-visita-papal': {
      title: 'Presentati logo e inno ufficiale "Alza la mirada"',
      excerpt: 'Il comitato organizzatore svela l’immagine ufficiale disegnata da María del Mar Chapa e l’inno registrato in quattro cattedrali con oltre 1.700 voci.',
      content: 'L’identità visiva della visita è stata svelata. Il logo, disegnato da María del Mar Chapa, è stato presentato il 7 aprile. L’inno ufficiale "Alza la mirada" è stato registrato il 22 marzo 2026 in forma simultanea in quattro cattedrali spagnole con la partecipazione di oltre 1.700 voci.',
    },
    'sagrada-familia-torre-jesus': {
      title: 'Il Papa benedirà la Torre di Gesù della Sagrada Familia',
      excerpt: 'L’evento clou a Barcellona: la benedizione della torre di 172,5 metri coinciderà con il centenario della morte di Gaudí.',
      content: 'Uno dei momenti più attesi della visita sarà l’inaugurazione e benedizione della Torre di Gesù Cristo della Sagrada Familia, che con 172,5 metri sarà la più alta della basilica. L’evento coincide con il centenario della morte di Antoni Gaudí nel 2026, e si inserisce nel suo processo di beatificazione.',
    },
    'primera-visita-papal-canarias': {
      title: 'Le Canarie riceveranno per la prima volta nella storia un Papa',
      excerpt: 'La visita a Gran Canaria e Tenerife sarà storica: nessun pontefice aveva visitato le isole. Il focus sarà sulla crisi migratoria.',
      content: 'La tappa canaria della visita sarà storica: è la prima volta che un Papa visita le Isole Canarie. L’asse tematico sarà la carità e la migrazione. A Gran Canaria il Papa visiterà il molo di Arguineguín, simbolo della crisi migratoria, e a Tenerife il centro di accoglienza di Las Raíces.',
    },
    'voluntarios-madrid-10000': {
      title: 'Madrid cerca 10.000 volontari per la visita papale',
      excerpt: 'L’Arcidiocesi di Madrid ha bisogno di 10.000 volontari per compiti di accoglienza, ospitalità e supporto logistico durante gli atti.',
      content: 'L’organizzazione della visita papale a Madrid richiede un esercito di volontari. Servono 10.000 persone per compiti di accoglienza, ospitalità, alloggio famiglie, supporto eventi e preparazione. Iscrizioni fino al 24 aprile 2026.',
      source: 'Arcidiocesi di Madrid',
    },
  },
  fr: {
    'vigilia-plaza-lima-misa-cibeles-confirmadas': {
      title: 'Horaires et lieux confirmés : Veillée à Plaza de Lima et Messe du Corpus Christi à Cibeles',
      excerpt: 'L’organisation confirme que le samedi 6 juin à 20h00 aura lieu une grande veillée des jeunes à Plaza de Lima, et le dimanche 7 à 9h30 la Messe du Corpus Christi à Plaza de Cibeles.',
      content: 'Le comité organisateur a confirmé les détails des principaux événements de masse de la visite pontificale à Madrid. Samedi 6 juin à 20h00, le Pape Léon XIV présidera une grande veillée avec les jeunes à Plaza de Lima, où il parcourra la zone en papamobile avant l’acte avec ses paroles et l’adoration eucharistique. Dimanche 7 juin à 9h30 il célébrera la Messe du Corpus Christi depuis Plaza de Cibeles, suivie de la procession eucharistique. Aux Canaries, la Messe au Stade de Grande Canarie sera jeudi 11 à 18h30 et la messe de clôture à Tenerife vendredi 12 vers midi au Port de Santa Cruz. Inscriptions ouvertes sur inscripciones.conelpapa.es/auth.',
    },
    'confirmada-visita-papa-leon-xiv-espana': {
      title: 'Confirmée la visite du Pape Léon XIV en Espagne du 6 au 12 juin',
      excerpt: 'Le Saint-Siège confirme officiellement le voyage apostolique du Pape Léon XIV en Espagne, avec escales à Madrid, Barcelone, Grande Canarie et Tenerife.',
      content: 'Le Vatican a officiellement confirmé que le Pape Léon XIV visitera l’Espagne du 6 au 12 juin 2026. Le voyage apostolique comprendra des escales à Madrid, Barcelone, Grande Canarie et Tenerife. C’est la première visite d’un Pape en Espagne depuis Benoît XVI en 2011 et la première visite papale aux Îles Canaries. Le voyage se présente sous la devise « Levez les yeux » (Jean 4,35).',
      source: 'Bureau de presse du Saint-Siège',
    },
    'registro-actos-madrid-abierto': {
      title: 'Inscriptions ouvertes pour les actes de Madrid',
      excerpt: 'Depuis le 7 avril il est possible de s’inscrire sur inscripciones.conelpapa.es pour participer aux actes papaux de Madrid.',
      content: 'L’Archidiocèse de Madrid a ouvert le processus d’inscription aux actes publics de la visite pontificale. Les intéressés peuvent s’inscrire sur inscripciones.conelpapa.es. Les actes sont gratuits mais nécessitent une inscription préalable pour des raisons de capacité et de sécurité. Une affluence massive est attendue.',
      source: 'Archidiocèse de Madrid',
    },
    'logo-himno-visita-papal': {
      title: 'Présentation du logo et de l’hymne officiel « Alza la mirada »',
      excerpt: 'Le comité organisateur dévoile l’image officielle conçue par María del Mar Chapa et l’hymne enregistré dans quatre cathédrales avec plus de 1 700 voix.',
      content: 'L’identité visuelle de la visite a été dévoilée. Le logo, conçu par María del Mar Chapa, a été présenté le 7 avril. L’hymne officiel « Alza la mirada » a été enregistré le 22 mars 2026 simultanément dans quatre cathédrales espagnoles avec la participation de plus de 1 700 voix.',
    },
    'sagrada-familia-torre-jesus': {
      title: 'Le Pape bénira la Tour de Jésus de la Sagrada Família',
      excerpt: 'L’acte phare à Barcelone : la bénédiction de la tour de 172,5 mètres coïncidera avec le centenaire de la mort de Gaudí.',
      content: 'L’un des moments les plus attendus de la visite sera l’inauguration et bénédiction de la Tour de Jésus-Christ de la Sagrada Família, qui avec 172,5 mètres sera la plus haute de la basilique. L’acte coïncide avec le centenaire de la mort d’Antoni Gaudí en 2026, et s’inscrit dans son processus de béatification.',
    },
    'primera-visita-papal-canarias': {
      title: 'Les Canaries recevront pour la première fois dans l’histoire un Pape',
      excerpt: 'La visite en Grande Canarie et Tenerife sera historique : aucun pontife n’avait visité les îles. Le focus sera la crise migratoire.',
      content: 'L’étape canarienne de la visite sera historique : c’est la première fois qu’un Pape visite les Îles Canaries. L’axe thématique sera la charité et la migration. En Grande Canarie le Pape visitera le quai d’Arguineguín, symbole de la crise migratoire, et à Tenerife le centre d’accueil de Las Raíces.',
    },
    'voluntarios-madrid-10000': {
      title: 'Madrid cherche 10 000 bénévoles pour la visite pontificale',
      excerpt: 'L’Archidiocèse de Madrid a besoin de 10 000 bénévoles pour des tâches d’accueil, hospitality et soutien logistique pendant les actes.',
      content: 'L’organisation de la visite pontificale à Madrid nécessite une armée de bénévoles. Il faut 10 000 personnes pour des tâches d’accueil, hospitality, hébergement des familles, soutien aux événements et préparation. Les inscriptions se terminent le 24 avril 2026.',
      source: 'Archidiocèse de Madrid',
    },
  },
  de: {
    'vigilia-plaza-lima-misa-cibeles-confirmadas': {
      title: 'Zeiten und Orte bestätigt: Vigil am Plaza de Lima und Fronleichnamsmesse an Cibeles',
      excerpt: 'Die Organisation bestätigt, dass am Samstag, 6. Juni um 20:00 Uhr eine große Jugendvigil am Plaza de Lima stattfindet und am Sonntag, 7. um 9:30 Uhr die Fronleichnamsmesse am Plaza de Cibeles.',
      content: 'Das Organisationskomitee hat die Details der wichtigsten Großveranstaltungen des Papstbesuchs in Madrid bestätigt. Am Samstag, 6. Juni um 20:00 Uhr wird Papst Leo XIV. eine große Jugendvigil am Plaza de Lima leiten, wo er im Papamobil durch die Zone fahren wird, gefolgt von seiner Ansprache und eucharistischer Anbetung. Am Sonntag, 7. Juni um 9:30 Uhr feiert er die Fronleichnamsmesse vom Plaza de Cibeles, gefolgt von einer eucharistischen Prozession. Auf den Kanaren findet die Messe im Stadion Gran Canaria am Donnerstag, 11. um 18:30 Uhr statt und die Abschlussmesse in Teneriffa am Freitag, 12. mittags im Hafen von Santa Cruz. Anmeldungen unter inscripciones.conelpapa.es/auth.',
    },
    'confirmada-visita-papa-leon-xiv-espana': {
      title: 'Papst Leo XIV. besucht Spanien vom 6. bis 12. Juni bestätigt',
      excerpt: 'Der Heilige Stuhl bestätigt offiziell die apostolische Reise von Papst Leo XIV. nach Spanien mit Stationen in Madrid, Barcelona, Gran Canaria und Teneriffa.',
      content: 'Der Vatikan hat offiziell bestätigt, dass Papst Leo XIV. Spanien vom 6. bis 12. Juni 2026 besuchen wird. Die apostolische Reise wird Stationen in Madrid, Barcelona, Gran Canaria und Teneriffa einschließen. Es ist der erste Papstbesuch in Spanien seit Benedikt XVI. 2011 und der erste Papstbesuch auf den Kanarischen Inseln. Die Reise steht unter dem Motto „Erhebt eure Augen" (Johannes 4,35).',
      source: 'Presseamt des Heiligen Stuhls',
    },
    'registro-actos-madrid-abierto': {
      title: 'Anmeldung für Madrid-Veranstaltungen geöffnet',
      excerpt: 'Seit dem 7. April können sich Interessierte über inscripciones.conelpapa.es für die päpstlichen Veranstaltungen in Madrid anmelden.',
      content: 'Die Erzdiözese Madrid hat den Anmeldeprozess für die öffentlichen Akte des Papstbesuchs geöffnet. Interessierte können sich unter inscripciones.conelpapa.es registrieren. Die Akte sind kostenlos, erfordern aber eine vorherige Anmeldung aus Kapazitäts- und Sicherheitsgründen. Ein massiver Andrang wird erwartet.',
      source: 'Erzdiözese Madrid',
    },
    'logo-himno-visita-papal': {
      title: 'Logo und offizielle Hymne „Alza la mirada" vorgestellt',
      excerpt: 'Das Organisationskomitee enthüllt das offizielle Bild von María del Mar Chapa und die Hymne, aufgenommen in vier Kathedralen mit über 1.700 Stimmen.',
      content: 'Die visuelle Identität des Besuchs wurde enthüllt. Das von María del Mar Chapa entworfene Logo wurde am 7. April vorgestellt. Die offizielle Hymne „Alza la mirada" wurde am 22. März 2026 gleichzeitig in vier spanischen Kathedralen mit über 1.700 Stimmen aufgenommen.',
    },
    'sagrada-familia-torre-jesus': {
      title: 'Der Papst segnet den Jesus-Turm der Sagrada Família',
      excerpt: 'Das Flaggschiffereignis in Barcelona: Die Segnung des 172,5 Meter hohen Turms fällt mit dem 100. Todestag Gaudís zusammen.',
      content: 'Einer der erwartetsten Momente des Besuchs wird die Einweihung und Segnung des Jesus-Christus-Turms der Sagrada Família sein, der mit 172,5 Metern der höchste der Basilika sein wird. Der Akt fällt mit dem 100. Todestag von Antoni Gaudí 2026 zusammen und ist Teil seines Seligsprechungsprozesses.',
    },
    'primera-visita-papal-canarias': {
      title: 'Kanarische Inseln empfangen erstmals einen Papst',
      excerpt: 'Der Besuch auf Gran Canaria und Teneriffa wird historisch: Kein Papst hatte die Inseln zuvor besucht. Der Fokus liegt auf der Migrationskrise.',
      content: 'Die kanarische Etappe des Besuchs wird historisch: Es ist das erste Mal, dass ein Papst die Kanarischen Inseln besucht. Thematischer Schwerpunkt ist Nächstenliebe und Migration. Auf Gran Canaria besucht der Papst den Hafen Arguineguín, Symbol der Migrationskrise, und auf Teneriffa das Aufnahmezentrum Las Raíces.',
    },
    'voluntarios-madrid-10000': {
      title: 'Madrid sucht 10.000 Freiwillige für den Papstbesuch',
      excerpt: 'Die Erzdiözese Madrid braucht 10.000 Freiwillige für Empfang, Hospitality und logistische Unterstützung während der Veranstaltungen.',
      content: 'Die Organisation des Papstbesuchs in Madrid erfordert eine Armee von Freiwilligen. 10.000 Personen werden für Empfang, Hospitality, Familienunterkunft, Event-Unterstützung und Vorbereitung benötigt. Anmeldungen bis 24. April 2026.',
      source: 'Erzdiözese Madrid',
    },
  },
  pt: {
    'vigilia-plaza-lima-misa-cibeles-confirmadas': {
      title: 'Horários e locais confirmados: Vigília em Plaza de Lima e Missa de Corpus Christi em Cibeles',
      excerpt: 'A organização confirma que no sábado 6 de junho às 20:00 se realizará uma grande vigília juvenil em Plaza de Lima e no domingo 7 às 9:30 a Missa de Corpus Christi em Plaza de Cibeles.',
      content: 'O comité organizador confirmou os detalhes dos principais atos massivos da visita papal a Madrid. No sábado 6 de junho às 20:00, o Papa Leão XIV presidirá uma grande vigília com jovens em Plaza de Lima, onde percorrerá a zona em papamóvel antes do ato com as suas palavras e adoração eucarística. No domingo 7 de junho às 9:30 celebrará a Missa de Corpus Christi desde Plaza de Cibeles, seguida de procissão eucarística. Nas Canárias, a Missa no Estádio de Gran Canária será quinta-feira 11 às 18:30 e a missa de encerramento em Tenerife sexta-feira 12 ao meio-dia no Porto de Santa Cruz. Inscrições abertas em inscripciones.conelpapa.es/auth.',
    },
    'confirmada-visita-papa-leon-xiv-espana': {
      title: 'Confirmada a visita do Papa Leão XIV a Espanha de 6 a 12 de junho',
      excerpt: 'A Santa Sé confirma oficialmente a viagem apostólica do Papa Leão XIV a Espanha, com paragens em Madrid, Barcelona, Gran Canária e Tenerife.',
      content: 'O Vaticano confirmou oficialmente que o Papa Leão XIV visitará Espanha de 6 a 12 de junho de 2026. A viagem apostólica incluirá paragens em Madrid, Barcelona, Gran Canária e Tenerife. É a primeira visita de um Papa a Espanha desde Bento XVI em 2011 e a primeira visita papal às Ilhas Canárias. A viagem apresenta-se sob o lema "Ergam o olhar" (João 4,35).',
      source: 'Gabinete de Imprensa da Santa Sé',
    },
    'registro-actos-madrid-abierto': {
      title: 'Inscrições abertas para os atos de Madrid',
      excerpt: 'Desde 7 de abril é possível inscrever-se em inscripciones.conelpapa.es para participar nos atos papais de Madrid.',
      content: 'A Arquidiocese de Madrid abriu o processo de inscrição para os atos públicos da visita papal. Os interessados podem registar-se em inscripciones.conelpapa.es. Os atos são gratuitos mas exigem inscrição prévia por questões de lotação e segurança. Espera-se uma afluência massiva.',
      source: 'Arquidiocese de Madrid',
    },
    'logo-himno-visita-papal': {
      title: 'Apresentados o logo e o hino oficial "Alza la mirada"',
      excerpt: 'O comité organizador revela a imagem oficial desenhada por María del Mar Chapa e o hino gravado em quatro catedrais com mais de 1.700 vozes.',
      content: 'A identidade visual da visita foi revelada. O logo, desenhado por María del Mar Chapa, foi apresentado a 7 de abril. O hino oficial "Alza la mirada" foi gravado a 22 de março de 2026 simultaneamente em quatro catedrais espanholas com a participação de mais de 1.700 vozes.',
    },
    'sagrada-familia-torre-jesus': {
      title: 'O Papa abençoará a Torre de Jesus da Sagrada Família',
      excerpt: 'O ato principal em Barcelona: a bênção da torre de 172,5 metros coincidirá com o centenário da morte de Gaudí.',
      content: 'Um dos momentos mais esperados da visita será a inauguração e bênção da Torre de Jesus Cristo da Sagrada Família, que com 172,5 metros será a mais alta da basílica. O ato coincide com o centenário da morte de Antoni Gaudí em 2026 e insere-se no seu processo de beatificação.',
    },
    'primera-visita-papal-canarias': {
      title: 'Canárias receberão pela primeira vez na história um Papa',
      excerpt: 'A visita a Gran Canária e Tenerife será histórica: nenhum pontífice tinha visitado as ilhas. O foco será a crise migratória.',
      content: 'A etapa canária da visita será histórica: é a primeira vez que um Papa visita as Ilhas Canárias. O eixo temático será a caridade e a migração. Em Gran Canária o Papa visitará o cais de Arguineguín, símbolo da crise migratória, e em Tenerife o centro de acolhimento de Las Raíces.',
    },
    'voluntarios-madrid-10000': {
      title: 'Madrid procura 10.000 voluntários para a visita papal',
      excerpt: 'A Arquidiocese de Madrid precisa de 10.000 voluntários para tarefas de acolhimento, hospitality e apoio logístico durante os atos.',
      content: 'A organização da visita papal em Madrid requer um exército de voluntários. São necessárias 10.000 pessoas para tarefas de acolhimento, hospitality, alojamento de famílias, apoio aos eventos e preparação. Inscrições até 24 de abril de 2026.',
      source: 'Arquidiocese de Madrid',
    },
  },
  // Catalán, gallego y euskera: sin traducción de noticias por ahora.
  // El fallback en getNewsByLocale usa el contenido español cuando una
  // noticia no tiene traducción específica. Perfecto para noticias frescas
  // que se generan a diario desde el RSS.
  ca: {},
  gl: {},
  eu: {},
}

export function getNewsByLocale(locale: Locale): NewsArticle[] {
  if (locale === 'es') return newsEs
  const trans = newsTranslations[locale] || {}
  return newsEs.map<NewsArticle>((n) => {
    const t = trans[n.slug]
    if (!t) return n
    return {
      ...n,
      title: t.title,
      excerpt: t.excerpt,
      content: t.content,
      source: t.source || n.source,
    }
  })
}
