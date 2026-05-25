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

const TIMELINE_DE: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Geburt in Chicago', description: 'Geburt am 14. September in Chicago (Illinois) in einer katholischen Familie mit französischen, italienischen und spanischen Wurzeln. Er ist der Jüngste von drei Brüdern.', location: 'Chicago, Vereinigte Staaten' },
  '1977-math': { title: 'Abschluss in Mathematik', description: 'Studienabschluss in Mathematik an der Villanova University (Pennsylvania), einer augustinischen Einrichtung.', location: 'Villanova, Vereinigte Staaten' },
  '1977-osa': { title: 'Eintritt in den Augustinerorden', description: 'Tritt ins Noviziat der Augustiner in Saint Louis (Missouri) ein. Studiert Theologie an der Catholic Theological Union in Chicago.', location: 'Saint Louis, Vereinigte Staaten' },
  '1982-06': { title: 'Priesterweihe', description: 'Priesterweihe am 19. Juni 1982 in Rom. Legt die feierliche Profess im Orden ab.', location: 'Rom, Italien' },
  '1985': { title: 'Missionar in Peru', description: 'Beginnt seine lange Missionsphase in Nordperu, in den Regionen Chulucanas und später Trujillo. Ländliche Seelsorge, Ausbildung von Seminaristen, Bauerngenossenschaften.', location: 'Chulucanas, Peru' },
  '1987': { title: 'Doktorat in Kirchenrecht', description: 'Verteidigt seine Doktorarbeit an der Päpstlichen Universität des Heiligen Thomas von Aquin (Angelicum) in Rom über die Leitung des lokalen Augustiner-Priors.', location: 'Rom, Italien' },
  '1999': { title: 'Provinzial der Augustiner in Chicago', description: 'Kehrt in die Vereinigten Staaten zurück, um die Augustiner-Provinz des Mittleren Westens zu leiten.', location: 'Chicago, Vereinigte Staaten' },
  '2001': { title: 'Generaloberer des Augustinerordens', description: 'Zum weltweit führenden Leiter des Augustinerordens gewählt. Wiedergewählt 2007. Zwölf Jahre in der Zentralregierung des Ordens.', location: 'Rom, Italien' },
  '2014': { title: 'Bischof von Chiclayo', description: 'Papst Franziskus ernennt ihn zum Apostolischen Administrator der Diözese Chiclayo (Peru). Erwirbt 2015 die peruanische Staatsangehörigkeit. 2015 zum Titelbischof ernannt.', location: 'Chiclayo, Peru' },
  '2020': { title: 'Pandemie und soziales Engagement', description: 'Während COVID-19 organisiert er in Chiclayo Hilfsnetzwerke, Lebensmittel und Gesundheitswesen. Stärkt sein seelsorgerisches Profil in der Nähe der Ärmsten.', location: 'Chiclayo, Peru' },
  '2023-01': { title: 'Präfekt des Dikasteriums für Bischöfe', description: 'Papst Franziskus ruft ihn nach Rom als Präfekt des Dikasteriums für Bischöfe — eine der einflussreichsten Positionen des Vatikans, verantwortlich für die Vorschlagsliste neuer Bischöfe weltweit.', location: 'Vatikanstadt' },
  '2023-09': { title: 'Zum Kardinal ernannt', description: 'Im Konsistorium vom 30. September 2023 wird er zum Kardinal mit dem Titel Sankt Monika der Augustiner ernannt.', location: 'Vatikanstadt' },
  '2025-05-elected': { title: 'Zum Papst gewählt', description: 'Nach dem Tod von Papst Franziskus am 21. April 2025 wählt ihn das Konklave am 8. Mai zum Nachfolger Petri. Er nimmt den Namen Leo XIV. an. Erster in den USA geborener Papst mit peruanischer Staatsangehörigkeit.', location: 'Vatikanstadt' },
  '2025-05-inicio': { title: 'Beginn des Pontifikats', description: 'Messe zur Amtseinführung des Pontifikats am 18. Mai 2025 auf dem Petersplatz. Erste Enzykliken erwartet zu Soziallehre, Frieden und integraler Ökologie.', location: 'Vatikanstadt' },
  '2026-06': { title: 'Apostolische Reise nach Spanien', description: 'Erste große internationale apostolische Reise nach Spanien: Madrid, Barcelona, Gran Canaria und Teneriffa vom 6. bis 12. Juni 2026.', location: 'Spanien' },
}

const TIMELINE_PT: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Nascimento em Chicago', description: 'Nasce em 14 de setembro em Chicago (Illinois), em família católica com raízes francesas, italianas e espanholas. É o mais jovem de três irmãos.', location: 'Chicago, Estados Unidos' },
  '1977-math': { title: 'Licenciatura em Matemática', description: 'Licencia-se em Matemática pela Universidade Villanova (Pensilvânia), instituição agostiniana.', location: 'Villanova, Estados Unidos' },
  '1977-osa': { title: 'Entra na Ordem de Santo Agostinho', description: 'Entra no noviciado agostiniano em Saint Louis (Missouri). Estuda teologia na Catholic Theological Union de Chicago.', location: 'Saint Louis, Estados Unidos' },
  '1982-06': { title: 'Ordenação sacerdotal', description: 'Ordenado sacerdote em 19 de junho de 1982 em Roma. Faz profissão solene na Ordem.', location: 'Roma, Itália' },
  '1985': { title: 'Missionário no Peru', description: 'Inicia sua longa fase missionária no norte do Peru, nas regiões de Chulucanas e depois Trujillo. Pastoral rural, formação de seminaristas, cooperativas camponesas.', location: 'Chulucanas, Peru' },
  '1987': { title: 'Doutorado em Direito Canônico', description: 'Defende sua tese doutoral na Pontifícia Universidade Santo Tomás de Aquino (Angelicum) em Roma, sobre o governo do prior local agostiniano.', location: 'Roma, Itália' },
  '1999': { title: 'Prior provincial dos agostinianos em Chicago', description: 'Volta aos Estados Unidos para dirigir a província agostiniana do Meio-Oeste.', location: 'Chicago, Estados Unidos' },
  '2001': { title: 'Prior Geral da Ordem de Santo Agostinho', description: 'Eleito líder mundial da Ordem de Santo Agostinho. Reeleito em 2007. Doze anos no governo central da ordem.', location: 'Roma, Itália' },
  '2014': { title: 'Bispo de Chiclayo', description: 'Papa Francisco o nomeia administrador apostólico da diocese de Chiclayo (Peru). Adquire nacionalidade peruana em 2015. Em 2015 é nomeado bispo titular.', location: 'Chiclayo, Peru' },
  '2020': { title: 'Pandemia e compromisso social', description: 'Durante COVID-19 organiza redes de ajuda, alimentos e saúde em Chiclayo. Fortalece seu perfil pastoral próximo aos mais pobres.', location: 'Chiclayo, Peru' },
  '2023-01': { title: 'Prefeito do Dicastério dos Bispos', description: 'Papa Francisco o chama a Roma como prefeito do Dicastério dos Bispos — um dos cargos mais influentes do Vaticano, responsável por propor novos bispos em todo o mundo.', location: 'Cidade do Vaticano' },
  '2023-09': { title: 'Criado cardeal', description: 'No consistório de 30 de setembro de 2023 é criado cardeal com o título de Santa Mônica dos Agostinianos.', location: 'Cidade do Vaticano' },
  '2025-05-elected': { title: 'Eleito Papa', description: 'Após a morte do Papa Francisco em 21 de abril de 2025, o conclave o elege Sucessor de Pedro em 8 de maio. Assume o nome de Leão XIV. Primeiro Papa nascido nos Estados Unidos com nacionalidade peruana.', location: 'Cidade do Vaticano' },
  '2025-05-inicio': { title: 'Início do pontificado', description: 'Missa de início do pontificado em 18 de maio de 2025 na Praça de São Pedro. Primeiras encíclicas esperadas sobre doutrina social, paz e ecologia integral.', location: 'Cidade do Vaticano' },
  '2026-06': { title: 'Viagem apostólica à Espanha', description: 'Primeira grande viagem apostólica internacional à Espanha: Madrid, Barcelona, Gran Canaria e Tenerife de 6 a 12 de junho de 2026.', location: 'Espanha' },
}

const TIMELINE_CA: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Naixement a Chicago', description: 'Neix el 14 de setembre a Chicago (Illinois), en una família catòlica amb arrels franceses, italianes i espanyoles. És el més jove de tres germans.', location: 'Chicago, Estats Units' },
  '1977-math': { title: 'Llicenciatura en Matemàtiques', description: 'Es llicencia en Matemàtiques per la Universitat Villanova (Pennsilvània), institució agostiniana.', location: 'Villanova, Estats Units' },
  '1977-osa': { title: 'Entra a l\'Ordre de Sant Agustí', description: 'Entra al noviciat agostinià a Saint Louis (Missouri). Estudia teologia a la Catholic Theological Union de Chicago.', location: 'Saint Louis, Estats Units' },
  '1982-06': { title: 'Ordenació sacerdotal', description: 'Ordenat sacerdot el 19 de juny de 1982 a Roma. Fa la professió solemne a l\'Ordre.', location: 'Roma, Itàlia' },
  '1985': { title: 'Missioner al Perú', description: 'Inicia la seva llarga fase missioner al nord del Perú, a les regions de Chulucanas i després Trujillo. Pastoral rural, formació de seminaristes, cooperatives camperoles.', location: 'Chulucanas, Perú' },
  '1987': { title: 'Doctorat en Dret Canònic', description: 'Defensa la seva tesi doctoral a la Pontifícia Universitat de Sant Tomàs d\'Aquino (Angelicum) a Roma, sobre el govern del prior local agostinià.', location: 'Roma, Itàlia' },
  '1999': { title: 'Prior provincial dels agostinians a Chicago', description: 'Torna als Estats Units per dirigir la província agostiniana del Midwest.', location: 'Chicago, Estats Units' },
  '2001': { title: 'Prior General de l\'Ordre de Sant Agustí', description: 'Triat el líder mundial de l\'Ordre de Sant Agustí. Reellit el 2007. Dotze anys al govern central de l\'ordre.', location: 'Roma, Itàlia' },
  '2014': { title: 'Bisbe de Chiclayo', description: 'El Papa Francesc el nomena administrador apostòlic de la diòcesi de Chiclayo (Perú). Adquireix nacionalitat peruana el 2015. El 2015 és nomenat bisbe titular.', location: 'Chiclayo, Perú' },
  '2020': { title: 'Pandèmia i compromís social', description: 'Durant COVID-19 organitza xarxes d\'ajuda, aliments i sanitat a Chiclayo. Reforça el seu perfil pastoral proper als més pobres.', location: 'Chiclayo, Perú' },
  '2023-01': { title: 'Prefecte del Dicasterio dels Bisbes', description: 'El Papa Francesc el crida a Roma com a prefecte del Dicasterio dels Bisbes — un dels càrrecs més influents del Vaticà, responsable de proposar nous bisbes a tot el món.', location: 'Ciutat del Vaticà' },
  '2023-09': { title: 'Creat cardenal', description: 'En el consistori del 30 de setembre de 2023 és creat cardenal amb el títol de Santa Mònica dels Agostinians.', location: 'Ciutat del Vaticà' },
  '2025-05-elected': { title: 'Triat Papa', description: 'Després de la mort del Papa Francesc el 21 d\'abril de 2025, el conclave el tria Successor de Pere el 8 de maig. Pren el nom de Lleó XIV. Primer Papa nascut als Estats Units amb nacionalitat peruana.', location: 'Ciutat del Vaticà' },
  '2025-05-inicio': { title: 'Inici del pontificat', description: 'Missa d\'inici del pontificat el 18 de maig de 2025 a la Plaça de Sant Pere. Primeres encícliques previstes sobre doctrina social, pau i ecologia integral.', location: 'Ciutat del Vaticà' },
  '2026-06': { title: 'Viatge apostòlic a Espanya', description: 'Primer gran viatge apostòlic internacional a Espanya: Madrid, Barcelona, Gran Canaria i Tenerife del 6 al 12 de juny de 2026.', location: 'Espanya' },
}

