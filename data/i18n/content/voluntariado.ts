/**
 * Traducciones del contenido de voluntariado a los 8 idiomas no-ES.
 */

import type { Locale } from '@/data/i18n/types'
import {
  areasVoluntariado,
  requisitos,
  beneficios,
  enlacesOficialesVoluntariado,
  type AreaVoluntariado,
  type RequisitoVoluntario,
  type BeneficioVoluntario,
} from '@/data/voluntariado'

const AREAS_EN: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Welcome and information', descripcion: 'First contact with pilgrims. Information points at stations, airports and event venues.', perfilBuscado: 'Languages (essential English, Italian or French appreciated), warm manners, time availability.', numPlazasAprox: '1,500-2,000' },
  { id: 'logistica', titulo: 'Event logistics', descripcion: 'Assembly and dismantling of venues, access management, material distribution, crowd flow control.', perfilBuscado: 'Physical condition, over 18, teamwork, availability from the day before the event.', numPlazasAprox: '3,000-4,000' },
  { id: 'liturgia', titulo: 'Liturgy and celebrations', descripcion: 'Support for Eucharistic celebrations: singers, readers, communion distribution, altar server teams.', perfilBuscado: 'Basic liturgical formation, catechists, seminarians, parish choir members.', numPlazasAprox: '800-1,000' },
  { id: 'sanitario', titulo: 'Medical teams', descripcion: 'First-aid stations, care for pilgrims with health problems during mass events.', perfilBuscado: 'Medical, nursing, physiotherapy professionals or students. Basic life support training.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Translation and interpretation', descripcion: 'Support for international groups. Accompaniment of non-Spanish-speaking pilgrims during events.', perfilBuscado: 'C1 level in at least one foreign language. Priority: Italian, English, French, Portuguese, German.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Communication and social media', descripcion: 'Photography, video, social media teams, media attention, live event coverage.', perfilBuscado: 'Training or experience in communication, journalism, audiovisual, social media management.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Family and children care', descripcion: 'Rest spaces for families, entertainment for minors, breastfeeding and changing points.', perfilBuscado: 'Experience with minors (camps, catechesis), patience, energy, over 18.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Accessibility and reduced-mobility care', descripcion: 'Accompaniment of persons with reduced mobility, management of accessible areas, sign language interpreters.', perfilBuscado: 'Sensitivity, disability training appreciated, sign language highly valued, physical strength for wheelchairs.', numPlazasAprox: '300-400' },
]

const AREAS_IT: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Accoglienza e informazione', descripcion: 'Primo contatto con i pellegrini. Punti informativi nelle stazioni, aeroporti e luoghi delle celebrazioni.', perfilBuscado: 'Lingue (inglese imprescindibile, italiano o francese apprezzati), tratto cordiale, disponibilità di tempo.', numPlazasAprox: '1.500-2.000' },
  { id: 'logistica', titulo: 'Logistica degli eventi', descripcion: 'Allestimento e smontaggio delle sedi, gestione degli accessi, distribuzione del materiale, controllo del flusso di persone.', perfilBuscado: 'Buona forma fisica, maggiorenni, lavoro di squadra, disponibilità dal giorno precedente all\'evento.', numPlazasAprox: '3.000-4.000' },
  { id: 'liturgia', titulo: 'Liturgia e celebrazioni', descripcion: 'Supporto alle celebrazioni eucaristiche: cantori, lettori, distribuzione della Comunione, équipe di chierichetti.', perfilBuscado: 'Formazione liturgica di base, catechisti, seminaristi, membri di cori parrocchiali.', numPlazasAprox: '800-1.000' },
  { id: 'sanitario', titulo: 'Équipe sanitarie', descripcion: 'Punti di pronto soccorso, assistenza ai pellegrini con problemi di salute durante gli eventi di massa.', perfilBuscado: 'Professionisti o studenti di medicina, infermieristica, fisioterapia. Formazione in soccorso vitale di base.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Traduzione e interpretariato', descripcion: 'Supporto a gruppi internazionali. Accompagnamento di pellegrini non ispanofoni durante gli eventi.', perfilBuscado: 'Livello C1 in almeno una lingua straniera. Priorità: italiano, inglese, francese, portoghese, tedesco.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Comunicazione e social media', descripcion: 'Équipe di fotografia, video, social media, attenzione ai media, copertura in diretta degli eventi.', perfilBuscado: 'Formazione o esperienza in comunicazione, giornalismo, audiovisivi, gestione di social media.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Cura di famiglie e bambini', descripcion: 'Spazi di riposo per famiglie, animazione per i minori, punti di allattamento e cambio.', perfilBuscado: 'Esperienza con minori (campi, catechesi), pazienza, energia, maggiorenni.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Accessibilità e cura della mobilità ridotta', descripcion: 'Accompagnamento di persone con mobilità ridotta, gestione delle zone accessibili, interpreti della lingua dei segni.', perfilBuscado: 'Sensibilità, formazione sulla disabilità apprezzata, lingua dei segni molto valorizzata, forza fisica per sedie a rotelle.', numPlazasAprox: '300-400' },
]

