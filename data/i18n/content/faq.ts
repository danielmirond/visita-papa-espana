import { FaqItem } from '@/data/faq'
import { faq as faqEs, FAQ_CATEGORIES as CATEGORIES_ES } from '@/data/faq'
import { Locale } from '@/data/i18n/types'

type Cat = FaqItem['category']

const mk = (category: Cat, q: string, a: string): FaqItem => ({ question: q, answer: a, category })

const faqEn: FaqItem[] = [
  mk('general', 'When will Pope Leo XIV visit Spain?', 'Pope Leo XIV will visit Spain from 6 to 12 June 2026. The route includes Madrid (6-8 June), Barcelona (9-10 June), Gran Canaria (11 June) and Tenerife (12 June).'),
  mk('general', 'What is the motto of the papal visit?', 'The official motto of the apostolic visit is "Lift up your eyes", taken from the Gospel of John 4:35.'),
  mk('general', 'Is it the first time a Pope visits Spain?', 'No. John Paul II visited Spain several times and Benedict XVI in 2011. However, this is the first visit by Leo XIV and the first time in history that a Pope visits the Canary Islands.'),
  mk('general', 'Which cities will the Pope visit?', 'The Pope will visit four cities: Madrid (institutional and ecclesial events), Barcelona (blessing of the Tower of Jesus at the Sagrada Familia), Gran Canaria (focus on migration) and Tenerife (closing Mass).'),
  mk('general', 'What is the official website of the visit?', 'The official website is conelpapa.es, managed by the Spanish Episcopal Conference. Registration for Madrid events uses inscripciones.conelpapa.es.'),
  mk('inscripcion', 'Is it free to attend the Pope’s events?', 'Yes, all public events are completely free. However, prior registration via the official website is mandatory due to capacity and security.'),
  mk('inscripcion', 'How do I register to attend?', 'You must register on the official website for each city. For Madrid, registration is at inscripciones.conelpapa.es. Choose the events, fill in the form and you’ll receive a confirmation email with your credential.'),
  mk('inscripcion', 'Do I need a ticket or invitation?', 'For public events (Masses, vigils) you need free prior registration. Some events such as the speech in Congress or private meetings are by invitation only and not open to the general public.'),
  mk('inscripcion', 'Can I bring children?', 'Yes, children can attend all public events. Bring sun protection, plenty of water and food. Mass events involve long waits and may not be suitable for very young children.'),
  mk('inscripcion', 'Can I volunteer?', 'Yes. The organisation needs thousands of volunteers in each city. In Madrid alone 10,000 volunteers are sought for welcoming, logistics and support tasks. You can register at conelpapa.es.'),
  mk('transporte', 'How do I get to Madrid for the Pope’s visit?', 'The best options are the AVE (high-speed train) from major Spanish cities or flying to Adolfo Suárez Madrid-Barajas Airport. During the visit, Metro and Cercanías will be reinforced with extended hours.'),
  mk('transporte', 'Will there be traffic closures?', 'Yes, major traffic closures are expected around event areas in every city. Public transport is strongly recommended. In Madrid, Cibeles, Castellana and Bernabéu areas will be affected.'),
  mk('transporte', 'How do I get to the Canary Islands for the visit?', 'Flying is the only option. Direct flights to Gran Canaria (LPA) and Tenerife (TFN and TFS) from Madrid and Barcelona. Between islands there are 30-minute inter-island flights and 1h30 ferries. Book well in advance — demand will be very high.'),
  mk('transporte', 'Will public transport hours be extended?', 'Yes. Metro, buses and regional trains will extend their hours and frequencies in all cities during the visit days. Specific details will be published weeks before the event.'),
  mk('alojamiento', 'Where should I stay in Madrid for the visit?', 'Best areas are Centro, Chamartín and the Castellana zone, close to the main events. Book as early as possible due to huge demand. Free accommodation is also available in parishes and religious schools with prior registration.'),
  mk('alojamiento', 'Is there free accommodation for pilgrims?', 'Yes. Parishes, schools and religious congregations offer free accommodation for pilgrims who need it. Registration is managed through the official website of each city.'),
  mk('alojamiento', 'Where should I stay in Barcelona?', 'Best areas are Eixample (near the Sagrada Familia) and Sants (good connection to Montjuïc and Montserrat). Book in advance as it coincides with peak tourist season.'),
  mk('evento', 'What events take place at the Sagrada Familia?', 'On 10 June the Pope will celebrate a solemn Mass at the Sagrada Familia Basilica and, as the central act, bless and inaugurate the Tower of Jesus Christ, 172.5 metres tall. This coincides with the centenary of Gaudí’s death.'),
  mk('evento', 'What is the Plaza de Lima vigil?', 'On Saturday 6 June at 20:00 a great youth vigil will be held at Plaza de Lima and surroundings. The Pope will tour the area in the popemobile, followed by his address and Eucharistic adoration. Prior registration required.'),
  mk('evento', 'What happens at Arguineguín dock?', 'On 11 June the Pope will visit Arguineguín dock in Gran Canaria, a symbolic place of the migration crisis in the Canaries. A highly symbolic act about welcome and migrant rights.'),
  mk('evento', 'Can I watch the visit on TV?', 'Yes. RTVE (La 1, La 2 and RTVE Play) will broadcast all main events live and free-to-air. 13TV, TRECE and Vatican News will also provide coverage. Giant screens will be installed at key points in each city.'),
  mk('evento', 'What if it rains?', 'Open-air events will take place unless weather is extreme. Bring a folding umbrella or raincoat just in case. Events in enclosed venues (Sagrada Familia, Bernabéu, Movistar Arena) are unaffected.'),
  mk('evento', 'What can I not bring to the events?', 'For security reasons, large backpacks, sharp objects, glass bottles, drones and long umbrellas are not allowed. Bring only essentials in a small bag or bumbag. Security checks will be in place at all access points.'),
]

