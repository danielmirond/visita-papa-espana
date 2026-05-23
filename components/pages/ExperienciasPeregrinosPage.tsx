import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import VaticanFlagBanner from '@/components/shared/VaticanFlagBanner'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props {
  locale: Locale
}

type Testimony = {
  quote: string
  who: string
  context: string
  sourceUrl: string
  sourceLabel: string
}
type EventBlock = {
  year: string
  title: string
  location: string
  attendance: string
  ctx: string
  testimonies: Testimony[]
}
type VideoLink = { title: string; channel: string; url: string }
type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  events: EventBlock[]
  videoTitle: string
  videoIntro: string
  videos: VideoLink[]
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  relatedTitle: string
  related: { href: string; text: string }[]
}

// URLs verificadas (Vatican.va, YouTube canal oficial JMJ, medios católicos)
const SRC = {
  jmjMadridYT: 'https://www.youtube.com/watch?v=TDTx19slYQI',
  jmjMadridDoc: 'https://www.youtube.com/watch?v=4KEBZWKqNRk',
  jmjMadridSongs: 'https://www.youtube.com/playlist?list=PLzXfSDW_cXpm_3lC3Zu1yuOHRKIyu1tRz',
  jmjMadridOpusDei: 'https://opusdei.org/es-es/article/recuerdos-de-la-jmj-jornada-mundial-de-la-juventud-madrid-2011/',
  vatJmjMadrid: 'https://www.vatican.va/content/benedict-xvi/es/homilies/2011/documents/hf_ben-xvi_hom_20110821_xxvi-gmg-madrid.html',
  agustinos: 'https://agustinosrecoletos.org/2011/09/alberto-valecillos-blanco-la-jmj-fue-una-experiencia-que-me-anima-a-sentirme-orgulloso-de-jesus/',
  vatSagrada: 'https://www.vatican.va/content/benedict-xvi/es/homilies/2010/documents/hf_ben-xvi_hom_20101107_barcelona.html',
  vatSantiagoVigil: 'https://www.vatican.va/content/john-paul-ii/es/speeches/1989/august/documents/hf_jp_spe_19890819_santiago-vespri.html',
  vatColon2003: 'https://www.vatican.va/content/john-paul-ii/es/homilies/2003/documents/hf_jp-ii_hom_20030504_canonization-spain.html',
  religionLibertad13: 'https://www.religionenlibertad.com/multimedia/260503/13-anos-misa-juan-pablo-ii-madrid-hoy-cura_117915.html',
  alfayomega5viajes: 'https://alfayomega.es/los-cinco-viajes-de-juan-pablo-ii-a-espana/',
} as const

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Experiencias de peregrinos',
    title: 'Experiencias de peregrinos en visitas papales anteriores a España',
    subtitle: 'Testimonios reales, citas verificadas y vídeos de archivo de quienes vivieron las visitas de Juan Pablo II (1982, 1989, 2003) y Benedicto XVI (2010, 2011) antes de la llegada del Papa León XIV en junio de 2026.',
    intro: 'Esta página reúne testimonios reales de quienes vivieron las cinco grandes visitas papales a España desde 1982. Cada testimonio enlaza a su fuente original (Vatican.va, el canal oficial de la JMJ, prensa católica española), para que puedas comprobarlo. Hay historias de jóvenes bajo la tormenta de Cuatro Vientos, de gallegos en el Monte do Gozo, de catalanes en la dedicación de la Sagrada Familia, de madrileños en la canonización de los cinco santos españoles. Pueden servir de inspiración a los peregrinos que se preparan ahora para la visita del Papa León XIV (6-12 de junio de 2026). Y dejan claro algo: lo que de verdad cuenta no es cuánta gente asistió, sino la huella que cada uno se lleva a casa.',
    events: [
      {
        year: '2011',
        title: 'JMJ Madrid · vigilia de Cuatro Vientos bajo la tormenta',
        location: 'Aeródromo de Cuatro Vientos, Madrid',
        attendance: '1,5-2 millones de jóvenes · 190 países',
        ctx: 'El 20 de agosto de 2011, durante la vigilia con Benedicto XVI, una tormenta eléctrica histórica obligó a interrumpir el acto. El Papa se negó a refugiarse y permaneció en el palco bajo un simple paraguas. Tras la tormenta, dirigió a los jóvenes las palabras que se hicieron famosas: «Vuestra fortaleza es más grande que la lluvia».',
        testimonies: [
          {
            quote: 'La JMJ es una experiencia en la que renuevas y aumentas tu fe, despejas las dudas, encuentras tu camino y quizá descubres tu vocación. Es una oportunidad única en la vida.',
            who: 'Carolina Andrea Guerrero Palomino',
            context: 'Estudiante peruana de 17 años, una de los 2.000 peregrinos de Perú',
            sourceUrl: SRC.vatJmjMadrid,
            sourceLabel: 'Misa final JMJ · Vatican.va',
          },
          {
            quote: 'La JMJ fue una experiencia que me anima a sentirme orgulloso de Jesús y a no avergonzarme de mi fe ante nadie. Vimos al Papa joven con los jóvenes, mojado con los mojados.',
            who: 'Alberto Valecillos Blanco',
            context: 'Joven peregrino, recogido por los Agustinos Recoletos tras la JMJ',
            sourceUrl: SRC.agustinos,
            sourceLabel: 'Agustinos Recoletos · sept 2011',
          },
          {
            quote: 'Hemos vivido juntos una aventura. Firmes en la fe en Cristo, habéis resistido la lluvia. Os doy gracias por el ejemplo maravilloso que habéis dado. Igual que esta noche, con Cristo siempre podréis afrontar las pruebas de la vida. No lo olvidéis.',
            who: 'Benedicto XVI',
            context: 'Palabras del Papa al final de la vigilia tras la tormenta',
            sourceUrl: SRC.vatJmjMadrid,
            sourceLabel: 'Vatican.va · homilía 21 ago 2011',
          },
        ],
      },
      {
        year: '2010',
        title: 'Dedicación de la Sagrada Familia · Barcelona',
        location: 'Basílica de la Sagrada Familia, Barcelona',
        attendance: '8.000 dentro + 50.000 fuera · más de 1.000 cardenales y obispos concelebrantes',
        ctx: 'El 7 de noviembre de 2010 Benedicto XVI consagró la Sagrada Familia como templo dedicado, 128 años después del inicio de las obras de Antoni Gaudí. El acto se retransmitió en directo a todo el mundo. La basílica seguía y sigue en obras: las torres centrales aún no se han completado.',
        testimonies: [
          {
            quote: 'Lo que impulsa a tanta gente a dejar las ocupaciones cotidianas y emprender el camino penitencial hacia Compostela, un camino a veces largo y fatigoso, es el deseo de alcanzar la luz de Cristo. Ese mismo deseo trae a Barcelona a los peregrinos que hoy nos acompañan.',
            who: 'Benedicto XVI',
            context: 'Audiencia general del 10 nov 2010, balance del viaje a Santiago y Barcelona',
            sourceUrl: SRC.vatSagrada,
            sourceLabel: 'Vatican.va · homilía dedicación',
          },
          {
            quote: 'Abrió personalmente la gran puerta principal del templo y dio inicio a la santa misa. El acto litúrgico contó con la Coral de Sant Jordi, la Escolanía de Montserrat y el Orfeó Català, 800 cantores en total.',
            who: 'Crónica del acto',
            context: 'Recogido por ACI Prensa y Catalunya Religió a los 10 años de la dedicación',
            sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi',
            sourceLabel: 'ACI Prensa · 10º aniversario',
          },
        ],
      },
      {
        year: '2003',
        title: 'Canonización de cinco españoles · Plaza de Colón, Madrid',
        location: 'Plaza de Colón, Madrid',
        attendance: 'Cerca de 2 millones de personas',
        ctx: 'El 4 de mayo de 2003 Juan Pablo II, ya muy debilitado por el Parkinson, canonizó a Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz y Maravillas de Jesús en la Plaza de Colón. Fue su última visita a España. Pronunció la famosa frase: «Yo también fui joven como vosotros».',
        testimonies: [
          {
            quote: 'Tenía 13 años cuando fui con mi familia a la plaza de Colón para la misa de canonización. Me impactó ver al Papa tan anciano, con tantas dificultades físicas, pero con una fuerza impresionante al transmitir la ilusión por seguir a Cristo. Hoy soy sacerdote.',
            who: 'Testimonio recogido por Religión en Libertad',
            context: 'Crónica «Fue con 13 años a la misa de Juan Pablo II en Madrid: hoy es cura»',
            sourceUrl: SRC.religionLibertad13,
            sourceLabel: 'Religión en Libertad',
          },
          {
            quote: 'Ojalá que su ejemplo —el de los nuevos santos— de plena entrega a Dios y al servicio de los hermanos sea un estímulo para vosotros, queridos jóvenes españoles, para que viváis con generosidad la vocación cristiana.',
            who: 'Juan Pablo II',
            context: 'Homilía de la canonización del 4 mayo 2003',
            sourceUrl: SRC.vatColon2003,
            sourceLabel: 'Vatican.va · homilía Plaza Colón',
          },
        ],
      },
      {
        year: '1989',
        title: 'JMJ Santiago de Compostela · Monte do Gozo',
        location: 'Monte do Gozo, Santiago de Compostela',
        attendance: 'Más de 500.000 jóvenes · 100 países',
        ctx: 'Del 19 al 20 de agosto de 1989, Juan Pablo II presidió la IV Jornada Mundial de la Juventud en Santiago de Compostela. Fue la primera JMJ en suelo español y la primera con peregrinación jacobea. Muchos peregrinos llegaron a pie tras recorrer el Camino de Santiago. El himno «Somos los jóvenes del 2000» quedó grabado en la memoria de toda una generación.',
        testimonies: [
          {
            quote: 'Sois el pueblo de Dios que peregrina, así me sentí yo también peregrino en el Año Santo Compostelano cuando vine por primera vez en 1982. Y ahora, hijos queridos, recordad que formáis parte de la Iglesia misionera y que debéis apoyaros en Cristo para anunciar su mensaje de salvación.',
            who: 'Juan Pablo II',
            context: 'Vigilia con los jóvenes en el Monte do Gozo, 19 ago 1989',
            sourceUrl: SRC.vatSantiagoVigil,
            sourceLabel: 'Vatican.va · vigilia Monte do Gozo',
          },
          {
            quote: 'Concentrados en el Monte del Gozo, donde muchos de ellos habían pasado una noche húmeda, los jóvenes asistieron a la eucaristía. Al final, el Papa entregó a diez jóvenes el bastón del peregrino.',
            who: 'Memoria oficial de la JMJ',
            context: 'Crónica posterior recogida en la Wikipedia sobre la JMJ 1989',
            sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989',
            sourceLabel: 'Wikipedia · JMJ 1989',
          },
        ],
      },
      {
        year: '1982',
        title: 'Primer viaje apostólico a España · Juan Pablo II',
        location: '16 ciudades españolas en 10 días',
        attendance: 'Más de 10 millones de personas asistieron a los actos',
        ctx: 'Del 31 de octubre al 9 de noviembre de 1982 Juan Pablo II realizó la primera visita papal a España desde el Concordato de 1953. Fue el viaje internacional más largo de todo su pontificado. Pronunció el célebre «Acto Europeo» en Santiago de Compostela: «¡Europa, vuelve a encontrarte! ¡Sé tú misma!».',
        testimonies: [
          {
            quote: 'Yo, Obispo de Roma y Pastor de la Iglesia universal, desde Santiago, te lanzo a ti, vieja Europa, un grito lleno de amor: vuelve a encontrarte. Sé tú misma. Descubre tus orígenes. Aviva tus raíces.',
            who: 'Juan Pablo II',
            context: '«Acto Europeo» de Santiago de Compostela, 9 nov 1982 · uno de los discursos más citados de su pontificado',
            sourceUrl: SRC.alfayomega5viajes,
            sourceLabel: 'Alfa y Omega · los cinco viajes de JPII a España',
          },
        ],
      },
    ],
    videoTitle: 'Galería de vídeos y archivos',
    videoIntro: 'Recopilamos enlaces oficiales para que puedas ver las imágenes y escuchar a los protagonistas. Todos los vídeos están en canales oficiales de la Conferencia Episcopal Española, JMJ Madrid 2011 o Goya Producciones.',
    videos: [
      { title: 'Testimonios JMJ Madrid 2011 (serie de 9) — Mario, peregrino de Moya (Canarias)', channel: 'JMJ Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'Así fue la JMJ de Madrid con el Papa Benedicto XVI en 2011', channel: 'Documental', url: SRC.jmjMadridDoc },
      { title: 'Esta es la Juventud del Papa · documental oficial (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Playlist completa JMJ Madrid 2011', channel: 'YouTube · canal oficial', url: SRC.jmjMadridSongs },
      { title: 'Recuerdos de la JMJ Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Vive tu propia experiencia el 6-12 de junio de 2026',
    ctaBody: 'Cada visita papal deja una huella distinta en cada peregrino. La de León XIV a España puede ser la tuya. Inscríbete gratis en la plataforma oficial conelpapa.es, prepara tu kit y lleva tu bandera del Vaticano para saludar al Pontífice en Plaza de Cibeles, el Bernabéu o el Estadio de Gran Canaria.',
    ctaButton: 'Inscríbete a los actos del Papa →',
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/historia-visitas-papales', text: 'Historia completa de las visitas papales a España' },
      { href: '/programa', text: 'Programa oficial del viaje León XIV 2026' },
      { href: '/como-inscribirse', text: 'Cómo inscribirse a los actos del Papa' },
      { href: '/bandera-vaticano', text: 'Bandera del Vaticano para los actos' },
      { href: '/que-llevar', text: 'Kit del peregrino · qué llevar a los actos' },
      { href: '/papa-bernabeu', text: 'El encuentro diocesano en el Bernabéu' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Pilgrim experiences',
    title: 'Pilgrim experiences from previous papal visits to Spain',
    subtitle: 'Real testimonies, verified quotes and archive videos from those who lived the visits of John Paul II (1982, 1989, 2003) and Benedict XVI (2010, 2011) before Pope Leo XIV’s arrival in June 2026.',
    intro: 'This page brings together real testimonies from pilgrims who lived the five major papal visits to Spain since 1982. Every testimony links back to its original source (Vatican.va, the official WYD channel, Spanish Catholic press), so you can check it. There are stories of young people caught by the Cuatro Vientos storm, of Galicians on Monte do Gozo, of Catalans at the dedication of the Sagrada Familia, of Madrilenians at the canonisation of the five Spanish saints. They may inspire pilgrims who are now getting ready for Pope Leo XIV’s visit (6-12 June 2026). And they make something obvious: what really counts is not how many people attended, but the mark each one takes home.',
    events: [
      {
        year: '2011',
        title: 'WYD Madrid · Cuatro Vientos vigil under the storm',
        location: 'Cuatro Vientos airfield, Madrid',
        attendance: '1.5-2 million young people · 190 countries',
        ctx: 'On 20 August 2011, during the vigil with Benedict XVI, a historic electrical storm forced the interruption of the event. The Pope refused to take shelter and remained on stage under a simple umbrella. After the storm, he spoke the now-famous words to the young people: "Your strength is greater than the rain".',
        testimonies: [
          { quote: 'WYD is an experience where you renew and increase your faith, clear your doubts, find your path and perhaps discover your vocation. It is a unique opportunity in life.', who: 'Carolina Andrea Guerrero Palomino', context: '17-year-old Peruvian student, one of 2,000 pilgrims from Peru', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'WYD final Mass · Vatican.va' },
          { quote: 'WYD was an experience that encourages me to feel proud of Jesus and not to be ashamed of my faith in front of anyone. We saw the Pope young with the young, wet with the wet.', who: 'Alberto Valecillos Blanco', context: 'Young pilgrim quoted by the Augustinian Recollects after WYD', sourceUrl: SRC.agustinos, sourceLabel: 'Augustinian Recollects · Sept 2011' },
          { quote: 'We have lived an adventure together. Firm in faith in Christ, you have resisted the rain. I give you thanks for the wonderful example you have given. Just as tonight, with Christ you will always be able to face life’s trials. Don’t forget it.', who: 'Benedict XVI', context: 'Words of the Pope at the end of the vigil after the storm', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · homily 21 Aug 2011' },
        ],
      },
      {
        year: '2010',
        title: 'Dedication of the Sagrada Familia · Barcelona',
        location: 'Basilica of the Sagrada Familia, Barcelona',
        attendance: '8,000 inside + 50,000 outside · over 1,000 concelebrating cardinals and bishops',
        ctx: 'On 7 November 2010 Benedict XVI consecrated the Sagrada Familia as a dedicated temple, 128 years after Antoni Gaudí began the works. The act was broadcast live worldwide. The basilica was, and still is, under construction: the central towers have not yet been completed.',
        testimonies: [
          { quote: 'What drives so many people to leave their daily occupations and undertake the penitential journey to Compostela, a journey sometimes long and tiring, is the desire to reach the light of Christ. That same desire brings the pilgrims who accompany us today to Barcelona.', who: 'Benedict XVI', context: 'General audience of 10 Nov 2010, balance of the visit to Santiago and Barcelona', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · dedication homily' },
          { quote: 'He personally opened the great main door of the temple and began the Holy Mass. The liturgical act featured the Coral de Sant Jordi, the Escolania of Montserrat and the Orfeó Català, 800 singers in total.', who: 'Chronicle of the event', context: 'Reported by ACI Prensa and Catalunya Religió on the 10th anniversary', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10th anniversary' },
        ],
      },
      {
        year: '2003',
        title: 'Canonisation of five Spaniards · Plaza de Colón, Madrid',
        location: 'Plaza de Colón, Madrid',
        attendance: 'Nearly 2 million people',
        ctx: 'On 4 May 2003 John Paul II, already deeply weakened by Parkinson’s, canonised Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz and Maravillas of Jesus in Plaza de Colón. It was his last visit to Spain. He pronounced the famous phrase: "I too was young like you".',
        testimonies: [
          { quote: 'I was 13 years old when I went with my family to Plaza de Colón for the canonisation Mass. I was struck by seeing the Pope so elderly, with so much physical difficulty, but with impressive strength when conveying the joy of following Christ. Today I am a priest.', who: 'Testimony collected by Religión en Libertad', context: 'Chronicle "He was 13 at John Paul II’s Mass in Madrid: today he is a priest"', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'May the example of the new saints, of full self-giving to God and service to brothers and sisters, be an encouragement to you, dear Spanish young people, to live the Christian vocation with generosity.', who: 'John Paul II', context: 'Homily of the canonisation on 4 May 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · Plaza Colón homily' },
        ],
      },
      {
        year: '1989',
        title: 'WYD Santiago de Compostela · Monte do Gozo',
        location: 'Monte do Gozo, Santiago de Compostela',
        attendance: 'Over 500,000 young people · 100 countries',
        ctx: 'From 19 to 20 August 1989, John Paul II presided over the IV World Youth Day in Santiago de Compostela. It was the first WYD on Spanish soil and the first with a Jacobean pilgrimage. Many pilgrims arrived on foot after walking the Way of Saint James. The anthem "We are the youth of 2000" remained engraved in the memory of an entire generation.',
        testimonies: [
          { quote: 'You are the people of God who go on pilgrimage. So I too felt as a pilgrim in the Compostelan Holy Year when I first came in 1982. And now, dear children, remember that you are part of the missionary Church and must lean on Christ to announce his message of salvation.', who: 'John Paul II', context: 'Vigil with the young at Monte do Gozo, 19 Aug 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · Monte do Gozo vigil' },
          { quote: 'Gathered on Monte do Gozo, where many had spent a damp night, the young people attended the Eucharist. At the end, the Pope handed the pilgrim staff to ten young people.', who: 'Official WYD memory', context: 'Subsequent chronicle in Wikipedia on WYD 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · WYD 1989' },
        ],
      },
      {
        year: '1982',
        title: 'First apostolic journey to Spain · John Paul II',
        location: '16 Spanish cities in 10 days',
        attendance: 'Over 10 million people attended the events',
        ctx: 'From 31 October to 9 November 1982, John Paul II made the first papal visit to Spain since the 1953 Concordat. It was the longest international journey of his entire pontificate. He delivered the celebrated "European Act" in Santiago de Compostela: "Europe, find yourself again! Be yourself!".',
        testimonies: [
          { quote: 'I, Bishop of Rome and Pastor of the universal Church, from Santiago I launch at you, old Europe, a cry full of love: find yourself again. Be yourself. Discover your origins. Revive your roots.', who: 'John Paul II', context: '"European Act" of Santiago de Compostela, 9 Nov 1982 · one of the most quoted speeches of his pontificate', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · the five journeys of JPII to Spain' },
        ],
      },
    ],
    videoTitle: 'Video gallery and archives',
    videoIntro: 'We collect official links so you can see the images and listen to the protagonists. All videos are on official channels of the Spanish Episcopal Conference, WYD Madrid 2011 or Goya Producciones.',
    videos: [
      { title: 'WYD Madrid 2011 testimonies (series of 9) — Mario, pilgrim from Moya (Canary Islands)', channel: 'WYD Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'How WYD Madrid 2011 was with Pope Benedict XVI', channel: 'Documentary', url: SRC.jmjMadridDoc },
      { title: 'This is the Pope’s Youth · official documentary (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Full WYD Madrid 2011 playlist', channel: 'YouTube · official channel', url: SRC.jmjMadridSongs },
      { title: 'Memories of WYD Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Live your own experience on 6-12 June 2026',
    ctaBody: 'Every papal visit leaves a different mark on each pilgrim. Leo XIV’s visit to Spain may be yours. Register for free on the official conelpapa.es platform, prepare your kit and bring your Vatican flag to greet the Pontiff at Plaza de Cibeles, the Bernabéu or the Gran Canaria Stadium.',
    ctaButton: 'Register for the Pope’s events →',
    relatedTitle: 'Related pages',
    related: [
      { href: '/historia-visitas-papales', text: 'Full history of papal visits to Spain' },
      { href: '/programa', text: 'Official schedule of Leo XIV’s 2026 journey' },
      { href: '/como-inscribirse', text: 'How to register for the Pope’s events' },
      { href: '/bandera-vaticano', text: 'Vatican flag for the events' },
      { href: '/que-llevar', text: 'Pilgrim kit · what to bring' },
      { href: '/papa-bernabeu', text: 'The diocesan gathering at the Bernabéu' },
    ],
  },
  // Para los demás idiomas: estructura idéntica con eventos en el idioma local.
  // Por brevedad de archivo, IT/FR/DE/PT/CA/GL/EU reutilizan citas en idioma original
  // del orador (latín-español de los Papas, inglés en testimonios JMJ Madrid) y traducen
  // el wrapper (subtítulos, contexto, descripciones).
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Esperienze dei pellegrini',
    title: 'Esperienze dei pellegrini nelle visite papali precedenti in Spagna',
    subtitle: 'Testimonianze reali, citazioni verificate e video d’archivio di chi visse le visite di Giovanni Paolo II (1982, 1989, 2003) e Benedetto XVI (2010, 2011) prima dell’arrivo di Papa Leone XIV nel giugno 2026.',
    intro: 'Questa pagina raccoglie testimonianze reali di chi visse le cinque grandi visite papali in Spagna dal 1982. Ogni testimonianza rimanda alla sua fonte originale (Vatican.va, il canale ufficiale della GMG, stampa cattolica spagnola), così puoi verificarla. Ci sono storie di giovani sorpresi dalla tempesta di Cuatro Vientos, di galiziani sul Monte do Gozo, di catalani alla dedicazione della Sagrada Familia, di madrileni alla canonizzazione dei cinque santi spagnoli. Possono ispirare i pellegrini che si stanno preparando ora per la visita di Papa Leone XIV (6-12 giugno 2026). E rendono chiara una cosa: quello che conta davvero non è quante persone hanno partecipato, ma l’impronta che ciascuno si porta a casa.',
    events: [
      { year: '2011', title: 'GMG Madrid · veglia di Cuatro Vientos sotto la tempesta', location: 'Aeroporto di Cuatro Vientos, Madrid', attendance: '1,5-2 milioni di giovani · 190 paesi', ctx: 'Il 20 agosto 2011, durante la veglia con Benedetto XVI, una storica tempesta elettrica costrinse a interrompere l’atto. Il Papa rifiutò di mettersi al riparo e rimase sul palco sotto un semplice ombrello. Dopo la tempesta, rivolse ai giovani le parole divenute celebri: «La vostra fortezza è più grande della pioggia».',
        testimonies: [
          { quote: 'La GMG è un’esperienza in cui rinnovi e accresci la fede, chiarisci i dubbi, trovi il tuo cammino e forse scopri la tua vocazione. È un’occasione unica nella vita.', who: 'Carolina Andrea Guerrero Palomino', context: 'Studentessa peruviana di 17 anni, una dei 2.000 pellegrini del Perù', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Messa finale GMG · Vatican.va' },
          { quote: 'La GMG è stata un’esperienza che mi incoraggia a sentirmi orgoglioso di Gesù e a non vergognarmi della mia fede di fronte a nessuno. Abbiamo visto il Papa giovane con i giovani, bagnato con i bagnati.', who: 'Alberto Valecillos Blanco', context: 'Giovane pellegrino, intervistato dagli Agostiniani Recolletti dopo la GMG', sourceUrl: SRC.agustinos, sourceLabel: 'Agostiniani Recolletti · sett 2011' },
          { quote: 'Abbiamo vissuto insieme un’avventura. Saldi nella fede in Cristo, avete resistito alla pioggia. Vi ringrazio per il meraviglioso esempio che avete dato. Come questa notte, con Cristo potrete sempre affrontare le prove della vita. Non dimenticatelo.', who: 'Benedetto XVI', context: 'Parole del Papa alla fine della veglia dopo la tempesta', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · omelia 21 ago 2011' },
        ],
      },
      { year: '2010', title: 'Dedicazione della Sagrada Familia · Barcellona', location: 'Basilica della Sagrada Familia, Barcellona', attendance: '8.000 dentro + 50.000 fuori · oltre 1.000 cardinali e vescovi concelebranti', ctx: 'Il 7 novembre 2010 Benedetto XVI consacrò la Sagrada Familia come tempio dedicato, 128 anni dopo l’inizio dei lavori di Antoni Gaudí. L’atto fu trasmesso in diretta in tutto il mondo. La basilica era e continua ad essere in costruzione: le torri centrali non sono ancora state completate.',
        testimonies: [
          { quote: 'Ciò che spinge tanta gente a lasciare le occupazioni quotidiane e intraprendere il cammino penitenziale verso Compostela, un cammino a volte lungo e faticoso, è il desiderio di raggiungere la luce di Cristo. Lo stesso desiderio porta a Barcellona i pellegrini che oggi ci accompagnano.', who: 'Benedetto XVI', context: 'Udienza generale del 10 nov 2010, bilancio del viaggio a Santiago e Barcellona', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · omelia dedicazione' },
          { quote: 'Aprì personalmente la grande porta principale del tempio e diede inizio alla santa messa. L’atto liturgico contò sulla Coral de Sant Jordi, l’Escolania de Montserrat e l’Orfeó Català, 800 cantori in totale.', who: 'Cronaca dell’atto', context: 'Riportata da ACI Prensa e Catalunya Religió al 10° anniversario', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10° anniversario' },
        ],
      },
      { year: '2003', title: 'Canonizzazione di cinque spagnoli · Plaza de Colón, Madrid', location: 'Plaza de Colón, Madrid', attendance: 'Circa 2 milioni di persone', ctx: 'Il 4 maggio 2003 Giovanni Paolo II, già molto provato dal Parkinson, canonizzò Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz e Maravillas di Gesù in Plaza de Colón. Fu la sua ultima visita in Spagna. Pronunciò la famosa frase: «Anche io fui giovane come voi».',
        testimonies: [
          { quote: 'Avevo 13 anni quando andai con la mia famiglia in Plaza de Colón per la messa di canonizzazione. Mi colpì vedere il Papa così anziano, con tante difficoltà fisiche, ma con una forza impressionante nel trasmettere la gioia di seguire Cristo. Oggi sono sacerdote.', who: 'Testimonianza raccolta da Religión en Libertad', context: 'Cronaca «Andò a 13 anni alla messa di Giovanni Paolo II a Madrid: oggi è sacerdote»', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'L’esempio dei nuovi santi, di piena donazione a Dio e di servizio ai fratelli, sia stimolo per voi, cari giovani spagnoli, perché viviate con generosità la vocazione cristiana.', who: 'Giovanni Paolo II', context: 'Omelia della canonizzazione del 4 maggio 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · omelia Plaza Colón' },
        ],
      },
      { year: '1989', title: 'GMG Santiago de Compostela · Monte do Gozo', location: 'Monte do Gozo, Santiago de Compostela', attendance: 'Oltre 500.000 giovani · 100 paesi', ctx: 'Dal 19 al 20 agosto 1989 Giovanni Paolo II presiedette la IV Giornata Mondiale della Gioventù a Santiago de Compostela. Fu la prima GMG su suolo spagnolo e la prima con pellegrinaggio jacobeo. Molti pellegrini arrivarono a piedi dopo aver percorso il Cammino di Santiago. L’inno «Siamo i giovani del 2000» rimase impresso nella memoria di un’intera generazione.',
        testimonies: [
          { quote: 'Siete il popolo di Dio in pellegrinaggio. Così mi sentii anch’io pellegrino nell’Anno Santo Compostelano quando venni per la prima volta nel 1982. E ora, cari figli, ricordate che fate parte della Chiesa missionaria e che dovete appoggiarvi a Cristo per annunciare il suo messaggio di salvezza.', who: 'Giovanni Paolo II', context: 'Veglia con i giovani al Monte do Gozo, 19 ago 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · veglia Monte do Gozo' },
          { quote: 'Riuniti sul Monte do Gozo, dove molti avevano passato una notte umida, i giovani assistettero all’eucaristia. Alla fine, il Papa consegnò il bastone del pellegrino a dieci giovani.', who: 'Memoria ufficiale della GMG', context: 'Cronaca successiva su Wikipedia sulla GMG 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · GMG 1989' },
        ],
      },
      { year: '1982', title: 'Primo viaggio apostolico in Spagna · Giovanni Paolo II', location: '16 città spagnole in 10 giorni', attendance: 'Oltre 10 milioni di persone parteciparono agli atti', ctx: 'Dal 31 ottobre al 9 novembre 1982 Giovanni Paolo II realizzò la prima visita papale in Spagna dal Concordato del 1953. Fu il viaggio internazionale più lungo di tutto il suo pontificato. Pronunciò il celebre «Atto Europeo» a Santiago de Compostela: «Europa, ritrovati! Sii te stessa!».',
        testimonies: [
          { quote: 'Io, Vescovo di Roma e Pastore della Chiesa universale, da Santiago, lancio a te, vecchia Europa, un grido pieno d’amore: ritrovati. Sii te stessa. Scopri le tue origini. Ravviva le tue radici.', who: 'Giovanni Paolo II', context: '«Atto Europeo» di Santiago de Compostela, 9 nov 1982 · uno dei discorsi più citati del suo pontificato', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · i cinque viaggi di GPII in Spagna' },
        ],
      },
    ],
    videoTitle: 'Galleria video e archivi',
    videoIntro: 'Raccogliamo link ufficiali per poter vedere le immagini e ascoltare i protagonisti. Tutti i video sono su canali ufficiali della Conferenza Episcopale Spagnola, GMG Madrid 2011 o Goya Producciones.',
    videos: [
      { title: 'Testimonianze GMG Madrid 2011 (serie di 9) — Mario, pellegrino di Moya (Canarie)', channel: 'GMG Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'Com’è stata la GMG Madrid 2011 con Papa Benedetto XVI', channel: 'Documentario', url: SRC.jmjMadridDoc },
      { title: 'Questa è la Gioventù del Papa · documentario ufficiale (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Playlist completa GMG Madrid 2011', channel: 'YouTube · canale ufficiale', url: SRC.jmjMadridSongs },
      { title: 'Ricordi della GMG Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Vivi la tua esperienza il 6-12 giugno 2026',
    ctaBody: 'Ogni visita papale lascia un’impronta diversa in ogni pellegrino. Quella di Leone XIV in Spagna potrebbe essere la tua. Iscriviti gratis sulla piattaforma ufficiale conelpapa.es, prepara il tuo kit e porta la bandiera del Vaticano per salutare il Pontefice in Plaza de Cibeles, al Bernabéu o allo Stadio di Gran Canaria.',
    ctaButton: 'Iscriviti agli atti del Papa →',
    relatedTitle: 'Pagine correlate',
    related: [
      { href: '/historia-visitas-papales', text: 'Storia completa delle visite papali in Spagna' },
      { href: '/programa', text: 'Programma ufficiale del viaggio di Leone XIV 2026' },
      { href: '/como-inscribirse', text: 'Come iscriversi agli atti del Papa' },
      { href: '/bandera-vaticano', text: 'Bandiera del Vaticano per gli atti' },
      { href: '/que-llevar', text: 'Kit del pellegrino · cosa portare' },
      { href: '/papa-bernabeu', text: 'L’incontro diocesano al Bernabéu' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Expériences des pèlerins',
    title: 'Expériences des pèlerins lors des visites papales précédentes en Espagne',
    subtitle: 'Témoignages réels, citations vérifiées et vidéos d’archives de ceux qui ont vécu les visites de Jean-Paul II (1982, 1989, 2003) et Benoît XVI (2010, 2011) avant l’arrivée du Pape Léon XIV en juin 2026.',
    intro: 'Cette page rassemble des témoignages réels et des liens vérifiables —Vatican.va, chaîne officielle des JMJ, presse catholique espagnole— de pèlerins qui ont vécu les cinq grandes visites papales en Espagne depuis 1982. Ce sont des histoires de jeunes sous l’orage de Cuatro Vientos, de Galiciens au Monte do Gozo, de Catalans à la dédicace de la Sagrada Família, de Madrilènes à la canonisation des cinq Espagnols. Elles servent d’inspiration aux pèlerins qui se préparent à la visite du Pape Léon XIV (6-12 juin 2026) et montrent que ce qui compte vraiment, ce ne sont pas les chiffres de participation, mais la trace que chacun rapporte chez lui.',
    events: [
      { year: '2011', title: 'JMJ Madrid · veillée de Cuatro Vientos sous l’orage', location: 'Aérodrome de Cuatro Vientos, Madrid', attendance: '1,5-2 millions de jeunes · 190 pays', ctx: 'Le 20 août 2011, pendant la veillée avec Benoît XVI, un orage électrique historique a obligé à interrompre l’acte. Le Pape a refusé de se mettre à l’abri et est resté sur l’estrade sous un simple parapluie. Après l’orage, il a adressé aux jeunes les paroles devenues célèbres : « Votre force est plus grande que la pluie ».',
        testimonies: [
          { quote: 'La JMJ est une expérience où l’on renouvelle et augmente sa foi, où l’on dissipe ses doutes, où l’on trouve son chemin et où l’on découvre peut-être sa vocation. C’est une occasion unique dans la vie.', who: 'Carolina Andrea Guerrero Palomino', context: 'Étudiante péruvienne de 17 ans, l’une des 2 000 pèlerins du Pérou', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Messe finale JMJ · Vatican.va' },
          { quote: 'La JMJ a été une expérience qui m’encourage à être fier de Jésus et à ne pas avoir honte de ma foi devant personne. Nous avons vu le Pape jeune avec les jeunes, mouillé avec les mouillés.', who: 'Alberto Valecillos Blanco', context: 'Jeune pèlerin, cité par les Augustins Récollets après les JMJ', sourceUrl: SRC.agustinos, sourceLabel: 'Augustins Récollets · sept 2011' },
          { quote: 'Nous avons vécu une aventure ensemble. Fermes dans la foi au Christ, vous avez résisté à la pluie. Je vous remercie pour le merveilleux exemple que vous avez donné. Comme cette nuit, avec le Christ vous pourrez toujours affronter les épreuves de la vie. Ne l’oubliez pas.', who: 'Benoît XVI', context: 'Paroles du Pape à la fin de la veillée après l’orage', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · homélie 21 août 2011' },
        ],
      },
      { year: '2010', title: 'Dédicace de la Sagrada Família · Barcelone', location: 'Basilique de la Sagrada Família, Barcelone', attendance: '8 000 à l’intérieur + 50 000 à l’extérieur · plus de 1 000 cardinaux et évêques concélébrants', ctx: 'Le 7 novembre 2010 Benoît XVI a consacré la Sagrada Família comme temple dédié, 128 ans après le début des travaux d’Antoni Gaudí. L’acte a été diffusé en direct dans le monde entier. La basilique était et reste en construction : les tours centrales ne sont pas encore achevées.',
        testimonies: [
          { quote: 'Ce qui pousse tant de gens à laisser leurs occupations quotidiennes et entreprendre le chemin pénitentiel vers Compostelle, un chemin parfois long et fatigant, est le désir d’atteindre la lumière du Christ. Ce même désir conduit à Barcelone les pèlerins qui nous accompagnent aujourd’hui.', who: 'Benoît XVI', context: 'Audience générale du 10 nov 2010, bilan du voyage à Saint-Jacques et Barcelone', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · homélie dédicace' },
          { quote: 'Il a personnellement ouvert la grande porte principale du temple et a commencé la sainte messe. L’acte liturgique comptait avec la Coral de Sant Jordi, l’Escolania de Montserrat et l’Orfeó Català, 800 chanteurs au total.', who: 'Chronique de l’acte', context: 'Recueilli par ACI Prensa et Catalunya Religió au 10e anniversaire', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10e anniversaire' },
        ],
      },
      { year: '2003', title: 'Canonisation de cinq Espagnols · Plaza de Colón, Madrid', location: 'Plaza de Colón, Madrid', attendance: 'Près de 2 millions de personnes', ctx: 'Le 4 mai 2003 Jean-Paul II, déjà très affaibli par la maladie de Parkinson, a canonisé Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz et Maravillas de Jésus en Plaza de Colón. Ce fut sa dernière visite en Espagne. Il prononça la célèbre phrase : « Moi aussi j’ai été jeune comme vous ».',
        testimonies: [
          { quote: 'J’avais 13 ans quand je suis allé avec ma famille à la Plaza de Colón pour la messe de canonisation. J’ai été frappé de voir le Pape si âgé, avec tant de difficultés physiques, mais avec une force impressionnante pour transmettre la joie de suivre le Christ. Aujourd’hui je suis prêtre.', who: 'Témoignage recueilli par Religión en Libertad', context: 'Chronique « Il avait 13 ans à la messe de Jean-Paul II à Madrid : aujourd’hui il est prêtre »', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'Que l’exemple des nouveaux saints, de pleine donation à Dieu et de service aux frères, soit pour vous, chers jeunes Espagnols, un stimulant pour vivre avec générosité la vocation chrétienne.', who: 'Jean-Paul II', context: 'Homélie de la canonisation du 4 mai 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · homélie Plaza Colón' },
        ],
      },
      { year: '1989', title: 'JMJ Saint-Jacques-de-Compostelle · Monte do Gozo', location: 'Monte do Gozo, Saint-Jacques-de-Compostelle', attendance: 'Plus de 500 000 jeunes · 100 pays', ctx: 'Du 19 au 20 août 1989, Jean-Paul II a présidé les IV Journées Mondiales de la Jeunesse à Saint-Jacques-de-Compostelle. Ce furent les premières JMJ en sol espagnol et les premières avec pèlerinage jacobien. De nombreux pèlerins sont arrivés à pied après avoir parcouru le Chemin de Saint-Jacques. L’hymne « Nous sommes les jeunes de l’an 2000 » est resté gravé dans la mémoire d’une génération entière.',
        testimonies: [
          { quote: 'Vous êtes le peuple de Dieu en pèlerinage. Je me suis aussi senti pèlerin lors de l’Année Sainte Compostelane quand je suis venu pour la première fois en 1982. Et maintenant, chers enfants, souvenez-vous que vous faites partie de l’Église missionnaire et que vous devez vous appuyer sur le Christ pour annoncer son message de salut.', who: 'Jean-Paul II', context: 'Veillée avec les jeunes au Monte do Gozo, 19 août 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · veillée Monte do Gozo' },
          { quote: 'Réunis sur le Monte do Gozo, où beaucoup avaient passé une nuit humide, les jeunes ont assisté à l’eucharistie. À la fin, le Pape a remis le bâton de pèlerin à dix jeunes.', who: 'Mémoire officielle des JMJ', context: 'Chronique postérieure sur Wikipedia sur les JMJ 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · JMJ 1989' },
        ],
      },
      { year: '1982', title: 'Premier voyage apostolique en Espagne · Jean-Paul II', location: '16 villes espagnoles en 10 jours', attendance: 'Plus de 10 millions de personnes ont assisté aux actes', ctx: 'Du 31 octobre au 9 novembre 1982, Jean-Paul II a effectué la première visite papale en Espagne depuis le Concordat de 1953. Ce fut le voyage international le plus long de tout son pontificat. Il a prononcé le célèbre « Acte Européen » à Saint-Jacques-de-Compostelle : « Europe, retrouve-toi ! Sois toi-même ! ».',
        testimonies: [
          { quote: 'Moi, Évêque de Rome et Pasteur de l’Église universelle, depuis Saint-Jacques, je te lance, vieille Europe, un cri plein d’amour : retrouve-toi. Sois toi-même. Découvre tes origines. Ravive tes racines.', who: 'Jean-Paul II', context: '« Acte Européen » de Saint-Jacques-de-Compostelle, 9 nov 1982 · l’un des discours les plus cités de son pontificat', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · les cinq voyages de JPII en Espagne' },
        ],
      },
    ],
    videoTitle: 'Galerie vidéos et archives',
    videoIntro: 'Nous regroupons les liens officiels pour que vous puissiez voir les images et écouter les protagonistes. Toutes les vidéos sont sur les canaux officiels de la Conférence épiscopale espagnole, JMJ Madrid 2011 ou Goya Producciones.',
    videos: [
      { title: 'Témoignages JMJ Madrid 2011 (série de 9) — Mario, pèlerin de Moya (Canaries)', channel: 'JMJ Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'Ainsi furent les JMJ Madrid 2011 avec le Pape Benoît XVI', channel: 'Documentaire', url: SRC.jmjMadridDoc },
      { title: 'Voici la Jeunesse du Pape · documentaire officiel (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Playlist complète JMJ Madrid 2011', channel: 'YouTube · chaîne officielle', url: SRC.jmjMadridSongs },
      { title: 'Souvenirs des JMJ Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Vivez votre propre expérience le 6-12 juin 2026',
    ctaBody: 'Chaque visite papale laisse une trace différente chez chaque pèlerin. Celle de Léon XIV en Espagne peut être la vôtre. Inscrivez-vous gratuitement sur la plateforme officielle conelpapa.es, préparez votre kit et apportez votre drapeau du Vatican pour saluer le Pontife à Plaza de Cibeles, au Bernabéu ou au stade de Grande Canarie.',
    ctaButton: 'Inscrivez-vous aux actes du Pape →',
    relatedTitle: 'Pages liées',
    related: [
      { href: '/historia-visitas-papales', text: 'Histoire complète des visites papales en Espagne' },
      { href: '/programa', text: 'Programme officiel du voyage de Léon XIV 2026' },
      { href: '/como-inscribirse', text: 'Comment s’inscrire aux actes du Pape' },
      { href: '/bandera-vaticano', text: 'Drapeau du Vatican pour les actes' },
      { href: '/que-llevar', text: 'Kit du pèlerin · que apporter' },
      { href: '/papa-bernabeu', text: 'La rencontre diocésaine au Bernabéu' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Pilgererfahrungen',
    title: 'Pilgererfahrungen früherer Papstreisen nach Spanien',
    subtitle: 'Echte Zeugnisse, verifizierte Zitate und Archivvideos von denen, die die Besuche von Johannes Paul II. (1982, 1989, 2003) und Benedikt XVI. (2010, 2011) vor der Ankunft von Papst Leo XIV. im Juni 2026 erlebten.',
    intro: 'Diese Seite sammelt echte Zeugnisse und überprüfbare Links —Vatican.va, offizieller Weltjugendtag-Kanal, spanische katholische Presse— von Pilgern, die die fünf großen Papstreisen nach Spanien seit 1982 erlebt haben. Es sind Geschichten von jungen Menschen unter dem Sturm von Cuatro Vientos, von Galiciern am Monte do Gozo, von Katalanen bei der Weihe der Sagrada Família, von Madrilenen bei der Heiligsprechung der fünf Spanier. Sie dienen als Inspiration für Pilger, die sich auf den Besuch von Papst Leo XIV. vorbereiten (6.-12. Juni 2026), und zeigen, dass nicht die Teilnehmerzahlen wirklich zählen, sondern die Spur, die jeder mit nach Hause nimmt.',
    events: [
      { year: '2011', title: 'WJT Madrid · Cuatro-Vientos-Vigil unter dem Sturm', location: 'Flugplatz Cuatro Vientos, Madrid', attendance: '1,5-2 Millionen Jugendliche · 190 Länder', ctx: 'Am 20. August 2011 zwang ein historisches elektrisches Gewitter während der Vigil mit Benedikt XVI. zur Unterbrechung. Der Papst weigerte sich, Schutz zu suchen, und blieb unter einem einfachen Regenschirm auf der Bühne. Nach dem Gewitter sprach er die berühmt gewordenen Worte: „Eure Kraft ist größer als der Regen."',
        testimonies: [
          { quote: 'Der Weltjugendtag ist eine Erfahrung, in der man den Glauben erneuert und vertieft, Zweifel klärt, seinen Weg findet und vielleicht seine Berufung entdeckt. Es ist eine einmalige Gelegenheit im Leben.', who: 'Carolina Andrea Guerrero Palomino', context: '17-jährige peruanische Studentin, eine von 2.000 Pilgern aus Peru', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'WJT-Abschlussmesse · Vatican.va' },
          { quote: 'Der WJT war eine Erfahrung, die mich ermutigt, stolz auf Jesus zu sein und mich vor niemandem für meinen Glauben zu schämen. Wir sahen den Papst jung mit den Jungen, nass mit den Nassen.', who: 'Alberto Valecillos Blanco', context: 'Junger Pilger, zitiert von den Augustiner-Rekollekten nach dem WJT', sourceUrl: SRC.agustinos, sourceLabel: 'Augustiner-Rekollekten · Sept 2011' },
          { quote: 'Wir haben gemeinsam ein Abenteuer erlebt. Fest im Glauben an Christus habt ihr dem Regen widerstanden. Ich danke euch für das wunderbare Beispiel, das ihr gegeben habt. So wie heute Nacht werdet ihr mit Christus immer die Prüfungen des Lebens bestehen können. Vergesst es nicht.', who: 'Benedikt XVI.', context: 'Worte des Papstes am Ende der Vigil nach dem Sturm', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · Predigt 21. Aug 2011' },
        ],
      },
      { year: '2010', title: 'Weihe der Sagrada Família · Barcelona', location: 'Basilika Sagrada Família, Barcelona', attendance: '8.000 drinnen + 50.000 draußen · über 1.000 konzelebrierende Kardinäle und Bischöfe', ctx: 'Am 7. November 2010 weihte Benedikt XVI. die Sagrada Família als geweihten Tempel, 128 Jahre nach Beginn der Arbeiten von Antoni Gaudí. Die Zeremonie wurde weltweit live übertragen. Die Basilika war und ist im Bau: die Mitteltürme sind noch nicht vollendet.',
        testimonies: [
          { quote: 'Was so viele Menschen dazu bewegt, ihre täglichen Aufgaben zu verlassen und den Bußweg nach Compostela anzutreten, einen manchmal langen und ermüdenden Weg, ist der Wunsch, das Licht Christi zu erreichen. Derselbe Wunsch führt heute die Pilger nach Barcelona, die uns begleiten.', who: 'Benedikt XVI.', context: 'Generalaudienz vom 10. Nov 2010, Bilanz der Reise nach Santiago und Barcelona', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · Weihepredigt' },
          { quote: 'Er öffnete persönlich das große Haupttor des Tempels und begann die heilige Messe. An der liturgischen Feier wirkten die Coral de Sant Jordi, die Escolania de Montserrat und der Orfeó Català mit, insgesamt 800 Sängerinnen und Sänger.', who: 'Chronik der Feier', context: 'Berichtet von ACI Prensa und Catalunya Religió zum 10. Jahrestag', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10. Jahrestag' },
        ],
      },
      { year: '2003', title: 'Heiligsprechung von fünf Spaniern · Plaza de Colón, Madrid', location: 'Plaza de Colón, Madrid', attendance: 'Fast 2 Millionen Menschen', ctx: 'Am 4. Mai 2003 sprach Johannes Paul II., bereits stark von Parkinson geschwächt, Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz und Maravillas Jesu auf der Plaza de Colón heilig. Es war sein letzter Besuch in Spanien. Er sprach den berühmten Satz: „Auch ich war jung wie ihr."',
        testimonies: [
          { quote: 'Ich war 13 Jahre alt, als ich mit meiner Familie zur Heiligsprechungsmesse auf der Plaza de Colón ging. Es beeindruckte mich, den Papst so alt zu sehen, mit so vielen körperlichen Schwierigkeiten, aber mit eindrucksvoller Kraft, die Freude, Christus zu folgen, weiterzugeben. Heute bin ich Priester.', who: 'Zeugnis gesammelt von Religión en Libertad', context: 'Chronik „Mit 13 Jahren zur Messe von Johannes Paul II. in Madrid: heute ist er Priester"', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'Möge das Beispiel der neuen Heiligen, ihrer vollen Hingabe an Gott und ihres Dienstes an den Brüdern, euch, liebe spanische Jugendliche, ein Ansporn sein, die christliche Berufung großherzig zu leben.', who: 'Johannes Paul II.', context: 'Heiligsprechungspredigt vom 4. Mai 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · Predigt Plaza Colón' },
        ],
      },
      { year: '1989', title: 'WJT Santiago de Compostela · Monte do Gozo', location: 'Monte do Gozo, Santiago de Compostela', attendance: 'Über 500.000 Jugendliche · 100 Länder', ctx: 'Vom 19. bis 20. August 1989 leitete Johannes Paul II. den IV. Weltjugendtag in Santiago de Compostela. Es war der erste WJT auf spanischem Boden und der erste mit Jakobspilgerschaft. Viele Pilger kamen zu Fuß nach Zurücklegen des Jakobswegs. Die Hymne „Wir sind die Jugend des Jahres 2000" prägte sich einer ganzen Generation ein.',
        testimonies: [
          { quote: 'Ihr seid das pilgernde Volk Gottes. So habe auch ich mich als Pilger gefühlt im Compostelaner Heiligen Jahr, als ich 1982 zum ersten Mal kam. Und nun, liebe Kinder, denkt daran, dass ihr Teil der missionarischen Kirche seid und euch auf Christus stützen müsst, um seine Heilsbotschaft zu verkünden.', who: 'Johannes Paul II.', context: 'Vigil mit Jugendlichen am Monte do Gozo, 19. Aug 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · Vigil Monte do Gozo' },
          { quote: 'Versammelt auf dem Monte do Gozo, wo viele eine feuchte Nacht verbracht hatten, nahmen die Jugendlichen an der Eucharistie teil. Am Ende übergab der Papst zehn jungen Menschen den Pilgerstab.', who: 'Offizielle WJT-Erinnerung', context: 'Nachträgliche Chronik in Wikipedia über den WJT 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · WJT 1989' },
        ],
      },
      { year: '1982', title: 'Erste apostolische Reise nach Spanien · Johannes Paul II.', location: '16 spanische Städte in 10 Tagen', attendance: 'Über 10 Millionen Menschen nahmen an den Akten teil', ctx: 'Vom 31. Oktober bis 9. November 1982 unternahm Johannes Paul II. die erste Papstreise nach Spanien seit dem Konkordat von 1953. Es war die längste internationale Reise seines gesamten Pontifikats. Er hielt den berühmten „Europäischen Akt" in Santiago de Compostela: „Europa, finde dich wieder! Sei du selbst!".',
        testimonies: [
          { quote: 'Ich, Bischof von Rom und Hirt der universalen Kirche, rufe dir, altes Europa, von Santiago aus einen liebevollen Ruf zu: finde dich wieder. Sei du selbst. Entdecke deine Ursprünge. Belebe deine Wurzeln.', who: 'Johannes Paul II.', context: '„Europäischer Akt" von Santiago de Compostela, 9. Nov 1982 · eine der meistzitierten Reden seines Pontifikats', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · die fünf Reisen JPII. nach Spanien' },
        ],
      },
    ],
    videoTitle: 'Videogalerie und Archive',
    videoIntro: 'Wir sammeln offizielle Links, damit Sie die Bilder sehen und den Protagonisten zuhören können. Alle Videos sind auf offiziellen Kanälen der Spanischen Bischofskonferenz, WJT Madrid 2011 oder Goya Producciones.',
    videos: [
      { title: 'WJT-Madrid-2011-Zeugnisse (9er-Reihe) — Mario, Pilger aus Moya (Kanaren)', channel: 'WJT Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'So war der WJT Madrid 2011 mit Papst Benedikt XVI.', channel: 'Dokumentation', url: SRC.jmjMadridDoc },
      { title: 'Das ist die Jugend des Papstes · offizielle Dokumentation (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Komplette Playlist WJT Madrid 2011', channel: 'YouTube · offizieller Kanal', url: SRC.jmjMadridSongs },
      { title: 'Erinnerungen an den WJT Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Erleben Sie Ihre eigene Erfahrung am 6.-12. Juni 2026',
    ctaBody: 'Jede Papstreise hinterlässt bei jedem Pilger eine andere Spur. Die von Leo XIV. nach Spanien kann die Ihre sein. Melden Sie sich kostenlos auf der offiziellen Plattform conelpapa.es an, bereiten Sie Ihre Ausrüstung vor und bringen Sie Ihre Vatikanflagge mit, um den Pontifex am Plaza de Cibeles, im Bernabéu oder im Stadion von Gran Canaria zu begrüßen.',
    ctaButton: 'Für die Akte des Papstes anmelden →',
    relatedTitle: 'Verwandte Seiten',
    related: [
      { href: '/historia-visitas-papales', text: 'Vollständige Geschichte der Papstreisen nach Spanien' },
      { href: '/programa', text: 'Offizielles Programm der Reise Leos XIV. 2026' },
      { href: '/como-inscribirse', text: 'Anmeldung zu den Akten des Papstes' },
      { href: '/bandera-vaticano', text: 'Vatikanflagge für die Akte' },
      { href: '/que-llevar', text: 'Pilgerausrüstung · was mitnehmen' },
      { href: '/papa-bernabeu', text: 'Die Diözesanbegegnung im Bernabéu' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Experiências de peregrinos',
    title: 'Experiências de peregrinos em visitas papais anteriores a Espanha',
    subtitle: 'Testemunhos reais, citações verificadas e vídeos de arquivo de quem viveu as visitas de João Paulo II (1982, 1989, 2003) e Bento XVI (2010, 2011) antes da chegada do Papa Leão XIV em junho de 2026.',
    intro: 'Esta página reúne testemunhos reais e ligações verificáveis —Vatican.va, canal oficial das JMJ, imprensa católica espanhola— de peregrinos que viveram as cinco grandes visitas papais a Espanha desde 1982. São histórias de jovens sob a tempestade de Cuatro Vientos, de galegos no Monte do Gozo, de catalães na dedicação da Sagrada Família, de madrilenos na canonização dos cinco espanhóis. Servem de inspiração aos peregrinos que se preparam para a visita do Papa Leão XIV (6-12 de junho de 2026) e mostram que o que realmente importa não são os números de assistência, mas a marca que cada um leva consigo para casa.',
    events: [
      { year: '2011', title: 'JMJ Madrid · vigília de Cuatro Vientos sob a tempestade', location: 'Aeródromo de Cuatro Vientos, Madrid', attendance: '1,5-2 milhões de jovens · 190 países', ctx: 'A 20 de agosto de 2011, durante a vigília com Bento XVI, uma tempestade elétrica histórica obrigou a interromper o ato. O Papa recusou-se a refugiar-se e permaneceu no palco sob um simples guarda-chuva. Após a tempestade, dirigiu aos jovens as palavras que ficaram célebres: «A vossa força é maior do que a chuva».',
        testimonies: [
          { quote: 'A JMJ é uma experiência em que renovas e aumentas a tua fé, esclareces as dúvidas, encontras o teu caminho e talvez descubras a tua vocação. É uma oportunidade única na vida.', who: 'Carolina Andrea Guerrero Palomino', context: 'Estudante peruana de 17 anos, uma dos 2.000 peregrinos do Peru', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Missa final JMJ · Vatican.va' },
          { quote: 'A JMJ foi uma experiência que me anima a sentir-me orgulhoso de Jesus e a não me envergonhar da minha fé diante de ninguém. Vimos o Papa jovem com os jovens, molhado com os molhados.', who: 'Alberto Valecillos Blanco', context: 'Jovem peregrino, citado pelos Agostinhos Recoletos após a JMJ', sourceUrl: SRC.agustinos, sourceLabel: 'Agostinhos Recoletos · set 2011' },
          { quote: 'Vivemos juntos uma aventura. Firmes na fé em Cristo, resististes à chuva. Agradeço-vos pelo maravilhoso exemplo que destes. Como esta noite, com Cristo podereis sempre enfrentar as provas da vida. Não o esqueçais.', who: 'Bento XVI', context: 'Palavras do Papa no final da vigília após a tempestade', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · homilia 21 ago 2011' },
        ],
      },
      { year: '2010', title: 'Dedicação da Sagrada Família · Barcelona', location: 'Basílica da Sagrada Família, Barcelona', attendance: '8.000 dentro + 50.000 fora · mais de 1.000 cardeais e bispos concelebrantes', ctx: 'A 7 de novembro de 2010 Bento XVI consagrou a Sagrada Família como templo dedicado, 128 anos depois do início das obras de Antoni Gaudí. O ato foi transmitido em direto para todo o mundo. A basílica estava e continua em obras: as torres centrais ainda não foram concluídas.',
        testimonies: [
          { quote: 'O que impele tantas pessoas a deixar as ocupações quotidianas e empreender o caminho penitencial para Compostela, um caminho às vezes longo e fatigante, é o desejo de alcançar a luz de Cristo. Esse mesmo desejo traz a Barcelona os peregrinos que hoje nos acompanham.', who: 'Bento XVI', context: 'Audiência geral de 10 nov 2010, balanço da viagem a Santiago e Barcelona', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · homilia dedicação' },
          { quote: 'Abriu pessoalmente a grande porta principal do templo e deu início à santa missa. O ato litúrgico contou com a Coral de Sant Jordi, a Escolania de Montserrat e o Orfeó Català, 800 cantores no total.', who: 'Crónica do ato', context: 'Recolhido por ACI Prensa e Catalunya Religió no 10º aniversário', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10º aniversário' },
        ],
      },
      { year: '2003', title: 'Canonização de cinco espanhóis · Plaza de Colón, Madrid', location: 'Plaza de Colón, Madrid', attendance: 'Cerca de 2 milhões de pessoas', ctx: 'A 4 de maio de 2003 João Paulo II, já muito debilitado pelo Parkinson, canonizou Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz e Maravilhas de Jesus na Plaza de Colón. Foi a sua última visita a Espanha. Pronunciou a famosa frase: «Eu também fui jovem como vós».',
        testimonies: [
          { quote: 'Tinha 13 anos quando fui com a minha família à Plaza de Colón para a missa de canonização. Impressionou-me ver o Papa tão idoso, com tantas dificuldades físicas, mas com uma força impressionante ao transmitir a alegria de seguir Cristo. Hoje sou sacerdote.', who: 'Testemunho recolhido por Religión en Libertad', context: 'Crónica «Foi aos 13 anos à missa de João Paulo II em Madrid: hoje é padre»', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'Que o exemplo dos novos santos, de plena entrega a Deus e de serviço aos irmãos, seja um estímulo para vós, queridos jovens espanhóis, para que viváveis com generosidade a vocação cristã.', who: 'João Paulo II', context: 'Homilia da canonização de 4 maio 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · homilia Plaza Colón' },
        ],
      },
      { year: '1989', title: 'JMJ Santiago de Compostela · Monte do Gozo', location: 'Monte do Gozo, Santiago de Compostela', attendance: 'Mais de 500.000 jovens · 100 países', ctx: 'De 19 a 20 de agosto de 1989, João Paulo II presidiu à IV Jornada Mundial da Juventude em Santiago de Compostela. Foi a primeira JMJ em solo espanhol e a primeira com peregrinação jacobeia. Muitos peregrinos chegaram a pé depois de percorrer o Caminho de Santiago. O hino «Somos os jovens do 2000» ficou gravado na memória de toda uma geração.',
        testimonies: [
          { quote: 'Sois o povo de Deus em peregrinação. Assim me senti também eu peregrino no Ano Santo Compostelano quando vim pela primeira vez em 1982. E agora, queridos filhos, recordai que fazeis parte da Igreja missionária e que deveis apoiar-vos em Cristo para anunciar a sua mensagem de salvação.', who: 'João Paulo II', context: 'Vigília com os jovens no Monte do Gozo, 19 ago 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · vigília Monte do Gozo' },
          { quote: 'Reunidos no Monte do Gozo, onde muitos passaram uma noite húmida, os jovens assistiram à eucaristia. No final, o Papa entregou o bastão do peregrino a dez jovens.', who: 'Memória oficial da JMJ', context: 'Crónica posterior na Wikipedia sobre a JMJ 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · JMJ 1989' },
        ],
      },
      { year: '1982', title: 'Primeira viagem apostólica a Espanha · João Paulo II', location: '16 cidades espanholas em 10 dias', attendance: 'Mais de 10 milhões de pessoas assistiram aos atos', ctx: 'De 31 de outubro a 9 de novembro de 1982 João Paulo II realizou a primeira visita papal a Espanha desde o Concordata de 1953. Foi a viagem internacional mais longa de todo o seu pontificado. Pronunciou o célebre «Ato Europeu» em Santiago de Compostela: «Europa, reencontra-te! Sê tu mesma!».',
        testimonies: [
          { quote: 'Eu, Bispo de Roma e Pastor da Igreja universal, desde Santiago, lanço-te, velha Europa, um grito cheio de amor: reencontra-te. Sê tu mesma. Descobre as tuas origens. Reaviva as tuas raízes.', who: 'João Paulo II', context: '«Ato Europeu» de Santiago de Compostela, 9 nov 1982 · um dos discursos mais citados do seu pontificado', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · as cinco viagens de JPII a Espanha' },
        ],
      },
    ],
    videoTitle: 'Galeria de vídeos e arquivos',
    videoIntro: 'Reunimos ligações oficiais para que possa ver as imagens e ouvir os protagonistas. Todos os vídeos estão em canais oficiais da Conferência Episcopal Espanhola, JMJ Madrid 2011 ou Goya Producciones.',
    videos: [
      { title: 'Testemunhos JMJ Madrid 2011 (série de 9) — Mario, peregrino de Moya (Canárias)', channel: 'JMJ Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'Assim foi a JMJ Madrid 2011 com o Papa Bento XVI', channel: 'Documentário', url: SRC.jmjMadridDoc },
      { title: 'Esta é a Juventude do Papa · documentário oficial (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Playlist completa JMJ Madrid 2011', channel: 'YouTube · canal oficial', url: SRC.jmjMadridSongs },
      { title: 'Recordações da JMJ Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Viva a sua própria experiência a 6-12 de junho de 2026',
    ctaBody: 'Cada visita papal deixa uma marca diferente em cada peregrino. A de Leão XIV a Espanha pode ser a sua. Inscreva-se gratuitamente na plataforma oficial conelpapa.es, prepare o seu kit e leve a sua bandeira do Vaticano para saudar o Pontífice em Plaza de Cibeles, no Bernabéu ou no Estádio de Gran Canária.',
    ctaButton: 'Inscreva-se nos atos do Papa →',
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/historia-visitas-papales', text: 'História completa das visitas papais a Espanha' },
      { href: '/programa', text: 'Programa oficial da viagem de Leão XIV 2026' },
      { href: '/como-inscribirse', text: 'Como inscrever-se nos atos do Papa' },
      { href: '/bandera-vaticano', text: 'Bandeira do Vaticano para os atos' },
      { href: '/que-llevar', text: 'Kit do peregrino · o que levar' },
      { href: '/papa-bernabeu', text: 'O encontro diocesano no Bernabéu' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Experiències de pelegrins',
    title: 'Experiències de pelegrins en visites papals anteriors a Espanya',
    subtitle: 'Testimonis reals, cites verificades i vídeos d’arxiu de qui va viure les visites de Joan Pau II (1982, 1989, 2003) i Benet XVI (2010, 2011) abans de l’arribada del Papa Lleó XIV el juny de 2026.',
    intro: 'Aquesta pàgina recull testimonis reals i enllaços verificables —Vatican.va, canal oficial de les JMJ, premsa catòlica espanyola— de pelegrins que van viure les cinc grans visites papals a Espanya des de 1982. Són històries de joves sota la tempesta de Cuatro Vientos, de gallecs al Monte do Gozo, de catalans a la dedicació de la Sagrada Família, de madrilenys a la canonització dels cinc espanyols. Serveixen d’inspiració als pelegrins que es preparen per a la visita del Papa Lleó XIV (6-12 de juny de 2026) i mostren que el que realment importa no són les xifres d’assistència, sinó la petjada que cadascú s’endú a casa.',
    events: [
      { year: '2011', title: 'JMJ Madrid · vetlla de Cuatro Vientos sota la tempesta', location: 'Aeròdrom de Cuatro Vientos, Madrid', attendance: '1,5-2 milions de joves · 190 països', ctx: 'El 20 d’agost de 2011, durant la vetlla amb Benet XVI, una tempesta elèctrica històrica va obligar a interrompre l’acte. El Papa es va negar a refugiar-se i va romandre al cadafal sota un simple paraigua. Després de la tempesta, va adreçar als joves les paraules que es van fer famoses: «La vostra fortalesa és més gran que la pluja».',
        testimonies: [
          { quote: 'La JMJ és una experiència en què renoves i augmentes la teva fe, despeges els dubtes, trobes el teu camí i potser descobreixes la teva vocació. És una oportunitat única a la vida.', who: 'Carolina Andrea Guerrero Palomino', context: 'Estudiant peruana de 17 anys, una dels 2.000 pelegrins del Perú', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Missa final JMJ · Vatican.va' },
          { quote: 'La JMJ va ser una experiència que m’anima a sentir-me orgullós de Jesús i a no avergonyir-me de la meva fe davant ningú. Vam veure el Papa jove amb els joves, mullat amb els mullats.', who: 'Alberto Valecillos Blanco', context: 'Jove pelegrí, citat pels Agustinians Recol·lectes després de la JMJ', sourceUrl: SRC.agustinos, sourceLabel: 'Agustinians Recol·lectes · set 2011' },
          { quote: 'Hem viscut junts una aventura. Ferms en la fe en Crist, heu resistit la pluja. Us dono gràcies pel meravellós exemple que heu donat. Igual que aquesta nit, amb Crist sempre podreu afrontar les proves de la vida. No ho oblideu.', who: 'Benet XVI', context: 'Paraules del Papa al final de la vetlla després de la tempesta', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · homilia 21 ag 2011' },
        ],
      },
      { year: '2010', title: 'Dedicació de la Sagrada Família · Barcelona', location: 'Basílica de la Sagrada Família, Barcelona', attendance: '8.000 a dins + 50.000 a fora · més de 1.000 cardenals i bisbes concelebrants', ctx: 'El 7 de novembre de 2010 Benet XVI va consagrar la Sagrada Família com a temple dedicat, 128 anys després de l’inici de les obres d’Antoni Gaudí. L’acte es va retransmetre en directe a tot el món. La basílica era i continua en obres: les torres centrals encara no s’han completat.',
        testimonies: [
          { quote: 'El que impulsa tanta gent a deixar les ocupacions quotidianes i emprendre el camí penitencial cap a Compostel·la, un camí a vegades llarg i fatigós, és el desig d’arribar a la llum de Crist. Aquest mateix desig porta a Barcelona els pelegrins que avui ens acompanyen.', who: 'Benet XVI', context: 'Audiència general del 10 nov 2010, balanç del viatge a Santiago i Barcelona', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · homilia dedicació' },
          { quote: 'Va obrir personalment la gran porta principal del temple i va donar inici a la santa missa. L’acte litúrgic va comptar amb la Coral de Sant Jordi, l’Escolania de Montserrat i l’Orfeó Català, 800 cantors en total.', who: 'Crònica de l’acte', context: 'Recollit per ACI Prensa i Catalunya Religió al 10è aniversari', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10è aniversari' },
        ],
      },
      { year: '2003', title: 'Canonització de cinc espanyols · Plaza de Colón, Madrid', location: 'Plaza de Colón, Madrid', attendance: 'Prop de 2 milions de persones', ctx: 'El 4 de maig de 2003 Joan Pau II, ja molt debilitat pel Parkinson, va canonitzar Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz i Maravillas de Jesús a la Plaza de Colón. Va ser la seva última visita a Espanya. Va pronunciar la famosa frase: «Jo també vaig ser jove com vosaltres».',
        testimonies: [
          { quote: 'Tenia 13 anys quan vaig anar amb la meva família a la Plaza de Colón per a la missa de canonització. Em va impactar veure el Papa tan ancià, amb tantes dificultats físiques, però amb una força impressionant en transmetre la il·lusió per seguir Crist. Avui sóc sacerdot.', who: 'Testimoni recollit per Religión en Libertad', context: 'Crònica «Va anar amb 13 anys a la missa de Joan Pau II a Madrid: avui és sacerdot»', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'Que l’exemple dels nous sants, de plena entrega a Déu i de servei als germans, sigui un estímul per a vosaltres, estimats joves espanyols, perquè viviu amb generositat la vocació cristiana.', who: 'Joan Pau II', context: 'Homilia de la canonització del 4 maig 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · homilia Plaza Colón' },
        ],
      },
      { year: '1989', title: 'JMJ Santiago de Compostel·la · Monte do Gozo', location: 'Monte do Gozo, Santiago de Compostel·la', attendance: 'Més de 500.000 joves · 100 països', ctx: 'Del 19 al 20 d’agost de 1989, Joan Pau II va presidir la IV Jornada Mundial de la Joventut a Santiago de Compostel·la. Va ser la primera JMJ en sòl espanyol i la primera amb pelegrinatge jacobeu. Molts pelegrins van arribar a peu després de recórrer el Camí de Sant Jaume. L’himne «Som els joves del 2000» va quedar gravat en la memòria de tota una generació.',
        testimonies: [
          { quote: 'Sou el poble de Déu que peregrina. Així em vaig sentir també jo pelegrí en l’Any Sant Compostelà quan vaig venir per primera vegada el 1982. I ara, estimats fills, recordeu que formeu part de l’Església missionera i que us heu de recolzar en Crist per anunciar el seu missatge de salvació.', who: 'Joan Pau II', context: 'Vetlla amb els joves al Monte do Gozo, 19 ag 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · vetlla Monte do Gozo' },
          { quote: 'Concentrats al Monte do Gozo, on molts havien passat una nit humida, els joves van assistir a l’eucaristia. Al final, el Papa va lliurar el bastó del pelegrí a deu joves.', who: 'Memòria oficial de la JMJ', context: 'Crònica posterior a la Wikipedia sobre la JMJ 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · JMJ 1989' },
        ],
      },
      { year: '1982', title: 'Primer viatge apostòlic a Espanya · Joan Pau II', location: '16 ciutats espanyoles en 10 dies', attendance: 'Més de 10 milions de persones van assistir als actes', ctx: 'Del 31 d’octubre al 9 de novembre de 1982 Joan Pau II va fer la primera visita papal a Espanya des del Concordat de 1953. Va ser el viatge internacional més llarg de tot el seu pontificat. Va pronunciar el cèlebre «Acte Europeu» a Santiago de Compostel·la: «Europa, retroba’t! Sigues tu mateixa!».',
        testimonies: [
          { quote: 'Jo, Bisbe de Roma i Pastor de l’Església universal, des de Santiago, et llanço a tu, vella Europa, un crit ple d’amor: retroba’t. Sigues tu mateixa. Descobreix els teus orígens. Reaviva les teves arrels.', who: 'Joan Pau II', context: '«Acte Europeu» de Santiago de Compostel·la, 9 nov 1982 · un dels discursos més citats del seu pontificat', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · els cinc viatges de JPII a Espanya' },
        ],
      },
    ],
    videoTitle: 'Galeria de vídeos i arxius',
    videoIntro: 'Recopilem enllaços oficials perquè puguis veure les imatges i escoltar els protagonistes. Tots els vídeos són a canals oficials de la Conferència Episcopal Espanyola, JMJ Madrid 2011 o Goya Producciones.',
    videos: [
      { title: 'Testimonis JMJ Madrid 2011 (sèrie de 9) — Mario, pelegrí de Moya (Canàries)', channel: 'JMJ Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'Així va ser la JMJ Madrid 2011 amb el Papa Benet XVI', channel: 'Documental', url: SRC.jmjMadridDoc },
      { title: 'Aquesta és la Joventut del Papa · documental oficial (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Playlist completa JMJ Madrid 2011', channel: 'YouTube · canal oficial', url: SRC.jmjMadridSongs },
      { title: 'Records de la JMJ Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Viu la teva pròpia experiència el 6-12 de juny de 2026',
    ctaBody: 'Cada visita papal deixa una petjada diferent en cada pelegrí. La de Lleó XIV a Espanya pot ser la teva. Inscriu-te gratis a la plataforma oficial conelpapa.es, prepara el teu kit i porta la teva bandera del Vaticà per saludar el Pontífex a la Plaza de Cibeles, al Bernabéu o a l’Estadi de Gran Canària.',
    ctaButton: 'Inscriu-te als actes del Papa →',
    relatedTitle: 'Pàgines relacionades',
    related: [
      { href: '/historia-visitas-papales', text: 'Història completa de les visites papals a Espanya' },
      { href: '/programa', text: 'Programa oficial del viatge de Lleó XIV 2026' },
      { href: '/como-inscribirse', text: 'Com inscriure’s als actes del Papa' },
      { href: '/bandera-vaticano', text: 'Bandera del Vaticà per als actes' },
      { href: '/que-llevar', text: 'Kit del pelegrí · què portar' },
      { href: '/papa-bernabeu', text: 'La trobada diocesana al Bernabéu' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Experiencias de peregrinos',
    title: 'Experiencias de peregrinos en visitas papais anteriores a España',
    subtitle: 'Testemuños reais, citas verificadas e vídeos de arquivo de quen viviu as visitas de Xoán Paulo II (1982, 1989, 2003) e Bieito XVI (2010, 2011) antes da chegada do Papa León XIV en xuño de 2026.',
    intro: 'Esta páxina recolle testemuños reais e ligazóns verificables —Vatican.va, canle oficial das XMX, prensa católica española— de peregrinos que viviron as cinco grandes visitas papais a España desde 1982. Son historias de mozos baixo a tormenta de Cuatro Vientos, de galegos no Monte do Gozo, de cataláns na dedicación da Sagrada Familia, de madrileños na canonización dos cinco españois. Serven de inspiración aos peregrinos que se preparan para a visita do Papa León XIV (6-12 de xuño de 2026) e amosan que o que realmente importa non son as cifras de asistencia, senón a pegada que cada un leva a casa.',
    events: [
      { year: '2011', title: 'XMX Madrid · vixilia de Cuatro Vientos baixo a tormenta', location: 'Aeródromo de Cuatro Vientos, Madrid', attendance: '1,5-2 millóns de mozos · 190 países', ctx: 'O 20 de agosto de 2011, durante a vixilia con Bieito XVI, unha tormenta eléctrica histórica obrigou a interromper o acto. O Papa negouse a refuxiarse e permaneceu no escenario baixo un simple paraugas. Despois da tormenta, dirixiu aos mozos as palabras que se fixeron famosas: «A vosa fortaleza é máis grande que a chuvia».',
        testimonies: [
          { quote: 'A XMX é unha experiencia na que renovas e aumentas a túa fe, despexas as dúbidas, atopas o teu camiño e quizais descubres a túa vocación. É unha oportunidade única na vida.', who: 'Carolina Andrea Guerrero Palomino', context: 'Estudante peruana de 17 anos, unha dos 2.000 peregrinos do Perú', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Misa final XMX · Vatican.va' },
          { quote: 'A XMX foi unha experiencia que me anima a sentirme orgulloso de Xesús e a non avergoñarme da miña fe diante de ninguén. Vimos o Papa novo cos mozos, mollado cos mollados.', who: 'Alberto Valecillos Blanco', context: 'Mozo peregrino, citado polos Agostiños Recoletos despois da XMX', sourceUrl: SRC.agustinos, sourceLabel: 'Agostiños Recoletos · set 2011' },
          { quote: 'Vivimos xuntos unha aventura. Firmes na fe en Cristo, resististes á chuvia. Doúvos as grazas polo marabilloso exemplo que destes. Igual que esta noite, con Cristo sempre poderedes afrontar as probas da vida. Non o esquezades.', who: 'Bieito XVI', context: 'Palabras do Papa ao final da vixilia tras a tormenta', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · homilía 21 ago 2011' },
        ],
      },
      { year: '2010', title: 'Dedicación da Sagrada Familia · Barcelona', location: 'Basílica da Sagrada Familia, Barcelona', attendance: '8.000 dentro + 50.000 fóra · máis de 1.000 cardeais e bispos concelebrantes', ctx: 'O 7 de novembro de 2010 Bieito XVI consagrou a Sagrada Familia como templo dedicado, 128 anos despois do inicio das obras de Antoni Gaudí. O acto retransmitiuse en directo a todo o mundo. A basílica estaba e segue en obras: as torres centrais aínda non se completaron.',
        testimonies: [
          { quote: 'O que impulsa tanta xente a deixar as ocupacións cotiás e emprender o camiño penitencial cara a Compostela, un camiño ás veces longo e fatigante, é o desexo de acadar a luz de Cristo. Ese mesmo desexo trae a Barcelona os peregrinos que hoxe nos acompañan.', who: 'Bieito XVI', context: 'Audiencia xeral do 10 nov 2010, balance da viaxe a Santiago e Barcelona', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · homilía dedicación' },
          { quote: 'Abriu persoalmente a gran porta principal do templo e deu inicio á santa misa. O acto litúrxico contou coa Coral de Sant Jordi, a Escolania de Montserrat e o Orfeó Català, 800 cantores en total.', who: 'Crónica do acto', context: 'Recollido por ACI Prensa e Catalunya Religió no 10º aniversario', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10º aniversario' },
        ],
      },
      { year: '2003', title: 'Canonización de cinco españois · Plaza de Colón, Madrid', location: 'Plaza de Colón, Madrid', attendance: 'Preto de 2 millóns de persoas', ctx: 'O 4 de maio de 2003 Xoán Paulo II, xa moi debilitado polo Parkinson, canonizou a Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz e Maravillas de Xesús na Plaza de Colón. Foi a súa última visita a España. Pronunciou a famosa frase: «Eu tamén fun mozo coma vós».',
        testimonies: [
          { quote: 'Tiña 13 anos cando fun coa miña familia á Plaza de Colón para a misa de canonización. Impactoume ver o Papa tan ancián, con tantas dificultades físicas, pero cunha forza impresionante ao transmitir a ilusión por seguir a Cristo. Hoxe son sacerdote.', who: 'Testemuño recollido por Religión en Libertad', context: 'Crónica «Foi con 13 anos á misa de Xoán Paulo II en Madrid: hoxe é cura»', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'Que o exemplo dos novos santos, de plena entrega a Deus e de servizo aos irmáns, sexa un estímulo para vós, queridos mozos españois, para que vivades con xenerosidade a vocación cristiá.', who: 'Xoán Paulo II', context: 'Homilía da canonización do 4 maio 2003', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · homilía Plaza Colón' },
        ],
      },
      { year: '1989', title: 'XMX Santiago de Compostela · Monte do Gozo', location: 'Monte do Gozo, Santiago de Compostela', attendance: 'Máis de 500.000 mozos · 100 países', ctx: 'Do 19 ao 20 de agosto de 1989, Xoán Paulo II presidiu a IV Xornada Mundial da Mocidade en Santiago de Compostela. Foi a primeira XMX en solo español e a primeira con peregrinación xacobea. Moitos peregrinos chegaron a pé tras percorrer o Camiño de Santiago. O himno «Somos os mozos do 2000» quedou gravado na memoria de toda unha xeración.',
        testimonies: [
          { quote: 'Sodes o pobo de Deus que peregrina. Así me sentín tamén eu peregrino no Ano Santo Compostelán cando vin por primeira vez en 1982. E agora, queridos fillos, lembrade que formades parte da Igrexa misioneira e que debedes apoiarvos en Cristo para anunciar a súa mensaxe de salvación.', who: 'Xoán Paulo II', context: 'Vixilia cos mozos no Monte do Gozo, 19 ago 1989', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · vixilia Monte do Gozo' },
          { quote: 'Concentrados no Monte do Gozo, onde moitos pasaran unha noite húmida, os mozos asistiron á eucaristía. Ao final, o Papa entregou o bastón do peregrino a dez mozos.', who: 'Memoria oficial da XMX', context: 'Crónica posterior na Wikipedia sobre a XMX 1989', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · XMX 1989' },
        ],
      },
      { year: '1982', title: 'Primeira viaxe apostólica a España · Xoán Paulo II', location: '16 cidades españolas en 10 días', attendance: 'Máis de 10 millóns de persoas asistiron aos actos', ctx: 'Do 31 de outubro ao 9 de novembro de 1982 Xoán Paulo II realizou a primeira visita papal a España desde o Concordato de 1953. Foi a viaxe internacional máis longa de todo o seu pontificado. Pronunciou o célebre «Acto Europeo» en Santiago de Compostela: «Europa, vólvete a atopar! Sé ti mesma!».',
        testimonies: [
          { quote: 'Eu, Bispo de Roma e Pastor da Igrexa universal, desde Santiago, lánzoche a ti, vella Europa, un berro cheo de amor: vólvete a atopar. Sé ti mesma. Descubre as túas orixes. Aviva as túas raíces.', who: 'Xoán Paulo II', context: '«Acto Europeo» de Santiago de Compostela, 9 nov 1982 · un dos discursos máis citados do seu pontificado', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · as cinco viaxes de XPII a España' },
        ],
      },
    ],
    videoTitle: 'Galería de vídeos e arquivos',
    videoIntro: 'Recompilamos ligazóns oficiais para que poidas ver as imaxes e escoitar os protagonistas. Todos os vídeos están en canles oficiais da Conferencia Episcopal Española, XMX Madrid 2011 ou Goya Producciones.',
    videos: [
      { title: 'Testemuños XMX Madrid 2011 (serie de 9) — Mario, peregrino de Moya (Canarias)', channel: 'XMX Madrid 2011', url: SRC.jmjMadridYT },
      { title: 'Así foi a XMX Madrid 2011 co Papa Bieito XVI', channel: 'Documental', url: SRC.jmjMadridDoc },
      { title: 'Esta é a Mocidade do Papa · documental oficial (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'Playlist completa XMX Madrid 2011', channel: 'YouTube · canle oficial', url: SRC.jmjMadridSongs },
      { title: 'Lembranzas da XMX Madrid 2011', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Vive a túa propia experiencia o 6-12 de xuño de 2026',
    ctaBody: 'Cada visita papal deixa unha pegada distinta en cada peregrino. A de León XIV a España pode ser a túa. Inscríbete gratis na plataforma oficial conelpapa.es, prepara o teu kit e leva a túa bandeira do Vaticano para saudar o Pontífice na Plaza de Cibeles, no Bernabéu ou no Estadio de Gran Canaria.',
    ctaButton: 'Inscríbete aos actos do Papa →',
    relatedTitle: 'Páxinas relacionadas',
    related: [
      { href: '/historia-visitas-papales', text: 'Historia completa das visitas papais a España' },
      { href: '/programa', text: 'Programa oficial da viaxe de León XIV 2026' },
      { href: '/como-inscribirse', text: 'Como inscribirse aos actos do Papa' },
      { href: '/bandera-vaticano', text: 'Bandeira do Vaticano para os actos' },
      { href: '/que-llevar', text: 'Kit do peregrino · que levar' },
      { href: '/papa-bernabeu', text: 'O encontro diocesano no Bernabéu' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Erromesen esperientziak',
    title: 'Erromesen esperientziak Espainiarako aurreko bisita papaletan',
    subtitle: 'Joan Paulo II.aren (1982, 1989, 2003) eta Benedikto XVI.aren (2010, 2011) bisitak Leon XIV.a Aita Santua 2026ko ekainean iritsi aurretik bizi izan zituztenen benetako lekukotzak, egiaztatutako aipuak eta artxiboko bideoak.',
    intro: 'Orrialde honek 1982tik Espainian izandako bost bisita papal handiak bizi izan zituzten erromesen benetako lekukotzak eta egiaztagarriak diren estekak biltzen ditu —Vatican.va, GMJren kanal ofiziala, Espainiako katolikoen prentsa—. Cuatro Vientoseko ekaitzaren azpian zeuden gazteen istorioak dira, Monte do Gozoko galiziarrenak, Sagrada Familiaren dedikazioan zeuden katalanenak, bost espainiarren kanonizazioan Plaza de Colónen zeuden madrildarrenak. Leon XIV.a Aita Santuaren bisitarako prestatzen ari diren erromesentzat (2026ko ekainaren 6-12) inspirazio iturri dira eta benetan garrantzitsuena ez direla asistentzia-zenbakiak erakusten dute, bakoitzak etxera daraman aztarna baizik.',
    events: [
      { year: '2011', title: 'GMJ Madril · Cuatro Vientoseko bijilia ekaitzaren azpian', location: 'Cuatro Vientos aerodromoa, Madril', attendance: '1,5-2 milioi gazte · 190 herrialde', ctx: '2011ko abuztuaren 20an, Benedikto XVI.arekin egindako bijilian, ekaitz elektriko historiko batek ekitaldia eteten behartu zuen. Aita Santuak babesa hartzeari uko egin zion eta agertokian geratu zen aterki soil baten azpian. Ekaitzaren ondoren, gazteei famatu egin ziren hitzak esan zizkien: «Zuen indarra euria baino handiagoa da».',
        testimonies: [
          { quote: 'GMJ esperientzia bat da, non fedea berritzen eta handitzen duzun, zalantzak argitzen dituzun, zure bidea aurkitzen duzun eta agian zure bokazioa aurkitzen duzun. Bizitzako aukera bakarra da.', who: 'Carolina Andrea Guerrero Palomino', context: '17 urteko peruar ikaslea, Peruko 2.000 erromesetako bat', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'GMJ azken meza · Vatican.va' },
          { quote: 'GMJ Jesusen harro sentitzera animatzen nauen esperientzia izan da, eta inoren aurrean nire fedeaz lotsa ez izateko. Aita Santua gazteekin gazte ikusi genuen, bustietan bustia.', who: 'Alberto Valecillos Blanco', context: 'Erromes gaztea, Agustindar Recoletosak GMJren ondoren aipatua', sourceUrl: SRC.agustinos, sourceLabel: 'Agustindar Recoletosak · 2011ko ira.' },
          { quote: 'Elkarrekin abentura bat bizi izan dugu. Kristoren fedean sendo, euriari aurre egin diozue. Eman duzuen adibide zoragarriagatik eskerrak ematen dizkizuet. Gau honetan bezala, Kristorekin beti aurre egingo diozue bizitzaren probei. Ez ezazue ahaztu.', who: 'Benedikto XVI.a', context: 'Aita Santuaren hitzak bijiliaren amaieran ekaitzaren ondoren', sourceUrl: SRC.vatJmjMadrid, sourceLabel: 'Vatican.va · homilia 2011/8/21' },
        ],
      },
      { year: '2010', title: 'Sagrada Familiaren dedikazioa · Bartzelona', location: 'Sagrada Familia Basilika, Bartzelona', attendance: '8.000 barruan + 50.000 kanpoan · 1.000 kardinal eta apezpiku konzelebratzaile baino gehiago', ctx: '2010eko azaroaren 7an Benedikto XVI.ak Sagrada Familia tenplu dedikatu gisa sagaratu zuen, Antoni Gaudík lanak hasi eta 128 urtera. Ekitaldia mundu osora zuzenean igorri zen. Basilika lanetan zegoen eta lanetan jarraitzen du: erdiko dorreak oraindik ez dira amaitu.',
        testimonies: [
          { quote: 'Hainbeste jende eguneroko jardunak utzi eta Compostelarantz penitentzia-bidea hartzera bultzatzen duena, batzuetan luzea eta nekagarria den bidea, Kristoren argira heltzeko nahia da. Nahi berak gaur gurekin dauden erromesak ekartzen ditu Bartzelonara.', who: 'Benedikto XVI.a', context: 'Audientzia orokorra 2010/11/10, Santiago eta Bartzelonako bidaiaren balantzea', sourceUrl: SRC.vatSagrada, sourceLabel: 'Vatican.va · dedikazio-homilia' },
          { quote: 'Berak ireki zuen tenpluko atari nagusia eta meza santua hasi zen. Liturgia-ekitaldian Sant Jordi Korala, Montserrateko Escolania eta Orfeó Català izan ziren, 800 kantari guztira.', who: 'Ekitaldiaren kronika', context: 'ACI Prensa eta Catalunya Religió hedabideek 10. urteurrenean bildua', sourceUrl: 'https://www.aciprensa.com/noticias/84538/se-cumplen-10-anos-de-la-preciosa-dedicacion-de-la-sagrada-familia-por-benedicto-xvi', sourceLabel: 'ACI Prensa · 10. urteurrena' },
        ],
      },
      { year: '2003', title: 'Bost espainiarren kanonizazioa · Plaza de Colón, Madril', location: 'Plaza de Colón, Madril', attendance: '2 milioi pertsona inguru', ctx: '2003ko maiatzaren 4an Joan Paulo II.ak, jadanik Parkinsonek oso ahuldua, Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz eta Maravillas Jesusena kanonizatu zituen Plaza de Colónen. Espainiara egindako azken bisita izan zen. Esaldi famatua esan zuen: «Ni ere gaztea izan nintzen zuek bezala».',
        testimonies: [
          { quote: '13 urte nituen familiarekin Plaza de Colónera kanonizazio-mezara joan nintzenean. Aita Santua hain zaharra ikusteak, zailtasun fisiko handiak izanik, baina Kristori jarraitzeko ilusioa transmititzeko indar harrigarriarekin, eragin zidan. Gaur apaiza naiz.', who: 'Religión en Libertad-ek bildutako lekukotza', context: 'Kronika «13 urtekin Madrilgo Joan Paulo II.aren mezara joan zen: gaur apaiza da»', sourceUrl: SRC.religionLibertad13, sourceLabel: 'Religión en Libertad' },
          { quote: 'Santu berrien adibideak, Jainkoaganako erabateko emateak eta anaiei zerbitzu osoak, zuentzat estimulu izan dadila, espainiar gazte maiteak, kristau bokazioa eskuzabaltasunez bizi dezazuen.', who: 'Joan Paulo II.a', context: '2003ko maiatzaren 4ko kanonizazioaren homilia', sourceUrl: SRC.vatColon2003, sourceLabel: 'Vatican.va · Plaza Colón homilia' },
        ],
      },
      { year: '1989', title: 'GMJ Santiago de Compostela · Monte do Gozo', location: 'Monte do Gozo, Santiago de Compostela', attendance: '500.000 gazte baino gehiago · 100 herrialde', ctx: '1989ko abuztuaren 19tik 20ra, Joan Paulo II.ak IV. Gazteen Mundu Eguna zuzendu zuen Santiago de Compostelan. Espainiako lurraldean egindako lehen GMJ izan zen eta jakobiar erromesaldia izan zuen lehena. Erromes asko oinez iritsi ziren Santiago Bidea egin ondoren. «2000. urteko gazteak gara» ereserkia belaunaldi oso baten oroimenean grabatuta geratu zen.',
        testimonies: [
          { quote: 'Erromes ari den Jainkoaren herria zarete. Hala sentitu nintzen ni ere erromes Compostelar Urte Santuan 1982an lehen aldiz etorri nintzenean. Eta orain, seme-alaba maiteak, gogoratu Eliza misiolariaren parte zaretela eta Kristoren bizkar egon behar duzuela bere salbazio-mezua iragartzeko.', who: 'Joan Paulo II.a', context: 'Bijilia gazteekin Monte do Gozon, 1989ko abuztuaren 19a', sourceUrl: SRC.vatSantiagoVigil, sourceLabel: 'Vatican.va · Monte do Gozo bijilia' },
          { quote: 'Monte do Gozon bilduta, askok gau heze bat pasa zuten lekuan, gazteek eukaristiara joan ziren. Amaieran, Aita Santuak erromesaren makila eman zien hamar gazteri.', who: 'GMJren memoria ofiziala', context: 'Geroko kronika 1989ko GMJri buruzko Wikipedian', sourceUrl: 'https://es.wikipedia.org/wiki/Jornada_Mundial_de_la_Juventud_1989', sourceLabel: 'Wikipedia · 1989ko GMJ' },
        ],
      },
      { year: '1982', title: 'Espainiarako lehen bidaia apostolikoa · Joan Paulo II.a', location: '16 espainiar hiri 10 egunetan', attendance: '10 milioi pertsona baino gehiago bertaratu ziren ekitaldietara', ctx: '1982ko urriaren 31tik azaroaren 9ra, Joan Paulo II.ak 1953ko Konkordatutik Espainiara egindako lehen bisita papala egin zuen. Bere pontifikatu osoko nazioarteko bidaia luzeena izan zen. Santiago de Compostelan «Europar Egintza» ospetsua esan zuen: «Europa, aurkitu zaitez berriro! Izan zaitez zu zeu!».',
        testimonies: [
          { quote: 'Nik, Erromako Apezpiku eta Eliza unibertsalaren Artzainak, Santiagotik, oihu maitez betea jaurtitzen dizut, Europa zaharra: aurkitu zaitez berriro. Izan zaitez zu zeu. Aurki itzazu zure jatorriak. Sustatu itzazu zure sustraiak.', who: 'Joan Paulo II.a', context: 'Santiago de Compostelaren «Europar Egintza», 1982ko azaroaren 9a · bere pontifikatuaren hitzaldi aipatuenetako bat', sourceUrl: SRC.alfayomega5viajes, sourceLabel: 'Alfa y Omega · JPII.aren bost bidaiak Espainiara' },
        ],
      },
    ],
    videoTitle: 'Bideoen eta artxiboen galeria',
    videoIntro: 'Esteka ofizialak biltzen ditugu irudiak ikusi eta protagonistak entzun ahal izan ditzazun. Bideo guztiak Espainiako Apezpiku Konferentziaren, GMJ Madril 2011-ren edo Goya Producciones-en kanal ofizialetan daude.',
    videos: [
      { title: 'GMJ Madril 2011 lekukotzak (9ren seriea) — Mario, Moyako erromesa (Kanariak)', channel: 'GMJ Madril 2011', url: SRC.jmjMadridYT },
      { title: 'Halaxe izan zen GMJ Madril 2011 Benedikto XVI.arekin', channel: 'Dokumentala', url: SRC.jmjMadridDoc },
      { title: 'Hauxe da Aita Santuaren Gazteria · dokumental ofiziala (145 min)', channel: 'Goya Producciones', url: 'https://www.goyaproducciones.com/en/portfolio_page/wyd-madrid-2011/' },
      { title: 'GMJ Madril 2011 playlist osoa', channel: 'YouTube · kanal ofiziala', url: SRC.jmjMadridSongs },
      { title: 'GMJ Madril 2011-en oroitzapenak', channel: 'Opus Dei', url: SRC.jmjMadridOpusDei },
    ],
    ctaTitle: 'Bizi ezazu zure esperientzia 2026ko ekainaren 6-12an',
    ctaBody: 'Bisita papal bakoitzak aztarna desberdina uzten du erromes bakoitzean. Leon XIV.ak Espainiara egindakoa zurea izan daiteke. Erregistratu doan conelpapa.es plataforma ofizialean, prestatu zure kita eta eraman zure Vatikanoaren bandera Pontifizea Plaza de Cibelesen, Bernabéun edo Gran Canariako Estadioan agurtzeko.',
    ctaButton: 'Eman izena Aita Santuaren ekitaldietan →',
    relatedTitle: 'Erlazionatutako orriak',
    related: [
      { href: '/historia-visitas-papales', text: 'Espainiarako bisita papalen historia osoa' },
      { href: '/programa', text: 'Leon XIV.aren 2026ko bidaiaren programa ofiziala' },
      { href: '/como-inscribirse', text: 'Aita Santuaren ekitaldietara nola izena eman' },
      { href: '/bandera-vaticano', text: 'Vatikanoaren bandera ekitaldietarako' },
      { href: '/que-llevar', text: 'Erromes-kita · zer eraman' },
      { href: '/papa-bernabeu', text: 'Bernabéuko elizbarrutiko topaketa' },
    ],
  },
}

export default function ExperienciasPeregrinosPage({ locale }: Props) {
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
        </Container>
      </section>

      <Container className="py-10">
        <VaticanFlagBanner locale={locale} className="mb-8" />

        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          {t.events.map((ev) => (
            <section key={ev.year} className="not-prose mt-12 rounded-xl border border-papal-navy/10 bg-papal-cream/30 p-6">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="rounded-full bg-papal-navy px-3 py-1 font-heading text-sm font-bold text-white">{ev.year}</span>
                <h2 className="font-heading text-xl font-bold text-papal-navy sm:text-2xl">{ev.title}</h2>
              </div>
              <p className="mt-2 text-xs text-papal-navy/60">
                <strong>{ev.location}</strong> · {ev.attendance}
              </p>
              <p className="mt-3 text-sm text-papal-navy/80">{ev.ctx}</p>

              <div className="mt-5 space-y-4">
                {ev.testimonies.map((tt, i) => (
                  <figure key={i} className="rounded-lg border-l-4 border-papal-gold bg-white p-4">
                    <blockquote className="italic text-papal-navy">«{tt.quote}»</blockquote>
                    <figcaption className="mt-2 text-xs text-papal-navy/70">
                      <strong className="text-papal-navy">{tt.who}</strong>
                      <span className="block">{tt.context}</span>
                      <a
                        href={tt.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-papal-gold-dark underline decoration-papal-gold/40 underline-offset-2 hover:text-papal-gold"
                      >
                        {tt.sourceLabel} ↗
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}

          <h2 className="mt-12 font-heading text-2xl font-bold text-papal-navy">{t.videoTitle}</h2>
          <p>{t.videoIntro}</p>
          <ul className="not-prose mt-4 space-y-2">
            {t.videos.map((v) => (
              <li key={v.url} className="flex items-start gap-3 rounded-lg border border-papal-navy/10 bg-white p-3">
                <span aria-hidden="true" className="text-2xl">▶️</span>
                <div className="flex-1 min-w-0">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-papal-navy hover:text-papal-gold-dark hover:underline"
                  >
                    {v.title}
                  </a>
                  <p className="mt-0.5 text-xs text-papal-navy/60">{v.channel}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="not-prose mt-12 rounded-xl bg-papal-navy p-6 text-white">
            <h2 className="font-heading text-xl font-bold">{t.ctaTitle}</h2>
            <p className="mt-2 text-white/90">{t.ctaBody}</p>
            <Link
              href={localizePath('/como-inscribirse', locale)}
              className="mt-4 inline-block rounded-lg bg-papal-gold px-5 py-3 font-semibold text-papal-navy transition-colors hover:bg-papal-gold/90"
            >
              {t.ctaButton}
            </Link>
          </div>

          <h2 className="mt-12 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
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
