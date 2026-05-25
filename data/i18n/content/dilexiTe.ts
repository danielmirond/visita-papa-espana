/**
 * Traducción EN de data/dilexiTe.ts
 */

import type { Locale } from '@/data/i18n/types'
import {
  dilexiTeData,
  temasDilexiTe,
  citasClavesDilexiTe,
  faqDilexiTe,
  type TemaDilexiTe,
  type CitaDilexiTe,
  type FaqDilexiTe,
} from '@/data/dilexiTe'

const DILEXI_TE_DATA_EN = {
  ...dilexiTeData,
  subtitulo: 'Apostolic Exhortation on the love of God and charity to the poor',
  traduccionTitulo: '"I have loved you"',
  autor: 'Pope Leo XIV',
  lugarFirma: 'Vatican City',
  extensionEstimada: '72 pages',
  referenciaBiblica: 'Revelation 3:9',
  citaBiblicaCompleta: '"I have loved you" (Dilexi te) — Revelation 3:9. Words of the glorified Christ to the Church of Philadelphia, taken as a key to the divine love that precedes and sustains all human charity.',
  descripcionGeneral: '"Dilexi Te" is the first apostolic exhortation of Pope Leo XIV. Published on 11 February 2026 —feast of Our Lady of Lourdes and World Day of the Sick—, it takes up and extends Pope Francis\'s encyclical "Dilexit nos" (2024) on the heart of Jesus, but shifting the emphasis from the love received to the love returned: concrete charity to the poor as the natural response to the divine love that precedes us.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/en/apost_exhortations/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_IT = {
  ...dilexiTeData,
  subtitulo: 'Esortazione apostolica sull\'amore di Dio e sulla carità verso i poveri',
  traduccionTitulo: '"Ti ho amato"',
  autor: 'Papa Leone XIV',
  lugarFirma: 'Città del Vaticano',
  extensionEstimada: '72 pagine',
  referenciaBiblica: 'Apocalisse 3,9',
  citaBiblicaCompleta: '"Ti ho amato" (Dilexi te) — Apocalisse 3,9. Parole del Cristo glorificato alla Chiesa di Philadelphia, assunte come chiave dell\'amore divino che precede e sostiene ogni carità umana.',
  descripcionGeneral: '"Dilexi Te" è la prima esortazione apostolica di Papa Leone XIV. Pubblicata l\'11 febbraio 2026 —festa di Nostra Signora di Lourdes e Giornata mondiale dei malati—, riprende e sviluppa l\'enciclica "Dilexit nos" (2024) di Papa Francesco sul cuore di Gesù, spostando però l\'accento dall\'amore ricevuto all\'amore ricambiato: la carità concreta verso i poveri come risposta naturale all\'amore divino che ci precede.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/it/esortazioni_apostoliche/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_FR = {
  ...dilexiTeData,
  subtitulo: 'Exhortation apostolique sur l\'amour de Dieu et la charité envers les pauvres',
  traduccionTitulo: '"Je t\'ai aimé"',
  autor: 'Pape Léon XIV',
  lugarFirma: 'Cité du Vatican',
  extensionEstimada: '72 pages',
  referenciaBiblica: 'Apocalypse 3,9',
  citaBiblicaCompleta: '"Je t\'ai aimé" (Dilexi te) — Apocalypse 3,9. Paroles du Christ glorifié à l\'Église de Philadelphie, prises comme clé de l\'amour divin qui précède et soutient toute charité humaine.',
  descripcionGeneral: '"Dilexi Te" est la première exhortation apostolique du Pape Léon XIV. Publiée le 11 février 2026 —fête de Notre-Dame de Lourdes et Journée mondiale des malades—, elle reprend et prolonge l\'encyclique "Dilexit nos" (2024) du Pape François sur le cœur de Jésus, mais en déplaçant l\'accent de l\'amour reçu à l\'amour rendu : la charité concrète envers les pauvres comme réponse naturelle à l\'amour divin qui nous précède.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/fr/exhortations_apostoliques/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_DE = {
  ...dilexiTeData,
  subtitulo: 'Apostolisches Schreiben über die Liebe Gottes und die Barmherzigkeit gegenüber den Armen',
  traduccionTitulo: '"Ich habe dich geliebt"',
  autor: 'Papst Löwe XIV',
  lugarFirma: 'Vatikanstadt',
  extensionEstimada: '72 Seiten',
  referenciaBiblica: 'Offenbarung 3,9',
  citaBiblicaCompleta: '"Ich habe dich geliebt" (Dilexi te) — Offenbarung 3,9. Worte des verherrlichten Christus an die Gemeinde von Philadelphia, verstanden als Schlüssel zur göttlichen Liebe, die alle menschliche Barmherzigkeit vorausgeht und trägt.',
  descripcionGeneral: '"Dilexi Te" ist das erste apostolische Schreiben von Papst Löwe XIV. Veröffentlicht am 11. Februar 2026 —Fest Unserer Lieben Frau von Lourdes und Welttag der Kranken—, nimmt es die Enzyklika "Dilexit nos" (2024) von Papst Franziskus über das Herz Jesu auf und erweitert sie, verlagert aber den Schwerpunkt von der empfangenen Liebe zur erwiderten Liebe: konkrete Barmherzigkeit gegenüber den Armen als natürliche Antwort auf die göttliche Liebe, die uns vorausgeht.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/de/apostolische_schreiben/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_PT = {
  ...dilexiTeData,
  subtitulo: 'Exortação apostólica sobre o amor de Deus e a caridade para com os pobres',
  traduccionTitulo: '"Eu vos amei"',
  autor: 'Papa Leão XIV',
  lugarFirma: 'Cidade do Vaticano',
  extensionEstimada: '72 páginas',
  referenciaBiblica: 'Apocalipse 3,9',
  citaBiblicaCompleta: '"Eu vos amei" (Dilexi te) — Apocalipse 3,9. Palavras do Cristo glorificado à Igreja de Filadélfia, tomadas como chave do amor divino que precede e sustenta toda caridade humana.',
  descripcionGeneral: '"Dilexi Te" é a primeira exortação apostólica do Papa Leão XIV. Publicada em 11 de fevereiro de 2026 —festa de Nossa Senhora de Lourdes e Dia Mundial do Enfermo—, retoma e prolonga a encíclica "Dilexit nos" (2024) do Papa Francisco sobre o coração de Jesus, mas deslocando a ênfase do amor recebido para o amor retribuído: a caridade concreta para com os pobres como resposta natural ao amor divino que nos precede.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/pt/exortacoes_apostolicas/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_CA = {
  ...dilexiTeData,
  subtitulo: 'Exhortació apostòlica sobre l\'amor de Déu i la caritat envers els pobres',
  traduccionTitulo: '"T\'he estimat"',
  autor: 'Papa Lleó XIV',
  lugarFirma: 'Ciutat del Vaticà',
  extensionEstimada: '72 pàgines',
  referenciaBiblica: 'Apocalipsi 3,9',
  citaBiblicaCompleta: '"T\'he estimat" (Dilexi te) — Apocalipsi 3,9. Paraules de Crist gloriós a l\'Església de Filadèlfia, preses com a clau de l\'amor diví que precedeix i sosté tota caritat humana.',
  descripcionGeneral: '"Dilexi Te" és la primera exhortació apostòlica del Papa Lleó XIV. Publicada l\'11 de febrer de 2026 —festa de la Mare de Déu de Lourdes i Dia Mundial del Malalt—, represa i prorroga l\'encíclica "Dilexit nos" (2024) del Papa Francesc sobre el cor de Jesús, però desplaçant l\'èmfasi de l\'amor rebut a l\'amor retornat: la caritat concreta envers els pobres com a resposta natural a l\'amor diví que ens precedeix.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/ca/exhortacions_apostoliques/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_GL = {
  ...dilexiTeData,
  subtitulo: 'Exortación apostólica sobre o amor de Dios e a caridade cara aos pobres',
  traduccionTitulo: '"Che amei"',
  autor: 'Papa León XIV',
  lugarFirma: 'Cidade do Vaticano',
  extensionEstimada: '72 páxinas',
  referenciaBiblica: 'Apocalipse 3,9',
  citaBiblicaCompleta: '"Che amei" (Dilexi te) — Apocalipse 3,9. Palabras do Cristo glorificado á Igrexa de Filadelfia, tomadas como chave do amor divino que precede e sostén toda caridade humana.',
  descripcionGeneral: '"Dilexi Te" é a primeira exortación apostólica do Papa León XIV. Publicada o 11 de febreiro de 2026 —festa da Nosa Señora de Lourdes e Día Mundial do Enfermo—, retoma e prolonga a encíclica "Dilexit nos" (2024) do Papa Francisco sobre o corazón de Xesús, pero desprazando a énfase do amor recibido ao amor retribuído: a caridade concreta cara aos pobres como resposta natural ao amor divino que nos precede.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/gl/exortacións_apostolicas/documents/20260211-dilexi-te.html',
}