const faqIt: FaqItem[] = [
  mk('general', 'Quando visiterà la Spagna Papa Leone XIV?', 'Papa Leone XIV visiterà la Spagna dal 6 al 12 giugno 2026. Il percorso include Madrid (6-8 giugno), Barcellona (9-10 giugno), Gran Canaria (11 giugno) e Tenerife (12 giugno).'),
  mk('general', 'Qual è il motto della visita papale?', 'Il motto ufficiale della visita apostolica è "Alzate lo sguardo", tratto dal Vangelo di Giovanni 4,35.'),
  mk('general', 'È la prima volta che un Papa visita la Spagna?', 'No. Giovanni Paolo II ha visitato la Spagna più volte e Benedetto XVI nel 2011. Tuttavia, è la prima visita di Leone XIV e la prima volta nella storia che un Papa visita le Isole Canarie.'),
  mk('general', 'Quali città visiterà il Papa?', 'Il Papa visiterà quattro città: Madrid (sede degli atti istituzionali ed ecclesiali), Barcellona (benedizione della Torre di Gesù alla Sagrada Familia), Gran Canaria (focus sulla migrazione) e Tenerife (messa di chiusura).'),
  mk('general', 'Qual è il sito ufficiale della visita?', 'Il sito ufficiale è conelpapa.es, gestito dalla Conferenza Episcopale Spagnola. Per le iscrizioni a Madrid si usa inscripciones.conelpapa.es.'),
  mk('inscripcion', 'È gratuito partecipare agli eventi del Papa?', 'Sì, tutti gli eventi pubblici sono completamente gratuiti. Tuttavia è obbligatoria l’iscrizione preventiva sul sito ufficiale per motivi di capienza e sicurezza.'),
  mk('inscripcion', 'Come mi iscrivo per partecipare?', 'Bisogna iscriversi sul sito ufficiale di ogni città. Per Madrid, l’iscrizione è su inscripciones.conelpapa.es. Seleziona gli eventi, compila il modulo e riceverai una email di conferma con la credenziale.'),
  mk('inscripcion', 'Serve biglietto o invito?', 'Per gli eventi pubblici (messe, veglie) serve l’iscrizione preventiva gratuita. Alcuni eventi come il discorso al Congresso o gli incontri privati sono solo su invito.'),
  mk('inscripcion', 'Posso partecipare con i bambini?', 'Sì, i bambini possono partecipare a tutti gli eventi pubblici. Porta protezione solare, acqua e cibo abbondanti. Gli eventi di massa comportano lunghe attese e potrebbero non essere adatti ai più piccoli.'),
  mk('inscripcion', 'Posso fare volontariato?', 'Sì. L’organizzazione cerca migliaia di volontari in ogni città. Solo a Madrid si cercano 10.000 volontari per accoglienza, logistica e supporto. Puoi iscriverti su conelpapa.es.'),
  mk('transporte', 'Come arrivo a Madrid per la visita?', 'Le migliori opzioni sono l’AVE (alta velocità) dalle principali città spagnole o l’aereo fino all’Aeroporto Adolfo Suárez Madrid-Barajas. Durante la visita Metro e Cercanías avranno orari ampliati.'),
  mk('transporte', 'Ci saranno blocchi del traffico?', 'Sì, sono previsti importanti blocchi del traffico intorno agli eventi in tutte le città. Si raccomanda vivamente il trasporto pubblico. A Madrid saranno interessate Cibeles, Castellana e Bernabéu.'),
  mk('transporte', 'Come arrivo alle Canarie per la visita?', 'L’unica opzione è l’aereo. Voli diretti per Gran Canaria (LPA) e Tenerife (TFN/TFS) da Madrid e Barcellona. Tra le isole ci sono voli interinsulari di 30 minuti e traghetti di 1h30. Prenota con molto anticipo.'),
  mk('transporte', 'Il trasporto pubblico avrà orari ampliati?', 'Sì. Metro, autobus e cercanías amplieranno orari e frequenze in tutte le città durante i giorni della visita. I dettagli saranno pubblicati nelle settimane precedenti.'),
  mk('alojamiento', 'Dove alloggio a Madrid per la visita?', 'Le migliori zone sono Centro, Chamartín e Castellana, vicino agli eventi principali. Prenota il prima possibile per la domanda enorme. Ci sarà anche alloggio gratuito in parrocchie e scuole religiose con registrazione.'),
  mk('alojamiento', 'C’è alloggio gratuito per i pellegrini?', 'Sì. Parrocchie, scuole e congregazioni religiose offrono alloggio gratuito ai pellegrini. La registrazione si gestisce tramite il sito ufficiale di ogni città.'),
  mk('alojamiento', 'Dove alloggio a Barcellona?', 'Le migliori zone sono l’Eixample (vicino alla Sagrada Familia) e Sants (buona connessione con Montjuïc e Montserrat). Prenota con anticipo perché coincide con l’alta stagione turistica.'),
  mk('evento', 'Che atti si celebrano alla Sagrada Familia?', 'Il 10 giugno il Papa celebrerà una messa solenne alla Basilica della Sagrada Familia e, come atto centrale, benedirà e inaugurerà la Torre di Gesù Cristo, di 172,5 metri. Coincide con il centenario della morte di Gaudí.'),
  mk('evento', 'Cos’è la veglia di Plaza de Lima?', 'Sabato 6 giugno alle 20:00 si terrà una grande veglia giovanile in Plaza de Lima e dintorni. Il Papa percorrerà la zona in papamobile, seguito dalle sue parole e adorazione eucaristica. Iscrizione preventiva obbligatoria.'),
  mk('evento', 'Cosa succede al molo di Arguineguín?', 'L’11 giugno il Papa visiterà il molo di Arguineguín a Gran Canaria, luogo simbolico della crisi migratoria. Un atto con forte carica simbolica sull’accoglienza e i diritti dei migranti.'),
  mk('evento', 'Si può vedere la visita in TV?', 'Sì. RTVE (La 1, La 2 e RTVE Play) trasmetterà tutti gli atti principali in diretta e in chiaro. Anche 13TV, TRECE e Vatican News offriranno copertura. Saranno installati maxi-schermi nei punti principali di ogni città.'),
  mk('evento', 'Cosa succede se piove?', 'Gli atti all’aperto si terranno salvo condizioni meteo estreme. Si consiglia ombrello pieghevole o impermeabile. Gli atti in luoghi chiusi (Sagrada Familia, Bernabéu, Movistar Arena) non sono influenzati.'),
  mk('evento', 'Cosa non posso portare agli atti?', 'Per sicurezza non sono ammessi zaini grandi, oggetti appuntiti, bottiglie di vetro, droni o ombrelli lunghi. Porta solo l’essenziale in una piccola borsa o marsupio. Ci saranno controlli di sicurezza agli ingressi.'),
]

