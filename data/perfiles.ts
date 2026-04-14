export interface VisitorProfile {
  slug: string
  title: string
  emoji: string
  description: string
  tips: string[]
  essentials: string[]
  warnings: string[]
  affiliateIds: string[]
}

export const profiles: VisitorProfile[] = [
  {
    slug: 'familias',
    title: 'Familias con niños',
    emoji: '',
    description: 'Guía para disfrutar de la visita papal con los más pequeños. Consejos prácticos para que toda la familia viva una experiencia inolvidable.',
    tips: [
      'Elige actos de duración corta o con buen acceso (evita las vigilias nocturnas con niños pequeños)',
      'La Misa de Corpus Christi en Cibeles tendrá pantallas gigantes — podéis verla sin estar en primera fila',
      'Llegad temprano para elegir un buen sitio con espacio para moverse',
      'Llevad entretenimiento para las esperas: libros, cuadernos para colorear',
      'Los niños menores de 3 años no necesitan inscripción individual',
      'Identifica las salidas de emergencia y punto de encuentro familiar',
      'Las sillas de paseo pueden ser incómodas en multitudes — valorad una mochila portabebés',
    ],
    essentials: [
      'Protección solar para niños (crema SPF50+, gorra, gafas)',
      'Agua abundante (mínimo 1 litro por niño)',
      'Snacks y comida ligera',
      'Pañales y toallitas si es necesario',
      'Ropa cómoda y de recambio',
      'Batería externa para el móvil',
      'Pulsera identificativa con nombre y teléfono de los padres',
    ],
    warnings: [
      'Los eventos masivos pueden asustar a niños pequeños por el ruido y las multitudes',
      'No hay zonas infantiles habilitadas en los actos',
      'Las vigilias nocturnas terminan tarde — valorad si es adecuado para vuestra familia',
      'El calor de junio puede ser intenso — hidratación constante',
    ],
    affiliateIds: ['booking-madrid', 'seguro-viaje'],
  },
  {
    slug: 'mayores',
    title: 'Personas mayores',
    emoji: '',
    description: 'Consejos para que las personas mayores o con movilidad limitada puedan participar cómodamente en los actos de la visita papal.',
    tips: [
      'Solicita acceso preferente al inscribirte si tienes movilidad reducida',
      'Los actos en recintos cerrados (Bernabéu, Movistar Arena, Sagrada Familia) tienen asientos',
      'Para los actos al aire libre, lleva una silla plegable ligera',
      'Evita las zonas más concurridas — las pantallas gigantes permiten ver desde más lejos',
      'El transporte público reforzado incluirá mejoras de accesibilidad',
      'Madruga para evitar colas largas bajo el sol',
      'Pide ayuda a los voluntarios — estarán identificados con chalecos',
    ],
    essentials: [
      'Medicación habitual (para varios días por precaución)',
      'Silla plegable ligera para actos al aire libre',
      'Calzado muy cómodo y ya usado',
      'Sombrero o parasol',
      'Agua abundante',
      'Teléfono cargado con número de emergencias guardado',
      'Cojín para sentarse en gradas',
    ],
    warnings: [
      'Las temperaturas en junio en Madrid pueden superar los 35°C',
      'Las esperas pueden ser de varias horas — planifica descansos',
      'Algunas zonas tienen pavimento irregular',
      'En Canarias la humedad puede ser alta — lleva ropa transpirable',
    ],
    affiliateIds: ['booking-madrid', 'seguro-viaje', 'renfe'],
  },
  {
    slug: 'internacional',
    title: 'Visitantes internacionales',
    emoji: '',
    description: 'Todo lo que necesitas saber si vienes del extranjero a vivir la visita del Papa León XIV a España.',
    tips: [
      'Los ciudadanos de la UE solo necesitan DNI o pasaporte. Otros países pueden necesitar visado',
      'España usa el euro (€). Las tarjetas de crédito/débito son aceptadas en casi todos los sitios',
      'El idioma oficial es el español. En Barcelona también se habla catalán',
      'La hora oficial es CET (UTC+1) en la Península y WET (UTC+0) en Canarias',
      'Los enchufes son tipo F (europeo continental, 230V)',
      'El agua del grifo es potable en todas las ciudades',
      'Descarga la app de metro/transporte de cada ciudad antes de llegar',
      'El 112 es el número de emergencias universal en España',
    ],
    essentials: [
      'Pasaporte o DNI europeo en vigor',
      'Tarjeta sanitaria europea (ciudadanos UE) o seguro de viaje',
      'Adaptador de enchufes si es necesario',
      'Tarjeta SIM española o roaming activado',
      'App de traducción offline (Google Translate con español descargado)',
      'Copia digital de documentos en el móvil',
      'Tarjeta de crédito/débito sin comisiones en el extranjero',
    ],
    warnings: [
      'El jet lag puede afectar si vienes de América u Asia — llega con antelación',
      'Los horarios españoles son distintos: se come a las 14h y se cena a las 21h',
      'Cuidado con los carteristas en zonas turísticas de Madrid y Barcelona',
      'Reserva alojamiento YA — la demanda internacional será enorme',
    ],
    affiliateIds: ['booking-madrid', 'booking-barcelona', 'skyscanner-canarias', 'seguro-viaje'],
  },
  {
    slug: 'movilidad-reducida',
    title: 'Personas con movilidad reducida',
    emoji: '',
    description: 'Información sobre accesibilidad y adaptaciones para personas con movilidad reducida durante la visita papal.',
    tips: [
      'Indica tus necesidades de accesibilidad al inscribirte en los actos',
      'Se habilitarán zonas reservadas para sillas de ruedas en todos los actos públicos',
      'Los voluntarios de la organización podrán asistirte — solicita ayuda al llegar',
      'El Metro de Madrid tiene ascensores en la mayoría de estaciones (consulta plano accesible)',
      'Los actos en el Bernabéu y Movistar Arena tienen accesos adaptados',
      'Solicita tarjeta de estacionamiento para PMR si llegas en coche',
      'Infórmate de las rutas accesibles antes de ir — evita zonas con escaleras o adoquines',
    ],
    essentials: [
      'Documentación de discapacidad o certificado de movilidad reducida',
      'Batería de repuesto para silla eléctrica si la usas',
      'Cojín antiescaras para esperas largas',
      'Parasol o sombrilla enganchable',
      'Agua y comida accesible sin tener que levantarte',
      'Teléfono con contacto de emergencia en acceso rápido',
    ],
    warnings: [
      'No todos los accesos están adaptados — informa previamente a la organización',
      'Las multitudes pueden dificultar la movilidad — llega con mucha antelación',
      'El pavimento de algunas zonas históricas (Vegueta, Almudena) puede ser irregular',
      'En Canarias, Arguineguín tiene acceso limitado para sillas de ruedas',
    ],
    affiliateIds: ['booking-madrid', 'seguro-viaje', 'renfe'],
  },
]

export function getProfileBySlug(slug: string): VisitorProfile | undefined {
  return profiles.find((p) => p.slug === slug)
}