const TIMELINE_GL: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Nacemento en Chicago', description: 'Nace o 14 de setembro en Chicago (Illinois), en familia católica con raíces francesas, italianas e españolas. É o máis novo de tres irmáns.', location: 'Chicago, Estados Unidos' },
  '1977-math': { title: 'Licenciatura en Matemáticas', description: 'Licénciase en Matemáticas pola Universidade Villanova (Pensilvania), institución agostiniana.', location: 'Villanova, Estados Unidos' },
  '1977-osa': { title: 'Entra na Orde de Santo Agostín', description: 'Entra no noviciado agostiniano en Saint Louis (Missouri). Estuda teoloxía na Catholic Theological Union de Chicago.', location: 'Saint Louis, Estados Unidos' },
  '1982-06': { title: 'Ordenación sacerdotal', description: 'Ordenado sacerdote o 19 de xuño de 1982 en Roma. Fai a profisión solemne na Orde.', location: 'Roma, Italia' },
  '1985': { title: 'Misionero no Perú', description: 'Comeza a súa longa fase misioneira no norte do Perú, nas rexións de Chulucanas e despois Trujillo. Pastoral rural, formación de seminaristas, cooperativas campesiñas.', location: 'Chulucanas, Perú' },
  '1987': { title: 'Doutorado en Dereito Canónico', description: 'Defende a súa tese doutoral na Pontifícia Universidade Santo Tomás de Aquino (Angelicum) en Roma, sobre o goberno do prior local agostiniano.', location: 'Roma, Italia' },
  '1999': { title: 'Prior provincial dos agostinianos en Chicago', description: 'Volve aos Estados Unidos para dirixir a provincia agostiniana do Medio Oeste.', location: 'Chicago, Estados Unidos' },
  '2001': { title: 'Prior Xeral da Orde de Santo Agostín', description: 'Elixido o líder mundial da Orde de Santo Agostín. Reelixido en 2007. Doce anos no goberno central da orde.', location: 'Roma, Italia' },
  '2014': { title: 'Bispo de Chiclayo', description: 'O Papa Francisco o nomea administrador apostólico da diocese de Chiclayo (Perú). Adquire nacionalidade peruana en 2015. En 2015 é nomeado bispo titular.', location: 'Chiclayo, Perú' },
  '2020': { title: 'Pandemia e compromiso social', description: 'Durante COVID-19 organiza redes de axuda, alimentos e sanidade en Chiclayo. Fortalece o seu perfil pastoral próximo aos máis pobres.', location: 'Chiclayo, Perú' },
  '2023-01': { title: 'Prefecto do Dicasterio dos Bispos', description: 'O Papa Francisco o chama a Roma como prefecto do Dicasterio dos Bispos — un dos cargos máis influentes do Vaticano, responsable de propoñer novos bispos en todo o mundo.', location: 'Cidade do Vaticano' },
  '2023-09': { title: 'Creado cardeal', description: 'No consistorio do 30 de setembro de 2023 é creado cardeal co título de Santa Mónica dos Agostinianos.', location: 'Cidade do Vaticano' },
  '2025-05-elected': { title: 'Elixido Papa', description: 'Despois da morte do Papa Francisco o 21 de abril de 2025, o conclave o elige Sucesor de Pedro o 8 de maio. Asume o nome de León XIV. Primeiro Papa nacido nos Estados Unidos con nacionalidade peruana.', location: 'Cidade do Vaticano' },
  '2025-05-inicio': { title: 'Comenzo do pontificado', description: 'Misa de comenzo do pontificado o 18 de maio de 2025 na Praza de San Pedro. Primeiras encíclicas previstas sobre doutrina social, paz e ecoloxía integral.', location: 'Cidade do Vaticano' },
  '2026-06': { title: 'Viaxe apostólica a España', description: 'Primeira gran viaxe apostólica internacional a España: Madrid, Barcelona, Gran Canaria e Tenerife do 6 ao 12 de xuño de 2026.', location: 'España' },
}

const TIMELINE_EU: Record<string, TimelineI18n> = {
  '1955-09': { title: 'Chicago-n jaiotza', description: 'Sortu 14. irailean Chicago-n (Illinois), familia katolikoan frantses, italian eta espainiar sustraiekin. Hiru anaia-arreben artean gaztea da.', location: 'Chicago, Estatu Batuak' },
  '1977-math': { title: 'Matematiketan lizentziaduna', description: 'Matematiaketan lizentziaduna Villanova Unibertsitate-tik (Pennsylvania), ordena augustiniarako instituzio.', location: 'Villanova, Estatu Batuak' },
  '1977-osa': { title: 'Santo Agostinaren Ordenan sartu', description: 'Saint Louis-en (Missouri) ordenaren noviziatzean sartu. Teologia ikasketak Catholic Theological Union-en Chicago-n.', location: 'Saint Louis, Estatu Batuak' },
  '1982-06': { title: 'Presbuteroa ordenatu', description: 'Presbuteroa ordenatu 19. ekainean 1982 Roma-n. Ordenaren profisio solemne egina.', location: 'Roma, Italia' },
  '1985': { title: 'Misionaria Peru-n', description: 'Hasi bere misionaria luzea Peru-n iparraldean, Chulucanas eta gero Trujillo eremutan. Landa-pastorala, seminaristen formaketa, nekazaleen kooperatibak.', location: 'Chulucanas, Peru' },
  '1987': { title: 'Denbora-zuzendaritza eta Denbora-ardura doktorea', description: 'Bere doktore-tesia defenditu Pontifikalen Unibertsitate Santo Tomasean (Angelicum) Roma-n, augustianiaren herri pribatua-an.', location: 'Roma, Italia' },
  '1999': { title: 'Augustiniar priore probintziaduna Chicago-n', description: 'Estatu Batuetara itzuli Midwest-eko augustianiaren probintzia gidatzeko.', location: 'Chicago, Estatu Batuak' },
  '2001': { title: 'Santo Agostinaren Ordenaren Priore Xenerala', description: 'Munduan Santo Agostinaren Ordenaren lider altuena hautatu. 2007-n berrauhauketa. Hamabi urteak ordenaren gobernuaren barrenean.', location: 'Roma, Italia' },
  '2014': { title: 'Chiclayo-ko Gotzaina', description: 'Frantzisko Aita Santua Chiclayo-ko diosesaren (Peru) apostolo administratzaile izendatu. 2015-ean Peruko nazionaltasuna lortu. 2015-ean gotzain titularra izendatu.', location: 'Chiclayo, Peru' },
  '2020': { title: 'Pandemia eta gizarte-konpromiso', description: 'COVID-19-ren bitartean, Chiclayo-n laguntza, janaria eta osasun sarea antolatu. Zokoak gertutako landa-pastorala indartsu.', location: 'Chiclayo, Peru' },
  '2023-01': { title: 'Gotzainen Dikastrioaren Prefektua', description: 'Frantzisko Aita Santua Roma-ra deitu Gotzainen Dikastrioaren Prefektu gisa — Vaticano-n zeregin erakuntsuetatik bat, munduko gotzain berriak proposatzeko arduradunak.', location: 'Vaticano Hiria' },
  '2023-09': { title: 'Kardinala sortua', description: '30. irailean 2023ko kontsisiorean kardinal sortua Augustiniarren Santa Monika izenarekin.', location: 'Vaticano Hiria' },
  '2025-05-elected': { title: 'Papa hautatu', description: 'Frantzisko Aita Santua 21. apirilean 2025an hil ondoren, konklabeak 8. maiuan Peter-en Ondorengoa hautatu. Leon XIV. izena hartu. Estatu Batuetan sortutako lehen Aita Santua Peru nazionaltasun eta.', location: 'Vaticano Hiria' },
  '2025-05-inicio': { title: 'Pontificatua hasierako', description: 'Pontificatuaren hasiera misa 18. maiuan 2025an San Pedro plazean. Gizarte-doktrina, bake eta ekoloxia integralaren encilikak aurtendu.', location: 'Vaticano Hiria' },
  '2026-06': { title: 'Aposioler bidaia Espainian', description: 'Lehen aposioler-bidaia internazional handia Espainian: Madrid, Bartzelona, Gran Kanaria eta Tenerife 6-12. ekainean 2026.', location: 'Espainia' },
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

const FAQ_DE: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Wie alt ist Papst Leo XIV.?', respuesta: 'Papst Leo XIV. wurde am 14. September 1955 in Chicago (Vereinigte Staaten) geboren. Er wird 71 Jahre alt während seiner apostolischen Reise nach Spanien im Juni 2026.' },
  { pregunta: 'Was ist der echte Name von Papst Leo XIV.?', respuesta: 'Sein Geburtsname ist Robert Francis Prevost. Er ist Ordensgeistlicher des Augustinerordens (OSA). Bei seiner Wahl am 8. Mai 2025 wählte er den Namen Leo XIV.' },
  { pregunta: 'Warum wählte der Papst den Namen Leo XIV.?', respuesta: 'Als Hommage an Leo XIII. (1878-1903), Autor der Enzyklika Rerum Novarum (1891), die die Soziallehre der Kirche inaugurierte. Er erklärte, dass, wie Leo XIII. auf die Industrielle Revolution antwortete, er auf die technologische Revolution und die künstliche Intelligenz antworten möchte.' },
  { pregunta: 'Wie groß ist Papst Leo XIV.?', respuesta: 'Papst Leo XIV. ist etwa 1,80 Meter groß. Er ist einer der größten Päpste der Neuzeit.' },
  { pregunta: 'Wie viele Sprachen spricht Papst Leo XIV.?', respuesta: 'Papst Leo XIV. spricht Spanisch, Englisch, Italienisch, Französisch und Portugiesisch fließend. Er liest Latein. Er versteht und benutzt Ausdrücke im Quechua, gelernt während seiner Jahrzehnte als Missionar in Peru. Einer der sprachbegabtesten Päpste der Geschichte.' },
  { pregunta: 'Ist Papst Leo XIV. konservativ oder progressiv?', respuesta: 'Er vermeidet diese Etiketten. Er steht in der Kontinuität mit den Päpsten Franziskus, Benedikt XVI. und Johannes Paul II. Lehrmäßig standhaft (pro-life, sakramentales Ehesakrament Mann-Frau) und seelsorgerisch aufgeschlossen (setzt synodale Linie und Willkommenskultur für LGBT-Menschen fort). Seine Prioritäten sind Soziallehre, Frieden, Migration und KI.' },
  { pregunta: 'Woher kommt Papst Leo XIV.?', respuesta: 'Geboren in Chicago, Illinois (Vereinigte Staaten). Erster Papst, der in den USA geboren wurde. 2015 erhielt er die peruanische Staatsbürgerschaft nach Jahrzehnten als Missionar und Bischof in Peru und ist damit auch der erste Papst mit peruanischem Pass.' },
  { pregunta: 'Wer sind die Eltern von Papst Leo XIV.?', respuesta: 'Sein Vater, Louis Marius Prevost, war ein Veteran des Zweiten Weltkriegs und Superintendent katholischer Schulen (gestorben 1997). Seine Mutter, Mildred Martínez, spanisch-italienischer Abstammung mit Wurzeln in Louisiana, war Bibliothekarin und Pädagogin (gestorben 1990). Er hat zwei Brüder: Louis und John.' },
  { pregunta: 'Wie ist das Motto von Papst Leo XIV.?', respuesta: 'Sein Bischofsmotto, das als Papstwort beibehalten wird, ist "In illo uno unum" ("In dem, der einer ist, seien wir eins"). Ein Satz aus Augustinus\' Kommentar zu Psalm 127, der seine Priorität der kirchlichen Einheit ausdrückt.' },
  { pregunta: 'Welche Ausbildung hat Papst Leo XIV.?', respuesta: 'Abschluss in Mathematik von der Villanova University (Pennsylvania, 1977). Master of Divinity von der Catholic Theological Union in Chicago. Doktorat in Kirchenrecht von der Päpstlichen Universität des Heiligen Thomas von Aquin (Angelicum) in Rom, 1987.' },
  { pregunta: 'Wann wurde Papst Leo XIV. gewählt?', respuesta: 'Gewählt am 8. Mai 2025 im vierten Wahlgang des Konklaves, nach dem Tod von Papst Franziskus am 21. April 2025. Messe zur Amtseinführung am 18. Mai 2025.' },
  { pregunta: 'Wann besucht Papst Leo XIV. Spanien?', respuesta: 'Die apostolische Reise von Papst Leo XIV. nach Spanien findet vom 6. bis 12. Juni 2026 statt. Er wird vier Städte besuchen: Madrid (6.-9. Juni), Barcelona (9.-10. Juni), Gran Canaria (11. Juni) und Teneriffa (11.-12. Juni).' },
]

