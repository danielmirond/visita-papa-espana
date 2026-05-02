/**
 * Traducciones de las 20 frases célebres del Papa León XIV a los 8 idiomas
 * no-ES. Source of truth: data/frasesPapa.ts (español).
 */

import type { Locale } from '@/data/i18n/types'
import { frases, TEMAS_FRASE, type Frase, type TemaFrase } from '@/data/frasesPapa'

type FraseTranslation = { texto: string; ocasion: string; fuente: string }

// Se mantiene el orden exacto de data/frasesPapa.ts (índice 0-19)
const FRASES_EN: FraseTranslation[] = [
  // Paz
  { texto: 'The peace of the risen Christ, an unarmed and disarming peace, humble and persevering.', ocasion: 'First greeting from the Vatican Loggia', fuente: 'Vatican.va' },
  { texto: 'Before bombs fall, words fall: words that dehumanise, that delegitimise, that morally prepare violence. Disarming words is the first step to disarming the earth.', ocasion: 'Message for the World Day of Peace 2026', fuente: 'Vatican.va' },
  { texto: 'No war is holy. Every war is a defeat for humanity, even one disguised as legitimate defence when it forgets civilian faces.', ocasion: 'Urbi et Orbi, Christmas 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'No wall is higher than human dignity.', ocasion: 'Message for the World Day of Migrants and Refugees', fuente: 'Vatican.va' },
  { texto: 'Migration, before being a political issue, is a concrete face of Christ knocking at our door.', ocasion: 'Message for the World Day of Migrants and Refugees', fuente: 'Vatican.va' },
  { texto: 'For thirty years I lived in northern Peru, a land marked by the continuous movement of people in search of life. The migrant is not a number: he is a brother with a name, a history, a mother waiting for him.', ocasion: 'Meeting with Latin American bishops', fuente: 'Vatican News' },
  // IA
  { texto: 'Artificial intelligence cannot make decisions affecting life and human dignity without responsible human oversight. Dignity is not computed.', ocasion: 'Message to the G7 on AI', fuente: 'Vatican.va' },
  { texto: 'I have chosen the name Leo because Leo XIII addressed the social question in the context of the first great industrial revolution. Today we respond to another industrial revolution: that of artificial intelligence.', ocasion: 'Address to the College of Cardinals', fuente: 'Vatican.va' },
  { texto: 'Let us not fear machines. Let us fear algorithms that learn to imitate compassion without feeling it, and men who abdicate their conscience by delegating it to code.', ocasion: 'Address to the UN General Assembly', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'The Church offers to all her heritage of social doctrine to respond to the new challenges of human dignity, justice and labour.', ocasion: 'Address to the College of Cardinals', fuente: 'Vatican.va' },
  { texto: 'An economy that discards people is not Christian economy, even if preached on Sundays. The social Gospel starts at the bank receipt.', ocasion: 'Conference with the Centesimus Annus Foundation', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'The poor are not a problem of the Church: they are the heart of the Church. When we forget them, we forget Christ himself.', ocasion: 'World Day of the Poor', fuente: 'Vatican.va' },
  { texto: 'Peter was not called for his qualities but because the Lord loved him. This ministry I receive is a vocation to give my life for my brothers, especially the smallest.', ocasion: 'Homily for the beginning of the pontificate', fuente: 'Vatican.va' },
  // Familia
  { texto: 'The family is not an institution to be preserved: it is a vocation to be celebrated. Wherever two people love each other, God speaks.', ocasion: 'Audience with the Pontifical Academy for the Family', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — in him who is one, let us be one. This is my motto and my programme: the unity of the Church, not as uniformity, but as a symphony of the Spirit.', ocasion: 'Address to the College of Cardinals', fuente: 'Vatican.va' },
  { texto: 'Whoever uses the liturgy as an identity banner has not understood that the liturgy is an encounter with Christ, not an ideological trench.', ocasion: 'Letter to bishops on liturgy', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'We want to be a synodal Church, a Church that walks, a Church that builds bridges, always open to welcome as this square with its open arms.', ocasion: 'First greeting from the Vatican Loggia', fuente: 'Vatican.va' },
  { texto: 'Listening is not waiting for your turn to speak: it is letting the other modify my own heart. Synodality is this listening made method.', ocasion: 'Meeting with the Permanent Synod Assembly', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Do not be afraid to open wide the doors to Christ. It is not a worn-out phrase: it is a renewed urgency for every generation that begins.', ocasion: 'Vigil with young people in Rome', fuente: 'Vatican News' },
  // Mujer
  { texto: 'A Church without women is a body without memory. Without their talent, their prayer and their pastoral leadership, it would simply cease to be Church.', ocasion: 'Audience with major superiors', fuente: 'Vatican News' },
]

const FRASES_IT: FraseTranslation[] = [
  // Paz
  { texto: 'La pace del Cristo risorto, una pace disarmata e disarmante, umile e perseverante.', ocasion: 'Primo saluto dalla Loggia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Prima delle bombe cadono le parole: parole che disumanizzano, che delegittimano, che preparano moralmente la violenza. Disarmare le parole è il primo passo per disarmare la terra.', ocasion: 'Messaggio per la Giornata Mondiale della Pace 2026', fuente: 'Vatican.va' },
  { texto: 'Nessuna guerra è santa. Ogni guerra è una sconfitta dell\'umanità, anche quella che si traveste da legittima difesa quando dimentica i volti dei civili.', ocasion: 'Urbi et Orbi, Natale 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Nessun muro è più alto della dignità umana.', ocasion: 'Messaggio per la Giornata Mondiale del Migrante e del Rifugiato', fuente: 'Vatican.va' },
  { texto: 'La migrazione, prima di essere una questione politica, è un volto concreto di Cristo che bussa alla nostra porta.', ocasion: 'Messaggio per la Giornata Mondiale del Migrante e del Rifugiato', fuente: 'Vatican.va' },
  { texto: 'Per trent\'anni ho vissuto nel nord del Perù, una terra segnata dal continuo movimento di persone in cerca di vita. Il migrante non è un numero: è un fratello con un nome, una storia, una madre che lo aspetta.', ocasion: 'Incontro con i vescovi latinoamericani', fuente: 'Vatican News' },
  // IA
  { texto: 'L\'intelligenza artificiale non può prendere decisioni che riguardano la vita e la dignità umana senza una supervisione umana responsabile. La dignità non si computa.', ocasion: 'Messaggio al G7 sull\'IA', fuente: 'Vatican.va' },
  { texto: 'Ho scelto il nome di Leone perché Leone XIII affrontò la questione sociale nel contesto della prima grande rivoluzione industriale. Oggi rispondiamo a un\'altra rivoluzione industriale: quella dell\'intelligenza artificiale.', ocasion: 'Discorso al Collegio Cardinalizio', fuente: 'Vatican.va' },
  { texto: 'Non temiamo le macchine. Temiamo gli algoritmi che imparano a imitare la compassione senza sentirla, e gli uomini che abdicano alla loro coscienza delegandola al codice.', ocasion: 'Discorso all\'Assemblea Generale dell\'ONU', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'La Chiesa offre a tutti il suo patrimonio di dottrina sociale per rispondere alle nuove sfide della dignità umana, della giustizia e del lavoro.', ocasion: 'Discorso al Collegio Cardinalizio', fuente: 'Vatican.va' },
  { texto: 'Un\'economia che scarta le persone non è economia cristiana, anche se la si predica la domenica. Il Vangelo sociale comincia alla ricevuta della banca.', ocasion: 'Conferenza con la Fondazione Centesimus Annus', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'I poveri non sono un problema della Chiesa: sono il cuore della Chiesa. Quando li dimentichiamo, dimentichiamo lo stesso Cristo.', ocasion: 'Giornata Mondiale dei Poveri', fuente: 'Vatican.va' },
  { texto: 'Pietro non fu chiamato per le sue qualità, ma perché il Signore lo amava. Questo ministero che ricevo è una vocazione a dare la vita per i fratelli, specialmente per i più piccoli.', ocasion: 'Omelia di inizio del pontificato', fuente: 'Vatican.va' },
  // Familia
  { texto: 'La famiglia non è un\'istituzione da conservare: è una vocazione da celebrare. Là dove due persone si amano, Dio parla.', ocasion: 'Udienza con la Pontificia Accademia per la Famiglia', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — in colui che è uno, siamo uno. Questo è il mio motto e il mio programma: l\'unità della Chiesa, non come uniformità, ma come sinfonia dello Spirito.', ocasion: 'Discorso al Collegio Cardinalizio', fuente: 'Vatican.va' },
  { texto: 'Chi usa la liturgia come bandiera identitaria non ha capito che la liturgia è incontro con Cristo, non trincea ideologica.', ocasion: 'Lettera ai vescovi sulla liturgia', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Vogliamo essere una Chiesa sinodale, una Chiesa che cammina, una Chiesa che costruisce ponti, sempre aperta ad accogliere come questa piazza con le sue braccia aperte.', ocasion: 'Primo saluto dalla Loggia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Ascoltare non è aspettare il proprio turno per parlare: è lasciare che l\'altro modifichi il mio stesso cuore. La sinodalità è questo ascolto fatto metodo.', ocasion: 'Incontro con l\'Assemblea Permanente del Sinodo', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Non abbiate paura di spalancare le porte a Cristo. Non è una frase logora: è un\'urgenza rinnovata per ogni generazione che comincia.', ocasion: 'Veglia con i giovani a Roma', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Una Chiesa senza donne è un corpo senza memoria. Senza il loro talento, la loro preghiera e la loro guida pastorale, semplicemente cesserebbe di essere Chiesa.', ocasion: 'Udienza con le superiore maggiori', fuente: 'Vatican News' },
]

const FRASES_FR: FraseTranslation[] = [
  // Paz
  { texto: 'La paix du Christ ressuscité, une paix désarmée et désarmante, humble et persévérante.', ocasion: 'Premier salut depuis la Loge vaticane', fuente: 'Vatican.va' },
  { texto: 'Avant les bombes tombent les paroles : des paroles qui déshumanisent, qui délégitiment, qui préparent moralement la violence. Désarmer les paroles est le premier pas pour désarmer la terre.', ocasion: 'Message pour la Journée mondiale de la paix 2026', fuente: 'Vatican.va' },
  { texto: 'Aucune guerre n\'est sainte. Toute guerre est une défaite de l\'humanité, même celle qui se déguise en légitime défense quand elle oublie les visages des civils.', ocasion: 'Urbi et Orbi, Noël 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Aucun mur n\'est plus haut que la dignité humaine.', ocasion: 'Message pour la Journée mondiale du migrant et du réfugié', fuente: 'Vatican.va' },
  { texto: 'La migration, avant d\'être une question politique, est un visage concret du Christ qui frappe à notre porte.', ocasion: 'Message pour la Journée mondiale du migrant et du réfugié', fuente: 'Vatican.va' },
  { texto: 'Pendant trente ans j\'ai vécu dans le nord du Pérou, une terre marquée par le mouvement continu de personnes en quête de vie. Le migrant n\'est pas un numéro : c\'est un frère avec un nom, une histoire, une mère qui l\'attend.', ocasion: 'Rencontre avec les évêques latino-américains', fuente: 'Vatican News' },
  // IA
  { texto: 'L\'intelligence artificielle ne peut pas prendre de décisions concernant la vie et la dignité humaine sans une supervision humaine responsable. La dignité ne se calcule pas.', ocasion: 'Message au G7 sur l\'IA', fuente: 'Vatican.va' },
  { texto: 'J\'ai choisi le nom de Léon parce que Léon XIII a affronté la question sociale dans le contexte de la première grande révolution industrielle. Aujourd\'hui nous répondons à une autre révolution industrielle : celle de l\'intelligence artificielle.', ocasion: 'Discours au Collège cardinalice', fuente: 'Vatican.va' },
  { texto: 'Ne craignons pas les machines. Craignons les algorithmes qui apprennent à imiter la compassion sans la ressentir, et les hommes qui abdiquent leur conscience en la déléguant au code.', ocasion: 'Discours à l\'Assemblée générale de l\'ONU', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'L\'Église offre à tous son patrimoine de doctrine sociale pour répondre aux nouveaux défis de la dignité humaine, de la justice et du travail.', ocasion: 'Discours au Collège cardinalice', fuente: 'Vatican.va' },
  { texto: 'Une économie qui rejette les personnes n\'est pas une économie chrétienne, même si on la prêche le dimanche. L\'Évangile social commence au reçu de la banque.', ocasion: 'Conférence avec la Fondation Centesimus Annus', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'Les pauvres ne sont pas un problème de l\'Église : ils sont le cœur de l\'Église. Quand nous les oublions, nous oublions le Christ lui-même.', ocasion: 'Journée mondiale des pauvres', fuente: 'Vatican.va' },
  { texto: 'Pierre n\'a pas été appelé pour ses qualités, mais parce que le Seigneur l\'aimait. Ce ministère que je reçois est une vocation à donner ma vie pour mes frères, surtout les plus petits.', ocasion: 'Homélie du début du pontificat', fuente: 'Vatican.va' },
  // Familia
  { texto: 'La famille n\'est pas une institution à conserver : c\'est une vocation à célébrer. Là où deux personnes s\'aiment, Dieu parle.', ocasion: 'Audience avec l\'Académie pontificale pour la famille', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — en celui qui est un, soyons un. Telle est ma devise et mon programme : l\'unité de l\'Église, non comme uniformité, mais comme symphonie de l\'Esprit.', ocasion: 'Discours au Collège cardinalice', fuente: 'Vatican.va' },
  { texto: 'Celui qui utilise la liturgie comme bannière identitaire n\'a pas compris que la liturgie est rencontre avec le Christ, non tranchée idéologique.', ocasion: 'Lettre aux évêques sur la liturgie', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Nous voulons être une Église synodale, une Église qui marche, une Église qui construit des ponts, toujours ouverte à accueillir comme cette place aux bras ouverts.', ocasion: 'Premier salut depuis la Loge vaticane', fuente: 'Vatican.va' },
  { texto: 'Écouter, ce n\'est pas attendre son tour pour parler : c\'est laisser l\'autre modifier mon propre cœur. La synodalité est cette écoute faite méthode.', ocasion: 'Rencontre avec l\'Assemblée permanente du Synode', fuente: 'Vatican News' },
  // Juventud
  { texto: 'N\'ayez pas peur d\'ouvrir tout grand les portes au Christ. Ce n\'est pas une phrase usée : c\'est une urgence renouvelée pour chaque génération qui commence.', ocasion: 'Veillée avec les jeunes à Rome', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Une Église sans femmes est un corps sans mémoire. Sans leur talent, leur prière et leur conduite pastorale, elle cesserait simplement d\'être Église.', ocasion: 'Audience avec les supérieures majeures', fuente: 'Vatican News' },
]

const FRASES_DE: FraseTranslation[] = [
  // Paz
  { texto: 'Der Friede des auferstandenen Christus, ein entwaffneter und entwaffnender Friede, demütig und beharrlich.', ocasion: 'Erster Gruß von der Vatikanloggia', fuente: 'Vatican.va' },
  { texto: 'Vor den Bomben fallen die Worte: Worte, die entmenschlichen, die delegitimieren, die die Gewalt sittlich vorbereiten. Die Worte zu entwaffnen ist der erste Schritt, um die Erde zu entwaffnen.', ocasion: 'Botschaft zum Weltfriedenstag 2026', fuente: 'Vatican.va' },
  { texto: 'Kein Krieg ist heilig. Jeder Krieg ist eine Niederlage der Menschheit, auch jener, der sich als rechtmäßige Verteidigung tarnt, wenn er die Gesichter der Zivilisten vergisst.', ocasion: 'Urbi et Orbi, Weihnachten 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Keine Mauer ist höher als die Menschenwürde.', ocasion: 'Botschaft zum Welttag der Migranten und Flüchtlinge', fuente: 'Vatican.va' },
  { texto: 'Migration ist, bevor sie eine politische Frage ist, ein konkretes Antlitz Christi, der an unsere Tür klopft.', ocasion: 'Botschaft zum Welttag der Migranten und Flüchtlinge', fuente: 'Vatican.va' },
  { texto: 'Dreißig Jahre lang lebte ich im Norden Perus, einem Land, das vom ständigen Aufbruch von Menschen auf der Suche nach Leben geprägt ist. Der Migrant ist keine Nummer: er ist ein Bruder mit einem Namen, einer Geschichte, einer Mutter, die auf ihn wartet.', ocasion: 'Begegnung mit den lateinamerikanischen Bischöfen', fuente: 'Vatican News' },
  // IA
  { texto: 'Künstliche Intelligenz darf keine Entscheidungen treffen, die Leben und Menschenwürde betreffen, ohne verantwortliche menschliche Aufsicht. Würde wird nicht berechnet.', ocasion: 'Botschaft an die G7 zur KI', fuente: 'Vatican.va' },
  { texto: 'Ich habe den Namen Leo gewählt, weil Leo XIII. die soziale Frage im Kontext der ersten großen industriellen Revolution aufgriff. Heute antworten wir auf eine andere industrielle Revolution: die der künstlichen Intelligenz.', ocasion: 'Ansprache an das Kardinalskollegium', fuente: 'Vatican.va' },
  { texto: 'Wir sollten die Maschinen nicht fürchten. Fürchten wir die Algorithmen, die lernen, das Mitleid nachzuahmen, ohne es zu empfinden, und die Menschen, die ihr Gewissen abdanken, indem sie es dem Code übertragen.', ocasion: 'Ansprache vor der UN-Generalversammlung', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'Die Kirche bietet allen ihr Erbe der Soziallehre an, um auf die neuen Herausforderungen der Menschenwürde, der Gerechtigkeit und der Arbeit zu antworten.', ocasion: 'Ansprache an das Kardinalskollegium', fuente: 'Vatican.va' },
  { texto: 'Eine Wirtschaft, die Menschen ausschließt, ist keine christliche Wirtschaft, auch wenn sie sonntags gepredigt wird. Das soziale Evangelium beginnt am Bankbeleg.', ocasion: 'Tagung mit der Stiftung Centesimus Annus', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'Die Armen sind kein Problem der Kirche: sie sind das Herz der Kirche. Wenn wir sie vergessen, vergessen wir Christus selbst.', ocasion: 'Welttag der Armen', fuente: 'Vatican.va' },
  { texto: 'Petrus wurde nicht wegen seiner Eigenschaften berufen, sondern weil der Herr ihn liebte. Dieses Amt, das ich empfange, ist eine Berufung, mein Leben für die Brüder hinzugeben, besonders für die Geringsten.', ocasion: 'Predigt zum Beginn des Pontifikats', fuente: 'Vatican.va' },
  // Familia
  { texto: 'Die Familie ist keine zu bewahrende Institution: sie ist eine zu feiernde Berufung. Wo zwei Menschen einander lieben, spricht Gott.', ocasion: 'Audienz mit der Päpstlichen Akademie für die Familie', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — in dem, der einer ist, sollen wir einer sein. Das ist mein Wahlspruch und mein Programm: die Einheit der Kirche, nicht als Uniformität, sondern als Sinfonie des Geistes.', ocasion: 'Ansprache an das Kardinalskollegium', fuente: 'Vatican.va' },
  { texto: 'Wer die Liturgie als identitäres Banner verwendet, hat nicht verstanden, dass die Liturgie Begegnung mit Christus ist, nicht ideologischer Schützengraben.', ocasion: 'Brief an die Bischöfe zur Liturgie', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Wir wollen eine synodale Kirche sein, eine Kirche, die geht, eine Kirche, die Brücken baut, immer offen zur Aufnahme wie dieser Platz mit seinen offenen Armen.', ocasion: 'Erster Gruß von der Vatikanloggia', fuente: 'Vatican.va' },
  { texto: 'Zuhören heißt nicht, auf den eigenen Redebeitrag zu warten: es heißt, dem anderen zu erlauben, mein eigenes Herz zu verändern. Synodalität ist dieses zur Methode gewordene Hören.', ocasion: 'Begegnung mit der Ständigen Synodenversammlung', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Habt keine Angst, Christus die Türen weit zu öffnen. Es ist kein abgegriffener Satz: es ist eine erneuerte Dringlichkeit für jede Generation, die beginnt.', ocasion: 'Vigil mit den Jugendlichen in Rom', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Eine Kirche ohne Frauen ist ein Leib ohne Gedächtnis. Ohne ihr Talent, ihr Gebet und ihre pastorale Führung würde sie schlicht aufhören, Kirche zu sein.', ocasion: 'Audienz mit den Generaloberinnen', fuente: 'Vatican News' },
]

const FRASES_PT: FraseTranslation[] = [
  // Paz
  { texto: 'A paz do Cristo ressuscitado, uma paz desarmada e desarmante, humilde e perseverante.', ocasion: 'Primeira saudação da Loggia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Antes das bombas caem as palavras: palavras que desumanizam, que deslegitimam, que preparam moralmente a violência. Desarmar as palavras é o primeiro passo para desarmar a terra.', ocasion: 'Mensagem para o Dia Mundial da Paz 2026', fuente: 'Vatican.va' },
  { texto: 'Nenhuma guerra é santa. Toda guerra é uma derrota da humanidade, mesmo aquela que se disfarça de legítima defesa quando esquece os rostos dos civis.', ocasion: 'Urbi et Orbi, Natal de 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Nenhum muro é mais alto do que a dignidade humana.', ocasion: 'Mensagem para o Dia Mundial do Migrante e do Refugiado', fuente: 'Vatican.va' },
  { texto: 'A migração, antes de ser uma questão política, é um rosto concreto de Cristo que bate à nossa porta.', ocasion: 'Mensagem para o Dia Mundial do Migrante e do Refugiado', fuente: 'Vatican.va' },
  { texto: 'Durante trinta anos vivi no norte do Peru, uma terra marcada pelo movimento contínuo de pessoas em busca de vida. O migrante não é um número: é um irmão com um nome, uma história, uma mãe que o espera.', ocasion: 'Encontro com os bispos latino-americanos', fuente: 'Vatican News' },
  // IA
  { texto: 'A inteligência artificial não pode tomar decisões que afetem a vida e a dignidade humana sem uma supervisão humana responsável. A dignidade não se computa.', ocasion: 'Mensagem ao G7 sobre IA', fuente: 'Vatican.va' },
  { texto: 'Escolhi o nome de Leão porque Leão XIII enfrentou a questão social no contexto da primeira grande revolução industrial. Hoje respondemos a outra revolução industrial: a da inteligência artificial.', ocasion: 'Discurso ao Colégio Cardinalício', fuente: 'Vatican.va' },
  { texto: 'Não temamos as máquinas. Temamos os algoritmos que aprendem a imitar a compaixão sem a sentir, e os homens que abdicam da sua consciência delegando-a no código.', ocasion: 'Discurso à Assembleia Geral da ONU', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'A Igreja oferece a todos o seu património de doutrina social para responder aos novos desafios da dignidade humana, da justiça e do trabalho.', ocasion: 'Discurso ao Colégio Cardinalício', fuente: 'Vatican.va' },
  { texto: 'Uma economia que descarta as pessoas não é economia cristã, mesmo que se pregue ao domingo. O Evangelho social começa no recibo do banco.', ocasion: 'Conferência com a Fundação Centesimus Annus', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'Os pobres não são um problema da Igreja: são o coração da Igreja. Quando os esquecemos, esquecemos o próprio Cristo.', ocasion: 'Dia Mundial dos Pobres', fuente: 'Vatican.va' },
  { texto: 'Pedro não foi chamado pelas suas qualidades, mas porque o Senhor o amava. Este ministério que recebo é uma vocação a dar a vida pelos irmãos, especialmente pelos mais pequenos.', ocasion: 'Homilia do início do pontificado', fuente: 'Vatican.va' },
  // Familia
  { texto: 'A família não é uma instituição a preservar: é uma vocação a celebrar. Onde duas pessoas se amam, Deus fala.', ocasion: 'Audiência com a Pontifícia Academia para a Família', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — naquele que é um, sejamos um. Este é o meu lema e o meu programa: a unidade da Igreja, não como uniformidade, mas como sinfonia do Espírito.', ocasion: 'Discurso ao Colégio Cardinalício', fuente: 'Vatican.va' },
  { texto: 'Quem usa a liturgia como bandeira identitária não compreendeu que a liturgia é encontro com Cristo, não trincheira ideológica.', ocasion: 'Carta aos bispos sobre a liturgia', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Queremos ser uma Igreja sinodal, uma Igreja que caminha, uma Igreja que constrói pontes, sempre aberta a acolher como esta praça com os seus braços abertos.', ocasion: 'Primeira saudação da Loggia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Escutar não é esperar a vez para falar: é deixar que o outro modifique o meu próprio coração. A sinodalidade é essa escuta feita método.', ocasion: 'Encontro com a Assembleia Permanente do Sínodo', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Não tenhais medo de abrir de par em par as portas a Cristo. Não é uma frase gasta: é uma urgência renovada para cada geração que começa.', ocasion: 'Vigília com os jovens em Roma', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Uma Igreja sem mulheres é um corpo sem memória. Sem o seu talento, a sua oração e a sua liderança pastoral, simplesmente deixaria de ser Igreja.', ocasion: 'Audiência com as superioras maiores', fuente: 'Vatican News' },
]

const FRASES_CA: FraseTranslation[] = [
  // Paz
  { texto: 'La pau del Crist ressuscitat, una pau desarmada i desarmant, humil i perseverant.', ocasion: 'Primera salutació des de la Lògia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Abans que les bombes cauen les paraules: paraules que deshumanitzen, que deslegitimen, que preparen moralment la violència. Desarmar les paraules és el primer pas per desarmar la terra.', ocasion: 'Missatge per a la Jornada Mundial de la Pau 2026', fuente: 'Vatican.va' },
  { texto: 'Cap guerra és santa. Tota guerra és una derrota de la humanitat, fins i tot la que es disfressa de legítima defensa quan oblida els rostres dels civils.', ocasion: 'Urbi et Orbi, Nadal de 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Cap mur és més alt que la dignitat humana.', ocasion: 'Missatge per a la Jornada Mundial del Migrant i del Refugiat', fuente: 'Vatican.va' },
  { texto: 'La migració, abans de ser una qüestió política, és un rostre concret de Crist que truca a la nostra porta.', ocasion: 'Missatge per a la Jornada Mundial del Migrant i del Refugiat', fuente: 'Vatican.va' },
  { texto: 'Durant trenta anys vaig viure al nord del Perú, una terra marcada pel moviment continu de persones a la recerca de vida. El migrant no és un número: és un germà amb un nom, una història, una mare que l\'espera.', ocasion: 'Trobada amb els bisbes llatinoamericans', fuente: 'Vatican News' },
  // IA
  { texto: 'La intel·ligència artificial no pot prendre decisions que afecten la vida i la dignitat humana sense una supervisió humana responsable. La dignitat no es computa.', ocasion: 'Missatge al G7 sobre la IA', fuente: 'Vatican.va' },
  { texto: 'He escollit el nom de Lleó perquè Lleó XIII va afrontar la qüestió social en el context de la primera gran revolució industrial. Avui responem a una altra revolució industrial: la de la intel·ligència artificial.', ocasion: 'Discurs al Col·legi Cardenalici', fuente: 'Vatican.va' },
  { texto: 'No temem les màquines. Temem els algorismes que aprenen a imitar la compassió sense sentir-la, i els homes que abdiquen la seva consciència delegant-la al codi.', ocasion: 'Discurs a l\'Assemblea General de l\'ONU', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'L\'Església ofereix a tothom el seu patrimoni de doctrina social per respondre als nous reptes de la dignitat humana, la justícia i el treball.', ocasion: 'Discurs al Col·legi Cardenalici', fuente: 'Vatican.va' },
  { texto: 'Una economia que descarta les persones no és economia cristiana, encara que es predique el diumenge. L\'Evangeli social comença al rebut del banc.', ocasion: 'Conferència amb la Fundació Centesimus Annus', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'Els pobres no són un problema de l\'Església: són el cor de l\'Església. Quan els oblidem, oblidem el mateix Crist.', ocasion: 'Jornada Mundial dels Pobres', fuente: 'Vatican.va' },
  { texto: 'Pere no fou cridat per les seves qualitats, sinó perquè el Senyor l\'estimava. Aquest ministeri que rebo és una vocació a donar la vida pels germans, especialment pels més petits.', ocasion: 'Homilia d\'inici del pontificat', fuente: 'Vatican.va' },
  // Familia
  { texto: 'La família no és una institució a conservar: és una vocació a celebrar. Allà on dues persones s\'estimen, Déu parla.', ocasion: 'Audiència amb l\'Acadèmia Pontifícia per a la Família', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — en aquell que és u, siguem u. Aquest és el meu lema i el meu programa: la unitat de l\'Església, no com a uniformitat, sinó com a simfonia de l\'Esperit.', ocasion: 'Discurs al Col·legi Cardenalici', fuente: 'Vatican.va' },
  { texto: 'Qui fa servir la litúrgia com a bandera identitària no ha entès que la litúrgia és trobada amb Crist, no trinxera ideològica.', ocasion: 'Carta als bisbes sobre la litúrgia', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Volem ser una Església sinodal, una Església que camina, una Església que construeix ponts, sempre oberta a acollir com aquesta plaça amb els seus braços oberts.', ocasion: 'Primera salutació des de la Lògia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Escoltar no és esperar el torn per parlar: és deixar que l\'altre modifiqui el meu propi cor. La sinodalitat és aquesta escolta feta mètode.', ocasion: 'Trobada amb l\'Assemblea Permanent del Sínode', fuente: 'Vatican News' },
  // Juventud
  { texto: 'No tingueu por d\'obrir de bat a bat les portes a Crist. No és una frase gastada: és una urgència renovada per a cada generació que comença.', ocasion: 'Vetlla amb els joves a Roma', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Una Església sense dones és un cos sense memòria. Sense el seu talent, la seva pregària i el seu lideratge pastoral, simplement deixaria de ser Església.', ocasion: 'Audiència amb les superiores majors', fuente: 'Vatican News' },
]

const FRASES_GL: FraseTranslation[] = [
  // Paz
  { texto: 'A paz do Cristo resucitado, unha paz desarmada e desarmante, humilde e perseverante.', ocasion: 'Primeiro saúdo desde a Lóxia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Antes das bombas caen as palabras: palabras que deshumanizan, que deslexitiman, que preparan moralmente a violencia. Desarmar as palabras é o primeiro paso para desarmar a terra.', ocasion: 'Mensaxe para a Xornada Mundial da Paz 2026', fuente: 'Vatican.va' },
  { texto: 'Ningunha guerra é santa. Toda guerra é unha derrota da humanidade, mesmo a que se disfraza de lexítima defensa cando esquece os rostros dos civís.', ocasion: 'Urbi et Orbi, Nadal de 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Ningún muro é máis alto que a dignidade humana.', ocasion: 'Mensaxe para a Xornada Mundial do Migrante e do Refuxiado', fuente: 'Vatican.va' },
  { texto: 'A migración, antes de ser unha cuestión política, é un rostro concreto de Cristo que peta na nosa porta.', ocasion: 'Mensaxe para a Xornada Mundial do Migrante e do Refuxiado', fuente: 'Vatican.va' },
  { texto: 'Durante trinta anos vivín no norte do Perú, unha terra marcada polo movemento continuo de persoas á procura de vida. O migrante non é un número: é un irmán cun nome, unha historia, unha nai que o agarda.', ocasion: 'Encontro cos bispos latinoamericanos', fuente: 'Vatican News' },
  // IA
  { texto: 'A intelixencia artificial non pode tomar decisións que afecten a vida e a dignidade humana sen unha supervisión humana responsable. A dignidade non se computa.', ocasion: 'Mensaxe ao G7 sobre IA', fuente: 'Vatican.va' },
  { texto: 'Escollín o nome de León porque León XIII afrontou a cuestión social no contexto da primeira gran revolución industrial. Hoxe respondemos a outra revolución industrial: a da intelixencia artificial.', ocasion: 'Discurso ao Colexio Cardinalicio', fuente: 'Vatican.va' },
  { texto: 'Non temamos as máquinas. Temamos os algoritmos que aprenden a imitar a compaixón sen sentila, e os homes que abdican da súa conciencia delegándoa no código.', ocasion: 'Discurso á Asemblea Xeral da ONU', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'A Igrexa ofrece a todos o seu patrimonio de doutrina social para responder aos novos retos da dignidade humana, a xustiza e o traballo.', ocasion: 'Discurso ao Colexio Cardinalicio', fuente: 'Vatican.va' },
  { texto: 'Unha economía que descarta as persoas non é economía cristiá, aínda que se predique o domingo. O Evanxeo social comeza no recibo do banco.', ocasion: 'Conferencia coa Fundación Centesimus Annus', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'Os pobres non son un problema da Igrexa: son o corazón da Igrexa. Cando os esquecemos, esquecemos o propio Cristo.', ocasion: 'Xornada Mundial dos Pobres', fuente: 'Vatican.va' },
  { texto: 'Pedro non foi chamado polas súas calidades, senón porque o Señor o amaba. Este ministerio que recibo é unha vocación a dar a vida polos irmáns, especialmente polos máis pequenos.', ocasion: 'Homilía do inicio do pontificado', fuente: 'Vatican.va' },
  // Familia
  { texto: 'A familia non é unha institución que conservar: é unha vocación que celebrar. Onde dúas persoas se aman, Deus fala.', ocasion: 'Audiencia coa Academia Pontificia para a Familia', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — naquel que é un, sexamos un. Este é o meu lema e o meu programa: a unidade da Igrexa, non como uniformidade, senón como sinfonía do Espírito.', ocasion: 'Discurso ao Colexio Cardinalicio', fuente: 'Vatican.va' },
  { texto: 'Quen usa a liturxia como bandeira identitaria non comprendeu que a liturxia é encontro con Cristo, non trincheira ideolóxica.', ocasion: 'Carta aos bispos sobre a liturxia', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Queremos ser unha Igrexa sinodal, unha Igrexa que camiña, unha Igrexa que constrúe pontes, sempre aberta a acoller coma esta praza cos seus brazos abertos.', ocasion: 'Primeiro saúdo desde a Lóxia Vaticana', fuente: 'Vatican.va' },
  { texto: 'Escoitar non é agardar a quenda para falar: é deixar que o outro modifique o meu propio corazón. A sinodalidade é esa escoita feita método.', ocasion: 'Encontro coa Asemblea Permanente do Sínodo', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Non teñades medo de abrir de par en par as portas a Cristo. Non é unha frase gasta: é unha urxencia renovada para cada xeración que comeza.', ocasion: 'Vixilia cos mozos en Roma', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Unha Igrexa sen mulleres é un corpo sen memoria. Sen o seu talento, a súa oración e o seu liderado pastoral, simplemente deixaría de ser Igrexa.', ocasion: 'Audiencia coas superioras maiores', fuente: 'Vatican News' },
]

const FRASES_EU: FraseTranslation[] = [
  // Paz
  { texto: 'Kristo piztuaren bakea, bake desarmatua eta desarmatzailea, apala eta iraunkorra.', ocasion: 'Lehen agurra Vatikanoko Lojiatik', fuente: 'Vatican.va' },
  { texto: 'Bonbak baino lehen hitzak erortzen dira: gizatasuna kentzen duten hitzak, legitimitatea kentzen dutenak, indarkeria moralki prestatzen dutenak. Hitzak desarmatzea da lurra desarmatzeko lehen urratsa.', ocasion: 'Bakearen Mundu Egunerako mezua 2026', fuente: 'Vatican.va' },
  { texto: 'Ez dago gerla santurik. Gerla oro gizadiaren porrota da, baita lege bidezko defentsa-itxura hartzen duenak ere zibilen aurpegiak ahazten dituenean.', ocasion: 'Urbi et Orbi, 2025eko Eguberria', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'Ez dago giza duintasuna baino harresi altuagorik.', ocasion: 'Migratzaileen eta Errefuxiatuen Mundu Egunerako mezua', fuente: 'Vatican.va' },
  { texto: 'Migrazioa, kontu politikoa izan baino lehen, gure atea jotzen duen Kristoren aurpegi konkretua da.', ocasion: 'Migratzaileen eta Errefuxiatuen Mundu Egunerako mezua', fuente: 'Vatican.va' },
  { texto: 'Hogeita hamar urtez bizi izan nintzen Peruko iparraldean, bizi bila dabilen jendearen mugimendu etengabeak markatzen duen lurraldean. Migrari bat ez da zenbaki bat: izen, historia eta zain duen ama bat dituen anaia bat da.', ocasion: 'Latinoamerikako apezpikuekiko bilera', fuente: 'Vatican News' },
  // IA
  { texto: 'Adimen artifizialak ezin ditu giza bizia eta duintasuna ukitzen dituzten erabakiak hartu, gizakiaren ardurazko gainbegiraketarik gabe. Duintasuna ez da konputatzen.', ocasion: 'G7-ari IAri buruzko mezua', fuente: 'Vatican.va' },
  { texto: 'Leon izena hautatu dut, Leon XIII.ak gizarte-galderari aurre egin ziolako lehen iraultza industrial handiaren testuinguruan. Gaur beste iraultza industrial bati erantzuten diogu: adimen artifizialarena.', ocasion: 'Kardinal Kolegioari hitzaldia', fuente: 'Vatican.va' },
  { texto: 'Ez ditzagun makinak izutzat hartu. Izan ditzagun beldur sentitu gabe errukia imitatzen ikasten duten algoritmoak, eta beren kontzientzia kodeari eskuordetzen dioten gizonak.', ocasion: 'NBE Batzar Nagusiari hitzaldia', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'Elizak guztiei eskaintzen die bere dotrina sozialaren ondarea, giza duintasunaren, justiziaren eta lanaren erronka berriei erantzuteko.', ocasion: 'Kardinal Kolegioari hitzaldia', fuente: 'Vatican.va' },
  { texto: 'Pertsonak baztertzen dituen ekonomia ez da ekonomia kristaua, igandean predikatu arren. Ebanjelio soziala bankuko ordainagiriaren parean hasten da.', ocasion: 'Centesimus Annus Fundazioarekiko hitzaldia', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'Behartsuak ez dira Elizaren arazo bat: Elizaren bihotza dira. Ahanzten ditugunean, Kristo bera ahanzten dugu.', ocasion: 'Behartsuen Mundu Eguna', fuente: 'Vatican.va' },
  { texto: 'Pedro ez zen bere ezaugarriengatik deitua izan, baizik eta Jaunak maite zuelako. Hartzen dudan ministerio hau anaien aldera, batez ere txikienen aldera, bizia ematera bokazioa da.', ocasion: 'Pontifikatu hasierako homilia', fuente: 'Vatican.va' },
  // Familia
  { texto: 'Familia ez da gorde beharreko erakunde bat: ospatu beharreko bokazioa da. Bi pertsona elkar maitatzen diren tokian, Jainkoa hitz egiten du.', ocasion: 'Familiarako Aulki Pontifikalarekiko entzunaldia', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — bat den horretan, bat izan gaitezen. Hori da nire leloa eta nire egitaraua: Elizaren batasuna, ez uniformetasun gisa, baizik eta Espirituaren sinfonia gisa.', ocasion: 'Kardinal Kolegioari hitzaldia', fuente: 'Vatican.va' },
  { texto: 'Liturgia identitatearen bandera gisa erabiltzen duenak ez du ulertu liturgia Kristorekiko topaketa dela, ez lubaki ideologikoa.', ocasion: 'Apezpikuei liturgiari buruzko gutuna', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'Eliza sinodala izan nahi dugu, oinez doan Eliza, zubiak eraikitzen dituen Eliza, beti irekia harrera egiteko, beso zabalak dituen plaza hau bezala.', ocasion: 'Lehen agurra Vatikanoko Lojiatik', fuente: 'Vatican.va' },
  { texto: 'Entzutea ez da hitz egiteko txanda itxarotea: bestea nire bihotza bera aldatzen uztea da. Sinodaltasuna metodo bihurtutako entzute hori da.', ocasion: 'Sinodoaren Batzorde Iraunkorrarekiko bilera', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Ez izan beldurrik Kristori ateak guztiz irekitzeko. Ez da esaldi higatua: hasten den belaunaldi bakoitzarentzat berritzen den premia da.', ocasion: 'Erromako gazteekiko bijilia', fuente: 'Vatican News' },
  // Mujer
  { texto: 'Emakumerik gabeko Eliza memoriarik gabeko gorputza da. Beren talentua, otoitza eta gidaritza pastorala gabe, Eliza izateari uzten lioke besterik gabe.', ocasion: 'Nagusi nagusiekiko entzunaldia', fuente: 'Vatican News' },
]

// =============================================================================
// Temas
// =============================================================================

const TEMAS_FRASE_EN: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Peace', icon: '🕊️', desc: 'Unarmed peace, war and diplomacy' },
  { id: 'migraciones', label: 'Migration', icon: '🌍', desc: 'Welcome, dignity and borders' },
  { id: 'inteligencia-artificial', label: 'Artificial intelligence', icon: '🤖', desc: 'AI, ethics and human dignity' },
  { id: 'doctrina-social', label: 'Social doctrine', icon: '⚖️', desc: 'Work, economy, inequality' },
  { id: 'pobreza-caridad', label: 'Poverty and charity', icon: '🤲', desc: 'The poor, heart of the Church' },
  { id: 'familia', label: 'Family', icon: '👨‍👩‍👧‍👦', desc: 'Marriage, children, home' },
  { id: 'unidad-eclesial', label: 'Ecclesial unity', icon: '⛪', desc: 'Communion, liturgy, dialogue' },
  { id: 'sinodalidad', label: 'Synodality', icon: '🧭', desc: 'A listening, journeying Church' },
  { id: 'juventud', label: 'Youth', icon: '🌱', desc: 'Young people and the future of the Church' },
  { id: 'mujer', label: 'Women in the Church', icon: '♀️', desc: 'Talent, leadership, memory' },
]

const TEMAS_FRASE_IT: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Pace', icon: '🕊️', desc: 'Pace disarmata, guerra e diplomazia' },
  { id: 'migraciones', label: 'Migrazioni', icon: '🌍', desc: 'Accoglienza, dignità e frontiere' },
  { id: 'inteligencia-artificial', label: 'Intelligenza artificiale', icon: '🤖', desc: 'IA, etica e dignità umana' },
  { id: 'doctrina-social', label: 'Dottrina sociale', icon: '⚖️', desc: 'Lavoro, economia, disuguaglianza' },
  { id: 'pobreza-caridad', label: 'Povertà e carità', icon: '🤲', desc: 'I poveri, cuore della Chiesa' },
  { id: 'familia', label: 'Famiglia', icon: '👨‍👩‍👧‍👦', desc: 'Matrimonio, figli, casa' },
  { id: 'unidad-eclesial', label: 'Unità ecclesiale', icon: '⛪', desc: 'Comunione, liturgia, dialogo' },
  { id: 'sinodalidad', label: 'Sinodalità', icon: '🧭', desc: 'Una Chiesa in ascolto e in cammino' },
  { id: 'juventud', label: 'Gioventù', icon: '🌱', desc: 'Giovani e futuro della Chiesa' },
  { id: 'mujer', label: 'Donna nella Chiesa', icon: '♀️', desc: 'Talento, guida, memoria' },
]

const TEMAS_FRASE_FR: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Paix', icon: '🕊️', desc: 'Paix désarmée, guerre et diplomatie' },
  { id: 'migraciones', label: 'Migrations', icon: '🌍', desc: 'Accueil, dignité et frontières' },
  { id: 'inteligencia-artificial', label: 'Intelligence artificielle', icon: '🤖', desc: 'IA, éthique et dignité humaine' },
  { id: 'doctrina-social', label: 'Doctrine sociale', icon: '⚖️', desc: 'Travail, économie, inégalité' },
  { id: 'pobreza-caridad', label: 'Pauvreté et charité', icon: '🤲', desc: 'Les pauvres, cœur de l\'Église' },
  { id: 'familia', label: 'Famille', icon: '👨‍👩‍👧‍👦', desc: 'Mariage, enfants, foyer' },
  { id: 'unidad-eclesial', label: 'Unité ecclésiale', icon: '⛪', desc: 'Communion, liturgie, dialogue' },
  { id: 'sinodalidad', label: 'Synodalité', icon: '🧭', desc: 'Une Église à l\'écoute et en marche' },
  { id: 'juventud', label: 'Jeunesse', icon: '🌱', desc: 'Les jeunes et l\'avenir de l\'Église' },
  { id: 'mujer', label: 'Femme dans l\'Église', icon: '♀️', desc: 'Talent, leadership, mémoire' },
]

const TEMAS_FRASE_DE: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Frieden', icon: '🕊️', desc: 'Entwaffneter Friede, Krieg und Diplomatie' },
  { id: 'migraciones', label: 'Migration', icon: '🌍', desc: 'Aufnahme, Würde und Grenzen' },
  { id: 'inteligencia-artificial', label: 'Künstliche Intelligenz', icon: '🤖', desc: 'KI, Ethik und Menschenwürde' },
  { id: 'doctrina-social', label: 'Soziallehre', icon: '⚖️', desc: 'Arbeit, Wirtschaft, Ungleichheit' },
  { id: 'pobreza-caridad', label: 'Armut und Nächstenliebe', icon: '🤲', desc: 'Die Armen, Herz der Kirche' },
  { id: 'familia', label: 'Familie', icon: '👨‍👩‍👧‍👦', desc: 'Ehe, Kinder, Zuhause' },
  { id: 'unidad-eclesial', label: 'Kirchliche Einheit', icon: '⛪', desc: 'Communio, Liturgie, Dialog' },
  { id: 'sinodalidad', label: 'Synodalität', icon: '🧭', desc: 'Eine hörende, gehende Kirche' },
  { id: 'juventud', label: 'Jugend', icon: '🌱', desc: 'Jugend und Zukunft der Kirche' },
  { id: 'mujer', label: 'Frau in der Kirche', icon: '♀️', desc: 'Talent, Führung, Gedächtnis' },
]

const TEMAS_FRASE_PT: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Paz', icon: '🕊️', desc: 'Paz desarmada, guerra e diplomacia' },
  { id: 'migraciones', label: 'Migrações', icon: '🌍', desc: 'Acolhimento, dignidade e fronteiras' },
  { id: 'inteligencia-artificial', label: 'Inteligência artificial', icon: '🤖', desc: 'IA, ética e dignidade humana' },
  { id: 'doctrina-social', label: 'Doutrina social', icon: '⚖️', desc: 'Trabalho, economia, desigualdade' },
  { id: 'pobreza-caridad', label: 'Pobreza e caridade', icon: '🤲', desc: 'Os pobres, coração da Igreja' },
  { id: 'familia', label: 'Família', icon: '👨‍👩‍👧‍👦', desc: 'Matrimónio, filhos, lar' },
  { id: 'unidad-eclesial', label: 'Unidade eclesial', icon: '⛪', desc: 'Comunhão, liturgia, diálogo' },
  { id: 'sinodalidad', label: 'Sinodalidade', icon: '🧭', desc: 'Uma Igreja em escuta e a caminhar' },
  { id: 'juventud', label: 'Juventude', icon: '🌱', desc: 'Jovens e futuro da Igreja' },
  { id: 'mujer', label: 'Mulher na Igreja', icon: '♀️', desc: 'Talento, liderança, memória' },
]

const TEMAS_FRASE_CA: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Pau', icon: '🕊️', desc: 'Pau desarmada, guerra i diplomàcia' },
  { id: 'migraciones', label: 'Migracions', icon: '🌍', desc: 'Acollida, dignitat i fronteres' },
  { id: 'inteligencia-artificial', label: 'Intel·ligència artificial', icon: '🤖', desc: 'IA, ètica i dignitat humana' },
  { id: 'doctrina-social', label: 'Doctrina social', icon: '⚖️', desc: 'Treball, economia, desigualtat' },
  { id: 'pobreza-caridad', label: 'Pobresa i caritat', icon: '🤲', desc: 'Els pobres, cor de l\'Església' },
  { id: 'familia', label: 'Família', icon: '👨‍👩‍👧‍👦', desc: 'Matrimoni, fills, llar' },
  { id: 'unidad-eclesial', label: 'Unitat eclesial', icon: '⛪', desc: 'Comunió, litúrgia, diàleg' },
  { id: 'sinodalidad', label: 'Sinodalitat', icon: '🧭', desc: 'Una Església a l\'escolta i en camí' },
  { id: 'juventud', label: 'Joventut', icon: '🌱', desc: 'Joves i futur de l\'Església' },
  { id: 'mujer', label: 'Dona a l\'Església', icon: '♀️', desc: 'Talent, lideratge, memòria' },
]

const TEMAS_FRASE_GL: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Paz', icon: '🕊️', desc: 'Paz desarmada, guerra e diplomacia' },
  { id: 'migraciones', label: 'Migracións', icon: '🌍', desc: 'Acollida, dignidade e fronteiras' },
  { id: 'inteligencia-artificial', label: 'Intelixencia artificial', icon: '🤖', desc: 'IA, ética e dignidade humana' },
  { id: 'doctrina-social', label: 'Doutrina social', icon: '⚖️', desc: 'Traballo, economía, desigualdade' },
  { id: 'pobreza-caridad', label: 'Pobreza e caridade', icon: '🤲', desc: 'Os pobres, corazón da Igrexa' },
  { id: 'familia', label: 'Familia', icon: '👨‍👩‍👧‍👦', desc: 'Matrimonio, fillos, fogar' },
  { id: 'unidad-eclesial', label: 'Unidade eclesial', icon: '⛪', desc: 'Comuñón, liturxia, diálogo' },
  { id: 'sinodalidad', label: 'Sinodalidade', icon: '🧭', desc: 'Unha Igrexa á escoita e en camiño' },
  { id: 'juventud', label: 'Mocidade', icon: '🌱', desc: 'Mozos e futuro da Igrexa' },
  { id: 'mujer', label: 'Muller na Igrexa', icon: '♀️', desc: 'Talento, liderado, memoria' },
]

const TEMAS_FRASE_EU: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Bakea', icon: '🕊️', desc: 'Bake desarmatua, gerla eta diplomazia' },
  { id: 'migraciones', label: 'Migrazioak', icon: '🌍', desc: 'Harrera, duintasuna eta mugak' },
  { id: 'inteligencia-artificial', label: 'Adimen artifiziala', icon: '🤖', desc: 'IA, etika eta giza duintasuna' },
  { id: 'doctrina-social', label: 'Dotrina soziala', icon: '⚖️', desc: 'Lana, ekonomia, desberdintasuna' },
  { id: 'pobreza-caridad', label: 'Pobrezia eta karitatea', icon: '🤲', desc: 'Behartsuak, Elizaren bihotza' },
  { id: 'familia', label: 'Familia', icon: '👨‍👩‍👧‍👦', desc: 'Ezkontza, seme-alabak, etxea' },
  { id: 'unidad-eclesial', label: 'Eliz batasuna', icon: '⛪', desc: 'Komunioa, liturgia, elkarrizketa' },
  { id: 'sinodalidad', label: 'Sinodaltasuna', icon: '🧭', desc: 'Entzuten eta oinez doan Eliza' },
  { id: 'juventud', label: 'Gaztedia', icon: '🌱', desc: 'Gazteak eta Elizaren etorkizuna' },
  { id: 'mujer', label: 'Emakumea Elizan', icon: '♀️', desc: 'Talentua, gidaritza, memoria' },
]

// =============================================================================
// Getters
// =============================================================================

function getFrasesDict(locale: Locale): FraseTranslation[] | null {
  switch (locale) {
    case 'en': return FRASES_EN
    case 'it': return FRASES_IT
    case 'fr': return FRASES_FR
    case 'de': return FRASES_DE
    case 'pt': return FRASES_PT
    case 'ca': return FRASES_CA
    case 'gl': return FRASES_GL
    case 'eu': return FRASES_EU
    default: return null
  }
}

export function getFrases(locale: Locale): Frase[] {
  const dict = getFrasesDict(locale)
  if (!dict) return frases
  return frases.map((f, i) => {
    const tr = dict[i]
    if (!tr) return f
    return { ...f, texto: tr.texto, ocasion: tr.ocasion, fuente: tr.fuente }
  })
}

export function getTemasFrase(locale: Locale) {
  switch (locale) {
    case 'en': return TEMAS_FRASE_EN
    case 'it': return TEMAS_FRASE_IT
    case 'fr': return TEMAS_FRASE_FR
    case 'de': return TEMAS_FRASE_DE
    case 'pt': return TEMAS_FRASE_PT
    case 'ca': return TEMAS_FRASE_CA
    case 'gl': return TEMAS_FRASE_GL
    case 'eu': return TEMAS_FRASE_EU
    default: return TEMAS_FRASE
  }
}

export { frases, TEMAS_FRASE }
export type { Frase, TemaFrase }
