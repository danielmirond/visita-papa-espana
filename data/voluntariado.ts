/**
 * Información sobre voluntariado para la visita del Papa León XIV a España.
 *
 * Los detalles oficiales (plazas, formación, inscripción) los publica la
 * Conferencia Episcopal Española y las diócesis receptoras. Esta página
 * agrega la información pública disponible y enlaza a los portales oficiales.
 */

export interface AreaVoluntariado {
  id: string
  titulo: string
  descripcion: string
  perfilBuscado: string
  numPlazasAprox: string
}

export const areasVoluntariado: AreaVoluntariado[] = [
  {
    id: 'acogida',
    titulo: 'Acogida e información',
    descripcion:
      'Primer contacto con los peregrinos. Puntos de información en estaciones, aeropuertos y recintos de los eventos.',
    perfilBuscado:
      'Idiomas (inglés imprescindible, italiano o francés valorable), trato cercano, disponibilidad horaria.',
    numPlazasAprox: '1.500-2.000',
  },
  {
    id: 'logistica',
    titulo: 'Logística de eventos',
    descripcion:
      'Montaje y desmontaje de recintos, gestión de accesos, distribución de materiales, control de flujos de personas.',
    perfilBuscado:
      'Condición física, mayor de 18 años, trabajo en equipo, disponibilidad desde el día anterior al evento.',
    numPlazasAprox: '3.000-4.000',
  },
  {
    id: 'liturgia',
    titulo: 'Liturgia y celebraciones',
    descripcion:
      'Apoyo en las celebraciones eucarísticas: cantores, lectores, distribución de la comunión, equipos de monaguillos.',
    perfilBuscado:
      'Formación litúrgica básica, catequistas, seminaristas, miembros de coros parroquiales.',
    numPlazasAprox: '800-1.000',
  },
  {
    id: 'sanitario',
    titulo: 'Equipos sanitarios',
    descripcion:
      'Puestos de primeros auxilios, atención a peregrinos con problemas de salud durante los actos multitudinarios.',
    perfilBuscado:
      'Profesionales o estudiantes de medicina, enfermería, fisioterapia. Formación en soporte vital básico.',
    numPlazasAprox: '500-700',
  },
  {
    id: 'traduccion',
    titulo: 'Traducción e interpretación',
    descripcion:
      'Apoyo a grupos internacionales. Acompañamiento a peregrinos que no hablan español durante los eventos.',
    perfilBuscado:
      'Nivel C1 en al menos un idioma extranjero. Prioritarios: italiano, inglés, francés, portugués, alemán.',
    numPlazasAprox: '300-400',
  },
  {
    id: 'comunicacion',
    titulo: 'Comunicación y redes',
    descripcion:
      'Equipos de fotografía, vídeo, redes sociales, atención a medios, cobertura en directo de los eventos.',
    perfilBuscado:
      'Formación o experiencia en comunicación, periodismo, audiovisuales, gestión de redes.',
    numPlazasAprox: '200-300',
  },
  {
    id: 'familias',
    titulo: 'Atención a familias y niños',
    descripcion:
      'Espacios de descanso para familias, entretenimiento para menores, puntos de lactancia y cambio.',
    perfilBuscado:
      'Experiencia con menores (campamentos, catequesis), paciencia, energía, mayores de 18 años.',
    numPlazasAprox: '200-300',
  },
  {
    id: 'accesibilidad',
    titulo: 'Accesibilidad y atención a PMR',
    descripcion:
      'Acompañamiento a personas con movilidad reducida, gestión de zonas accesibles, intérpretes de lengua de signos.',
    perfilBuscado:
      'Sensibilidad, formación en discapacidad valorable, LSE muy valorada, fuerza física para sillas.',
    numPlazasAprox: '300-400',
  },
]

export interface RequisitoVoluntario {
  titulo: string
  descripcion: string
}

export const requisitos: RequisitoVoluntario[] = [
  {
    titulo: 'Mayor de 18 años',
    descripcion:
      'Algunas áreas (logística, sanitario) requieren mayoría de edad. Menores de 16-17 solo con autorización parental y en áreas específicas.',
  },
  {
    titulo: 'Formación obligatoria previa',
    descripcion:
      'Entre 8 y 16 horas según el área. Combinación online (histórico del Papa León XIV, claves del viaje) y presencial (protocolos, zonas, seguridad).',
  },
  {
    titulo: 'Disponibilidad completa',
    descripcion:
      'La mayoría de áreas requieren estar disponible los 4 días del viaje (6-9 junio en Madrid, después según ciudad) o al menos los 2 días del evento asignado.',
  },
  {
    titulo: 'Compromiso y puntualidad',
    descripcion:
      'Firma de compromiso de asistencia. La cancelación tardía afecta a los servicios planificados para miles de peregrinos.',
  },
]

export interface BeneficioVoluntario {
  titulo: string
  descripcion: string
}

export const beneficios: BeneficioVoluntario[] = [
  {
    titulo: 'Acceso privilegiado a los actos',
    descripcion:
      'Zonas reservadas a voluntarios con visibilidad directa del Papa en los momentos principales.',
  },
  {
    titulo: 'Kit oficial del voluntario',
    descripcion:
      'Camiseta, gorra, mochila y credencial identificativa de la visita apostólica 2026.',
  },
  {
    titulo: 'Manutención durante los turnos',
    descripcion:
      'Comida y bebida cubiertas en los turnos de servicio, así como avituallamiento continuo.',
  },
  {
    titulo: 'Certificado oficial',
    descripcion:
      'Certificado firmado por la Conferencia Episcopal Española acreditativo del servicio prestado. Válido para currículum y experiencias pastorales.',
  },
  {
    titulo: 'Comunidad internacional',
    descripcion:
      'Convivencia con voluntarios de toda España y del resto del mundo. Experiencia eclesial que marca.',
  },
]

export const enlacesOficialesVoluntariado = {
  cee: 'https://conferenciaepiscopal.es',
  conelpapa: 'https://conelpapa.es',
  madrid: 'https://archimadrid.org',
  barcelona: 'https://arqbcn.cat',
  canarias: 'https://diocesisdecanarias.org',
  tenerife: 'https://diocesisdetenerife.es',
}