const DILEXI_TE_DATA_EU = {
  ...dilexiTeData,
  subtitulo: 'Aposiolaren gomitxoa Jainkoaren maiatasunaren eta pobreen zain dituzten karitatearen buruz',
  traduccionTitulo: '"Zu maitu nuekin"',
  autor: 'Papa Leon XIV',
  lugarFirma: 'Vatikano Hiria',
  extensionEstimada: '72 orrialde',
  referenciaBiblica: 'Bilduma 3,9',
  citaBiblicaCompleta: '"Zu maitu nuekin" (Dilexi te) — Bilduma 3,9. Kristoren glorifikaturiak Filadelfiko Elizeari zuzenduriko hitzak, giza karita osoa aurrera doan eta euskarri ematen dioten jainkoaren maitasunaren gakoak bezala hartua.',
  descripcionGeneral: '"Dilexi Te" Papa Leon XIVren lehen aposiolaren gomitxoa da. 2026ko otsailaren 11an argitaratua —Lurdesen Andraren ospakizuna eta Gaixoen Munduko Eguna—, Papa Franziskoren "Dilexit nos" (2024) entziklopediaren Jesuren bihotzari buruzko zakerrean berretsi eta luzatua, jasandako maiatasunaren azentuarekin jasandako maiatasunean deitzen dena: pobreen karita konkretua eta instituzionalarenaren aurka genean jaden maiatasun dibinak sorrarazten duen giza erantzun naturala.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/eu/apostolaren_gomitxoak/documents/20260211-dilexi-te.html',
}