const FAQ_PT: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Qual é a idade do Papa Leão XIV?', respuesta: 'O Papa Leão XIV nasceu em 14 de setembro de 1955 em Chicago (Estados Unidos). Ele terá 71 anos durante sua viagem apostólica à Espanha em junho de 2026.' },
  { pregunta: 'Qual é o verdadeiro nome do Papa Leão XIV?', respuesta: 'Seu nome de nascimento é Robert Francis Prevost. É um religioso da Ordem de Santo Agostinho (OSA). Eleito em 8 de maio de 2025, escolheu o nome Leão XIV.' },
  { pregunta: 'Por que o Papa escolheu o nome Leão XIV?', respuesta: 'Em homenagem a Leão XIII (1878-1903), autor da encíclica Rerum Novarum (1891) que inaugurou a Doutrina Social da Igreja. Explicou que, assim como Leão XIII respondeu à revolução industrial, ele quer responder à revolução tecnológica e à inteligência artificial.' },
  { pregunta: 'Qual é a altura do Papa Leão XIV?', respuesta: 'O Papa Leão XIV mede aproximadamente 1,80 metro. É um dos papas mais altos da história recente.' },
  { pregunta: 'Quantas línguas fala o Papa Leão XIV?', respuesta: 'O Papa Leão XIV fala com fluência espanhol, inglês, italiano, francês e português. Lê latim. Compreende e usa expressões em quéchua, aprendidas durante suas décadas como missionário no Peru. Um dos papas mais poliglotas da história.' },
  { pregunta: 'O Papa Leão XIV é conservador ou progressista?', respuesta: 'Ele evita esses rótulos. Situa-se na continuidade com os Papas Francisco, Bento XVI e João Paulo II. Doutrinariamente firme (pro-vida, matrimônio sacramental homem-mulher) e pastoralmente acolhedor (continua linha sinodal e acolhimento de pessoas LGBT). Suas prioridades são doutrina social, paz, migrações e IA.' },
  { pregunta: 'De onde é o Papa Leão XIV?', respuesta: 'Nascido em Chicago, Illinois (Estados Unidos). Primeiro Papa nascido nos EUA. Em 2015 obteve nacionalidade peruana após décadas como missionário e bispo no Peru, sendo também o primeiro Papa com passaporte peruano.' },
  { pregunta: 'Quem são os pais do Papa Leão XIV?', respuesta: 'Seu pai, Louis Marius Prevost, foi veterano da Segunda Guerra Mundial e superintendente de escolas católicas (morreu em 1997). Sua mãe, Mildred Martínez, de ascendência espanhola-italiana com raízes na Luisiana, foi bibliotecária e educadora (morreu em 1990). Tem dois irmãos: Louis e John.' },
  { pregunta: 'Qual é o lema do Papa Leão XIV?', respuesta: 'Seu lema episcopal, conservado como lema papal, é "In illo uno unum" ("Naquele que é um, sejamos um"). Uma frase do comentário de Santo Agostinho ao Salmo 127, expressando sua prioridade de unidade eclesial.' },
  { pregunta: 'Qual é a formação do Papa Leão XIV?', respuesta: 'Licenciatura em Matemática da Universidade Villanova (Pensilvânia, 1977). Master of Divinity da Catholic Theological Union de Chicago. Doutorado em Direito Canônico da Universidade Pontifícia Santo Tomás de Aquino (Angelicum) em Roma, 1987.' },
  { pregunta: 'Quando o Papa Leão XIV foi eleito?', respuesta: 'Eleito em 8 de maio de 2025, na quarta votação do conclave, após a morte do Papa Francisco em 21 de abril de 2025. Missa de início do pontificado em 18 de maio de 2025.' },
  { pregunta: 'Quando o Papa Leão XIV visitará a Espanha?', respuesta: 'A viagem apostólica do Papa Leão XIV à Espanha ocorrerá de 6 a 12 de junho de 2026. Visitará quatro cidades: Madrid (6-9 junho), Barcelona (9-10 junho), Gran Canaria (11 junho) e Tenerife (11-12 junho).' },
]

const FAQ_CA: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Quina és la nostra edat del Papa Lleó XIV?', respuesta: 'El Papa Lleó XIV va néixer el 14 de setembre de 1955 a Chicago (Estats Units). Tindrà 71 anys durante el seu viatge apostòlic a Espanya en juny de 2026.' },
  { pregunta: 'Quin és el veritable nom del Papa Lleó XIV?', respuesta: 'El seu nom de naixement és Robert Francis Prevost. És religiós de l\'Ordre de Sant Agustí (OSA). Triat el 8 de maig de 2025, va triar el nom de Lleó XIV.' },
  { pregunta: 'Per què el Papa va triar el nom de Lleó XIV?', respuesta: 'En homenatge a Lleó XIII (1878-1903), autor de l\'encíclica Rerum Novarum (1891) que inaugurà la Doctrina Social de l\'Església. Va explicar que, com Lleó XIII respongué a la revolució industrial, ell vol respondre a la revolució tecnològica i a la intel·ligència artificial.' },
  { pregunta: 'Quina és l\'altura del Papa Lleó XIV?', respuesta: 'El Papa Lleó XIV mesura aproximadament 1,80 metre. És un dels papes més alts de la història recent.' },
  { pregunta: 'Quantes llengües parla el Papa Lleó XIV?', respuesta: 'El Papa Lleó XIV parla amb fluïdesa espanyol, anglès, italià, francès i portuguès. Llegeix llatí. Entén i usa expressions en quítxua, apeses durant les seves dècades com a missioner al Perú. Un dels papes més poliglotas de la història.' },
  { pregunta: 'El Papa Lleó XIV és conservador o progressista?', respuesta: 'Evita aquestes etiquetes. Es situa en la continuïtat amb els Papes Francesc, Benet XVI i Joan Pau II. Doctrinalment ferm (pro-vida, matrimoni sacramental home-dona) i pastoralment acollidor (continua la línia sinodal i acollida de persones LGBT). Les seves prioritats són doctrina social, pau, migracions i IA.' },
  { pregunta: 'D\'on és el Papa Lleó XIV?', respuesta: 'Nascut a Chicago, Illinois (Estats Units). Primer Papa nascut als EUA. El 2015 obtingué nacionalitat peruana després de dècades com a missioner i bisbe al Perú, sent també el primer Papa amb pasaport peruà.' },
  { pregunta: 'Qui són els pares del Papa Lleó XIV?', respuesta: 'El seu pare, Louis Marius Prevost, fou veterà de la Segona Guerra Mundial i superintendent d\'escoles catòliques (va morir el 1997). La seva mare, Mildred Martínez, d\'ascendència hispana-italiana amb arrels a Louisiana, fou bibliotecària i educadora (va morir el 1990). Té dos germanes: Louis i John.' },
  { pregunta: 'Quin és el lema del Papa Lleó XIV?', respuesta: 'El seu lema episcopal, conservat com a lema papal, és "In illo uno unum" ("En aquell que és un, siguem un"). Una frase del comentari de Sant Agustí al Salm 127, expresant la seva prioritat d\'unitat eclesial.' },
  { pregunta: 'Quina és la formació del Papa Lleó XIV?', respuesta: 'Llicenciatura en Matemàtiques de la Universitat Villanova (Pennsilvània, 1977). Master of Divinity de la Catholic Theological Union de Chicago. Doctorat en Dret Canònic de la Universitat Pontifícia Santo Tomàs d\'Aquino (Angelicum) a Roma, 1987.' },
  { pregunta: 'Quan va ser escollit el Papa Lleó XIV?', respuesta: 'Escollit el 8 de maig de 2025, en la quarta votació del conclave, després de la mort del Papa Francesc el 21 d\'abril de 2025. Missa d\'inici del pontificat el 18 de maig de 2025.' },
  { pregunta: 'Quan visitarà el Papa Lleó XIV Espanya?', respuesta: 'El viatge apostòlic del Papa Lleó XIV a Espanya tindrà lloc del 6 al 12 de juny de 2026. Visitarà quatre ciutats: Madrid (6-9 juny), Barcelona (9-10 juny), Gran Canaria (11 juny) i Tenerife (11-12 juny).' },
]