const faqFr: FaqItem[] = [
  mk('general', 'Quand le Pape Léon XIV visitera-t-il l’Espagne ?', 'Le Pape Léon XIV visitera l’Espagne du 6 au 12 juin 2026. Le parcours comprend Madrid (6-8 juin), Barcelone (9-10 juin), Grande Canarie (11 juin) et Tenerife (12 juin).'),
  mk('general', 'Quelle est la devise de la visite pontificale ?', 'La devise officielle de la visite apostolique est « Levez les yeux », tirée de l’Évangile de Jean 4,35.'),
  mk('general', 'Est-ce la première fois qu’un Pape visite l’Espagne ?', 'Non. Jean-Paul II a visité l’Espagne plusieurs fois et Benoît XVI en 2011. Cependant, c’est la première visite de Léon XIV et la première fois qu’un Pape visite les Îles Canaries.'),
  mk('general', 'Quelles villes le Pape visitera-t-il ?', 'Le Pape visitera quatre villes : Madrid (siège des actes institutionnels et ecclésiaux), Barcelone (bénédiction de la Tour de Jésus à la Sagrada Família), Grande Canarie (focus sur la migration) et Tenerife (messe de clôture).'),
  mk('general', 'Quel est le site officiel de la visite ?', 'Le site officiel est conelpapa.es, géré par la Conférence épiscopale espagnole. Pour s’inscrire aux actes de Madrid : inscripciones.conelpapa.es.'),
  mk('inscripcion', 'Assister aux actes pontificaux est-il gratuit ?', 'Oui, tous les actes publics sont totalement gratuits. Cependant, l’inscription préalable sur le site officiel est obligatoire pour des raisons de capacité et de sécurité.'),
  mk('inscripcion', 'Comment m’inscrire pour y assister ?', 'Il faut s’inscrire sur le site officiel de chaque ville. Pour Madrid : inscripciones.conelpapa.es. Sélectionnez les actes, remplissez le formulaire et vous recevrez un e-mail de confirmation avec votre accréditation.'),
  mk('inscripcion', 'Ai-je besoin d’un billet ou d’une invitation ?', 'Pour les actes publics (messes, veillées) il faut une inscription préalable gratuite. Certains actes comme le discours au Congrès ou les rencontres privées sont uniquement sur invitation.'),
  mk('inscripcion', 'Puis-je venir avec des enfants ?', 'Oui, les enfants peuvent assister à tous les actes publics. Prévoyez protection solaire, eau et nourriture en quantité. Les actes massifs impliquent de longues attentes et peuvent ne pas convenir aux très jeunes enfants.'),
  mk('inscripcion', 'Puis-je être bénévole ?', 'Oui. L’organisation a besoin de milliers de bénévoles dans chaque ville. À Madrid seule, 10 000 bénévoles sont recherchés pour l’accueil, la logistique et le soutien. Inscription sur conelpapa.es.'),
  mk('transporte', 'Comment rejoindre Madrid pour la visite ?', 'Les meilleures options sont l’AVE (TGV) depuis les grandes villes espagnoles ou l’avion vers l’aéroport Adolfo Suárez Madrid-Barajas. Pendant la visite, Métro et Cercanías auront des horaires étendus.'),
  mk('transporte', 'Y aura-t-il des coupures de circulation ?', 'Oui, d’importantes coupures sont prévues autour des actes dans chaque ville. Les transports en commun sont fortement recommandés. À Madrid, les zones de Cibeles, Castellana et Bernabéu seront affectées.'),
  mk('transporte', 'Comment rejoindre les Canaries pour la visite ?', 'L’avion est la seule option. Vols directs vers Grande Canarie (LPA) et Tenerife (TFN/TFS) depuis Madrid et Barcelone. Entre les îles, vols inter-îles de 30 min et ferries de 1h30. Réservez bien à l’avance.'),
  mk('transporte', 'Les horaires de transport public seront-ils étendus ?', 'Oui. Métro, bus et cercanías étendront horaires et fréquences dans toutes les villes pendant les jours de la visite. Les détails seront publiés des semaines avant l’événement.'),
  mk('alojamiento', 'Où loger à Madrid pour la visite ?', 'Les meilleurs quartiers sont Centro, Chamartín et Castellana, près des principaux actes. Réservez le plus tôt possible en raison de la demande énorme. Hébergement gratuit aussi disponible dans les paroisses et écoles religieuses.'),
  mk('alojamiento', 'Y a-t-il un hébergement gratuit pour les pèlerins ?', 'Oui. Paroisses, écoles et congrégations religieuses offrent un hébergement gratuit aux pèlerins. L’inscription se gère via le site officiel de chaque ville.'),
  mk('alojamiento', 'Où loger à Barcelone ?', 'Les meilleurs quartiers sont l’Eixample (près de la Sagrada Família) et Sants (bonne connexion avec Montjuïc et Montserrat). Réservez à l’avance car cela coïncide avec la haute saison touristique.'),
  mk('evento', 'Quels actes se déroulent à la Sagrada Família ?', 'Le 10 juin le Pape célébrera une messe solennelle à la Sagrada Família et, comme acte central, bénira et inaugurera la Tour de Jésus-Christ, de 172,5 mètres. Cela coïncide avec le centenaire de la mort de Gaudí.'),
  mk('evento', 'Qu’est-ce que la veillée de la Plaza de Lima ?', 'Le samedi 6 juin à 20h00 se tiendra une grande veillée des jeunes à Plaza de Lima et environs. Le Pape parcourra la zone en papamobile, suivi de ses paroles et de l’adoration eucharistique. Inscription préalable obligatoire.'),
  mk('evento', 'Que se passe-t-il au quai d’Arguineguín ?', 'Le 11 juin le Pape visitera le quai d’Arguineguín à Grande Canarie, lieu symbolique de la crise migratoire. Un acte à forte charge symbolique sur l’accueil et les droits des migrants.'),
  mk('evento', 'Peut-on suivre la visite à la télévision ?', 'Oui. RTVE (La 1, La 2 et RTVE Play) retransmettra tous les actes principaux en direct et en clair. 13TV, TRECE et Vatican News offriront aussi une couverture. Des écrans géants seront installés dans les points clés.'),
  mk('evento', 'Que se passe-t-il s’il pleut ?', 'Les actes en plein air auront lieu sauf conditions météo extrêmes. Prévoyez un parapluie pliable ou un imperméable par précaution. Les actes en lieux fermés (Sagrada Família, Bernabéu, Movistar Arena) ne sont pas affectés.'),
  mk('evento', 'Que ne puis-je pas apporter aux actes ?', 'Pour des raisons de sécurité, les gros sacs à dos, objets pointus, bouteilles en verre, drones et parapluies longs sont interdits. Apportez l’essentiel dans un petit sac ou banane. Contrôles de sécurité aux accès.'),
]