const TEMAS_DILEXI_TE_EN: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'The love of God that precedes us', descripcion: 'The exhortation begins with divine initiative: the "Dilexi te" of the glorified Christ ("I have loved you") as the ontological precedent of every human response. We do not love in order to deserve love, but because we have already been loved.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Concrete charity to the poor', descripcion: 'Central core of the document (§ 25-78). The Pope describes "charity without spectacle": accompaniment, care, stable structures (Caritas, Manos Unidas, parish communities), but also denunciation of the structural causes of poverty. He quotes extensively from his missionary experience in Peru.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'A poor Church for the poor', descripcion: 'Takes up and deepens a central line of Francis: the Church must live what she preaches. He criticises clerical opulence, insensitive bureaucracy and pastoral distance. Announces concrete measures for the Roman dicasteries.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'New poverties of the 21st century', descripcion: 'Expands the concept of poverty beyond the material: forced migration, job insecurity, urban loneliness, digital addictions, discarding of the elderly and disabled, vulnerability to algorithms. Chapter especially cited in analyses.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Permanent conversion of the Church', descripcion: 'Closing of the exhortation: reform is not an episode but a way of being. Call to communities, parishes, movements and dioceses for a permanent self-review in a charitable, synodal and missionary key.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_IT: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'L\'amore di Dio che ci precede', descripcion: 'L\'esortazione inizia con l\'iniziativa divina: il "Dilexi te" del Cristo glorificato ("Ti ho amato") come precedente ontologico di ogni risposta umana. Non amiamo per meritare amore, ma perché già siamo stati amati.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Carità concreta verso i poveri', descripcion: 'Nucleo centrale del documento (§ 25-78). Il Papa descrive la "carità senza spettacolo": accompagnamento, cura, strutture stabili (Caritas, Manos Unidas, comunità parrocchiali), ma anche denuncia delle cause strutturali della povertà. Cita abbondantemente dalla sua esperienza missionaria in Perù.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Una Chiesa povera per i poveri', descripcion: 'Riprende e approfondisce una linea centrale di Francesco: la Chiesa deve vivere ciò che predica. Critica l\'opulenza clericale, la burocrazia insensibile e la distanza pastorale. Annuncia misure concrete per i dicasteri romani.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'Nuove povertà del XXI secolo', descripcion: 'Amplia il concetto di povertà oltre il materiale: migrazione forzata, precarietà lavorativa, solitudine urbana, dipendenze digitali, scarto degli anziani e dei disabili, vulnerabilità agli algoritmi. Capitolo particolarmente citato nelle analisi.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Conversione permanente della Chiesa', descripcion: 'Chiusura dell\'esortazione: la riforma non è un episodio ma un modo di essere. Appello a comunità, parrocchie, movimenti e diocesi per un\'autorevisione permanente in chiave caritativa, sinodale e missionaria.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_FR: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'L\'amour de Dieu qui nous précède', descripcion: 'L\'exhortation commence par l\'initiative divine : le "Dilexi te" du Christ glorifié ("Je t\'ai aimé") comme antécédent ontologique de toute réponse humaine. Nous n\'aimons pas pour mériter l\'amour, mais parce que nous avons déjà été aimés.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Charité concrète envers les pauvres', descripcion: 'Cœur central du document (§ 25-78). Le Pape décrit la "charité sans spectacle" : accompagnement, soin, structures stables (Caritas, Manos Unidas, communautés paroissiales), mais aussi dénonciation des causes structurelles de la pauvreté. Il cite abondamment de son expérience missionnaire au Pérou.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Une Église pauvre pour les pauvres', descripcion: 'Reprend et approfondit une ligne centrale de François : l\'Église doit vivre ce qu\'elle prêche. Il critique l\'opulence cléricale, la bureaucratie insensible et l\'éloignement pastoral. Annonce des mesures concrètes pour les dicastères romains.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'Les nouvelles pauvretés du XXIe siècle', descripcion: 'Élargit le concept de pauvreté au-delà du matériel : migration forcée, précarité professionnelle, solitude urbaine, dépendances numériques, mise au rebut des personnes âgées et handicapées, vulnérabilité aux algorithmes. Chapitre particulièrement cité dans les analyses.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Conversion permanente de l\'Église', descripcion: 'Conclusion de l\'exhortation : la réforme n\'est pas un épisode mais une manière d\'être. Appel aux communautés, paroisses, mouvements et diocèses pour une auto-révision permanente dans une perspective charitable, synodale et missionnaire.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_DE: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'Die Liebe Gottes, die uns vorausgeht', descripcion: 'Das Schreiben beginnt mit der göttlichen Initiative: das "Dilexi te" des verherrlichten Christus ("Ich habe dich geliebt") als ontologische Voraussetzung jeder menschlichen Antwort. Wir lieben nicht, um Liebe zu verdienen, sondern weil wir bereits geliebt worden sind.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Konkrete Barmherzigkeit gegenüber den Armen', descripcion: 'Kernstück des Dokuments (§ 25-78). Der Papst beschreibt "Barmherzigkeit ohne Spektakel": Begleitung, Pflege, stabile Strukturen (Caritas, Manos Unidas, Pfarrgemeinden), aber auch Anprangerung der strukturellen Ursachen der Armut. Er zitiert ausgiebig aus seiner Missionserfahrung in Peru.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Eine arme Kirche für die Armen', descripcion: 'Greift eine zentrale Linie von Franziskus auf und vertieft sie: Die Kirche muss das leben, was sie predigt. Er kritisiert klerikale Pracht, gefühllose Bürokratie und pastorale Distanz. Kündigt konkrete Maßnahmen für die römischen Dikasterien an.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'Neue Armut des 21. Jahrhunderts', descripcion: 'Erweitert den Armutsbegriff über das Materielle hinaus: erzwungene Migration, Arbeitsplatzunsicherheit, städtische Einsamkeit, digitale Abhängigkeiten, Ausgrenzung von Älteren und Behinderten, Anfälligkeit für Algorithmen. Kapitel, das in Analysen besonders häufig zitiert wird.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Permanente Umkehr der Kirche', descripcion: 'Abschluss des Schreibens: Reform ist kein Ereignis, sondern eine Seinsweise. Aufruf an Gemeinden, Pfarreien, Bewegungen und Diözesen zu einer permanenten Selbstüberprüfung in karitativem, synodalem und missionarischem Geist.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_PT: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'O amor de Deus que nos precede', descripcion: 'A exortação começa com a iniciativa divina: o "Dilexi te" do Cristo glorificado ("Eu vos amei") como precedente ontológico de toda resposta humana. Não amamos para merecer amor, mas porque já fomos amados.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Caridade concreta para com os pobres', descripcion: 'Núcleo central do documento (§ 25-78). O Papa descreve a "caridade sem espetáculo": acompanhamento, cuidado, estruturas estáveis (Caritas, Manos Unidas, comunidades paroquiais), mas também denúncia das causas estruturais da pobreza. Cita abundantemente de sua experiência missionária no Peru.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Uma Igreja pobre para os pobres', descripcion: 'Retoma e aprofunda uma linha central de Francisco: a Igreja deve viver o que ela prega. Critica a opulência clerical, a burocracia insensível e o distanciamento pastoral. Anuncia medidas concretas para os dicastérios romanos.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'Novas pobrezas do século XXI', descripcion: 'Amplia o conceito de pobreza além do material: migração forçada, insegurança no trabalho, solidão urbana, dependências digitais, descarte de idosos e deficientes, vulnerabilidade aos algoritmos. Capítulo particularmente citado nas análises.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Conversão permanente da Igreja', descripcion: 'Encerramento da exortação: a reforma não é um episódio, mas um modo de ser. Apelo às comunidades, paróquias, movimentos e dioceses por uma autorrevisão permanente em chave caritativa, sinodal e missionária.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_CA: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'L\'amor de Déu que ens precedeix', descripcion: 'L\'exhortació comença amb la iniciativa divina: el "Dilexi te" de Crist gloriós ("T\'he estimat") com a precedent ontològic de tota resposta humana. No estimem per mereixer amor, sinó perquè ja hem estat estimats.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Caritat concreta envers els pobres', descripcion: 'Nucli central del document (§ 25-78). El Papa descriu la "caritat sense espectacle": acompanyament, cura, estructures estables (Caritas, Manos Unidas, comunitats parroquials), però també denúncia de les causes estructurals de la pobresa. Cita abundantment de la seva experiència missionera al Perú.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Una Església pobra per als pobres', descripcion: 'Represa i aprofundeix una línia central de Francesc: l\'Església ha de viure allò que predica. Critica l\'opulència clerical, la burocràcia insensible i la distància pastoral. Anuncia mesures concretes per als dicasters romans.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'Noves pobreses del segle XXI', descripcion: 'Amplia el concepte de pobresa més enllà del material: migració forçada, precarietat laboral, soledat urbana, dependències digitals, descart dels ancians i discapacitats, vulnerabilitat als algoritmes. Capítol particularment citat en els análisis.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Conversió permanent de l\'Església', descripcion: 'Tancament de l\'exhortació: la reforma no és un episodi sinó un mode de ser. Crida a comunitats, parròquies, moviments i diòcesis per a una autorrevisió permanent en clau caritativa, sinodal i missionera.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_GL: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'O amor de Dios que nos precede', descripcion: 'A exortación comeza coa iniciativa divina: o "Dilexi te" do Cristo glorificado ("Che amei") como precedente ontolóxico de toda resposta humana. Non amamos para merecer amor, senón porque xa fumos amados.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Caridade concreta cara aos pobres', descripcion: 'Núcleo central do documento (§ 25-78). O Papa describe a "caridade sen espectáculo": acompañamento, coidado, estruturas estables (Caritas, Manos Unidas, comunidades parroquiais), pero tamén denuncia das causas estruturais da pobreza. Cita abundantemente da súa experiencia misioneira no Perú.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Unha Igrexa pobre para os pobres', descripcion: 'Retoma e aprofunda unha liña central de Francisco: a Igrexa debe vivir o que predica. Critica a opulencia clerical, a burocracia insensible e a distancia pastoral. Anuncia medidas concretas para os dicastros romanos.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'Novas pobrezas do século XXI', descripcion: 'Ampla o concepto de pobreza alén do material: migración forzada, precaxiedade laboral, soidade urbana, dependencias dixitais, descarte de maiores e discapacitados, vulnerabilidade aos algoritmos. Capítulo particularmente citado nas análises.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Conversión permanente da Igrexa', descripcion: 'Peche da exortación: a reforma non é un episodio senón un modo de ser. Chamada a comunidades, parroquias, movementos e dioceses por unha autorrevisión permanente en clave caritativa, sinodal e misioneira.', parrafosReferencia: '§ 131-147' },
]

