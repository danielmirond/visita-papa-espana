/**
 * Traducciones EN del contenido de historia de visitas papales.
 * Source of truth: data/historiaVisitas.ts
 */

import type { Locale } from '@/data/i18n/types'
import {
  visitas,
  datosAgregados,
  faqHistoria,
  type VisitaHistorica,
  type FaqHistoria,
} from '@/data/historiaVisitas'

type VisitaTranslation = {
  papaNombre: string
  nombre: string
  contextoHistorico: string
  datoRelevante: string
  actos?: string[]
  ciudades?: string[]
}

const VISITAS_EN: VisitaTranslation[] = [
  { papaNombre: 'John Paul II', nombre: 'First apostolic journey: "The pilgrim Pope in Spain"', actos: ['Beatification of Mother Maravillas of Jesus in Segovia', 'European Act in Santiago de Compostela ("Europe, find yourself again")', 'Mass at Plaza de Colón, Madrid', 'Meeting with youth at the Bernabéu', 'Visit to Saint Teresa of Jesus in Ávila'], contextoHistorico: 'First visit of a Pope to Spain since the 1953 Concordat. Spain had just held general elections with a PSOE victory. John Paul II delivered in Santiago the celebrated "European Act" manifesto speech: "I, Bishop of Rome and Pastor of the universal Church, from Santiago I launch at you, old Europe, a cry full of love: Find yourself again. Be yourself."', datoRelevante: '10 days, 16 cities, more than 10 million people attended the events. One of the most intense trips of the entire Wojtyłan pontificate.' },
  { papaNombre: 'John Paul II', nombre: 'Visit to Zaragoza: centenary of the Pilar', actos: ['Mass at the Plaza de las Catedrales (Pilar and La Seo)', 'Rosary before the Virgin of the Pilar', 'Meeting with Spanish episcopate'], contextoHistorico: 'Trip dedicated to the Marian devotion of the Pilar in the context of the Marian Year. Technical stopover with high spiritual content, briefer than the 1982 journey.', datoRelevante: 'John Paul II prayed before the image of the Pilar longer than planned and left his pastoral ring as an offering to the Virgin.' },
  { papaNombre: 'John Paul II', nombre: 'IV World Youth Day (WYD Santiago de Compostela 1989)', actos: ['Youth vigil at Monte del Gozo', 'Final WYD Mass with nearly 400,000 young people', 'Jacobean pilgrimage', 'Visit to Oviedo Cathedral (Holy Chamber relics)'], contextoHistorico: 'Fourth WYD in history, first on Spanish soil and first with Jacobean pilgrimage. Marked a milestone in linking Catholic youth with the Way of Saint James.', datoRelevante: 'More than 400,000 young people from 100 countries. The motto "I am the way, the truth and the life" (Jn 14:6) remains one of the most remembered of all WYDs.' },
  { papaNombre: 'John Paul II', nombre: 'Pilgrimage to Santiago de Compostela: Jubilee Year', actos: ['Closing of the 45th International Eucharistic Congress in Seville', 'Celebration of the 5th centenary of the discovery of America in Huelva', 'Jacobean pilgrimage in the Holy Year'], contextoHistorico: 'Triple journey: closing of the Eucharistic Congress, 5th centenary of the discovery, Jacobean Holy Year. Spain was the Catholic epicentre of 1993.', datoRelevante: 'John Paul II travelled more than 3,000 km on Spanish soil during these 6 days.' },
  { papaNombre: 'John Paul II', nombre: 'Canonisation of five Spaniards', actos: ['Canonisation of Pedro Poveda, José María Rubio, Genoveva Torres, Ángela de la Cruz and Maravillas of Jesus', 'Meeting with youth at Plaza de Colón', 'Mass at Plaza de Colón with 700,000 people'], contextoHistorico: 'Last visit of John Paul II to Spain, already severely diminished by Parkinson\'s. Despite the evident illness, he delivered the famous phrase: "I too was young like you". Multitudinous emotion.', datoRelevante: '700,000 people at Plaza de Colón. The last time a Pope set foot in Spain before Benedict XVI\'s WYD in 2011.' },
  { papaNombre: 'Benedict XVI', nombre: '5th World Meeting of Families in Valencia', actos: ['Festival of testimonies at the City of Arts and Sciences', 'Closing Mass of the WMF with nearly 1.5 million faithful', 'Meeting with King Juan Carlos I'], contextoHistorico: 'First visit of Benedict XVI to Spain. Context of tension with the Rodríguez Zapatero government over the legalisation of same-sex marriage (2005). Markedly doctrinal papal speech on the family.', datoRelevante: '1.5 million people at the closing Mass, attendance record for a Catholic event in Valencia. The Pope avoided directly mentioning Spanish laws but defended marriage between man and woman as "constitutive of the family".' },
  { papaNombre: 'Benedict XVI', nombre: 'Pilgrimage to Santiago and dedication of the Sagrada Familia', actos: ['Mass before Santiago Cathedral (Holy Compostelan Year)', 'Embrace of the Apostle James', 'Dedication of the Sagrada Familia Basilica as a consecrated temple', 'Proclamation of the Sagrada Familia as "Minor Basilica"', 'Visit to the Nen Déu Charitable-Social Work'], contextoHistorico: 'Symbolic journey: jubilee pilgrimage to Santiago + consecration of Gaudí\'s largest temple, 128 years after its foundation. The dedication was broadcast live worldwide.', datoRelevante: 'Benedict XVI dedicated the Sagrada Familia on 7 November 2010 after 128 years of construction. The Basilica was still (and still is) under works: the central towers are still missing.' },
  { papaNombre: 'Benedict XVI', nombre: 'XXVI World Youth Day (WYD Madrid 2011)', actos: ['Vigil at Cuatro Vientos airfield (historic storm)', 'Final WYD Mass with nearly 2 million young people', 'Stations of the Cross on the Castellana', 'Meeting with young university teachers at El Escorial', 'Visit to contemplative nuns'], contextoHistorico: 'Most multitudinous WYD in Europe since Paris 1997. During Saturday\'s vigil, a historic electric storm forced a temporary interruption of the event. Benedict XVI prayed with the young people "neither wind nor rain can extinguish the light of Christ".', datoRelevante: '1.5-2 million young people from 190 countries. Considered the largest Catholic youth mobilisation in Spain. Estimated cost €50M, financed by donations and private companies.' },
  { papaNombre: 'Francis', nombre: 'Pontificate without a visit to Spain (2013-2025)', actos: [], contextoHistorico: 'Pope Francis died on 21 April 2025 without having visited Spain in his 12-year pontificate. He is the first Pope since Pius XII (1939-1958) not to set foot on Spanish soil during his papacy. The publicly stated reasons were: prioritisation of countries with minority or marginalised Christians, European geographic centrality already "covered" by his predecessors, and an agenda marked by conflicts (Iraq, Mongolia, South Sudan, Kazakhstan).', datoRelevante: 'Bergoglio did visit Portugal on two occasions (WYD Lisbon 2023, Fatima 2017) and France (Marseille 2023 and Strasbourg). Spain was the only major Western European Catholic country he did not visit.' },
  { papaNombre: 'Leo XIV', nombre: 'Apostolic journey to Spain: Madrid, Barcelona, Gran Canaria and Tenerife', actos: ['Arrival and Mass at Cibeles (Madrid)', 'Youth vigil at Plaza de Lima (Bernabéu)', 'Pastoral encounters in Madrid', 'Inauguration of the Tower of Jesus Christ at Sagrada Familia (Barcelona)', 'Act for the centenary of Gaudí\'s architectural birth', 'Migratory meeting in Gran Canaria', 'Closing Mass in Tenerife'], contextoHistorico: 'First major apostolic journey of Leo XIV to Europe. First American Pope (and with Peruvian nationality) to set foot in Spain. Contextually relevant: inauguration of the Tower of Jesus Christ in Barcelona (tallest element of the Sagrada Familia), and migratory focus in the Canaries after the Atlantic route crisis 2020-2025.', datoRelevante: 'First time a papal visit to Spain includes the Canary Islands. Dates chosen after university exams (to facilitate youth attendance) and before the summer tourist peak.' },
]