const FAQ_GL: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Cal é a idade do Papa León XIV?', respuesta: 'O Papa León XIV naceu o 14 de setembro de 1955 en Chicago (Estados Unidos). Terá 71 anos durante a súa viaxe apostólica a España en xuño de 2026.' },
  { pregunta: 'Cal é o verdadeiro nome do Papa León XIV?', respuesta: 'O seu nome de nacemento é Robert Francis Prevost. É relixioso da Orde de Santo Agostín (OSA). Elixido o 8 de maio de 2025, escoleu o nome León XIV.' },
  { pregunta: 'Por qué o Papa escoleu o nome León XIV?', respuesta: 'En homenaxe a León XIII (1878-1903), autor da encíclica Rerum Novarum (1891) que inaugurou a Doutrina Social da Igrexa. Explicou que, así como León XIII respondeu á revolución industrial, el quere responder á revolución tecnolóxica e á intelixencia artificial.' },
  { pregunta: 'Cal é a altura do Papa León XIV?', respuesta: 'O Papa León XIV mide aproximadamente 1,80 metro. É un dos papas máis altos da historia recente.' },
  { pregunta: 'Cantas linguas fala o Papa León XIV?', respuesta: 'O Papa León XIV fala con fluencia español, inglés, italiano, francés e portugués. Le latín. Comprende e usa expresións en quechua, aprendidas durante as súas décadas como misioneiro no Perú. Un dos papas máis poliglotas da historia.' },
  { pregunta: 'O Papa León XIV é conservador ou progresista?', respuesta: 'Evita esas etiquetas. Sitúase na continuidade cos Papas Francisco, Bento XVI e João Paulo II. Doutrinariamente firme (pro-vida, matrimonio sacramental home-muller) e pastoralmente acolledor (continúa liña sinodal e acollida de persoas LGBT). As súas prioridades son doutrina social, paz, migracións e IA.' },
  { pregunta: 'De onde é o Papa León XIV?', respuesta: 'Nacido en Chicago, Illinois (Estados Unidos). Primeiro Papa nacido nos EUA. En 2015 obtivo nacionalidade peruana tras décadas como misioneiro e bispo no Perú, sendo tamén o primeiro Papa con pasaporte peruano.' },
  { pregunta: 'Quénes son os pais do Papa León XIV?', respuesta: 'O seu pai, Louis Marius Prevost, foi veterano da Segunda Guerra Mundial e superintendent de escolas católicas (morreu en 1997). A súa nai, Mildred Martínez, de ascendencia española-italiana con raíces en Louisiana, foi bibliotecaria e educadora (morreu en 1990). Ten dous irmáns: Louis e John.' },
  { pregunta: 'Cal é o lema do Papa León XIV?', respuesta: 'O seu lema episcopal, conservado como lema papal, é "In illo uno unum" ("Naquilo que é un, seamos un"). Unha frase do comentario de Santo Agostín ao Salmo 127, expresando a súa prioridade de unidade eclesial.' },
  { pregunta: 'Cal é a formación do Papa León XIV?', respuesta: 'Licenciatura en Matemáticas da Universidade Villanova (Pensilvania, 1977). Master of Divinity da Catholic Theological Union de Chicago. Doutorado en Dereito Canónico da Universidade Pontifícia Santo Tomás de Aquino (Angelicum) en Roma, 1987.' },
  { pregunta: 'Cando foi elixido o Papa León XIV?', respuesta: 'Elixido o 8 de maio de 2025, na cuarta votación do conclave, despois da morte do Papa Francisco o 21 de abril de 2025. Misa de inicio do pontificado o 18 de maio de 2025.' },
  { pregunta: 'Cando visitará o Papa León XIV España?', respuesta: 'A viaxe apostólica do Papa León XIV a España terá lugar do 6 ao 12 de xuño de 2026. Visitará catro cidades: Madrid (6-9 xuño), Barcelona (9-10 xuño), Gran Canaria (11 xuño) e Tenerife (11-12 xuño).' },
]

const FAQ_EU: Array<{ pregunta: string; respuesta: string }> = [
  { pregunta: 'Zenbat urte ditu Leon XIV.ak?', respuesta: 'Leon XIV.ak 14. irailean 1955ean jaio zen Chicago-n (Estatu Batuak). 71 urte betetuko ditu Espainiako aposioler-bidaian 2026ko ekainean.' },
  { pregunta: 'Zein da Leon XIV.aren benetako izena?', respuesta: 'Bere jaiotzaren izena Robert Francis Prevost da. Santo Agostinaren Ordenaren (OSA) erlijiosoa da. 2025eko maiaren 8an hautatua, Leon XIV.aren izena aukeratu zuen.' },
  { pregunta: 'Zergatik aukeratu zuen Leon XIV.aren izena Aita Santuak?', respuesta: 'Leon XIII.a (1878-1903) ohoratzeko, Rerum Novarum entziklika historikoen egilea (1891) Elizaren Doktrina Sozialaren hasieratzailea. Azaldu zuen Leon XIII.ak industria-iraultza bera erantzun bezala, teknologia-iraultza eta adimen artifizialari erantzunean nahi duela.' },
  { pregunta: 'Zenbat altu da Leon XIV.a?', respuesta: 'Leon XIV.a gutxi gorabehera 1,80 metroko altua du. Historian-geroetan altuengo Aita Santuetakoa da.' },
  { pregunta: 'Zenbat hizkuntzetan hitz egiten du Leon XIV.ak?', respuesta: 'Leon XIV.ak espainiola, ingelesa, italiara, frantsesa eta portugesa fluxuki hitz egiten du. Latina irakurtzen du. Quechuaren adierazpenak ulertzen eta erabiltzen ditu, Peru-n misionaria egin duen hamaboste urteetan ikasia. Historiko altuena poliglotak diren Aita Santuen artean.' },
  { pregunta: 'Leon XIV.a kontserbadorea ala progresista da?', respuesta: 'Etiketa hoiek saiatzen du. Francisco Aita Santu, Benet XVI.a eta Joannes Paulusen II.aren jarraipena dago. Doktrinahilean firme (bizi-protekzioa, sakramental ezkontzarik gizona-emakumea) eta pastoralhilean onetsita (sinodala lerro eta LGBT pertsonek onetsita). Bere lehentasunak doktrina soziala, bakea, migrazioak eta AI dira.' },
  { pregunta: 'Nondik dator Leon XIV.a?', respuesta: 'Chicago-n (Illinois, Estatu Batuak) jaio zen. Estatu Batuetan jaiotako lehen Aita Santua. 2015ean Peru-n misionaria eta gotzaina egon ondoren Peru-ko nazionaltasuna lortu, Peru-ko pasaporte duen lehen Aita Santua izanda.' },
  { pregunta: 'Nork dira Leon XIV.aren gurasoak?', respuesta: 'Bere aita, Louis Marius Prevost, Bigarren Mundu Gerraren beteranoa eta Chicagoko hegoaldeko eskola katolikoen superintendentea izan zen (1997an hil zen). Bere ama, Mildred Martínez, espainiar-italiar jatorriko eta Louisiana-ko sustraiekin, liburuzaina eta hezkuntzegileak (1990ean hil zen). Bi anaia ditu: Louis eta John.' },
  { pregunta: 'Zein da Leon XIV.aren leloa?', respuesta: '"In illo uno unum" ("Batera bat denean, batasun izagun") da bere episkopala lema eta papala. Augustino Santaren Salmoa 127ko iruzkina, bere eklesial batasun lehentasuna adierazten dena.' },
  { pregunta: 'Zein da Leon XIV.aren hezkuntza?', respuesta: 'Lizentziaduna Matematikan Villanova Unibertsitatea-tik (Pennsylvania, 1977). Master of Divinity Catholic Theological Union Chicago-tik. Doktorea Dereitu Kanoniakoan Pontifikalen Unibertsitatea Santo Tomasean (Angelicum) Roma-tik, 1987.' },
  { pregunta: 'Noiz hautatu zen Leon XIV.a?', respuesta: '2025eko maiaren 8an konklabeko laugarren botazioan hautatua, Francisco Aita Santua 2025eko apirilaren 21ean hil ondoren. Pontificatuaren hasierako misa 2025eko maiaren 18an.' },
  { pregunta: 'Noiz bisitatu du Leon XIV.a Espainia?', respuesta: 'Leon XIV.aren aposioler-bidaia Espainian 2026ko ekainaren 6-12an egongo da. Lau hiriri bisitatu: Madrid (ekain 6-9), Bartzelona (ekain 9-10), Gran Kanaria (ekain 11) eta Tenerife (ekain 11-12).' },
]

// =============================================================================
// Getters
// =============================================================================

export function getTimelineVida(locale: Locale): TimelineEntry[] {
  let dict: Record<string, TimelineI18n> | null = null
  switch (locale) {
    case 'en': dict = TIMELINE_EN; break
    case 'it': dict = TIMELINE_IT; break
    case 'fr': dict = TIMELINE_FR; break
    case 'de': dict = TIMELINE_DE; break
    case 'pt': dict = TIMELINE_PT; break
    case 'ca': dict = TIMELINE_CA; break
    case 'gl': dict = TIMELINE_GL; break
    case 'eu': dict = TIMELINE_EU; break
    case 'es':
    default: return timelineVida
  }
  return timelineVida.map((e, i) => {
    const tr = dict![getTimelineKey(i)]
    if (!tr) return e
    return { ...e, title: tr.title, description: tr.description, location: tr.location ?? e.location }
  })
}

const POSICIONES_DE: PosicionI18n[] = [
  { tema: 'Soziallehre und wirtschaftliche Gerechtigkeit', resumen: 'Direktes Erbe von Leo XIII.: Erneuerung der Rerum Novarum für das 21. Jahrhundert.', detalle: 'Die zentrale Achse seines Pontifikats. In seiner ersten Ansprache an das Kardinalskollegium erklärte er, dass er den Namen Leo wählte, um die Sozialfrage des 19. Jahrhunderts mit den heutigen Herausforderungen zu verbinden: Arbeitsplatzunsicherheit, Wohlstandsgefälle, konzentrierte Technologie.' },
  { tema: 'Künstliche Intelligenz', resumen: 'Zweite industrielle Revolution erfordert Kirchenreaktion.', detalle: 'Leo XIV. hat KI zur Priorität seines Lehramts gemacht. Er fordert internationale Regulierung, die die Menschenwürde gegen Arbeitsplatzverdrängung und algorithmische Manipulation schützt, und eine Kirche, die sich der Technologiedebatte nicht entzieht.' },
  { tema: 'Migration', resumen: 'Willkommenheißen als pastorale Priorität mit biografischem Bezug.', detalle: 'Sohn einer Familie mit Migrationswurzeln und Bischof in Peru für mehr als drei Jahrzehnte, hat er Migration als ethischen Test des Jahrhunderts gesetzt. Er betont, dass keine Mauer höher ist als die Menschenwürde und kritisiert die politische Instrumentalisierung von Migration.' },
  { tema: 'Lebensrecht und Menschenwürde', resumen: 'Standhafter Einsatz für das Leben von der Empfängnis zum natürlichen Tod.', detalle: 'Klassische und unbeugsame Kirchenposition, ohne Öffnung zur Abtreibung. Er erweitert den Ansatz auf die Todesstrafe, Sterbehilfe und unwürdige Lebensbedingungen (Armut, Krieg, Menschenhandel). Er hat betont, dass "lebensfreundlich" bedeutet, das ganze Leben zu schützen, nicht nur das pränatale.' },
  { tema: 'LGBT-Menschen und Synodalität', resumen: 'Pastorale Willkommenskultur innerhalb traditionsgebundener Lehre.', detalle: 'Setzt die Linie von "Fiducia supplicans" des Papstes Franziskus fort (Segnungen für Menschen in unregelmäßigen Verhältnissen, ohne Gleichsetzung mit sakramentalem Ehesakrament). Befürwortet hörendes und willkommenheißendes Seelsorge, ohne die Lehre über das Ehesakrament zu verändern.' },
  { tema: 'Traditionelle Messe (lateinischer Ritus)', resumen: 'Kirchliche Gemeinschaft über ritueller Form.', detalle: 'Ist vorsichtig bei Traditionis custodes geblieben. Erkennt den Wert des außerordentlichen Ritus für diejenigen an, die ihn in kirchlicher Gemeinschaft leben, aber entmutigt seine Verwendung als Identitätsbanner. Priorisiert Kircheneinheit über liturgischen Streit.' },
  { tema: 'Frauenweihe zum Diakonatsamt', resumen: 'Frage offen für synodale Unterscheidung.', detalle: 'Schließt das Studium des Frauendiakonats nicht aus (wie Franziskus auch nicht), besteht aber darauf, dass es eine kirchliche Unterscheidung ist, keine ideologische Forderung. Behält die Vorbehaltung des Priesteramts für Männer bei.' },
  { tema: 'Frieden und Krieg', resumen: 'Unbewaffneter und entwaffnender Frieden, aktive Diplomatie.', detalle: 'Schon von seinen ersten Worten von der Vatikanischen Loggia erwähnte er "unbewaffneten und entwaffnenden Frieden". Setzt das Lehramt des Papstes Franziskus zu Ukraine, Gaza, Sudan und anderen Krisen fort und prangert das Wettrüsten und den Einsatz autonomer Waffen an.' },
]