const TEMAS_DILEXI_TE_EU: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'Gure aurrera doan Jainkoaren maitasuna', descripcion: 'Gomitxoa jainkoaren aurkariaren ekintzan hasita. Kristoren glorifikatuaren "Dilexi te" ("Zu maitu nuekin") giza erantzun osoen aurrean ontologia preza bezala hartua. Ez dugu maitasuna irabaziko, baizaik jada maitu gaituzte.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Pobreen karita konkretua', descripcion: 'Dokumentuen nukleo nagusia (§ 25-78). Papa-k "ospakizunik gabe karita" deskribatuak: elkarketa, algarrak, egiturak egonkorrak (Caritas, Manos Unidas, parroia komunitateak), baina pobreza arazo ez dauden denutzian. Bere misioari Peru-etan nola egin duen espertentzia askotan aipatu.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'Pobreentzako Eleiza pobrea', descripcion: 'Franziskoren lerro nagusi bat batzea eta sakontzea: Eleiza bera irakaska ari dena bizia behar du. Kleroen opulentziaren eta burokratziaren eta aste-arte den distantziaren kritika egiten du. Erromako dicasteriaren-zin konkretoak aipatu.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'XXI. mendeko pobreza berriak', descripcion: 'Pobreziaren kontzeptua materialaren gain hedatzen du: zigorra eginiko migrazioreak, lanean ez dauden arazoak, hiriko solitude, sare digitalen menpekotasunak, zaharren eta ezgaituen bazterraketa, algoritmoen kasuetan zaurgarritasunaren sentimenduak. Kapitulu honen oso aiputua analisi askotakoan.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Eliezaren bigar-bigarrenez konbertsoa', descripcion: 'Gomitxoaren bukapenak: erreforma ez da epizodio bat izena izanda izanda neurri baten baitala. Komunitate, parroki, mugimenduen eta diocesien-zin ez muga ez den autoberrikusketa zin berrikusketa.', parrafosReferencia: '§ 131-147' },
]

const CITAS_DILEXI_TE_EN: CitaDilexiTe[] = [
  { texto: 'God does not love us because we are good: we are capable of goodness because God has loved us first. This "first" is the secret of Christianity and the root of all authentic charity.', parrafo: '§ 3', contexto: 'Introduction · The love that precedes' },
  { texto: 'Charity without justice is decorative alms. Justice without charity is soulless bureaucracy. Together they are the Gospel turned into structure.', parrafo: '§ 32', contexto: 'Concrete charity · Relationship with social justice' },
  { texto: 'A Church that looks after its accounts and neglects its poor has lost the memory of its Lord. Better humble churches full of life than palaces empty of compassion.', parrafo: '§ 91', contexto: 'Poor Church · Institutional poverty' },
  { texto: 'New poverties do not always have a visible face. There is poverty in the elderly connected to everything and greeted by no one; in the adolescent flooded with content and emptied of meaning; in the worker replaceable by an algorithm.', parrafo: '§ 118', contexto: 'New poverties · Digital loneliness' },
  { texto: 'To convert is not to change a custom: it is to change centre. While we are the centre, the poor will be periphery; when Christ is the centre, the poor will be of the household.', parrafo: '§ 144', contexto: 'Conversion · Closing' },
]

const CITAS_DILEXI_TE_IT: CitaDilexiTe[] = [
  { texto: 'Dio non ci ama perché siamo buoni: siamo capaci di bontà perché Dio ci ha amato per primo. Questo "primo" è il segreto del cristianesimo e la radice di ogni carità autentica.', parrafo: '§ 3', contexto: 'Introduzione · L\'amore che precede' },
  { texto: 'La carità senza giustizia è l\'elemosina decorativa. La giustizia senza carità è burocrazia senz\'anima. Insieme sono il Vangelo trasformato in struttura.', parrafo: '§ 32', contexto: 'Carità concreta · Rapporto con la giustizia sociale' },
  { texto: 'Una Chiesa che si prende cura dei suoi conti e trascura i suoi poveri ha perso la memoria del suo Signore. Meglio chiese umili piene di vita che palazzi vuoti di compassione.', parrafo: '§ 91', contexto: 'Chiesa povera · Povertà istituzionale' },
  { texto: 'Le nuove povertà non sempre hanno un volto visibile. C\'è povertà nell\'anziano connesso a tutto e salutato da nessuno; nell\'adolescente inondato di contenuti e vuotato di significato; nel lavoratore sostituibile da un algoritmo.', parrafo: '§ 118', contexto: 'Nuove povertà · Solitudine digitale' },
  { texto: 'Convertirsi non è cambiare un\'abitudine: è cambiare centro. Mentre siamo noi il centro, i poveri saranno periferia; quando Cristo è il centro, i poveri saranno della famiglia.', parrafo: '§ 144', contexto: 'Conversione · Chiusura' },
]

const CITAS_DILEXI_TE_FR: CitaDilexiTe[] = [
  { texto: 'Dieu ne nous aime pas parce que nous sommes bons : nous sommes capables de bonté parce que Dieu nous a aimés les premiers. Ce "premier" est le secret du christianisme et la racine de toute charité authentique.', parrafo: '§ 3', contexto: 'Introduction · L\'amour qui précède' },
  { texto: 'La charité sans justice est l\'aumône décorée. La justice sans charité est bureaucratie sans âme. Ensemble, c\'est l\'Évangile transformé en structure.', parrafo: '§ 32', contexto: 'Charité concrète · Lien avec la justice sociale' },
  { texto: 'Une Église qui veille à ses comptes et néglige ses pauvres a perdu la mémoire de son Seigneur. Mieux vaut de petites églises humbles pleines de vie que des palais vides de compassion.', parrafo: '§ 91', contexto: 'Église pauvre · Pauvreté institutionnelle' },
  { texto: 'Les nouvelles pauvretés n\'ont pas toujours un visage visible. Il y a de la pauvreté chez la personne âgée connectée à tout et saluée par personne ; chez l\'adolescent inondé de contenu et vidé de sens ; chez le travailleur remplaçable par un algorithme.', parrafo: '§ 118', contexto: 'Nouvelles pauvretés · Solitude numérique' },
  { texto: 'Se convertir, ce n\'est pas changer une habitude : c\'est changer de centre. Tant que nous sommes le centre, les pauvres seront la périphérie ; quand Christ est le centre, les pauvres seront de la maison.', parrafo: '§ 144', contexto: 'Conversion · Conclusion' },
]

const CITAS_DILEXI_TE_DE: CitaDilexiTe[] = [
  { texto: 'Gott liebt uns nicht, weil wir gut sind: Wir sind zur Güte fähig, weil Gott uns zuerst geliebt hat. Dieses "Zuerst" ist das Geheimnis des Christentums und die Wurzel aller echten Barmherzigkeit.', parrafo: '§ 3', contexto: 'Einleitung · Die Liebe, die vorausgeht' },
  { texto: 'Barmherzigkeit ohne Gerechtigkeit ist verzierte Mildtätigkeit. Gerechtigkeit ohne Barmherzigkeit ist Bürokratie ohne Seele. Zusammen sind sie das Evangelium in Struktur verwandelt.', parrafo: '§ 32', contexto: 'Konkrete Barmherzigkeit · Verhältnis zu sozialer Gerechtigkeit' },
  { texto: 'Eine Kirche, die auf ihre Konten achtet und ihre Armen vernachlässigt, hat das Gedächtnis ihres Herrn verloren. Besser bescheidene Kirchen voller Leben als Paläste leer von Mitgefühl.', parrafo: '§ 91', contexto: 'Arme Kirche · Institutionelle Armut' },
  { texto: 'Neue Armut hat nicht immer ein sichtbares Gesicht. Es gibt Armut bei älteren Menschen, die mit allem verbunden sind und von niemandem begrüßt werden; bei Jugendlichen, überfluten von Inhalten und geleert von Sinn; bei Arbeitern, die durch einen Algorithmus ersetzbar sind.', parrafo: '§ 118', contexto: 'Neue Armut · Digitale Einsamkeit' },
  { texto: 'Sich bekehren ist nicht, eine Gewohnheit zu ändern: es ist, die Mitte zu wechseln. Solange wir die Mitte sind, sind die Armen die Peripherie; wenn Christus die Mitte ist, sind die Armen vom Haus.', parrafo: '§ 144', contexto: 'Umkehr · Abschluss' },
]

