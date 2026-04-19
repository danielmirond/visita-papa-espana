/**
 * Traducciones EN de las 20 frases célebres del Papa León XIV.
 * Source of truth: data/frasesPapa.ts (español).
 */

import type { Locale } from '@/data/i18n/types'
import { frases, TEMAS_FRASE, type Frase, type TemaFrase } from '@/data/frasesPapa'

type FraseTranslation = { texto: string; ocasion: string; fuente: string }

// Se mantiene el orden exacto de data/frasesPapa.ts (índice 0-19)
const FRASES_EN: FraseTranslation[] = [
  // Paz
  { texto: 'The peace of the risen Christ, an unarmed and disarming peace, humble and persevering.', ocasion: 'First greeting from the Vatican Loggia', fuente: 'Vatican.va' },
  { texto: 'Before bombs fall, words fall: words that dehumanise, that delegitimise, that morally prepare violence. Disarming words is the first step to disarming the earth.', ocasion: 'Message for the World Day of Peace 2026', fuente: 'Vatican.va' },
  { texto: 'No war is holy. Every war is a defeat for humanity, even one disguised as legitimate defence when it forgets civilian faces.', ocasion: 'Urbi et Orbi, Christmas 2025', fuente: 'Vatican.va' },
  // Migraciones
  { texto: 'No wall is higher than human dignity.', ocasion: 'Message for the World Day of Migrants and Refugees', fuente: 'Vatican.va' },
  { texto: 'Migration, before being a political issue, is a concrete face of Christ knocking at our door.', ocasion: 'Message for the World Day of Migrants and Refugees', fuente: 'Vatican.va' },
  { texto: 'For thirty years I lived in northern Peru, a land marked by the continuous movement of people in search of life. The migrant is not a number: he is a brother with a name, a history, a mother waiting for him.', ocasion: 'Meeting with Latin American bishops', fuente: 'Vatican News' },
  // IA
  { texto: 'Artificial intelligence cannot make decisions affecting life and human dignity without responsible human oversight. Dignity is not computed.', ocasion: 'Message to the G7 on AI', fuente: 'Vatican.va' },
  { texto: 'I have chosen the name Leo because Leo XIII addressed the social question in the context of the first great industrial revolution. Today we respond to another industrial revolution: that of artificial intelligence.', ocasion: 'Address to the College of Cardinals', fuente: 'Vatican.va' },
  { texto: 'Let us not fear machines. Let us fear algorithms that learn to imitate compassion without feeling it, and men who abdicate their conscience by delegating it to code.', ocasion: 'Address to the UN General Assembly', fuente: 'Vatican News' },
  // Doctrina social
  { texto: 'The Church offers to all her heritage of social doctrine to respond to the new challenges of human dignity, justice and labour.', ocasion: 'Address to the College of Cardinals', fuente: 'Vatican.va' },
  { texto: 'An economy that discards people is not Christian economy, even if preached on Sundays. The social Gospel starts at the bank receipt.', ocasion: 'Conference with the Centesimus Annus Foundation', fuente: "L'Osservatore Romano" },
  // Pobreza y caridad
  { texto: 'The poor are not a problem of the Church: they are the heart of the Church. When we forget them, we forget Christ himself.', ocasion: 'World Day of the Poor', fuente: 'Vatican.va' },
  { texto: 'Peter was not called for his qualities but because the Lord loved him. This ministry I receive is a vocation to give my life for my brothers, especially the smallest.', ocasion: 'Homily for the beginning of the pontificate', fuente: 'Vatican.va' },
  // Familia
  { texto: 'The family is not an institution to be preserved: it is a vocation to be celebrated. Wherever two people love each other, God speaks.', ocasion: 'Audience with the Pontifical Academy for the Family', fuente: 'Vatican News' },
  // Unidad eclesial
  { texto: 'In illo uno unum — in him who is one, let us be one. This is my motto and my programme: the unity of the Church, not as uniformity, but as a symphony of the Spirit.', ocasion: 'Address to the College of Cardinals', fuente: 'Vatican.va' },
  { texto: 'Whoever uses the liturgy as an identity banner has not understood that the liturgy is an encounter with Christ, not an ideological trench.', ocasion: 'Letter to bishops on liturgy', fuente: 'Vatican.va' },
  // Sinodalidad
  { texto: 'We want to be a synodal Church, a Church that walks, a Church that builds bridges, always open to welcome as this square with its open arms.', ocasion: 'First greeting from the Vatican Loggia', fuente: 'Vatican.va' },
  { texto: 'Listening is not waiting for your turn to speak: it is letting the other modify my own heart. Synodality is this listening made method.', ocasion: 'Meeting with the Permanent Synod Assembly', fuente: 'Vatican News' },
  // Juventud
  { texto: 'Do not be afraid to open wide the doors to Christ. It is not a worn-out phrase: it is a renewed urgency for every generation that begins.', ocasion: 'Vigil with young people in Rome', fuente: 'Vatican News' },
  // Mujer
  { texto: 'A Church without women is a body without memory. Without their talent, their prayer and their pastoral leadership, it would simply cease to be Church.', ocasion: 'Audience with major superiors', fuente: 'Vatican News' },
]

const TEMAS_FRASE_EN: { id: TemaFrase; label: string; icon: string; desc: string }[] = [
  { id: 'paz', label: 'Peace', icon: '🕊️', desc: 'Unarmed peace, war and diplomacy' },
  { id: 'migraciones', label: 'Migration', icon: '🌍', desc: 'Welcome, dignity and borders' },
  { id: 'inteligencia-artificial', label: 'Artificial intelligence', icon: '🤖', desc: 'AI, ethics and human dignity' },
  { id: 'doctrina-social', label: 'Social doctrine', icon: '⚖️', desc: 'Work, economy, inequality' },
  { id: 'pobreza-caridad', label: 'Poverty and charity', icon: '🤲', desc: 'The poor, heart of the Church' },
  { id: 'familia', label: 'Family', icon: '👨‍👩‍👧‍👦', desc: 'Marriage, children, home' },
  { id: 'unidad-eclesial', label: 'Ecclesial unity', icon: '⛪', desc: 'Communion, liturgy, dialogue' },
  { id: 'sinodalidad', label: 'Synodality', icon: '🧭', desc: 'A listening, journeying Church' },
  { id: 'juventud', label: 'Youth', icon: '🌱', desc: 'Young people and the future of the Church' },
  { id: 'mujer', label: 'Women in the Church', icon: '♀️', desc: 'Talent, leadership, memory' },
]

export function getFrases(locale: Locale): Frase[] {
  if (locale !== 'en') return frases
  return frases.map((f, i) => {
    const tr = FRASES_EN[i]
    if (!tr) return f
    return { ...f, texto: tr.texto, ocasion: tr.ocasion, fuente: tr.fuente }
  })
}

export function getTemasFrase(locale: Locale) {
  if (locale === 'en') return TEMAS_FRASE_EN
  return TEMAS_FRASE
}

export { frases, TEMAS_FRASE }
export type { Frase, TemaFrase }