const FAQ_HISTORIA_EN: FaqHistoria[] = [
  { pregunta: 'How many Popes have visited Spain?', respuesta: 'Three Popes have visited Spain in contemporary times: John Paul II (5 journeys between 1982 and 2003), Benedict XVI (3 journeys between 2006 and 2011) and Leo XIV (journey scheduled for 6-12 June 2026). Francis (2013-2025) was the first Pope in more than half a century not to set foot in Spain during his pontificate.' },
  { pregunta: 'When was the first visit of a Pope to Spain?', respuesta: 'The first apostolic visit of a Pope to Spain took place from 31 October to 9 November 1982, when John Paul II made his celebrated pilgrimage to 16 Spanish cities. It was the 15th apostolic journey of his pontificate.' },
  { pregunta: 'Why did Pope Francis never visit Spain?', respuesta: 'Pope Francis died on 21 April 2025 without visiting Spain during his 12-year pontificate. He prioritised trips to countries with Catholic minorities (Iraq, Mongolia, Kazakhstan), conflict regions (South Sudan) and "periphery" zones according to his own language. He did visit Portugal (WYD 2023, Fatima 2017) and France, but not Spain. He is the first pontiff since Pius XII (1939-1958) not to set foot on Spanish soil during his papacy.' },
  { pregunta: 'How many times did John Paul II visit Spain?', respuesta: 'John Paul II visited Spain 5 times: 1982 (first journey through 16 cities), 1984 (Zaragoza, centenary of the Pilar), 1989 (WYD Santiago de Compostela), 1993 (Jacobean Holy Year, Seville, Huelva) and 2003 (canonisation of 5 Spaniards in Madrid, last visit before his death).' },
  { pregunta: 'When was WYD Madrid 2011?', respuesta: 'The World Youth Day was held in Madrid from 16 to 21 August 2011 with Pope Benedict XVI. It gathered 1.5-2 million young people from 190 countries. It was the most attended WYD in Europe since Paris 1997. The famous vigil of 20 August at the Cuatro Vientos airfield was interrupted by a historic electric storm.' },
  { pregunta: 'Has any Pope ever visited the Canary Islands?', respuesta: 'No. Leo XIV\'s visit in June 2026 will be the first time a Pope sets foot in the Canary Islands. Neither John Paul II nor Benedict XVI ever included the archipelago in their visits to Spain. The Canary focus of the trip is linked to Atlantic migration.' },
  { pregunta: 'When was the last time a Pope was in Santiago de Compostela?', respuesta: 'The last papal visit to Santiago de Compostela was that of Benedict XVI on 6 November 2010, in the Holy Compostelan Year. Before that, John Paul II visited the city three times: 1982 (famous "European Act"), 1989 (IV WYD) and 1993 (Holy Year). Leo XIV does not include Santiago in his 2026 visit.' },
]

export function getVisitas(locale: Locale): VisitaHistorica[] {
  if (locale !== 'en') return visitas
  return visitas.map((v, i) => {
    const tr = VISITAS_EN[i]
    if (!tr) return v
    return {
      ...v,
      papaNombre: tr.papaNombre,
      nombre: tr.nombre,
      contextoHistorico: tr.contextoHistorico,
      datoRelevante: tr.datoRelevante,
      actos: tr.actos ?? v.actos,
      ciudades: tr.ciudades ?? v.ciudades,
    }
  })
}

export function getFaqHistoria(locale: Locale): FaqHistoria[] {
  if (locale === 'en') return FAQ_HISTORIA_EN
  return faqHistoria
}

export { datosAgregados }
export type { VisitaHistorica, FaqHistoria }