const faqDe: FaqItem[] = [
  mk('general', 'Wann besucht Papst Leo XIV. Spanien?', 'Papst Leo XIV. besucht Spanien vom 6. bis 12. Juni 2026. Die Route führt über Madrid (6.-8. Juni), Barcelona (9.-10. Juni), Gran Canaria (11. Juni) und Teneriffa (12. Juni).'),
  mk('general', 'Wie lautet das Motto des Papstbesuchs?', 'Das offizielle Motto des apostolischen Besuchs ist „Erhebt eure Augen", aus dem Johannesevangelium 4,35.'),
  mk('general', 'Ist es der erste Papstbesuch in Spanien?', 'Nein. Johannes Paul II. besuchte Spanien mehrmals und Benedikt XVI. im Jahr 2011. Es ist jedoch der erste Besuch von Leo XIV. und der erste Papstbesuch auf den Kanarischen Inseln überhaupt.'),
  mk('general', 'Welche Städte besucht der Papst?', 'Der Papst besucht vier Städte: Madrid (institutionelle und kirchliche Akte), Barcelona (Segnung des Jesus-Christus-Turms der Sagrada Família), Gran Canaria (Migrationsschwerpunkt) und Teneriffa (Abschlussmesse).'),
  mk('general', 'Was ist die offizielle Website des Besuchs?', 'Die offizielle Website ist conelpapa.es, verwaltet von der Spanischen Bischofskonferenz. Die Anmeldung in Madrid erfolgt über inscripciones.conelpapa.es.'),
  mk('inscripcion', 'Ist die Teilnahme an den Papstakten kostenlos?', 'Ja, alle öffentlichen Akte sind völlig kostenlos. Die vorherige Anmeldung auf der offiziellen Website ist jedoch aus Kapazitäts- und Sicherheitsgründen verpflichtend.'),
  mk('inscripcion', 'Wie melde ich mich zur Teilnahme an?', 'Du musst dich auf der offiziellen Website jeder Stadt anmelden. Für Madrid unter inscripciones.conelpapa.es. Veranstaltungen auswählen, Formular ausfüllen und du erhältst eine Bestätigungs-E-Mail mit Akkreditierung.'),
  mk('inscripcion', 'Brauche ich ein Ticket oder eine Einladung?', 'Für öffentliche Akte (Messen, Vigilien) genügt die kostenlose Anmeldung. Einige Akte wie die Rede im Kongress oder private Begegnungen sind nur auf Einladung.'),
  mk('inscripcion', 'Kann ich mit Kindern teilnehmen?', 'Ja, Kinder dürfen an allen öffentlichen Akten teilnehmen. Bringe Sonnenschutz, reichlich Wasser und Essen mit. Massenveranstaltungen bedeuten lange Wartezeiten und sind für sehr kleine Kinder eventuell nicht geeignet.'),
  mk('inscripcion', 'Kann ich mich als Freiwilliger melden?', 'Ja. Die Organisation sucht tausende Freiwillige in jeder Stadt. Allein in Madrid werden 10.000 Freiwillige gesucht für Empfang, Logistik und Unterstützung. Anmeldung auf conelpapa.es.'),
  mk('transporte', 'Wie komme ich nach Madrid für den Papstbesuch?', 'Die besten Optionen sind AVE (Hochgeschwindigkeitszug) aus den großen spanischen Städten oder der Flug zum Flughafen Adolfo Suárez Madrid-Barajas. Während des Besuchs werden Metro und Cercanías verstärkt.'),
  mk('transporte', 'Wird es Verkehrssperrungen geben?', 'Ja, in allen Städten werden wichtige Sperrungen rund um die Veranstaltungen erwartet. Öffentlicher Nahverkehr wird dringend empfohlen. In Madrid sind Cibeles, Castellana und Bernabéu betroffen.'),
  mk('transporte', 'Wie komme ich auf die Kanaren für den Besuch?', 'Der Flug ist die einzige Option. Direktflüge nach Gran Canaria (LPA) und Teneriffa (TFN/TFS) aus Madrid und Barcelona. Zwischen den Inseln gibt es 30-Minuten-Flüge und 1h30-Fähren. Rechtzeitig buchen.'),
  mk('transporte', 'Werden die Fahrpläne des Nahverkehrs erweitert?', 'Ja. Metro, Busse und Cercanías erweitern Fahrpläne und Frequenzen in allen Städten während der Besuchstage. Details werden Wochen vorher veröffentlicht.'),
  mk('alojamiento', 'Wo übernachte ich in Madrid für den Besuch?', 'Die besten Gegenden sind Centro, Chamartín und Castellana, in der Nähe der Hauptakte. So früh wie möglich buchen wegen der großen Nachfrage. Kostenlose Unterkunft ist auch in Pfarreien und religiösen Schulen verfügbar.'),
  mk('alojamiento', 'Gibt es kostenlose Unterkünfte für Pilger?', 'Ja. Pfarreien, Schulen und religiöse Gemeinschaften bieten kostenlose Unterkünfte für Pilger. Die Anmeldung erfolgt über die offizielle Website jeder Stadt.'),
  mk('alojamiento', 'Wo übernachte ich in Barcelona?', 'Die besten Gegenden sind Eixample (nahe Sagrada Família) und Sants (gute Verbindung zu Montjuïc und Montserrat). Wegen der Hauptreisezeit früh buchen.'),
  mk('evento', 'Welche Akte finden in der Sagrada Família statt?', 'Am 10. Juni feiert der Papst eine feierliche Messe in der Basilika Sagrada Família und segnet als zentralen Akt den 172,5 Meter hohen Jesus-Christus-Turm. Dies fällt mit dem 100. Todestag von Gaudí zusammen.'),
  mk('evento', 'Was ist die Vigil auf der Plaza de Lima?', 'Am Samstag, 6. Juni um 20:00 Uhr findet eine große Jugendvigil am Plaza de Lima und Umgebung statt. Der Papst fährt im Papamobil durch die Zone, gefolgt von seiner Ansprache und eucharistischer Anbetung. Anmeldung erforderlich.'),
  mk('evento', 'Was geschieht am Hafen von Arguineguín?', 'Am 11. Juni besucht der Papst den Hafen von Arguineguín auf Gran Canaria, ein symbolträchtiger Ort der Migrationskrise. Ein Akt mit starker Symbolik für Aufnahme und Migrantenrechte.'),
  mk('evento', 'Kann man den Besuch im Fernsehen sehen?', 'Ja. RTVE (La 1, La 2 und RTVE Play) überträgt alle Hauptakte live und frei empfangbar. Auch 13TV, TRECE und Vatican News berichten umfassend. Großbildschirme werden an Schlüsselorten aufgestellt.'),
  mk('evento', 'Was passiert bei Regen?', 'Freiluftakte finden statt, außer bei extremen Wetterbedingungen. Empfohlen sind Faltschirm oder Regenjacke. Akte in geschlossenen Räumen (Sagrada Família, Bernabéu, Movistar Arena) sind nicht betroffen.'),
  mk('evento', 'Was darf ich nicht zu den Akten mitbringen?', 'Aus Sicherheitsgründen sind große Rucksäcke, spitze Gegenstände, Glasflaschen, Drohnen und lange Schirme verboten. Nur das Nötigste in kleiner Tasche oder Bauchtasche mitbringen. Sicherheitskontrollen an allen Zugängen.'),
]