const CITAS_DILEXI_TE_PT: CitaDilexiTe[] = [
  { texto: 'Deus não nos ama porque somos bons: somos capazes de bondade porque Deus nos amou primeiro. Este "primeiro" é o segredo do cristianismo e a raiz de toda caridade autêntica.', parrafo: '§ 3', contexto: 'Introdução · O amor que precede' },
  { texto: 'Caridade sem justiça é esmola decorativa. Justiça sem caridade é burocracia sem alma. Juntas, são o Evangelho transformado em estrutura.', parrafo: '§ 32', contexto: 'Caridade concreta · Relação com a justiça social' },
  { texto: 'Uma Igreja que cuida de suas contas e negligencia seus pobres perdeu a memória de seu Senhor. Melhor humildes igrejas plenas de vida do que palácios vazios de compaixão.', parrafo: '§ 91', contexto: 'Igreja pobre · Pobreza institucional' },
  { texto: 'Novas pobrezas nem sempre têm rosto visível. Há pobreza no idoso conectado a tudo e saudado por ninguém; no adolescente inundado de conteúdo e esvaziado de sentido; no trabalhador substituível por um algoritmo.', parrafo: '§ 118', contexto: 'Novas pobrezas · Solidão digital' },
  { texto: 'Converter-se não é mudar um hábito: é mudar de centro. Enquanto nós somos o centro, os pobres serão periferia; quando Cristo é o centro, os pobres serão da família.', parrafo: '§ 144', contexto: 'Conversão · Encerramento' },
]

const CITAS_DILEXI_TE_CA: CitaDilexiTe[] = [
  { texto: 'Déu no ens estima perquè siguem bons: som capaços de bondat perquè Déu ens ha estimat primer. Aquest "primer" és el secret del cristianisme i l\'arrel de tota caritat autèntica.', parrafo: '§ 3', contexto: 'Introducció · L\'amor que precedeix' },
  { texto: 'Caritat sense justícia és almoina decorada. Justícia sense caritat és burocràcia sense ànima. Juntes són l\'Evangeli transformat en estructura.', parrafo: '§ 32', contexto: 'Caritat concreta · Relació amb la justícia social' },
  { texto: 'Una Església que es cuida dels seus comptes i descuida els seus pobres ha perdut la memòria del seu Senyor. Millor humils esglésies plenes de vida que palaus buits de compassió.', parrafo: '§ 91', contexto: 'Església pobra · Pobreza institucional' },
  { texto: 'Les noves pobrezas no sempre tenen cara visible. Hi ha pobresa en l\'ancià connectat a tot i saludat per ningú; en l\'adolescent inundat de contingut i buidat de significat; en el treballador substituïble per un algoritme.', parrafo: '§ 118', contexto: 'Noves pobrezas · Soledat digital' },
  { texto: 'Convertir-se no és canviar un costum: és canviar de centre. Mentre nosaltres som el centre, els pobres seran perifèria; quan Crist és el centre, els pobres seran de la llar.', parrafo: '§ 144', contexto: 'Conversió · Tancament' },
]

const CITAS_DILEXI_TE_GL: CitaDilexiTe[] = [
  { texto: 'Dios non nos ama porque sexamos bos: somos capaces de bondade porque Dios nos amou primeiro. Este "primeiro" é o segredo do cristianismo e a raíz de toda caridade auténtica.', parrafo: '§ 3', contexto: 'Introdución · O amor que precede' },
  { texto: 'Caridade sen xustiza é esmola decorada. Xustiza sen caridade é burocracia sen alma. Xuntas son o Evangello transformado en estrutura.', parrafo: '§ 32', contexto: 'Caridade concreta · Relación coa xustiza social' },
  { texto: 'Unha Igrexa que se cuida das súas contas e descuida os seus pobres perdeu a memoria do seu Señor. Mellor humildes igrexas cheas de vida que palacios baleiros de compaixón.', parrafo: '§ 91', contexto: 'Igrexa pobre · Pobreza institucional' },
  { texto: 'As novas pobrezas non sempre teñen cara visible. Hai pobreza no maior conectado a todo e saludado por ninguén; no adolescente inundado de contido e baleirado de sentido; no traballador substituible por un algoritmo.', parrafo: '§ 118', contexto: 'Novas pobrezas · Soidade dixital' },
  { texto: 'Converterse non é cambiar un costume: é cambiar de centro. Mentres nosoutros somos o centro, os pobres serán periferia; cando Cristo é o centro, os pobres serán da familia.', parrafo: '§ 144', contexto: 'Conversión · Peche' },
]

const CITAS_DILEXI_TE_EU: CitaDilexiTe[] = [
  { texto: 'Jainkoaren ez du gu maitzen gu onaki gaizela, guk onari egikari gaitun Jainko-maila baitaka berengatik maitu du gure aurretik. "Aurretik" hori kristianismoaren sekretu eta karita autentikoren erroa da.', parrafo: '§ 3', contexto: 'Sarrera · Maiatasuna aurrera doana' },
  { texto: 'Karita beko gabea kanpotik aleko esmolak dira. Zentzukogabeak beko karita ez dago aleko burokritziak da. Biek Euanjelioa nola egitura bilakatu dute.', parrafo: '§ 32', contexto: 'Karita konkretua · Zintzo justiziaren lotura' },
  { texto: 'Eleiza bera kontutan duena eta bere pobeak ailegabeak ez dituena bere Jaun ohiaren memoria galtuta dago. Hobea da bizitako beteraren jauntagoak umiltasunagaz dituzten iglesiak zabaltasunik gabeko pailazoekin baino.', parrafo: '§ 91', contexto: 'Eleiza pobrea · Instituzionalen pobreza' },
  { texto: 'Pobreza berriak ez du beti aurpegi agiririk. Daude maila handiak konekta dituzte denen eta ez dituzte inork saludo; habia askotan betetakoak dituzte eta zentzutu gabeak; lanenduak algoritmoaren-zin ordezka daitezkeenak ere sartzen dituzte.', parrafo: '§ 118', contexto: 'Pobreza berriak · Soitate dixitala' },
  { texto: 'Bigar-bigarrenez konbertitzea ez da oatura bat besterik egitea: gune bat besterik aukeratzea. Gu garen bitartean gune gara, pobeak periferia izango dira; Kristoa gune bada, pobeak etxeko pertsonak izango direla.', parrafo: '§ 144', contexto: 'Konbertsoa · Itxiera' },
]