const AREAS_FR: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Accueil et information', descripcion: 'Premier contact avec les pèlerins. Points d\'information dans les gares, aéroports et lieux de célébration.', perfilBuscado: 'Langues (anglais indispensable, italien ou français apprécié), accueil chaleureux, disponibilité.', numPlazasAprox: '1 500-2 000' },
  { id: 'logistica', titulo: 'Logistique des événements', descripcion: 'Montage et démontage des sites, gestion des accès, distribution de matériel, contrôle du flux de personnes.', perfilBuscado: 'Bonne condition physique, majeur, travail en équipe, disponibilité dès la veille de l\'événement.', numPlazasAprox: '3 000-4 000' },
  { id: 'liturgia', titulo: 'Liturgie et célébrations', descripcion: 'Soutien aux célébrations eucharistiques : chantres, lecteurs, distribution de la Communion, équipes d\'enfants de chœur.', perfilBuscado: 'Formation liturgique de base, catéchistes, séminaristes, membres de chorales paroissiales.', numPlazasAprox: '800-1 000' },
  { id: 'sanitario', titulo: 'Équipes médicales', descripcion: 'Postes de premiers secours, prise en charge des pèlerins ayant des problèmes de santé lors des événements de masse.', perfilBuscado: 'Professionnels ou étudiants en médecine, soins infirmiers, kinésithérapie. Formation aux gestes de premiers secours.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Traduction et interprétation', descripcion: 'Soutien aux groupes internationaux. Accompagnement de pèlerins non hispanophones pendant les événements.', perfilBuscado: 'Niveau C1 dans au moins une langue étrangère. Priorité : italien, anglais, français, portugais, allemand.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Communication et réseaux sociaux', descripcion: 'Équipes de photographie, vidéo, réseaux sociaux, accueil des médias, couverture en direct des événements.', perfilBuscado: 'Formation ou expérience en communication, journalisme, audiovisuel, gestion des réseaux sociaux.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Soin des familles et des enfants', descripcion: 'Espaces de repos pour les familles, animation pour les mineurs, points d\'allaitement et de change.', perfilBuscado: 'Expérience avec les mineurs (camps, catéchèse), patience, énergie, majeur.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Accessibilité et mobilité réduite', descripcion: 'Accompagnement des personnes à mobilité réduite, gestion des zones accessibles, interprètes en langue des signes.', perfilBuscado: 'Sensibilité, formation au handicap appréciée, langue des signes très valorisée, force physique pour les fauteuils roulants.', numPlazasAprox: '300-400' },
]

const AREAS_DE: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Empfang und Information', descripcion: 'Erster Kontakt mit den Pilgern. Informationspunkte an Bahnhöfen, Flughäfen und Veranstaltungsorten.', perfilBuscado: 'Sprachen (Englisch unerlässlich, Italienisch oder Französisch erwünscht), herzlicher Umgang, Zeitverfügbarkeit.', numPlazasAprox: '1.500-2.000' },
  { id: 'logistica', titulo: 'Veranstaltungslogistik', descripcion: 'Auf- und Abbau der Veranstaltungsorte, Zugangsverwaltung, Materialverteilung, Kontrolle der Personenströme.', perfilBuscado: 'Gute körperliche Verfassung, volljährig, Teamarbeit, Verfügbarkeit ab dem Vortag des Ereignisses.', numPlazasAprox: '3.000-4.000' },
  { id: 'liturgia', titulo: 'Liturgie und Feiern', descripcion: 'Unterstützung bei den Eucharistiefeiern: Sänger, Lektoren, Kommunionspendung, Ministrantengruppen.', perfilBuscado: 'Liturgische Grundbildung, Katecheten, Seminaristen, Mitglieder von Pfarrchören.', numPlazasAprox: '800-1.000' },
  { id: 'sanitario', titulo: 'Sanitätsteams', descripcion: 'Erste-Hilfe-Stationen, Betreuung von Pilgern mit gesundheitlichen Problemen bei Massenveranstaltungen.', perfilBuscado: 'Fachkräfte oder Studierende der Medizin, Krankenpflege, Physiotherapie. Grundausbildung in lebensrettenden Sofortmaßnahmen.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Übersetzung und Dolmetschen', descripcion: 'Unterstützung internationaler Gruppen. Begleitung nicht-spanischsprachiger Pilger während der Veranstaltungen.', perfilBuscado: 'Niveau C1 in mindestens einer Fremdsprache. Priorität: Italienisch, Englisch, Französisch, Portugiesisch, Deutsch.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Kommunikation und soziale Medien', descripcion: 'Foto-, Video- und Social-Media-Teams, Medienbetreuung, Live-Berichterstattung der Veranstaltungen.', perfilBuscado: 'Ausbildung oder Erfahrung in Kommunikation, Journalismus, Audiovisuellem, Social-Media-Management.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Familien- und Kinderbetreuung', descripcion: 'Ruhezonen für Familien, Animation für Minderjährige, Still- und Wickelpunkte.', perfilBuscado: 'Erfahrung mit Minderjährigen (Lager, Katechese), Geduld, Energie, volljährig.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Barrierefreiheit und Mobilitätshilfe', descripcion: 'Begleitung von Personen mit eingeschränkter Mobilität, Verwaltung der barrierefreien Zonen, Gebärdensprachdolmetscher.', perfilBuscado: 'Einfühlungsvermögen, Ausbildung im Bereich Behinderung erwünscht, Gebärdensprache hoch geschätzt, körperliche Kraft für Rollstühle.', numPlazasAprox: '300-400' },
]

