import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { himnoOficial, oracionOficial } from '@/data/himno'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

type Variant = 'himno' | 'oracion'

interface Props {
  locale: Locale
  variant: Variant
}

const L = {
  es: {
    himnoBreadcrumb: 'Himno oficial',
    oracionBreadcrumb: 'Oración por la visita',
    himnoTitle: 'Himno oficial del viaje apostólico a España',
    oracionTitle: 'Oración por la visita del Papa León XIV',
    himnoSubtitle: 'Alza la mirada: himno oficial del viaje apostólico grabado el 21 de marzo de 2026 en 4 catedrales españolas con 1.700+ voces de voluntarios.',
    oracionSubtitle: 'Texto oficial difundido por la Conferencia Episcopal Española',
    pendingTitle: 'Pendiente de publicación oficial',
    pendingBody:
      'La Conferencia Episcopal Española publicará el himno oficial en las semanas previas a la visita. En cuanto se haga público, esta página se actualizará con la letra completa, la partitura descargable, el audio y el videoclip institucional.',
    whatIsIt: 'Qué es',
    downloadPdf: 'Descargar PDF',
    motto: 'Lema del viaje',
    shareTitle: 'Compartir',
    themeInfo:
      'Ambos textos —himno y oración— se usan en todas las parroquias de España durante los meses de preparación espiritual de la visita. Se rezan al final de la misa y en actos diocesanos previos.',
  },
  en: {
    himnoBreadcrumb: 'Official anthem',
    oracionBreadcrumb: 'Prayer for the visit',
    himnoTitle: 'Official anthem of the apostolic journey to Spain',
    oracionTitle: 'Prayer for Pope Leo XIV’s visit',
    himnoSubtitle: 'Alza la mirada: official anthem recorded 21 March 2026 in 4 Spanish cathedrals with 1,700+ volunteer voices. Released 17 April 2026.',
    oracionSubtitle: 'Official text released by the Spanish Episcopal Conference',
    pendingTitle: 'Pending official release',
    pendingBody:
      'The Spanish Episcopal Conference will release the official anthem in the weeks before the visit. This page will be updated with full lyrics, downloadable score, audio and official video as soon as it is public.',
    whatIsIt: 'What is it',
    downloadPdf: 'Download PDF',
    motto: 'Journey motto',
    shareTitle: 'Share',
    themeInfo:
      'Both anthem and prayer are used in every Spanish parish during the months of spiritual preparation for the visit.',
  },
  it: {
    himnoBreadcrumb: 'Inno ufficiale',
    oracionBreadcrumb: 'Preghiera per la visita',
    himnoTitle: 'Inno ufficiale del viaggio apostolico in Spagna',
    oracionTitle: 'Preghiera per la visita di Papa Leone XIV',
    himnoSubtitle: 'Testo, audio e spartito dell’inno ufficiale della visita papale 2026',
    oracionSubtitle: 'Testo ufficiale diffuso dalla Conferenza Episcopale Spagnola',
    pendingTitle: 'In attesa della pubblicazione ufficiale',
    pendingBody:
      'La Conferenza Episcopale Spagnola pubblicherà l’inno ufficiale nelle settimane precedenti alla visita.',
    whatIsIt: 'Che cos’è',
    downloadPdf: 'Scarica PDF',
    motto: 'Motto del viaggio',
    shareTitle: 'Condividi',
    themeInfo:
      'Inno e preghiera vengono utilizzati in tutte le parrocchie di Spagna durante i mesi di preparazione spirituale alla visita.',
  },
  fr: {
    himnoBreadcrumb: 'Hymne officiel',
    oracionBreadcrumb: 'Prière pour la visite',
    himnoTitle: 'Hymne officiel du voyage apostolique en Espagne',
    oracionTitle: 'Prière pour la visite du Pape Léon XIV',
    himnoSubtitle: 'Paroles, audio et partition de l’hymne officiel de la visite papale 2026',
    oracionSubtitle: 'Texte officiel diffusé par la Conférence Épiscopale Espagnole',
    pendingTitle: 'En attente de publication officielle',
    pendingBody:
      'La Conférence Épiscopale Espagnole publiera l’hymne officiel dans les semaines précédant la visite.',
    whatIsIt: 'Qu’est-ce que c’est',
    downloadPdf: 'Télécharger PDF',
    motto: 'Devise du voyage',
    shareTitle: 'Partager',
    themeInfo: 'Hymne et prière sont utilisés dans toutes les paroisses d’Espagne.',
  },
  de: {
    himnoBreadcrumb: 'Offizielle Hymne',
    oracionBreadcrumb: 'Gebet für den Besuch',
    himnoTitle: 'Offizielle Hymne der Apostolischen Reise nach Spanien',
    oracionTitle: 'Gebet zum Besuch von Papst Leo XIV',
    himnoSubtitle: 'Alza la mirada: offizielle Hymne, aufgenommen am 21. März 2026 in 4 spanischen Kathedralen mit über 1.700 Freiwilligenstimmen. Veröffentlicht am 17. April 2026.',
    oracionSubtitle: 'Offizieller Text der Spanischen Bischofskonferenz',
    pendingTitle: 'Offizielle Veröffentlichung ausstehend',
    pendingBody:
      'Die Spanische Bischofskonferenz wird die offizielle Hymne in den Wochen vor dem Besuch veröffentlichen.',
    whatIsIt: 'Was ist das',
    downloadPdf: 'PDF herunterladen',
    motto: 'Motto der Reise',
    shareTitle: 'Teilen',
    themeInfo: 'Hymne und Gebet werden in allen Pfarreien Spaniens verwendet.',
  },
  pt: {
    himnoBreadcrumb: 'Hino oficial',
    oracionBreadcrumb: 'Oração pela visita',
    himnoTitle: 'Hino oficial da viagem apostólica a Espanha',
    oracionTitle: 'Oração pela visita do Papa Leão XIV',
    himnoSubtitle: 'Alza la mirada: hino oficial gravado a 21 de março de 2026 em 4 catedrais espanholas com mais de 1.700 vozes de voluntários. Publicado a 17 de abril de 2026.',
    oracionSubtitle: 'Texto oficial divulgado pela Conferência Episcopal Espanhola',
    pendingTitle: 'A aguardar publicação oficial',
    pendingBody:
      'A Conferência Episcopal Espanhola publicará o hino oficial nas semanas anteriores à visita.',
    whatIsIt: 'O que é',
    downloadPdf: 'Descarregar PDF',
    motto: 'Lema da viagem',
    shareTitle: 'Partilhar',
    themeInfo: 'Hino e oração são usados em todas as paróquias de Espanha.',
  },
  ca: {
    himnoBreadcrumb: 'Himne oficial',
    oracionBreadcrumb: 'Oració per la visita',
    himnoTitle: 'Himne oficial del viatge apostòlic a Espanya',
    oracionTitle: 'Oració per la visita del Papa Lleó XIV',
    himnoSubtitle: 'Lletra, àudio i partitura de l’himne oficial de la visita papal 2026',
    oracionSubtitle: 'Text oficial difós per la Conferència Episcopal Espanyola',
    pendingTitle: 'Pendent de publicació oficial',
    pendingBody:
      'La Conferència Episcopal Espanyola publicarà l’himne oficial en les setmanes prèvies a la visita.',
    whatIsIt: 'Què és',
    downloadPdf: 'Descarregar PDF',
    motto: 'Lema del viatge',
    shareTitle: 'Compartir',
    themeInfo: 'Himne i oració es fan servir a totes les parròquies d’Espanya.',
  },
  gl: {
    himnoBreadcrumb: 'Himno oficial',
    oracionBreadcrumb: 'Oración pola visita',
    himnoTitle: 'Himno oficial da viaxe apostólica a España',
    oracionTitle: 'Oración pola visita do Papa León XIV',
    himnoSubtitle: 'Alza la mirada: himno oficial gravado o 21 de marzo de 2026 en 4 catedrais españolas con máis de 1.700 voces de voluntarios. Publicado o 17 de abril de 2026.',
    oracionSubtitle: 'Texto oficial difundido pola Conferencia Episcopal Española',
    pendingTitle: 'Pendente de publicación oficial',
    pendingBody:
      'A Conferencia Episcopal Española publicará o himno oficial nas semanas previas á visita.',
    whatIsIt: 'Que é',
    downloadPdf: 'Descargar PDF',
    motto: 'Lema da viaxe',
    shareTitle: 'Compartir',
    themeInfo: 'Himno e oración úsanse en todas as parroquias de España.',
  },
  eu: {
    himnoBreadcrumb: 'Ereserki ofiziala',
    oracionBreadcrumb: 'Bisitaldirako otoitza',
    himnoTitle: 'Espainiarako bidai apostolikoaren ereserki ofiziala',
    oracionTitle: 'Leon XIV.a Aita Santuaren bisitaldirako otoitza',
    himnoSubtitle: 'Alza la mirada: 2026ko martxoaren 21ean Espainiako 4 katedraletan grabatutako ereserki ofiziala, 1.700 boluntariok baino gehiagok abestua. 2026ko apirilaren 17an argitaratua.',
    oracionSubtitle: 'Espainiako Gotzainen Batzarrak zabaldutako testu ofiziala',
    pendingTitle: 'Argitalpen ofizialaren zain',
    pendingBody: 'Espainiako Gotzainen Batzarrak ereserki ofiziala argitaratuko du bisitaldia baino aste batzuk lehenago.',
    whatIsIt: 'Zer da',
    downloadPdf: 'PDF deskargatu',
    motto: 'Bidaiaren lema',
    shareTitle: 'Partekatu',
    themeInfo: 'Ereserkia eta otoitza Espainiako parrokia guztietan erabiltzen dira.',
  },
} as const satisfies Record<Locale, any>