const FAQ_DILEXI_TE_EN: FaqDilexiTe[] = [
  { pregunta: 'What is "Dilexi Te" and what does the name mean?', respuesta: '"Dilexi Te" is the first apostolic exhortation of Pope Leo XIV, published on 11 February 2026. The title means "I have loved you" and comes from Revelation 3:9, where the glorified Christ addresses the Church of Philadelphia. The Pope chose this phrase to emphasise that God\'s love precedes every human response.' },
  { pregunta: 'When was "Dilexi Te" published?', respuesta: 'On 11 February 2026, feast of Our Lady of Lourdes and World Day of the Sick. The choice of date is deliberate: it links the exhortation to the care of the sick and closeness to those who suffer.' },
  { pregunta: 'What is the apostolic exhortation "Dilexi Te" about?', respuesta: 'It is about God\'s love and charity to the poor. It is an extension of Pope Francis\'s encyclical "Dilexit nos" (2024) on the heart of Jesus, but focusing on the concrete dimension of the love returned: structural charity and new forms of poverty in the 21st century.' },
  { pregunta: 'What relationship does "Dilexi Te" have with Francis\'s "Dilexit nos"?', respuesta: 'It is explicitly a continuation. Where "Dilexit nos" (2024) contemplates Christ\'s love ("He loved us"), "Dilexi Te" shifts the focus to the Church\'s response: how to translate that love into concrete charity, welcoming structures and institutional conversion.' },
  { pregunta: 'What are the main topics of "Dilexi Te"?', respuesta: 'Five blocks: (1) the divine love that precedes every human response; (2) concrete charity to the poor; (3) a poor Church for the poor; (4) the new poverties of the 21st century —migration, digital loneliness, discarding of the elderly—; (5) permanent conversion as a way of being for the Church.' },
  { pregunta: 'Where can I read the full text of "Dilexi Te"?', respuesta: 'The full official text is published on Vatican.va in the nine official languages. You can consult it directly at: vatican.va/content/leo-xiv/en/apost_exhortations. It is also distributed in print by the Libreria Editrice Vaticana (LEV).' },
]

const FAQ_DILEXI_TE_IT: FaqDilexiTe[] = [
  { pregunta: 'Cos\'è "Dilexi Te" e cosa significa il nome?', respuesta: '"Dilexi Te" è la prima esortazione apostolica di Papa Leone XIV, pubblicata l\'11 febbraio 2026. Il titolo significa "Ti ho amato" e viene da Apocalisse 3,9, dove il Cristo glorificato si rivolge alla Chiesa di Philadelphia. Il Papa ha scelto questa frase per sottolineare che l\'amore di Dio precede ogni risposta umana.' },
  { pregunta: 'Quando è stata pubblicata "Dilexi Te"?', respuesta: 'L\'11 febbraio 2026, festa di Nostra Signora di Lourdes e Giornata mondiale dei malati. La scelta della data è deliberata: collega l\'esortazione alla cura dei malati e alla vicinanza a coloro che soffrono.' },
  { pregunta: 'Di che cosa parla l\'esortazione apostolica "Dilexi Te"?', respuesta: 'Parla dell\'amore di Dio e della carità verso i poveri. È un\'estensione dell\'enciclica "Dilexit nos" (2024) di Papa Francesco sul cuore di Gesù, ma focalizzata sulla dimensione concreta dell\'amore ricambiato: la carità strutturale e le nuove forme di povertà nel XXI secolo.' },
  { pregunta: 'Qual è il rapporto tra "Dilexi Te" e "Dilexit nos" di Francesco?', respuesta: 'È esplicitamente una continuazione. Dove "Dilexit nos" (2024) contempla l\'amore di Cristo ("Ci ha amati"), "Dilexi Te" sposta il fuoco sulla risposta della Chiesa: come tradurre quell\'amore in carità concreta, strutture accoglienti e conversione istituzionale.' },
  { pregunta: 'Quali sono i temi principali di "Dilexi Te"?', respuesta: 'Cinque blocchi: (1) l\'amore divino che precede ogni risposta umana; (2) carità concreta verso i poveri; (3) una Chiesa povera per i poveri; (4) le nuove povertà del XXI secolo —migrazione, solitudine digitale, scarto degli anziani—; (5) conversione permanente come modo di essere della Chiesa.' },
  { pregunta: 'Dove posso leggere il testo completo di "Dilexi Te"?', respuesta: 'Il testo ufficiale completo è pubblicato su Vatican.va in nove lingue ufficiali. Puoi consultarlo direttamente a: vatican.va/content/leo-xiv/it/esortazioni_apostoliche. È anche distribuito in formato cartaceo dalla Libreria Editrice Vaticana (LEV).' },
]

const FAQ_DILEXI_TE_FR: FaqDilexiTe[] = [
  { pregunta: 'Qu\'est-ce que "Dilexi Te" et que signifie ce nom ?', respuesta: '"Dilexi Te" est la première exhortation apostolique du Pape Léon XIV, publiée le 11 février 2026. Le titre signifie "Je t\'ai aimé" et provient d\'Apocalypse 3,9, où le Christ glorifié s\'adresse à l\'Église de Philadelphie. Le Pape a choisi cette phrase pour souligner que l\'amour de Dieu précède toute réponse humaine.' },
  { pregunta: 'Quand "Dilexi Te" a-t-elle été publiée ?', respuesta: 'Le 11 février 2026, fête de Notre-Dame de Lourdes et Journée mondiale des malades. Le choix de cette date est délibéré : il relie l\'exhortation au soin des malades et à la proximité de ceux qui souffrent.' },
  { pregunta: 'De quoi parle l\'exhortation apostolique "Dilexi Te" ?', respuesta: 'Elle traite de l\'amour de Dieu et de la charité envers les pauvres. C\'est une extension de l\'encyclique "Dilexit nos" (2024) du Pape François sur le cœur de Jésus, mais en se concentrant sur la dimension concrète de l\'amour rendu : la charité structurelle et les nouvelles formes de pauvreté au XXIe siècle.' },
  { pregunta: 'Quel est le rapport entre "Dilexi Te" et "Dilexit nos" de François ?', respuesta: 'C\'est explicitement une continuation. Où "Dilexit nos" (2024) contemple l\'amour du Christ ("Il nous a aimés"), "Dilexi Te" déplace le focus sur la réponse de l\'Église : comment traduire cet amour en charité concrète, en structures accueillantes et en conversion institutionnelle.' },
  { pregunta: 'Quels sont les principaux thèmes de "Dilexi Te" ?', respuesta: 'Cinq blocs : (1) l\'amour divin qui précède toute réponse humaine ; (2) charité concrète envers les pauvres ; (3) une Église pauvre pour les pauvres ; (4) les nouvelles pauvretés du XXIe siècle —migration, solitude numérique, mise au rebut des personnes âgées— ; (5) conversion permanente comme mode d\'être de l\'Église.' },
  { pregunta: 'Où puis-je lire le texte complet de "Dilexi Te" ?', respuesta: 'Le texte officiel complet est publié sur Vatican.va en neuf langues officielles. Vous pouvez le consulter directement à : vatican.va/content/leo-xiv/fr/exhortations_apostoliques. Il est également distribué en version imprimée par la Librairie Éditrice Vaticane (LEV).' },
]