const AREAS_PT: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Acolhimento e informação', descripcion: 'Primeiro contacto com os peregrinos. Pontos de informação nas estações, aeroportos e locais das celebrações.', perfilBuscado: 'Línguas (inglês imprescindível, italiano ou francês valorizados), trato cordial, disponibilidade de tempo.', numPlazasAprox: '1.500-2.000' },
  { id: 'logistica', titulo: 'Logística dos eventos', descripcion: 'Montagem e desmontagem dos recintos, gestão de acessos, distribuição de material, controlo do fluxo de pessoas.', perfilBuscado: 'Boa condição física, maiores de idade, trabalho em equipa, disponibilidade desde o dia anterior ao evento.', numPlazasAprox: '3.000-4.000' },
  { id: 'liturgia', titulo: 'Liturgia e celebrações', descripcion: 'Apoio às celebrações eucarísticas: cantores, leitores, distribuição da Comunhão, equipas de acólitos.', perfilBuscado: 'Formação litúrgica básica, catequistas, seminaristas, membros de coros paroquiais.', numPlazasAprox: '800-1.000' },
  { id: 'sanitario', titulo: 'Equipas sanitárias', descripcion: 'Postos de primeiros socorros, assistência a peregrinos com problemas de saúde durante os eventos de massa.', perfilBuscado: 'Profissionais ou estudantes de medicina, enfermagem, fisioterapia. Formação em suporte básico de vida.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Tradução e interpretação', descripcion: 'Apoio a grupos internacionais. Acompanhamento de peregrinos não hispanofalantes durante os eventos.', perfilBuscado: 'Nível C1 em pelo menos uma língua estrangeira. Prioridade: italiano, inglês, francês, português, alemão.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Comunicação e redes sociais', descripcion: 'Equipas de fotografia, vídeo, redes sociais, atendimento aos meios, cobertura em direto dos eventos.', perfilBuscado: 'Formação ou experiência em comunicação, jornalismo, audiovisual, gestão de redes sociais.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Atendimento a famílias e crianças', descripcion: 'Espaços de descanso para famílias, animação para menores, pontos de amamentação e mudas.', perfilBuscado: 'Experiência com menores (acampamentos, catequese), paciência, energia, maiores de idade.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Acessibilidade e mobilidade reduzida', descripcion: 'Acompanhamento de pessoas com mobilidade reduzida, gestão das zonas acessíveis, intérpretes de língua gestual.', perfilBuscado: 'Sensibilidade, formação em deficiência valorizada, língua gestual muito valorizada, força física para cadeiras de rodas.', numPlazasAprox: '300-400' },
]

const AREAS_CA: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Acollida i informació', descripcion: 'Primer contacte amb els pelegrins. Punts d\'informació a estacions, aeroports i recintes dels esdeveniments.', perfilBuscado: 'Llengües (anglès imprescindible, italià o francès valorats), tracte càlid, disponibilitat de temps.', numPlazasAprox: '1.500-2.000' },
  { id: 'logistica', titulo: 'Logística dels esdeveniments', descripcion: 'Muntatge i desmuntatge dels recintes, gestió d\'accessos, distribució de material, control del flux de persones.', perfilBuscado: 'Bona forma física, majors d\'edat, treball en equip, disponibilitat des del dia anterior a l\'esdeveniment.', numPlazasAprox: '3.000-4.000' },
  { id: 'liturgia', titulo: 'Litúrgia i celebracions', descripcion: 'Suport a les celebracions eucarístiques: cantors, lectors, distribució de la Comunió, equips d\'escolans.', perfilBuscado: 'Formació litúrgica bàsica, catequistes, seminaristes, membres de cors parroquials.', numPlazasAprox: '800-1.000' },
  { id: 'sanitario', titulo: 'Equips sanitaris', descripcion: 'Punts de primers auxilis, atenció a pelegrins amb problemes de salut durant els esdeveniments de masses.', perfilBuscado: 'Professionals o estudiants de medicina, infermeria, fisioteràpia. Formació en suport vital bàsic.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Traducció i interpretació', descripcion: 'Suport a grups internacionals. Acompanyament de pelegrins no hispanoparlants durant els esdeveniments.', perfilBuscado: 'Nivell C1 en almenys una llengua estrangera. Prioritat: italià, anglès, francès, portuguès, alemany.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Comunicació i xarxes socials', descripcion: 'Equips de fotografia, vídeo, xarxes socials, atenció als mitjans, cobertura en directe dels esdeveniments.', perfilBuscado: 'Formació o experiència en comunicació, periodisme, audiovisuals, gestió de xarxes socials.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Atenció a famílies i infants', descripcion: 'Espais de descans per a famílies, animació per a menors, punts de lactància i canvi de bolquers.', perfilBuscado: 'Experiència amb menors (campaments, catequesi), paciència, energia, majors d\'edat.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Accessibilitat i mobilitat reduïda', descripcion: 'Acompanyament de persones amb mobilitat reduïda, gestió de les zones accessibles, intèrprets de llengua de signes.', perfilBuscado: 'Sensibilitat, formació en discapacitat valorada, llengua de signes molt valorada, força física per a cadires de rodes.', numPlazasAprox: '300-400' },
]

