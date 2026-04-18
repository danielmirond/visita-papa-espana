/**
 * Títulos y descripciones SEO-optimizados por ruta y locale.
 *
 * Basado en análisis de 13.606 keywords (SEMrush/Ahrefs) con el objetivo
 * de capturar el máximo volumen relevante sin sobreoptimizar.
 *
 * Reglas:
 * - Title: máximo 60 caracteres (preferentemente 50-58)
 * - Description: máximo 155 caracteres (preferentemente 140-155)
 * - Incluir la keyword principal en los primeros 30 caracteres del title
 * - Año (2026) cuando aplique para intent temporal
 */

import type { Locale } from '@/data/i18n/types'
import type { RouteKey } from '@/data/i18n/routes'

type SeoEntry = { title: string; description: string }
type SeoByLocale = Partial<Record<Locale, SeoEntry>>

export const seoByRoute: Partial<Record<RouteKey, SeoByLocale>> = {
  programa: {
    es: {
      title: 'Programa visita Papa León XIV a España · 6-12 junio 2026',
      description: 'Programa completo día a día de la visita del Papa León XIV a España: 24 actos en Madrid, Barcelona, Gran Canaria y Tenerife del 6 al 12 de junio de 2026.',
    },
    en: {
      title: 'Schedule: Pope Leo XIV\'s Visit to Spain · 6-12 June 2026',
      description: 'Full day-by-day schedule of Pope Leo XIV\'s apostolic journey to Spain: 24 events in Madrid, Barcelona, Gran Canaria and Tenerife, 6-12 June 2026.',
    },
    it: {
      title: 'Programma visita Papa Leone XIV in Spagna · 6-12 giu 2026',
      description: 'Programma completo giorno per giorno della visita di Papa Leone XIV in Spagna: 24 eventi a Madrid, Barcellona, Gran Canaria e Tenerife, 6-12 giugno 2026.',
    },
    fr: {
      title: 'Programme visite du Pape Léon XIV en Espagne · Juin 2026',
      description: 'Programme complet jour par jour de la visite du Pape Léon XIV en Espagne : 24 événements à Madrid, Barcelone, Grande Canarie et Ténérife, 6-12 juin 2026.',
    },
    de: {
      title: 'Programm Papst Leo XIV Spanien · 6.-12. Juni 2026',
      description: 'Vollständiger Tagesplan der Apostolischen Reise von Papst Leo XIV nach Spanien: 24 Veranstaltungen in Madrid, Barcelona, Gran Canaria und Teneriffa.',
    },
    pt: {
      title: 'Programa visita Papa Leão XIV a Espanha · 6-12 jun 2026',
      description: 'Programa completo dia a dia da visita do Papa Leão XIV a Espanha: 24 atos em Madrid, Barcelona, Grã Canária e Tenerife, 6-12 de junho de 2026.',
    },
    ca: {
      title: 'Programa visita Papa Lleó XIV a Espanya · 6-12 juny 2026',
      description: 'Programa complet dia a dia de la visita del Papa Lleó XIV a Espanya: 24 actes a Madrid, Barcelona, Gran Canària i Tenerife, 6-12 de juny de 2026.',
    },
    gl: {
      title: 'Programa visita Papa León XIV a España · 6-12 xuño 2026',
      description: 'Programa completo día a día da visita do Papa León XIV a España: 24 actos en Madrid, Barcelona, Gran Canaria e Tenerife, 6-12 de xuño de 2026.',
    },
    eu: {
      title: 'Leon XIV Espainia bisitaldia · Egitaraua · Ekainak 6-12',
      description: 'Leon XIV.a Aita Santuaren Espainiarako bidai apostolikoaren eguneroko egitaraua: 24 ekitaldi Madril, Bartzelona, Gran Canaria eta Tenerifen.',
    },
  },

  ciudades: {
    es: {
      title: 'Ciudades visita Papa León XIV: Madrid, Barcelona, Canarias',
      description: 'Guía completa de las 4 ciudades que visita el Papa León XIV en España: Madrid, Barcelona, Gran Canaria y Tenerife. Programa, transporte y alojamiento.',
    },
    en: {
      title: 'Cities of Pope Leo XIV\'s Visit: Madrid, Barcelona, Canaries',
      description: 'Complete guide to the 4 cities of Pope Leo XIV\'s visit to Spain: Madrid, Barcelona, Gran Canaria and Tenerife. Programme, transport and accommodation.',
    },
    it: {
      title: 'Città visita Papa Leone XIV: Madrid, Barcellona, Canarie',
      description: 'Guida completa alle 4 città della visita di Papa Leone XIV in Spagna: Madrid, Barcellona, Gran Canaria e Tenerife. Programma, trasporti e alloggio.',
    },
    fr: {
      title: 'Villes visite Pape Léon XIV : Madrid, Barcelone, Canaries',
      description: 'Guide complet des 4 villes de la visite du Pape Léon XIV en Espagne : Madrid, Barcelone, Grande Canarie et Ténérife. Programme, transport, hébergement.',
    },
    de: {
      title: 'Städte der Papstvisite Leo XIV: Madrid, Barcelona, Kanaren',
      description: 'Vollständiger Führer zu den 4 Städten des Papstbesuchs Leo XIV in Spanien: Madrid, Barcelona, Gran Canaria und Teneriffa. Programm und Unterkunft.',
    },
    pt: {
      title: 'Cidades visita Papa Leão XIV: Madrid, Barcelona, Canárias',
      description: 'Guia completo das 4 cidades da visita do Papa Leão XIV a Espanha: Madrid, Barcelona, Grã Canária e Tenerife. Programa, transporte e alojamento.',
    },
    ca: {
      title: 'Ciutats visita Papa Lleó XIV: Madrid, Barcelona, Canàries',
      description: 'Guia completa de les 4 ciutats de la visita del Papa Lleó XIV a Espanya: Madrid, Barcelona, Gran Canària i Tenerife. Programa, transport i allotjament.',
    },
    gl: {
      title: 'Cidades visita Papa León XIV: Madrid, Barcelona, Canarias',
      description: 'Guía completa das 4 cidades da visita do Papa León XIV a España: Madrid, Barcelona, Gran Canaria e Tenerife. Programa, transporte e aloxamento.',
    },
    eu: {
      title: 'Leon XIV bisitaldiaren hiriak: Madril, Bartzelona, Kanariak',
      description: 'Leon XIV.a Aita Santuaren Espainiarako bisitaldiaren 4 hirien gida osoa: Madril, Bartzelona, Kanaria Handia eta Tenerife.',
    },
  },

  'como-asistir': {
    es: {
      title: 'Cómo asistir a la visita del Papa León XIV: entradas 2026',
      description: 'Guía práctica para asistir a la visita del Papa León XIV a España en junio de 2026: inscripción gratuita, entradas, acreditaciones y recomendaciones.',
    },
    en: {
      title: 'How to Attend Pope Leo XIV\'s Visit: Tickets & Passes 2026',
      description: 'Practical guide to attending Pope Leo XIV\'s visit to Spain in June 2026: free registration, tickets, accreditation and recommendations.',
    },
    it: {
      title: 'Come partecipare alla visita di Papa Leone XIV: biglietti',
      description: 'Guida pratica per partecipare alla visita di Papa Leone XIV in Spagna nel giugno 2026: iscrizione gratuita, biglietti, accreditamento.',
    },
    fr: {
      title: 'Comment assister à la visite du Pape Léon XIV · Billets 2026',
      description: 'Guide pratique pour assister à la visite du Pape Léon XIV en Espagne en juin 2026 : inscription gratuite, billets, accréditations et conseils.',
    },
    de: {
      title: 'Papstvisite Leo XIV: Teilnahme, Tickets & Anmeldung 2026',
      description: 'Praktischer Leitfaden zur Teilnahme an der Papstvisite Leo XIV in Spanien im Juni 2026: kostenlose Anmeldung, Tickets, Akkreditierung.',
    },
    pt: {
      title: 'Como assistir à visita do Papa Leão XIV: bilhetes 2026',
      description: 'Guia prático para assistir à visita do Papa Leão XIV a Espanha em junho 2026: inscrição gratuita, bilhetes, acreditações e recomendações.',
    },
    ca: {
      title: 'Com assistir a la visita del Papa Lleó XIV: entrades 2026',
      description: 'Guia pràctica per assistir a la visita del Papa Lleó XIV a Espanya el juny de 2026: inscripció gratuïta, entrades, acreditacions i recomanacions.',
    },
    gl: {
      title: 'Como asistir á visita do Papa León XIV: entradas 2026',
      description: 'Guía práctica para asistir á visita do Papa León XIV a España en xuño de 2026: inscrición gratuíta, entradas, acreditacións e recomendacións.',
    },
    eu: {
      title: 'Nola parte hartu Leon XIV bisitaldian: sarrerak 2026',
      description: 'Leon XIV.a Aita Santuaren Espainiarako 2026ko ekaineko bisitaldian parte hartzeko gida: doako izen-ematea, sarrerak eta egiaztagiriak.',
    },
  },

  'como-llegar': {
    es: {
      title: 'Cómo llegar a Madrid, Barcelona y Canarias · Papa León XIV',
      description: 'Transporte para la visita del Papa León XIV: cómo llegar a Madrid, Barcelona, Gran Canaria y Tenerife en tren (AVE), avión o bus. Horarios especiales junio 2026.',
    },
    en: {
      title: 'How to Get to Madrid, Barcelona & Canaries · Pope Leo XIV',
      description: 'Transport for Pope Leo XIV\'s visit: how to reach Madrid, Barcelona, Gran Canaria and Tenerife by train (AVE), plane or bus. Special schedules for June 2026.',
    },
    it: {
      title: 'Come arrivare a Madrid, Barcellona e Canarie · Papa Leone',
      description: 'Trasporti per la visita di Papa Leone XIV: come raggiungere Madrid, Barcellona, Gran Canaria e Tenerife in treno (AVE), aereo o bus. Orari speciali giugno 2026.',
    },
    fr: {
      title: 'Se rendre à Madrid, Barcelone, Canaries · Pape Léon XIV',
      description: 'Transports pour la visite du Pape Léon XIV : comment rejoindre Madrid, Barcelone, Grande Canarie et Ténérife en train (AVE), avion ou bus. Juin 2026.',
    },
    de: {
      title: 'Anreise Madrid, Barcelona, Kanaren · Papst Leo XIV',
      description: 'Verkehr für den Papstbesuch Leo XIV: Wie Sie Madrid, Barcelona, Gran Canaria und Teneriffa mit Zug (AVE), Flugzeug oder Bus erreichen. Juni 2026.',
    },
    pt: {
      title: 'Como chegar a Madrid, Barcelona e Canárias · Papa Leão XIV',
      description: 'Transporte para a visita do Papa Leão XIV: como chegar a Madrid, Barcelona, Grã Canária e Tenerife de comboio (AVE), avião ou autocarro. Junho 2026.',
    },
    ca: {
      title: 'Com arribar a Madrid, Barcelona i Canàries · Papa Lleó XIV',
      description: 'Transport per a la visita del Papa Lleó XIV: com arribar a Madrid, Barcelona, Gran Canària i Tenerife en tren (AVE), avió o bus. Horaris juny 2026.',
    },
    gl: {
      title: 'Como chegar a Madrid, Barcelona e Canarias · Papa León XIV',
      description: 'Transporte para a visita do Papa León XIV: como chegar a Madrid, Barcelona, Gran Canaria e Tenerife en tren (AVE), avión ou autobús. Xuño 2026.',
    },
    eu: {
      title: 'Nola heldu Madril, Bartzelona eta Kanarietara · Leon XIV',
      description: 'Leon XIV.a Aita Santuaren bisitaldirako garraioa: Madril, Bartzelona, Kanaria Handia eta Tenerifera nola heldu trenez (AVE), hegazkinez edo autobusez.',
    },
  },

  'donde-ver': {
    es: {
      title: 'Dónde ver la visita del Papa León XIV: TV, streaming, radio',
      description: 'Canales de TV (RTVE, 13TV, TRECE), streaming (RTVE Play, Vatican News) y radio que retransmiten la visita del Papa León XIV a España en junio de 2026.',
    },
    en: {
      title: 'Where to Watch Pope Leo XIV\'s Visit: TV, Stream, Radio',
      description: 'TV channels (RTVE, 13TV), streaming (RTVE Play, Vatican News) and radio broadcasting Pope Leo XIV\'s visit to Spain in June 2026. Live and on-demand.',
    },
    it: {
      title: 'Dove vedere la visita di Papa Leone XIV: TV e streaming',
      description: 'Canali TV (RTVE, 13TV, Vatican News), streaming e radio che trasmettono la visita di Papa Leone XIV in Spagna nel giugno 2026. In diretta e on demand.',
    },
    fr: {
      title: 'Où regarder la visite du Pape Léon XIV : TV, streaming',
      description: 'Chaînes TV (RTVE, 13TV, Vatican News), streaming et radio qui retransmettent la visite du Pape Léon XIV en Espagne en juin 2026. En direct et à la demande.',
    },
    de: {
      title: 'Papstvisite Leo XIV live sehen: TV, Streaming, Radio',
      description: 'TV-Sender (RTVE, 13TV, Vatican News), Streaming-Dienste und Radiostationen, die den Besuch von Papst Leo XIV in Spanien im Juni 2026 übertragen.',
    },
    pt: {
      title: 'Onde ver a visita do Papa Leão XIV: TV, streaming, rádio',
      description: 'Canais TV (RTVE, 13TV, Vatican News), streaming e rádio que transmitem a visita do Papa Leão XIV a Espanha em junho 2026. Em direto e a pedido.',
    },
    ca: {
      title: 'On veure la visita del Papa Lleó XIV: TV, streaming, ràdio',
      description: 'Canals TV (RTVE, 13TV, Vatican News), streaming i ràdio que retransmeten la visita del Papa Lleó XIV a Espanya el juny de 2026. En directe i sota demanda.',
    },
    gl: {
      title: 'Onde ver a visita do Papa León XIV: TV, streaming, radio',
      description: 'Canles TV (RTVE, 13TV, Vatican News), streaming e radio que retransmiten a visita do Papa León XIV a España en xuño de 2026. En directo e baixo demanda.',
    },
    eu: {
      title: 'Non ikusi Leon XIV bisitaldia: TB, streaming, irratia',
      description: 'Leon XIV.a Aita Santuaren Espainiarako 2026ko ekaineko bisitaldia emititzen duten telebista-kateak (RTVE, 13TV, Vatican News), streaming eta irratia.',
    },
  },

  mapa: {
    es: {
      title: 'Mapa del recorrido del Papa León XIV · Madrid, Barcelona',
      description: 'Mapa interactivo del recorrido del Papa León XIV por España del 6 al 12 de junio de 2026: Madrid, Barcelona, Gran Canaria y Tenerife con todos los actos.',
    },
    en: {
      title: 'Map of Pope Leo XIV\'s Route in Spain · Interactive 2026',
      description: 'Interactive map of Pope Leo XIV\'s apostolic journey across Spain (6-12 June 2026): Madrid, Barcelona, Gran Canaria and Tenerife with every event pinned.',
    },
    it: {
      title: 'Mappa percorso Papa Leone XIV in Spagna · Interattiva 2026',
      description: 'Mappa interattiva del percorso di Papa Leone XIV in Spagna (6-12 giugno 2026): Madrid, Barcellona, Gran Canaria e Tenerife con tutti gli eventi.',
    },
    fr: {
      title: 'Carte parcours Pape Léon XIV Espagne · Interactive 2026',
      description: 'Carte interactive du voyage apostolique du Pape Léon XIV en Espagne (6-12 juin 2026) : Madrid, Barcelone, Grande Canarie et Ténérife avec tous les événements.',
    },
    de: {
      title: 'Karte Papst Leo XIV Spanienreise · Interaktiv 2026',
      description: 'Interaktive Karte der Apostolischen Reise von Papst Leo XIV durch Spanien (6.-12. Juni 2026): Madrid, Barcelona, Gran Canaria und Teneriffa.',
    },
    pt: {
      title: 'Mapa do percurso do Papa Leão XIV · Interativo 2026',
      description: 'Mapa interativo da viagem apostólica do Papa Leão XIV a Espanha (6-12 de junho 2026): Madrid, Barcelona, Grã Canária e Tenerife com todos os atos.',
    },
    ca: {
      title: 'Mapa del recorregut del Papa Lleó XIV · Interactiu 2026',
      description: 'Mapa interactiu del viatge apostòlic del Papa Lleó XIV a Espanya (6-12 de juny 2026): Madrid, Barcelona, Gran Canària i Tenerife amb tots els actes.',
    },
    gl: {
      title: 'Mapa do percorrido do Papa León XIV · Interactivo 2026',
      description: 'Mapa interactivo da viaxe apostólica do Papa León XIV a España (6-12 de xuño 2026): Madrid, Barcelona, Gran Canaria e Tenerife con todos os actos.',
    },
    eu: {
      title: 'Leon XIV Espainiako ibilbidearen mapa · 2026',
      description: 'Leon XIV.a Aita Santuaren Espainiako bidai apostolikoaren mapa interaktiboa (2026ko ekainaren 6-12): Madril, Bartzelona, Kanaria Handia eta Tenerife.',
    },
  },

  noticias: {
    es: {
      title: 'Noticias Papa León XIV: novedades visita España 2026',
      description: 'Últimas noticias, actualizaciones y seguimiento de la visita del Papa León XIV a España en junio de 2026. Actualizado diariamente desde fuentes oficiales.',
    },
    en: {
      title: 'Pope Leo XIV News: Latest Updates on Spain Visit 2026',
      description: 'Latest news, updates and coverage of Pope Leo XIV\'s visit to Spain in June 2026. Daily updates from official sources and mainstream media.',
    },
    it: {
      title: 'Notizie Papa Leone XIV: aggiornamenti visita Spagna 2026',
      description: 'Ultime notizie, aggiornamenti e copertura della visita di Papa Leone XIV in Spagna nel giugno 2026. Aggiornato quotidianamente da fonti ufficiali.',
    },
    fr: {
      title: 'Actualités Pape Léon XIV : visite Espagne 2026',
      description: 'Dernières actualités, mises à jour et couverture de la visite du Pape Léon XIV en Espagne en juin 2026. Mis à jour quotidiennement depuis sources officielles.',
    },
    de: {
      title: 'Papst Leo XIV News: Spanienreise 2026 — Aktuelle',
      description: 'Aktuelle Nachrichten und Updates zum Besuch von Papst Leo XIV in Spanien im Juni 2026. Tägliche Aktualisierung aus offiziellen Quellen und Leitmedien.',
    },
    pt: {
      title: 'Notícias Papa Leão XIV: visita Espanha 2026',
      description: 'Últimas notícias, atualizações e cobertura da visita do Papa Leão XIV a Espanha em junho de 2026. Atualizado diariamente de fontes oficiais.',
    },
    ca: {
      title: 'Notícies Papa Lleó XIV: visita Espanya 2026',
      description: 'Darreres notícies, actualitzacions i cobertura de la visita del Papa Lleó XIV a Espanya el juny de 2026. Actualitzat diàriament des de fonts oficials.',
    },
    gl: {
      title: 'Novas Papa León XIV: visita España 2026',
      description: 'Últimas novas, actualizacións e cobertura da visita do Papa León XIV a España en xuño de 2026. Actualizado diariamente dende fontes oficiais.',
    },
    eu: {
      title: 'Leon XIV albisteak: 2026ko Espainia bisitaldia',
      description: 'Leon XIV.a Aita Santuaren 2026ko ekaineko Espainia bisitaldiaren albiste, eguneraketa eta estaldura berrienak. Iturri ofizialetatik egunero eguneratuta.',
    },
  },

  guia: {
    es: {
      title: 'Guía del peregrino Papa León XIV: familias, mayores, PMR',
      description: 'Guías adaptadas por perfil para la visita del Papa León XIV: familias con niños, personas mayores, movilidad reducida y peregrinos internacionales.',
    },
    en: {
      title: 'Pilgrim Guide Pope Leo XIV: Families, Elderly, Mobility',
      description: 'Tailored guides for Pope Leo XIV\'s visit by visitor profile: families with kids, elderly, reduced mobility and international pilgrims. Tips and checklists.',
    },
    it: {
      title: 'Guida pellegrino Papa Leone XIV: famiglie, anziani, PMR',
      description: 'Guide su misura per la visita di Papa Leone XIV per profilo: famiglie con bambini, anziani, mobilità ridotta e pellegrini internazionali.',
    },
    fr: {
      title: 'Guide pèlerin Pape Léon XIV : familles, seniors, PMR',
      description: 'Guides adaptés à la visite du Pape Léon XIV par profil : familles avec enfants, seniors, mobilité réduite et pèlerins internationaux.',
    },
    de: {
      title: 'Pilgerführer Papst Leo XIV: Familien, Senioren, Mobilität',
      description: 'Maßgeschneiderte Leitfäden zur Papstvisite Leo XIV nach Zielgruppe: Familien mit Kindern, Senioren, eingeschränkte Mobilität, internationale Pilger.',
    },
    pt: {
      title: 'Guia peregrino Papa Leão XIV: famílias, idosos, mobilidade',
      description: 'Guias adaptados por perfil para a visita do Papa Leão XIV: famílias com crianças, idosos, mobilidade reduzida e peregrinos internacionais.',
    },
    ca: {
      title: 'Guia pelegrí Papa Lleó XIV: famílies, grans, mobilitat',
      description: 'Guies adaptades per perfil per a la visita del Papa Lleó XIV: famílies amb nens, gent gran, mobilitat reduïda i pelegrins internacionals.',
    },
    gl: {
      title: 'Guía peregrino Papa León XIV: familias, maiores, mobilidade',
      description: 'Guías adaptadas por perfil para a visita do Papa León XIV: familias con nenos, maiores, mobilidade reducida e peregrinos internacionais.',
    },
    eu: {
      title: 'Leon XIV gida: familiak, adinekoak, mugikortasuna',
      description: 'Leon XIV.a Aita Santuaren bisitaldirako profil bakoitzerako gidak: familiak umeekin, adinekoak, mugikortasun urria eta nazioarteko erromesak.',
    },
  },

  faq: {
    es: {
      title: 'Preguntas frecuentes · Visita Papa León XIV España 2026',
      description: '23 respuestas a las dudas más frecuentes sobre la visita del Papa León XIV a España en junio 2026: entradas, transporte, alojamiento, seguridad y más.',
    },
    en: {
      title: 'FAQ · Pope Leo XIV\'s Visit to Spain 2026 · Answered',
      description: '23 answers to the most common questions about Pope Leo XIV\'s visit to Spain in June 2026: tickets, transport, accommodation, security and more.',
    },
    it: {
      title: 'FAQ · Visita Papa Leone XIV in Spagna 2026 · Risposte',
      description: '23 risposte alle domande più frequenti sulla visita di Papa Leone XIV in Spagna nel giugno 2026: biglietti, trasporti, alloggio, sicurezza.',
    },
    fr: {
      title: 'FAQ · Visite Pape Léon XIV Espagne 2026 · Réponses',
      description: '23 réponses aux questions les plus fréquentes sur la visite du Pape Léon XIV en Espagne en juin 2026 : billets, transport, hébergement, sécurité.',
    },
    de: {
      title: 'FAQ · Papstvisite Leo XIV Spanien 2026 · Antworten',
      description: '23 Antworten auf die häufigsten Fragen zum Besuch von Papst Leo XIV in Spanien im Juni 2026: Tickets, Transport, Unterkunft, Sicherheit und mehr.',
    },
    pt: {
      title: 'FAQ · Visita Papa Leão XIV Espanha 2026 · Respostas',
      description: '23 respostas às perguntas mais frequentes sobre a visita do Papa Leão XIV a Espanha em junho de 2026: bilhetes, transporte, alojamento, segurança.',
    },
    ca: {
      title: 'FAQ · Visita Papa Lleó XIV Espanya 2026 · Respostes',
      description: '23 respostes a les preguntes més freqüents sobre la visita del Papa Lleó XIV a Espanya el juny de 2026: entrades, transport, allotjament, seguretat.',
    },
    gl: {
      title: 'FAQ · Visita Papa León XIV España 2026 · Respostas',
      description: '23 respostas ás preguntas máis frecuentes sobre a visita do Papa León XIV a España en xuño de 2026: entradas, transporte, aloxamento, seguridade.',
    },
    eu: {
      title: 'Ohiko galderak · Leon XIV bisitaldia Espainia 2026',
      description: 'Leon XIV.a Aita Santuaren 2026ko ekaineko Espainia bisitaldiari buruzko 23 ohiko galdera: sarrerak, garraioa, ostatua, segurtasuna eta gehiago.',
    },
  },

  'papa-leon-xiv': {
    es: {
      title: 'Papa León XIV: biografía, edad, familia e idiomas',
      description:
        'Biografía completa del Papa León XIV (Robert Francis Prevost): edad, altura, familia, idiomas que habla, escudo papal, posiciones y línea de tiempo.',
    },
    en: {
      title: 'Pope Leo XIV: Biography, Age, Family, Views & Quotes',
      description:
        'Complete biography of Pope Leo XIV (Robert Francis Prevost): age, height, family, languages spoken, Chicago roots, political views, quotes and timeline.',
    },
    it: {
      title: 'Papa Leone XIV: biografia, età, famiglia e posizioni',
      description:
        'Biografia completa di Papa Leone XIV (Robert Francis Prevost): età, altezza, famiglia, lingue parlate, origini Chicago, posizioni, citazioni e cronologia.',
    },
    fr: {
      title: 'Pape Léon XIV : biographie, âge, famille et positions',
      description:
        'Biographie complète du Pape Léon XIV (Robert Francis Prevost) : âge, taille, famille, langues parlées, origines Chicago, positions, citations et chronologie.',
    },
    de: {
      title: 'Papst Leo XIV: Biografie, Alter, Familie, Ansichten',
      description:
        'Vollständige Biografie von Papst Leo XIV (Robert Francis Prevost): Alter, Größe, Familie, gesprochene Sprachen, Chicago-Wurzeln, Ansichten, Zitate.',
    },
    pt: {
      title: 'Papa Leão XIV: biografia, idade, família e ideias',
      description:
        'Biografia completa do Papa Leão XIV (Robert Francis Prevost): idade, altura, família, idiomas que fala, raízes de Chicago, posições, citações e cronologia.',
    },
    ca: {
      title: 'Papa Lleó XIV: biografia, edat, família i idiomes',
      description:
        'Biografia completa del Papa Lleó XIV (Robert Francis Prevost): edat, alçada, família, idiomes que parla, arrels a Chicago, posicions i cronologia.',
    },
    gl: {
      title: 'Papa León XIV: biografía, idade, familia e idiomas',
      description:
        'Biografía completa do Papa León XIV (Robert Francis Prevost): idade, altura, familia, idiomas que fala, raíces de Chicago, posicións e cronoloxía.',
    },
    eu: {
      title: 'Leon XIV.a Aita Santua: biografia, adina eta familia',
      description:
        'Leon XIV.a Aita Santuaren (Robert Francis Prevost) biografia osoa: adina, altuera, familia, hizkuntzak, Chicago-ko sustraiak eta kronologia.',
    },
  },

  'que-llevar': {
    es: {
      title: 'Qué llevar a la visita del Papa 2026: kit del peregrino',
      description:
        'Lista completa de qué llevar a la visita del Papa León XIV en España 2026: mochila, ropa, hidratación, protección solar, kit de emergencia y artículos religiosos.',
    },
    en: {
      title: 'What to Bring to the Pope\'s Visit 2026: Pilgrim Kit',
      description:
        'Complete checklist of what to bring to Pope Leo XIV\'s visit to Spain in June 2026: backpack, clothing, hydration, sun protection, emergency kit, religious items.',
    },
    it: {
      title: 'Cosa portare alla visita del Papa 2026: kit del pellegrino',
      description:
        'Lista completa di cosa portare alla visita di Papa Leone XIV in Spagna giugno 2026: zaino, abbigliamento, idratazione, protezione solare, kit di emergenza.',
    },
    fr: {
      title: 'Que emporter à la visite du Pape 2026 : kit du pèlerin',
      description:
        'Liste complète pour la visite du Pape Léon XIV en Espagne juin 2026 : sac à dos, vêtements, hydratation, protection solaire, kit d\'urgence, objets religieux.',
    },
    de: {
      title: 'Was zur Papstvisite 2026 mitnehmen: Pilger-Kit',
      description:
        'Vollständige Checkliste für den Besuch von Papst Leo XIV in Spanien im Juni 2026: Rucksack, Kleidung, Getränke, Sonnenschutz, Notfallkit, religiöse Artikel.',
    },
    pt: {
      title: 'O que levar à visita do Papa 2026: kit do peregrino',
      description:
        'Lista completa do que levar à visita do Papa Leão XIV a Espanha em junho 2026: mochila, roupa, hidratação, proteção solar, kit de emergência e artigos religiosos.',
    },
    ca: {
      title: 'Què portar a la visita del Papa 2026: kit del pelegrí',
      description:
        'Llista completa per a la visita del Papa Lleó XIV a Espanya el juny de 2026: motxilla, roba, hidratació, protecció solar, kit d\'emergència i articles religiosos.',
    },
    gl: {
      title: 'Que levar á visita do Papa 2026: kit do peregrino',
      description:
        'Lista completa do que levar á visita do Papa León XIV a España en xuño de 2026: mochila, roupa, hidratación, protección solar, kit de emerxencia, artigos relixiosos.',
    },
    eu: {
      title: 'Zer eraman Aita Santuaren bisitaldira 2026: erromes kit',
      description:
        'Leon XIV.a Aita Santuaren Espainiarako 2026ko ekaineko bisitaldirako zerrenda osoa: motxila, arropa, hidratazioa, eguzki-babesa eta erromes kit osoa.',
    },
  },

  himno: {
    es: {
      title: 'Himno oficial visita Papa León XIV a España 2026',
      description:
        'Letra, audio y partitura del himno oficial de la visita del Papa León XIV a España del 6 al 12 de junio de 2026. Publicación oficial de la Conferencia Episcopal.',
    },
    en: {
      title: 'Official Anthem · Pope Leo XIV Visit to Spain 2026',
      description:
        'Lyrics, audio and score of the official anthem for Pope Leo XIV\'s apostolic journey to Spain, 6-12 June 2026, published by the Spanish Episcopal Conference.',
    },
    it: {
      title: 'Inno ufficiale · Visita Papa Leone XIV Spagna 2026',
      description:
        'Testo, audio e spartito dell\'inno ufficiale della visita apostolica di Papa Leone XIV in Spagna, 6-12 giugno 2026, pubblicato dalla CEE.',
    },
    fr: {
      title: 'Hymne officiel · Visite du Pape Léon XIV Espagne 2026',
      description:
        'Paroles, audio et partition de l\'hymne officiel du voyage apostolique du Pape Léon XIV en Espagne, 6-12 juin 2026, publié par la Conférence Épiscopale Espagnole.',
    },
    de: {
      title: 'Offizielle Hymne · Papst Leo XIV Spanienreise 2026',
      description:
        'Text, Audio und Partitur der offiziellen Hymne der Apostolischen Reise von Papst Leo XIV nach Spanien, 6.-12. Juni 2026.',
    },
    pt: {
      title: 'Hino oficial · Visita Papa Leão XIV a Espanha 2026',
      description:
        'Letra, áudio e partitura do hino oficial da visita apostólica do Papa Leão XIV a Espanha, 6-12 de junho de 2026, publicado pela Conferência Episcopal Espanhola.',
    },
    ca: {
      title: 'Himne oficial · Visita Papa Lleó XIV Espanya 2026',
      description:
        'Lletra, àudio i partitura de l\'himne oficial del viatge apostòlic del Papa Lleó XIV a Espanya, 6-12 de juny de 2026.',
    },
    gl: {
      title: 'Himno oficial · Visita Papa León XIV a España 2026',
      description:
        'Letra, audio e partitura do himno oficial da viaxe apostólica do Papa León XIV a España, 6-12 de xuño de 2026.',
    },
    eu: {
      title: 'Ereserki ofiziala · Leon XIV Espainia bisitaldia 2026',
      description:
        'Leon XIV.a Aita Santuaren Espainiarako 2026ko ekaineko bidai apostolikoaren ereserki ofizialaren letra, audioa eta partitura.',
    },
  },

  oracion: {
    es: {
      title: 'Oración por la visita del Papa León XIV a España 2026',
      description:
        'Texto oficial de la oración por la visita del Papa León XIV a España en junio de 2026, para rezar en parroquias y familias durante la preparación espiritual.',
    },
    en: {
      title: 'Prayer for Pope Leo XIV\'s Visit to Spain · June 2026',
      description:
        'Official prayer text for Pope Leo XIV\'s apostolic journey to Spain in June 2026, used in Spanish parishes and families during the months of spiritual preparation.',
    },
    it: {
      title: 'Preghiera per la visita di Papa Leone XIV in Spagna',
      description:
        'Testo ufficiale della preghiera per la visita di Papa Leone XIV in Spagna, giugno 2026, usata nelle parrocchie e famiglie durante la preparazione spirituale.',
    },
    fr: {
      title: 'Prière pour la visite du Pape Léon XIV en Espagne 2026',
      description:
        'Texte officiel de la prière pour la visite du Pape Léon XIV en Espagne, juin 2026, utilisée dans les paroisses et familles pendant la préparation spirituelle.',
    },
    de: {
      title: 'Gebet für den Besuch von Papst Leo XIV in Spanien 2026',
      description:
        'Offizieller Gebetstext für die Apostolische Reise von Papst Leo XIV nach Spanien im Juni 2026, gebetet in Pfarreien und Familien während der Vorbereitung.',
    },
    pt: {
      title: 'Oração pela visita do Papa Leão XIV a Espanha 2026',
      description:
        'Texto oficial da oração pela visita do Papa Leão XIV a Espanha em junho de 2026, usada em paróquias e famílias durante a preparação espiritual.',
    },
    ca: {
      title: 'Oració per la visita del Papa Lleó XIV a Espanya 2026',
      description:
        'Text oficial de l\'oració per la visita del Papa Lleó XIV a Espanya el juny de 2026, resada a parròquies i famílies durant la preparació espiritual.',
    },
    gl: {
      title: 'Oración pola visita do Papa León XIV a España 2026',
      description:
        'Texto oficial da oración pola visita do Papa León XIV a España en xuño de 2026, rezada en parroquias e familias durante a preparación espiritual.',
    },
    eu: {
      title: 'Otoitza · Leon XIV Aita Santuaren Espainia bisita 2026',
      description:
        'Leon XIV.a Aita Santuaren Espainiarako 2026ko ekaineko bidai apostolikorako otoitzaren testu ofiziala, parrokietan eta familietan erabiltzen dena.',
    },
  },

  voluntariado: {
    es: {
      title: 'Voluntariado visita Papa León XIV España · Inscripción 2026',
      description:
        'Cómo inscribirse como voluntario en la visita del Papa León XIV a España (6-12 junio 2026): áreas, requisitos, plazas, beneficios y pasos de inscripción.',
    },
    en: {
      title: 'Volunteer at Pope Leo XIV\'s Visit to Spain 2026',
      description:
        'How to apply as a volunteer for Pope Leo XIV\'s visit to Spain (6-12 June 2026): areas, requirements, places, benefits and step-by-step application process.',
    },
    it: {
      title: 'Volontariato visita Papa Leone XIV in Spagna 2026',
      description:
        'Come candidarsi come volontario alla visita di Papa Leone XIV in Spagna (6-12 giugno 2026): aree, requisiti, posti, benefici e iter di iscrizione.',
    },
    fr: {
      title: 'Bénévolat visite du Pape Léon XIV Espagne 2026',
      description:
        'Comment s\'inscrire comme bénévole pour la visite du Pape Léon XIV en Espagne (6-12 juin 2026) : domaines, conditions, places, avantages et processus.',
    },
    de: {
      title: 'Ehrenamt Papst Leo XIV Spanien 2026 · Anmeldung',
      description:
        'Wie man sich als Freiwillige:r für den Besuch von Papst Leo XIV in Spanien (6.-12. Juni 2026) anmeldet: Bereiche, Voraussetzungen, Plätze, Vorteile.',
    },
    pt: {
      title: 'Voluntariado visita Papa Leão XIV Espanha 2026',
      description:
        'Como inscrever-se como voluntário na visita do Papa Leão XIV a Espanha (6-12 junho 2026): áreas, requisitos, lugares, benefícios e inscrição passo a passo.',
    },
    ca: {
      title: 'Voluntariat visita Papa Lleó XIV Espanya 2026',
      description:
        'Com apuntar-se com a voluntari a la visita del Papa Lleó XIV a Espanya (6-12 juny 2026): àrees, requisits, places, beneficis i passos d\'inscripció.',
    },
    gl: {
      title: 'Voluntariado visita Papa León XIV España 2026',
      description:
        'Como apuntarse como voluntario na visita do Papa León XIV a España (6-12 xuño 2026): áreas, requisitos, prazas, beneficios e pasos de inscrición.',
    },
    eu: {
      title: 'Boluntariotza · Leon XIV Espainia bisitaldia 2026',
      description:
        'Leon XIV.a Aita Santuaren Espainiarako bisitaldian (2026ko ekainaren 6-12) boluntario gisa nola izena eman: arloak, baldintzak, plazak eta onurak.',
    },
  },

  'historia-visitas-papales': {
    es: {
      title: 'Visitas papales a España (1982-2026): JP II, Benedicto, León XIV',
      description:
        'Historia completa de los 9 viajes papales a España: Juan Pablo II (5 visitas 1982-2003), Benedicto XVI (3 visitas 2006-2011), León XIV (2026). Por qué Francisco no vino.',
    },
    en: {
      title: 'Papal Visits to Spain (1982-2026): History & Timeline',
      description:
        'Complete history of papal visits to Spain: John Paul II (5 visits 1982-2003), Benedict XVI (3 visits 2006-2011), Leo XIV (2026). Why Pope Francis never went.',
    },
    it: {
      title: 'Visite papali in Spagna (1982-2026): storia completa',
      description:
        'Storia completa dei viaggi papali in Spagna: Giovanni Paolo II (5 visite 1982-2003), Benedetto XVI (3 visite 2006-2011), Leone XIV (2026). Perché Francesco non ci andò.',
    },
    fr: {
      title: 'Visites papales en Espagne (1982-2026) : histoire',
      description:
        'Histoire complète des voyages papaux en Espagne : Jean-Paul II (5 visites 1982-2003), Benoît XVI (3 visites 2006-2011), Léon XIV (2026). Et pourquoi pas François.',
    },
    de: {
      title: 'Papstbesuche in Spanien (1982-2026): Geschichte',
      description:
        'Vollständige Geschichte der Papstreisen nach Spanien: Johannes Paul II (5 Besuche 1982-2003), Benedikt XVI (3 Besuche 2006-2011), Leo XIV (2026). Warum Franziskus nicht kam.',
    },
    pt: {
      title: 'Visitas papais a Espanha (1982-2026): história',
      description:
        'História completa das viagens papais a Espanha: João Paulo II (5 visitas 1982-2003), Bento XVI (3 visitas 2006-2011), Leão XIV (2026). Porque Francisco não foi.',
    },
    ca: {
      title: 'Visites papals a Espanya (1982-2026): història',
      description:
        'Història completa dels viatges papals a Espanya: Joan Pau II (5 visites 1982-2003), Benet XVI (3 visites 2006-2011), Lleó XIV (2026). Per què Francesc no va anar.',
    },
    gl: {
      title: 'Visitas papais a España (1982-2026): historia',
      description:
        'Historia completa das viaxes papais a España: Xoán Paulo II (5 visitas 1982-2003), Bieito XVI (3 visitas 2006-2011), León XIV (2026). Por que Francisco non foi.',
    },
    eu: {
      title: 'Bisitaldi papalak Espainian (1982-2026): historia',
      description:
        'Espainiarako bidai apostolikoen historia osoa: Joan Paulo II.a (5 bisita 1982-2003), Benedikto XVI.a (3 bisita 2006-2011), Leon XIV.a (2026). Zergatik ez zen etorri Frantzisko.',
    },
  },
}

/**
 * Devuelve {title, description} para una ruta y locale dados.
 * Fallback a español si el locale no tiene traducción.
 */
export function getSeoMeta(routeKey: RouteKey, locale: Locale): SeoEntry | null {
  const byLocale = seoByRoute[routeKey]
  if (!byLocale) return null
  return byLocale[locale] || byLocale.es || null
}