const faqPt: FaqItem[] = [
  mk('general', 'Quando visita o Papa Leão XIV a Espanha?', 'O Papa Leão XIV visitará a Espanha de 6 a 12 de junho de 2026. O percurso inclui Madrid (6-8 junho), Barcelona (9-10 junho), Gran Canária (11 junho) e Tenerife (12 junho).'),
  mk('general', 'Qual é o lema da visita papal?', 'O lema oficial da visita apostólica é "Ergam o olhar", tirado do Evangelho de João 4,35.'),
  mk('general', 'É a primeira vez que um Papa visita a Espanha?', 'Não. João Paulo II visitou a Espanha várias vezes e Bento XVI em 2011. Contudo, é a primeira visita de Leão XIV e a primeira vez na história que um Papa visita as Ilhas Canárias.'),
  mk('general', 'Que cidades visitará o Papa?', 'O Papa visitará quatro cidades: Madrid (atos institucionais e eclesiais), Barcelona (bênção da Torre de Jesus na Sagrada Família), Gran Canária (foco na migração) e Tenerife (missa de encerramento).'),
  mk('general', 'Qual é o site oficial da visita?', 'O site oficial é conelpapa.es, gerido pela Conferência Episcopal Espanhola. Para inscrições em Madrid: inscripciones.conelpapa.es.'),
  mk('inscripcion', 'É gratuito assistir aos atos do Papa?', 'Sim, todos os atos públicos são totalmente gratuitos. No entanto, é obrigatória a inscrição prévia no site oficial por questões de lotação e segurança.'),
  mk('inscripcion', 'Como me inscrevo para assistir?', 'Deve inscrever-se no site oficial de cada cidade. Em Madrid: inscripciones.conelpapa.es. Selecione os atos, preencha o formulário e receberá um e-mail de confirmação com a sua credencial.'),
  mk('inscripcion', 'É necessário bilhete ou convite?', 'Para os atos públicos (missas, vigílias) é necessária inscrição prévia gratuita. Alguns atos como o discurso no Congresso ou encontros privados são apenas por convite.'),
  mk('inscripcion', 'Posso assistir com crianças?', 'Sim, as crianças podem assistir a todos os atos públicos. Leve proteção solar, muita água e comida. Eventos massivos implicam longas esperas e podem não ser adequados para crianças muito pequenas.'),
  mk('inscripcion', 'Posso ser voluntário?', 'Sim. A organização precisa de milhares de voluntários em cada cidade. Só em Madrid procuram-se 10.000 voluntários para acolhimento, logística e apoio. Inscrições em conelpapa.es.'),
  mk('transporte', 'Como chego a Madrid para a visita?', 'As melhores opções são o AVE (alta velocidade) das principais cidades espanholas ou avião para o Aeroporto Adolfo Suárez Madrid-Barajas. Durante a visita, Metro e Cercanías terão horários alargados.'),
  mk('transporte', 'Haverá cortes de tráfego?', 'Sim, estão previstos importantes cortes de tráfego nas zonas dos atos em todas as cidades. Recomenda-se vivamente o transporte público. Em Madrid serão afetadas Cibeles, Castellana e Bernabéu.'),
  mk('transporte', 'Como chego às Canárias para a visita?', 'A única opção é o avião. Voos diretos para Gran Canária (LPA) e Tenerife (TFN/TFS) desde Madrid e Barcelona. Entre ilhas há voos interilhas de 30 minutos e ferries de 1h30. Reserve com muita antecedência.'),
  mk('transporte', 'O horário do transporte público será alargado?', 'Sim. Metro, autocarros e comboios suburbanos alargarão horários e frequências em todas as cidades durante os dias da visita. Os detalhes serão publicados nas semanas anteriores.'),
  mk('alojamiento', 'Onde me alojo em Madrid para a visita?', 'As melhores zonas são Centro, Chamartín e Castellana, perto dos principais atos. Reserve o mais cedo possível devido à enorme procura. Haverá também alojamento gratuito em paróquias e colégios religiosos.'),
  mk('alojamiento', 'Há alojamento gratuito para peregrinos?', 'Sim. Paróquias, escolas e congregações religiosas oferecem alojamento gratuito aos peregrinos. A inscrição gere-se através do site oficial de cada cidade.'),
  mk('alojamiento', 'Onde me alojo em Barcelona?', 'As melhores zonas são o Eixample (perto da Sagrada Família) e Sants (boa ligação a Montjuïc e Montserrat). Reserve com antecedência pois coincide com a época alta turística.'),
  mk('evento', 'Que atos se realizam na Sagrada Família?', 'A 10 de junho o Papa celebrará uma missa solene na Basílica da Sagrada Família e, como ato central, abençoará e inaugurará a Torre de Jesus Cristo, de 172,5 metros. Coincide com o centenário da morte de Gaudí.'),
  mk('evento', 'O que é a vigília da Plaza de Lima?', 'No sábado 6 de junho às 20:00 realizar-se-á uma grande vigília juvenil em Plaza de Lima e arredores. O Papa percorrerá a zona em papamóvel, seguido das suas palavras e adoração eucarística. Inscrição prévia obrigatória.'),
  mk('evento', 'O que acontece no cais de Arguineguín?', 'A 11 de junho o Papa visitará o cais de Arguineguín em Gran Canária, lugar simbólico da crise migratória nas Canárias. Um ato de forte carga simbólica sobre o acolhimento e os direitos dos migrantes.'),
  mk('evento', 'Pode-se ver a visita pela televisão?', 'Sim. A RTVE (La 1, La 2 e RTVE Play) transmitirá todos os atos principais em direto e em aberto. 13TV, TRECE e Vatican News também darão cobertura. Ecrãs gigantes serão instalados nos principais pontos.'),
  mk('evento', 'O que acontece se chover?', 'Os atos ao ar livre realizam-se, salvo condições meteorológicas extremas. Recomenda-se guarda-chuva dobrável ou capa de chuva. Atos em recintos fechados (Sagrada Família, Bernabéu, Movistar Arena) não são afetados.'),
  mk('evento', 'O que não posso levar aos atos?', 'Por segurança, não são permitidas mochilas grandes, objetos cortantes, garrafas de vidro, drones ou guarda-chuvas longos. Leve apenas o essencial em bolsa pequena ou pochete. Controlos de segurança nos acessos.'),
]