const POSICIONES_PT: PosicionI18n[] = [
  { tema: 'Doutrina social e justiça económica', resumen: 'Herança direta de Leão XIII: renovação da Rerum Novarum para o século XXI.', detalle: 'O eixo central de seu pontificado. Em seu primeiro discurso ao Colégio de Cardeais explicou que escolheu o nome Leo para ligar a questão social do século XIX aos desafios atuais: precariedade do trabalho, brecha ricos-pobres, tecnologia concentrada.' },
  { tema: 'Inteligência artificial', resumen: 'Segunda revolução industrial exigindo resposta da Igreja.', detalle: 'Leão XIV fez a IA uma prioridade de seu magistério. Clama por regulação internacional garantindo dignidade humana contra deslocamento laboral e manipulação algorítmica, e uma Igreja que não se esquive do debate tecnológico.' },
  { tema: 'Migração', resumen: 'Acolhimento como prioridade pastoral ligada à sua biografia.', detalle: 'Filho de família com raízes migrantes e bispo no Peru por mais de três décadas, colocou migração como teste ético do século. Insiste que nenhum muro é mais alto que dignidade humana e critica instrumentalização política da migração.' },
  { tema: 'Pro-vida e dignidade da pessoa', resumen: 'Defesa inabalável da vida da concepção à morte natural.', detalle: 'Posição clássica e firme da Igreja, sem abertura ao aborto. Estende a abordagem à pena de morte, eutanásia e condições de vida indignas (pobreza, guerra, tráfico). Sublinhou que "pro-vida" significa defender toda vida, não só prenatal.' },
  { tema: 'Pessoas LGBT e sinodalidade', resumen: 'Acolhimento pastoral dentro do magistério tradicional.', detalle: 'Continua a linha de "Fiducia supplicans" do Papa Francisco (bênçãos a pessoas em relações irregulares, sem equiparar a matrimônio sacramental). Advoga pastoral de escuta e acolhimento, sem alterar doutrina sobre sacramento matrimonial.' },
  { tema: 'Missa tradicional (rito latino)', resumen: 'Comunhão eclesial acima da forma ritual.', detalle: 'Manteve-se prudente sobre Traditionis custodes. Reconhece valor do rito extraordinário para quem o vive em comunhão eclesial, mas desestimula uso como bandeira identitária. Prioriza unidade da Igreja sobre disputa litúrgica.' },
  { tema: 'Ordenação feminina ao diaconato', resumen: 'Questão aberta a discernimento sinodal.', detalle: 'Não fecha porta ao estudo do diaconato feminino (como Francis não fechou), mas insiste que é discernimento eclesial, não reivindicação ideológica. Mantém reserva do sacerdócio ministerial para homens.' },
  { tema: 'Paz e guerra', resumen: 'Paz desarmada e desarmante, diplomacia ativa.', detalle: 'Desde suas primeiras palavras na Lògia Vaticana mencionou "paz desarmada e desarmante". Continua magistério de Francis sobre Ucrânia, Gaza, Sudão e outras crises, denunciando corrida armamentista e uso de armas autónomas.' },
]

const POSICIONES_CA: PosicionI18n[] = [
  { tema: 'Doctrina social i justícia econòmica', resumen: 'Herència directa de Lleó XIII: renovació de Rerum Novarum per al segle XXI.', detalle: 'L\'eix central del seu pontificat. En el seu primer discurs al Col·legi de Cardenals explicà que va triar el nom Leo per vincular la qüestió social del segle XIX als desafiaments actuals: precarietat laboral, bretxa rics-pobres, tecnologia concentrada.' },
  { tema: 'Intel·ligència artificial', resumen: 'Segona revolució industrial exigint resposta de l\'Església.', detalle: 'Lleó XIV ha fet la IA prioritat del seu magisteri. Clama per regulació internacional garantint dignitat humana contra desplaçament laboral i manipulació algorítmica, i una Església que no esquivie el debat tecnològic.' },
  { tema: 'Migracions', resumen: 'Acollida com a prioritat pastoral vinculada a la seva biografia.', detalle: 'Fill de família amb arrels migrants i bisbe al Perú per més de tres dècades, ha posat migració com a prova ètica del segle. Insisteix que cap mur és més alt que dignitat humana i critica instrumentalització política de migració.' },
  { tema: 'Pro-vida i dignitat de la persona', resumen: 'Defensa inflexible de la vida de la concepció a la mort natural.', detalle: 'Posició clàssica i ferma de l\'Església, sense obertura a l\'avortament. Estén l\'enfocament a la pena de mort, eutanàsia i condicions de vida indignes (pobresa, guerra, tràfic). Ha subrallat que "pro-vida" significa defensar tota vida, no només prenatal.' },
  { tema: 'Persones LGBT i sinodalitat', resumen: 'Acollida pastoral dins del magisteri tradicional.', detalle: 'Continua la línia de "Fiducia supplicans" del Papa Francesc (bendiccions a persones en relacions irregulars, sense equiparació a matrimoni sacramental). Advocacy per pastoral d\'escolta i acollida, sense alterar doctrina sobre sagrament matrimonial.' },
  { tema: 'Missa tradicional (rit llatí)', resumen: 'Comunió eclesial per sobre de la forma ritual.', detalle: 'Ha romàs prudent sobre Traditionis custodes. Reconeix valor del rit extraordinari per a qui la viu en comunió eclesial, però desestimula ús com bandera identitària. Prioritza unitat de l\'Església sobre disputa litúrgica.' },
  { tema: 'Ordenació femenina al diaconat', resumen: 'Qüestió oberta a discerniment sinodal.', detalle: 'No tanca la porta a estudi del diaconat femení (com Francesc tampoc), però insisteix que és discerniment eclesial, no reivindicació ideològica. Manté reserva del sacerdoci ministerial per a homes.' },
  { tema: 'Pau i guerra', resumen: 'Pau desarmada i desarmant, diplomàcia activa.', detalle: 'Des de les seves primeres paraules a la Lògia Vaticana esmentà "pau desarmada i desarmant". Continua magisteri de Francesc sobre Ucraïna, Gaza, Sudan i altres crisis, denunciant cursa armamentística i ús d\'armes autònomes.' },
]

const POSICIONES_GL: PosicionI18n[] = [
  { tema: 'Doutrina social e xustiza económica', resumen: 'Herdanza directa de León XIII: renovación da Rerum Novarum para o século XXI.', detalle: 'O eixe central do seu pontificado. No seu primeiro discurso ao Colexio de Cardeais explicou que escoleu o nome León para unir a cuestión social do século XIX cos desafíos actuais: precariedade laboral, fenda ricos-pobres, tecnoloxía concentrada.' },
  { tema: 'Intelixencia artificial', resumen: 'Segunda revolución industrial esixindo resposta da Igrexa.', detalle: 'León XIV fixo a IA prioridade do seu magisterio. Clama por regulación internacional garantindo dignidade humana contra desplazamento laboral e manipulación algorítmica, e unha Igrexa que non se esquive do debate tecnolóxico.' },
  { tema: 'Migracións', resumen: 'Acollida como prioridade pastoral ligada á súa biografía.', detalle: 'Fillo de familia con raíces migrantes e bispo no Perú por máis de tres décadas, puxo a migración como proba ética do século. Insiste que ningún muro é máis alto cá dignidade humana e critica instrumentalización política da migración.' },
  { tema: 'Pro-vida e dignidade da persoa', resumen: 'Defensa inquebratable da vida da concepción á morte natural.', detalle: 'Posición clásica e firme da Igrexa, sen apertura ao aborto. Estende o enfoque á pena de morte, eutanasia e condicións de vida indignas (pobreza, guerra, tráfico). Subliñou que "pro-vida" significa defender toda vida, non só prenatal.' },
  { tema: 'Persoas LGBT e sinodalidade', resumen: 'Acollida pastoral dentro do magisterio tradicional.', detalle: 'Continúa a liña de "Fiducia supplicans" do Papa Francisco (bendicións a persoas en relacións irregulares, sen equiparación a matrimonio sacramental). Aboga por pastoral de escoita e acollida, sen alterar doutrina sobre sacramento matrimonial.' },
  { tema: 'Misa tradicional (rito latino)', resumen: 'Comunión eclesial por riba da forma ritual.', detalle: 'Mantívose prudente sobre Traditionis custodes. Recoñece valor do rito extraordinario para quen o vive en comunión eclesial, pero desestimula o seu uso como bandera identitaria. Prioritza unidade da Igrexa sobre disputa litúrxica.' },
  { tema: 'Ordenación femenina ao diaconato', resumen: 'Cuestión aberta ao discernimento sinodal.', detalle: 'Non pecha a porta ao estudo do diaconato femenino (como Francisco tampouco), pero insiste que é discernimento eclesial, non reivindicación ideolóxica. Mantén a reserva do sacerdocio ministerial para homes.' },
  { tema: 'Paz e guerra', resumen: 'Paz desarmada e desarmante, diplomacia activa.', detalle: 'Desde as súas primeiras palabras na Loggia Vaticana mencionou a "paz desarmada e desarmante". Continúa o magisterio de Francisco sobre Ucrania, Gaza, Sudán e outras crisis, denunciando a carreira armamentística e o uso de armas autónomas.' },
]

const POSICIONES_EU: PosicionI18n[] = [
  { tema: 'Doktrina soziala eta justizia ekonomikoa', resumen: 'Leon XIII.aren herentzia zuzena: Rerum Novarumen berritzea XXI. menderako.', detalle: 'Bere pontificatuaren ardatz zentrala. Kardinalleen Kolegioari emandako lehen hitzaldian azaldu zuen Leon izena hautatu zuela XIXXXIaren gizarte-galdeketa eta egungo erronkak lotzeko: lanaren prekarioa, aberats-pobreen arteko urratea, teknologia kontzentratu.' },
  { tema: 'Adimen artifiziala', resumen: 'Bigarren industria-iraultza Elizaren erantzuna eskatzen.', detalle: 'Leon XIV.ak AAa bere magisterioaren lehentasuna egin du. Nazioarteko araubide dei egiten du giza duintasuna laboral-desplazamendu eta manipulazio algoritmikoen aurka segurtatzen duena, eta teknologia-debateak ez diren Eliza.' },
  { tema: 'Migrazioak', resumen: 'Harrera pastoral lehentasun biografi-lotuarekin.', detalle: 'Migraziazleen-biziguneak dituen familiakorik eta Peru-ko gotzaina hirurogeita hamar urtetan, migrazioa mendean-zeharako proba etiko eta kokatzen du. Biurraren baino handiagoa ez den inor duintasun eta kritikatzea politiko migrazioen balioa.' },
  { tema: 'Pro-bizi eta gizonaren duintasuna', resumen: 'Bizia, ortzeadana eta hiltzen artean iraundia.', detalle: 'Klasikoa eta Elizaren koldoa, auzabeza apertutarik gabe. Heriotzearen penaltzea, euthanasioa eta bizi-baldintzak (pobrezia, gerra, traffic) garetzea zabaldu. Azpimarratu "pro-bizi" biziak defendatzea, ez soilik prenatalak.' },
  { tema: 'LGBT pertsonak eta sinodalitatea', resumen: 'Pastoral harrera magisterio tradizionalari.', detalle: 'Francis Aita Santuaren "Fiducia supplicans" adarrari jarraitzen. Jakinbideak irregularrar pertsonetan beraketa, baina ez sakramental ezkontza baliokidetzerik. Entzun pastoral eta harrera, baina ez doktrina sakramentalean aldatzea.' },
  { tema: 'Ohiko misa (latino ritua)', resumen: 'Eklesial komunioa ritualaren gainean.', detalle: 'Tradicionis custodes-en prudentea mantendu. Eklesial komunioaren eklesialaren egoeran gizonarentzat balio-arrazoi eta baina ez banderea gisa erabili.' },
  { tema: 'Emakumea diakonatuan ordenatua', resumen: 'Galdetzea sinodal bendikapenari zabalik.', detalle: 'Ez du diakonatu-emakunaren estudio itxitzen (Frantziskoak ere ez), baina dela diskernimento eklesial arautzen insistitu dute, eta ez ideologiko reklamatzea. Mantentzen ministerial prestige-bildua gizonarengatik.' },
  { tema: 'Bakea eta gerra', resumen: 'Bake desbarmatzailea eta desbarmatzaile, diplomazia aktiboa.', detalle: 'Vaticano Loggiatik lehen hitzeetatik "bake desarmatua eta desarmatzailea" aipatu zuen. Francis Aita Santuaren magisterio Ukraina, Gaza, Sudan eta beste krisian jarraitzea, armaeren erronka eta artifiziala denuntziatu.' },
]

