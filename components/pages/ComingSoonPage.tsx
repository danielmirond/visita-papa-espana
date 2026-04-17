import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getDictionary } from '@/data/i18n/dictionaries'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Placeholder honesto para páginas cuyo contenido aún no se ha
 * traducido al idioma del usuario.
 *
 * Muestra el título en el idioma solicitado y un enlace a la
 * versión española (que tiene el contenido completo). Preferible
 * a un 404 o a una traducción a medias.
 */

const T: Record<
  Locale,
  { pending: string; description: string; goToSpanish: string; goHome: string; languageLabel: string }
> = {
  es: { pending: 'Contenido en elaboración', description: 'Esta sección estará disponible próximamente. Mientras tanto, puedes volver al inicio.', goToSpanish: 'Versión en español', goHome: 'Volver al inicio', languageLabel: 'español' },
  en: { pending: 'Content being prepared', description: 'This section is not yet available in this language. You can check the full Spanish version or return to the homepage.', goToSpanish: 'Spanish version', goHome: 'Back to home', languageLabel: 'Spanish' },
  it: { pending: 'Contenuto in preparazione', description: 'Questa sezione non è ancora disponibile in questa lingua. Puoi consultare la versione completa in spagnolo o tornare alla home.', goToSpanish: 'Versione in spagnolo', goHome: 'Torna alla home', languageLabel: 'spagnolo' },
  fr: { pending: 'Contenu en préparation', description: 'Cette section n’est pas encore disponible dans cette langue. Vous pouvez consulter la version complète en espagnol ou retourner à l’accueil.', goToSpanish: 'Version espagnole', goHome: 'Retour à l’accueil', languageLabel: 'espagnol' },
  de: { pending: 'Inhalt in Vorbereitung', description: 'Dieser Abschnitt ist in dieser Sprache noch nicht verfügbar. Sie können die vollständige spanische Version einsehen oder zur Startseite zurückkehren.', goToSpanish: 'Spanische Version', goHome: 'Zur Startseite', languageLabel: 'Spanisch' },
  pt: { pending: 'Conteúdo em preparação', description: 'Esta secção ainda não está disponível neste idioma. Pode consultar a versão completa em espanhol ou voltar ao início.', goToSpanish: 'Versão em espanhol', goHome: 'Voltar ao início', languageLabel: 'espanhol' },
  ca: { pending: 'Contingut en elaboració', description: 'Aquesta secció encara no està disponible en aquest idioma. Pots consultar la versió completa en espanyol o tornar a l’inici.', goToSpanish: 'Versió en espanyol', goHome: 'Tornar a l’inici', languageLabel: 'espanyol' },
  gl: { pending: 'Contido en elaboración', description: 'Esta sección aínda non está dispoñible neste idioma. Podes consultar a versión completa en español ou volver ao inicio.', goToSpanish: 'Versión en español', goHome: 'Volver ao inicio', languageLabel: 'español' },
  eu: { pending: 'Edukia prestatzen', description: 'Atal hau ez dago oraindik hizkuntza honetan eskuragarri. Espainolezko bertsio osoa kontsulta dezakezu edo hasierara itzuli.', goToSpanish: 'Espainolezko bertsioa', goHome: 'Itzuli hasierara', languageLabel: 'espainol' },
}

interface Props {
  locale: Locale
  pageTitle: string
  pagePath: string // ruta canónica en español (ej: "/como-asistir")
}

export default function ComingSoonPage({ locale, pageTitle, pagePath }: Props) {
  const nav = getDictionary(locale)
  const t = T[locale]

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: pageTitle, href: localizePath(pagePath, locale) },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{pageTitle}</h1>
          <p className="mt-3 text-white/70">{t.pending}</p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="mx-auto max-w-xl rounded-xl border border-papal-gold/20 bg-papal-cream p-8 text-center">
          <p className="text-papal-navy/80">{t.description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={localizePath(pagePath, 'es')}
              className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
            >
              {t.goToSpanish} ({t.languageLabel})
            </Link>
            <Link
              href={localizePath('/', locale)}
              className="rounded-lg border border-papal-navy/20 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-white"
            >
              {t.goHome}
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