const FAQ_CATEGORIES_EN = {
  general: 'General information',
  inscripcion: 'Registration and access',
  transporte: 'Transport',
  alojamiento: 'Accommodation',
  evento: 'About the events',
}
const FAQ_CATEGORIES_IT = {
  general: 'Informazioni generali',
  inscripcion: 'Iscrizione e accesso',
  transporte: 'Trasporti',
  alojamiento: 'Alloggio',
  evento: 'Sugli eventi',
}
const FAQ_CATEGORIES_FR = {
  general: 'Informations générales',
  inscripcion: 'Inscription et accès',
  transporte: 'Transport',
  alojamiento: 'Hébergement',
  evento: 'À propos des actes',
}
const FAQ_CATEGORIES_DE = {
  general: 'Allgemeine Informationen',
  inscripcion: 'Anmeldung und Zugang',
  transporte: 'Verkehr',
  alojamiento: 'Unterkunft',
  evento: 'Über die Veranstaltungen',
}
const FAQ_CATEGORIES_PT = {
  general: 'Informação geral',
  inscripcion: 'Inscrição e acesso',
  transporte: 'Transporte',
  alojamiento: 'Alojamento',
  evento: 'Sobre os atos',
}

// Catalán
const faqCa: FaqItem[] = [
  mk('general', 'Quan visitarà el Papa Lleó XIV Espanya?', 'El Papa Lleó XIV visitarà Espanya del 6 al 12 de juny de 2026. El recorregut inclou Madrid (6-8 juny), Barcelona (9-10 juny), Gran Canària (11 juny) i Tenerife (12 juny).'),
  mk('general', 'Quin és el lema de la visita papal?', 'El lema oficial de la visita apostòlica és "Alceu la mirada", pres de l’Evangeli de Joan 4,35.'),
  mk('general', 'És la primera vegada que un Papa visita Espanya?', 'No. Joan Pau II va visitar Espanya diverses vegades i Benet XVI el 2011. Però és la primera visita de Lleó XIV i la primera vegada en la història que un Papa visita les Illes Canàries.'),
  mk('general', 'Quines ciutats visitarà el Papa?', 'El Papa visitarà quatre ciutats: Madrid, Barcelona (benedicció de la Torre de Jesús a la Sagrada Família), Gran Canària (focus en migració) i Tenerife (missa de clausura).'),
  mk('general', 'Quina és la web oficial de la visita?', 'La web oficial és conelpapa.es. Per inscriure’s als actes de Madrid s’usa inscripciones.conelpapa.es.'),
  mk('inscripcion', 'És gratuït assistir als actes del Papa?', 'Sí, tots els actes públics són completament gratuïts. Però cal inscripció prèvia a la web oficial per motius d’aforament i seguretat.'),
  mk('inscripcion', 'Com m’inscric per assistir?', 'Has de registrar-te a la web oficial de cada ciutat. Per a Madrid, a inscripciones.conelpapa.es. Selecciona els actes, omple el formulari i rebràs una confirmació per email.'),
  mk('inscripcion', 'Necessito entrada o invitació?', 'Per als actes públics (misses, vetlles) cal inscripció prèvia gratuïta. Alguns actes com el discurs al Congrés són només per invitació.'),
  mk('inscripcion', 'Puc assistir amb nens?', 'Sí, els nens poden assistir als actes públics. Porta protecció solar, aigua i menjar. Els esdeveniments massius impliquen llargues esperes.'),
  mk('inscripcion', 'Puc ser voluntari?', 'Sí. L’organització necessita milers de voluntaris. A Madrid es busquen 10.000. Pots inscriure’t a conelpapa.es.'),
  mk('transporte', 'Com arribo a Madrid?', 'Les millors opcions són l’AVE des de les principals ciutats espanyoles o l’avió a l’Aeroport Adolfo Suárez Madrid-Barajas. Durant la visita es reforçarà Metro i Cercanies.'),
  mk('transporte', 'Hi haurà talls de trànsit?', 'Sí, s’esperen importants talls al voltant dels actes. Es recomana el transport públic. A Madrid afectarà Cibeles, Castellana i Bernabéu.'),
  mk('transporte', 'Com arribo a Canàries?', 'Només amb avió. Vols directes a Gran Canària (LPA) i Tenerife (TFN/TFS) des de Madrid i Barcelona. Entre illes hi ha vols de 30 min i ferris de 1h30.'),
  mk('transporte', 'S’ampliarà l’horari del transport públic?', 'Sí. Metro, autobusos i cercanies ampliaran horaris i freqüències. Els detalls es publicaran setmanes abans.'),
  mk('alojamiento', 'On m’allotjo a Madrid?', 'Les millors zones són Centre, Chamartín i Castellana. Reserva amb la màxima antelació per la gran demanda.'),
  mk('alojamiento', 'Hi ha allotjament gratuït per a pelegrins?', 'Sí. Parròquies i col·legis religiosos ofereixen allotjament gratuït a través de la web oficial.'),
  mk('alojamiento', 'On m’allotjo a Barcelona?', 'Les millors zones són l’Eixample (a prop de la Sagrada Família) i Sants. Reserva amb antelació per temporada alta.'),
  mk('evento', 'Quins actes tenen lloc a la Sagrada Família?', 'El 10 de juny el Papa celebrarà missa solemne a la Basílica i, com a acte central, beneirà la Torre de Jesucrist de 172,5 metres. Coincideix amb el centenari de Gaudí.'),
  mk('evento', 'Què és la vetlla de la Plaça de Lima?', 'El dissabte 6 de juny a les 20:00 es farà una gran vetlla juvenil a la Plaça de Lima. El Papa recorrerà la zona en papamòbil seguit de paraules i adoració eucarística.'),
  mk('evento', 'Què passa al moll d’Arguineguín?', 'L’11 de juny el Papa visitarà el moll d’Arguineguín a Gran Canària, lloc simbòlic de la crisi migratòria a les Canàries.'),
  mk('evento', 'Es pot veure la visita per televisió?', 'Sí. RTVE (La 1, La 2 i RTVE Play) retransmetrà tots els actes principals en directe i en obert. 13TV, TRECE i Vatican News també donaran cobertura.'),
  mk('evento', 'Què passa si plou?', 'Els actes a l’aire lliure es faran tret de condicions meteorològiques extremes. Porta un paraigua plegable. Els actes en recintes tancats no es veuen afectats.'),
  mk('evento', 'Què no puc portar als actes?', 'Per seguretat, no es permeten motxilles grans, objectes punxants, ampolles de vidre, drons ni paraigües llargs. Porta només l’imprescindible en una bossa petita.'),
]