const AREAS_GL: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Acollida e información', descripcion: 'Primeiro contacto cos peregrinos. Puntos de información en estacións, aeroportos e recintos dos eventos.', perfilBuscado: 'Linguas (inglés imprescindible, italiano ou francés valorados), trato cordial, dispoñibilidade de tempo.', numPlazasAprox: '1.500-2.000' },
  { id: 'logistica', titulo: 'Loxística dos eventos', descripcion: 'Montaxe e desmontaxe dos recintos, xestión de accesos, distribución de material, control do fluxo de persoas.', perfilBuscado: 'Boa forma física, maiores de idade, traballo en equipa, dispoñibilidade desde o día anterior ao evento.', numPlazasAprox: '3.000-4.000' },
  { id: 'liturgia', titulo: 'Liturxia e celebracións', descripcion: 'Apoio ás celebracións eucarísticas: cantores, lectores, distribución da Comuñón, equipas de monaguillos.', perfilBuscado: 'Formación litúrxica básica, catequistas, seminaristas, membros de coros parroquiais.', numPlazasAprox: '800-1.000' },
  { id: 'sanitario', titulo: 'Equipas sanitarias', descripcion: 'Puntos de primeiros auxilios, atención a peregrinos con problemas de saúde durante os eventos de masas.', perfilBuscado: 'Profesionais ou estudantes de medicina, enfermaría, fisioterapia. Formación en soporte vital básico.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Tradución e interpretación', descripcion: 'Apoio a grupos internacionais. Acompañamento de peregrinos non hispanofalantes durante os eventos.', perfilBuscado: 'Nivel C1 en polo menos unha lingua estranxeira. Prioridade: italiano, inglés, francés, portugués, alemán.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Comunicación e redes sociais', descripcion: 'Equipas de fotografía, vídeo, redes sociais, atención aos medios, cobertura en directo dos eventos.', perfilBuscado: 'Formación ou experiencia en comunicación, xornalismo, audiovisual, xestión de redes sociais.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Atención a familias e nenos', descripcion: 'Espazos de descanso para familias, animación para menores, puntos de lactación e cambio.', perfilBuscado: 'Experiencia con menores (campamentos, catequese), paciencia, enerxía, maiores de idade.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Accesibilidade e mobilidade reducida', descripcion: 'Acompañamento de persoas con mobilidade reducida, xestión das zonas accesibles, intérpretes de lingua de signos.', perfilBuscado: 'Sensibilidade, formación en discapacidade valorada, lingua de signos moi valorada, forza física para cadeiras de rodas.', numPlazasAprox: '300-400' },
]

