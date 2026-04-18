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

export interface HimnoData {
  titulo: string
  autor: string | null
  compositor: string | null
  lema: string
  letra: string | null // null mientras no se publique oficial
  audioUrl: string | null
  videoUrl: string | null
  descripcion: string
  estadoPublicacion: 'publicado' | 'pendiente'
}

export const himnoOficial: HimnoData = {
  titulo: 'Himno oficial del viaje apostólico',
  autor: null, // pendiente
  compositor: null, // pendiente
  lema: 'Testigos de esperanza',
  letra: null, // actualizar cuando se publique
  audioUrl: null,
  videoUrl: null,
  descripcion:
    'El himno oficial del viaje apostólico del Papa León XIV a España acompañará los actos litúrgicos de los cuatro días. La Conferencia Episcopal Española publicará el título, la letra y la partitura en las semanas previas a la visita, junto con el audio oficial y un videoclip institucional.',
  estadoPublicacion: 'pendiente',
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