// Gallego
const faqGl: FaqItem[] = [
  mk('general', 'Cando visitará o Papa León XIV a España?', 'O Papa León XIV visitará España do 6 ao 12 de xuño de 2026. O percorrido inclúe Madrid (6-8 xuño), Barcelona (9-10 xuño), Gran Canaria (11 xuño) e Tenerife (12 xuño).'),
  mk('general', 'Cal é o lema da visita papal?', 'O lema oficial da visita apostólica é "Ergue o ollar", tomado do Evanxeo de Xoán 4,35.'),
  mk('general', 'É a primeira vez que un Papa visita España?', 'Non. Xoán Paulo II visitou España varias veces e Bieito XVI en 2011. Pero é a primeira visita de León XIV e a primeira vez na historia que un Papa visita as Illas Canarias.'),
  mk('general', 'Que cidades visitará o Papa?', 'O Papa visitará catro cidades: Madrid, Barcelona (bendición da Torre de Xesús na Sagrada Familia), Gran Canaria (enfoque en migración) e Tenerife (misa de clausura).'),
  mk('general', 'Cal é a web oficial da visita?', 'A web oficial é conelpapa.es. Para inscribirse aos actos de Madrid úsase inscripciones.conelpapa.es.'),
  mk('inscripcion', 'É gratuíto asistir aos actos do Papa?', 'Si, todos os actos públicos son totalmente gratuítos. Pero require inscrición previa na web oficial por motivos de aforo e seguridade.'),
  mk('inscripcion', 'Como me inscribo para asistir?', 'Debes rexistrarte na web oficial de cada cidade. Para Madrid, en inscripciones.conelpapa.es. Selecciona os actos, completa o formulario e recibirás unha confirmación por email.'),
  mk('inscripcion', 'Necesito entrada ou invitación?', 'Para os actos públicos (misas, vixilias) cómpre inscrición previa gratuíta. Algúns actos como o discurso no Congreso son só por invitación.'),
  mk('inscripcion', 'Podo asistir con nenos?', 'Si, os nenos poden asistir aos actos públicos. Leva protección solar, auga e comida. Os eventos masivos implican longas esperas.'),
  mk('inscripcion', 'Podo ser voluntario?', 'Si. A organización precisa miles de voluntarios. En Madrid búscanse 10.000. Podes inscribirte en conelpapa.es.'),
  mk('transporte', 'Como chego a Madrid?', 'As mellores opcións son o AVE dende as principais cidades españolas ou o avión ao Aeroporto Adolfo Suárez Madrid-Barajas. Durante a visita reforzarase Metro e Cercanías.'),
  mk('transporte', 'Haberá cortes de tráfico?', 'Si, espéranse importantes cortes arredor dos actos. Recoméndase o transporte público. En Madrid afectará Cibeles, Castellana e Bernabéu.'),
  mk('transporte', 'Como chego a Canarias?', 'Só en avión. Voos directos a Gran Canaria (LPA) e Tenerife (TFN/TFS) dende Madrid e Barcelona. Entre illas hai voos de 30 min e ferries de 1h30.'),
  mk('transporte', 'Ampliarase o horario do transporte público?', 'Si. Metro, autobuses e cercanías ampliarán horarios e frecuencias. Os detalles publicaranse semanas antes.'),
  mk('alojamiento', 'Onde me aloxo en Madrid?', 'As mellores zonas son Centro, Chamartín e Castellana. Reserva coa máxima antelación pola gran demanda.'),
  mk('alojamiento', 'Hai aloxamento gratuíto para peregrinos?', 'Si. Parroquias e colexios relixiosos ofrecen aloxamento gratuíto a través da web oficial.'),
  mk('alojamiento', 'Onde me aloxo en Barcelona?', 'As mellores zonas son o Eixample (preto da Sagrada Familia) e Sants. Reserva con antelación pola temporada alta.'),
  mk('evento', 'Que actos teñen lugar na Sagrada Familia?', 'O 10 de xuño o Papa celebrará misa solemne na Basílica e, como acto central, bendecirá a Torre de Xesucristo de 172,5 metros. Coincide co centenario de Gaudí.'),
  mk('evento', 'Que é a vixilia da Plaza de Lima?', 'O sábado 6 de xuño ás 20:00 celebrarase unha gran vixilia xuvenil na Plaza de Lima. O Papa percorrerá a zona en papamóbil seguido de palabras e adoración eucarística.'),
  mk('evento', 'Que pasa no peirao de Arguineguín?', 'O 11 de xuño o Papa visitará o peirao de Arguineguín en Gran Canaria, lugar simbólico da crise migratoria nas Canarias.'),
  mk('evento', 'Pódese ver a visita por televisión?', 'Si. RTVE (La 1, La 2 e RTVE Play) retransmitirá todos os actos principais en directo e en aberto. 13TV, TRECE e Vatican News tamén darán cobertura.'),
  mk('evento', 'Que pasa se chove?', 'Os actos ao aire libre celebraranse salvo condicións meteorolóxicas extremas. Leva un paraugas pregable. Os actos en recintos pechados non se ven afectados.'),
  mk('evento', 'Que non podo levar aos actos?', 'Por seguridade, non se permiten mochilas grandes, obxectos punzantes, botellas de vidro, drons nin paraugas longos. Leva só o imprescindible nunha bolsa pequena.'),
]