const AREAS_EU: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Harrera eta informazioa', descripcion: 'Erromesekiko lehen harremana. Geltoki, aireportu eta ospakizunen lekuetako informazio-puntuak.', perfilBuscado: 'Hizkuntzak (ingelesa ezinbestekoa, italiera edo frantsesa balioesten dira), tratu beroa, denbora-erabilgarritasuna.', numPlazasAprox: '1.500-2.000' },
  { id: 'logistica', titulo: 'Ekitaldien logistika', descripcion: 'Egoitzen muntaketa eta desmuntaketa, sarbideen kudeaketa, materialaren banaketa, jende-fluxuaren kontrola.', perfilBuscado: 'Forma fisiko ona, adinez nagusi, taldeko lana, ekitaldiaren bezperatik erabilgarritasuna.', numPlazasAprox: '3.000-4.000' },
  { id: 'liturgia', titulo: 'Liturgia eta ospakizunak', descripcion: 'Eukaristia-ospakizunei laguntza: kantariak, irakurleak, Jaunartzearen banaketa, monagilo-taldeak.', perfilBuscado: 'Liturgia-prestakuntza oinarrizkoa, katekistak, seminaristak, parrokia-koruko kideak.', numPlazasAprox: '800-1.000' },
  { id: 'sanitario', titulo: 'Sorospen-taldeak', descripcion: 'Lehen sorospen-puntuak, masa-ekitaldietan osasun-arazoak dituzten erromesen arreta.', perfilBuscado: 'Mediku, erizain, fisioterapeuta profesional edo ikasleak. Oinarrizko bizia eusteko prestakuntza.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Itzulpena eta interpretazioa', descripcion: 'Nazioarteko taldeei laguntza. Ekitaldietan zehar gaztelaniaz mintzatzen ez diren erromesen laguntza.', perfilBuscado: 'C1 maila gutxienez atzerriko hizkuntza batean. Lehentasuna: italiera, ingelesa, frantsesa, portugesa, alemana.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Komunikazioa eta sare sozialak', descripcion: 'Argazkilaritza, bideo eta sare sozialen taldeak, hedabideen arreta, ekitaldien zuzeneko estaldura.', perfilBuscado: 'Komunikazio, kazetaritza, ikus-entzunezkoetan edo sare sozialen kudeaketan prestakuntza edo esperientzia.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Familien eta haurren arreta', descripcion: 'Familientzako atsedenguneak, adingabeentzako animazioa, edoskitze- eta aldatze-puntuak.', perfilBuscado: 'Adingabeekiko esperientzia (kanpamentuak, katekesia), pazientzia, energia, adinez nagusi.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Irisgarritasuna eta mugikortasun mugatuaren arreta', descripcion: 'Mugikortasun mugatua duten pertsonen laguntza, eremu irisgarrien kudeaketa, zeinu-hizkuntzaren interpreteak.', perfilBuscado: 'Sentiberatasuna, desgaitasunaren prestakuntza balioetsia, zeinu-hizkuntza oso balioetsia, gurpil-aulkien indar fisikoa.', numPlazasAprox: '300-400' },
]

const REQUISITOS_EN: RequisitoVoluntario[] = [
  { titulo: 'Over 18 years old', descripcion: 'Some areas (logistics, medical) require legal age. Under 16-17 only with parental authorisation and in specific areas.' },
  { titulo: 'Mandatory prior training', descripcion: 'Between 8 and 16 hours depending on area. Combination of online (Pope Leo XIV background, trip keys) and in-person (protocols, zones, safety).' },
  { titulo: 'Full availability', descripcion: 'Most areas require being available for the 4 days of the trip (6-9 June in Madrid, then by city) or at least the 2 days of the assigned event.' },
  { titulo: 'Commitment and punctuality', descripcion: 'Signed attendance commitment. Late cancellation affects planned services for thousands of pilgrims.' },
]

const REQUISITOS_IT: RequisitoVoluntario[] = [
  { titulo: 'Maggiore età', descripcion: 'Alcune aree (logistica, sanitaria) richiedono la maggiore età. Minori di 16-17 anni solo con autorizzazione dei genitori e in aree specifiche.' },
  { titulo: 'Formazione preliminare obbligatoria', descripcion: 'Tra 8 e 16 ore a seconda dell\'area. Combinazione online (biografia di Papa Leone XIV, punti chiave del viaggio) e in presenza (protocolli, zone, sicurezza).' },
  { titulo: 'Disponibilità totale', descripcion: 'La maggior parte delle aree richiede disponibilità per i 4 giorni del viaggio (6-9 giugno a Madrid, poi per città) o almeno i 2 giorni dell\'evento assegnato.' },
  { titulo: 'Impegno e puntualità', descripcion: 'Impegno di partecipazione firmato. Una rinuncia tardiva incide su servizi programmati per migliaia di pellegrini.' },
]

const REQUISITOS_FR: RequisitoVoluntario[] = [
  { titulo: 'Majeur', descripcion: 'Certains domaines (logistique, médical) exigent la majorité. Les 16-17 ans uniquement avec autorisation parentale et dans des secteurs spécifiques.' },
  { titulo: 'Formation préalable obligatoire', descripcion: 'Entre 8 et 16 heures selon le domaine. Combinaison en ligne (parcours du Pape Léon XIV, points clés du voyage) et en présentiel (protocoles, zones, sécurité).' },
  { titulo: 'Disponibilité totale', descripcion: 'La plupart des domaines exigent une disponibilité pour les 4 jours du voyage (6-9 juin à Madrid, puis par ville) ou au moins les 2 jours de l\'événement assigné.' },
  { titulo: 'Engagement et ponctualité', descripcion: 'Engagement de présence signé. Un désistement tardif affecte des services planifiés pour des milliers de pèlerins.' },
]

