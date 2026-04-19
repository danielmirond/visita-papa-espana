/**
 * Traducciones EN de los 9 discursos clave del Papa León XIV.
 * Source of truth: data/discursos.ts (español).
 */

import type { Locale } from '@/data/i18n/types'
import { discursos, tiposDiscurso, type Discurso, type TipoDiscursoLabel } from '@/data/discursos'

type DiscursoTranslation = {
  titulo: string
  lugar: string
  ocasion: string
  resumen: string
  fragmento: string
}

const DISCURSOS_EN: DiscursoTranslation[] = [
  { titulo: 'First greeting from the Vatican Loggia', lugar: 'Central balcony of St. Peter\'s Basilica, Vatican City', ocasion: 'Appearance of the new pontiff after his election', resumen: 'First public words of Pope Leo XIV minutes after his election. Addressed to the crowd gathered in St. Peter\'s Square, the message focused on peace, human dignity and ecclesial communion.', fragmento: 'Peace be with all of you. Thank you, dear brothers, for this gathering. The peace of the risen Christ, an unarmed and disarming peace, humble and persevering. We want to be a synodal Church, a Church that walks, a Church that builds bridges, always open to welcome like this square with open arms.' },
  { titulo: 'Address to the College of Cardinals', lugar: 'Synod Hall, Vatican City', ocasion: 'First audience with the cardinals after the election', resumen: 'The Pope explains for the first time the reason for choosing the name Leo and outlines the programmatic lines of his pontificate: social doctrine, artificial intelligence and continuity with the teaching of Leo XIII.', fragmento: 'I have chosen the name Leo because Pope Leo XIII, with the historic encyclical Rerum Novarum, addressed the social question in the context of the first great industrial revolution. Today the Church offers to all her heritage of social doctrine to respond to another industrial revolution: that of artificial intelligence, which poses new challenges to the defence of human dignity, justice and labour.' },
  { titulo: 'Homily at the Mass for the beginning of the pontificate', lugar: 'St. Peter\'s Square, Vatican City', ocasion: 'Solemn celebration of the beginning of the Petrine ministry', resumen: 'Homily read before 200,000 faithful, 150 official delegations and the College of Cardinals. The Pope develops the idea of the pastor as servant and reaffirms his pastoral programme of unity, service to the poor and care of the common home.', fragmento: 'Peter was not called for his qualities —he was a fisherman, impulsive, fragile— but by the love of the Lord who sought him. This ministry I receive today is not an honour, it is a burden; it is not a power, it is a service; it is not a privilege, it is a vocation to give my life for my brothers, especially for the smallest, the poorest, the most forgotten.' },
  { titulo: 'First general audience', lugar: 'St. Peter\'s Square, Vatican City', ocasion: 'Start of the weekly catechesis cycle of the pontificate', resumen: 'The Pope inaugurates his Wednesday general audiences with a catechesis on Christian hope and announces a cycle dedicated to "The names of God in the Bible".', fragmento: 'Christian hope is not cheap optimism or psychological projection. It is the certainty that Christ has conquered death and walks with us. That is why we do not fear the darkness of the world: look at the stars, they are the same ones our ancestors saw, the same God who spoke to them speaks to us today.' },
  { titulo: 'Message to the G7 on artificial intelligence', lugar: 'Sent to the G7 in Rome, Vatican City', ocasion: 'Vatican participation in the G7 summit on AI', resumen: 'Following the lead of Pope Francis\'s 2024 message to the G7, Leo XIV insists on the need for international governance of AI centred on human dignity. One of the first major programmatic interventions of his pontificate.', fragmento: 'Artificial intelligence cannot make decisions affecting life and human dignity without responsible human oversight. No machine should decide who lives and who dies, who works and who is discarded, who is protected and who is abandoned. Dignity is not computed.' },
  { titulo: 'Message for the World Day of Migrants and Refugees', lugar: 'Vatican City', ocasion: '111th World Day of Migrants and Refugees', resumen: 'First major pontifical message on migration. Draws on his pastoral experience in Chiclayo and links the migration question to social doctrine, preparing the ground for his visit to the Canary Islands in 2026.', fragmento: 'For thirty years I lived in northern Peru, a land marked by the continuous movement of people in search of life. I have understood that no wall is higher than human dignity, and that migration, before being a political problem, is a concrete face of Christ knocking at our door.' },
  { titulo: 'Urbi et Orbi Christmas Message', lugar: 'Central Loggia of St. Peter\'s, Vatican City', ocasion: 'First Christmas as pontiff', resumen: 'First Urbi et Orbi message of the pontificate. Tour of the main open conflicts on the planet (Ukraine, Gaza, Sudan, Myanmar, Haiti) and call for unarmed peace. Concludes with the apostolic blessing granting the plenary indulgence.', fragmento: 'On this day when God has become a child, when omnipotence has chosen fragility, we look to Bethlehem. We also look to today\'s Bethlehems: Ukraine, Gaza, Sudan, Myanmar, Haiti, Congo. Children born among rubble. Mothers giving birth in refugee camps. For all of them we ask for unarmed and disarming peace.' },
  { titulo: 'Message for the 59th World Day of Peace', lugar: 'Vatican City', ocasion: 'Solemnity of Mary, Mother of God', resumen: 'First message for the World Day of Peace of the pontificate. Title: "Disarm words, disarm the earth". Reflection on public language, disinformation, generative AI and consequences in real conflicts.', fragmento: 'Before bombs fall, words fall: those that dehumanise, that delegitimise, that morally prepare violence. Disarming words is the first step to disarming the earth. And this also applies to the new forms of synthetic language that artificial intelligence generates with astonishing ease.' },
  { titulo: 'Annual address to the Roman Curia', lugar: 'Sala Clementina, Apostolic Palace', ocasion: 'Christmas greetings to the Roman Curia', resumen: 'First annual address to the Curia. Marks the reformist tone of continuity with Francis: simplicity, decentralisation and service. Introduces the reform of three dicasteries and announces the first apostolic exhortation Dilexi Te.', fragmento: 'A Curia that does not serve has no reason to exist. May we not be courtiers but collaborators of the Successor of Peter and servants of the particular churches. Reform has not ended: it will continue, not out of activism, but because the Church is always on the way of conversion.' },
]

// Tipos de discurso — labels EN
const TIPOS_DISCURSO_EN: TipoDiscursoLabel[] = [
  { id: 'saludo', label: 'Greetings', icon: '🕊️' },
  { id: 'discurso', label: 'Speeches', icon: '📜' },
  { id: 'homilia', label: 'Homilies', icon: '✝️' },
  { id: 'angelus', label: 'Angelus', icon: '🙏' },
  { id: 'urbi-et-orbi', label: 'Urbi et Orbi', icon: '🌍' },
  { id: 'mensaje', label: 'Messages', icon: '📨' },
  { id: 'audiencia', label: 'General audiences', icon: '👥' },
  { id: 'carta-apostolica', label: 'Apostolic letters', icon: '📄' },
]

export function getDiscursos(locale: Locale): Discurso[] {
  if (locale !== 'en') return discursos
  return discursos.map((d, i) => {
    const tr = DISCURSOS_EN[i]
    if (!tr) return d
    return { ...d, titulo: tr.titulo, lugar: tr.lugar, ocasion: tr.ocasion, resumen: tr.resumen, fragmento: tr.fragmento }
  })
}

export function getTiposDiscurso(locale: Locale): TipoDiscursoLabel[] {
  if (locale === 'en') return TIPOS_DISCURSO_EN
  return tiposDiscurso
}

export { discursos, tiposDiscurso }
export type { Discurso, TipoDiscursoLabel }