export function getPosicionesMagisterio(locale: Locale): PosicionMagisterio[] {
  if (locale === 'es') return posicionesMagisterio
  const dict =
    locale === 'en' ? POSICIONES_EN :
    locale === 'it' ? POSICIONES_IT :
    locale === 'fr' ? POSICIONES_FR :
    locale === 'de' ? POSICIONES_DE :
    locale === 'pt' ? POSICIONES_PT :
    locale === 'ca' ? POSICIONES_CA :
    locale === 'gl' ? POSICIONES_GL :
    locale === 'eu' ? POSICIONES_EU : null
  if (!dict) return posicionesMagisterio
  return posicionesMagisterio.map((p, i) => {
    const tr = dict[i]
    if (!tr) return p
    return { ...p, tema: tr.tema, resumen: tr.resumen, detalle: tr.detalle }
  })
}

export function getFaqPapaLeonXIV(locale: Locale): FaqPapa[] {
  switch (locale) {
    case 'en': return FAQ_EN as FaqPapa[]
    case 'it': return FAQ_IT as FaqPapa[]
    case 'fr': return FAQ_FR as FaqPapa[]
    case 'de': return FAQ_DE as FaqPapa[]
    case 'pt': return FAQ_PT as FaqPapa[]
    case 'ca': return FAQ_CA as FaqPapa[]
    case 'gl': return FAQ_GL as FaqPapa[]
    case 'eu': return FAQ_EU as FaqPapa[]
    case 'es':
    default: return faqPapaLeonXIV
  }
}

// =============================================================================
// Raíces Chicago — EN
// =============================================================================

const RAICES_CHICAGO_IT = {
  barrioNatal: 'Dolton, sobborgo meridionale di Chicago, Illinois',
  parroquiaInfancia: 'Parrocchia di St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (tifoso dichiarato, presente alla Gara 1 delle World Series 2005)',
  etnicidad: 'Origini miste: francesi (parte paterna), italiane, e spagnolo-creole con radici in Louisiana (parte materna). La famiglia Prevost proviene dal nord della Francia.',
  idiomaEnCasa: 'Inglese',
  datoCurioso: 'Nel 2005, prima di diventare vescovo, viaggiò appositamente a Chicago per assistere alla Gara 1 delle World Series che i White Sox avrebbero vinto — ponendo fine a una siccità di 88 anni. Primo papa apertamente appassionato di baseball americano.',
}
const RAICES_CHICAGO_FR = {
  barrioNatal: 'Dolton, banlieue sud de Chicago, Illinois',
  parroquiaInfancia: 'Paroisse de St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (fan déclaré, présent au match 1 des World Series 2005)',
  etnicidad: 'Origines mixtes : françaises (côté paternel), italiennes, et hispano-créoles avec des racines en Louisiane (côté maternel). La famille Prevost vient du nord de la France.',
  idiomaEnCasa: 'Anglais',
  datoCurioso: 'En 2005, avant de devenir évêque, il s\'est expressément rendu à Chicago pour assister au match 1 des World Series que les White Sox ont finalement remportées — mettant fin à 88 ans de sécheresse. Premier pape ouvertement amateur de baseball américain.',
}
const RAICES_CHICAGO_DE = {
  barrioNatal: 'Dolton, südlicher Vorort von Chicago, Illinois',
  parroquiaInfancia: 'St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (erklärter Fan, bei Spiel 1 der World Series 2005 anwesend)',
  etnicidad: 'Gemischte Herkunft: französisch (väterlicherseits), italienisch und spanisch-kreolisch mit Wurzeln in Louisiana (mütterlicherseits). Die Familie Prevost stammt aus Nordfrankreich.',
  idiomaEnCasa: 'Englisch',
  datoCurioso: '2005, vor seiner Bischofsweihe, reiste er eigens nach Chicago, um Spiel 1 der World Series zu erleben, das die White Sox gewannen — und beendete eine 88-jährige Durststrecke. Erster Papst, der offen Baseballfan ist.',
}
const RAICES_CHICAGO_PT = {
  barrioNatal: 'Dolton, subúrbio sul de Chicago, Illinois',
  parroquiaInfancia: 'Paróquia de St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (adepto declarado, presente no jogo 1 das World Series 2005)',
  etnicidad: 'Origens mistas: francesas (lado paterno), italianas e espanhol-crioulas com raízes na Luisiana (lado materno). A família Prevost provém do norte da França.',
  idiomaEnCasa: 'Inglês',
  datoCurioso: 'Em 2005, antes de ser bispo, viajou expressamente a Chicago para assistir ao jogo 1 das World Series que os White Sox acabaram por vencer — pondo fim a uma seca de 88 anos. Primeiro papa abertamente fã de basebol americano.',
}
const RAICES_CHICAGO_CA = {
  barrioNatal: 'Dolton, suburbi sud de Chicago, Illinois',
  parroquiaInfancia: 'Parròquia de St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (aficionat declarat, present al Joc 1 de les World Series 2005)',
  etnicidad: 'Orígens mixtos: francesos (per part del pare), italians, i hispano-criolls amb arrels a Louisiana (per part de la mare). La família Prevost prové del nord de França.',
  idiomaEnCasa: 'Anglès',
  datoCurioso: 'El 2005, abans de ser bisbe, va viatjar expressament a Chicago per presenciar el Joc 1 de les World Series que els White Sox van acabar guanyant — posant fi a 88 anys de sequera. Primer papa obertament afeccionat al beisbol americà.',
}
const RAICES_CHICAGO_GL = {
  barrioNatal: 'Dolton, suburbio sur de Chicago, Illinois',
  parroquiaInfancia: 'Parroquia de St. Mary of the Assumption, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (afeccionado declarado, presente no Xogo 1 das World Series 2005)',
  etnicidad: 'Orixes mixtas: francesas (pola parte do pai), italianas, e hispano-criollas con raíces en Luisiana (pola parte da nai). A familia Prevost procede do norte de Francia.',
  idiomaEnCasa: 'Inglés',
  datoCurioso: 'En 2005, antes de ser bispo, viaxou expresamente a Chicago para asistir ao Xogo 1 das World Series que os White Sox acabaron gañando — pondo fin a 88 anos de seca. Primeiro papa abertamente afeccionado ao béisbol americano.',
}
const RAICES_CHICAGO_EU = {
  barrioNatal: 'Dolton, Chicago-ko hegoaldeko auzoa, Illinois',
  parroquiaInfancia: 'St. Mary of the Assumption parrokia, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (zale aitortua, 2005eko World Seriesen 1. partidan egon zen)',
  etnicidad: 'Jatorri mistoak: frantsesak (aitaren aldetik), italiarrak, eta espainol-kreolak Louisianako sustraiekin (amaren aldetik). Prevost familia Frantziako iparraldekoa da.',
  idiomaEnCasa: 'Ingelesa',
  datoCurioso: '2005ean, gotzaina izan aurretik, Chicagora joan zen espresuki World Seriesen 1. partidari begira, White Sox-ek azkenean irabazi zuen — 88 urteko lehortea amaituz. Beisbol amerikarraren zalea den lehen aita santua.',
}

const RAICES_CHICAGO_EN = {
  barrioNatal: 'Dolton, southern suburb of Chicago, Illinois',
  parroquiaInfancia: 'St. Mary of the Assumption Parish, Dolton',
  instituto: 'Mendel Catholic Preparatory High School, Chicago',
  equipoDeportivo: 'Chicago White Sox (declared fan, present at Game 1 of the 2005 World Series)',
  etnicidad: 'Mixed origins: French (father\'s side), Italian, and Spanish-Creole with Louisiana roots (mother\'s side). The Prevost family comes from northern France.',
  idiomaEnCasa: 'English',
  datoCurioso: 'In 2005, before becoming a bishop, he travelled expressly to Chicago to witness Game 1 of the World Series that the White Sox ended up winning — breaking an 88-year drought. First Pope openly a fan of American baseball.',
}

export function getRaicesChicago(locale: Locale) {
  switch (locale) {
    case 'en': return RAICES_CHICAGO_EN
    case 'it': return RAICES_CHICAGO_IT
    case 'fr': return RAICES_CHICAGO_FR
    case 'de': return RAICES_CHICAGO_DE
    case 'pt': return RAICES_CHICAGO_PT
    case 'ca': return RAICES_CHICAGO_CA
    case 'gl': return RAICES_CHICAGO_GL
    case 'eu': return RAICES_CHICAGO_EU
    default: return raicesChicago
  }
}

// =============================================================================
// Familia — EN
// =============================================================================