const REQUISITOS_DE: RequisitoVoluntario[] = [
  { titulo: 'Volljährigkeit', descripcion: 'Manche Bereiche (Logistik, Sanität) setzen Volljährigkeit voraus. 16- bis 17-Jährige nur mit Einverständnis der Eltern und in bestimmten Bereichen.' },
  { titulo: 'Verpflichtende Vorausbildung', descripcion: 'Zwischen 8 und 16 Stunden je nach Bereich. Mischform aus Online (Biografie von Papst Leo XIV., Eckpunkte der Reise) und Präsenz (Protokolle, Zonen, Sicherheit).' },
  { titulo: 'Volle Verfügbarkeit', descripcion: 'Die meisten Bereiche verlangen Verfügbarkeit für die 4 Tage der Reise (6.-9. Juni in Madrid, dann je Stadt) oder zumindest die 2 Tage des zugewiesenen Ereignisses.' },
  { titulo: 'Verbindlichkeit und Pünktlichkeit', descripcion: 'Unterzeichnete Teilnahmeerklärung. Ein verspäteter Rückzug beeinträchtigt Dienste, die für Tausende Pilger geplant sind.' },
]

const REQUISITOS_PT: RequisitoVoluntario[] = [
  { titulo: 'Maior de idade', descripcion: 'Algumas áreas (logística, sanitária) exigem maioridade. Menores de 16-17 anos apenas com autorização parental e em áreas específicas.' },
  { titulo: 'Formação prévia obrigatória', descripcion: 'Entre 8 e 16 horas consoante a área. Combinação online (biografia do Papa Leão XIV, pontos-chave da viagem) e presencial (protocolos, zonas, segurança).' },
  { titulo: 'Disponibilidade total', descripcion: 'A maioria das áreas exige disponibilidade para os 4 dias da viagem (6-9 de junho em Madrid, depois por cidade) ou pelo menos os 2 dias do evento atribuído.' },
  { titulo: 'Compromisso e pontualidade', descripcion: 'Compromisso de presença assinado. Uma desistência tardia afeta serviços programados para milhares de peregrinos.' },
]

const REQUISITOS_CA: RequisitoVoluntario[] = [
  { titulo: 'Major d\'edat', descripcion: 'Algunes àrees (logística, sanitària) exigeixen la majoria d\'edat. Menors de 16-17 només amb autorització parental i en àrees específiques.' },
  { titulo: 'Formació prèvia obligatòria', descripcion: 'Entre 8 i 16 hores segons l\'àrea. Combinació online (trajectòria del Papa Lleó XIV, claus del viatge) i presencial (protocols, zones, seguretat).' },
  { titulo: 'Disponibilitat total', descripcion: 'La majoria d\'àrees requereixen disponibilitat per als 4 dies del viatge (6-9 de juny a Madrid, després per ciutat) o almenys els 2 dies de l\'esdeveniment assignat.' },
  { titulo: 'Compromís i puntualitat', descripcion: 'Compromís d\'assistència signat. Una baixa tardana afecta serveis planificats per a milers de pelegrins.' },
]

const REQUISITOS_GL: RequisitoVoluntario[] = [
  { titulo: 'Maior de idade', descripcion: 'Algunhas áreas (loxística, sanitaria) esixen a maioría de idade. Menores de 16-17 anos só con autorización parental e en áreas específicas.' },
  { titulo: 'Formación previa obrigatoria', descripcion: 'Entre 8 e 16 horas segundo a área. Combinación en liña (traxectoria do Papa León XIV, claves da viaxe) e presencial (protocolos, zonas, seguridade).' },
  { titulo: 'Dispoñibilidade total', descripcion: 'A maioría das áreas requiren dispoñibilidade para os 4 días da viaxe (6-9 de xuño en Madrid, despois por cidade) ou polo menos os 2 días do evento asignado.' },
  { titulo: 'Compromiso e puntualidade', descripcion: 'Compromiso de asistencia asinado. Unha baixa tardía afecta servizos planificados para miles de peregrinos.' },
]

const REQUISITOS_EU: RequisitoVoluntario[] = [
  { titulo: 'Adinez nagusi', descripcion: 'Eremu batzuek (logistika, osasuna) adin nagusitasuna eskatzen dute. 16-17 urtekoek bakarrik gurasoen baimenarekin eta eremu jakinetan.' },
  { titulo: 'Aurretiazko prestakuntza derrigorrezkoa', descripcion: '8 eta 16 ordu bitartean, eremuaren arabera. Online (Leon XIV.aren biografia, bidaiaren gako-puntuak) eta aurrez aurreko (protokoloak, eremuak, segurtasuna) konbinazioa.' },
  { titulo: 'Erabateko erabilgarritasuna', descripcion: 'Eremu gehienek bidaiaren 4 egunetarako erabilgarritasuna eskatzen dute (ekainaren 6-9 Madrilen, gero hiriz hiri) edo gutxienez esleitutako ekitaldiaren 2 egunetarako.' },
  { titulo: 'Konpromisoa eta puntualtasuna', descripcion: 'Asistentzia-konpromisoa sinatua. Berandu uztea milaka erromesentzat antolatutako zerbitzuei eragiten die.' },
]