const FAQ_DILEXI_TE_DE: FaqDilexiTe[] = [
  { pregunta: 'Was ist "Dilexi Te" und was bedeutet der Name?', respuesta: '"Dilexi Te" ist das erste apostolische Schreiben von Papst Löwe XIV, veröffentlicht am 11. Februar 2026. Der Titel bedeutet "Ich habe dich geliebt" und stammt aus Offenbarung 3,9, wo der verherrlichte Christus sich an die Gemeinde von Philadelphia wendet. Der Papst wählte diesen Satz, um zu unterstreichen, dass Gottes Liebe jeder menschlichen Antwort vorausgeht.' },
  { pregunta: 'Wann wurde "Dilexi Te" veröffentlicht?', respuesta: 'Am 11. Februar 2026, Fest Unserer Lieben Frau von Lourdes und Welttag der Kranken. Die Wahl des Datums ist beabsichtigt: Sie verbindet das Schreiben mit der Sorge um Kranke und der Nähe zu denen, die leiden.' },
  { pregunta: 'Wovon spricht das apostolische Schreiben "Dilexi Te"?', respuesta: 'Von Gottes Liebe und Barmherzigkeit gegenüber den Armen. Es ist eine Fortsetzung der Enzyklika "Dilexit nos" (2024) von Papst Franziskus über das Herz Jesu, konzentriert sich aber auf die konkrete Dimension der erwiderten Liebe: strukturelle Barmherzigkeit und neue Formen der Armut im 21. Jahrhundert.' },
  { pregunta: 'Wie verhält sich "Dilexi Te" zu Franziskus\' "Dilexit nos"?', respuesta: 'Es ist ausdrücklich eine Fortsetzung. Während "Dilexit nos" (2024) die Liebe Christi betrachtet ("Er hat uns geliebt"), verlagert "Dilexi Te" den Fokus auf die Antwort der Kirche: wie kann man diese Liebe in konkrete Barmherzigkeit, offene Strukturen und institutionelle Umkehr übersetzen.' },
  { pregunta: 'Welche sind die Hauptthemen von "Dilexi Te"?', respuesta: 'Fünf Blöcke: (1) die göttliche Liebe, die jeder menschlichen Antwort vorausgeht; (2) konkrete Barmherzigkeit gegenüber den Armen; (3) eine arme Kirche für die Armen; (4) die neue Armut des 21. Jahrhunderts —Migration, digitale Einsamkeit, Ausgrenzung von Älteren—; (5) permanente Umkehr als Seinsweise der Kirche.' },
  { pregunta: 'Wo kann ich den vollständigen Text von "Dilexi Te" lesen?', respuesta: 'Der vollständige offizielle Text wird auf Vatican.va in neun offiziellen Sprachen veröffentlicht. Sie können ihn direkt unter folgender Adresse einsehen: vatican.va/content/leo-xiv/de/apostolische_schreiben. Er wird auch in gedruckter Form von der Verlag der Apostolischen Nuntiatur (LEV) vertrieben.' },
]

const FAQ_DILEXI_TE_PT: FaqDilexiTe[] = [
  { pregunta: 'O que é "Dilexi Te" e o que significa o nome?', respuesta: '"Dilexi Te" é a primeira exortação apostólica do Papa Leão XIV, publicada em 11 de fevereiro de 2026. O título significa "Eu vos amei" e vem de Apocalipse 3,9, onde o Cristo glorificado se dirige à Igreja de Filadélfia. O Papa escolheu esta frase para enfatizar que o amor de Deus precede toda resposta humana.' },
  { pregunta: 'Quando foi "Dilexi Te" publicada?', respuesta: 'Em 11 de fevereiro de 2026, festa de Nossa Senhora de Lourdes e Dia Mundial do Enfermo. A escolha da data é deliberada: vincula a exortação ao cuidado dos enfermos e à proximidade com aqueles que sofrem.' },
  { pregunta: 'O que trata a exortação apostólica "Dilexi Te"?', respuesta: 'Trata do amor de Deus e da caridade para com os pobres. É uma extensão da encíclica "Dilexit nos" (2024) do Papa Francisco sobre o coração de Jesus, mas focando a dimensão concreta do amor retribuído: a caridade estrutural e as novas formas de pobreza no século XXI.' },
  { pregunta: 'Qual é a relação entre "Dilexi Te" e "Dilexit nos" de Francisco?', respuesta: 'É explicitamente uma continuação. Onde "Dilexit nos" (2024) contempla o amor de Cristo ("Ele nos amou"), "Dilexi Te" desloca o foco para a resposta da Igreja: como traduzir esse amor em caridade concreta, estruturas acolhedoras e conversão institucional.' },
  { pregunta: 'Quais são os temas principais de "Dilexi Te"?', respuesta: 'Cinco blocos: (1) o amor divino que precede toda resposta humana; (2) caridade concreta para com os pobres; (3) uma Igreja pobre para os pobres; (4) as novas pobrezas do século XXI —migração, solidão digital, descarte de idosos—; (5) conversão permanente como modo de ser da Igreja.' },
  { pregunta: 'Onde posso ler o texto completo de "Dilexi Te"?', respuesta: 'O texto oficial completo é publicado em Vatican.va em nove idiomas oficiais. Você pode consultá-lo diretamente em: vatican.va/content/leo-xiv/pt/exortacoes_apostolicas. Também é distribuído em formato impresso pela Libreria Editrice Vaticana (LEV).' },
]

const FAQ_DILEXI_TE_CA: FaqDilexiTe[] = [
  { pregunta: 'Què és "Dilexi Te" i què significa el nom?', respuesta: '"Dilexi Te" és la primera exhortació apostòlica del Papa Lleó XIV, publicada l\'11 de febrer de 2026. El títol significa "T\'he estimat" i prové de l\'Apocalipsi 3,9, on Crist gloriós s\'adreça a l\'Església de Filadèlfia. El Papa va triar aquesta frase per subratllar que l\'amor de Déu precedeix tota resposta humana.' },
  { pregunta: 'Quan va ser publicada "Dilexi Te"?', respuesta: 'L\'11 de febrer de 2026, festa de la Mare de Déu de Lourdes i Dia Mundial del Malalt. L\'elecció de la data és deliberada: vincula l\'exhortació a la cura dels malalts i la proximitat a aquells que pateixen.' },
  { pregunta: 'Sobre què tracta l\'exhortació apostòlica "Dilexi Te"?', respuesta: 'Tracta de l\'amor de Déu i la caritat envers els pobres. És una extensió de l\'encíclica "Dilexit nos" (2024) del Papa Francesc sobre el cor de Jesús, però enfocant la dimensió concreta de l\'amor retornat: la caritat estructural i les noves formes de pobresa en el segle XXI.' },
  { pregunta: 'Quina és la relació entre "Dilexi Te" i "Dilexit nos" de Francesc?', respuesta: 'És explícitament una continuació. On "Dilexit nos" (2024) contempla l\'amor de Crist ("Ens ha estimat"), "Dilexi Te" desplaça el focus a la resposta de l\'Església: com traduir aquest amor en caritat concreta, estructures acollidores i conversió institucional.' },
  { pregunta: 'Quins són els principals temes de "Dilexi Te"?', respuesta: 'Cinc blocs: (1) l\'amor diví que precedeix tota resposta humana; (2) caritat concreta envers els pobres; (3) una Església pobra per als pobres; (4) les noves pobreses del segle XXI —migració, soledat digital, descart dels ancians—; (5) conversió permanent com a mode de ser de l\'Església.' },
  { pregunta: 'On puc llegir el text complet de "Dilexi Te"?', respuesta: 'El text oficial complet es publica a Vatican.va en nou idiomes oficials. Podeu consultar-lo directament a: vatican.va/content/leo-xiv/ca/exhortacions_apostoliques. També es distribueix en format imprès per la Libreria Editrice Vaticana (LEV).' },
]

