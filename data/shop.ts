import { Product, ProductCategory } from '@/types/shop'

/**
 * Catálogo de la tienda.
 *
 * Modelo mixto:
 * - Afiliación (Amazon, etc.): la mayoría de libros, artículos religiosos.
 *   Tag de Amazon Afiliados: nuus-21 (Daniel Mirón).
 * - Print-on-demand (Printful, Redbubble): merch propio de la visita.
 *   Para activar, crea los productos en el proveedor y pega la URL aquí.
 *
 * Imágenes: usa /images/shop/<slug>.webp. Si no existe, cae en un
 * placeholder generado por el componente ProductCard.
 */
export const products: Product[] = [
  // ============================================================
  // MERCHANDISING OFICIAL DE LA VISITA (Print-on-demand)
  // ============================================================
  {
    id: 'merch-camiseta-alzad-mirada',
    slug: 'camiseta-alzad-la-mirada',
    name: 'Camiseta "Alzad la mirada"',
    description:
      'Camiseta conmemorativa de la visita papal con el lema oficial "Alzad la mirada" y las fechas 6-12 junio 2026. Algodón 100%.',
    price: 22.9,
    images: ['/images/shop/camiseta-lema.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#', // TODO: URL de Printful cuando esté creado
    isOfficialMerch: true,
    tags: ['nuevo', 'destacado'],
  },
  {
    id: 'merch-sudadera-visita',
    slug: 'sudadera-visita-papa-2026',
    name: 'Sudadera "Visita Papa León XIV España 2026"',
    description:
      'Sudadera con capucha conmemorativa. Diseño con el logo oficial y las 4 ciudades de la visita. Algodón orgánico.',
    price: 42.9,
    images: ['/images/shop/sudadera-visita.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#',
    isOfficialMerch: true,
    tags: ['nuevo'],
  },
  {
    id: 'merch-taza-papa',
    slug: 'taza-alzad-la-mirada',
    name: 'Taza conmemorativa',
    description:
      'Taza de cerámica blanca con el lema "Alzad la mirada" y el logo de la visita. Apta para microondas y lavavajillas.',
    price: 14.9,
    images: ['/images/shop/taza.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#',
    isOfficialMerch: true,
  },
  {
    id: 'merch-pegatinas-pack',
    slug: 'pack-pegatinas-visita',
    name: 'Pack de pegatinas de la visita',
    description:
      'Set de 6 pegatinas vinílicas con motivos de la visita papal: logo oficial, cruz, mapa del recorrido, lema.',
    price: 8.9,
    images: ['/images/shop/pegatinas.webp'],
    category: 'merch-visita',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
  },
  {
    id: 'merch-tote-bag',
    slug: 'tote-bag-peregrino',
    name: 'Bolsa de tela del peregrino',
    description:
      'Bolsa de tela 100% algodón reutilizable con diseño exclusivo de la visita. Perfecta para llevar a los actos.',
    price: 12.9,
    images: ['/images/shop/tote-bag.webp'],
    category: 'merch-visita',
    source: 'printful',
    buyUrl: '#',
    isOfficialMerch: true,
  },

  // ============================================================
  // ARTÍCULOS RELIGIOSOS (Amazon afiliados)
  // ============================================================
  {
    id: 'rosario-madera-olivo',
    slug: 'rosario-madera-olivo-tierra-santa',
    name: 'Rosario de madera de olivo de Tierra Santa',
    description:
      'Rosario artesanal de madera de olivo traído de Tierra Santa. Ideal para acompañar la visita papal.',
    price: 19.9,
    images: ['/images/shop/rosario-olivo.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=rosario+madera+olivo+tierra+santa&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'medalla-san-benito',
    slug: 'medalla-san-benito-plata',
    name: 'Medalla de San Benito (plata)',
    description: 'Medalla de San Benito en plata de ley con cadena. Protección espiritual tradicional.',
    price: 29.9,
    images: ['/images/shop/medalla-san-benito.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=medalla+san+benito+plata&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'cruz-pectoral',
    slug: 'cruz-pectoral-madera',
    name: 'Cruz pectoral de madera',
    description:
      'Cruz pectoral de madera tallada artesanalmente. Modelo similar al uso pontifical.',
    price: 24.9,
    images: ['/images/shop/cruz-pectoral.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=cruz+pectoral+madera&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'vela-corpus-christi',
    slug: 'vela-liturgica-corpus',
    name: 'Vela litúrgica para Corpus Christi',
    description:
      'Vela litúrgica artesanal para acompañar la procesión de Corpus Christi del 7 de junio.',
    price: 9.9,
    images: ['/images/shop/vela-liturgica.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=vela+liturgica+procesion&tag=nuus-21',
    isOfficialMerch: false,
    relatedCity: 'madrid',
  },

  // ============================================================
  // LIBROS (Amazon afiliados)
  // ============================================================
  {
    id: 'libro-papa-leon-biografia',
    slug: 'biografia-papa-leon-xiv',
    name: 'Biografía del Papa León XIV',
    description:
      'Biografía autorizada del Papa León XIV, desde su nacimiento en Chicago hasta su elección al pontificado. Lectura imprescindible antes de la visita.',
    price: 21.9,
    images: ['/images/shop/libro-biografia.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=papa+leon+xiv+biografia&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['destacado'],
  },
  {
    id: 'libro-alzad-mirada',
    slug: 'alzad-la-mirada-libro',
    name: 'Alzad la mirada — Reflexiones sobre la visita',
    description:
      'Compendio de reflexiones sobre el lema "Alzad la mirada" y su significado en la Iglesia del siglo XXI.',
    price: 16.9,
    images: ['/images/shop/libro-alzad-mirada.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=alzad+la+mirada+papa&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'libro-encíclica',
    slug: 'encicllica-leon-xiv',
    name: 'Primera encíclica del Papa León XIV',
    description:
      'Texto completo de la primera encíclica del Papa León XIV, con introducción crítica y notas de contexto.',
    price: 14.9,
    images: ['/images/shop/libro-enciclica.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=enciclica+leon+xiv&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'libro-sagrada-familia-gaudi',
    slug: 'sagrada-familia-gaudi-libro',
    name: 'La Sagrada Familia y Gaudí — Edición centenario',
    description:
      'Libro ilustrado sobre la Sagrada Familia con motivo del centenario de Gaudí (2026) y la inauguración de la Torre de Jesús.',
    price: 34.9,
    images: ['/images/shop/libro-gaudi.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=sagrada+familia+gaudi+centenario&tag=nuus-21',
    isOfficialMerch: false,
    relatedCity: 'barcelona',
    tags: ['destacado'],
  },
  {
    id: 'biblia-jerusalen',
    slug: 'biblia-jerusalen',
    name: 'Biblia de Jerusalén',
    description:
      'Edición tapa dura de la Biblia de Jerusalén, la traducción católica de referencia en español.',
    price: 39.9,
    images: ['/images/shop/biblia-jerusalen.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=biblia+de+jerusalen+tapa+dura&tag=nuus-21',
    isOfficialMerch: false,
  },

  // ============================================================
  // SOUVENIRS de las ciudades
  // ============================================================
  {
    id: 'souvenir-bernabeu-visita',
    slug: 'poster-vigilia-bernabeu',
    name: 'Póster Vigilia del Bernabéu',
    description:
      'Póster conmemorativo de la Vigilia juvenil en el Santiago Bernabéu. Impresión giclée en papel de alta calidad.',
    price: 19.9,
    images: ['/images/shop/poster-bernabeu.webp'],
    category: 'souvenirs',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
    relatedCity: 'madrid',
  },
  {
    id: 'souvenir-sagrada-familia',
    slug: 'poster-torre-jesus-sagrada-familia',
    name: 'Póster Torre de Jesús de la Sagrada Familia',
    description:
      'Ilustración conmemorativa de la inauguración de la Torre de Jesucristo (172,5 m) por el Papa el 10 de junio.',
    price: 19.9,
    images: ['/images/shop/poster-sagrada-familia.webp'],
    category: 'souvenirs',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
    relatedCity: 'barcelona',
    tags: ['destacado'],
  },
  {
    id: 'souvenir-canarias',
    slug: 'poster-visita-canarias',
    name: 'Póster Primera visita papal a Canarias',
    description:
      'Póster histórico conmemorando la primera visita de un Papa a las Islas Canarias (Gran Canaria y Tenerife, 11-12 junio).',
    price: 19.9,
    images: ['/images/shop/poster-canarias.webp'],
    category: 'souvenirs',
    source: 'redbubble',
    buyUrl: '#',
    isOfficialMerch: true,
    relatedCity: 'gran-canaria',
  },

  // ============================================================
  // MÁS ARTÍCULOS RELIGIOSOS (Amazon afiliados)
  // ============================================================
  {
    id: 'rosario-meditacion-madera',
    slug: 'rosario-meditacion-madera-premium',
    name: 'Rosario meditación (cuentas de madera)',
    description:
      'Rosario artesanal de cuentas de madera, ideal para meditación y oración durante la visita. Incluye crucifijo metálico y bolsa de tela.',
    price: 18.9,
    images: ['/images/shop/rosario-meditacion.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=rosario+meditacion+cuentas+madera+crucifijo&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'pulsera-rosario',
    slug: 'pulsera-rosario-discreto',
    name: 'Pulsera rosario (discreto)',
    description:
      'Pulsera con cuentas que forman un rosario compacto, fácil de llevar en la muñeca. Ajustable.',
    price: 12.9,
    images: ['/images/shop/pulsera-rosario.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=pulsera+rosario+bracelet+discreto+ajustable&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial', 'nuevo'],
  },
  {
    id: 'estampa-papa-leon',
    slug: 'estampa-papa-leon-xiv-plastificada',
    name: 'Estampa Papa León XIV (plastificada)',
    description:
      'Estampa religiosa con imagen del Papa León XIV, plastificada y resistente al agua. Perfecta para llevar durante los actos.',
    price: 3.9,
    images: ['/images/shop/estampa-papa.webp'],
    category: 'religioso',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=estampa+papa+leon+xiv+plastificada&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial', 'oferta'],
  },
  {
    id: 'biblia-bolsillo',
    slug: 'biblia-bolsillo-reina-valera',
    name: 'Biblia de bolsillo (Reina Valera)',
    description:
      'Biblia compacta y ligera, perfecta para llevar durante la visita. Encuadernación resistente y letra clara.',
    price: 15.9,
    images: ['/images/shop/biblia-bolsillo.webp'],
    category: 'libros',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=biblia+bolsillo+reina+valera+compacta&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },

  // ============================================================
  // EQUIPAJE Y VIAJE (Amazon afiliados)
  // ============================================================
  {
    id: 'mochila-30l-peregrino',
    slug: 'mochila-30l-viaje-peregrino',
    name: 'Mochila de viaje 30L',
    description:
      'Mochila de 30 litros con múltiples compartimentos, ideal para acudir a los actos de la visita. Correas ergonómicas y material resistente al agua.',
    price: 49.9,
    images: ['/images/shop/mochila-30l.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=mochila+30l+viaje+peregrino+resistente+agua&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'botas-senderismo-impermeables',
    slug: 'botas-senderismo-impermeables-mujer',
    name: 'Botas de senderismo impermeables (mujer)',
    description:
      'Botas impermeables y cómodas para caminar durante largas jornadas. Suela antideslizante, perfectas para terrenos urbanos y naturales.',
    price: 89.9,
    images: ['/images/shop/botas-impermeables-mujer.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=botas+senderismo+impermeables+mujer&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'botas-senderismo-hombre',
    slug: 'botas-senderismo-impermeables-hombre',
    name: 'Botas de senderismo impermeables (hombre)',
    description:
      'Botas robustas y cómodas para múltiples días de caminata. Construcción reforzada con suela de agarre superior.',
    price: 89.9,
    images: ['/images/shop/botas-impermeables-hombre.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=botas+senderismo+impermeables+hombre&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'maleta-carry-on',
    slug: 'maleta-carry-on-viaje',
    name: 'Maleta carry-on (55x40x20 cm)',
    description:
      'Maleta de mano ligera que cumple estándares de todas las aerolíneas. Ruedas de 360º y asa telescópica.',
    price: 59.9,
    images: ['/images/shop/maleta-carryon.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=maleta+carry+on+55x40x20+viaje&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'sombrero-panama',
    slug: 'sombrero-panama-viaje',
    name: 'Sombrero panamá',
    description:
      'Sombrero transpirable de paja natural, protección contra el sol y el calor. Ligero y plegable.',
    price: 24.9,
    images: ['/images/shop/sombrero-panama.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=sombrero+panama+viaje+paja+natural&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'paraguas-invertido',
    slug: 'paraguas-invertido-viaje',
    name: 'Paraguas invertido',
    description:
      'Diseño reversible que mantiene el agua dentro. Ideal para días lluviosos con las manos ocupadas.',
    price: 19.9,
    images: ['/images/shop/paraguas-invertido.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=paraguas+invertido+reversible&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },

  // ============================================================
  // SALUD Y BIENESTAR (Amazon afiliados)
  // ============================================================
  {
    id: 'bloqueador-solar-spf50',
    slug: 'bloqueador-solar-spf50-resistente',
    name: 'Bloqueador solar SPF 50+',
    description:
      'Protección solar profesional, resistente al agua durante 80 minutos. Recomendado para días largos al aire libre.',
    price: 12.9,
    images: ['/images/shop/bloqueador-solar.webp'],
    category: 'salud-bienestar',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=bloqueador+solar+spf+50+resistente+agua&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'calcetines-merino',
    slug: 'calcetines-merino-senderismo',
    name: 'Calcetines de lana merino',
    description:
      'Calcetines térmicos de lana merino, evitan ampollas y mantienen los pies secos durante jornadas largas.',
    price: 18.9,
    images: ['/images/shop/calcetines-merino.webp'],
    category: 'salud-bienestar',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=calcetines+lana+merino+senderismo&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'ibuprofen-caja',
    slug: 'ibuprofen-400mg-caja',
    name: 'Ibuprofeno 400mg (caja de 20)',
    description:
      'Analgésico de rápida acción para dolores y molestias. Formulación segura y efectiva.',
    price: 4.9,
    images: ['/images/shop/ibuprofen.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=ibuprofen+400mg+caja+20&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'vendaje-tobillo',
    slug: 'vendaje-elastico-tobillo',
    name: 'Vendaje elástico para tobillo',
    description:
      'Soporte compresivo para prevenir torceduras durante caminatas. Material transpirable y ajustable.',
    price: 7.9,
    images: ['/images/shop/vendaje-tobillo.webp'],
    category: 'salud-bienestar',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=vendaje+elastico+tobillo+compresivo&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'parches-ampollas',
    slug: 'parches-ampollas-blister',
    name: 'Parches para ampollas',
    description:
      'Protección efectiva para ampollas, alivia el dolor inmediatamente. Transpirable y resistente al agua.',
    price: 6.9,
    images: ['/images/shop/parches-ampollas.webp'],
    category: 'salud-bienestar',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=parches+ampollas+blister&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'almohada-cervical',
    slug: 'almohada-cervical-viaje',
    name: 'Almohada cervical de viaje',
    description:
      'Almohada ergonómica para mantener el cuello alineado durante el viaje y el descanso. Memoria de espuma.',
    price: 14.9,
    images: ['/images/shop/almohada-cervical.webp'],
    category: 'salud-bienestar',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=almohada+cervical+viaje+memoria&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'electrolitos-bebida',
    slug: 'electrolitos-polvo-bebida',
    name: 'Electrolitos en polvo',
    description:
      'Bebida isotónica de rápida rehidratación para actividad física intensa. Sabor agradable, sin colorantes.',
    price: 9.9,
    images: ['/images/shop/electrolitos.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=electrolitos+polvo+bebida+isotonica&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'crema-antiinflamatoria',
    slug: 'crema-antiinflamatoria-muscular',
    name: 'Crema antiinflamatoria muscular',
    description:
      'Alivio rápido para dolores musculares y contracturas. Absorción rápida, sin olor fuerte.',
    price: 8.9,
    images: ['/images/shop/crema-antiinflamatoria.webp'],
    category: 'salud-bienestar',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=crema+antiinflamatoria+muscular&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'linterna-frontal-led',
    slug: 'linterna-frontal-led-vigilias',
    name: 'Linterna frontal LED',
    description:
      'Iluminación manos libres para vigilias nocturnas. Batería de larga duración, ajustable.',
    price: 16.9,
    images: ['/images/shop/linterna-frontal.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=linterna+frontal+led+bateria+larga&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'botella-insulated',
    slug: 'botella-insulated-agua-fria',
    name: 'Botella aislante de acero inoxidable',
    description:
      'Mantiene bebidas frías por 24 horas o calientes por 12. Capacidad 500ml, ligera y duradera.',
    price: 24.9,
    images: ['/images/shop/botella-insulated.webp'],
    category: 'viaje',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=botella+aislante+acero+inoxidable+500ml&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },

  // ============================================================
  // TECNOLOGÍA (Amazon afiliados)
  // ============================================================
  {
    id: 'power-bank-20000mah',
    slug: 'power-bank-20000mah-rapido',
    name: 'Power bank 20000 mAh',
    description:
      'Batería externa de alta capacidad para cargar el móvil 5-6 veces. Carga rápida, compatible con cualquier dispositivo.',
    price: 29.9,
    images: ['/images/shop/power-bank.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=power+bank+20000mah+carga+rapida&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial', 'bestseller'],
  },
  {
    id: 'cargador-65w-multipuerto',
    slug: 'cargador-65w-usb-c-multipuerto',
    name: 'Cargador 65W USB-C multipuerto',
    description:
      'Cargador compacto para múltiples dispositivos simultáneamente. Ideal para llevar un solo cable a la visita.',
    price: 34.9,
    images: ['/images/shop/cargador-65w.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=cargador+65w+usb+c+multipuerto&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'cables-usb-c-pack',
    slug: 'cables-usb-c-pack-3',
    name: 'Pack de 3 cables USB-C',
    description:
      'Cables resistentes y duraderos de 2m. Ideales para compartir en grupo o tener repuestos.',
    price: 12.9,
    images: ['/images/shop/cables-usbc.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=cables+usb+c+pack+3+2m&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'auriculares-anker',
    slug: 'auriculares-anker-inalambricos',
    name: 'Auriculares Anker inalámbricos',
    description:
      'Auriculares deportivos con cancelación de ruido y batería de 8 horas. Ajuste seguro para actividad.',
    price: 39.9,
    images: ['/images/shop/auriculares-anker.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=auriculares+anker+inalambricos+cancelacion&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'adaptador-universal-viaje',
    slug: 'adaptador-universal-enchufes',
    name: 'Adaptador universal de enchufes',
    description:
      'Permite usar aparatos españoles en el extranjero y viceversa. Compatible con 200+ países.',
    price: 14.9,
    images: ['/images/shop/adaptador-universal.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=adaptador+universal+enchufes+viaje&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'tripode-movil',
    slug: 'tripode-movil-flexible',
    name: 'Trípode flexible para móvil',
    description:
      'Soporte versátil para capturar fotos y vídeos de la visita desde cualquier ángulo. Peso ligero.',
    price: 12.9,
    images: ['/images/shop/tripode-movil.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=tripode+movil+flexible&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'gps-tracker',
    slug: 'gps-tracker-personal',
    name: 'GPS tracker personal',
    description:
      'Dispositivo de seguimiento GPS para localizar a familiares. Batería de 30 días, aplicación móvil incluida.',
    price: 44.9,
    images: ['/images/shop/gps-tracker.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=gps+tracker+personal+bateria&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'cargador-coche-rapido',
    slug: 'cargador-coche-usb-c-rapido',
    name: 'Cargador de coche USB-C rápido',
    description:
      'Cargador de coche compacto para mantener el móvil cargado durante el viaje. Seguro y fiable.',
    price: 16.9,
    images: ['/images/shop/cargador-coche.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=cargador+coche+usb+c+rapido&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'speaker-bluetooth-portable',
    slug: 'speaker-bluetooth-portatil',
    name: 'Speaker Bluetooth portátil',
    description:
      'Audio de calidad para música en grupo. Impermeable, batería 12 horas, tamaño compacto.',
    price: 34.9,
    images: ['/images/shop/speaker-bluetooth.webp'],
    category: 'tech',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=speaker+bluetooth+portatil+impermeable&tag=nuus-21',
    isOfficialMerch: false,
  },

  // ============================================================
  // NUTRICIÓN Y ENERGÍA (Amazon afiliados)
  // ============================================================
  {
    id: 'barras-proteina-clif',
    slug: 'barras-proteina-clif-pack',
    name: 'Barras de proteína Clif (pack 12)',
    description:
      'Energía natural con ingredientes orgánicos. Ideales para mantener energía durante jornadas largas.',
    price: 19.9,
    images: ['/images/shop/barras-proteina.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=barras+proteina+clif+pack+organico&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'frutos-secos-mezcla',
    slug: 'frutos-secos-mezcla-organica',
    name: 'Mezcla de frutos secos',
    description:
      'Almendras, nueces, avellanas y arándanos deshidratados. Sin sal, sin conservantes.',
    price: 12.9,
    images: ['/images/shop/frutos-secos.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=frutos+secos+mezcla+organica+sin+sal&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'cafe-instantaneo-gourmet',
    slug: 'cafe-instantaneo-gourmet',
    name: 'Café instantáneo gourmet',
    description:
      'Café de calidad premium liofilizado. Sabor completo en cada taza, sin equipamiento adicional.',
    price: 8.9,
    images: ['/images/shop/cafe-instantaneo.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=cafe+instantaneo+gourmet+liofilizado&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'chocolate-energetico',
    slug: 'chocolate-energetico-cacao',
    name: 'Chocolate energético 70% cacao',
    description:
      'Energía concentrada con chocolate de calidad. Rica en antioxidantes, muy sabroso.',
    price: 4.9,
    images: ['/images/shop/chocolate-energetico.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=chocolate+energetico+70+cacao&tag=nuus-21',
    isOfficialMerch: false,
    tags: ['essencial'],
  },
  {
    id: 'bebida-isotonica',
    slug: 'bebida-isotonica-limon',
    name: 'Bebida isotónica (limón)',
    description:
      'Rehidratación rápida con minerales y electrolitos. Sabor refrescante, baja en calorías.',
    price: 6.9,
    images: ['/images/shop/bebida-isotonica.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=bebida+isotonica+limon+minerales&tag=nuus-21',
    isOfficialMerch: false,
  },
  {
    id: 'vitamina-c-efervescente',
    slug: 'vitamina-c-efervescente-pack',
    name: 'Vitamina C efervescente',
    description:
      'Refuerzo inmunológico en tabletas efervescentes. Sabor agradable, absorción rápida.',
    price: 7.9,
    images: ['/images/shop/vitamina-c.webp'],
    category: 'nutricion',
    source: 'amazon',
    buyUrl: 'https://www.amazon.es/s?k=vitamina+c+efervescente+tabletas&tag=nuus-21',
    isOfficialMerch: false,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags?.includes('destacado'))
}
