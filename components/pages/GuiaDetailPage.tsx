import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getProfilesByLocale, getProfileBySlugLocale } from '@/data/i18n/content/perfiles'
import { getAffiliateById } from '@/data/affiliates'
import { getDictionary } from '@/data/i18n/dictionaries'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

const T: Record<Locale, { tips: string; whatToBring: string; important: string; calendar: string; calendarBody: string; downloadCalendar: string; prepareTrip: string; otherGuides: string; allGuides: string; sponsoredLinks: string }> = {
  es: { tips: 'Consejos', whatToBring: 'Qué llevar', important: 'Aspectos importantes', calendar: 'Añadir eventos al calendario', calendarBody: 'Todos los actos de la visita en un archivo para su dispositivo.', downloadCalendar: 'Descargar calendario', prepareTrip: 'Prepara tu viaje', otherGuides: 'Otras guías', allGuides: 'Todas las guías', sponsoredLinks: 'Enlaces patrocinados' },
  en: { tips: 'Tips', whatToBring: 'What to bring', important: 'Important aspects', calendar: 'Add events to calendar', calendarBody: 'All visit events in a file for your device.', downloadCalendar: 'Download calendar', prepareTrip: 'Prepare your trip', otherGuides: 'Other guides', allGuides: 'All guides', sponsoredLinks: 'Sponsored links' },
  it: { tips: 'Consigli', whatToBring: 'Cosa portare', important: 'Aspetti importanti', calendar: 'Aggiungi eventi al calendario', calendarBody: 'Tutti gli eventi della visita in un file per il tuo dispositivo.', downloadCalendar: 'Scarica calendario', prepareTrip: 'Prepara il tuo viaggio', otherGuides: 'Altre guide', allGuides: 'Tutte le guide', sponsoredLinks: 'Link sponsorizzati' },
  fr: { tips: 'Conseils', whatToBring: 'Que prendre', important: 'Aspects importants', calendar: 'Ajouter événements au calendrier', calendarBody: 'Tous les actes dans un fichier pour votre appareil.', downloadCalendar: 'Télécharger calendrier', prepareTrip: 'Préparez votre voyage', otherGuides: 'Autres guides', allGuides: 'Tous les guides', sponsoredLinks: 'Liens sponsorisés' },
  de: { tips: 'Tipps', whatToBring: 'Was mitnehmen', important: 'Wichtige Aspekte', calendar: 'Veranstaltungen zum Kalender hinzufügen', calendarBody: 'Alle Veranstaltungen in einer Datei für Ihr Gerät.', downloadCalendar: 'Kalender herunterladen', prepareTrip: 'Bereiten Sie Ihre Reise vor', otherGuides: 'Weitere Leitfäden', allGuides: 'Alle Leitfäden', sponsoredLinks: 'Gesponserte Links' },
  pt: { tips: 'Conselhos', whatToBring: 'O que levar', important: 'Aspetos importantes', calendar: 'Adicionar eventos ao calendário', calendarBody: 'Todos os atos num ficheiro para o seu dispositivo.', downloadCalendar: 'Descarregar calendário', prepareTrip: 'Prepare a sua viagem', otherGuides: 'Outros guias', allGuides: 'Todos os guias', sponsoredLinks: 'Links patrocinados' },
  ca: { tips: 'Consells', whatToBring: 'Què portar', important: 'Aspectes importants', calendar: 'Afegir esdeveniments al calendari', calendarBody: 'Tots els actes en un arxiu per al teu dispositiu.', downloadCalendar: 'Descarregar calendari', prepareTrip: 'Prepara el teu viatge', otherGuides: 'Altres guies', allGuides: 'Totes les guies', sponsoredLinks: 'Enllaços patrocinats' },
  gl: { tips: 'Consellos', whatToBring: 'Que levar', important: 'Aspectos importantes', calendar: 'Engadir eventos ao calendario', calendarBody: 'Todos os actos nun arquivo para o teu dispositivo.', downloadCalendar: 'Descargar calendario', prepareTrip: 'Prepara a túa viaxe', otherGuides: 'Outras guías', allGuides: 'Todas as guías', sponsoredLinks: 'Ligazóns patrocinadas' },
  eu: { tips: 'Aholkuak', whatToBring: 'Zer eraman', important: 'Alderdi garrantzitsuak', calendar: 'Gehitu ekitaldiak egutegian', calendarBody: 'Bisitaldiko ekitaldi guztiak fitxategi batean zure gailurako.', downloadCalendar: 'Deskargatu egutegia', prepareTrip: 'Prestatu zure bidaia', otherGuides: 'Beste gidak', allGuides: 'Gida guztiak', sponsoredLinks: 'Esteka babestuak' },
}

export default function GuiaDetailPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const nav = getDictionary(locale)
  const t = T[locale]
  const profile = getProfileBySlugLocale(locale, slug)
  if (!profile) notFound()

  const allProfiles = getProfilesByLocale(locale)
  const affiliates = profile.affiliateIds
    .map((id) => getAffiliateById(id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: nav.nav.guias, href: localizePath('/guia', locale) },
    { name: profile.title, href: localizePath(`/guia/${profile.slug}`, locale) },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-10">
          <Link
            href={localizePath('/guia', locale)}
            className="text-sm text-papal-gold hover:underline"
          >
            &larr; {t.allGuides}
          </Link>
          <div className="mt-4">
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {profile.title}
            </h1>
            <p className="mt-1 text-white/70">{profile.description}</p>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.tips}
              </h2>
              <div className="space-y-2">
                {profile.tips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-gray-50 bg-gray-50 p-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-papal-gold/20 text-xs font-bold text-papal-gold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-papal-navy/80">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.whatToBring}
              </h2>
              <div className="rounded-xl bg-green-50 p-5">
                <ul className="space-y-1.5">
                  {profile.essentials.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                      <span className="mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.important}
              </h2>
              <div className="rounded-xl bg-amber-50 p-5">
                <ul className="space-y-1.5">
                  {profile.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                      <span className="mt-0.5">—</span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-xl bg-papal-cream p-6 text-center">
              <h3 className="font-heading text-lg font-bold text-papal-navy">
                {t.calendar}
              </h3>
              <p className="mt-1 text-sm text-papal-navy/60">{t.calendarBody}</p>
              <a
                href="/api/calendario"
                download
                className="mt-3 inline-block rounded-lg bg-papal-gold px-5 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                {t.downloadCalendar}
              </a>
            </section>
          </div>

          <aside className="space-y-6">
            {affiliates.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">
                  {t.prepareTrip}
                </h3>
                <div className="mt-3 space-y-3">
                  {affiliates.map((aff) => (
                    <a
                      key={aff.id}
                      href={aff.url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block rounded-lg border border-papal-gold/20 p-3 transition-colors hover:bg-papal-cream"
                    >
                      <p className="font-medium text-papal-navy">{aff.displayName}</p>
                      <p className="mt-1 text-xs text-papal-navy/60">{aff.description}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-papal-navy/40">{t.sponsoredLinks}</p>
              </div>
            )}

            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-papal-navy">
                {t.otherGuides}
              </h3>
              <div className="mt-3 space-y-2">
                {allProfiles
                  .filter((p) => p.slug !== profile.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={localizePath(`/guia/${p.slug}`, locale)}
                      className="flex items-center gap-2 rounded-lg p-2 text-sm transition-colors hover:bg-gray-50"
                    >
                      <span className="text-papal-navy/80">{p.title}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}