const BENEFICIOS_EN: BeneficioVoluntario[] = [
  { titulo: 'Privileged access to events', descripcion: 'Reserved areas for volunteers with direct visibility of the Pope at key moments.' },
  { titulo: 'Official volunteer kit', descripcion: 'T-shirt, cap, backpack and identification credential for the 2026 apostolic visit.' },
  { titulo: 'Meals during shifts', descripcion: 'Food and drinks covered during service shifts, as well as continuous catering.' },
  { titulo: 'Official certificate', descripcion: 'Certificate signed by the Spanish Episcopal Conference attesting to the service rendered. Valid for CVs and pastoral experience.' },
  { titulo: 'International community', descripcion: 'Coexistence with volunteers from all over Spain and the world. An ecclesial experience that leaves a mark.' },
]

const BENEFICIOS_IT: BeneficioVoluntario[] = [
  { titulo: 'Accesso privilegiato agli eventi', descripcion: 'Zone riservate ai volontari con visibilità diretta del Papa nei momenti chiave.' },
  { titulo: 'Kit ufficiale del volontario', descripcion: 'Maglietta, berretto, zaino e accredito identificativo della visita apostolica 2026.' },
  { titulo: 'Pasti durante i turni', descripcion: 'Vitto e bevande coperti durante i turni di servizio, oltre al catering continuativo.' },
  { titulo: 'Certificato ufficiale', descripcion: 'Certificato firmato dalla Conferenza Episcopale Spagnola che attesta il servizio prestato. Valido per CV ed esperienze pastorali.' },
  { titulo: 'Comunità internazionale', descripcion: 'Convivenza con volontari da tutta la Spagna e dal mondo. Un\'esperienza ecclesiale che lascia il segno.' },
]

const BENEFICIOS_FR: BeneficioVoluntario[] = [
  { titulo: 'Accès privilégié aux événements', descripcion: 'Zones réservées aux bénévoles avec visibilité directe du Pape aux moments clés.' },
  { titulo: 'Kit officiel du bénévole', descripcion: 'T-shirt, casquette, sac à dos et accréditation pour la visite apostolique 2026.' },
  { titulo: 'Repas pendant les services', descripcion: 'Nourriture et boissons couvertes durant les permanences, ainsi qu\'un catering continu.' },
  { titulo: 'Certificat officiel', descripcion: 'Certificat signé par la Conférence Épiscopale Espagnole attestant du service rendu. Valable pour CV et expérience pastorale.' },
  { titulo: 'Communauté internationale', descripcion: 'Cohabitation avec des bénévoles venus de toute l\'Espagne et du monde entier. Une expérience ecclésiale qui marque.' },
]

const BENEFICIOS_DE: BeneficioVoluntario[] = [
  { titulo: 'Privilegierter Zugang zu den Veranstaltungen', descripcion: 'Reservierte Bereiche für Freiwillige mit direkter Sicht auf den Papst in den entscheidenden Momenten.' },
  { titulo: 'Offizielles Freiwilligen-Set', descripcion: 'T-Shirt, Mütze, Rucksack und Ausweis für den Apostolischen Besuch 2026.' },
  { titulo: 'Verpflegung während der Schichten', descripcion: 'Speisen und Getränke während der Diensteinsätze sowie laufende Versorgung.' },
  { titulo: 'Offizielles Zertifikat', descripcion: 'Von der Spanischen Bischofskonferenz unterzeichnetes Zertifikat über den geleisteten Dienst. Gültig für Lebenslauf und pastorale Erfahrung.' },
  { titulo: 'Internationale Gemeinschaft', descripcion: 'Zusammenleben mit Freiwilligen aus ganz Spanien und der Welt. Eine kirchliche Erfahrung, die prägt.' },
]

const BENEFICIOS_PT: BeneficioVoluntario[] = [
  { titulo: 'Acesso privilegiado aos eventos', descripcion: 'Zonas reservadas aos voluntários com visibilidade direta do Papa nos momentos-chave.' },
  { titulo: 'Kit oficial do voluntário', descripcion: 'T-shirt, boné, mochila e credencial identificativa da visita apostólica 2026.' },
  { titulo: 'Refeições durante os turnos', descripcion: 'Comida e bebida cobertas durante os turnos de serviço, bem como catering contínuo.' },
  { titulo: 'Certificado oficial', descripcion: 'Certificado assinado pela Conferência Episcopal Espanhola atestando o serviço prestado. Válido para CV e experiência pastoral.' },
  { titulo: 'Comunidade internacional', descripcion: 'Convivência com voluntários de toda a Espanha e do mundo. Uma experiência eclesial que deixa marca.' },
]