const FAMILIA_IT: MiembroFamilia[] = [
  { relacion: 'Padre', nombre: 'Louis Marius Prevost', datos: 'Figlio di immigrati francesi. Veterano della Seconda guerra mondiale (sbarco in Normandia). Sovrintendente di scuole cattoliche a sud di Chicago. Deceduto nel 1997.' },
  { relacion: 'Madre', nombre: 'Mildred Martínez', datos: 'Di origini spagnole e italiane, con radici familiari a New Orleans (Louisiana). Bibliotecaria ed educatrice. Deceduta nel 1990. Trasmise al futuro Papa la lingua spagnola e la devozione mariana.' },
  { relacion: 'Fratello maggiore', nombre: 'Louis Prevost', datos: 'Militare in pensione e imprenditore. Vive a Port Charlotte, Florida.' },
  { relacion: 'Fratello mediano', nombre: 'John Prevost', datos: 'Direttore di scuola cattolica in pensione. Risiede vicino a Chicago.' },
]
const FAMILIA_FR: MiembroFamilia[] = [
  { relacion: 'Père', nombre: 'Louis Marius Prevost', datos: 'Fils d\'immigrants français. Vétéran de la Seconde Guerre mondiale (débarquement de Normandie). Surintendant des écoles catholiques au sud de Chicago. Décédé en 1997.' },
  { relacion: 'Mère', nombre: 'Mildred Martínez', datos: 'D\'origine espagnole et italienne, avec des racines familiales à La Nouvelle-Orléans (Louisiane). Bibliothécaire et éducatrice. Décédée en 1990. Transmit au futur Pape la langue espagnole et la dévotion mariale.' },
  { relacion: 'Frère aîné', nombre: 'Louis Prevost', datos: 'Militaire à la retraite et entrepreneur. Vit à Port Charlotte, Floride.' },
  { relacion: 'Frère cadet', nombre: 'John Prevost', datos: 'Directeur d\'école catholique à la retraite. Réside près de Chicago.' },
]
const FAMILIA_DE: MiembroFamilia[] = [
  { relacion: 'Vater', nombre: 'Louis Marius Prevost', datos: 'Sohn französischer Einwanderer. Veteran des Zweiten Weltkriegs (Landung in der Normandie). Superintendent katholischer Schulen im Süden Chicagos. Verstorben 1997.' },
  { relacion: 'Mutter', nombre: 'Mildred Martínez', datos: 'Spanischer und italienischer Abstammung, mit Familienwurzeln in New Orleans (Louisiana). Bibliothekarin und Pädagogin. Verstorben 1990. Gab dem künftigen Papst die spanische Sprache und die Marienverehrung weiter.' },
  { relacion: 'Älterer Bruder', nombre: 'Louis Prevost', datos: 'Pensionierter Soldat und Unternehmer. Lebt in Port Charlotte, Florida.' },
  { relacion: 'Mittlerer Bruder', nombre: 'John Prevost', datos: 'Pensionierter Direktor einer katholischen Schule. Lebt in der Nähe von Chicago.' },
]
const FAMILIA_PT: MiembroFamilia[] = [
  { relacion: 'Pai', nombre: 'Louis Marius Prevost', datos: 'Filho de imigrantes franceses. Veterano da Segunda Guerra Mundial (desembarque da Normandia). Superintendente de escolas católicas no sul de Chicago. Falecido em 1997.' },
  { relacion: 'Mãe', nombre: 'Mildred Martínez', datos: 'De ascendência espanhola e italiana, com raízes familiares em Nova Orleães (Luisiana). Bibliotecária e educadora. Falecida em 1990. Transmitiu ao futuro Papa a língua espanhola e a devoção mariana.' },
  { relacion: 'Irmão mais velho', nombre: 'Louis Prevost', datos: 'Militar reformado e empresário. Vive em Port Charlotte, Florida.' },
  { relacion: 'Irmão do meio', nombre: 'John Prevost', datos: 'Diretor de escola católica reformado. Reside perto de Chicago.' },
]
const FAMILIA_CA: MiembroFamilia[] = [
  { relacion: 'Pare', nombre: 'Louis Marius Prevost', datos: 'Fill d\'immigrants francesos. Veterà de la Segona Guerra Mundial (desembarcament de Normandia). Superintendent d\'escoles catòliques al sud de Chicago. Mort el 1997.' },
  { relacion: 'Mare', nombre: 'Mildred Martínez', datos: 'D\'ascendència espanyola i italiana, amb arrels familiars a Nova Orleans (Louisiana). Bibliotecària i educadora. Morta el 1990. Va transmetre al futur Papa la llengua espanyola i la devoció mariana.' },
  { relacion: 'Germà gran', nombre: 'Louis Prevost', datos: 'Militar jubilat i empresari. Viu a Port Charlotte, Florida.' },
  { relacion: 'Germà mitjà', nombre: 'John Prevost', datos: 'Director d\'escola catòlica jubilat. Resideix prop de Chicago.' },
]
const FAMILIA_GL: MiembroFamilia[] = [
  { relacion: 'Pai', nombre: 'Louis Marius Prevost', datos: 'Fillo de inmigrantes franceses. Veterano da II Guerra Mundial (desembarco de Normandía). Superintendente de escolas católicas no sur de Chicago. Falecido en 1997.' },
  { relacion: 'Nai', nombre: 'Mildred Martínez', datos: 'De ascendencia española e italiana, con raíces familiares en Nova Orleáns (Luisiana). Bibliotecaria e educadora. Falecida en 1990. Transmitiu ao futuro Papa a lingua española e a devoción mariana.' },
  { relacion: 'Irmán maior', nombre: 'Louis Prevost', datos: 'Militar xubilado e empresario. Vive en Port Charlotte, Florida.' },
  { relacion: 'Irmán mediano', nombre: 'John Prevost', datos: 'Director de escola católica xubilado. Reside preto de Chicago.' },
]
const FAMILIA_EU: MiembroFamilia[] = [
  { relacion: 'Aita', nombre: 'Louis Marius Prevost', datos: 'Frantziako etorkinen semea. Bigarren Mundu Gerrako beteranoa (Normandiako lehorreratzea). Chicago hegoaldeko eskola katolikoen superintendentea. 1997an hil zen.' },
  { relacion: 'Ama', nombre: 'Mildred Martínez', datos: 'Espainiar eta italiar jatorrikoa, New Orleans-eko (Louisiana) familia-sustraiekin. Liburuzaina eta hezitzailea. 1990ean hil zen. Aita Santu izango zenari gaztelaniaren hizkuntza eta Ama Birjinaren debozioa transmititu zizkion.' },
  { relacion: 'Anaia nagusia', nombre: 'Louis Prevost', datos: 'Militar erretiratua eta enpresaburua. Port Charlotte-n bizi da, Florida.' },
  { relacion: 'Anaia ertaina', nombre: 'John Prevost', datos: 'Eskola katolikoko zuzendari erretiratua. Chicago inguruan bizi da.' },
]

const FAMILIA_EN: MiembroFamilia[] = [
  { relacion: 'Father', nombre: 'Louis Marius Prevost', datos: 'Son of French immigrants. World War II veteran (Normandy landings). Superintendent of Catholic schools in south Chicago. Died in 1997.' },
  { relacion: 'Mother', nombre: 'Mildred Martínez', datos: 'Of Spanish and Italian descent, with family roots in New Orleans (Louisiana). Librarian and educator. Died in 1990. Passed on the Spanish language and Marian devotion to the future Pope.' },
  { relacion: 'Older brother', nombre: 'Louis Prevost', datos: 'Retired military and businessman. Lives in Port Charlotte, Florida.' },
  { relacion: 'Middle brother', nombre: 'John Prevost', datos: 'Retired Catholic school principal. Lives near Chicago.' },
]

export function getFamiliaPapa(locale: Locale): MiembroFamilia[] {
  switch (locale) {
    case 'en': return FAMILIA_EN
    case 'it': return FAMILIA_IT
    case 'fr': return FAMILIA_FR
    case 'de': return FAMILIA_DE
    case 'pt': return FAMILIA_PT
    case 'ca': return FAMILIA_CA
    case 'gl': return FAMILIA_GL
    case 'eu': return FAMILIA_EU
    default: return familiaPapa
  }
}

// =============================================================================
// Citas relevantes — EN
// =============================================================================

const CITAS_IT: CitaPapa[] = [
  { texto: 'La pace sia con tutti voi. Grazie, cari fratelli, per questo incontro. La pace di Cristo risorto, pace disarmata e disarmante, umile e perseverante.', ocasion: 'Primo saluto dalla Loggia Vaticana', fecha: '2025-05-08' },
  { texto: 'Ho scelto il nome di Leone perché Papa Leone XIII, con la storica enciclica Rerum Novarum, affrontò la questione sociale nel contesto della prima grande rivoluzione industriale. Oggi la Chiesa offre a tutti il suo patrimonio di dottrina sociale per rispondere a un\'altra rivoluzione industriale: quella dell\'intelligenza artificiale.', ocasion: 'Discorso al Collegio Cardinalizio', fecha: '2025-05-10' },
]
const CITAS_FR: CitaPapa[] = [
  { texto: 'La paix soit avec vous tous. Merci, chers frères, pour cette rencontre. La paix du Christ ressuscité, paix désarmée et désarmante, humble et persévérante.', ocasion: 'Premier salut depuis la Loggia vaticane', fecha: '2025-05-08' },
  { texto: 'J\'ai choisi le nom de Léon parce que le Pape Léon XIII, avec l\'encyclique historique Rerum Novarum, a abordé la question sociale dans le contexte de la première grande révolution industrielle. Aujourd\'hui, l\'Église offre à tous son patrimoine de doctrine sociale pour répondre à une autre révolution industrielle : celle de l\'intelligence artificielle.', ocasion: 'Discours au Collège cardinalice', fecha: '2025-05-10' },
]
const CITAS_DE: CitaPapa[] = [
  { texto: 'Der Friede sei mit euch allen. Danke, liebe Brüder, für dieses Zusammentreffen. Der Friede des auferstandenen Christus, ein entwaffneter und entwaffnender Friede, demütig und beharrlich.', ocasion: 'Erster Gruß von der Vatikanischen Loggia', fecha: '2025-05-08' },
  { texto: 'Ich habe den Namen Leo gewählt, weil Papst Leo XIII. mit der historischen Enzyklika Rerum Novarum die soziale Frage im Kontext der ersten großen industriellen Revolution behandelte. Heute bietet die Kirche allen ihr Erbe der Soziallehre als Antwort auf eine andere industrielle Revolution an: die der künstlichen Intelligenz.', ocasion: 'Ansprache an das Kardinalskollegium', fecha: '2025-05-10' },
]
const CITAS_PT: CitaPapa[] = [
  { texto: 'A paz esteja com todos vós. Obrigado, queridos irmãos, por este encontro. A paz de Cristo ressuscitado, paz desarmada e desarmante, humilde e perseverante.', ocasion: 'Primeira saudação da Loggia Vaticana', fecha: '2025-05-08' },
  { texto: 'Escolhi o nome de Leão porque o Papa Leão XIII, com a histórica encíclica Rerum Novarum, abordou a questão social no contexto da primeira grande revolução industrial. Hoje a Igreja oferece a todos o seu património de doutrina social para responder a outra revolução industrial: a da inteligência artificial.', ocasion: 'Discurso ao Colégio Cardinalício', fecha: '2025-05-10' },
]
const CITAS_CA: CitaPapa[] = [
  { texto: 'La pau sigui amb tots vosaltres. Gràcies, estimats germans, per aquesta trobada. La pau de Crist ressuscitat, pau desarmada i desarmant, humil i perseverant.', ocasion: 'Primera salutació des de la Lògia Vaticana', fecha: '2025-05-08' },
  { texto: 'He triat el nom de Lleó perquè el Papa Lleó XIII, amb la històrica encíclica Rerum Novarum, va abordar la qüestió social en el context de la primera gran revolució industrial. Avui l\'Església ofereix a tothom el seu patrimoni de doctrina social per respondre a una altra revolució industrial: la de la intel·ligència artificial.', ocasion: 'Discurs al Col·legi Cardenalici', fecha: '2025-05-10' },
]
const CITAS_GL: CitaPapa[] = [
  { texto: 'A paz sexa con todos vós. Grazas, queridos irmáns, por este encontro. A paz de Cristo resucitado, paz desarmada e desarmante, humilde e perseverante.', ocasion: 'Primeira saudación desde a Loggia Vaticana', fecha: '2025-05-08' },
  { texto: 'Escollín o nome de León porque o Papa León XIII, coa histórica encíclica Rerum Novarum, abordou a cuestión social no contexto da primeira gran revolución industrial. Hoxe a Igrexa ofrécelle a todos o seu patrimonio de doutrina social para responder a outra revolución industrial: a da intelixencia artificial.', ocasion: 'Discurso ao Colexio Cardenalicio', fecha: '2025-05-10' },
]
const CITAS_EU: CitaPapa[] = [
  { texto: 'Bakea zuekin guztiekin. Eskerrik asko, anai-arreba maiteak, topaketa honengatik. Berpiztutako Kristoren bakea, bake desarmatua eta desarmatzailea, apala eta irmoa.', ocasion: 'Lehen agurra Vatikano Loggiatik', fecha: '2025-05-08' },
  { texto: 'Leon izena aukeratu dut Leon XIII.ak Rerum Novarum entziklika historikoarekin gizarte-gaia lehen industria-iraultza handiaren testuinguruan landu zuelako. Gaur Elizak bere doktrina sozialaren ondarea eskaintzen du beste industria-iraultza bati erantzuteko: adimen artifizialarena.', ocasion: 'Kardinalen Kolegioari hitzaldia', fecha: '2025-05-10' },
]

