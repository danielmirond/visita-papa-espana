/**
 * Traducción EN de razonesEleccion, lemasPrevios, faqLema de /alzad-la-mirada.
 * Las traducciones del versículo ya están en data/alzadLaMirada.ts.
 */

import type { Locale } from '@/data/i18n/types'
import {
  razonesEleccion,
  lemasPrevios,
  faqLema,
  lemaData,
  traduccionesLema,
  type RazonEleccion,
  type FaqLema,
} from '@/data/alzadLaMirada'

const RAZONES_EN: RazonEleccion[] = [
  { titulo: 'A call to hope in a secular context', descripcion: 'Spain is going through an accelerated process of dechristianisation. "Lift up your eyes" invites Spanish Catholics —and society as a whole— not to be reduced to resignation or apathy, but to recognise the signs of hope and the maturity of the evangelising mission even in an environment perceived as hostile.' },
  { titulo: 'Continuity with Leo XIV and Social Doctrine', descripcion: 'The motto connects with the magisterium of Pope Leo XIV: to look beyond the short economic, technological and political term to attend to the real needs of people. "Lifting up the eyes" is the gesture that today\'s social question demands in the face of artificial intelligence, migration and inequality.' },
  { titulo: 'Samaritan and migrant dimension', descripcion: 'The passage takes place in Samaria, outside Judea, with a woman —a foreigner— as the first missionary of her people. Leo XIV\'s visit includes the Canary Islands because of their status as an Atlantic migratory gateway: the Samaritan echo of the passage takes on a very concrete pastoral force.' },
  { titulo: 'Marian and evangelical simplicity', descripcion: 'The phrase is brief, easy to remember and can be interpreted both in terms of personal prayer ("look up, ask with hope") and community prayer (looking together at the harvest). Its very simplicity makes it translatable into 9 languages without losing force.' },
  { titulo: 'Powerful visual image for communication', descripcion: 'Unlike more abstract mottos, "Lift up your eyes" generates an immediate image —raising one\'s eyes— that works as a visual sign on posters, logos and audiovisuals. The Spanish Episcopal Conference has adopted this image as the graphic sign of the visit.' },
]

const LEMAS_PREVIOS_EN = [
  { papa: 'Benedict XVI', año: 2011, visita: 'WYD Madrid', lema: 'Rooted and built up in Christ, firm in the faith (Col 2:7)' },
  { papa: 'Benedict XVI', año: 2010, visita: 'Santiago and Barcelona', lema: 'Pilgrims in faith / Dedication of the Sagrada Familia' },
  { papa: 'John Paul II', año: 2003, visita: 'Madrid', lema: 'Canonisation of five Spaniards' },
  { papa: 'John Paul II', año: 1989, visita: 'WYD Santiago de Compostela', lema: 'I am the Way, the Truth and the Life (Jn 14:6)' },
  { papa: 'John Paul II', año: 1982, visita: 'First visit to Spain', lema: 'Witness of Jesus Christ, Son of the Living God' },
]

const FAQ_LEMA_EN: FaqLema[] = [
  { pregunta: 'Where does the motto "Lift up your eyes" come from?', respuesta: 'The motto comes from the Gospel of John, chapter 4, verse 35 (Jn 4:35). It is a phrase spoken by Jesus to his disciples at Jacob\'s well, in Samaria, during the encounter with the Samaritan woman. The full version is: "Lift up your eyes and look at the fields, which are already ripe for harvest."' },
  { pregunta: 'What does "Lift up your eyes" mean in the context of the Pope\'s visit?', respuesta: 'It is a call to hope and evangelising mission. It invites the Spanish to recognise that, despite dechristianisation or cultural pessimism, humanity is "ripe for harvest": ready to receive the Gospel. The motto encourages looking beyond the short term, going out of oneself and opening one\'s eyes to the real needs of one\'s neighbour.' },
  { pregunta: 'Who chose the motto "Lift up your eyes" for the papal visit?', respuesta: 'It was chosen by the Spanish Episcopal Conference (CEE) in collaboration with the host dioceses (Madrid, Barcelona, Canary Islands and Tenerife), and approved by the Secretariat of State of the Holy See before becoming official. It is traditional for the episcopal conference of the receiving country to propose the motto to the Pope.' },
  { pregunta: 'In what passage of the Bible does it appear?', respuesta: 'In the Gospel of John, chapter 4, verse 35. The context is the dialogue between Jesus and the Samaritan woman at Jacob\'s well, near the town of Sychar. After speaking with the Samaritan woman, Jesus turns to his disciples and says: "Do you not say: \'Four more months and harvest comes\'? Well, I tell you: Lift up your eyes and look at the fields, which are already ripe for harvest."' },
  { pregunta: 'How is "Lift up your eyes" translated into other languages?', respuesta: 'In Spanish: "Alzad la mirada". In Italian: "Alzate gli occhi". In French: "Levez les yeux". In German: "Erhebt eure Augen". In Portuguese: "Levantai os olhos". In Catalan: "Alceu els ulls". In Galician: "Erguei os ollos". In Basque: "Jaso begiak". In Latin (Vulgate): "Levate oculos vestros". In Koine Greek (original): "Ἐπάρατε τοὺς ὀφθαλμοὺς ὑμῶν".' },
  { pregunta: 'What mottos did previous papal visits to Spain have?', respuesta: 'WYD Madrid 2011 had "Rooted and built up in Christ, firm in the faith" (Col 2:7). WYD Santiago 1989 had "I am the Way, the Truth and the Life" (Jn 14:6). John Paul II\'s first visit in 1982 had "Witness of Jesus Christ, Son of the Living God". Each motto reflects the historical and ecclesial context of the moment.' },
]

export function getRazonesEleccion(locale: Locale): RazonEleccion[] {
  if (locale === 'en') return RAZONES_EN
  return razonesEleccion
}

export function getLemasPrevios(locale: Locale) {
  if (locale === 'en') return LEMAS_PREVIOS_EN
  return lemasPrevios
}

export function getFaqLema(locale: Locale): FaqLema[] {
  if (locale === 'en') return FAQ_LEMA_EN
  return faqLema
}

export { lemaData, traduccionesLema }
export type { RazonEleccion, FaqLema }
