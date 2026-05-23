import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import AffiliateLink from '@/components/affiliate/AffiliateLink'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props {
  locale: Locale
}

type Fact = { label: string; value: string }
type ColorBlock = { name: string; hex: string; meaning: string }
type FaqItem = { q: string; a: string }
type RelatedLink = { href: string; text: string }

type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  quickFacts: Fact[]
  historyTitle: string
  historyBody: string[]
  colorsTitle: string
  colorsIntro: string
  colors: ColorBlock[]
  shieldTitle: string
  shieldIntro: string
  shieldElements: { name: string; meaning: string }[]
  specsTitle: string
  specsIntro: string
  specs: Fact[]
  visitTitle: string
  visitBody: string
  curiositiesTitle: string
  curiosities: string[]
  shopTitle: string
  shopIntro: string
  shopCta: string
  faqTitle: string
  faq: FaqItem[]
  relatedTitle: string
  related: RelatedLink[]
}

// Enlace afiliado curado (acortado amzn.to) con tag nuus-21 ya incluido
const AMAZON_URL = 'https://amzn.to/43d7Z2F'

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Bandera del Vaticano',
    title: 'Bandera del Vaticano · historia, significado y escudo',
    subtitle: 'Guía completa de la bandera de la Ciudad del Vaticano: dos colores, escudo con las llaves de San Pedro y la tiara papal, proporción cuadrada única en el mundo.',
    intro: 'La bandera de la Ciudad del Vaticano es una de las dos banderas nacionales cuadradas del mundo. La otra es la suiza. Es además una de las más antiguas que representan a una autoridad religiosa universal. Se adoptó oficialmente el 7 de junio de 1929, con los Pactos de Letrán. Tiene dos bandas verticales (amarillo dorado a la izquierda, blanco a la derecha) y sobre la franja blanca aparece el escudo de la Santa Sede: las llaves cruzadas de San Pedro rematadas por la tiara papal. En esta página están su origen, el significado de sus colores, las normas técnicas y dónde se podrá ver durante el viaje del Papa León XIV a España (6-12 de junio de 2026).',
    quickFacts: [
      { label: 'Adoptada', value: '7 de junio de 1929 (Pactos de Letrán)' },
      { label: 'Proporción', value: '1:1 (cuadrada)' },
      { label: 'Colores', value: 'Amarillo dorado · Blanco' },
      { label: 'Disposición', value: 'Dos bandas verticales' },
      { label: 'Escudo', value: 'Llaves cruzadas + tiara papal' },
      { label: 'País', value: 'Ciudad del Vaticano (Santa Sede)' },
    ],
    historyTitle: 'Historia y origen',
    historyBody: [
      'Los colores amarillo y blanco aparecieron como distintivo de la Santa Sede en 1808. Fue el Papa Pío VII quien los puso en la escarapela del ejército pontificio para sustituir a los antiguos rojo y amarillo. Lo hizo para que sus tropas se distinguieran de las napoleónicas, que entonces ocupaban Roma.',
      'A lo largo del siglo XIX la bandera amarilla y blanca representó a los Estados Pontificios. Esa etapa terminó en 1870, con la unificación italiana y la toma de Roma por el Reino de Italia. La Santa Sede se quedó sin soberanía territorial pero conservó los colores como símbolo de la autoridad espiritual del Papa.',
      'La bandera tal y como la conocemos hoy nació con los Pactos de Letrán, firmados el 11 de febrero de 1929 entre la Santa Sede y el Reino de Italia. Esos acuerdos crearon el Estado de la Ciudad del Vaticano. La bandera entró en vigor el 7 de junio de 1929 y esa es la fecha que el propio Vaticano considera su aniversario oficial.',
    ],
    colorsTitle: 'Qué significan los colores',
    colorsIntro: 'Los dos colores se leen en clave simbólica. Remiten a las llaves de San Pedro que aparecen en Mateo 16, 19 y a la doble autoridad, espiritual y temporal, que se atribuye al Papa.',
    colors: [
      { name: 'Amarillo dorado', hex: '#FFE000', meaning: 'Representa la llave de oro entregada por Cristo a San Pedro como símbolo del poder espiritual de atar y desatar en el cielo. También evoca la luz divina y la dignidad del sumo pontificado.' },
      { name: 'Blanco', hex: '#FFFFFF', meaning: 'Representa la llave de plata, símbolo del poder temporal del Papa sobre la tierra. También significa pureza, paz y la luz del Evangelio que se difunde universalmente.' },
    ],
    shieldTitle: 'El escudo: llaves de San Pedro y tiara papal',
    shieldIntro: 'En el centro de la franja blanca aparece el escudo de la Santa Sede, formado por tres elementos heráldicos cargados de significado.',
    shieldElements: [
      { name: 'Llave de oro', meaning: 'Apunta hacia arriba, hacia el cielo. Simboliza el poder espiritual del Papa: la potestad de atar y desatar en el cielo según las palabras de Cristo a Pedro (Mateo 16, 19).' },
      { name: 'Llave de plata', meaning: 'Apunta hacia abajo, hacia la tierra. Simboliza la jurisdicción del Papa sobre la Iglesia universal en el plano terrenal.' },
      { name: 'Cordón rojo', meaning: 'Une las dos llaves en cruz formando un aspa. Representa la unidad entre el poder espiritual y el temporal en la persona del sucesor de Pedro.' },
      { name: 'Tiara papal', meaning: 'Triple corona que históricamente representaba al Papa como padre de los reyes, gobernador del mundo y vicario de Cristo. Aunque Pablo VI dejó de usar la tiara en 1963, sigue presente en el escudo como símbolo de la autoridad papal.' },
    ],
    specsTitle: 'Especificaciones técnicas oficiales',
    specsIntro: 'La bandera del Vaticano sigue normas concretas establecidas por el Estado de la Ciudad del Vaticano para su confección y uso oficial.',
    specs: [
      { label: 'Proporción', value: '1:1 (cuadrada)' },
      { label: 'División vertical', value: 'Dos bandas iguales: amarillo a izquierda, blanco a derecha' },
      { label: 'Posición del escudo', value: 'Centrado en la banda blanca' },
      { label: 'Pantone amarillo', value: 'Pantone 116 C aproximadamente' },
      { label: 'Forma alternativa', value: 'Versión rectangular permitida para procesiones y uso interno' },
      { label: 'Banderas cuadradas', value: 'Solo Vaticano y Suiza tienen pabellón nacional cuadrado' },
    ],
    visitTitle: 'Dónde se verá la bandera durante la visita',
    visitBody: 'La bandera vaticana ondeará junto a la española en todos los actos oficiales del viaje: la bienvenida en el Palacio Real (6 de junio), la misa del Corpus Christi en la Plaza de Cibeles (7 de junio), el discurso en el Congreso (8 de junio), el encuentro diocesano en el Bernabéu, la misa en la Sagrada Familia con la inauguración de la Torre de Jesucristo (10 de junio), la eucaristía multitudinaria en el Estadio de Gran Canaria (11 de junio) y la misa de clausura en el Puerto de Santa Cruz de Tenerife (12 de junio). El protocolo coloca la bandera vaticana a la derecha de la española desde el punto de vista del público (a la izquierda desde el escenario). Es la regla diplomática habitual cuando recibe la Santa Sede.',
    curiositiesTitle: 'Curiosidades sobre la bandera vaticana',
    curiosities: [
      'Solo dos países en el mundo tienen bandera cuadrada: Ciudad del Vaticano y Suiza. La de los Estados Pontificios también fue cuadrada en algún momento histórico.',
      'El escudo de la bandera oficial de la Ciudad del Vaticano y el escudo del Papa reinante NO son idénticos: cada Papa tiene su escudo personal con su lema episcopal, mientras que la bandera lleva el escudo institucional de la Santa Sede.',
      'La bandera amarilla y blanca también es usada por los Caballeros del Santo Sepulcro de Jerusalén y otras órdenes pontificias.',
      'Los uniformes de la Guardia Suiza Pontificia recogen los mismos colores amarillo, rojo y azul atribuidos por tradición a Miguel Ángel, complementando visualmente la bandera vaticana en los actos oficiales.',
      'La Ciudad del Vaticano es el Estado independiente más pequeño del mundo (0,49 km²) y sin embargo su bandera ondea en más embajadas que la de muchos países: la Santa Sede mantiene relaciones diplomáticas con más de 180 estados.',
    ],
    shopTitle: 'Dónde comprar una bandera del Vaticano',
    shopIntro: 'Si quieres asistir a los actos del Papa con la bandera vaticana, hay modelos para mástil exterior, banderas de mano para vigilia y banderas pequeñas para balcón. Los modelos de poliéster de 90×90 cm son los más usados por peregrinos. Recuerda que la bandera oficial es cuadrada (1:1).',
    shopCta: 'Ver banderas del Vaticano en Amazon',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Por qué la bandera del Vaticano es amarilla y blanca?', a: 'Los colores amarillo y blanco fueron adoptados en 1808 por el Papa Pío VII para distinguir las tropas pontificias de las francesas durante la ocupación napoleónica. Posteriormente quedaron asociados al simbolismo de las dos llaves de San Pedro (oro para el cielo, plata para la tierra).' },
      { q: '¿Qué representa el escudo de la bandera del Vaticano?', a: 'El escudo está formado por dos llaves cruzadas (una de oro y otra de plata) unidas por un cordón rojo y rematadas por la tiara papal. Representan la autoridad espiritual y temporal del Papa como sucesor de San Pedro, en referencia a Mateo 16, 19: «Te daré las llaves del Reino de los cielos».' },
      { q: '¿Cuándo se adoptó la bandera del Vaticano?', a: 'La bandera actual fue oficializada con los Pactos de Letrán firmados el 11 de febrero de 1929 entre la Santa Sede y el Reino de Italia. Entró en vigor el 7 de junio de 1929, fecha considerada el aniversario oficial de la bandera y del Estado de la Ciudad del Vaticano.' },
      { q: '¿Por qué la bandera del Vaticano es cuadrada?', a: 'La forma cuadrada (proporción 1:1) deriva de la tradición heráldica de los estandartes militares y diplomáticos pontificios usados desde el siglo XIX. Solo dos países del mundo tienen pabellón nacional cuadrado: el Vaticano y Suiza.' },
      { q: '¿Es lo mismo la bandera de la Santa Sede que la del Vaticano?', a: 'Sí, son la misma bandera. La Santa Sede (la autoridad pontificia) y la Ciudad del Vaticano (el Estado físico) comparten la misma bandera oficial. Algunas representaciones diplomáticas usan únicamente el escudo sobre fondo blanco como variante.' },
      { q: '¿Puedo llevar una bandera del Vaticano a los actos del Papa en España?', a: 'Sí. En las vigilias, misas multitudinarias y procesiones está permitido y es habitual llevar la bandera vaticana, la nacional y banderas regionales. En recintos con control de acceso (Estadio Santiago Bernabéu, Estadio de Gran Canaria) consulta antes la normativa de objetos permitidos: los mástiles rígidos suelen estar prohibidos por seguridad.' },
    ],
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/programa', text: 'Programa completo del viaje apostólico' },
      { href: '/papa-leon-xiv', text: 'Biografía del Papa León XIV' },
      { href: '/que-llevar', text: 'Kit del peregrino: qué llevar a los actos' },
      { href: '/alzad-la-mirada', text: 'Lema del viaje: «Alzad la mirada»' },
      { href: '/historia-visitas-papales', text: 'Historia de las visitas papales a España' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Vatican flag',
    title: 'Vatican flag · history, meaning and coat of arms',
    subtitle: 'Complete guide to the flag of the Vatican City: two colours, coat of arms with Saint Peter’s keys and the papal tiara, unique square proportion.',
    intro: 'The flag of Vatican City is one of the few square national flags in the world (together with Switzerland’s) and one of the oldest linked to a universal religious authority. Officially adopted on 7 June 1929 with the Lateran Pacts, it features two vertical bands —golden yellow and white— with the coat of arms of the Holy See on the white band: Saint Peter’s crossed keys topped by the papal tiara. This page explains its origin, meaning, technical specifications and where to see it during Pope Leo XIV’s Apostolic Journey to Spain (6-12 June 2026).',
    quickFacts: [
      { label: 'Adopted', value: '7 June 1929 (Lateran Pacts)' },
      { label: 'Proportion', value: '1:1 (square)' },
      { label: 'Colours', value: 'Golden yellow · White' },
      { label: 'Layout', value: 'Two vertical bands' },
      { label: 'Coat of arms', value: 'Crossed keys + papal tiara' },
      { label: 'Country', value: 'Vatican City (Holy See)' },
    ],
    historyTitle: 'History and origin',
    historyBody: [
      'The use of yellow and white to represent the Holy See dates back to 1808, when Pope Pius VII adopted them as the cockade of the papal army, replacing the old red and yellow. The aim was to distinguish papal troops from the Napoleonic forces occupying Rome.',
      'During the 19th century, the yellow and white flag represented the Papal States until Italian unification in 1870, when Rome was taken by the Kingdom of Italy. The Holy See lost its territorial sovereignty but retained the colours as a symbol of the Pope’s spiritual authority.',
      'The modern flag was formalised by the Lateran Pacts of 11 February 1929 between the Holy See and the Kingdom of Italy, creating Vatican City State. It came into force on 7 June 1929, the date considered the official anniversary of the flag.',
    ],
    colorsTitle: 'Meaning of the colours',
    colorsIntro: 'The two colours of the flag have a symbolic reading linked to Saint Peter’s keys in Matthew 16:19 and to the Pope’s spiritual and temporal authority.',
    colors: [
      { name: 'Golden yellow', hex: '#FFE000', meaning: 'Represents the gold key given by Christ to Saint Peter as a symbol of the spiritual power to bind and loose in heaven. It also evokes divine light and the dignity of the supreme pontificate.' },
      { name: 'White', hex: '#FFFFFF', meaning: 'Represents the silver key, symbol of the Pope’s temporal power on earth. It also means purity, peace and the light of the Gospel that spreads universally.' },
    ],
    shieldTitle: 'The coat of arms: Saint Peter’s keys and the papal tiara',
    shieldIntro: 'At the centre of the white band appears the coat of arms of the Holy See, formed by three heraldic elements full of meaning.',
    shieldElements: [
      { name: 'Gold key', meaning: 'Points upwards, towards heaven. Symbolises the Pope’s spiritual power: the power to bind and loose in heaven according to Christ’s words to Peter (Matthew 16:19).' },
      { name: 'Silver key', meaning: 'Points downwards, towards the earth. Symbolises the Pope’s jurisdiction over the universal Church on the earthly plane.' },
      { name: 'Red cord', meaning: 'Joins the two keys in a cross. Represents the unity between the spiritual and the temporal power in the person of Peter’s successor.' },
      { name: 'Papal tiara', meaning: 'Triple crown that historically represented the Pope as father of kings, ruler of the world and vicar of Christ. Although Paul VI ceased to use the tiara in 1963, it remains in the coat of arms as a symbol of papal authority.' },
    ],
    specsTitle: 'Official technical specifications',
    specsIntro: 'The Vatican flag follows specific norms established by the Vatican City State for its manufacture and official use.',
    specs: [
      { label: 'Proportion', value: '1:1 (square)' },
      { label: 'Vertical division', value: 'Two equal bands: yellow on the left, white on the right' },
      { label: 'Coat of arms position', value: 'Centred on the white band' },
      { label: 'Yellow Pantone', value: 'Approximately Pantone 116 C' },
      { label: 'Alternative form', value: 'Rectangular version allowed for processions and internal use' },
      { label: 'Square flags', value: 'Only the Vatican and Switzerland have square national flags' },
    ],
    visitTitle: 'The Vatican flag during the Pope’s visit to Spain',
    visitBody: 'During Pope Leo XIV’s Apostolic Journey to Spain (6-12 June 2026), the Vatican flag flies in all the Pontiff’s official venues alongside the Spanish flag: at the Royal Palace during the welcome ceremony on 6 June, in Plaza de Cibeles for the Corpus Christi Holy Mass on 7 June, in the Congress of Deputies during the 8 June address, in the Santiago Bernabéu Stadium for the diocesan gathering, in the Basilica of the Sagrada Familia for the inauguration of the Tower of Jesus Christ (10 June), in the Gran Canaria Stadium for the massive Eucharist (11 June) and at the Port of Santa Cruz de Tenerife for the closing Mass (12 June). Official protocol places the Vatican flag to the right of the Spanish flag as seen from the audience (to the left from the stage), following Vatican diplomatic courtesy.',
    curiositiesTitle: 'Curiosities about the Vatican flag',
    curiosities: [
      'Only two countries in the world have a square flag: Vatican City and Switzerland. The Papal States also had a square flag at some point in history.',
      'The coat of arms of the official Vatican City flag and the coat of arms of the reigning Pope are NOT identical: each Pope has his personal coat of arms with his episcopal motto, while the flag bears the institutional coat of arms of the Holy See.',
      'The yellow and white flag is also used by the Knights of the Holy Sepulchre of Jerusalem and other pontifical orders.',
      'The uniforms of the Pontifical Swiss Guard use the same yellow, red and blue colours traditionally attributed to Michelangelo, visually complementing the Vatican flag at official events.',
      'Vatican City is the smallest independent state in the world (0.49 km²) and yet its flag flies in more embassies than that of many countries: the Holy See maintains diplomatic relations with more than 180 states.',
    ],
    shopTitle: 'Where to buy a Vatican flag',
    shopIntro: 'If you want to attend the Pope’s events with the Vatican flag, there are models for outdoor poles, hand flags for vigils and small balcony flags. The 90×90 cm polyester models are the most used by pilgrims. Remember that the official flag is square (1:1).',
    shopCta: 'See Vatican flags on Amazon',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Why is the Vatican flag yellow and white?', a: 'The yellow and white colours were adopted in 1808 by Pope Pius VII to distinguish the papal troops from the French ones during the Napoleonic occupation. They were later associated with the symbolism of the two keys of Saint Peter (gold for heaven, silver for the earth).' },
      { q: 'What does the coat of arms on the Vatican flag represent?', a: 'The coat of arms is formed by two crossed keys (one gold and one silver) joined by a red cord and topped by the papal tiara. They represent the spiritual and temporal authority of the Pope as successor of Saint Peter, in reference to Matthew 16:19: "I will give you the keys of the kingdom of heaven."' },
      { q: 'When was the Vatican flag adopted?', a: 'The current flag was formalised by the Lateran Pacts signed on 11 February 1929 between the Holy See and the Kingdom of Italy. It came into force on 7 June 1929, the date considered the official anniversary of the flag and of Vatican City State.' },
      { q: 'Why is the Vatican flag square?', a: 'The square shape (1:1 proportion) derives from the heraldic tradition of papal military and diplomatic standards used since the 19th century. Only two countries in the world have a square national flag: the Vatican and Switzerland.' },
      { q: 'Is the Holy See flag the same as the Vatican flag?', a: 'Yes, they are the same flag. The Holy See (the papal authority) and Vatican City (the physical state) share the same official flag. Some diplomatic representations use only the coat of arms on a white background as a variant.' },
      { q: 'Can I bring a Vatican flag to the Pope’s events in Spain?', a: 'Yes. At vigils, mass Eucharists and processions it is permitted and customary to bring the Vatican flag, the national flag and regional flags. In venues with access control (Santiago Bernabéu Stadium, Gran Canaria Stadium) check the rules on permitted objects beforehand: rigid poles are usually prohibited for safety reasons.' },
    ],
    relatedTitle: 'Related pages',
    related: [
      { href: '/programa', text: 'Full schedule of the apostolic journey' },
      { href: '/papa-leon-xiv', text: 'Biography of Pope Leo XIV' },
      { href: '/que-llevar', text: 'Pilgrim kit: what to bring' },
      { href: '/alzad-la-mirada', text: 'Journey motto: "Lift up your eyes"' },
      { href: '/historia-visitas-papales', text: 'History of papal visits to Spain' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Bandiera del Vaticano',
    title: 'Bandiera del Vaticano · storia, significato e stemma',
    subtitle: 'Guida completa della bandiera della Città del Vaticano: due colori, stemma con le chiavi di San Pietro e la tiara papale, proporzione quadrata unica al mondo.',
    intro: 'La bandiera della Città del Vaticano è una delle poche bandiere quadrate nazionali al mondo (insieme a quella svizzera) e una delle più antiche legate a un’autorità religiosa universale. Adottata ufficialmente il 7 giugno 1929 con i Patti Lateranensi, presenta due bande verticali —giallo dorato e bianco— con lo stemma della Santa Sede sulla banda bianca: le chiavi incrociate di San Pietro sormontate dalla tiara papale. Questa pagina spiega la sua origine, il significato, le specifiche tecniche e dove vederla durante il Viaggio Apostolico di Papa Leone XIV in Spagna (6-12 giugno 2026).',
    quickFacts: [
      { label: 'Adottata', value: '7 giugno 1929 (Patti Lateranensi)' },
      { label: 'Proporzione', value: '1:1 (quadrata)' },
      { label: 'Colori', value: 'Giallo dorato · Bianco' },
      { label: 'Disposizione', value: 'Due bande verticali' },
      { label: 'Stemma', value: 'Chiavi incrociate + tiara papale' },
      { label: 'Paese', value: 'Città del Vaticano (Santa Sede)' },
    ],
    historyTitle: 'Storia e origine',
    historyBody: [
      'L’uso del giallo e del bianco per rappresentare la Santa Sede risale al 1808, quando Papa Pio VII li adottò come coccarda dell’esercito pontificio in sostituzione degli antichi colori rosso e giallo. L’obiettivo era distinguere le truppe pontificie da quelle napoleoniche che occupavano Roma.',
      'Durante il XIX secolo la bandiera gialla e bianca rappresentò lo Stato Pontificio fino all’unificazione italiana del 1870, quando Roma fu presa dal Regno d’Italia. La Santa Sede perse la sovranità territoriale ma conservò i colori come simbolo dell’autorità spirituale del Papa.',
      'La bandiera moderna fu ufficializzata con i Patti Lateranensi dell’11 febbraio 1929 tra la Santa Sede e il Regno d’Italia, che crearono lo Stato della Città del Vaticano. Entrò in vigore il 7 giugno 1929, data considerata l’anniversario ufficiale della bandiera.',
    ],
    colorsTitle: 'Significato dei colori',
    colorsIntro: 'I due colori della bandiera hanno una lettura simbolica legata alle chiavi di San Pietro in Matteo 16,19 e all’autorità spirituale e temporale del Papa.',
    colors: [
      { name: 'Giallo dorato', hex: '#FFE000', meaning: 'Rappresenta la chiave d’oro consegnata da Cristo a San Pietro come simbolo del potere spirituale di legare e sciogliere nei cieli. Evoca anche la luce divina e la dignità del sommo pontificato.' },
      { name: 'Bianco', hex: '#FFFFFF', meaning: 'Rappresenta la chiave d’argento, simbolo del potere temporale del Papa sulla terra. Significa anche purezza, pace e la luce del Vangelo che si diffonde universalmente.' },
    ],
    shieldTitle: 'Lo stemma: chiavi di San Pietro e tiara papale',
    shieldIntro: 'Al centro della banda bianca compare lo stemma della Santa Sede, formato da tre elementi araldici carichi di significato.',
    shieldElements: [
      { name: 'Chiave d’oro', meaning: 'Punta verso l’alto, verso il cielo. Simboleggia il potere spirituale del Papa: la potestà di legare e sciogliere nei cieli secondo le parole di Cristo a Pietro (Matteo 16,19).' },
      { name: 'Chiave d’argento', meaning: 'Punta verso il basso, verso la terra. Simboleggia la giurisdizione del Papa sulla Chiesa universale sul piano terreno.' },
      { name: 'Cordone rosso', meaning: 'Unisce le due chiavi in croce. Rappresenta l’unità tra il potere spirituale e quello temporale nella persona del successore di Pietro.' },
      { name: 'Tiara papale', meaning: 'Tripla corona che storicamente rappresentava il Papa come padre dei re, governatore del mondo e vicario di Cristo. Sebbene Paolo VI abbia smesso di usarla nel 1963, è rimasta nello stemma come simbolo dell’autorità papale.' },
    ],
    specsTitle: 'Specifiche tecniche ufficiali',
    specsIntro: 'La bandiera del Vaticano segue norme specifiche stabilite dallo Stato della Città del Vaticano per la sua fabbricazione e l’uso ufficiale.',
    specs: [
      { label: 'Proporzione', value: '1:1 (quadrata)' },
      { label: 'Divisione verticale', value: 'Due bande uguali: giallo a sinistra, bianco a destra' },
      { label: 'Posizione dello stemma', value: 'Centrato sulla banda bianca' },
      { label: 'Pantone giallo', value: 'Pantone 116 C circa' },
      { label: 'Forma alternativa', value: 'Versione rettangolare consentita per processioni e uso interno' },
      { label: 'Bandiere quadrate', value: 'Solo Vaticano e Svizzera hanno bandiera nazionale quadrata' },
    ],
    visitTitle: 'La bandiera vaticana nel viaggio del Papa in Spagna',
    visitBody: 'Durante il Viaggio Apostolico di Papa Leone XIV in Spagna (6-12 giugno 2026), la bandiera vaticana sventola in tutti i luoghi ufficiali del Pontefice accanto a quella spagnola: al Palazzo Reale durante la cerimonia di benvenuto del 6 giugno, in Plaza de Cibeles per la Santa Messa del Corpus Domini del 7 giugno, al Congresso dei Deputati durante il discorso dell’8 giugno, nello Stadio Santiago Bernabéu per l’incontro diocesano, nella Basilica della Sagrada Familia per l’inaugurazione della Torre di Gesù Cristo (10 giugno), nello Stadio di Gran Canaria per l’Eucaristia multitudinaria (11 giugno) e al Porto di Santa Cruz de Tenerife per la Messa di chiusura (12 giugno). Il protocollo ufficiale colloca la bandiera vaticana a destra di quella spagnola vista dal pubblico (a sinistra dal palco), secondo la cortesia diplomatica vaticana.',
    curiositiesTitle: 'Curiosità sulla bandiera vaticana',
    curiosities: [
      'Solo due paesi al mondo hanno una bandiera quadrata: Città del Vaticano e Svizzera. Anche lo Stato Pontificio aveva avuto una bandiera quadrata in alcuni momenti storici.',
      'Lo stemma della bandiera ufficiale della Città del Vaticano e quello del Papa regnante NON sono identici: ogni Papa ha il proprio stemma personale con il suo motto episcopale, mentre la bandiera porta lo stemma istituzionale della Santa Sede.',
      'La bandiera gialla e bianca è usata anche dai Cavalieri del Santo Sepolcro di Gerusalemme e da altri ordini pontifici.',
      'Le uniformi della Guardia Svizzera Pontificia riprendono i colori giallo, rosso e blu tradizionalmente attribuiti a Michelangelo, completando visivamente la bandiera vaticana nelle cerimonie ufficiali.',
      'La Città del Vaticano è lo Stato indipendente più piccolo al mondo (0,49 km²), eppure la sua bandiera sventola in più ambasciate di quelle di molti paesi: la Santa Sede ha relazioni diplomatiche con più di 180 Stati.',
    ],
    shopTitle: 'Dove comprare una bandiera del Vaticano',
    shopIntro: 'Se vuoi partecipare agli atti del Papa con la bandiera vaticana, ci sono modelli per asta esterna, bandiere a mano per veglia e piccole bandiere da balcone. I modelli in poliestere 90×90 cm sono i più usati dai pellegrini. Ricorda che la bandiera ufficiale è quadrata (1:1).',
    shopCta: 'Vedi bandiere del Vaticano su Amazon',
    faqTitle: 'Domande frequenti',
    faq: [
      { q: 'Perché la bandiera del Vaticano è gialla e bianca?', a: 'I colori giallo e bianco furono adottati nel 1808 da Papa Pio VII per distinguere le truppe pontificie da quelle francesi durante l’occupazione napoleonica. Successivamente furono associati al simbolismo delle due chiavi di San Pietro (oro per il cielo, argento per la terra).' },
      { q: 'Cosa rappresenta lo stemma della bandiera vaticana?', a: 'Lo stemma è formato da due chiavi incrociate (una d’oro e una d’argento) unite da un cordone rosso e sormontate dalla tiara papale. Rappresentano l’autorità spirituale e temporale del Papa come successore di San Pietro, in riferimento a Matteo 16,19: «Ti darò le chiavi del Regno dei cieli».' },
      { q: 'Quando è stata adottata la bandiera del Vaticano?', a: 'La bandiera attuale fu ufficializzata con i Patti Lateranensi firmati l’11 febbraio 1929 tra la Santa Sede e il Regno d’Italia. Entrò in vigore il 7 giugno 1929, data considerata l’anniversario ufficiale della bandiera e dello Stato della Città del Vaticano.' },
      { q: 'Perché la bandiera del Vaticano è quadrata?', a: 'La forma quadrata (proporzione 1:1) deriva dalla tradizione araldica degli stendardi militari e diplomatici pontifici utilizzati dal XIX secolo. Solo due paesi al mondo hanno una bandiera nazionale quadrata: il Vaticano e la Svizzera.' },
      { q: 'È la stessa cosa la bandiera della Santa Sede e quella del Vaticano?', a: 'Sì, è la stessa bandiera. La Santa Sede (l’autorità pontificia) e la Città del Vaticano (lo Stato fisico) condividono la stessa bandiera ufficiale. Alcune rappresentanze diplomatiche usano solo lo stemma su sfondo bianco come variante.' },
      { q: 'Posso portare una bandiera del Vaticano agli atti del Papa in Spagna?', a: 'Sì. Nelle veglie, nelle messe multitudinarie e nelle processioni è consentito e abituale portare la bandiera vaticana, quella nazionale e bandiere regionali. Nei recinti con controllo di accesso (Stadio Santiago Bernabéu, Stadio di Gran Canaria) consulta prima la normativa sugli oggetti consentiti: le aste rigide sono solitamente vietate per motivi di sicurezza.' },
    ],
    relatedTitle: 'Pagine correlate',
    related: [
      { href: '/programa', text: 'Programma completo del viaggio apostolico' },
      { href: '/papa-leon-xiv', text: 'Biografia di Papa Leone XIV' },
      { href: '/que-llevar', text: 'Kit del pellegrino: cosa portare' },
      { href: '/alzad-la-mirada', text: 'Motto del viaggio: «Alzate gli occhi»' },
      { href: '/historia-visitas-papales', text: 'Storia delle visite papali in Spagna' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Drapeau du Vatican',
    title: 'Drapeau du Vatican · histoire, signification et blason',
    subtitle: 'Guide complet du drapeau de la Cité du Vatican : deux couleurs, blason avec les clés de Saint Pierre et la tiare papale, proportion carrée unique au monde.',
    intro: 'Le drapeau de la Cité du Vatican est l’un des rares drapeaux nationaux carrés du monde (avec celui de la Suisse) et l’un des plus anciens liés à une autorité religieuse universelle. Adopté officiellement le 7 juin 1929 avec les Accords du Latran, il présente deux bandes verticales —jaune doré et blanc— avec le blason du Saint-Siège sur la bande blanche : les clés croisées de Saint Pierre surmontées de la tiare papale. Cette page explique son origine, sa signification, ses spécifications techniques et où le voir durant le Voyage apostolique du Pape Léon XIV en Espagne (6-12 juin 2026).',
    quickFacts: [
      { label: 'Adopté', value: '7 juin 1929 (Accords du Latran)' },
      { label: 'Proportion', value: '1:1 (carré)' },
      { label: 'Couleurs', value: 'Jaune doré · Blanc' },
      { label: 'Disposition', value: 'Deux bandes verticales' },
      { label: 'Blason', value: 'Clés croisées + tiare papale' },
      { label: 'Pays', value: 'Cité du Vatican (Saint-Siège)' },
    ],
    historyTitle: 'Histoire et origine',
    historyBody: [
      'L’usage du jaune et du blanc pour représenter le Saint-Siège remonte à 1808, lorsque le Pape Pie VII les adopta comme cocarde de l’armée pontificale, remplaçant les anciennes couleurs rouge et jaune. L’objectif était de distinguer les troupes pontificales de celles de Napoléon qui occupaient Rome.',
      'Au XIXe siècle, le drapeau jaune et blanc représenta les États pontificaux jusqu’à l’unification italienne de 1870, quand Rome fut prise par le Royaume d’Italie. Le Saint-Siège perdit sa souveraineté territoriale mais conserva les couleurs comme symbole de l’autorité spirituelle du Pape.',
      'Le drapeau moderne fut officialisé par les Accords du Latran du 11 février 1929 entre le Saint-Siège et le Royaume d’Italie, créant l’État de la Cité du Vatican. Il entra en vigueur le 7 juin 1929, date considérée comme l’anniversaire officiel du drapeau.',
    ],
    colorsTitle: 'Signification des couleurs',
    colorsIntro: 'Les deux couleurs du drapeau ont une lecture symbolique liée aux clés de Saint Pierre dans Matthieu 16, 19 et à l’autorité spirituelle et temporelle du Pape.',
    colors: [
      { name: 'Jaune doré', hex: '#FFE000', meaning: 'Représente la clé d’or remise par le Christ à Saint Pierre comme symbole du pouvoir spirituel de lier et délier dans les cieux. Évoque aussi la lumière divine et la dignité du souverain pontificat.' },
      { name: 'Blanc', hex: '#FFFFFF', meaning: 'Représente la clé d’argent, symbole du pouvoir temporel du Pape sur la terre. Signifie aussi pureté, paix et lumière de l’Évangile diffusée universellement.' },
    ],
    shieldTitle: 'Le blason : clés de Saint Pierre et tiare papale',
    shieldIntro: 'Au centre de la bande blanche apparaît le blason du Saint-Siège, formé de trois éléments héraldiques chargés de sens.',
    shieldElements: [
      { name: 'Clé d’or', meaning: 'Pointe vers le haut, vers le ciel. Symbolise le pouvoir spirituel du Pape : la puissance de lier et délier dans les cieux selon les paroles du Christ à Pierre (Matthieu 16, 19).' },
      { name: 'Clé d’argent', meaning: 'Pointe vers le bas, vers la terre. Symbolise la juridiction du Pape sur l’Église universelle au plan terrestre.' },
      { name: 'Cordon rouge', meaning: 'Unit les deux clés en croix. Représente l’unité entre le pouvoir spirituel et le pouvoir temporel dans la personne du successeur de Pierre.' },
      { name: 'Tiare papale', meaning: 'Triple couronne qui représentait historiquement le Pape comme père des rois, gouverneur du monde et vicaire du Christ. Bien que Paul VI ait cessé de l’utiliser en 1963, elle reste sur le blason comme symbole de l’autorité papale.' },
    ],
    specsTitle: 'Spécifications techniques officielles',
    specsIntro: 'Le drapeau du Vatican suit des normes précises établies par l’État de la Cité du Vatican pour sa confection et son usage officiel.',
    specs: [
      { label: 'Proportion', value: '1:1 (carré)' },
      { label: 'Division verticale', value: 'Deux bandes égales : jaune à gauche, blanc à droite' },
      { label: 'Position du blason', value: 'Centré sur la bande blanche' },
      { label: 'Pantone jaune', value: 'Pantone 116 C environ' },
      { label: 'Forme alternative', value: 'Version rectangulaire autorisée pour processions et usage interne' },
      { label: 'Drapeaux carrés', value: 'Seuls le Vatican et la Suisse ont un drapeau national carré' },
    ],
    visitTitle: 'Le drapeau du Vatican lors du voyage du Pape en Espagne',
    visitBody: 'Pendant le Voyage apostolique du Pape Léon XIV en Espagne (6-12 juin 2026), le drapeau du Vatican flotte dans tous les lieux officiels du Pontife aux côtés du drapeau espagnol : au Palais Royal lors de la cérémonie de bienvenue du 6 juin, sur la Plaza de Cibeles pour la Sainte Messe du Corpus Christi du 7 juin, au Congrès des députés pour le discours du 8 juin, au stade Santiago Bernabéu pour la rencontre diocésaine, à la Basilique de la Sagrada Família pour l’inauguration de la Tour de Jésus-Christ (10 juin), au stade de Grande Canarie pour l’Eucharistie multitudinaire (11 juin) et au port de Santa Cruz de Tenerife pour la Messe de clôture (12 juin). Le protocole officiel place le drapeau du Vatican à droite du drapeau espagnol vu du public (à gauche depuis la scène), selon la courtoisie diplomatique vaticane.',
    curiositiesTitle: 'Curiosités sur le drapeau du Vatican',
    curiosities: [
      'Seuls deux pays au monde ont un drapeau carré : la Cité du Vatican et la Suisse. Les États pontificaux ont également eu un drapeau carré à certaines époques.',
      'Le blason du drapeau officiel de la Cité du Vatican et celui du Pape régnant ne sont PAS identiques : chaque Pape a son blason personnel avec sa devise épiscopale, tandis que le drapeau porte le blason institutionnel du Saint-Siège.',
      'Le drapeau jaune et blanc est aussi utilisé par les Chevaliers du Saint-Sépulcre de Jérusalem et d’autres ordres pontificaux.',
      'Les uniformes de la Garde suisse pontificale reprennent les couleurs jaune, rouge et bleu traditionnellement attribuées à Michel-Ange, complétant visuellement le drapeau du Vatican lors des cérémonies officielles.',
      'La Cité du Vatican est le plus petit État indépendant du monde (0,49 km²) et pourtant son drapeau flotte dans plus d’ambassades que celui de beaucoup d’autres pays : le Saint-Siège entretient des relations diplomatiques avec plus de 180 États.',
    ],
    shopTitle: 'Où acheter un drapeau du Vatican',
    shopIntro: 'Si vous voulez assister aux actes du Pape avec le drapeau du Vatican, il existe des modèles pour mât extérieur, des drapeaux à main pour veillée et des petits drapeaux de balcon. Les modèles en polyester de 90×90 cm sont les plus utilisés par les pèlerins. N’oubliez pas que le drapeau officiel est carré (1:1).',
    shopCta: 'Voir les drapeaux du Vatican sur Amazon',
    faqTitle: 'Questions fréquentes',
    faq: [
      { q: 'Pourquoi le drapeau du Vatican est-il jaune et blanc ?', a: 'Les couleurs jaune et blanc furent adoptées en 1808 par le Pape Pie VII pour distinguer les troupes pontificales des troupes françaises durant l’occupation napoléonienne. Elles furent ensuite associées au symbolisme des deux clés de Saint Pierre (or pour le ciel, argent pour la terre).' },
      { q: 'Que représente le blason du drapeau du Vatican ?', a: 'Le blason est formé de deux clés croisées (une en or et une en argent) unies par un cordon rouge et surmontées de la tiare papale. Elles représentent l’autorité spirituelle et temporelle du Pape comme successeur de Saint Pierre, en référence à Matthieu 16, 19 : « Je te donnerai les clés du Royaume des cieux ».' },
      { q: 'Quand le drapeau du Vatican a-t-il été adopté ?', a: 'Le drapeau actuel fut officialisé par les Accords du Latran signés le 11 février 1929 entre le Saint-Siège et le Royaume d’Italie. Il entra en vigueur le 7 juin 1929, date considérée comme l’anniversaire officiel du drapeau et de l’État de la Cité du Vatican.' },
      { q: 'Pourquoi le drapeau du Vatican est-il carré ?', a: 'La forme carrée (proportion 1:1) provient de la tradition héraldique des étendards militaires et diplomatiques pontificaux utilisés depuis le XIXe siècle. Seuls deux pays au monde ont un drapeau national carré : le Vatican et la Suisse.' },
      { q: 'Le drapeau du Saint-Siège est-il le même que celui du Vatican ?', a: 'Oui, c’est le même drapeau. Le Saint-Siège (l’autorité pontificale) et la Cité du Vatican (l’État physique) partagent le même drapeau officiel. Certaines représentations diplomatiques utilisent seulement le blason sur fond blanc comme variante.' },
      { q: 'Puis-je apporter un drapeau du Vatican aux actes du Pape en Espagne ?', a: 'Oui. Lors des veillées, des messes multitudinaires et des processions, il est permis et habituel d’apporter le drapeau du Vatican, le drapeau national et des drapeaux régionaux. Dans les lieux avec contrôle d’accès (stade Santiago Bernabéu, stade de Grande Canarie), consultez au préalable la réglementation des objets autorisés : les mâts rigides sont généralement interdits pour des raisons de sécurité.' },
    ],
    relatedTitle: 'Pages liées',
    related: [
      { href: '/programa', text: 'Programme complet du voyage apostolique' },
      { href: '/papa-leon-xiv', text: 'Biographie du Pape Léon XIV' },
      { href: '/que-llevar', text: 'Kit du pèlerin : que apporter' },
      { href: '/alzad-la-mirada', text: 'Devise du voyage : « Levez les yeux »' },
      { href: '/historia-visitas-papales', text: 'Histoire des visites papales en Espagne' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Vatikanflagge',
    title: 'Vatikanflagge · Geschichte, Bedeutung und Wappen',
    subtitle: 'Vollständiger Leitfaden zur Flagge der Vatikanstadt: zwei Farben, Wappen mit den Schlüsseln Petri und der päpstlichen Tiara, weltweit einzigartiges quadratisches Format.',
    intro: 'Die Flagge der Vatikanstadt ist eine der wenigen quadratischen Nationalflaggen der Welt (zusammen mit der Schweizer Flagge) und eine der ältesten, die mit einer universalen religiösen Autorität verbunden ist. Offiziell am 7. Juni 1929 mit den Lateranverträgen angenommen, zeigt sie zwei senkrechte Bahnen —goldgelb und weiß— mit dem Wappen des Heiligen Stuhls auf der weißen Bahn: die gekreuzten Schlüssel Petri, gekrönt von der päpstlichen Tiara. Diese Seite erklärt Ursprung, Bedeutung, technische Daten und wo sie während der Apostolischen Reise von Papst Leo XIV. nach Spanien (6.–12. Juni 2026) zu sehen ist.',
    quickFacts: [
      { label: 'Angenommen', value: '7. Juni 1929 (Lateranverträge)' },
      { label: 'Proportion', value: '1:1 (quadratisch)' },
      { label: 'Farben', value: 'Goldgelb · Weiß' },
      { label: 'Anordnung', value: 'Zwei senkrechte Bahnen' },
      { label: 'Wappen', value: 'Gekreuzte Schlüssel + päpstliche Tiara' },
      { label: 'Land', value: 'Vatikanstadt (Heiliger Stuhl)' },
    ],
    historyTitle: 'Geschichte und Ursprung',
    historyBody: [
      'Die Verwendung von Gelb und Weiß zur Repräsentation des Heiligen Stuhls geht auf das Jahr 1808 zurück, als Papst Pius VII. sie als Kokarde des päpstlichen Heeres anstelle der alten roten und gelben Farben einführte. Ziel war, die päpstlichen Truppen von den napoleonischen Truppen zu unterscheiden, die Rom besetzten.',
      'Im 19. Jahrhundert vertrat die gelb-weiße Flagge den Kirchenstaat bis zur italienischen Einigung 1870, als Rom vom Königreich Italien eingenommen wurde. Der Heilige Stuhl verlor seine territoriale Souveränität, behielt aber die Farben als Symbol der geistlichen Autorität des Papstes.',
      'Die heutige Flagge wurde mit den Lateranverträgen vom 11. Februar 1929 zwischen dem Heiligen Stuhl und dem Königreich Italien festgelegt, durch die der Staat Vatikanstadt geschaffen wurde. Sie trat am 7. Juni 1929 in Kraft, dem Datum, das als offizieller Jahrestag der Flagge gilt.',
    ],
    colorsTitle: 'Bedeutung der Farben',
    colorsIntro: 'Die beiden Farben der Flagge haben eine symbolische Bedeutung, die mit den Schlüsseln Petri in Matthäus 16,19 und mit der geistlichen und weltlichen Autorität des Papstes verbunden ist.',
    colors: [
      { name: 'Goldgelb', hex: '#FFE000', meaning: 'Steht für den goldenen Schlüssel, den Christus dem heiligen Petrus als Symbol der geistlichen Vollmacht zum Binden und Lösen im Himmel übergab. Symbolisiert auch das göttliche Licht und die Würde des Pontifikats.' },
      { name: 'Weiß', hex: '#FFFFFF', meaning: 'Steht für den silbernen Schlüssel, Symbol der weltlichen Vollmacht des Papstes auf Erden. Bedeutet auch Reinheit, Frieden und das Licht des Evangeliums, das sich universal verbreitet.' },
    ],
    shieldTitle: 'Das Wappen: Schlüssel Petri und päpstliche Tiara',
    shieldIntro: 'In der Mitte der weißen Bahn erscheint das Wappen des Heiligen Stuhls, das aus drei bedeutungsvollen heraldischen Elementen besteht.',
    shieldElements: [
      { name: 'Goldener Schlüssel', meaning: 'Zeigt nach oben, zum Himmel. Symbolisiert die geistliche Vollmacht des Papstes: die Macht zum Binden und Lösen im Himmel nach den Worten Christi an Petrus (Matthäus 16,19).' },
      { name: 'Silberner Schlüssel', meaning: 'Zeigt nach unten, zur Erde. Symbolisiert die Jurisdiktion des Papstes über die Universalkirche auf irdischer Ebene.' },
      { name: 'Rote Kordel', meaning: 'Verbindet die beiden Schlüssel in Kreuzform. Steht für die Einheit von geistlicher und weltlicher Vollmacht in der Person des Nachfolgers Petri.' },
      { name: 'Päpstliche Tiara', meaning: 'Dreifachkrone, die historisch den Papst als Vater der Könige, Herrscher der Welt und Stellvertreter Christi darstellte. Obwohl Paul VI. 1963 auf das Tragen der Tiara verzichtete, bleibt sie im Wappen als Symbol der päpstlichen Autorität.' },
    ],
    specsTitle: 'Offizielle technische Spezifikationen',
    specsIntro: 'Die Vatikanflagge folgt konkreten Normen, die vom Staat Vatikanstadt für ihre Herstellung und ihren offiziellen Gebrauch festgelegt wurden.',
    specs: [
      { label: 'Proportion', value: '1:1 (quadratisch)' },
      { label: 'Senkrechte Aufteilung', value: 'Zwei gleiche Bahnen: Gelb links, Weiß rechts' },
      { label: 'Position des Wappens', value: 'Zentriert auf der weißen Bahn' },
      { label: 'Pantone Gelb', value: 'Etwa Pantone 116 C' },
      { label: 'Alternativform', value: 'Rechteckige Version erlaubt für Prozessionen und internen Gebrauch' },
      { label: 'Quadratische Flaggen', value: 'Nur Vatikan und Schweiz haben eine quadratische Nationalflagge' },
    ],
    visitTitle: 'Die Vatikanflagge bei der Papstreise nach Spanien',
    visitBody: 'Während der Apostolischen Reise von Papst Leo XIV. nach Spanien (6.–12. Juni 2026) weht die Vatikanflagge an allen offiziellen Stätten des Pontifex neben der spanischen Flagge: im Königspalast bei der Begrüßungszeremonie am 6. Juni, am Plaza de Cibeles zur Fronleichnamsmesse am 7. Juni, im Abgeordnetenkongress bei der Rede am 8. Juni, im Estadio Santiago Bernabéu bei der Diözesanbegegnung, in der Basilika Sagrada Família zur Einweihung des Jesus-Christus-Turms (10. Juni), im Stadion von Gran Canaria zur Großmesse (11. Juni) und im Hafen von Santa Cruz de Tenerife zur Abschlussmesse (12. Juni). Das offizielle Protokoll platziert die Vatikanflagge rechts von der spanischen aus Sicht des Publikums (links von der Bühne aus), entsprechend der vatikanischen diplomatischen Höflichkeit.',
    curiositiesTitle: 'Wissenswertes über die Vatikanflagge',
    curiosities: [
      'Nur zwei Länder der Welt haben eine quadratische Flagge: Vatikanstadt und Schweiz. Auch der Kirchenstaat hatte historisch zeitweise eine quadratische Flagge.',
      'Das Wappen der offiziellen Flagge der Vatikanstadt und das Wappen des regierenden Papstes sind NICHT identisch: Jeder Papst hat ein persönliches Wappen mit seinem Bischofswahlspruch, während die Flagge das institutionelle Wappen des Heiligen Stuhls trägt.',
      'Die gelb-weiße Flagge wird auch von den Rittern des Heiligen Grabes von Jerusalem und anderen päpstlichen Orden verwendet.',
      'Die Uniformen der Päpstlichen Schweizergarde greifen die Farben Gelb, Rot und Blau auf, die traditionell Michelangelo zugeschrieben werden, und ergänzen optisch die Vatikanflagge bei offiziellen Anlässen.',
      'Die Vatikanstadt ist der kleinste unabhängige Staat der Welt (0,49 km²), und doch weht ihre Flagge in mehr Botschaften als die vieler Länder: Der Heilige Stuhl unterhält diplomatische Beziehungen zu über 180 Staaten.',
    ],
    shopTitle: 'Wo man eine Vatikanflagge kaufen kann',
    shopIntro: 'Wenn Sie mit der Vatikanflagge zu den Akten des Papstes gehen möchten, gibt es Modelle für Außenmasten, Handflaggen für Vigilien und kleine Balkonflaggen. Die Polyestermodelle 90×90 cm werden von Pilgern am meisten verwendet. Denken Sie daran, dass die offizielle Flagge quadratisch ist (1:1).',
    shopCta: 'Vatikanflaggen bei Amazon ansehen',
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Warum ist die Vatikanflagge gelb und weiß?', a: 'Die Farben Gelb und Weiß wurden 1808 von Papst Pius VII. eingeführt, um die päpstlichen Truppen während der napoleonischen Besatzung von den französischen zu unterscheiden. Später wurden sie mit der Symbolik der beiden Schlüssel Petri verbunden (Gold für den Himmel, Silber für die Erde).' },
      { q: 'Was bedeutet das Wappen auf der Vatikanflagge?', a: 'Das Wappen besteht aus zwei gekreuzten Schlüsseln (einem goldenen und einem silbernen), die durch eine rote Schnur verbunden und von der päpstlichen Tiara gekrönt sind. Sie stehen für die geistliche und weltliche Autorität des Papstes als Nachfolger Petri, in Bezug auf Matthäus 16,19: „Ich werde dir die Schlüssel des Himmelreichs geben."' },
      { q: 'Wann wurde die Vatikanflagge angenommen?', a: 'Die heutige Flagge wurde durch die Lateranverträge vom 11. Februar 1929 zwischen dem Heiligen Stuhl und dem Königreich Italien festgelegt. Sie trat am 7. Juni 1929 in Kraft, dem Datum, das als offizieller Jahrestag der Flagge und des Staates Vatikanstadt gilt.' },
      { q: 'Warum ist die Vatikanflagge quadratisch?', a: 'Die quadratische Form (Proportion 1:1) stammt aus der heraldischen Tradition päpstlicher militärischer und diplomatischer Standarten seit dem 19. Jahrhundert. Nur zwei Länder der Welt haben eine quadratische Nationalflagge: der Vatikan und die Schweiz.' },
      { q: 'Ist die Flagge des Heiligen Stuhls dieselbe wie die des Vatikans?', a: 'Ja, es ist dieselbe Flagge. Der Heilige Stuhl (die päpstliche Autorität) und die Vatikanstadt (der physische Staat) teilen sich die gleiche offizielle Flagge. Einige diplomatische Vertretungen verwenden nur das Wappen auf weißem Grund als Variante.' },
      { q: 'Darf ich eine Vatikanflagge zu den Akten des Papstes in Spanien mitbringen?', a: 'Ja. Bei Vigilien, Großmessen und Prozessionen ist es erlaubt und üblich, die Vatikanflagge, die Nationalflagge und Regionalflaggen mitzubringen. In Veranstaltungsorten mit Zugangskontrolle (Estadio Santiago Bernabéu, Stadion von Gran Canaria) prüfen Sie vorab die Vorschriften zu erlaubten Gegenständen: Starre Stangen sind meist aus Sicherheitsgründen verboten.' },
    ],
    relatedTitle: 'Verwandte Seiten',
    related: [
      { href: '/programa', text: 'Vollständiges Programm der apostolischen Reise' },
      { href: '/papa-leon-xiv', text: 'Biografie von Papst Leo XIV.' },
      { href: '/que-llevar', text: 'Pilgerausrüstung: was mitnehmen' },
      { href: '/alzad-la-mirada', text: 'Leitspruch der Reise: „Erhebt eure Augen"' },
      { href: '/historia-visitas-papales', text: 'Geschichte der Papstreisen nach Spanien' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Bandeira do Vaticano',
    title: 'Bandeira do Vaticano · história, significado e brasão',
    subtitle: 'Guia completo da bandeira da Cidade do Vaticano: duas cores, brasão com as chaves de São Pedro e a tiara papal, proporção quadrada única no mundo.',
    intro: 'A bandeira da Cidade do Vaticano é uma das poucas bandeiras nacionais quadradas do mundo (juntamente com a da Suíça) e uma das mais antigas ligadas a uma autoridade religiosa universal. Adotada oficialmente a 7 de junho de 1929 com os Pactos de Latrão, apresenta duas faixas verticais —amarelo dourado e branco— com o brasão da Santa Sé sobre a faixa branca: as chaves cruzadas de São Pedro encimadas pela tiara papal. Esta página explica a sua origem, significado, especificações técnicas e onde vê-la durante a Viagem Apostólica do Papa Leão XIV a Espanha (6-12 de junho de 2026).',
    quickFacts: [
      { label: 'Adotada', value: '7 de junho de 1929 (Pactos de Latrão)' },
      { label: 'Proporção', value: '1:1 (quadrada)' },
      { label: 'Cores', value: 'Amarelo dourado · Branco' },
      { label: 'Disposição', value: 'Duas faixas verticais' },
      { label: 'Brasão', value: 'Chaves cruzadas + tiara papal' },
      { label: 'País', value: 'Cidade do Vaticano (Santa Sé)' },
    ],
    historyTitle: 'História e origem',
    historyBody: [
      'O uso do amarelo e do branco para representar a Santa Sé remonta a 1808, quando o Papa Pio VII os adotou como escarapela do exército pontifício em substituição às antigas cores vermelho e amarelo. O objetivo era distinguir as tropas pontifícias das napoleónicas que ocupavam Roma.',
      'Durante o século XIX, a bandeira amarela e branca representou os Estados Pontifícios até à unificação italiana de 1870, quando Roma foi tomada pelo Reino de Itália. A Santa Sé perdeu a sua soberania territorial mas conservou as cores como símbolo da autoridade espiritual do Papa.',
      'A bandeira moderna foi oficializada com a assinatura dos Pactos de Latrão a 11 de fevereiro de 1929 entre a Santa Sé e o Reino de Itália, que criaram o Estado da Cidade do Vaticano. Entrou em vigor a 7 de junho de 1929, data considerada o aniversário oficial da bandeira.',
    ],
    colorsTitle: 'Significado das cores',
    colorsIntro: 'As duas cores da bandeira têm uma leitura simbólica ligada às chaves de São Pedro em Mateus 16,19 e à autoridade espiritual e temporal do Papa.',
    colors: [
      { name: 'Amarelo dourado', hex: '#FFE000', meaning: 'Representa a chave de ouro entregue por Cristo a São Pedro como símbolo do poder espiritual de ligar e desligar no céu. Evoca também a luz divina e a dignidade do sumo pontificado.' },
      { name: 'Branco', hex: '#FFFFFF', meaning: 'Representa a chave de prata, símbolo do poder temporal do Papa sobre a terra. Significa também pureza, paz e a luz do Evangelho que se difunde universalmente.' },
    ],
    shieldTitle: 'O brasão: chaves de São Pedro e tiara papal',
    shieldIntro: 'No centro da faixa branca aparece o brasão da Santa Sé, formado por três elementos heráldicos carregados de significado.',
    shieldElements: [
      { name: 'Chave de ouro', meaning: 'Aponta para cima, para o céu. Simboliza o poder espiritual do Papa: a potestade de ligar e desligar no céu segundo as palavras de Cristo a Pedro (Mateus 16,19).' },
      { name: 'Chave de prata', meaning: 'Aponta para baixo, para a terra. Simboliza a jurisdição do Papa sobre a Igreja universal no plano terreno.' },
      { name: 'Cordão vermelho', meaning: 'Une as duas chaves em cruz. Representa a unidade entre o poder espiritual e o temporal na pessoa do sucessor de Pedro.' },
      { name: 'Tiara papal', meaning: 'Tríplice coroa que historicamente representava o Papa como pai dos reis, governante do mundo e vigário de Cristo. Embora Paulo VI tenha deixado de usar a tiara em 1963, permanece no brasão como símbolo da autoridade papal.' },
    ],
    specsTitle: 'Especificações técnicas oficiais',
    specsIntro: 'A bandeira do Vaticano segue normas concretas estabelecidas pelo Estado da Cidade do Vaticano para a sua confeção e uso oficial.',
    specs: [
      { label: 'Proporção', value: '1:1 (quadrada)' },
      { label: 'Divisão vertical', value: 'Duas faixas iguais: amarelo à esquerda, branco à direita' },
      { label: 'Posição do brasão', value: 'Centrado na faixa branca' },
      { label: 'Pantone amarelo', value: 'Pantone 116 C aproximadamente' },
      { label: 'Forma alternativa', value: 'Versão retangular permitida para procissões e uso interno' },
      { label: 'Bandeiras quadradas', value: 'Apenas Vaticano e Suíça têm bandeira nacional quadrada' },
    ],
    visitTitle: 'A bandeira do Vaticano na visita do Papa a Espanha',
    visitBody: 'Durante a Viagem Apostólica do Papa Leão XIV a Espanha (6-12 de junho de 2026), a bandeira vaticana ondeia em todos os recintos oficiais do Pontífice junto à bandeira de Espanha: no Palácio Real durante a cerimónia de boas-vindas a 6 de junho, na Plaza de Cibeles para a Santa Missa do Corpus Christi a 7 de junho, no Congresso dos Deputados durante o discurso a 8 de junho, no Estádio Santiago Bernabéu para o encontro diocesano, na Basílica da Sagrada Família para a inauguração da Torre de Jesus Cristo (10 de junho), no Estádio de Gran Canária para a Eucaristia multitudinária (11 de junho) e no Porto de Santa Cruz de Tenerife para a Missa de encerramento (12 de junho). O protocolo oficial coloca a bandeira vaticana à direita da espanhola vista do público (à esquerda do palco), seguindo a cortesia diplomática vaticana.',
    curiositiesTitle: 'Curiosidades sobre a bandeira vaticana',
    curiosities: [
      'Apenas dois países no mundo têm bandeira quadrada: Cidade do Vaticano e Suíça. Os Estados Pontifícios também tiveram bandeira quadrada em alguns momentos históricos.',
      'O brasão da bandeira oficial da Cidade do Vaticano e o brasão do Papa reinante NÃO são idênticos: cada Papa tem o seu brasão pessoal com o seu lema episcopal, enquanto a bandeira traz o brasão institucional da Santa Sé.',
      'A bandeira amarela e branca é também usada pelos Cavaleiros do Santo Sepulcro de Jerusalém e por outras ordens pontifícias.',
      'Os uniformes da Guarda Suíça Pontifícia retomam as cores amarelo, vermelho e azul atribuídas pela tradição a Miguel Ângelo, complementando visualmente a bandeira vaticana nas cerimónias oficiais.',
      'A Cidade do Vaticano é o Estado independente mais pequeno do mundo (0,49 km²), e contudo a sua bandeira ondeia em mais embaixadas do que a de muitos países: a Santa Sé mantém relações diplomáticas com mais de 180 estados.',
    ],
    shopTitle: 'Onde comprar uma bandeira do Vaticano',
    shopIntro: 'Se quiser assistir aos atos do Papa com a bandeira vaticana, há modelos para mastro exterior, bandeiras de mão para vigília e pequenas bandeiras de varanda. Os modelos de poliéster de 90×90 cm são os mais usados pelos peregrinos. Lembre-se de que a bandeira oficial é quadrada (1:1).',
    shopCta: 'Ver bandeiras do Vaticano na Amazon',
    faqTitle: 'Perguntas frequentes',
    faq: [
      { q: 'Porque é a bandeira do Vaticano amarela e branca?', a: 'As cores amarelo e branco foram adotadas em 1808 pelo Papa Pio VII para distinguir as tropas pontifícias das francesas durante a ocupação napoleónica. Posteriormente ficaram associadas ao simbolismo das duas chaves de São Pedro (ouro para o céu, prata para a terra).' },
      { q: 'O que representa o brasão da bandeira do Vaticano?', a: 'O brasão é formado por duas chaves cruzadas (uma de ouro e outra de prata) unidas por um cordão vermelho e encimadas pela tiara papal. Representam a autoridade espiritual e temporal do Papa como sucessor de São Pedro, em referência a Mateus 16,19: «Dar-te-ei as chaves do Reino dos céus».' },
      { q: 'Quando foi adotada a bandeira do Vaticano?', a: 'A bandeira atual foi oficializada com os Pactos de Latrão assinados a 11 de fevereiro de 1929 entre a Santa Sé e o Reino de Itália. Entrou em vigor a 7 de junho de 1929, data considerada o aniversário oficial da bandeira e do Estado da Cidade do Vaticano.' },
      { q: 'Porque é a bandeira do Vaticano quadrada?', a: 'A forma quadrada (proporção 1:1) deriva da tradição heráldica dos estandartes militares e diplomáticos pontifícios usados desde o século XIX. Apenas dois países no mundo têm bandeira nacional quadrada: o Vaticano e a Suíça.' },
      { q: 'A bandeira da Santa Sé é a mesma que a do Vaticano?', a: 'Sim, é a mesma bandeira. A Santa Sé (a autoridade pontifícia) e a Cidade do Vaticano (o Estado físico) partilham a mesma bandeira oficial. Algumas representações diplomáticas usam apenas o brasão sobre fundo branco como variante.' },
      { q: 'Posso levar uma bandeira do Vaticano aos atos do Papa em Espanha?', a: 'Sim. Nas vigílias, missas multitudinárias e procissões é permitido e habitual levar a bandeira vaticana, a nacional e bandeiras regionais. Nos recintos com controlo de acessos (Estádio Santiago Bernabéu, Estádio de Gran Canária) consulte previamente a regulamentação sobre objetos permitidos: os mastros rígidos costumam estar proibidos por razões de segurança.' },
    ],
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/programa', text: 'Programa completo da viagem apostólica' },
      { href: '/papa-leon-xiv', text: 'Biografia do Papa Leão XIV' },
      { href: '/que-llevar', text: 'Kit do peregrino: o que levar' },
      { href: '/alzad-la-mirada', text: 'Lema da viagem: «Levantai os olhos»' },
      { href: '/historia-visitas-papales', text: 'História das visitas papais a Espanha' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Bandera del Vaticà',
    title: 'Bandera del Vaticà · història, significat i escut',
    subtitle: 'Guia completa de la bandera de la Ciutat del Vaticà: dos colors, escut amb les claus de Sant Pere i la tiara papal, proporció quadrada única al món.',
    intro: 'La bandera de la Ciutat del Vaticà és una de les poques banderes nacionals quadrades del món (juntament amb la suïssa) i una de les més antigues vinculades a una autoritat religiosa universal. Adoptada oficialment el 7 de juny de 1929 amb els Pactes de Laterà, presenta dues franges verticals —groc daurat i blanc— amb l’escut de la Santa Seu sobre la franja blanca: les claus creuades de Sant Pere coronades per la tiara papal. Aquesta pàgina explica el seu origen, significat, especificacions tècniques i on veure-la durant el Viatge Apostòlic del Papa Lleó XIV a Espanya (6-12 de juny de 2026).',
    quickFacts: [
      { label: 'Adoptada', value: '7 de juny de 1929 (Pactes de Laterà)' },
      { label: 'Proporció', value: '1:1 (quadrada)' },
      { label: 'Colors', value: 'Groc daurat · Blanc' },
      { label: 'Disposició', value: 'Dues franges verticals' },
      { label: 'Escut', value: 'Claus creuades + tiara papal' },
      { label: 'País', value: 'Ciutat del Vaticà (Santa Seu)' },
    ],
    historyTitle: 'Història i origen',
    historyBody: [
      'L’ús del groc i el blanc per representar la Santa Seu es remunta a 1808, quan el Papa Pius VII els va adoptar com a escarapel·la de l’exèrcit pontifici en substitució dels antics colors vermell i groc. L’objectiu era distingir les tropes pontifícies de les napoleòniques que ocupaven Roma.',
      'Durant el segle XIX la bandera groga i blanca va representar els Estats Pontificis fins a la unificació italiana de 1870, quan Roma fou presa pel Regne d’Itàlia. La Santa Seu va perdre la seva sobirania territorial però va conservar els colors com a símbol de l’autoritat espiritual del Papa.',
      'La bandera moderna fou oficialitzada amb la signatura dels Pactes de Laterà l’11 de febrer de 1929 entre la Santa Seu i el Regne d’Itàlia, que van crear l’Estat de la Ciutat del Vaticà. Va entrar en vigor el 7 de juny de 1929, data considerada l’aniversari oficial de la bandera.',
    ],
    colorsTitle: 'Significat dels colors',
    colorsIntro: 'Els dos colors de la bandera tenen una lectura simbòlica vinculada a les claus de Sant Pere a Mateu 16, 19 i a l’autoritat espiritual i temporal del Papa.',
    colors: [
      { name: 'Groc daurat', hex: '#FFE000', meaning: 'Representa la clau d’or lliurada per Crist a Sant Pere com a símbol del poder espiritual de lligar i deslligar al cel. També evoca la llum divina i la dignitat del summe pontificat.' },
      { name: 'Blanc', hex: '#FFFFFF', meaning: 'Representa la clau de plata, símbol del poder temporal del Papa sobre la terra. També significa puresa, pau i la llum de l’Evangeli que es difon universalment.' },
    ],
    shieldTitle: 'L’escut: claus de Sant Pere i tiara papal',
    shieldIntro: 'Al centre de la franja blanca apareix l’escut de la Santa Seu, format per tres elements heràldics carregats de significat.',
    shieldElements: [
      { name: 'Clau d’or', meaning: 'Apunta cap amunt, cap al cel. Simbolitza el poder espiritual del Papa: la potestat de lligar i deslligar al cel segons les paraules de Crist a Pere (Mateu 16, 19).' },
      { name: 'Clau de plata', meaning: 'Apunta cap avall, cap a la terra. Simbolitza la jurisdicció del Papa sobre l’Església universal en el pla terrenal.' },
      { name: 'Cordó vermell', meaning: 'Uneix les dues claus en creu. Representa la unitat entre el poder espiritual i el temporal en la persona del successor de Pere.' },
      { name: 'Tiara papal', meaning: 'Triple corona que històricament representava el Papa com a pare dels reis, governador del món i vicari de Crist. Tot i que Pau VI va deixar d’usar la tiara el 1963, segueix present a l’escut com a símbol de l’autoritat papal.' },
    ],
    specsTitle: 'Especificacions tècniques oficials',
    specsIntro: 'La bandera del Vaticà segueix normes concretes establertes per l’Estat de la Ciutat del Vaticà per a la seva confecció i ús oficial.',
    specs: [
      { label: 'Proporció', value: '1:1 (quadrada)' },
      { label: 'Divisió vertical', value: 'Dues franges iguals: groc a l’esquerra, blanc a la dreta' },
      { label: 'Posició de l’escut', value: 'Centrat a la franja blanca' },
      { label: 'Pantone groc', value: 'Pantone 116 C aproximadament' },
      { label: 'Forma alternativa', value: 'Versió rectangular permesa per a processons i ús intern' },
      { label: 'Banderes quadrades', value: 'Només Vaticà i Suïssa tenen bandera nacional quadrada' },
    ],
    visitTitle: 'La bandera vaticana en la visita del Papa a Espanya',
    visitBody: 'Durant el Viatge Apostòlic del Papa Lleó XIV a Espanya (6-12 de juny de 2026), la bandera vaticana oneja en tots els recintes oficials del Pontífex al costat de la bandera d’Espanya: al Palau Reial durant la cerimònia de benvinguda del 6 de juny, a la Plaça de Cibeles per a la Santa Missa del Corpus Christi del 7 de juny, al Congrés dels Diputats durant el discurs del 8 de juny, a l’Estadi Santiago Bernabéu per a la trobada diocesana, a la Basílica de la Sagrada Família per a la inauguració de la Torre de Jesucrist (10 de juny), a l’Estadi de Gran Canària per a l’Eucaristia multitudinària (11 de juny) i al Port de Santa Cruz de Tenerife per a la Missa de clausura (12 de juny). El protocol oficial situa la bandera vaticana a la dreta de l’espanyola vista des del públic (a l’esquerra des de l’escenari), seguint la cortesia diplomàtica vaticana.',
    curiositiesTitle: 'Curiositats sobre la bandera vaticana',
    curiosities: [
      'Només dos països del món tenen bandera quadrada: Ciutat del Vaticà i Suïssa. Els Estats Pontificis també van tenir bandera quadrada en algun moment històric.',
      'L’escut de la bandera oficial de la Ciutat del Vaticà i el del Papa regnant NO són idèntics: cada Papa té el seu escut personal amb el seu lema episcopal, mentre que la bandera porta l’escut institucional de la Santa Seu.',
      'La bandera groga i blanca també és usada pels Cavallers del Sant Sepulcre de Jerusalem i altres ordres pontifícies.',
      'Els uniformes de la Guàrdia Suïssa Pontifícia reprenen els colors groc, vermell i blau atribuïts tradicionalment a Miquel Àngel, complementant visualment la bandera vaticana en els actes oficials.',
      'La Ciutat del Vaticà és l’Estat independent més petit del món (0,49 km²) i, tanmateix, la seva bandera oneja en més ambaixades que la de molts països: la Santa Seu manté relacions diplomàtiques amb més de 180 estats.',
    ],
    shopTitle: 'On comprar una bandera del Vaticà',
    shopIntro: 'Si vols assistir als actes del Papa amb la bandera vaticana, hi ha models per a màstil exterior, banderes de mà per a vetlla i banderes petites de balcó. Els models de polièster de 90×90 cm són els més utilitzats pels pelegrins. Recorda que la bandera oficial és quadrada (1:1).',
    shopCta: 'Veure banderes del Vaticà a Amazon',
    faqTitle: 'Preguntes freqüents',
    faq: [
      { q: 'Per què la bandera del Vaticà és groga i blanca?', a: 'Els colors groc i blanc van ser adoptats el 1808 pel Papa Pius VII per distingir les tropes pontifícies de les franceses durant l’ocupació napoleònica. Posteriorment van quedar associats al simbolisme de les dues claus de Sant Pere (or per al cel, plata per a la terra).' },
      { q: 'Què representa l’escut de la bandera del Vaticà?', a: 'L’escut està format per dues claus creuades (una d’or i una de plata) unides per un cordó vermell i rematades per la tiara papal. Representen l’autoritat espiritual i temporal del Papa com a successor de Sant Pere, en referència a Mateu 16, 19: «Et donaré les claus del Regne dels cels».' },
      { q: 'Quan es va adoptar la bandera del Vaticà?', a: 'La bandera actual fou oficialitzada amb els Pactes de Laterà signats l’11 de febrer de 1929 entre la Santa Seu i el Regne d’Itàlia. Va entrar en vigor el 7 de juny de 1929, data considerada l’aniversari oficial de la bandera i de l’Estat de la Ciutat del Vaticà.' },
      { q: 'Per què la bandera del Vaticà és quadrada?', a: 'La forma quadrada (proporció 1:1) prové de la tradició heràldica dels estendards militars i diplomàtics pontificis utilitzats des del segle XIX. Només dos països del món tenen bandera nacional quadrada: el Vaticà i Suïssa.' },
      { q: 'És el mateix la bandera de la Santa Seu que la del Vaticà?', a: 'Sí, és la mateixa bandera. La Santa Seu (l’autoritat pontifícia) i la Ciutat del Vaticà (l’Estat físic) comparteixen la mateixa bandera oficial. Algunes representacions diplomàtiques utilitzen només l’escut sobre fons blanc com a variant.' },
      { q: 'Puc portar una bandera del Vaticà als actes del Papa a Espanya?', a: 'Sí. A les vetlles, misses multitudinàries i processons és permès i habitual portar la bandera vaticana, la nacional i banderes regionals. Als recintes amb control d’accés (Estadi Santiago Bernabéu, Estadi de Gran Canària) consulta prèviament la normativa d’objectes permesos: els pals rígids solen estar prohibits per seguretat.' },
    ],
    relatedTitle: 'Pàgines relacionades',
    related: [
      { href: '/programa', text: 'Programa complet del viatge apostòlic' },
      { href: '/papa-leon-xiv', text: 'Biografia del Papa Lleó XIV' },
      { href: '/que-llevar', text: 'Kit del pelegrí: què portar' },
      { href: '/alzad-la-mirada', text: 'Lema del viatge: «Alceu els ulls»' },
      { href: '/historia-visitas-papales', text: 'Història de les visites papals a Espanya' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Bandeira do Vaticano',
    title: 'Bandeira do Vaticano · historia, significado e escudo',
    subtitle: 'Guía completa da bandeira da Cidade do Vaticano: dúas cores, escudo coas chaves de San Pedro e a tiara papal, proporción cadrada única no mundo.',
    intro: 'A bandeira da Cidade do Vaticano é unha das poucas bandeiras nacionais cadradas do mundo (xunto coa suíza) e unha das máis antigas vinculadas a unha autoridade relixiosa universal. Adoptada oficialmente o 7 de xuño de 1929 cos Pactos de Latrán, presenta dúas franxas verticais —amarelo dourado e branco— co escudo da Santa Sé sobre a franxa branca: as chaves cruzadas de San Pedro coroadas pola tiara papal. Esta páxina explica a súa orixe, significado, especificacións técnicas e onde vela durante a Viaxe Apostólica do Papa León XIV a España (6-12 de xuño de 2026).',
    quickFacts: [
      { label: 'Adoptada', value: '7 de xuño de 1929 (Pactos de Latrán)' },
      { label: 'Proporción', value: '1:1 (cadrada)' },
      { label: 'Cores', value: 'Amarelo dourado · Branco' },
      { label: 'Disposición', value: 'Dúas franxas verticais' },
      { label: 'Escudo', value: 'Chaves cruzadas + tiara papal' },
      { label: 'País', value: 'Cidade do Vaticano (Santa Sé)' },
    ],
    historyTitle: 'Historia e orixe',
    historyBody: [
      'O uso do amarelo e do branco para representar a Santa Sé remóntase a 1808, cando o Papa Pío VII os adoptou como escarapela do exército pontificio en substitución das antigas cores vermello e amarelo. O obxectivo era distinguir as tropas pontificias das napoleónicas que ocupaban Roma.',
      'Durante o século XIX a bandeira amarela e branca representou os Estados Pontificios ata a unificación italiana de 1870, cando Roma foi tomada polo Reino de Italia. A Santa Sé perdeu a súa soberanía territorial pero conservou as cores como símbolo da autoridade espiritual do Papa.',
      'A bandeira moderna foi oficializada coa firma dos Pactos de Latrán o 11 de febreiro de 1929 entre a Santa Sé e o Reino de Italia, que crearon o Estado da Cidade do Vaticano. Entrou en vigor o 7 de xuño de 1929, data considerada o aniversario oficial da bandeira.',
    ],
    colorsTitle: 'Significado das cores',
    colorsIntro: 'As dúas cores da bandeira teñen unha lectura simbólica vinculada ás chaves de San Pedro en Mateo 16, 19 e á autoridade espiritual e temporal do Papa.',
    colors: [
      { name: 'Amarelo dourado', hex: '#FFE000', meaning: 'Representa a chave de ouro entregada por Cristo a San Pedro como símbolo do poder espiritual de ligar e desligar no ceo. Tamén evoca a luz divina e a dignidade do sumo pontificado.' },
      { name: 'Branco', hex: '#FFFFFF', meaning: 'Representa a chave de prata, símbolo do poder temporal do Papa sobre a terra. Tamén significa pureza, paz e a luz do Evanxeo que se difunde universalmente.' },
    ],
    shieldTitle: 'O escudo: chaves de San Pedro e tiara papal',
    shieldIntro: 'No centro da franxa branca aparece o escudo da Santa Sé, formado por tres elementos heráldicos cargados de significado.',
    shieldElements: [
      { name: 'Chave de ouro', meaning: 'Apunta cara arriba, cara ao ceo. Simboliza o poder espiritual do Papa: a potestade de ligar e desligar no ceo segundo as palabras de Cristo a Pedro (Mateo 16, 19).' },
      { name: 'Chave de prata', meaning: 'Apunta cara abaixo, cara á terra. Simboliza a xurisdición do Papa sobre a Igrexa universal no plano terreal.' },
      { name: 'Cordón vermello', meaning: 'Une as dúas chaves en cruz. Representa a unidade entre o poder espiritual e o temporal na persoa do sucesor de Pedro.' },
      { name: 'Tiara papal', meaning: 'Triple coroa que historicamente representaba o Papa como pai dos reis, gobernante do mundo e vigairo de Cristo. Aínda que Paulo VI deixou de usar a tiara en 1963, segue presente no escudo como símbolo da autoridade papal.' },
    ],
    specsTitle: 'Especificacións técnicas oficiais',
    specsIntro: 'A bandeira do Vaticano segue normas concretas establecidas polo Estado da Cidade do Vaticano para a súa confección e uso oficial.',
    specs: [
      { label: 'Proporción', value: '1:1 (cadrada)' },
      { label: 'División vertical', value: 'Dúas franxas iguais: amarelo á esquerda, branco á dereita' },
      { label: 'Posición do escudo', value: 'Centrado na franxa branca' },
      { label: 'Pantone amarelo', value: 'Pantone 116 C aproximadamente' },
      { label: 'Forma alternativa', value: 'Versión rectangular permitida para procesións e uso interno' },
      { label: 'Bandeiras cadradas', value: 'Só Vaticano e Suíza teñen bandeira nacional cadrada' },
    ],
    visitTitle: 'A bandeira vaticana na visita do Papa a España',
    visitBody: 'Durante a Viaxe Apostólica do Papa León XIV a España (6-12 de xuño de 2026), a bandeira vaticana ondea en todos os recintos oficiais do Pontífice xunto á bandeira de España: no Pazo Real durante a cerimonia de benvida do 6 de xuño, na Plaza de Cibeles para a Santa Misa do Corpus Christi do 7 de xuño, no Congreso dos Deputados durante o discurso do 8 de xuño, no Estadio Santiago Bernabéu para o encontro diocesano, na Basílica da Sagrada Familia para a inauguración da Torre de Xesucristo (10 de xuño), no Estadio de Gran Canaria para a Eucaristía multitudinaria (11 de xuño) e no Porto de Santa Cruz de Tenerife para a Misa de clausura (12 de xuño). O protocolo oficial sitúa a bandeira vaticana á dereita da española vista desde o público (á esquerda desde o escenario), seguindo a cortesía diplomática vaticana.',
    curiositiesTitle: 'Curiosidades sobre a bandeira vaticana',
    curiosities: [
      'Só dous países no mundo teñen bandeira cadrada: Cidade do Vaticano e Suíza. Os Estados Pontificios tamén tiveron bandeira cadrada nalgúns momentos históricos.',
      'O escudo da bandeira oficial da Cidade do Vaticano e o escudo do Papa reinante NON son idénticos: cada Papa ten o seu escudo persoal co seu lema episcopal, mentres que a bandeira leva o escudo institucional da Santa Sé.',
      'A bandeira amarela e branca tamén é usada polos Cabaleiros do Santo Sepulcro de Xerusalén e outras ordes pontificias.',
      'Os uniformes da Garda Suíza Pontificia retoman as cores amarelo, vermello e azul atribuídas pola tradición a Miguel Ánxel, completando visualmente a bandeira vaticana nos actos oficiais.',
      'A Cidade do Vaticano é o Estado independente máis pequeno do mundo (0,49 km²) e, con todo, a súa bandeira ondea en máis embaixadas que a de moitos países: a Santa Sé mantén relacións diplomáticas con máis de 180 estados.',
    ],
    shopTitle: 'Onde mercar unha bandeira do Vaticano',
    shopIntro: 'Se queres asistir aos actos do Papa coa bandeira vaticana, hai modelos para mastro exterior, bandeiras de man para vixilia e pequenas bandeiras de balcón. Os modelos de poliéster de 90×90 cm son os máis usados polos peregrinos. Lembra que a bandeira oficial é cadrada (1:1).',
    shopCta: 'Ver bandeiras do Vaticano en Amazon',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: 'Por que a bandeira do Vaticano é amarela e branca?', a: 'As cores amarelo e branco foron adoptadas en 1808 polo Papa Pío VII para distinguir as tropas pontificias das francesas durante a ocupación napoleónica. Posteriormente quedaron asociadas ao simbolismo das dúas chaves de San Pedro (ouro para o ceo, prata para a terra).' },
      { q: 'Que representa o escudo da bandeira do Vaticano?', a: 'O escudo está formado por dúas chaves cruzadas (unha de ouro e outra de prata) unidas por un cordón vermello e rematadas pola tiara papal. Representan a autoridade espiritual e temporal do Papa como sucesor de San Pedro, en referencia a Mateo 16, 19: «Dareiche as chaves do Reino dos ceos».' },
      { q: 'Cando se adoptou a bandeira do Vaticano?', a: 'A bandeira actual foi oficializada cos Pactos de Latrán asinados o 11 de febreiro de 1929 entre a Santa Sé e o Reino de Italia. Entrou en vigor o 7 de xuño de 1929, data considerada o aniversario oficial da bandeira e do Estado da Cidade do Vaticano.' },
      { q: 'Por que a bandeira do Vaticano é cadrada?', a: 'A forma cadrada (proporción 1:1) provén da tradición heráldica dos estandartes militares e diplomáticos pontificios utilizados desde o século XIX. Só dous países no mundo teñen bandeira nacional cadrada: o Vaticano e Suíza.' },
      { q: 'É o mesmo a bandeira da Santa Sé que a do Vaticano?', a: 'Si, é a mesma bandeira. A Santa Sé (a autoridade pontificia) e a Cidade do Vaticano (o Estado físico) comparten a mesma bandeira oficial. Algunhas representacións diplomáticas usan só o escudo sobre fondo branco como variante.' },
      { q: 'Podo levar unha bandeira do Vaticano aos actos do Papa en España?', a: 'Si. Nas vixilias, misas multitudinarias e procesións está permitido e é habitual levar a bandeira vaticana, a nacional e bandeiras rexionais. Nos recintos con control de accesos (Estadio Santiago Bernabéu, Estadio de Gran Canaria) consulta previamente a normativa de obxectos permitidos: os mastros ríxidos adoitan estar prohibidos por seguridade.' },
    ],
    relatedTitle: 'Páxinas relacionadas',
    related: [
      { href: '/programa', text: 'Programa completo da viaxe apostólica' },
      { href: '/papa-leon-xiv', text: 'Biografía do Papa León XIV' },
      { href: '/que-llevar', text: 'Kit do peregrino: que levar' },
      { href: '/alzad-la-mirada', text: 'Lema da viaxe: «Erguei os ollos»' },
      { href: '/historia-visitas-papales', text: 'Historia das visitas papais a España' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Vatikanoaren bandera',
    title: 'Vatikanoaren bandera · historia, esanahia eta armarria',
    subtitle: 'Vatikano Hiriaren banderaren gida osoa: bi kolore, San Pedroren giltzak eta tiara papala dituen armarria, munduan bakarra den proportzio karratua.',
    intro: 'Vatikano Hiriaren bandera munduko bandera nazional karratu gutxien dituenetako bat da (Suitzakoarekin batera) eta unibertsal erlijio-autoritate batekin lotutako bandera zaharrenetako bat. 1929ko ekainaren 7an Laterango Itunekin onartua, bi banda bertikal ditu —urre-horia eta zuria— Sede Santuaren armarriarekin banda zurian: San Pedroren giltza gurutzatuak, aita santuaren tiararekin gainean. Orrialde honek bere jatorria, esanahia, zehaztapen teknikoak eta non ikus dezakezun azaltzen du Leon XIV.a Aita Santuaren Espainiarako Bidaia Apostolikoan (2026ko ekainaren 6-12).',
    quickFacts: [
      { label: 'Onartua', value: '1929ko ekainaren 7a (Laterango Itunak)' },
      { label: 'Proportzioa', value: '1:1 (karratua)' },
      { label: 'Koloreak', value: 'Urre-horia · Zuria' },
      { label: 'Banaketa', value: 'Bi banda bertikal' },
      { label: 'Armarria', value: 'Giltza gurutzatuak + aita santuaren tiara' },
      { label: 'Herrialdea', value: 'Vatikano Hiria (Sede Santua)' },
    ],
    historyTitle: 'Historia eta jatorria',
    historyBody: [
      'Hori eta zuria erabiltzea Sede Santua ordezkatzeko 1808tik dator, Pio VII.a Aita Santuak armada pontifizioaren eskarapela gisa hartu zituenean, antzinako gorri eta horiaren ordez. Helburua Erroma okupatzen zuten Napoleonen tropetatik pontifize-tropak bereiztea zen.',
      'XIX. mendean zehar bandera horia eta zuria Pontifize-Estatuak ordezkatu zituen 1870eko Italiako batasunera arte, Erroma Italiako Erresumak hartu zuenean. Sede Santuak bere subiranotasun territoriala galdu zuen baina koloreak Aita Santuaren autoritate espiritualaren ikur gisa gorde zituen.',
      'Bandera modernoa 1929ko otsailaren 11n Sede Santuaren eta Italiako Erresumaren artean sinatutako Laterango Itunekin ofizializatu zen, eta Vatikano Hiriaren Estatua sortu zen. 1929ko ekainaren 7an indarrean sartu zen, banderaren urteurren ofiziala den data.',
    ],
    colorsTitle: 'Koloreen esanahia',
    colorsIntro: 'Banderaren bi koloreek San Pedroren giltzekin lotutako irakurketa sinbolikoa dute (Mateo 16,19) eta Aita Santuaren autoritate espiritual eta tenporalarekin.',
    colors: [
      { name: 'Urre-horia', hex: '#FFE000', meaning: 'Kristok San Pedrori emandako urrezko giltza adierazten du, zerura lotzeko eta askatzeko botere espiritualaren ikur gisa. Argi jainkotiarra eta aita santutza gorenaren duintasuna ere oroitarazten ditu.' },
      { name: 'Zuria', hex: '#FFFFFF', meaning: 'Zilarrezko giltza adierazten du, Aita Santuak lurraren gainean duen botere tenporalaren ikurra. Garbitasuna, bakea eta Ebanjelioaren argia unibertsalki zabaltzen dela ere esan nahi du.' },
    ],
    shieldTitle: 'Armarria: San Pedroren giltzak eta aita santuaren tiara',
    shieldIntro: 'Banda zuriaren erdian Sede Santuaren armarria agertzen da, esanahiz beteriko hiru elementu heraldikoz osatua.',
    shieldElements: [
      { name: 'Urrezko giltza', meaning: 'Gora seinalatzen du, zerura. Aita Santuaren botere espirituala adierazten du: zeruan lotzeko eta askatzeko ahalmena, Kristok Pedrori esandakoaren arabera (Mateo 16,19).' },
      { name: 'Zilarrezko giltza', meaning: 'Behera seinalatzen du, lurrera. Aita Santuaren jurisdikzioa adierazten du Eliza unibertsalaren gainean, lurreko mailan.' },
      { name: 'Soka gorria', meaning: 'Bi giltzak gurutze formara lotzen ditu. Botere espirituala eta tenporala Pedroren ondorengoaren pertsonan duten batasuna adierazten du.' },
      { name: 'Aita santuaren tiara', meaning: 'Historikoki Aita Santua erregeen aita, munduaren agintaria eta Kristoren bikario gisa ordezkatzen zuen koroa hirukoitza. Paulo VI.ak 1963an tiara erabiltzeari utzi zion arren, armarrian dirau aita santuaren autoritatearen ikur gisa.' },
    ],
    specsTitle: 'Zehaztapen tekniko ofizialak',
    specsIntro: 'Vatikanoaren banderak Vatikano Hiriaren Estatuak ezarritako arau zehatzak jarraitzen ditu bere ekoizpenerako eta erabilera ofizialerako.',
    specs: [
      { label: 'Proportzioa', value: '1:1 (karratua)' },
      { label: 'Banaketa bertikala', value: 'Bi banda berdin: horia ezkerrean, zuria eskuinean' },
      { label: 'Armarriaren posizioa', value: 'Banda zurian erdiratua' },
      { label: 'Pantone horia', value: 'Pantone 116 C gutxi gorabehera' },
      { label: 'Forma alternatiboa', value: 'Bertsio errektangularra prozesioetarako eta barne-erabilerarako baimendua' },
      { label: 'Bandera karratuak', value: 'Vatikanoak eta Suitzak bakarrik dute bandera nazional karratua' },
    ],
    visitTitle: 'Vatikanoaren bandera Aita Santuaren Espainiarako bidaian',
    visitBody: 'Leon XIV.a Aita Santuaren Espainiarako Bidaia Apostolikoan (2026ko ekainaren 6-12), Vatikanoaren bandera Pontifizearen leku ofizial guztietan haizatzen da Espainiakoarekin batera: Errege Jauregian ekainaren 6ko ongi-etorri zeremonian, Cibeles plazan ekainaren 7ko Corpus Christi Meza Santuan, Diputatuen Kongresuan ekainaren 8ko hitzaldian, Santiago Bernabéu Estadioan elizbarrutiko topaketan, Sagrada Familia Basilikan Jesukristoren Dorrearen inaugurazioan (ekainak 10), Gran Canariako Estadioan multzo-Eukaristian (ekainak 11) eta Santa Cruz de Tenerifeko Portuan itxiera-mezan (ekainak 12). Protokolo ofizialak Vatikanoaren bandera Espainiakoaren eskuinean kokatzen du publikotik ikusita (eszenatokitik ezkerrean), Vatikanoaren kortesia diplomatikoaren arabera.',
    curiositiesTitle: 'Vatikanoaren banderari buruzko bitxikeriak',
    curiosities: [
      'Munduko bi herrialdek bakarrik dute bandera karratua: Vatikano Hiria eta Suitza. Pontifize-Estatuek ere bandera karratua izan zuten historikoki une jakin batzuetan.',
      'Vatikano Hiriaren bandera ofizialaren armarria eta uneko Aita Santuarena EZ dira berdinak: Aita Santu bakoitzak bere armarri pertsonala du bere lelo apezpikoarekin, eta bandera, berriz, Sede Santuaren armarri instituzionala darama.',
      'Bandera hori eta zuria Jerusalemgo Hilobi Santuaren Zaldunek eta beste ordena pontifizio batzuek ere erabiltzen dute.',
      'Aita Santuaren Suitzar Guardiaren uniformeek tradizioz Michelangelo Aita Santuari egotzitako hori, gorri eta urdin koloreak hartzen dituzte, ekitaldi ofizialetan Vatikanoaren bandera ikus-osatuz.',
      'Vatikano Hiria munduko Estatu independente txikiena da (0,49 km²) eta, hala ere, bere bandera herrialde askorenak baino enbaxada gehiagotan haizatzen da: Sede Santuak 180 estatu baino gehiagorekin harreman diplomatikoak ditu.',
    ],
    shopTitle: 'Non erosi Vatikanoaren bandera',
    shopIntro: 'Aita Santuaren ekitaldietara Vatikanoaren banderarekin joan nahi baduzu, kanpoko mastarrentzako, bijiliarako esku-banderentzako eta balkoirako bandera txikientzako modeloak daude. 90×90 cm-ko poliester modeloak dira erromesek gehien erabiltzen dituztenak. Gogoratu bandera ofiziala karratua dela (1:1).',
    shopCta: 'Vatikanoaren banderak Amazonen ikusi',
    faqTitle: 'Maiz egiten diren galderak',
    faq: [
      { q: 'Zergatik da Vatikanoaren bandera horia eta zuria?', a: 'Hori eta zuri koloreak 1808an hartu zituen Pio VII.a Aita Santuak, Napoleonen okupazioan pontifize-tropak frantsesetatik bereizteko. Geroago San Pedroren bi giltzen sinbolismoarekin lotu ziren (urrea zerurako, zilarra lurrerako).' },
      { q: 'Zer adierazten du Vatikanoaren banderaren armarriak?', a: 'Armarria bi giltza gurutzatuk osatzen dute (bata urrezkoa eta bestea zilarrezkoa), soka gorri batek lotuak eta aita santuaren tiarak gainestatuak. Aita Santuaren autoritate espiritual eta tenporala adierazten dute San Pedroren ondorengo gisa, Mateo 16,19ren arabera: «Zeruetako Erreinuko giltzak emango dizkizut».' },
      { q: 'Noiz onartu zen Vatikanoaren bandera?', a: 'Egungo bandera 1929ko otsailaren 11n Sede Santuaren eta Italiako Erresumaren artean sinatutako Laterango Itunekin ofizializatu zen. 1929ko ekainaren 7an sartu zen indarrean, banderaren eta Vatikano Hiriaren Estatuaren urteurren ofiziala den data.' },
      { q: 'Zergatik da karratua Vatikanoaren bandera?', a: 'Forma karratua (1:1 proportzioa) XIX. mendetik erabilitako pontifize estandarte militar eta diplomatikoen tradizio heraldikotik dator. Munduko bi herrialdek bakarrik dute bandera nazional karratua: Vatikanoak eta Suitzak.' },
      { q: 'Sede Santuaren bandera eta Vatikanoarena gauza bera al dira?', a: 'Bai, bandera bera dira. Sede Santuak (pontifize-autoritateak) eta Vatikano Hiriak (Estatu fisikoak) bandera ofizial bera partekatzen dute. Ordezkaritza diplomatiko batzuek armarria bakarrik erabiltzen dute hondo zurian, aldaera gisa.' },
      { q: 'Vatikanoaren bandera eraman al dezaket Aita Santuaren ekitaldietara Espainian?', a: 'Bai. Bijilietan, masa-mezatan eta prozesioetan baimenduta dago eta ohikoa da Vatikanoaren bandera, nazionala eta eskualdeko banderak eramatea. Sarbide-kontrola duten esparruetan (Santiago Bernabéu Estadioa, Gran Canariako Estadioa) aurretik kontsultatu baimendutako objektuen araudia: mastar zurrunak segurtasunagatik debekatuta egon ohi dira.' },
    ],
    relatedTitle: 'Erlazionatutako orriak',
    related: [
      { href: '/programa', text: 'Bidaia apostolikoaren programa osoa' },
      { href: '/papa-leon-xiv', text: 'Leon XIV.a Aita Santuaren biografia' },
      { href: '/que-llevar', text: 'Erromes-kita: zer eraman' },
      { href: '/alzad-la-mirada', text: 'Bidaiaren leloa: «Jaso begiak»' },
      { href: '/historia-visitas-papales', text: 'Espainiarako bisita papalen historia' },
    ],
  },
}

export default function BanderaVaticanoPage({ locale }: Props) {
  const t = L[locale]
  const breadcrumbs = [
    { name: t.breadcrumbHome, href: localizePath('/', locale) },
    { name: t.breadcrumbCurrent, href: '#' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {t.quickFacts.map((f, i) => (
              <div key={i} className="rounded-lg bg-white/10 px-4 py-2">
                <p className="text-xs uppercase tracking-wide text-papal-gold">{f.label}</p>
                <p className="text-sm font-medium text-white">{f.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          {/* Representación visual de la bandera */}
          <div className="not-prose my-8 flex justify-center">
            <div className="flex aspect-square w-64 overflow-hidden rounded-lg border-2 border-papal-navy/20 shadow-lg" aria-label={t.breadcrumbCurrent}>
              <div className="w-1/2 bg-[#FFE000]" />
              <div className="flex w-1/2 items-center justify-center bg-white">
                <div className="flex h-24 w-24 flex-col items-center justify-center text-papal-navy">
                  <span className="text-4xl" aria-hidden="true">⛨</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Sede</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Santa</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.historyTitle}</h2>
          {t.historyBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.colorsTitle}</h2>
          <p>{t.colorsIntro}</p>
          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {t.colors.map((c) => (
              <div key={c.name} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 flex-shrink-0 rounded border border-papal-navy/20"
                    style={{ backgroundColor: c.hex }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-heading text-base font-bold text-papal-navy">{c.name}</h3>
                    <p className="font-mono text-xs text-papal-navy/50">{c.hex}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-papal-navy/80">{c.meaning}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.shieldTitle}</h2>
          <p>{t.shieldIntro}</p>
          <ul className="not-prose mt-4 space-y-2">
            {t.shieldElements.map((el) => (
              <li key={el.name} className="rounded-lg border border-papal-gold/30 bg-papal-gold/5 p-3">
                <p className="font-heading text-sm font-bold text-papal-navy">{el.name}</p>
                <p className="mt-1 text-sm text-papal-navy/80">{el.meaning}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.specsTitle}</h2>
          <p>{t.specsIntro}</p>
          <div className="not-prose mt-4 overflow-hidden rounded-lg border border-papal-navy/10">
            <table className="w-full text-sm">
              <tbody>
                {t.specs.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-papal-cream/50' : 'bg-white'}>
                    <th scope="row" className="px-4 py-2 text-left font-semibold text-papal-navy">{s.label}</th>
                    <td className="px-4 py-2 text-papal-navy/80">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.visitTitle}</h2>
          <p>{t.visitBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.curiositiesTitle}</h2>
          <ul>
            {t.curiosities.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.shopTitle}</h2>
          <p>{t.shopIntro}</p>
          <div className="not-prose mt-4 rounded-lg border border-papal-navy/10 bg-papal-cream/40 p-6 text-center">
            <AffiliateLink
              href={AMAZON_URL}
              provider="amazon"
              category="merch"
              placement="cta"
              className="inline-block rounded-lg bg-papal-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-papal-navy/90"
            >
              {t.shopCta} →
            </AffiliateLink>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.faqTitle}</h2>
          <dl className="not-prose mt-4 space-y-3">
            {t.faq.map((f, i) => (
              <div key={i} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <dt className="font-heading text-sm font-bold text-papal-navy">{f.q}</dt>
                <dd className="mt-2 text-sm text-papal-navy/80">{f.a}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(link.href, locale)}
                  className="text-papal-navy underline decoration-papal-gold underline-offset-4 hover:text-papal-gold"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  )
}