// Euskera
const faqEu: FaqItem[] = [
  mk('general', 'Noiz bisitatuko du Leon XIV.a Aita Santuak Espainia?', 'Leon XIV.a Aita Santuak 2026ko ekainaren 6tik 12ra bisitatuko du Espainia. Ibilbideak Madrid (ekainak 6-8), Bartzelona (ekainak 9-10), Gran Canaria (ekainak 11) eta Tenerife (ekainak 12) biltzen ditu.'),
  mk('general', 'Zein da bisitaldi papalaren leloa?', 'Bisitaldi apostolikoaren lelo ofiziala "Altxatu begirada" da, Joan 4,35etik hartua.'),
  mk('general', 'Aita Santu batek Espainia bisitatzen duen lehen aldia al da?', 'Ez. Joan Paulo II.ak Espainia hainbat aldiz bisitatu zuen eta Benedikto XVI.ak 2011n. Hala ere, Leon XIV.aren lehen bisitaldia da eta historian Aita Santu batek Kanariak bisitatzen dituen lehen aldia.'),
  mk('general', 'Zein hiri bisitatuko ditu Aita Santuak?', 'Aita Santuak lau hiri bisitatuko ditu: Madril, Bartzelona (Jesukristo Dorrearen bedeinkazioa Sagrada Familian), Gran Canaria (migrazioan enfokatua) eta Tenerife (itxiera meza).'),
  mk('general', 'Zein da bisitaldiaren webgune ofiziala?', 'Webgune ofiziala conelpapa.es da. Madrilgo ekitaldietara izena emateko inscripciones.conelpapa.es erabiltzen da.'),
  mk('inscripcion', 'Doakoa al da Aita Santuaren ekitaldietara joatea?', 'Bai, ekitaldi publiko guztiak erabat doakoak dira. Hala ere, aldez aurretik izena eman behar da webgune ofizialean, edukiera eta segurtasun arrazoiengatik.'),
  mk('inscripcion', 'Nola eman dezaket izena?', 'Hiri bakoitzaren webgune ofizialean erregistratu behar duzu. Madrilerako, inscripciones.conelpapa.es helbidean. Hautatu ekitaldiak, bete inprimakia eta berrespena jasoko duzu emailez.'),
  mk('inscripcion', 'Sarrera edo gonbidapena behar dut?', 'Ekitaldi publikoetarako (mezak, bijiliak) aldez aurretiko izen-ematea behar da. Ekitaldi batzuk, hala nola Kongresuko hitzaldia, gonbidapenez soilik dira.'),
  mk('inscripcion', 'Haurrekin joan naiteke?', 'Bai, haurrak ekitaldi publikoetara joan daitezke. Eraman eguzki-babesa, ura eta jana. Ekitaldi masiboek itxaronaldi luzeak dakartzate.'),
  mk('inscripcion', 'Boluntarioa izan naiteke?', 'Bai. Antolakuntzak milaka boluntario behar ditu. Madrilen 10.000 bilatzen dira. conelpapa.es helbidean eman dezakezu izena.'),
  mk('transporte', 'Nola heldu naiz Madrilera?', 'Aukerarik onenak AVEa dira Espainiako hiri nagusietatik edo hegaldia Adolfo Suárez Madrid-Barajas aireportura. Bisitaldian zehar Metroa eta Cercanías indartu egingo dira.'),
  mk('transporte', 'Trafiko-murrizketarik egongo al da?', 'Bai, ekitaldien inguruan murrizketa handiak espero dira. Garraio publikoa gomendatzen da. Madrilen Cibeles, Castellana eta Bernabéu izango dira kaltetuak.'),
  mk('transporte', 'Nola heldu naiz Kanarietara?', 'Hegazkinez soilik. Zuzeneko hegaldiak Gran Canariara (LPA) eta Tenerifera (TFN/TFS) Madriletik eta Bartzelonatik. Uharteen artean 30 minutuko hegaldiak eta 1h30eko ferryak daude.'),
  mk('transporte', 'Garraio publikoaren ordutegia luzatuko al da?', 'Bai. Metroak, autobusek eta Cercaníasek ordutegiak eta maiztasunak luzatuko dituzte. Xehetasunak aste batzuk lehenago argitaratuko dira.'),
  mk('alojamiento', 'Non ostatu hartu Madrilen?', 'Eremu onenak Centro, Chamartín eta Castellana dira. Erreserbatu ahalik eta lasterren, eskaera handia dela eta.'),
  mk('alojamiento', 'Ba al dago erromesen doako ostaturik?', 'Bai. Parrokiek eta ikastetxe erlijiosoek doako ostatua eskaintzen dute webgune ofizialaren bidez.'),
  mk('alojamiento', 'Non ostatu hartu Bartzelonan?', 'Eremu onenak Eixamplea (Sagrada Familiatik gertu) eta Sants dira. Erreserbatu aldez aurretik turismo-denboraldia baita.'),
  mk('evento', 'Zer ekitaldi egiten dira Sagrada Familian?', 'Ekainaren 10ean Aita Santuak meza solemnea emango du Basilikan eta, ekitaldi nagusi gisa, 172,5 metroko Jesukristo Dorrea bedeinkatuko du. Gaudíren mendeurrenarekin bat egiten du.'),
  mk('evento', 'Zer da Lima plazako bijilia?', 'Larunbatean, ekainak 6, 20:00etan gazteen bijilia handia egingo da Lima plazan. Aita Santuak papamobilean ibiliko da eremuan zehar, ondoren hitzak esango ditu eta adorazio eukaristikoa egingo da.'),
  mk('evento', 'Zer gertatzen da Arguineguíngo kaian?', 'Ekainaren 11n Aita Santuak Arguineguíngo kaia bisitatuko du Gran Canarian, Kanarietako migrazio-krisiaren toki sinbolikoa.'),
  mk('evento', 'Telebistaz ikus al daiteke bisitaldia?', 'Bai. RTVEk (La 1, La 2 eta RTVE Play) ekitaldi nagusi guztiak zuzenean eta libreki emango ditu. 13TV, TRECE eta Vatican News-ek ere estaldura emango dute.'),
  mk('evento', 'Zer gertatzen da euria eginez gero?', 'Aire zabaleko ekitaldiak egingo dira, baldintza meteorologiko muturrekoak direnean izan ezik. Eraman tolesgarri euritakoa. Itxitako guneetako ekitaldiei ez zaie eragiten.'),
  mk('evento', 'Zer ezin dut eraman ekitaldietara?', 'Segurtasunagatik, ez dira onartzen motxila handiak, objektu zorrotzak, kristalezko botilak, droneak edo euritakoak. Eraman behar-beharrezkoa soilik poltsa txiki batean.'),
]

const FAQ_CATEGORIES_CA = {
  general: 'Informació general',
  inscripcion: 'Inscripció i accés',
  transporte: 'Transport',
  alojamiento: 'Allotjament',
  evento: 'Sobre els actes',
}
const FAQ_CATEGORIES_GL = {
  general: 'Información xeral',
  inscripcion: 'Inscrición e acceso',
  transporte: 'Transporte',
  alojamiento: 'Aloxamento',
  evento: 'Sobre os actos',
}
const FAQ_CATEGORIES_EU = {
  general: 'Informazio orokorra',
  inscripcion: 'Izen-ematea eta sarrera',
  transporte: 'Garraioa',
  alojamiento: 'Ostatua',
  evento: 'Ekitaldiei buruz',
}

const faqMap: Record<Locale, FaqItem[]> = {
  es: faqEs,
  en: faqEn,
  it: faqIt,
  fr: faqFr,
  de: faqDe,
  pt: faqPt,
  ca: faqCa,
  gl: faqGl,
  eu: faqEu,
}

const catMap: Record<Locale, typeof CATEGORIES_ES> = {
  es: CATEGORIES_ES,
  en: FAQ_CATEGORIES_EN,
  it: FAQ_CATEGORIES_IT,
  fr: FAQ_CATEGORIES_FR,
  de: FAQ_CATEGORIES_DE,
  pt: FAQ_CATEGORIES_PT,
  ca: FAQ_CATEGORIES_CA,
  gl: FAQ_CATEGORIES_GL,
  eu: FAQ_CATEGORIES_EU,
}

export function getFaqByLocale(locale: Locale): FaqItem[] {
  return faqMap[locale] || faqEs
}

export function getFaqCategoriesByLocale(locale: Locale): typeof CATEGORIES_ES {
  return catMap[locale] || CATEGORIES_ES
}
