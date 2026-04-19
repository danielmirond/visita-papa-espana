/**
 * Traducción EN del contenido de voluntariado.
 */

import type { Locale } from '@/data/i18n/types'
import {
  areasVoluntariado,
  requisitos,
  beneficios,
  enlacesOficialesVoluntariado,
  type AreaVoluntariado,
  type RequisitoVoluntario,
  type BeneficioVoluntario,
} from '@/data/voluntariado'

const AREAS_EN: AreaVoluntariado[] = [
  { id: 'acogida', titulo: 'Welcome and information', descripcion: 'First contact with pilgrims. Information points at stations, airports and event venues.', perfilBuscado: 'Languages (essential English, Italian or French appreciated), warm manners, time availability.', numPlazasAprox: '1,500-2,000' },
  { id: 'logistica', titulo: 'Event logistics', descripcion: 'Assembly and dismantling of venues, access management, material distribution, crowd flow control.', perfilBuscado: 'Physical condition, over 18, teamwork, availability from the day before the event.', numPlazasAprox: '3,000-4,000' },
  { id: 'liturgia', titulo: 'Liturgy and celebrations', descripcion: 'Support for Eucharistic celebrations: singers, readers, communion distribution, altar server teams.', perfilBuscado: 'Basic liturgical formation, catechists, seminarians, parish choir members.', numPlazasAprox: '800-1,000' },
  { id: 'sanitario', titulo: 'Medical teams', descripcion: 'First-aid stations, care for pilgrims with health problems during mass events.', perfilBuscado: 'Medical, nursing, physiotherapy professionals or students. Basic life support training.', numPlazasAprox: '500-700' },
  { id: 'traduccion', titulo: 'Translation and interpretation', descripcion: 'Support for international groups. Accompaniment of non-Spanish-speaking pilgrims during events.', perfilBuscado: 'C1 level in at least one foreign language. Priority: Italian, English, French, Portuguese, German.', numPlazasAprox: '300-400' },
  { id: 'comunicacion', titulo: 'Communication and social media', descripcion: 'Photography, video, social media teams, media attention, live event coverage.', perfilBuscado: 'Training or experience in communication, journalism, audiovisual, social media management.', numPlazasAprox: '200-300' },
  { id: 'familias', titulo: 'Family and children care', descripcion: 'Rest spaces for families, entertainment for minors, breastfeeding and changing points.', perfilBuscado: 'Experience with minors (camps, catechesis), patience, energy, over 18.', numPlazasAprox: '200-300' },
  { id: 'accesibilidad', titulo: 'Accessibility and reduced-mobility care', descripcion: 'Accompaniment of persons with reduced mobility, management of accessible areas, sign language interpreters.', perfilBuscado: 'Sensitivity, disability training appreciated, sign language highly valued, physical strength for wheelchairs.', numPlazasAprox: '300-400' },
]

const REQUISITOS_EN: RequisitoVoluntario[] = [
  { titulo: 'Over 18 years old', descripcion: 'Some areas (logistics, medical) require legal age. Under 16-17 only with parental authorisation and in specific areas.' },
  { titulo: 'Mandatory prior training', descripcion: 'Between 8 and 16 hours depending on area. Combination of online (Pope Leo XIV background, trip keys) and in-person (protocols, zones, safety).' },
  { titulo: 'Full availability', descripcion: 'Most areas require being available for the 4 days of the trip (6-9 June in Madrid, then by city) or at least the 2 days of the assigned event.' },
  { titulo: 'Commitment and punctuality', descripcion: 'Signed attendance commitment. Late cancellation affects planned services for thousands of pilgrims.' },
]

const BENEFICIOS_EN: BeneficioVoluntario[] = [
  { titulo: 'Privileged access to events', descripcion: 'Reserved areas for volunteers with direct visibility of the Pope at key moments.' },
  { titulo: 'Official volunteer kit', descripcion: 'T-shirt, cap, backpack and identification credential for the 2026 apostolic visit.' },
  { titulo: 'Meals during shifts', descripcion: 'Food and drinks covered during service shifts, as well as continuous catering.' },
  { titulo: 'Official certificate', descripcion: 'Certificate signed by the Spanish Episcopal Conference attesting to the service rendered. Valid for CVs and pastoral experience.' },
  { titulo: 'International community', descripcion: 'Coexistence with volunteers from all over Spain and the world. An ecclesial experience that leaves a mark.' },
]

export function getAreasVoluntariado(locale: Locale): AreaVoluntariado[] {
  if (locale === 'en') return AREAS_EN
  return areasVoluntariado
}

export function getRequisitos(locale: Locale): RequisitoVoluntario[] {
  if (locale === 'en') return REQUISITOS_EN
  return requisitos
}

export function getBeneficios(locale: Locale): BeneficioVoluntario[] {
  if (locale === 'en') return BENEFICIOS_EN
  return beneficios
}

export { enlacesOficialesVoluntariado }
export type { AreaVoluntariado, RequisitoVoluntario, BeneficioVoluntario }