const FAQ_DILEXI_TE_GL: FaqDilexiTe[] = [
  { pregunta: 'Que é "Dilexi Te" e que significa o nome?', respuesta: '"Dilexi Te" é a primeira exortación apostólica do Papa León XIV, publicada o 11 de febreiro de 2026. O título significa "Che amei" e vén do Apocalipse 3,9, onde Cristo glorificado se dirixe á Igrexa de Filadelfia. O Papa escolleuo esta frase para subliñar que o amor de Dios precede toda resposta humana.' },
  { pregunta: 'Cando foi publicada "Dilexi Te"?', respuesta: 'O 11 de febreiro de 2026, festa da Nosa Señora de Lourdes e Día Mundial do Enfermo. A elección da data é deliberada: vincula a exortación á atención dos enfermos e á proximidade con aqueles que sofren.' },
  { pregunta: 'De que trata a exortación apostólica "Dilexi Te"?', respuesta: 'Trata do amor de Dios e da caridade cara aos pobres. É unha extensión da encíclica "Dilexit nos" (2024) do Papa Francisco sobre o corazón de Xesús, pero focalizando a dimensión concreta do amor retribuído: a caridade estrutural e as novas formas de pobreza no século XXI.' },
  { pregunta: 'Cal é a relación entre "Dilexi Te" e "Dilexit nos" de Francisco?', respuesta: 'É explicitamente unha continuación. Onde "Dilexit nos" (2024) contempla o amor de Cristo ("Nolos amou"), "Dilexi Te" desprazao o foco á resposta da Igrexa: como traducir ese amor en caridade concreta, estruturas acolledoras e conversión institucional.' },
  { pregunta: 'Cales son os principais temas de "Dilexi Te"?', respuesta: 'Cinco bloques: (1) o amor divino que precede toda resposta humana; (2) caridade concreta cara aos pobres; (3) unha Igrexa pobre para os pobres; (4) as novas pobrezas do século XXI —migración, soidade dixital, descarte de maiores—; (5) conversión permanente como modo de ser da Igrexa.' },
  { pregunta: 'Onde podo ler o texto completo de "Dilexi Te"?', respuesta: 'O texto oficial completo publícase en Vatican.va en nove idiomas oficiais. Pode consultalo directamente en: vatican.va/content/leo-xiv/gl/exortacións_apostolicas. Tamén se distribúe en formato impreso pola Libreria Editrice Vaticana (LEV).' },
]

const FAQ_DILEXI_TE_EU: FaqDilexiTe[] = [
  { pregunta: 'Nola da "Dilexi Te" eta nola dator bere izena?', respuesta: '"Dilexi Te" Papa Leon XIVren lehen aposiolaren gomitxoa da, 2026ko otsailaren 11an argitaratua. Izenaren esanahia "Zu maitu nuekin" da eta Bilduma 3,9-tik datortza, non Kristoren glorifikatua Filadelfiko Elizeari zuzentzen dena dagoela. Papa barutzea aukeratu du Jainkoaren maitasunaren giza erantzun osoen aurrera doasela behartze.' },
  { pregunta: 'Noiz argitaratu zen "Dilexi Te"?', respuesta: '2026ko otsailaren 11an, Lurdesen Andraren ospakizuna eta Gaixoen Munduko Eguna. Data aukeratzea beleakoan: gomitxoa gaixoen zainari eta nagusiei doakite lotura.' },
  { pregunta: '"Dilexi Te" aposiolaren gomitxoak nola buruz dihoa?', respuesta: 'Jainkoaren maiatasunaren eta pobrentzako karitatearen buruzko. Papa Franziskoren "Dilexit nos" (2024) entziklopediaren luzapena da Jesuren bihotzari buruzko, baina maitasunarenaren bigar-bigarrenez dimentsio konkretuari erreparatzen dena: egiturazko karita eta XXI. mendeko pobreziaren era berriak.' },
  { pregunta: 'Zein da "Dilexi Te" eta "Dilexit nos" Frantziskoaren artean erlazionatzea?', respuesta: 'Esplizituki jarraipena da. "Dilexit nos" (2024) Kristoren maiatasuna kontempla ("Gu maitu nigunekin"), "Dilexi Te" Elizearen erantzunan zentratu: bera maiatasun hori nola karita konkretuean, jasotzezko egituretan eta instituzionala bigar-bigarrenez konbertsioan aldatu.' },
  { pregunta: '"Dilexi Te"-ren nagusi gaien zein dira?', respuesta: 'Bost bloke: (1) giza erantzun osoen aurrera doan jainkoaren maiatasuna; (2) pobrentzako karita konkretua; (3) pobreentzako Eleiza pobrea; (4) XXI. mendeko pobrezia berriak —migrazioreak, netzaren-zin solitude, zaharren bazterraketa—; (5) Elizearen bigar-bigarrenez konbertsioa.' },
  { pregunta: 'Non irakur daiteke "Dilexi Te"-ren testuaren guztia?', respuesta: 'Testuaren ofizialaren guztia Vatican.va-n nola lau hizkuntzotan argitaratua. Zuzenean kontsultatu daiteke: vatican.va/content/leo-xiv/eu/apostolaren_gomitxoak. Baita ere inprimatua bidezen ematen den Libreria Editrice Vaticana (LEV)-k.' },
]

export function getDilexiTeData(locale: Locale) {
  switch (locale) {
    case 'en': return DILEXI_TE_DATA_EN
    case 'it': return DILEXI_TE_DATA_IT
    case 'fr': return DILEXI_TE_DATA_FR
    case 'de': return DILEXI_TE_DATA_DE
    case 'pt': return DILEXI_TE_DATA_PT
    case 'ca': return DILEXI_TE_DATA_CA
    case 'gl': return DILEXI_TE_DATA_GL
    case 'eu': return DILEXI_TE_DATA_EU
    default: return dilexiTeData
  }
}

export function getTemasDilexiTe(locale: Locale): TemaDilexiTe[] {
  switch (locale) {
    case 'en': return TEMAS_DILEXI_TE_EN
    case 'it': return TEMAS_DILEXI_TE_IT
    case 'fr': return TEMAS_DILEXI_TE_FR
    case 'de': return TEMAS_DILEXI_TE_DE
    case 'pt': return TEMAS_DILEXI_TE_PT
    case 'ca': return TEMAS_DILEXI_TE_CA
    case 'gl': return TEMAS_DILEXI_TE_GL
    case 'eu': return TEMAS_DILEXI_TE_EU
    default: return temasDilexiTe
  }
}

export function getCitasClavesDilexiTe(locale: Locale): CitaDilexiTe[] {
  switch (locale) {
    case 'en': return CITAS_DILEXI_TE_EN
    case 'it': return CITAS_DILEXI_TE_IT
    case 'fr': return CITAS_DILEXI_TE_FR
    case 'de': return CITAS_DILEXI_TE_DE
    case 'pt': return CITAS_DILEXI_TE_PT
    case 'ca': return CITAS_DILEXI_TE_CA
    case 'gl': return CITAS_DILEXI_TE_GL
    case 'eu': return CITAS_DILEXI_TE_EU
    default: return citasClavesDilexiTe
  }
}

export function getFaqDilexiTe(locale: Locale): FaqDilexiTe[] {
  switch (locale) {
    case 'en': return FAQ_DILEXI_TE_EN
    case 'it': return FAQ_DILEXI_TE_IT
    case 'fr': return FAQ_DILEXI_TE_FR
    case 'de': return FAQ_DILEXI_TE_DE
    case 'pt': return FAQ_DILEXI_TE_PT
    case 'ca': return FAQ_DILEXI_TE_CA
    case 'gl': return FAQ_DILEXI_TE_GL
    case 'eu': return FAQ_DILEXI_TE_EU
    default: return faqDilexiTe
  }
}

export type { TemaDilexiTe, CitaDilexiTe, FaqDilexiTe }
