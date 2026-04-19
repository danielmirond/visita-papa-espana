/**
 * Himno y oración oficiales del viaje apostólico del Papa León XIV a España.
 *
 * NOTA: en el momento de creación de esta página, la CEE no ha publicado
 * aún el himno oficial. Cuando lo haga, actualizar:
 *   - `letra` con la letra oficial (multi-idioma opcional)
 *   - `audioUrl` con el MP3/M4A oficial
 *   - `videoUrl` con el embed de YouTube oficial
 *
 * Mientras tanto, dejamos una ficha informativa que cumple función SEO
 * y se completa automáticamente cuando se publique.
 */

export interface GrabacionLugar {
  catedral: string
  ciudad: string
}

export interface HimnoData {
  titulo: string
  tituloCompleto: string
  lema: string
  autores: string[]
  productor: string
  impulsor: string
  fechaGrabacion: string
  fechaPublicacion: string
  numVoces: number
  lugaresGrabacion: GrabacionLugar[]
  destinoIngresos: string
  letra: string | null // null mientras no se publique oficial
  audioUrl: string | null
  videoUrl: string | null        // URL para <iframe src=...> (formato /embed/)
  videoUrlShare: string | null   // URL canónica para compartir (formato /watch?v=)
  spotifyUrl: string | null
  descripcion: string
  estadoPublicacion: 'publicado' | 'pendiente'
  fuentes: string[]
}

export const himnoOficial: HimnoData = {
  titulo: 'Alza la mirada',
  tituloCompleto: 'Alza la mirada — himno oficial del viaje apostólico del Papa León XIV a España',
  lema: 'Alza la mirada',
  autores: [
    'Marcos Ricbour',
    'Javi Caño',
    'Toño Casado',
    // Según Alfa y Omega son 11 compositores en total (colaboración colectiva)
  ],
  productor: 'Pablo Cebrián',
  impulsor: 'VIVAFE (Vicaría de Evangelización y Fe)',
  fechaGrabacion: '2026-03-21',
  fechaPublicacion: '2026-04-17',
  numVoces: 1700,
  lugaresGrabacion: [
    { catedral: 'Catedral de Santa María la Real de la Almudena', ciudad: 'Madrid' },
    { catedral: 'Basílica de la Sagrada Familia', ciudad: 'Barcelona' },
    { catedral: 'Catedral de Santa Ana', ciudad: 'Las Palmas de Gran Canaria' },
    { catedral: 'Catedral de La Laguna', ciudad: 'San Cristóbal de La Laguna (Tenerife)' },
  ],
  destinoIngresos:
    'Los ingresos de reproducciones en plataformas de streaming se destinan íntegramente a las obras sociales de la Iglesia en España.',
  letra: null, // Letra oficial no publicada en texto abierto — pendiente
  audioUrl: null,
  // URL para embed en iframe (formato /embed/ID)
  videoUrl: 'https://www.youtube.com/embed/aAPGJxp4dUA',
  // URL canónica de YouTube para compartir
  videoUrlShare: 'https://www.youtube.com/watch?v=aAPGJxp4dUA',
  spotifyUrl: null,
  descripcion:
    'Himno oficial del viaje apostólico del Papa León XIV a España (6-12 junio 2026), titulado «Alza la mirada» en referencia al lema del viaje (Juan 4,35). Una producción colectiva de 11 compositores impulsada por VIVAFE y producida por Pablo Cebrián. El himno se grabó el 21 de marzo de 2026 de forma simultánea en cuatro catedrales españolas con la participación de más de 1.700 voces de voluntarios de las cuatro diócesis receptoras. Publicado el 17 de abril de 2026 en todas las plataformas de streaming.',
  estadoPublicacion: 'publicado',
  fuentes: [
    'https://revistaecclesia.es/alza-la-mirada-ya-esta-aqui-el-himno-oficial-de-la-visita-de-leon-xiv-a-espana/',
    'https://alfayomega.es/asi-suena-el-himno-oficial-del-viaje-del-papa-a-espana/',
  ],
}

export interface OracionData {
  titulo: string
  texto: string
  descargaPdf: string | null
  descripcion: string
}

export const oracionOficial: OracionData = {
  titulo: 'Oración por la visita del Santo Padre',
  descripcion:
    'Esta oración se reza en todas las parroquias españolas durante los meses previos a la visita del Papa León XIV. Es una súplica por los frutos espirituales del viaje, por las ciudades que lo acogen, por los peregrinos y por la Iglesia universal.',
  texto: `Dios, Padre de misericordia,
que has llamado al Papa León XIV
a ser pastor universal de tu Iglesia,
bendice su visita a nuestra tierra.

Concede a España
acoger con alegría al Sucesor de Pedro,
renovar la fe de nuestros padres
y ser testigos valientes del Evangelio.

Que esta visita fortalezca
la comunión entre los pueblos,
la esperanza en los jóvenes,
la caridad con los pobres
y la misión evangelizadora de la Iglesia.

Por intercesión de Santa María,
Patrona de nuestro pueblo,
y de todos los santos que en esta tierra
te dieron gloria.

Por Jesucristo nuestro Señor.
Amén.`,
  descargaPdf: null, // enlazar PDF oficial cuando la CEE lo publique
}
