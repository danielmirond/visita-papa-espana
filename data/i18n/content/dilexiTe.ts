/**
 * Traducción EN de data/dilexiTe.ts
 */

import type { Locale } from '@/data/i18n/types'
import {
  dilexiTeData,
  temasDilexiTe,
  citasClavesDilexiTe,
  faqDilexiTe,
  type TemaDilexiTe,
  type CitaDilexiTe,
  type FaqDilexiTe,
} from '@/data/dilexiTe'

const DILEXI_TE_DATA_EN = {
  ...dilexiTeData,
  subtitulo: 'Apostolic Exhortation on the love of God and charity to the poor',
  traduccionTitulo: '"I have loved you"',
  autor: 'Pope Leo XIV',
  lugarFirma: 'Vatican City',
  extensionEstimada: '72 pages',
  referenciaBiblica: 'Revelation 3:9',
  citaBiblicaCompleta: '"I have loved you" (Dilexi te) — Revelation 3:9. Words of the glorified Christ to the Church of Philadelphia, taken as a key to the divine love that precedes and sustains all human charity.',
  descripcionGeneral: '"Dilexi Te" is the first apostolic exhortation of Pope Leo XIV. Published on 11 February 2026 —feast of Our Lady of Lourdes and World Day of the Sick—, it takes up and extends Pope Francis\'s encyclical "Dilexit nos" (2024) on the heart of Jesus, but shifting the emphasis from the love received to the love returned: concrete charity to the poor as the natural response to the divine love that precedes us.',
  oficialUrl: 'https://www.vatican.va/content/leo-xiv/en/apost_exhortations/documents/20260211-dilexi-te.html',
}

const TEMAS_DILEXI_TE_EN: TemaDilexiTe[] = [
  { id: 'amor-divino-precede', titulo: 'The love of God that precedes us', descripcion: 'The exhortation begins with divine initiative: the "Dilexi te" of the glorified Christ ("I have loved you") as the ontological precedent of every human response. We do not love in order to deserve love, but because we have already been loved.', parrafosReferencia: '§ 1-24' },
  { id: 'caridad-concreta', titulo: 'Concrete charity to the poor', descripcion: 'Central core of the document (§ 25-78). The Pope describes "charity without spectacle": accompaniment, care, stable structures (Caritas, Manos Unidas, parish communities), but also denunciation of the structural causes of poverty. He quotes extensively from his missionary experience in Peru.', parrafosReferencia: '§ 25-78' },
  { id: 'iglesia-pobre', titulo: 'A poor Church for the poor', descripcion: 'Takes up and deepens a central line of Francis: the Church must live what she preaches. He criticises clerical opulence, insensitive bureaucracy and pastoral distance. Announces concrete measures for the Roman dicasteries.', parrafosReferencia: '§ 79-105' },
  { id: 'pobrezas-nuevas', titulo: 'New poverties of the 21st century', descripcion: 'Expands the concept of poverty beyond the material: forced migration, job insecurity, urban loneliness, digital addictions, discarding of the elderly and disabled, vulnerability to algorithms. Chapter especially cited in analyses.', parrafosReferencia: '§ 106-130' },
  { id: 'conversion-permanente', titulo: 'Permanent conversion of the Church', descripcion: 'Closing of the exhortation: reform is not an episode but a way of being. Call to communities, parishes, movements and dioceses for a permanent self-review in a charitable, synodal and missionary key.', parrafosReferencia: '§ 131-147' },
]

const CITAS_DILEXI_TE_EN: CitaDilexiTe[] = [
  { texto: 'God does not love us because we are good: we are capable of goodness because God has loved us first. This "first" is the secret of Christianity and the root of all authentic charity.', parrafo: '§ 3', contexto: 'Introduction · The love that precedes' },
  { texto: 'Charity without justice is decorative alms. Justice without charity is soulless bureaucracy. Together they are the Gospel turned into structure.', parrafo: '§ 32', contexto: 'Concrete charity · Relationship with social justice' },
  { texto: 'A Church that looks after its accounts and neglects its poor has lost the memory of its Lord. Better humble churches full of life than palaces empty of compassion.', parrafo: '§ 91', contexto: 'Poor Church · Institutional poverty' },
  { texto: 'New poverties do not always have a visible face. There is poverty in the elderly connected to everything and greeted by no one; in the adolescent flooded with content and emptied of meaning; in the worker replaceable by an algorithm.', parrafo: '§ 118', contexto: 'New poverties · Digital loneliness' },
  { texto: 'To convert is not to change a custom: it is to change centre. While we are the centre, the poor will be periphery; when Christ is the centre, the poor will be of the household.', parrafo: '§ 144', contexto: 'Conversion · Closing' },
]

const FAQ_DILEXI_TE_EN: FaqDilexiTe[] = [
  { pregunta: 'What is "Dilexi Te" and what does the name mean?', respuesta: '"Dilexi Te" is the first apostolic exhortation of Pope Leo XIV, published on 11 February 2026. The title means "I have loved you" and comes from Revelation 3:9, where the glorified Christ addresses the Church of Philadelphia. The Pope chose this phrase to emphasise that God\'s love precedes every human response.' },
  { pregunta: 'When was "Dilexi Te" published?', respuesta: 'On 11 February 2026, feast of Our Lady of Lourdes and World Day of the Sick. The choice of date is deliberate: it links the exhortation to the care of the sick and closeness to those who suffer.' },
  { pregunta: 'What is the apostolic exhortation "Dilexi Te" about?', respuesta: 'It is about God\'s love and charity to the poor. It is an extension of Pope Francis\'s encyclical "Dilexit nos" (2024) on the heart of Jesus, but focusing on the concrete dimension of the love returned: structural charity and new forms of poverty in the 21st century.' },
  { pregunta: 'What relationship does "Dilexi Te" have with Francis\'s "Dilexit nos"?', respuesta: 'It is explicitly a continuation. Where "Dilexit nos" (2024) contemplates Christ\'s love ("He loved us"), "Dilexi Te" shifts the focus to the Church\'s response: how to translate that love into concrete charity, welcoming structures and institutional conversion.' },
  { pregunta: 'What are the main topics of "Dilexi Te"?', respuesta: 'Five blocks: (1) the divine love that precedes every human response; (2) concrete charity to the poor; (3) a poor Church for the poor; (4) the new poverties of the 21st century —migration, digital loneliness, discarding of the elderly—; (5) permanent conversion as a way of being for the Church.' },
  { pregunta: 'Where can I read the full text of "Dilexi Te"?', respuesta: 'The full official text is published on Vatican.va in the nine official languages. You can consult it directly at: vatican.va/content/leo-xiv/en/apost_exhortations. It is also distributed in print by the Libreria Editrice Vaticana (LEV).' },
]

export function getDilexiTeData(locale: Locale) {
  if (locale === 'en') return DILEXI_TE_DATA_EN
  return dilexiTeData
}

export function getTemasDilexiTe(locale: Locale): TemaDilexiTe[] {
  if (locale === 'en') return TEMAS_DILEXI_TE_EN
  return temasDilexiTe
}

export function getCitasClavesDilexiTe(locale: Locale): CitaDilexiTe[] {
  if (locale === 'en') return CITAS_DILEXI_TE_EN
  return citasClavesDilexiTe
}

export function getFaqDilexiTe(locale: Locale): FaqDilexiTe[] {
  if (locale === 'en') return FAQ_DILEXI_TE_EN
  return faqDilexiTe
}

export type { TemaDilexiTe, CitaDilexiTe, FaqDilexiTe }
