import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import AffiliateLink from '@/components/affiliate/AffiliateLink'
import VaticanFlagBanner from '@/components/shared/VaticanFlagBanner'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import { buildTrainlineJourneyUrl, buildTrainlineHomeUrl } from '@/lib/trainline'
import Link from 'next/link'

interface Props {
  locale: Locale
}

type Fact = { label: string; value: string }
type Route = {
  from: 'paris' | 'madrid' | 'barcelona' | 'zaragoza' | 'sevilla' | 'valencia' | 'malaga' | 'cordoba'
  to: 'madrid' | 'barcelona'
  duration: string
  price: string
  freq: string
}
type FaqItem = { q: string; a: string }

type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  ctaTrainline: string
  ctaRenfe: string
  quickFacts: Fact[]
  whyTitle: string
  whyBody: string[]
  routesTitle: string
  routesIntro: string
  routesNote: string
  routes: Route[]
  routeCta: string
  stationsTitle: string
  madridStation: { name: string; address: string; metro: string; tip: string }
  barcelonaStation: { name: string; address: string; metro: string; tip: string }
  canariasTitle: string
  canariasBody: string
  comparisonTitle: string
  comparisonIntro: string
  comparisonRows: { label: string; trainline: string; renfe: string }[]
  faqTitle: string
  faq: FaqItem[]
  relatedTitle: string
  related: { href: string; text: string }[]
}