const BENEFICIOS_CA: BeneficioVoluntario[] = [
  { titulo: 'Accés privilegiat als esdeveniments', descripcion: 'Zones reservades als voluntaris amb visibilitat directa del Papa en els moments clau.' },
  { titulo: 'Kit oficial del voluntari', descripcion: 'Samarreta, gorra, motxilla i acreditació identificativa de la visita apostòlica 2026.' },
  { titulo: 'Àpats durant els torns', descripcion: 'Menjar i begudes coberts durant els torns de servei, així com càtering continu.' },
  { titulo: 'Certificat oficial', descripcion: 'Certificat signat per la Conferència Episcopal Espanyola que acredita el servei prestat. Vàlid per a CV i experiència pastoral.' },
  { titulo: 'Comunitat internacional', descripcion: 'Convivència amb voluntaris de tot Espanya i del món. Una experiència eclesial que deixa empremta.' },
]

const BENEFICIOS_GL: BeneficioVoluntario[] = [
  { titulo: 'Acceso privilexiado aos eventos', descripcion: 'Zonas reservadas aos voluntarios con visibilidade directa do Papa nos momentos clave.' },
  { titulo: 'Kit oficial do voluntario', descripcion: 'Camiseta, gorra, mochila e credencial identificativa da visita apostólica 2026.' },
  { titulo: 'Comidas durante os turnos', descripcion: 'Comida e bebida cubertas durante os turnos de servizo, así como catering continuo.' },
  { titulo: 'Certificado oficial', descripcion: 'Certificado asinado pola Conferencia Episcopal Española que acredita o servizo prestado. Válido para CV e experiencia pastoral.' },
  { titulo: 'Comunidade internacional', descripcion: 'Convivencia con voluntarios de toda España e do mundo. Unha experiencia eclesial que deixa pegada.' },
]

const BENEFICIOS_EU: BeneficioVoluntario[] = [
  { titulo: 'Ekitaldietarako sarbide pribilegiatua', descripcion: 'Boluntarioentzako gordetako eremuak, Aita Santua zuzenean ikusteko gako-uneetan.' },
  { titulo: 'Boluntarioaren kit ofiziala', descripcion: 'Kamiseta, txapela, motxila eta 2026ko bisita apostolikoaren identifikazio-kreditazioa.' },
  { titulo: 'Janariak txandetan', descripcion: 'Janaria eta edaria zerbitzu-txandetan estaliak, etengabeko cateringaz gain.' },
  { titulo: 'Ziurtagiri ofiziala', descripcion: 'Espainiako Apezpiku Konferentziak sinatutako ziurtagiria, emandako zerbitzuaren egiaztagiri. Curriculum eta esperientzia pastoralerako baliagarri.' },
  { titulo: 'Nazioarteko erkidegoa', descripcion: 'Espainia osoko eta munduko boluntarioekiko bizikidetza. Arrastoa uzten duen esperientzia eklesiala.' },
]

function getAreasDict(locale: Locale): AreaVoluntariado[] | null {
  switch (locale) {
    case 'en': return AREAS_EN
    case 'it': return AREAS_IT
    case 'fr': return AREAS_FR
    case 'de': return AREAS_DE
    case 'pt': return AREAS_PT
    case 'ca': return AREAS_CA
    case 'gl': return AREAS_GL
    case 'eu': return AREAS_EU
    default: return null
  }
}

function getRequisitosDict(locale: Locale): RequisitoVoluntario[] | null {
  switch (locale) {
    case 'en': return REQUISITOS_EN
    case 'it': return REQUISITOS_IT
    case 'fr': return REQUISITOS_FR
    case 'de': return REQUISITOS_DE
    case 'pt': return REQUISITOS_PT
    case 'ca': return REQUISITOS_CA
    case 'gl': return REQUISITOS_GL
    case 'eu': return REQUISITOS_EU
    default: return null
  }
}

function getBeneficiosDict(locale: Locale): BeneficioVoluntario[] | null {
  switch (locale) {
    case 'en': return BENEFICIOS_EN
    case 'it': return BENEFICIOS_IT
    case 'fr': return BENEFICIOS_FR
    case 'de': return BENEFICIOS_DE
    case 'pt': return BENEFICIOS_PT
    case 'ca': return BENEFICIOS_CA
    case 'gl': return BENEFICIOS_GL
    case 'eu': return BENEFICIOS_EU
    default: return null
  }
}

export function getAreasVoluntariado(locale: Locale): AreaVoluntariado[] {
  return getAreasDict(locale) ?? areasVoluntariado
}

export function getRequisitos(locale: Locale): RequisitoVoluntario[] {
  return getRequisitosDict(locale) ?? requisitos
}

export function getBeneficios(locale: Locale): BeneficioVoluntario[] {
  return getBeneficiosDict(locale) ?? beneficios
}

export { enlacesOficialesVoluntariado }
export type { AreaVoluntariado, RequisitoVoluntario, BeneficioVoluntario }
