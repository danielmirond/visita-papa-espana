import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getProfilesByLocale } from '@/data/i18n/content/perfiles'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

const T: Record<Locale, { pageSubtitle: string; seeGuide: string; calendarTitle: string; calendarBody: string; downloadCalendar: string }> = {
  es: { pageSubtitle: 'Recomendaciones personalizadas para cada tipo de visitante', seeGuide: 'Ver guía completa', calendarTitle: 'Añade los eventos a tu calendario', calendarBody: 'Descarga el calendario con todos los actos de la visita papal. Compatible con Google Calendar, Apple Calendar, Outlook y cualquier app de calendario.', downloadCalendar: 'Descargar calendario (.ics)' },
  en: { pageSubtitle: 'Personalised recommendations for each type of visitor', seeGuide: 'See full guide', calendarTitle: 'Add events to your calendar', calendarBody: 'Download the calendar with all papal visit events. Compatible with Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Download calendar (.ics)' },
  it: { pageSubtitle: 'Raccomandazioni personalizzate per ogni tipo di visitatore', seeGuide: 'Vedi guida completa', calendarTitle: 'Aggiungi eventi al calendario', calendarBody: 'Scarica il calendario con tutti gli eventi della visita papale. Compatibile con Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Scarica calendario (.ics)' },
  fr: { pageSubtitle: 'Recommandations personnalisées pour chaque type de visiteur', seeGuide: 'Voir guide complet', calendarTitle: 'Ajoutez les événements à votre calendrier', calendarBody: 'Téléchargez le calendrier avec tous les actes. Compatible avec Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Télécharger le calendrier (.ics)' },
  de: { pageSubtitle: 'Personalisierte Empfehlungen für jeden Besuchertyp', seeGuide: 'Vollständigen Leitfaden ansehen', calendarTitle: 'Fügen Sie die Veranstaltungen Ihrem Kalender hinzu', calendarBody: 'Laden Sie den Kalender mit allen Veranstaltungen herunter. Kompatibel mit Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Kalender herunterladen (.ics)' },
  pt: { pageSubtitle: 'Recomendações personalizadas para cada tipo de visitante', seeGuide: 'Ver guia completo', calendarTitle: 'Adicione os eventos ao seu calendário', calendarBody: 'Descarregue o calendário com todos os atos. Compatível com Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Descarregar calendário (.ics)' },
  ca: { pageSubtitle: 'Recomanacions personalitzades per a cada tipus de visitant', seeGuide: 'Veure guia completa', calendarTitle: 'Afegeix els esdeveniments al teu calendari', calendarBody: 'Descarrega el calendari amb tots els actes. Compatible amb Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Descarrega calendari (.ics)' },
  gl: { pageSubtitle: 'Recomendacións personalizadas para cada tipo de visitante', seeGuide: 'Ver guía completa', calendarTitle: 'Engade os eventos ao teu calendario', calendarBody: 'Descarga o calendario con todos os actos. Compatible con Google Calendar, Apple Calendar, Outlook.', downloadCalendar: 'Descargar calendario (.ics)' },
  eu: { pageSubtitle: 'Bisitari-mota bakoitzerako gomendio pertsonalizatuak', seeGuide: 'Ikusi gida osoa', calendarTitle: 'Gehitu ekitaldiak zure egutegian', calendarBody: 'Deskargatu egutegia ekitaldi guztiekin. Google Calendar, Apple Calendar, Outlook-ekin bateragarria.', downloadCalendar: 'Deskargatu egutegia (.ics)' },
}

export default function GuiaListPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const pages = getPagesDict(locale)
  const profiles = getProfilesByLocale(locale)
  const t = T[locale]

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: nav.nav.guias, href: localizePath('/guia', locale) },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {nav.nav.guias}
          </h1>
          <p className="mt-3 text-white/70">{t.pageSubtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {profiles.map((profile) => (
            <Link
              key={profile.slug}
              href={localizePath(`/guia/${profile.slug}`, locale)}
              className="group rounded-xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h2 className="font-heading text-xl font-bold text-papal-navy group-hover:text-papal-gold">
                {profile.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-papal-navy/60">
                {profile.description}
              </p>
              <p className="mt-3 text-sm font-medium text-papal-gold">{t.seeGuide} →</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-papal-cream p-6 text-center sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-papal-navy">
            {t.calendarTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-papal-navy/60">{t.calendarBody}</p>
          <a
            href="/api/calendario"
            download
            className="mt-4 inline-block rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
          >
            {t.downloadCalendar}
          </a>
        </div>
      </Container>
    </>
  )
}