const ROUTES_BASE: Route[] = [
  { from: 'paris', to: 'barcelona', duration: '6h 45m', price: 'desde 39€', freq: '2/día' },
  { from: 'paris', to: 'madrid', duration: '~10h con cambio', price: 'desde 89€', freq: '1-2/día' },
  { from: 'barcelona', to: 'madrid', duration: '2h 30m AVE', price: 'desde 39€', freq: '~30/día' },
  { from: 'sevilla', to: 'madrid', duration: '2h 30m AVE', price: 'desde 35€', freq: '20+/día' },
  { from: 'valencia', to: 'madrid', duration: '1h 50m AVE', price: 'desde 29€', freq: '15+/día' },
  { from: 'malaga', to: 'madrid', duration: '2h 30m AVE', price: 'desde 45€', freq: '15+/día' },
  { from: 'cordoba', to: 'madrid', duration: '1h 40m AVE', price: 'desde 32€', freq: '20+/día' },
  { from: 'zaragoza', to: 'madrid', duration: '1h 15m AVE', price: 'desde 28€', freq: '15+/día' },
]

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Cómo llegar en tren',
    title: 'Cómo llegar en tren a la visita del Papa · Madrid y Barcelona 2026',
    subtitle: 'Guía completa para llegar en AVE o tren internacional a las ciudades del recorrido papal del 6 al 12 de junio de 2026.',
    intro: 'El tren es el medio más cómodo y sostenible para llegar a Madrid y Barcelona durante la visita del Papa León XIV. El AVE entre las dos ciudades cubre 621 km en 2h 30m, con frecuencias de salida cada 30 minutos. Para peregrinos internacionales, Trainline ofrece la mejor interfaz multiidioma con búsqueda combinada Renfe + SNCF (Francia) + Trenitalia (Italia) + DB (Alemania) y pago en moneda local. Las Islas Canarias no son accesibles por tren: se llega en avión desde la península (Gran Canaria LPA, Tenerife TFN/TFS) o en ferry desde Cádiz, Huelva o Portugal.',
    ctaTrainline: 'Comparar trenes a Madrid · Trainline',
    ctaRenfe: 'Comprar AVE directo en Renfe',
    quickFacts: [
      { label: 'Mejor opción internacional', value: 'Trainline (cubre Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcelona AVE', value: '2h 30m · desde 39 € · cada 30 min' },
      { label: 'Estación Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Estación Barcelona', value: 'Barcelona Sants' },
      { label: 'Canarias', value: 'Sin conexión por tren (avión o ferry)' },
      { label: 'Reserva con antelación', value: '21 días antes para mejor precio' },
    ],
    whyTitle: '¿Por qué llegar en tren?',
    whyBody: [
      'Comodidad y rapidez en distancias medias. El AVE conecta Madrid y Barcelona en 2h 30m centro a centro, contra ~4h totales en avión sumando aeropuertos, controles y traslados. El tren llega al corazón de la ciudad, no a 30 km como los aeropuertos.',
      'Sostenibilidad. Un viaje Madrid-Barcelona en AVE emite ~14 kg de CO₂ por persona frente a ~120 kg del avión. La encíclica «Laudato si\'» del Papa Francisco —magisterio que León XIV continúa— invita a optar por el medio menos contaminante cuando es posible.',
      'Equipaje sin coste. Trainline y Renfe permiten 2-3 maletas grandes sin tarifa adicional. Especialmente útil si llevas bandera del Vaticano, kit de peregrino, cojín plegable y agua: en avión cada maleta facturada cuesta entre 30 y 60 €.',
      'Sin restricciones de líquidos. En tren puedes llevar el agua, las barritas y la crema solar sin pasar control de seguridad de aeropuerto.',
    ],
    routesTitle: 'Rutas principales hacia Madrid y Barcelona',
    routesIntro: 'Precios orientativos en clase Turista comprando con 21 días de antelación. Los precios suben rápido conforme se acerca la fecha. Recomendamos reservar antes del 20 de mayo.',
    routesNote: 'Búsquedas pre-rellenadas para el 5 de junio (víspera de la visita). Modifica fechas y nº de pasajeros en el formulario de Trainline.',
    routes: ROUTES_BASE,
    routeCta: 'Buscar en Trainline →',
    stationsTitle: 'Estaciones principales',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: todas las líneas. Autobús: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'A 1,2 km de la Plaza de Cibeles (acto del 7 jun). 25 min andando o Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelona',
      metro: 'Metro: Sants Estació (L3 y L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: 'A 4 km de la Sagrada Familia. Metro L5 directo o taxi 15 min. Próxima al Estadio Olímpico Lluís Companys (vigilia 9 jun).',
    },
    canariasTitle: 'Canarias: sin conexión por tren',
    canariasBody: 'Las Islas Canarias no tienen red ferroviaria. Para llegar a Gran Canaria (acto del 11 jun en el Estadio de Gran Canaria) y a Tenerife (misa de clausura del 12 jun en el Puerto de Santa Cruz) hay dos opciones: avión desde Madrid (LPA 2h 30m · TFN 2h 35m, varias frecuencias diarias) o ferry desde Cádiz / Huelva con Naviera Armas o Trasmediterránea (38-48h de travesía, opción para llevar coche).',
    comparisonTitle: 'Trainline vs Renfe: ¿cuál uso?',
    comparisonIntro: 'Ambos venden los mismos billetes AVE de Renfe. La diferencia está en la interfaz, idioma, moneda y rutas internacionales.',
    comparisonRows: [
      { label: 'Idioma', trainline: '14 idiomas (ES, EN, IT, FR, DE, PT…)', renfe: 'Español + inglés básico' },
      { label: 'Moneda', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Solo EUR' },
      { label: 'AVE Madrid-Barcelona', trainline: '✅ Sí, mismos precios', renfe: '✅ Sí, oficial' },
      { label: 'Conexión París-Madrid', trainline: '✅ Combinada SNCF+Renfe', renfe: '❌ No' },
      { label: 'Conexión Italia (Trenitalia)', trainline: '✅ Sí', renfe: '❌ No' },
      { label: 'Búsqueda multiciudad', trainline: '✅ Sí', renfe: 'Limitada' },
      { label: 'Mejor para', trainline: 'Peregrinos extranjeros', renfe: 'Españoles con cuenta y Renfe Más' },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Cuándo abren la venta de los AVE del 6-12 junio 2026?', a: 'Renfe abre la venta de billetes AVE entre 60 y 90 días antes de la fecha de salida. Para la visita del Papa la venta lleva abierta desde marzo de 2026. Cuanto antes reserves, mejor precio (las tarifas Promo y Promo+ se agotan primero).' },
      { q: '¿Hay AVE directo Madrid-Barcelona el 9 de junio?', a: 'Sí. El AVE Madrid-Barcelona opera cada 30 minutos desde las 06:00 hasta las 21:30. El Papa viajará a Barcelona el 9 de junio a las 11:30-12:25 (vuelo, no tren). Para peregrinos que sigan el recorrido, recomendamos AVE de mañana para llegar a tiempo de la vigilia de Lluís Companys (20:00).' },
      { q: '¿Puedo llevar mi bandera del Vaticano en el tren?', a: 'Sí. Renfe y Trainline permiten banderas plegadas en el equipaje de mano sin restricciones. Banderas con mástil rígido > 1m deben facturarse como bulto adicional (~5 €). Las banderas blandas de tela 90×90 cm caben dobladas en la mochila.' },
      { q: '¿Funciona Trainline para peregrinos extranjeros?', a: 'Sí, es la mejor opción para extranjeros. Trainline tiene 14 idiomas, paga en moneda local, busca conexiones internacionales (París-Barcelona, Milán-Madrid con cambio en París, Lisboa-Madrid con cambio) y cubre Renfe oficial. Para españoles con cuenta Renfe Más, Renfe.com puede ser más simple.' },
      { q: '¿Hay descuentos para peregrinos?', a: 'No hay tarifa oficial «peregrino» de Renfe. Las mejores opciones son: 1) Comprar con 21+ días de antelación (Promo y Promo+), 2) Tarjeta Joven Renfe (14-25 años, 25-30 % descuento), 3) Familia Numerosa (20-50 %), 4) +60 (40 %).' },
      { q: '¿Cómo llego a Canarias si no hay tren?', a: 'En avión desde Madrid-Barajas: Iberia, Air Europa, Ryanair y Vueling operan diariamente. Tiempo de vuelo Madrid → Gran Canaria 2h 30m, Madrid → Tenerife Norte 2h 35m. En ferry: Naviera Armas y Trasmediterránea operan desde Cádiz y Huelva (38-48h, ideal si quieres llevar coche).' },
    ],
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/como-llegar', text: 'Cómo llegar (todas las opciones: avión, tren, autobús)' },
      { href: '/programa', text: 'Programa completo del viaje apostólico' },
      { href: '/ciudades/madrid', text: 'Madrid · ciudad del recorrido' },
      { href: '/ciudades/barcelona', text: 'Barcelona · ciudad del recorrido' },
      { href: '/como-asistir', text: 'Cómo asistir a los actos del Papa' },
      { href: '/bandera-vaticano', text: 'Bandera del Vaticano para los actos' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'How to get by train',
    title: 'How to get by train to the Pope’s visit · Madrid and Barcelona 2026',
    subtitle: 'Complete guide to reach by AVE high-speed train or international rail the cities of the papal journey from 6 to 12 June 2026.',
    intro: 'The train is the most comfortable and sustainable way to reach Madrid and Barcelona during Pope Leo XIV’s visit. The AVE between both cities covers 621 km in 2h 30m, with departures every 30 minutes. For international pilgrims, Trainline offers the best multilingual interface with combined search across Renfe + SNCF (France) + Trenitalia (Italy) + DB (Germany), paying in local currency. The Canary Islands are not accessible by train: they are reached by plane from mainland Spain (Gran Canaria LPA, Tenerife TFN/TFS) or by ferry from Cádiz, Huelva or Portugal.',
    ctaTrainline: 'Compare trains to Madrid · Trainline',
    ctaRenfe: 'Buy direct AVE on Renfe',
    quickFacts: [
      { label: 'Best international option', value: 'Trainline (covers Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcelona AVE', value: '2h 30m · from €39 · every 30 min' },
      { label: 'Madrid station', value: 'Madrid Puerta de Atocha' },
      { label: 'Barcelona station', value: 'Barcelona Sants' },
      { label: 'Canary Islands', value: 'No train connection (plane or ferry)' },
      { label: 'Advance booking', value: '21 days ahead for best price' },
    ],
    whyTitle: 'Why travel by train?',
    whyBody: [
      'Comfort and speed for medium distances. The AVE connects Madrid and Barcelona in 2h 30m city centre to city centre, versus ~4h total by plane including airports, security and transfers. The train arrives at the heart of the city, not 30 km away like airports.',
      'Sustainability. A Madrid-Barcelona AVE journey emits ~14 kg CO₂ per person versus ~120 kg by plane. The encyclical "Laudato si\'" of Pope Francis —magisterium that Leo XIV continues— invites us to choose the least polluting option whenever possible.',
      'Free luggage. Trainline and Renfe allow 2-3 large suitcases at no extra cost. Especially useful if you carry a Vatican flag, pilgrim kit, folding cushion and water: each checked suitcase on a plane costs €30-60.',
      'No liquid restrictions. On the train you can carry water, energy bars and sunscreen without passing through airport security.',
    ],
    routesTitle: 'Main routes to Madrid and Barcelona',
    routesIntro: 'Reference prices in Standard class buying 21 days in advance. Prices rise quickly as the date approaches. We recommend booking before 20 May.',
    routesNote: 'Pre-filled searches for 5 June (eve of the visit). Adjust dates and passengers in the Trainline form.',
    routes: ROUTES_BASE,
    routeCta: 'Search on Trainline →',
    stationsTitle: 'Main stations',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: all lines. Bus: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: '1.2 km from Plaza de Cibeles (event on 7 Jun). 25 min walking or Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelona',
      metro: 'Metro: Sants Estació (L3 and L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: '4 km from the Sagrada Familia. Metro L5 direct or taxi 15 min. Close to Lluís Companys Olympic Stadium (vigil 9 Jun).',
    },
    canariasTitle: 'Canary Islands: no train connection',
    canariasBody: 'The Canary Islands have no railway network. To reach Gran Canaria (11 Jun event at the Gran Canaria Stadium) and Tenerife (closing Mass on 12 Jun at the Port of Santa Cruz) there are two options: plane from Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, several daily frequencies) or ferry from Cádiz / Huelva with Naviera Armas or Trasmediterránea (38-48h crossing, suitable for taking a car).',
    comparisonTitle: 'Trainline vs Renfe: which one do I use?',
    comparisonIntro: 'Both sell the same Renfe AVE tickets. The difference is in the interface, language, currency and international routes.',
    comparisonRows: [
      { label: 'Language', trainline: '14 languages (EN, ES, IT, FR, DE, PT…)', renfe: 'Spanish + basic English' },
      { label: 'Currency', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Only EUR' },
      { label: 'Madrid-Barcelona AVE', trainline: '✅ Yes, same prices', renfe: '✅ Yes, official' },
      { label: 'Paris-Madrid connection', trainline: '✅ Combined SNCF+Renfe', renfe: '❌ No' },
      { label: 'Italy connection (Trenitalia)', trainline: '✅ Yes', renfe: '❌ No' },
      { label: 'Multi-city search', trainline: '✅ Yes', renfe: 'Limited' },
      { label: 'Best for', trainline: 'International pilgrims', renfe: 'Spaniards with Renfe Más account' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'When does AVE sale open for 6-12 June 2026?', a: 'Renfe opens AVE ticket sales 60-90 days before departure. For the Pope’s visit, sales have been open since March 2026. The earlier you book, the better the price (Promo and Promo+ fares sell out first).' },
      { q: 'Is there a direct AVE Madrid-Barcelona on 9 June?', a: 'Yes. The Madrid-Barcelona AVE operates every 30 minutes from 06:00 to 21:30. The Pope travels to Barcelona on 9 June at 11:30-12:25 (by plane, not train). For pilgrims following the route, we recommend a morning AVE to arrive in time for the Lluís Companys vigil (20:00).' },
      { q: 'Can I take my Vatican flag on the train?', a: 'Yes. Renfe and Trainline allow folded flags in hand luggage without restrictions. Flags with rigid pole > 1m must be checked as additional baggage (~€5). Soft cloth flags 90×90 cm fit folded in a backpack.' },
      { q: 'Does Trainline work for international pilgrims?', a: 'Yes, it is the best option for foreigners. Trainline has 14 languages, charges in local currency, searches international connections (Paris-Barcelona, Milan-Madrid with change in Paris, Lisbon-Madrid with change) and covers official Renfe. For Spaniards with a Renfe Más account, Renfe.com may be simpler.' },
      { q: 'Are there pilgrim discounts?', a: 'There is no official Renfe "pilgrim" fare. The best options are: 1) Buy 21+ days in advance (Promo and Promo+), 2) Renfe Youth Card (14-25 years, 25-30 % discount), 3) Large Family (20-50 %), 4) Over 60 (40 %).' },
      { q: 'How do I get to the Canary Islands if there is no train?', a: 'By plane from Madrid-Barajas: Iberia, Air Europa, Ryanair and Vueling operate daily. Flight time Madrid → Gran Canaria 2h 30m, Madrid → Tenerife North 2h 35m. By ferry: Naviera Armas and Trasmediterránea operate from Cádiz and Huelva (38-48h, ideal if you want to take a car).' },
    ],
    relatedTitle: 'Related pages',
    related: [
      { href: '/como-llegar', text: 'How to get there (all options: plane, train, bus)' },
      { href: '/programa', text: 'Full schedule of the apostolic journey' },
      { href: '/ciudades/madrid', text: 'Madrid · journey city' },
      { href: '/ciudades/barcelona', text: 'Barcelona · journey city' },
      { href: '/como-asistir', text: 'How to attend the Pope’s events' },
      { href: '/bandera-vaticano', text: 'Vatican flag for the events' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Come arrivare in treno',
    title: 'Come arrivare in treno alla visita del Papa · Madrid e Barcellona 2026',
    subtitle: 'Guida completa per raggiungere in AVE alta velocità o treno internazionale le città del viaggio papale dal 6 al 12 giugno 2026.',
    intro: 'Il treno è il mezzo più comodo e sostenibile per raggiungere Madrid e Barcellona durante il viaggio di Papa Leone XIV. L’AVE tra le due città copre 621 km in 2h 30m, con partenze ogni 30 minuti. Per i pellegrini internazionali, Trainline offre la migliore interfaccia multilingue con ricerca combinata Renfe + SNCF (Francia) + Trenitalia (Italia) + DB (Germania) e pagamento in valuta locale. Le Isole Canarie non sono raggiungibili in treno: si arriva in aereo dalla penisola (Gran Canaria LPA, Tenerife TFN/TFS) o in traghetto da Cádiz, Huelva o Portogallo.',
    ctaTrainline: 'Confronta treni per Madrid · Trainline',
    ctaRenfe: 'Acquista AVE diretto su Renfe',
    quickFacts: [
      { label: 'Migliore opzione internazionale', value: 'Trainline (copre Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcellona AVE', value: '2h 30m · da 39 € · ogni 30 min' },
      { label: 'Stazione Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Stazione Barcellona', value: 'Barcelona Sants' },
      { label: 'Canarie', value: 'Nessun collegamento ferroviario (aereo o traghetto)' },
      { label: 'Prenotare in anticipo', value: '21 giorni prima per il miglior prezzo' },
    ],
    whyTitle: 'Perché viaggiare in treno?',
    whyBody: [
      'Comodità e velocità sulle medie distanze. L’AVE collega Madrid e Barcellona in 2h 30m da centro a centro, contro ~4h totali in aereo sommando aeroporti, controlli e trasferimenti. Il treno arriva nel cuore della città, non a 30 km come gli aeroporti.',
      'Sostenibilità. Un viaggio Madrid-Barcellona in AVE emette ~14 kg di CO₂ a persona contro ~120 kg in aereo. L’enciclica «Laudato si\'» di Papa Francesco —magistero che Leone XIV continua— invita a scegliere il mezzo meno inquinante quando possibile.',
      'Bagaglio gratuito. Trainline e Renfe consentono 2-3 valigie grandi senza costi aggiuntivi. Particolarmente utile se porti bandiera vaticana, kit del pellegrino, cuscino pieghevole e acqua: in aereo ogni valigia in stiva costa tra 30 e 60 €.',
      'Nessuna restrizione sui liquidi. In treno puoi portare acqua, barrette e crema solare senza passare i controlli di sicurezza aeroportuali.',
    ],
    routesTitle: 'Rotte principali verso Madrid e Barcellona',
    routesIntro: 'Prezzi indicativi in classe Turista acquistando 21 giorni in anticipo. I prezzi salgono rapidamente con l’avvicinarsi della data. Raccomandiamo di prenotare entro il 20 maggio.',
    routesNote: 'Ricerche pre-compilate per il 5 giugno (vigilia della visita). Modifica date e nº di passeggeri nel form di Trainline.',
    routes: ROUTES_BASE,
    routeCta: 'Cerca su Trainline →',
    stationsTitle: 'Stazioni principali',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: tutte le linee. Bus: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'A 1,2 km da Plaza de Cibeles (atto del 7 giu). 25 min a piedi o Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcellona',
      metro: 'Metro: Sants Estació (L3 e L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: 'A 4 km dalla Sagrada Familia. Metro L5 diretta o taxi 15 min. Vicina allo Stadio Olimpico Lluís Companys (veglia 9 giu).',
    },
    canariasTitle: 'Canarie: nessun collegamento ferroviario',
    canariasBody: 'Le Isole Canarie non hanno rete ferroviaria. Per raggiungere Gran Canaria (atto dell’11 giu allo Stadio di Gran Canaria) e Tenerife (messa di chiusura del 12 giu nel Porto di Santa Cruz) ci sono due opzioni: aereo da Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, diverse frequenze giornaliere) o traghetto da Cádiz / Huelva con Naviera Armas o Trasmediterránea (38-48h di traversata, ideale per portare l’auto).',
    comparisonTitle: 'Trainline vs Renfe: quale uso?',
    comparisonIntro: 'Entrambi vendono gli stessi biglietti AVE di Renfe. La differenza è nell’interfaccia, lingua, valuta e rotte internazionali.',
    comparisonRows: [
      { label: 'Lingua', trainline: '14 lingue (IT, ES, EN, FR, DE, PT…)', renfe: 'Spagnolo + inglese base' },
      { label: 'Valuta', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Solo EUR' },
      { label: 'AVE Madrid-Barcellona', trainline: '✅ Sì, stessi prezzi', renfe: '✅ Sì, ufficiale' },
      { label: 'Collegamento Parigi-Madrid', trainline: '✅ Combinato SNCF+Renfe', renfe: '❌ No' },
      { label: 'Collegamento Italia (Trenitalia)', trainline: '✅ Sì', renfe: '❌ No' },
      { label: 'Ricerca multicittà', trainline: '✅ Sì', renfe: 'Limitata' },
      { label: 'Migliore per', trainline: 'Pellegrini esteri', renfe: 'Spagnoli con account Renfe Más' },
    ],
    faqTitle: 'Domande frequenti',
    faq: [
      { q: 'Quando apre la vendita degli AVE del 6-12 giugno 2026?', a: 'Renfe apre la vendita dei biglietti AVE tra 60 e 90 giorni prima della partenza. Per la visita del Papa la vendita è aperta da marzo 2026. Prima prenoti, miglior prezzo (le tariffe Promo e Promo+ si esauriscono prima).' },
      { q: 'C’è AVE diretto Madrid-Barcellona il 9 giugno?', a: 'Sì. L’AVE Madrid-Barcellona opera ogni 30 minuti dalle 06:00 alle 21:30. Il Papa viaggerà a Barcellona il 9 giugno alle 11:30-12:25 (in aereo, non in treno). Per i pellegrini che seguono il percorso, raccomandiamo un AVE mattutino per arrivare in tempo alla veglia di Lluís Companys (20:00).' },
      { q: 'Posso portare la bandiera del Vaticano sul treno?', a: 'Sì. Renfe e Trainline consentono bandiere piegate nel bagaglio a mano senza restrizioni. Bandiere con asta rigida > 1m devono essere imbarcate come bagaglio aggiuntivo (~5 €). Le bandiere di tessuto morbido 90×90 cm stanno piegate nello zaino.' },
      { q: 'Trainline funziona per pellegrini esteri?', a: 'Sì, è la migliore opzione per stranieri. Trainline ha 14 lingue, paga in valuta locale, cerca collegamenti internazionali (Parigi-Barcellona, Milano-Madrid con cambio a Parigi, Lisbona-Madrid con cambio) e copre Renfe ufficiale. Per spagnoli con account Renfe Más, Renfe.com può essere più semplice.' },
      { q: 'Ci sono sconti per pellegrini?', a: 'Non esiste tariffa ufficiale «pellegrino» di Renfe. Le migliori opzioni sono: 1) Acquistare con 21+ giorni di anticipo (Promo e Promo+), 2) Carta Giovane Renfe (14-25 anni, 25-30 % sconto), 3) Famiglia Numerosa (20-50 %), 4) +60 (40 %).' },
      { q: 'Come arrivo alle Canarie se non c’è treno?', a: 'In aereo da Madrid-Barajas: Iberia, Air Europa, Ryanair e Vueling operano quotidianamente. Tempo di volo Madrid → Gran Canaria 2h 30m, Madrid → Tenerife Nord 2h 35m. In traghetto: Naviera Armas e Trasmediterránea operano da Cádiz e Huelva (38-48h, ideale per portare l’auto).' },
    ],
    relatedTitle: 'Pagine correlate',
    related: [
      { href: '/como-llegar', text: 'Come arrivare (tutte le opzioni: aereo, treno, autobus)' },
      { href: '/programa', text: 'Programma completo del viaggio apostolico' },
      { href: '/ciudades/madrid', text: 'Madrid · città del viaggio' },
      { href: '/ciudades/barcelona', text: 'Barcellona · città del viaggio' },
      { href: '/como-asistir', text: 'Come partecipare agli atti del Papa' },
      { href: '/bandera-vaticano', text: 'Bandiera del Vaticano per gli atti' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Comment venir en train',
    title: 'Comment venir en train à la visite du Pape · Madrid et Barcelone 2026',
    subtitle: 'Guide complet pour rejoindre en AVE à grande vitesse ou en train international les villes du voyage papal du 6 au 12 juin 2026.',
    intro: 'Le train est le moyen le plus confortable et durable pour rejoindre Madrid et Barcelone pendant la visite du Pape Léon XIV. L’AVE entre les deux villes couvre 621 km en 2h 30m, avec des départs toutes les 30 minutes. Pour les pèlerins internationaux, Trainline offre la meilleure interface multilingue avec recherche combinée Renfe + SNCF (France) + Trenitalia (Italie) + DB (Allemagne) et paiement en monnaie locale. Les îles Canaries ne sont pas accessibles par train : on s’y rend en avion depuis la péninsule (Grande Canarie LPA, Ténérife TFN/TFS) ou en ferry depuis Cádiz, Huelva ou le Portugal.',
    ctaTrainline: 'Comparer les trains pour Madrid · Trainline',
    ctaRenfe: 'Acheter AVE directement sur Renfe',
    quickFacts: [
      { label: 'Meilleure option internationale', value: 'Trainline (couvre Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcelone AVE', value: '2h 30m · à partir de 39 € · toutes les 30 min' },
      { label: 'Gare Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Gare Barcelone', value: 'Barcelona Sants' },
      { label: 'Canaries', value: 'Pas de liaison ferroviaire (avion ou ferry)' },
      { label: 'Réserver à l’avance', value: '21 jours avant pour le meilleur prix' },
    ],
    whyTitle: 'Pourquoi voyager en train ?',
    whyBody: [
      'Confort et rapidité sur moyenne distance. L’AVE relie Madrid et Barcelone en 2h 30m centre à centre, contre ~4h au total en avion en incluant aéroports, contrôles et transferts. Le train arrive au cœur de la ville, pas à 30 km comme les aéroports.',
      'Durabilité. Un voyage Madrid-Barcelone en AVE émet ~14 kg de CO₂ par personne contre ~120 kg en avion. L’encyclique « Laudato si\' » du Pape François —magistère que Léon XIV poursuit— invite à choisir le moyen le moins polluant quand c’est possible.',
      'Bagages gratuits. Trainline et Renfe autorisent 2-3 grandes valises sans coût supplémentaire. Particulièrement utile si vous transportez drapeau du Vatican, kit du pèlerin, coussin pliable et eau : en avion chaque valise en soute coûte entre 30 et 60 €.',
      'Pas de restrictions de liquides. En train vous pouvez transporter eau, barres énergétiques et crème solaire sans passer les contrôles de sécurité aéroportuaires.',
    ],
    routesTitle: 'Principales liaisons vers Madrid et Barcelone',
    routesIntro: 'Prix indicatifs en classe Touriste en achetant 21 jours à l’avance. Les prix montent vite à l’approche de la date. Nous recommandons de réserver avant le 20 mai.',
    routesNote: 'Recherches pré-remplies pour le 5 juin (veille de la visite). Modifiez dates et nombre de passagers dans le formulaire Trainline.',
    routes: ROUTES_BASE,
    routeCta: 'Chercher sur Trainline →',
    stationsTitle: 'Gares principales',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Métro : Atocha Renfe (L1). Cercanías : toutes lignes. Bus : 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'À 1,2 km de Plaza de Cibeles (acte du 7 juin). 25 min à pied ou Métro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelone',
      metro: 'Métro : Sants Estació (L3 et L5). Cercanías : R1, R2, R3, R4. Bus : H10, V7, V11',
      tip: 'À 4 km de la Sagrada Familia. Métro L5 direct ou taxi 15 min. Proche du Stade olympique Lluís Companys (veillée 9 juin).',
    },
    canariasTitle: 'Canaries : pas de liaison ferroviaire',
    canariasBody: 'Les îles Canaries n’ont pas de réseau ferroviaire. Pour rejoindre la Grande Canarie (acte du 11 juin au Stade de Grande Canarie) et Ténérife (messe de clôture du 12 juin au Port de Santa Cruz), deux options : avion depuis Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, plusieurs fréquences par jour) ou ferry depuis Cádiz / Huelva avec Naviera Armas ou Trasmediterránea (traversée de 38-48h, idéale pour emporter la voiture).',
    comparisonTitle: 'Trainline vs Renfe : lequel utiliser ?',
    comparisonIntro: 'Les deux vendent les mêmes billets AVE de Renfe. La différence est dans l’interface, langue, monnaie et liaisons internationales.',
    comparisonRows: [
      { label: 'Langue', trainline: '14 langues (FR, ES, EN, IT, DE, PT…)', renfe: 'Espagnol + anglais basique' },
      { label: 'Monnaie', trainline: 'EUR, GBP, USD, CHF…', renfe: 'EUR uniquement' },
      { label: 'AVE Madrid-Barcelone', trainline: '✅ Oui, mêmes prix', renfe: '✅ Oui, officiel' },
      { label: 'Connexion Paris-Madrid', trainline: '✅ Combinée SNCF+Renfe', renfe: '❌ Non' },
      { label: 'Connexion Italie (Trenitalia)', trainline: '✅ Oui', renfe: '❌ Non' },
      { label: 'Recherche multi-villes', trainline: '✅ Oui', renfe: 'Limitée' },
      { label: 'Mieux pour', trainline: 'Pèlerins étrangers', renfe: 'Espagnols avec compte Renfe Más' },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      { q: 'Quand ouvre la vente des AVE du 6-12 juin 2026 ?', a: 'Renfe ouvre la vente des billets AVE entre 60 et 90 jours avant le départ. Pour la visite du Pape, la vente est ouverte depuis mars 2026. Plus vous réservez tôt, meilleur prix (tarifs Promo et Promo+ s’épuisent en premier).' },
      { q: 'Y a-t-il un AVE direct Madrid-Barcelone le 9 juin ?', a: 'Oui. L’AVE Madrid-Barcelone circule toutes les 30 minutes de 06:00 à 21:30. Le Pape voyagera à Barcelone le 9 juin de 11:30-12:25 (en avion, pas en train). Pour les pèlerins qui suivent le parcours, nous recommandons un AVE du matin pour arriver à temps pour la veillée de Lluís Companys (20:00).' },
      { q: 'Puis-je apporter mon drapeau du Vatican dans le train ?', a: 'Oui. Renfe et Trainline autorisent les drapeaux pliés dans les bagages à main sans restriction. Les drapeaux avec mât rigide > 1m doivent être enregistrés en bagage supplémentaire (~5 €). Les drapeaux en tissu souple 90×90 cm tiennent pliés dans un sac à dos.' },
      { q: 'Trainline fonctionne-t-il pour les pèlerins étrangers ?', a: 'Oui, c’est la meilleure option pour les étrangers. Trainline a 14 langues, facture en monnaie locale, cherche les connexions internationales (Paris-Barcelone, Milan-Madrid avec changement à Paris, Lisbonne-Madrid avec changement) et couvre Renfe officiel. Pour les Espagnols avec compte Renfe Más, Renfe.com peut être plus simple.' },
      { q: 'Y a-t-il des réductions pèlerin ?', a: 'Il n’existe pas de tarif officiel « pèlerin » Renfe. Les meilleures options sont : 1) Acheter 21+ jours à l’avance (Promo et Promo+), 2) Carte Jeune Renfe (14-25 ans, 25-30 % de réduction), 3) Famille Nombreuse (20-50 %), 4) +60 (40 %).' },
      { q: 'Comment se rendre aux Canaries s’il n’y a pas de train ?', a: 'En avion depuis Madrid-Barajas : Iberia, Air Europa, Ryanair et Vueling opèrent quotidiennement. Temps de vol Madrid → Grande Canarie 2h 30m, Madrid → Ténérife Nord 2h 35m. En ferry : Naviera Armas et Trasmediterránea opèrent depuis Cádiz et Huelva (38-48h, idéal pour emporter la voiture).' },
    ],
    relatedTitle: 'Pages liées',
    related: [
      { href: '/como-llegar', text: 'Comment s’y rendre (toutes options : avion, train, bus)' },
      { href: '/programa', text: 'Programme complet du voyage apostolique' },
      { href: '/ciudades/madrid', text: 'Madrid · ville du voyage' },
      { href: '/ciudades/barcelona', text: 'Barcelone · ville du voyage' },
      { href: '/como-asistir', text: 'Comment assister aux actes du Pape' },
      { href: '/bandera-vaticano', text: 'Drapeau du Vatican pour les actes' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Mit dem Zug anreisen',
    title: 'Mit dem Zug zur Papstreise · Madrid und Barcelona 2026',
    subtitle: 'Vollständiger Leitfaden, um mit dem AVE-Hochgeschwindigkeitszug oder internationalem Zug die Städte der Papstreise vom 6. bis 12. Juni 2026 zu erreichen.',
    intro: 'Der Zug ist das bequemste und nachhaltigste Verkehrsmittel, um Madrid und Barcelona während des Besuchs von Papst Leo XIV. zu erreichen. Der AVE zwischen beiden Städten legt 621 km in 2h 30m zurück, mit Abfahrten alle 30 Minuten. Für internationale Pilger bietet Trainline die beste mehrsprachige Oberfläche mit kombinierter Suche über Renfe + SNCF (Frankreich) + Trenitalia (Italien) + DB (Deutschland) und Zahlung in lokaler Währung. Die Kanarischen Inseln sind nicht per Zug erreichbar: Man kommt per Flugzeug vom Festland (Gran Canaria LPA, Teneriffa TFN/TFS) oder per Fähre von Cádiz, Huelva oder Portugal.',
    ctaTrainline: 'Züge nach Madrid vergleichen · Trainline',
    ctaRenfe: 'AVE direkt bei Renfe kaufen',
    quickFacts: [
      { label: 'Beste internationale Option', value: 'Trainline (deckt Renfe + SNCF + Trenitalia + DB ab)' },
      { label: 'Madrid ↔ Barcelona AVE', value: '2h 30m · ab 39 € · alle 30 min' },
      { label: 'Bahnhof Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Bahnhof Barcelona', value: 'Barcelona Sants' },
      { label: 'Kanaren', value: 'Keine Bahnverbindung (Flug oder Fähre)' },
      { label: 'Im Voraus buchen', value: '21 Tage vorher für besten Preis' },
    ],
    whyTitle: 'Warum mit dem Zug reisen?',
    whyBody: [
      'Komfort und Geschwindigkeit auf mittleren Strecken. Der AVE verbindet Madrid und Barcelona in 2h 30m von Zentrum zu Zentrum, gegenüber ~4h gesamt mit dem Flugzeug einschließlich Flughäfen, Sicherheitskontrollen und Transfers. Der Zug fährt mitten in die Stadt, nicht 30 km entfernt wie die Flughäfen.',
      'Nachhaltigkeit. Eine AVE-Reise Madrid-Barcelona stößt ~14 kg CO₂ pro Person aus gegenüber ~120 kg im Flugzeug. Die Enzyklika „Laudato si\'" von Papst Franziskus —Magisterium, das Leo XIV. fortsetzt— lädt ein, das umweltfreundlichste Verkehrsmittel zu wählen, wenn möglich.',
      'Gepäck kostenlos. Trainline und Renfe erlauben 2-3 große Koffer ohne Zusatzkosten. Besonders nützlich, wenn Sie Vatikanflagge, Pilgerausrüstung, Faltkissen und Wasser mitnehmen: Im Flugzeug kostet jeder aufgegebene Koffer 30-60 €.',
      'Keine Flüssigkeitsbeschränkungen. Im Zug können Sie Wasser, Energieriegel und Sonnencreme ohne Flughafensicherheitskontrolle mitführen.',
    ],
    routesTitle: 'Hauptverbindungen nach Madrid und Barcelona',
    routesIntro: 'Richtpreise in der Touristenklasse beim Kauf 21 Tage im Voraus. Die Preise steigen schnell mit Annäherung an das Datum. Wir empfehlen, vor dem 20. Mai zu buchen.',
    routesNote: 'Vorausgefüllte Suchen für den 5. Juni (Vorabend der Reise). Datum und Passagieranzahl im Trainline-Formular anpassen.',
    routes: ROUTES_BASE,
    routeCta: 'Auf Trainline suchen →',
    stationsTitle: 'Hauptbahnhöfe',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: alle Linien. Bus: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: '1,2 km von Plaza de Cibeles (Akt 7. Juni). 25 min zu Fuß oder Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelona',
      metro: 'Metro: Sants Estació (L3 und L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: '4 km von der Sagrada Família. Metro L5 direkt oder Taxi 15 min. Nahe Olympiastadion Lluís Companys (Vigil 9. Juni).',
    },
    canariasTitle: 'Kanaren: keine Bahnverbindung',
    canariasBody: 'Die Kanarischen Inseln haben kein Schienennetz. Um Gran Canaria (Akt am 11. Juni im Stadion von Gran Canaria) und Teneriffa (Abschlussmesse am 12. Juni im Hafen von Santa Cruz) zu erreichen, gibt es zwei Optionen: Flug von Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, mehrere tägliche Frequenzen) oder Fähre von Cádiz / Huelva mit Naviera Armas oder Trasmediterránea (38-48h Überfahrt, ideal, um das Auto mitzunehmen).',
    comparisonTitle: 'Trainline vs Renfe: Welche nutze ich?',
    comparisonIntro: 'Beide verkaufen dieselben AVE-Tickets von Renfe. Der Unterschied liegt in Oberfläche, Sprache, Währung und internationalen Verbindungen.',
    comparisonRows: [
      { label: 'Sprache', trainline: '14 Sprachen (DE, ES, EN, IT, FR, PT…)', renfe: 'Spanisch + Englisch grundlegend' },
      { label: 'Währung', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Nur EUR' },
      { label: 'AVE Madrid-Barcelona', trainline: '✅ Ja, gleiche Preise', renfe: '✅ Ja, offiziell' },
      { label: 'Paris-Madrid', trainline: '✅ Kombiniert SNCF+Renfe', renfe: '❌ Nein' },
      { label: 'Italien (Trenitalia)', trainline: '✅ Ja', renfe: '❌ Nein' },
      { label: 'Mehrstädtige Suche', trainline: '✅ Ja', renfe: 'Begrenzt' },
      { label: 'Am besten für', trainline: 'Internationale Pilger', renfe: 'Spanier mit Renfe-Más-Konto' },
    ],
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Wann beginnt der AVE-Verkauf für 6.-12. Juni 2026?', a: 'Renfe öffnet den Verkauf der AVE-Tickets 60-90 Tage vor Abfahrt. Für den Papstbesuch ist der Verkauf seit März 2026 offen. Je früher man bucht, desto besser der Preis (Promo- und Promo+-Tarife sind zuerst ausverkauft).' },
      { q: 'Gibt es am 9. Juni einen direkten AVE Madrid-Barcelona?', a: 'Ja. Der AVE Madrid-Barcelona verkehrt alle 30 Minuten von 06:00 bis 21:30. Der Papst reist am 9. Juni um 11:30-12:25 nach Barcelona (per Flugzeug, nicht Zug). Für Pilger, die der Route folgen, empfehlen wir einen morgendlichen AVE, um rechtzeitig zur Lluís-Companys-Vigil (20:00) anzukommen.' },
      { q: 'Darf ich meine Vatikanflagge im Zug mitnehmen?', a: 'Ja. Renfe und Trainline erlauben gefaltete Flaggen im Handgepäck ohne Einschränkungen. Flaggen mit starrer Stange > 1m müssen als zusätzliches Gepäckstück aufgegeben werden (~5 €). Weiche Stoffflaggen 90×90 cm passen gefaltet in den Rucksack.' },
      { q: 'Funktioniert Trainline für internationale Pilger?', a: 'Ja, es ist die beste Option für Ausländer. Trainline hat 14 Sprachen, rechnet in lokaler Währung ab, sucht internationale Verbindungen (Paris-Barcelona, Mailand-Madrid mit Umstieg in Paris, Lissabon-Madrid mit Umstieg) und deckt offizielles Renfe ab. Für Spanier mit Renfe-Más-Konto kann Renfe.com einfacher sein.' },
      { q: 'Gibt es Pilgerrabatte?', a: 'Es gibt keinen offiziellen „Pilger"-Tarif bei Renfe. Die besten Optionen sind: 1) 21+ Tage im Voraus kaufen (Promo und Promo+), 2) Renfe-Jugendkarte (14-25 Jahre, 25-30 % Rabatt), 3) Großfamilie (20-50 %), 4) +60 (40 %).' },
      { q: 'Wie komme ich auf die Kanaren ohne Zug?', a: 'Per Flugzeug von Madrid-Barajas: Iberia, Air Europa, Ryanair und Vueling fliegen täglich. Flugzeit Madrid → Gran Canaria 2h 30m, Madrid → Teneriffa Nord 2h 35m. Per Fähre: Naviera Armas und Trasmediterránea ab Cádiz und Huelva (38-48h, ideal, um das Auto mitzunehmen).' },
    ],
    relatedTitle: 'Verwandte Seiten',
    related: [
      { href: '/como-llegar', text: 'Anreise (alle Optionen: Flug, Zug, Bus)' },
      { href: '/programa', text: 'Vollständiges Programm der apostolischen Reise' },
      { href: '/ciudades/madrid', text: 'Madrid · Reisestadt' },
      { href: '/ciudades/barcelona', text: 'Barcelona · Reisestadt' },
      { href: '/como-asistir', text: 'Wie man an den Akten des Papstes teilnimmt' },
      { href: '/bandera-vaticano', text: 'Vatikanflagge für die Akte' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Como chegar de comboio',
    title: 'Como chegar de comboio à visita do Papa · Madrid e Barcelona 2026',
    subtitle: 'Guia completo para chegar em AVE alta velocidade ou comboio internacional às cidades da viagem papal de 6 a 12 de junho de 2026.',
    intro: 'O comboio é o meio mais confortável e sustentável para chegar a Madrid e Barcelona durante a visita do Papa Leão XIV. O AVE entre as duas cidades percorre 621 km em 2h 30m, com partidas a cada 30 minutos. Para peregrinos internacionais, a Trainline oferece a melhor interface multilíngue com pesquisa combinada Renfe + SNCF (França) + Trenitalia (Itália) + DB (Alemanha) e pagamento em moeda local. As Ilhas Canárias não são acessíveis de comboio: chega-se de avião desde a península (Gran Canária LPA, Tenerife TFN/TFS) ou de ferry desde Cádiz, Huelva ou Portugal.',
    ctaTrainline: 'Comparar comboios a Madrid · Trainline',
    ctaRenfe: 'Comprar AVE direto na Renfe',
    quickFacts: [
      { label: 'Melhor opção internacional', value: 'Trainline (cobre Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcelona AVE', value: '2h 30m · desde 39 € · a cada 30 min' },
      { label: 'Estação Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Estação Barcelona', value: 'Barcelona Sants' },
      { label: 'Canárias', value: 'Sem ligação ferroviária (avião ou ferry)' },
      { label: 'Reservar com antecedência', value: '21 dias antes para melhor preço' },
    ],
    whyTitle: 'Porquê viajar de comboio?',
    whyBody: [
      'Conforto e rapidez em distâncias médias. O AVE liga Madrid e Barcelona em 2h 30m de centro a centro, contra ~4h totais de avião somando aeroportos, controlos e transferências. O comboio chega ao coração da cidade, não a 30 km como os aeroportos.',
      'Sustentabilidade. Uma viagem Madrid-Barcelona em AVE emite ~14 kg de CO₂ por pessoa contra ~120 kg de avião. A encíclica «Laudato si\'» do Papa Francisco —magistério que Leão XIV continua— convida a escolher o meio menos poluente quando possível.',
      'Bagagem grátis. Trainline e Renfe permitem 2-3 malas grandes sem custo adicional. Particularmente útil se levar bandeira do Vaticano, kit do peregrino, almofada dobrável e água: no avião cada mala despachada custa entre 30 e 60 €.',
      'Sem restrições de líquidos. No comboio pode levar água, barras energéticas e protetor solar sem passar pelo controlo de segurança aeroportuário.',
    ],
    routesTitle: 'Rotas principais para Madrid e Barcelona',
    routesIntro: 'Preços indicativos em classe Turista comprando com 21 dias de antecedência. Os preços sobem rapidamente à medida que se aproxima a data. Recomendamos reservar antes de 20 de maio.',
    routesNote: 'Pesquisas pré-preenchidas para 5 de junho (véspera da visita). Modifique datas e nº de passageiros no formulário da Trainline.',
    routes: ROUTES_BASE,
    routeCta: 'Pesquisar na Trainline →',
    stationsTitle: 'Estações principais',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: todas as linhas. Autocarro: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'A 1,2 km da Plaza de Cibeles (ato de 7 jun). 25 min a pé ou Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelona',
      metro: 'Metro: Sants Estació (L3 e L5). Cercanías: R1, R2, R3, R4. Autocarro: H10, V7, V11',
      tip: 'A 4 km da Sagrada Família. Metro L5 direto ou táxi 15 min. Próximo do Estádio Olímpico Lluís Companys (vigília 9 jun).',
    },
    canariasTitle: 'Canárias: sem ligação ferroviária',
    canariasBody: 'As Ilhas Canárias não têm rede ferroviária. Para chegar a Gran Canária (ato de 11 jun no Estádio de Gran Canária) e a Tenerife (missa de encerramento de 12 jun no Porto de Santa Cruz) há duas opções: avião desde Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, várias frequências diárias) ou ferry desde Cádiz / Huelva com Naviera Armas ou Trasmediterránea (38-48h de travessia, ideal para levar carro).',
    comparisonTitle: 'Trainline vs Renfe: qual uso?',
    comparisonIntro: 'Ambos vendem os mesmos bilhetes AVE da Renfe. A diferença está na interface, idioma, moeda e rotas internacionais.',
    comparisonRows: [
      { label: 'Idioma', trainline: '14 idiomas (PT, ES, EN, IT, FR, DE…)', renfe: 'Espanhol + inglês básico' },
      { label: 'Moeda', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Apenas EUR' },
      { label: 'AVE Madrid-Barcelona', trainline: '✅ Sim, mesmos preços', renfe: '✅ Sim, oficial' },
      { label: 'Ligação Paris-Madrid', trainline: '✅ Combinada SNCF+Renfe', renfe: '❌ Não' },
      { label: 'Ligação Itália (Trenitalia)', trainline: '✅ Sim', renfe: '❌ Não' },
      { label: 'Pesquisa multi-cidade', trainline: '✅ Sim', renfe: 'Limitada' },
      { label: 'Melhor para', trainline: 'Peregrinos estrangeiros', renfe: 'Espanhóis com conta Renfe Más' },
    ],
    faqTitle: 'Perguntas frequentes',
    faq: [
      { q: 'Quando abre a venda dos AVE de 6-12 junho 2026?', a: 'A Renfe abre a venda de bilhetes AVE entre 60 e 90 dias antes da data de partida. Para a visita do Papa a venda está aberta desde março de 2026. Quanto mais cedo reservar, melhor preço (as tarifas Promo e Promo+ esgotam primeiro).' },
      { q: 'Há AVE direto Madrid-Barcelona no dia 9 de junho?', a: 'Sim. O AVE Madrid-Barcelona opera a cada 30 minutos das 06:00 às 21:30. O Papa viaja para Barcelona dia 9 de junho às 11:30-12:25 (avião, não comboio). Para peregrinos que sigam o percurso, recomendamos AVE matinal para chegar a tempo da vigília de Lluís Companys (20:00).' },
      { q: 'Posso levar a minha bandeira do Vaticano no comboio?', a: 'Sim. Renfe e Trainline permitem bandeiras dobradas na bagagem de mão sem restrições. Bandeiras com mastro rígido > 1m devem ser despachadas como volume adicional (~5 €). Bandeiras de tecido macio 90×90 cm cabem dobradas na mochila.' },
      { q: 'A Trainline funciona para peregrinos estrangeiros?', a: 'Sim, é a melhor opção para estrangeiros. A Trainline tem 14 idiomas, cobra em moeda local, pesquisa ligações internacionais (Paris-Barcelona, Milão-Madrid com mudança em Paris, Lisboa-Madrid com mudança) e cobre a Renfe oficial. Para espanhóis com conta Renfe Más, a Renfe.com pode ser mais simples.' },
      { q: 'Há descontos para peregrinos?', a: 'Não há tarifa oficial «peregrino» da Renfe. As melhores opções são: 1) Comprar com 21+ dias de antecedência (Promo e Promo+), 2) Cartão Jovem Renfe (14-25 anos, 25-30 % de desconto), 3) Família Numerosa (20-50 %), 4) +60 (40 %).' },
      { q: 'Como chego às Canárias se não há comboio?', a: 'De avião desde Madrid-Barajas: Iberia, Air Europa, Ryanair e Vueling operam diariamente. Tempo de voo Madrid → Gran Canária 2h 30m, Madrid → Tenerife Norte 2h 35m. De ferry: Naviera Armas e Trasmediterránea operam desde Cádiz e Huelva (38-48h, ideal para levar carro).' },
    ],
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/como-llegar', text: 'Como chegar (todas as opções: avião, comboio, autocarro)' },
      { href: '/programa', text: 'Programa completo da viagem apostólica' },
      { href: '/ciudades/madrid', text: 'Madrid · cidade da viagem' },
      { href: '/ciudades/barcelona', text: 'Barcelona · cidade da viagem' },
      { href: '/como-asistir', text: 'Como assistir aos atos do Papa' },
      { href: '/bandera-vaticano', text: 'Bandeira do Vaticano para os atos' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Com arribar en tren',
    title: 'Com arribar en tren a la visita del Papa · Madrid i Barcelona 2026',
    subtitle: 'Guia completa per arribar en AVE alta velocitat o tren internacional a les ciutats del viatge papal del 6 al 12 de juny de 2026.',
    intro: 'El tren és el mitjà més còmode i sostenible per arribar a Madrid i Barcelona durant la visita del Papa Lleó XIV. L’AVE entre les dues ciutats cobreix 621 km en 2h 30m, amb sortides cada 30 minuts. Per als pelegrins internacionals, Trainline ofereix la millor interfície multilingüe amb cerca combinada Renfe + SNCF (França) + Trenitalia (Itàlia) + DB (Alemanya) i pagament en moneda local. Les Illes Canàries no són accessibles per tren: s’hi arriba en avió des de la península (Gran Canària LPA, Tenerife TFN/TFS) o en ferri des de Cadis, Huelva o Portugal.',
    ctaTrainline: 'Comparar trens a Madrid · Trainline',
    ctaRenfe: 'Comprar AVE directe a Renfe',
    quickFacts: [
      { label: 'Millor opció internacional', value: 'Trainline (cobreix Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcelona AVE', value: '2h 30m · des de 39 € · cada 30 min' },
      { label: 'Estació Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Estació Barcelona', value: 'Barcelona Sants' },
      { label: 'Canàries', value: 'Sense connexió per tren (avió o ferri)' },
      { label: 'Reservar amb antelació', value: '21 dies abans per al millor preu' },
    ],
    whyTitle: 'Per què viatjar en tren?',
    whyBody: [
      'Comoditat i rapidesa en distàncies mitjanes. L’AVE connecta Madrid i Barcelona en 2h 30m centre a centre, contra ~4h totals en avió sumant aeroports, controls i trasllats. El tren arriba al cor de la ciutat, no a 30 km com els aeroports.',
      'Sostenibilitat. Un viatge Madrid-Barcelona en AVE emet ~14 kg de CO₂ per persona contra ~120 kg de l’avió. L’encíclica «Laudato si\'» del Papa Francesc —magisteri que Lleó XIV continua— convida a triar el mitjà menys contaminant quan és possible.',
      'Equipatge gratuït. Trainline i Renfe permeten 2-3 maletes grans sense cost addicional. Especialment útil si portes bandera del Vaticà, kit del pelegrí, coixí plegable i aigua: a l’avió cada maleta facturada costa entre 30 i 60 €.',
      'Sense restriccions de líquids. Al tren pots portar aigua, barretes i crema solar sense passar control de seguretat aeroportuari.',
    ],
    routesTitle: 'Rutes principals cap a Madrid i Barcelona',
    routesIntro: 'Preus orientatius en classe Turista comprant amb 21 dies d’antelació. Els preus pugen ràpidament a mesura que s’acosta la data. Recomanem reservar abans del 20 de maig.',
    routesNote: 'Cerques pre-omplertes per al 5 de juny (vigília de la visita). Modifica dates i nº de passatgers al formulari de Trainline.',
    routes: ROUTES_BASE,
    routeCta: 'Buscar a Trainline →',
    stationsTitle: 'Estacions principals',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: totes les línies. Autobús: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'A 1,2 km de la Plaça de Cibeles (acte del 7 jun). 25 min caminant o Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelona',
      metro: 'Metro: Sants Estació (L3 i L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: 'A 4 km de la Sagrada Família. Metro L5 directe o taxi 15 min. Pròxima a l’Estadi Olímpic Lluís Companys (vetlla 9 jun).',
    },
    canariasTitle: 'Canàries: sense connexió per tren',
    canariasBody: 'Les Illes Canàries no tenen xarxa ferroviària. Per arribar a Gran Canària (acte de l’11 jun a l’Estadi de Gran Canària) i a Tenerife (missa de clausura del 12 jun al Port de Santa Cruz) hi ha dues opcions: avió des de Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, diverses freqüències diàries) o ferri des de Cadis / Huelva amb Naviera Armas o Trasmediterránea (38-48h de travessia, opció per portar cotxe).',
    comparisonTitle: 'Trainline vs Renfe: quina faig servir?',
    comparisonIntro: 'Tots dos venen els mateixos bitllets AVE de Renfe. La diferència és en la interfície, l’idioma, la moneda i les rutes internacionals.',
    comparisonRows: [
      { label: 'Idioma', trainline: '14 idiomes (CA, ES, EN, IT, FR, DE…)', renfe: 'Espanyol + anglès bàsic' },
      { label: 'Moneda', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Només EUR' },
      { label: 'AVE Madrid-Barcelona', trainline: '✅ Sí, mateixos preus', renfe: '✅ Sí, oficial' },
      { label: 'Connexió París-Madrid', trainline: '✅ Combinada SNCF+Renfe', renfe: '❌ No' },
      { label: 'Connexió Itàlia (Trenitalia)', trainline: '✅ Sí', renfe: '❌ No' },
      { label: 'Cerca multi-ciutat', trainline: '✅ Sí', renfe: 'Limitada' },
      { label: 'Millor per a', trainline: 'Pelegrins estrangers', renfe: 'Espanyols amb compte Renfe Más' },
    ],
    faqTitle: 'Preguntes freqüents',
    faq: [
      { q: 'Quan obre la venda dels AVE del 6-12 juny 2026?', a: 'Renfe obre la venda de bitllets AVE entre 60 i 90 dies abans de la sortida. Per a la visita del Papa la venda és oberta des de març de 2026. Com abans reserves, millor preu (les tarifes Promo i Promo+ s’esgoten primer).' },
      { q: 'Hi ha AVE directe Madrid-Barcelona el 9 de juny?', a: 'Sí. L’AVE Madrid-Barcelona opera cada 30 minuts de 06:00 a 21:30. El Papa viatjarà a Barcelona el 9 de juny a les 11:30-12:25 (en avió, no en tren). Per als pelegrins que segueixen el recorregut, recomanem un AVE de matí per arribar a temps a la vetlla de Lluís Companys (20:00).' },
      { q: 'Puc portar la meva bandera del Vaticà al tren?', a: 'Sí. Renfe i Trainline permeten banderes plegades a l’equipatge de mà sense restriccions. Banderes amb pal rígid > 1m s’han de facturar com a embalum addicional (~5 €). Les banderes de tela suau 90×90 cm caben plegades a la motxilla.' },
      { q: 'Funciona Trainline per a pelegrins estrangers?', a: 'Sí, és la millor opció per a estrangers. Trainline té 14 idiomes, factura en moneda local, cerca connexions internacionals (París-Barcelona, Milà-Madrid amb canvi a París, Lisboa-Madrid amb canvi) i cobreix Renfe oficial. Per a espanyols amb compte Renfe Más, Renfe.com pot ser més simple.' },
      { q: 'Hi ha descomptes per a pelegrins?', a: 'No hi ha tarifa oficial «pelegrí» de Renfe. Les millors opcions són: 1) Comprar amb 21+ dies d’antelació (Promo i Promo+), 2) Targeta Jove Renfe (14-25 anys, 25-30 % de descompte), 3) Família Nombrosa (20-50 %), 4) +60 (40 %).' },
      { q: 'Com arribo a les Canàries si no hi ha tren?', a: 'En avió des de Madrid-Barajas: Iberia, Air Europa, Ryanair i Vueling operen diàriament. Temps de vol Madrid → Gran Canària 2h 30m, Madrid → Tenerife Nord 2h 35m. En ferri: Naviera Armas i Trasmediterránea operen des de Cadis i Huelva (38-48h, ideal per portar cotxe).' },
    ],
    relatedTitle: 'Pàgines relacionades',
    related: [
      { href: '/como-llegar', text: 'Com arribar (totes les opcions: avió, tren, autobús)' },
      { href: '/programa', text: 'Programa complet del viatge apostòlic' },
      { href: '/ciudades/madrid', text: 'Madrid · ciutat del viatge' },
      { href: '/ciudades/barcelona', text: 'Barcelona · ciutat del viatge' },
      { href: '/como-asistir', text: 'Com assistir als actes del Papa' },
      { href: '/bandera-vaticano', text: 'Bandera del Vaticà per als actes' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Como chegar en tren',
    title: 'Como chegar en tren á visita do Papa · Madrid e Barcelona 2026',
    subtitle: 'Guía completa para chegar en AVE alta velocidade ou tren internacional ás cidades da viaxe papal do 6 ao 12 de xuño de 2026.',
    intro: 'O tren é o medio máis cómodo e sostible para chegar a Madrid e Barcelona durante a visita do Papa León XIV. O AVE entre as dúas cidades cobre 621 km en 2h 30m, con saídas cada 30 minutos. Para peregrinos internacionais, Trainline ofrece a mellor interface multilingüe con busca combinada Renfe + SNCF (Francia) + Trenitalia (Italia) + DB (Alemaña) e pagamento en moeda local. As Illas Canarias non son accesibles por tren: chégase en avión desde a península (Gran Canaria LPA, Tenerife TFN/TFS) ou en ferry desde Cádiz, Huelva ou Portugal.',
    ctaTrainline: 'Comparar trens a Madrid · Trainline',
    ctaRenfe: 'Mercar AVE directo en Renfe',
    quickFacts: [
      { label: 'Mellor opción internacional', value: 'Trainline (cobre Renfe + SNCF + Trenitalia + DB)' },
      { label: 'Madrid ↔ Barcelona AVE', value: '2h 30m · desde 39 € · cada 30 min' },
      { label: 'Estación Madrid', value: 'Madrid Puerta de Atocha' },
      { label: 'Estación Barcelona', value: 'Barcelona Sants' },
      { label: 'Canarias', value: 'Sen conexión por tren (avión ou ferry)' },
      { label: 'Reservar con antelación', value: '21 días antes para mellor prezo' },
    ],
    whyTitle: 'Por que viaxar en tren?',
    whyBody: [
      'Comodidade e rapidez en distancias medias. O AVE conecta Madrid e Barcelona en 2h 30m centro a centro, contra ~4h totais en avión sumando aeroportos, controis e traslados. O tren chega ao corazón da cidade, non a 30 km como os aeroportos.',
      'Sostibilidade. Unha viaxe Madrid-Barcelona en AVE emite ~14 kg de CO₂ por persoa fronte a ~120 kg do avión. A encíclica «Laudato si\'» do Papa Francisco —maxisterio que León XIV continúa— invita a optar polo medio menos contaminante cando é posible.',
      'Equipaxe sen custo. Trainline e Renfe permiten 2-3 maletas grandes sen tarifa adicional. Especialmente útil se levas bandeira do Vaticano, kit do peregrino, coxín pregable e auga: no avión cada maleta facturada custa entre 30 e 60 €.',
      'Sen restricións de líquidos. No tren podes levar a auga, as barriñas e o protector solar sen pasar control de seguridade aeroportuaria.',
    ],
    routesTitle: 'Rutas principais cara a Madrid e Barcelona',
    routesIntro: 'Prezos orientativos en clase Turista mercando con 21 días de antelación. Os prezos soben rapidamente conforme se achega a data. Recomendamos reservar antes do 20 de maio.',
    routesNote: 'Buscas precubertas para o 5 de xuño (véspera da visita). Modifica datas e nº de pasaxeiros no formulario de Trainline.',
    routes: ROUTES_BASE,
    routeCta: 'Buscar en Trainline →',
    stationsTitle: 'Estacións principais',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metro: Atocha Renfe (L1). Cercanías: todas as liñas. Autobús: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'A 1,2 km da Plaza de Cibeles (acto do 7 xun). 25 min camiñando ou Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Barcelona',
      metro: 'Metro: Sants Estació (L3 e L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: 'A 4 km da Sagrada Familia. Metro L5 directo ou taxi 15 min. Próxima ao Estadio Olímpico Lluís Companys (vixilia 9 xun).',
    },
    canariasTitle: 'Canarias: sen conexión por tren',
    canariasBody: 'As Illas Canarias non teñen rede ferroviaria. Para chegar a Gran Canaria (acto do 11 xun no Estadio de Gran Canaria) e a Tenerife (misa de clausura do 12 xun no Porto de Santa Cruz) hai dúas opcións: avión desde Madrid-Barajas (LPA 2h 30m · TFN 2h 35m, varias frecuencias diarias) ou ferry desde Cádiz / Huelva con Naviera Armas ou Trasmediterránea (38-48h de travesía, opción para levar coche).',
    comparisonTitle: 'Trainline vs Renfe: cal uso?',
    comparisonIntro: 'Ambos venden os mesmos billetes AVE de Renfe. A diferenza está na interface, idioma, moeda e rutas internacionais.',
    comparisonRows: [
      { label: 'Idioma', trainline: '14 idiomas (GL, ES, EN, IT, FR, DE…)', renfe: 'Español + inglés básico' },
      { label: 'Moeda', trainline: 'EUR, GBP, USD, CHF…', renfe: 'Só EUR' },
      { label: 'AVE Madrid-Barcelona', trainline: '✅ Si, mesmos prezos', renfe: '✅ Si, oficial' },
      { label: 'Conexión París-Madrid', trainline: '✅ Combinada SNCF+Renfe', renfe: '❌ Non' },
      { label: 'Conexión Italia (Trenitalia)', trainline: '✅ Si', renfe: '❌ Non' },
      { label: 'Busca multi-cidade', trainline: '✅ Si', renfe: 'Limitada' },
      { label: 'Mellor para', trainline: 'Peregrinos estranxeiros', renfe: 'Españois con conta Renfe Más' },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: 'Cando abre a venda dos AVE do 6-12 xuño 2026?', a: 'Renfe abre a venda de billetes AVE entre 60 e 90 días antes da data de saída. Para a visita do Papa a venda leva aberta desde marzo de 2026. Canto antes reserves, mellor prezo (as tarifas Promo e Promo+ esgótanse primeiro).' },
      { q: 'Hai AVE directo Madrid-Barcelona o 9 de xuño?', a: 'Si. O AVE Madrid-Barcelona opera cada 30 minutos desde as 06:00 ata as 21:30. O Papa viaxará a Barcelona o 9 de xuño ás 11:30-12:25 (avión, non tren). Para peregrinos que sigan o percorrido, recomendamos AVE de mañá para chegar a tempo da vixilia de Lluís Companys (20:00).' },
      { q: 'Podo levar a miña bandeira do Vaticano no tren?', a: 'Si. Renfe e Trainline permiten bandeiras pregadas na equipaxe de man sen restricións. Bandeiras con mastro ríxido > 1m deben facturarse como bulto adicional (~5 €). As bandeiras de tea branda 90×90 cm caben pregadas na mochila.' },
      { q: 'Funciona Trainline para peregrinos estranxeiros?', a: 'Si, é a mellor opción para estranxeiros. Trainline ten 14 idiomas, paga en moeda local, busca conexións internacionais (París-Barcelona, Milán-Madrid con cambio en París, Lisboa-Madrid con cambio) e cobre Renfe oficial. Para españois con conta Renfe Más, Renfe.com pode ser máis simple.' },
      { q: 'Hai descontos para peregrinos?', a: 'Non hai tarifa oficial «peregrino» de Renfe. As mellores opcións son: 1) Mercar con 21+ días de antelación (Promo e Promo+), 2) Tarxeta Xove Renfe (14-25 anos, 25-30 % desconto), 3) Familia Numerosa (20-50 %), 4) +60 (40 %).' },
      { q: 'Como chego a Canarias se non hai tren?', a: 'En avión desde Madrid-Barajas: Iberia, Air Europa, Ryanair e Vueling operan diariamente. Tempo de voo Madrid → Gran Canaria 2h 30m, Madrid → Tenerife Norte 2h 35m. En ferry: Naviera Armas e Trasmediterránea operan desde Cádiz e Huelva (38-48h, ideal se queres levar coche).' },
    ],
    relatedTitle: 'Páxinas relacionadas',
    related: [
      { href: '/como-llegar', text: 'Como chegar (todas as opcións: avión, tren, autobús)' },
      { href: '/programa', text: 'Programa completo da viaxe apostólica' },
      { href: '/ciudades/madrid', text: 'Madrid · cidade da viaxe' },
      { href: '/ciudades/barcelona', text: 'Barcelona · cidade da viaxe' },
      { href: '/como-asistir', text: 'Como asistir aos actos do Papa' },
      { href: '/bandera-vaticano', text: 'Bandeira do Vaticano para os actos' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Trenez nola iritsi',
    title: 'Trenez nola iritsi Aita Santuaren bisitara · Madril eta Bartzelona 2026',
    subtitle: 'Gida osoa AVE abiadura handiko trenez edo nazioarteko trenez heltzeko 2026ko ekainaren 6tik 12rako bisita papaleko hirietara.',
    intro: 'Trena da Madrilera eta Bartzelonara iristeko bide erosoena eta jasangarriena Leon XIV.a Aita Santuaren bisitan zehar. Bi hirien arteko AVEk 621 km egiten ditu 2h 30m-tan, 30 minuturo irteerekin. Nazioarteko erromesentzat, Trainline-ek interfaze eleaniztun onena eskaintzen du Renfe + SNCF (Frantzia) + Trenitalia (Italia) + DB (Alemania) bilaketa konbinatuarekin, eta tokiko monetan ordainduta. Kanariak ez dira trenez iristeko aukerakoak: penintsulatik (Gran Canaria LPA, Tenerife TFN/TFS) abioiz edo Cádiz, Huelva edo Portugaletik ferryz iristen da.',
    ctaTrainline: 'Madrilera trenak alderatu · Trainline',
    ctaRenfe: 'AVE zuzena Renfen erosi',
    quickFacts: [
      { label: 'Nazioarteko aukerarik onena', value: 'Trainline (Renfe + SNCF + Trenitalia + DB hartzen ditu)' },
      { label: 'Madril ↔ Bartzelona AVE', value: '2h 30m · 39 €-tik · 30 minuturo' },
      { label: 'Madrilgo geltokia', value: 'Madrid Puerta de Atocha' },
      { label: 'Bartzelonako geltokia', value: 'Barcelona Sants' },
      { label: 'Kanariak', value: 'Trenez konexiorik gabe (abioia edo ferrya)' },
      { label: 'Aurrez erreserbatu', value: '21 egun lehenago prezio onenagatik' },
    ],
    whyTitle: 'Zergatik bidaiatu trenez?',
    whyBody: [
      'Erosotasuna eta abiadura distantzia ertainetan. AVEk Madril eta Bartzelona 2h 30m-tan lotzen ditu erditik erdira, abioian guztira ~4h-rekin alderatuta aireportuak, kontrolak eta lekualdaketak gehituz. Trena hiriaren bihotzera iristen da, ez 30 km-ra aireportuetan bezala.',
      'Jasangarritasuna. Madril-Bartzelona AVE bidaia batek ~14 kg CO₂ isurtzen ditu pertsonako, abioiz ~120 kg-rekin alderatuta. Frantzisko Aita Santuaren «Laudato si\'» entziklikak —Leon XIV.ak jarraitzen duen magisterioa— ahalik eta kutsadura gutxien duen bidea aukeratzera gonbidatzen du.',
      'Doako ekipajea. Trainline-k eta Renfe-k 2-3 maleta handi onartzen dituzte tarifa gehigarririk gabe. Bereziki erabilgarria Vatikanoaren bandera, erromes-kita, kuxin tolesgarria eta ura eramaten badituzu: abioian fakturatutako maleta bakoitzak 30-60 € kostatzen du.',
      'Likidoen murrizketarik gabe. Trenean ura, energia-barrak eta eguzki-krema eramaten dituzu aireportuko segurtasun-kontrolik pasatu gabe.',
    ],
    routesTitle: 'Madril eta Bartzelonarako ibilbide nagusiak',
    routesIntro: 'Turista klaseko prezio adierazgarriak, 21 egun aurretik erosita. Prezioak azkar igotzen dira dataren hurbilketarekin. Maiatzaren 20a baino lehen erreserbatzea gomendatzen dugu.',
    routesNote: 'Aurrebete bilaketak ekainaren 5erako (bisitaren bezpera). Aldatu data eta bidaiari kopurua Trainline-ren inprimakian.',
    routes: ROUTES_BASE,
    routeCta: 'Trainline-en bilatu →',
    stationsTitle: 'Geltoki nagusiak',
    madridStation: {
      name: 'Madrid Puerta de Atocha — Almudena Grandes',
      address: 'Plaza del Emperador Carlos V, 28045 Madrid',
      metro: 'Metroa: Atocha Renfe (L1). Cercanías: lerro guztiak. Autobusa: 10, 14, 19, 26, 27, 32, 34, 37, 45',
      tip: 'Cibeles plazatik 1,2 km-ra (ekainaren 7ko ekitaldia). 25 min oinez edo Metro L1 → Banco de España.',
    },
    barcelonaStation: {
      name: 'Barcelona Sants',
      address: 'Plaça dels Països Catalans, s/n, 08014 Bartzelona',
      metro: 'Metroa: Sants Estació (L3 eta L5). Cercanías: R1, R2, R3, R4. Bus: H10, V7, V11',
      tip: 'Sagrada Familiatik 4 km-ra. Metro L5 zuzena edo taxia 15 min. Lluís Companys Estadio Olinpikotik gertu (ekainak 9 bijilia).',
    },
    canariasTitle: 'Kanariak: trenez konexiorik gabe',
    canariasBody: 'Kanarietan ez dago trenbide-sarerik. Gran Canariara (ekainaren 11ko ekitaldia Gran Canariako Estadioan) eta Tenerifera (ekainaren 12ko itxiera-meza Santa Cruz Portuan) iristeko bi aukera daude: abioia Madril-Barajastik (LPA 2h 30m · TFN 2h 35m, eguneko hainbat maiztasun) edo ferrya Cádiz / Huelvatik Naviera Armas edo Trasmediterránearekin (38-48h-ko zeharkaldia, ideala kotxea eramateko).',
    comparisonTitle: 'Trainline vs Renfe: zein erabili?',
    comparisonIntro: 'Biek Renferen AVE txartelak saltzen dituzte. Aldea interfazean, hizkuntzan, monetan eta nazioarteko ibilbideetan dago.',
    comparisonRows: [
      { label: 'Hizkuntza', trainline: '14 hizkuntza (EU, ES, EN, IT, FR, DE…)', renfe: 'Gaztelania + oinarrizko ingelesa' },
      { label: 'Moneta', trainline: 'EUR, GBP, USD, CHF…', renfe: 'EUR bakarrik' },
      { label: 'AVE Madril-Bartzelona', trainline: '✅ Bai, prezio berberak', renfe: '✅ Bai, ofiziala' },
      { label: 'Paris-Madril konexioa', trainline: '✅ Konbinatua SNCF+Renfe', renfe: '❌ Ez' },
      { label: 'Italia konexioa (Trenitalia)', trainline: '✅ Bai', renfe: '❌ Ez' },
      { label: 'Hiri anitzeko bilaketa', trainline: '✅ Bai', renfe: 'Mugatua' },
      { label: 'Onena', trainline: 'Atzerriko erromesentzat', renfe: 'Renfe Más kontua duten espainiarrentzat' },
    ],
    faqTitle: 'Maiz egiten diren galderak',
    faq: [
      { q: 'Noiz irekitzen da 2026ko ekainaren 6-12ko AVEen salmenta?', a: 'Renferen AVE txartelak 60-90 egun lehenago hasten dira saltzen. Aita Santuaren bisitarako salmenta 2026ko martxotik dago zabalik. Lehenago erreserbatu, prezio hobea (Promo eta Promo+ tarifak lehenago agortzen dira).' },
      { q: 'Ekainaren 9an Madril-Bartzelona AVE zuzenik dago?', a: 'Bai. Madril-Bartzelona AVEk 30 minuturo egiten du lan, 06:00-etatik 21:30-era arte. Aita Santua ekainaren 9an Bartzelonara doa 11:30-12:25-ean (abioiz, ez trenez). Ibilbidea jarraitzen duten erromesentzat, goizeko AVEa gomendatzen dugu Lluís Companys-en bijiliara (20:00) garaiz iristeko.' },
      { q: 'Vatikanoaren bandera trenean eraman dezaket?', a: 'Bai. Renfe-k eta Trainline-k bandera tolestuak onartzen dituzte esku-ekipajean murrizketarik gabe. Mastar zurruna > 1m duten banderak gehigarri gisa fakturatu behar dira (~5 €). Oihal bigunezko 90×90 cm-ko banderak tolestuta sartzen dira motxilan.' },
      { q: 'Trainline-k atzerriko erromesentzat funtzionatzen al du?', a: 'Bai, atzerritarrentzat aukerarik onena da. Trainline-k 14 hizkuntza ditu, tokiko monetan kobratzen du, nazioarteko konexioak bilatzen ditu (Paris-Bartzelona, Milan-Madril Paristik aldatuta, Lisboa-Madril aldatuta) eta Renfe ofiziala estaltzen du. Renfe Más kontua duten espainiarrentzat, Renfe.com errazagoa izan daiteke.' },
      { q: 'Erromesentzako deskonturik al dago?', a: 'Ez dago Renferen «erromes» tarifa ofizialik. Aukerarik onenak hauek dira: 1) 21+ egun aurretik erosi (Promo eta Promo+), 2) Renfe Gazte Txartela (14-25 urte, % 25-30 deskontua), 3) Familia Ugaria (% 20-50), 4) +60 (% 40).' },
      { q: 'Nola iritsi Kanarietara trenik ez badago?', a: 'Abioiz Madril-Barajastik: Iberia, Air Europa, Ryanair eta Vueling-ek egunero egiten dute lan. Hegaldi-denbora Madril → Gran Canaria 2h 30m, Madril → Tenerife Iparra 2h 35m. Ferryz: Naviera Armas eta Trasmediterránea-k Cádiz eta Huelvatik egiten dute lan (38-48h, kotxea eramateko ideala).' },
    ],
    relatedTitle: 'Erlazionatutako orriak',
    related: [
      { href: '/como-llegar', text: 'Nola iritsi (aukera guztiak: abioia, trena, autobusa)' },
      { href: '/programa', text: 'Bidaia apostolikoaren programa osoa' },
      { href: '/ciudades/madrid', text: 'Madril · bidaiaren hiria' },
      { href: '/ciudades/barcelona', text: 'Bartzelona · bidaiaren hiria' },
      { href: '/como-asistir', text: 'Aita Santuaren ekitaldietara nola joan' },
      { href: '/bandera-vaticano', text: 'Vatikanoaren bandera ekitaldietarako' },
    ],
  },
}

export default function ComoLlegarEnTrenPage({ locale }: Props) {
  const t = L[locale]
  const breadcrumbs = [
    { name: t.breadcrumbHome, href: localizePath('/', locale) },
    { name: t.breadcrumbCurrent, href: '#' },
  ]
  const homeUrl = buildTrainlineHomeUrl(locale)

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AffiliateLink
              href={homeUrl}
              provider="trainline"
              category="flight"
              placement="cta"
              className="inline-block rounded-lg bg-papal-gold px-5 py-3 font-semibold text-papal-navy transition-colors hover:bg-papal-gold/90"
            >
              {t.ctaTrainline} →
            </AffiliateLink>
            <AffiliateLink
              href="https://www.renfe.com/es/es"
              provider="renfe"
              category="flight"
              placement="cta"
              className="inline-block rounded-lg border border-white/30 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              {t.ctaRenfe}
            </AffiliateLink>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <VaticanFlagBanner locale={locale} className="mb-8" />

        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <div className="not-prose my-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {t.quickFacts.map((f, i) => (
              <div key={i} className="rounded-lg border border-papal-navy/10 bg-papal-cream/40 px-4 py-2">
                <p className="text-xs uppercase tracking-wide text-papal-gold-dark">{f.label}</p>
                <p className="text-sm font-medium text-papal-navy">{f.value}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.whyTitle}</h2>
          {t.whyBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.routesTitle}</h2>
          <p>{t.routesIntro}</p>
          <p className="text-sm italic text-papal-navy/60">{t.routesNote}</p>
          <div className="not-prose mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-papal-navy/20">
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-navy/70">Ruta</th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-navy/70">Duración</th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-navy/70">Precio</th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-navy/70">Frecuencia</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {t.routes.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-papal-cream/40' : 'bg-white'}>
                    <td className="px-3 py-2 font-medium text-papal-navy capitalize">{r.from} → {r.to}</td>
                    <td className="px-3 py-2 text-papal-navy/80">{r.duration}</td>
                    <td className="px-3 py-2 text-papal-navy/80">{r.price}</td>
                    <td className="px-3 py-2 text-papal-navy/80">{r.freq}</td>
                    <td className="px-3 py-2 text-right">
                      <AffiliateLink
                        href={buildTrainlineJourneyUrl({ from: r.from, to: r.to, locale })}
                        provider="trainline"
                        category="flight"
                        placement="inline"
                        productId={`${r.from}-${r.to}`}
                        className="text-xs font-semibold text-papal-gold-dark underline hover:text-papal-gold"
                      >
                        {t.routeCta}
                      </AffiliateLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.stationsTitle}</h2>
          <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
            {[t.madridStation, t.barcelonaStation].map((s, i) => (
              <div key={i} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <h3 className="font-heading text-base font-bold text-papal-navy">{s.name}</h3>
                <p className="mt-1 text-xs text-papal-navy/60">{s.address}</p>
                <p className="mt-2 text-sm text-papal-navy/80">{s.metro}</p>
                <p className="mt-2 rounded bg-papal-gold/10 px-3 py-2 text-xs text-papal-navy">💡 {s.tip}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.canariasTitle}</h2>
          <p>{t.canariasBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.comparisonTitle}</h2>
          <p>{t.comparisonIntro}</p>
          <div className="not-prose mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-papal-navy/20">
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-navy/70">Criterio</th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-gold-dark">Trainline</th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-papal-navy/70">Renfe</th>
                </tr>
              </thead>
              <tbody>
                {t.comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-papal-cream/40' : 'bg-white'}>
                    <td className="px-3 py-2 font-medium text-papal-navy">{row.label}</td>
                    <td className="px-3 py-2 text-papal-navy/80">{row.trainline}</td>
                    <td className="px-3 py-2 text-papal-navy/80">{row.renfe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