export default function HimnoOracionPage({ locale, variant }: Props) {
  const t = L[locale] || L.es

  const isHimno = variant === 'himno'
  const breadcrumbLabel = isHimno ? t.himnoBreadcrumb : t.oracionBreadcrumb
  const title = isHimno ? t.himnoTitle : t.oracionTitle
  const subtitle = isHimno ? t.himnoSubtitle : t.oracionSubtitle
  const slug = isHimno ? '/himno' : '/oracion'

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: breadcrumbLabel, href: localizePath(slug, locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-white/70">{subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        {isHimno ? (
          <div className="space-y-6">
            {/* Cabecera del himno */}
            <section className="rounded-xl border border-papal-gold/30 bg-papal-cream p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">
                {himnoOficial.estadoPublicacion === 'publicado' ? '✅ Publicado oficialmente' : '⏳ Pendiente'}
              </div>
              <h2 className="mt-1 font-heading text-3xl font-bold text-papal-navy">
                «{himnoOficial.titulo}»
              </h2>
              <p className="mt-2 text-sm text-papal-navy/70">{himnoOficial.tituloCompleto}</p>
              <p className="mt-3 text-sm font-medium text-papal-gold-dark">
                {t.motto}: <em>{himnoOficial.lema}</em>
              </p>

              {himnoOficial.videoUrl && (
                <div className="mt-5 aspect-video">
                  <iframe
                    src={himnoOficial.videoUrl}
                    title={himnoOficial.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-lg"
                  />
                </div>
              )}

              {!himnoOficial.videoUrl && !himnoOficial.audioUrl && himnoOficial.estadoPublicacion === 'publicado' && (
                <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                  🎧 El audio/videoclip oficial del himno se está distribuyendo actualmente.
                  Disponible desde el {himnoOficial.fechaPublicacion} en todas las plataformas de
                  streaming. Actualizaremos esta página con el enlace embebido en cuanto la CEE lo
                  publique en un repositorio oficial.
                </p>
              )}

              {himnoOficial.letra && (
                <pre className="mt-5 whitespace-pre-wrap rounded-lg bg-white p-5 font-serif text-papal-navy">
                  {himnoOficial.letra}
                </pre>
              )}
            </section>

            {/* Ficha técnica */}
            <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-papal-navy">Ficha técnica</h3>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">Productor</dt>
                  <dd className="text-papal-navy">{himnoOficial.productor}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">Impulsor</dt>
                  <dd className="text-papal-navy">{himnoOficial.impulsor}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">Fecha de grabación</dt>
                  <dd className="text-papal-navy">{himnoOficial.fechaGrabacion}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">Publicación</dt>
                  <dd className="text-papal-navy">{himnoOficial.fechaPublicacion}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">Voces participantes</dt>
                  <dd className="text-papal-navy">{himnoOficial.numVoces.toLocaleString('es-ES')}+ voluntarios</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">Compositores conocidos</dt>
                  <dd className="text-papal-navy">{himnoOficial.autores.join(', ')} y otros</dd>
                </div>
              </dl>

              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">
                  Lugares de grabación simultánea
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-papal-navy/85">
                  {himnoOficial.lugaresGrabacion.map((l) => (
                    <li key={l.catedral}>
                      ⛪ <strong>{l.catedral}</strong> · {l.ciudad}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Destino ingresos */}
            <section className="rounded-xl bg-papal-navy p-6 text-white/90">
              <h3 className="font-heading text-lg font-bold text-white">💙 Destino solidario</h3>
              <p className="mt-2 text-sm">{himnoOficial.destinoIngresos}</p>
            </section>

            {/* Descripción */}
            <p className="text-sm text-papal-navy/70">{himnoOficial.descripcion}</p>

            {/* Fuentes */}
            <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-heading text-base font-bold text-papal-navy">📚 Fuentes</h3>
              <ul className="mt-2 space-y-1 text-xs text-papal-navy/70">
                {himnoOficial.fuentes.map((url) => (
                  <li key={url}>
                    •{' '}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all hover:text-papal-gold-dark"
                    >
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ) : (
          <section className="rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
            <h2 className="font-heading text-2xl font-bold text-papal-navy">
              {oracionOficial.titulo}
            </h2>
            <pre className="mt-5 whitespace-pre-wrap rounded-lg bg-white p-6 font-serif leading-relaxed text-papal-navy">
              {oracionOficial.texto}
            </pre>
            {oracionOficial.descargaPdf && (
              <a
                href={oracionOficial.descargaPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-medium text-white hover:bg-papal-gold-dark"
              >
                📄 {t.downloadPdf}
              </a>
            )}
            <p className="mt-6 text-sm text-papal-navy/70">{oracionOficial.descripcion}</p>
          </section>
        )}

        <aside className="mt-8 rounded-xl bg-papal-navy p-5 text-white/90">
          <p className="text-sm">{t.themeInfo}</p>
        </aside>
      </Container>
    </>
  )
}