const CITAS_EN: CitaPapa[] = [
  { texto: 'Peace be with all of you. Thank you, dear brothers, for this gathering. The peace of the risen Christ, an unarmed and disarming peace, humble and persevering.', ocasion: 'First greeting from the Vatican Loggia', fecha: '2025-05-08' },
  { texto: 'I have chosen the name Leo because Pope Leo XIII, with the historic encyclical Rerum Novarum, addressed the social question in the context of the first great industrial revolution. Today the Church offers to all her heritage of social doctrine to respond to another industrial revolution: that of artificial intelligence.', ocasion: 'Address to the College of Cardinals', fecha: '2025-05-10' },
]

export function getCitasRelevantes(locale: Locale): CitaPapa[] {
  switch (locale) {
    case 'en': return CITAS_EN
    case 'it': return CITAS_IT
    case 'fr': return CITAS_FR
    case 'de': return CITAS_DE
    case 'pt': return CITAS_PT
    case 'ca': return CITAS_CA
    case 'gl': return CITAS_GL
    case 'eu': return CITAS_EU
    default: return citasRelevantes
  }
}

// =============================================================================
// Prioridades del magisterio — EN (breve, resumen)
// =============================================================================

const PRIORIDADES_IT: PrioridadMagisterio[] = [
  { titulo: 'Dottrina sociale e giustizia economica', descripcion: 'Eredità diretta di Leone XIII: rinnovamento della Rerum Novarum per il XXI secolo. Lavoro dignitoso, divario ricchi-poveri, tecnologia al servizio dell\'uomo.' },
  { titulo: 'Intelligenza artificiale e dignità umana', descripcion: 'Il Papa ha menzionato più volte che il nome "Leone" evoca anche la sfida dell\'IA, come lo fu l\'industrializzazione al tempo di Leone XIII.' },
  { titulo: 'Migrazioni e accoglienza', descripcion: 'Figlio di una famiglia con radici migranti e vescovo in Perù, pone la migrazione come priorità pastorale. Collegamento con la visita alle Canarie.' },
  { titulo: 'Unità e comunione ecclesiale', descripcion: 'Il suo motto "In illo uno unum" esprime un programma pontificio centrato sull\'unità della Chiesa in un momento di tensioni interne.' },
  { titulo: 'Vicinanza pastorale e sinodalità', descripcion: 'Continuità con la linea sinodale di Papa Francesco: Chiesa che ascolta, Chiesa in cammino, decentralizzazione reale.' },
]
const PRIORIDADES_FR: PrioridadMagisterio[] = [
  { titulo: 'Doctrine sociale et justice économique', descripcion: 'Héritage direct de Léon XIII : renouvellement de Rerum Novarum pour le XXIe siècle. Travail digne, fossé riches-pauvres, technologie au service de l\'homme.' },
  { titulo: 'Intelligence artificielle et dignité humaine', descripcion: 'Le Pape a mentionné plusieurs fois que le nom "Léon" évoque aussi le défi de l\'IA, comme l\'industrialisation l\'était à l\'époque de Léon XIII.' },
  { titulo: 'Migrations et accueil', descripcion: 'Fils d\'une famille aux racines migrantes et évêque au Pérou, il place la migration comme priorité pastorale. Lien avec la visite aux Canaries.' },
  { titulo: 'Unité et communion ecclésiale', descripcion: 'Sa devise "In illo uno unum" exprime un programme pontifical centré sur l\'unité de l\'Église à un moment de tensions internes.' },
  { titulo: 'Proximité pastorale et synodalité', descripcion: 'Continuité avec la ligne synodale du Pape François : Église qui écoute, Église en marche, décentralisation réelle.' },
]
const PRIORIDADES_DE: PrioridadMagisterio[] = [
  { titulo: 'Soziallehre und wirtschaftliche Gerechtigkeit', descripcion: 'Direktes Erbe Leo XIII.: Erneuerung von Rerum Novarum für das 21. Jahrhundert. Menschenwürdige Arbeit, Kluft zwischen Arm und Reich, Technik im Dienst des Menschen.' },
  { titulo: 'Künstliche Intelligenz und Menschenwürde', descripcion: 'Der Papst hat mehrfach erwähnt, dass der Name "Leo" auch die KI-Herausforderung heraufbeschwört, wie es die Industrialisierung zu Zeiten Leos XIII. war.' },
  { titulo: 'Migration und Aufnahme', descripcion: 'Als Sohn einer Familie mit Migrationswurzeln und Bischof in Peru macht er Migration zur pastoralen Priorität. Verbindung zum Besuch der Kanaren.' },
  { titulo: 'Einheit und kirchliche Gemeinschaft', descripcion: 'Sein Motto "In illo uno unum" drückt ein pontifikales Programm aus, das auf die Einheit der Kirche in Zeiten innerer Spannungen ausgerichtet ist.' },
  { titulo: 'Pastorale Nähe und Synodalität', descripcion: 'Kontinuität mit der synodalen Linie von Papst Franziskus: zuhörende Kirche, Kirche im Gehen, echte Dezentralisierung.' },
]
const PRIORIDADES_PT: PrioridadMagisterio[] = [
  { titulo: 'Doutrina social e justiça económica', descripcion: 'Herança direta de Leão XIII: renovação da Rerum Novarum para o século XXI. Trabalho digno, fosso ricos-pobres, tecnologia ao serviço do homem.' },
  { titulo: 'Inteligência artificial e dignidade humana', descripcion: 'O Papa mencionou várias vezes que o nome "Leão" evoca também o desafio da IA, como a industrialização o foi nos tempos de Leão XIII.' },
  { titulo: 'Migrações e acolhimento', descripcion: 'Filho de uma família com raízes migrantes e bispo no Peru, coloca a migração como prioridade pastoral. Ligação com a visita às Canárias.' },
  { titulo: 'Unidade e comunhão eclesial', descripcion: 'O seu lema "In illo uno unum" expressa um programa pontifício centrado na unidade da Igreja num momento de tensões internas.' },
  { titulo: 'Proximidade pastoral e sinodalidade', descripcion: 'Continuidade com a linha sinodal do Papa Francisco: Igreja que escuta, Igreja a caminho, descentralização real.' },
]
const PRIORIDADES_CA: PrioridadMagisterio[] = [
  { titulo: 'Doctrina social i justícia econòmica', descripcion: 'Herència directa de Lleó XIII: renovació de Rerum Novarum per al segle XXI. Treball digne, bretxa rics-pobres, tecnologia al servei de l\'home.' },
  { titulo: 'Intel·ligència artificial i dignitat humana', descripcion: 'El Papa ha esmentat diverses vegades que el nom "Lleó" evoca també el repte de la IA, com ho va ser la industrialització en temps de Lleó XIII.' },
  { titulo: 'Migracions i acollida', descripcion: 'Fill d\'una família amb arrels migrants i bisbe al Perú, situa la migració com a prioritat pastoral. Vinculació amb la visita a les Canàries.' },
  { titulo: 'Unitat i comunió eclesial', descripcion: 'El seu lema "In illo uno unum" expressa un programa pontifici centrat en la unitat de l\'Església en un moment de tensions internes.' },
  { titulo: 'Proximitat pastoral i sinodalitat', descripcion: 'Continuïtat amb la línia sinodal del Papa Francesc: Església que escolta, Església en camí, descentralització real.' },
]
const PRIORIDADES_GL: PrioridadMagisterio[] = [
  { titulo: 'Doutrina social e xustiza económica', descripcion: 'Herdanza directa de León XIII: renovación da Rerum Novarum para o século XXI. Traballo digno, fenda ricos-pobres, tecnoloxía ao servizo do home.' },
  { titulo: 'Intelixencia artificial e dignidade humana', descripcion: 'O Papa mencionou varias veces que o nome "León" evoca tamén o reto da IA, como o foi a industrialización nos tempos de León XIII.' },
  { titulo: 'Migracións e acollida', descripcion: 'Fillo dunha familia con raíces migrantes e bispo no Perú, sitúa a migración como prioridade pastoral. Vinculación coa visita ás Canarias.' },
  { titulo: 'Unidade e comuñón eclesial', descripcion: 'O seu lema "In illo uno unum" expresa un programa pontificio centrado na unidade da Igrexa nun momento de tensións internas.' },
  { titulo: 'Proximidade pastoral e sinodalidade', descripcion: 'Continuidade coa liña sinodal do Papa Francisco: Igrexa que escoita, Igrexa en camiño, descentralización real.' },
]
const PRIORIDADES_EU: PrioridadMagisterio[] = [
  { titulo: 'Doktrina soziala eta justizia ekonomikoa', descripcion: 'Leon XIII.aren herentzia zuzena: Rerum Novarumen berritzea XXI. menderako. Lan duina, aberats-pobreen arteko arrakala, teknologia gizakiaren zerbitzura.' },
  { titulo: 'Adimen artifiziala eta giza duintasuna', descripcion: 'Aita Santuak hainbatetan aipatu du "Leon" izenak AAren erronka ere gogorarazten duela, industrializazioa izan zen bezala Leon XIII.aren garaian.' },
  { titulo: 'Migrazioak eta harrera', descripcion: 'Migratzaile sustraidun familiaren semea eta Peruko gotzaina, migrazioa lehentasun pastoral gisa kokatzen du. Kanarietarako bisitarekin lotura.' },
  { titulo: 'Batasuna eta komunio ekleziala', descripcion: 'Bere "In illo uno unum" lemak barne-tentsioen uneko Elizaren batasunean ardaztutako pontifikatu-programa adierazten du.' },
  { titulo: 'Hurbiltasun pastorala eta sinodalitatea', descripcion: 'Frantzisko Aita Santuaren lerro sinodalaren jarraipena: entzuten duen Eliza, bidean doan Eliza, benetako deszentralizazioa.' },
]

const PRIORIDADES_EN: PrioridadMagisterio[] = [
  { titulo: 'Social doctrine and economic justice', descripcion: 'Direct inheritance of Leo XIII: renewal of Rerum Novarum for the 21st century. Decent work, gap between rich and poor, technology in service of humanity.' },
  { titulo: 'Artificial intelligence and human dignity', descripcion: 'The Pope has mentioned several times that the name "Leo" also evokes the AI challenge, just as industrialisation was in Leo XIII\'s time.' },
  { titulo: 'Migration and welcome', descripcion: 'Son of a migrant-rooted family and bishop in Peru, he places migration as a pastoral priority. Connection with the Canary Islands visit.' },
  { titulo: 'Unity and ecclesial communion', descripcion: 'His motto "In illo uno unum" expresses a pontifical programme centred on Church unity at a time of internal tensions.' },
  { titulo: 'Pastoral closeness and synodality', descripcion: 'Continuity with Pope Francis\'s synodal line: a listening Church, a Church on the way, real decentralisation.' },
]

export function getPrioridadesMagisterio(locale: Locale): PrioridadMagisterio[] {
  switch (locale) {
    case 'en': return PRIORIDADES_EN
    case 'it': return PRIORIDADES_IT
    case 'fr': return PRIORIDADES_FR
    case 'de': return PRIORIDADES_DE
    case 'pt': return PRIORIDADES_PT
    case 'ca': return PRIORIDADES_CA
    case 'gl': return PRIORIDADES_GL
    case 'eu': return PRIORIDADES_EU
    default: return prioridadesMagisterio
  }
}

export { biografiaPapa, prioridadesMagisterio, citasRelevantes, raicesChicago, familiaPapa }
export type { TimelineEntry, PosicionMagisterio, FaqPapa, PrioridadMagisterio, CitaPapa, MiembroFamilia }
