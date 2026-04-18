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
