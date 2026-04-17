import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { tvChannels } from '@/data/tvChannels'
import { getDictionary } from '@/data/i18n/dictionaries'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

const T: Record<Locale, {
  title: string; subtitle: string;
  tv: string; streaming: string; radio: string;
  free: string;
  giantScreens: string;
  giantScreensBody: string;
  mainCoverage: string;
}> = {
  es: { title: 'Dónde ver la visita del Papa', subtitle: 'TV, streaming y radio: todas las formas de seguir la visita en directo', tv: 'Televisión', streaming: 'Streaming', radio: 'Radio', free: 'Gratis', giantScreens: 'Pantallas gigantes', giantScreensBody: 'Se instalarán pantallas gigantes en los principales puntos de Madrid, Barcelona y Canarias para que los fieles que no puedan acceder a los recintos puedan seguir los actos en directo. Los detalles de ubicación se publicarán en las semanas previas a la visita.', mainCoverage: 'La cobertura principal correrá a cargo de RTVE (La 1, La 2 y RTVE Play) con retransmisión completa de todos los actos principales. Los canales religiosos 13TV y TRECE ofrecen cobertura especializada. Vatican News retransmitirá en directo desde la perspectiva del Vaticano.' },
  en: { title: 'Where to watch the papal visit', subtitle: 'TV, streaming and radio: all the ways to follow the visit live', tv: 'Television', streaming: 'Streaming', radio: 'Radio', free: 'Free', giantScreens: 'Giant screens', giantScreensBody: 'Giant screens will be installed at key points in Madrid, Barcelona and the Canary Islands so that the faithful who cannot access the venues can follow the events live. Location details will be published in the weeks prior to the visit.', mainCoverage: 'Main coverage by RTVE (La 1, La 2 and RTVE Play) with full broadcast of all main events. Religious channels 13TV and TRECE offer specialised coverage. Vatican News will broadcast live from the Vatican’s perspective.' },
  it: { title: 'Dove vedere la visita papale', subtitle: 'TV, streaming e radio: tutti i modi per seguire la visita in diretta', tv: 'Televisione', streaming: 'Streaming', radio: 'Radio', free: 'Gratuito', giantScreens: 'Maxischermi', giantScreensBody: 'Saranno installati maxischermi nei punti principali di Madrid, Barcellona e Canarie per consentire ai fedeli di seguire gli eventi in diretta. I dettagli sulle ubicazioni saranno pubblicati nelle settimane precedenti la visita.', mainCoverage: 'La copertura principale sarà a cura di RTVE (La 1, La 2 e RTVE Play) con trasmissione completa di tutti gli eventi principali. I canali religiosi 13TV e TRECE offrono copertura specializzata. Vatican News trasmetterà in diretta dalla prospettiva del Vaticano.' },
  fr: { title: 'Où regarder la visite papale', subtitle: 'TV, streaming et radio : toutes les façons de suivre la visite en direct', tv: 'Télévision', streaming: 'Streaming', radio: 'Radio', free: 'Gratuit', giantScreens: 'Écrans géants', giantScreensBody: 'Des écrans géants seront installés aux points clés de Madrid, Barcelone et des Canaries pour permettre aux fidèles qui ne peuvent pas accéder aux lieux de suivre les événements en direct. Les détails des emplacements seront publiés dans les semaines précédant la visite.', mainCoverage: 'La couverture principale sera assurée par RTVE (La 1, La 2 et RTVE Play) avec diffusion complète de tous les événements principaux. Les chaînes religieuses 13TV et TRECE offrent une couverture spécialisée. Vatican News diffusera en direct du point de vue du Vatican.' },
  de: { title: 'Wo kann man den Papstbesuch verfolgen', subtitle: 'TV, Streaming und Radio: alle Möglichkeiten, den Besuch live zu verfolgen', tv: 'Fernsehen', streaming: 'Streaming', radio: 'Radio', free: 'Gratis', giantScreens: 'Großbildschirme', giantScreensBody: 'An zentralen Orten in Madrid, Barcelona und den Kanaren werden Großbildschirme aufgestellt, damit Gläubige, die keinen Zugang zu den Veranstaltungsorten haben, die Ereignisse live verfolgen können. Die genauen Standorte werden in den Wochen vor dem Besuch bekanntgegeben.', mainCoverage: 'Die Hauptübertragung übernimmt RTVE (La 1, La 2 und RTVE Play) mit vollständiger Ausstrahlung aller Hauptveranstaltungen. Die religiösen Sender 13TV und TRECE bieten spezialisierte Berichterstattung. Vatican News überträgt live aus der Perspektive des Vatikans.' },
  pt: { title: 'Onde ver a visita papal', subtitle: 'TV, streaming e rádio: todas as formas de seguir a visita em direto', tv: 'Televisão', streaming: 'Streaming', radio: 'Rádio', free: 'Grátis', giantScreens: 'Ecrãs gigantes', giantScreensBody: 'Serão instalados ecrãs gigantes nos principais pontos de Madrid, Barcelona e Canárias para que os fiéis que não possam aceder aos recintos sigam os atos em direto. Os detalhes serão publicados nas semanas anteriores à visita.', mainCoverage: 'A cobertura principal estará a cargo da RTVE (La 1, La 2 e RTVE Play) com transmissão completa de todos os atos principais. Os canais religiosos 13TV e TRECE oferecem cobertura especializada. Vatican News transmitirá em direto da perspetiva do Vaticano.' },
  ca: { title: 'On veure la visita papal', subtitle: 'TV, streaming i ràdio: totes les maneres de seguir la visita en directe', tv: 'Televisió', streaming: 'Streaming', radio: 'Ràdio', free: 'Gratuït', giantScreens: 'Pantalles gegants', giantScreensBody: 'S’instal·laran pantalles gegants als principals punts de Madrid, Barcelona i Canàries perquè els fidels que no puguin accedir als recintes puguin seguir els actes en directe.', mainCoverage: 'La cobertura principal serà a càrrec de RTVE (La 1, La 2 i RTVE Play) amb retransmissió completa. Els canals religiosos 13TV i TRECE ofereixen cobertura especialitzada. Vatican News retransmetrà en directe des de la perspectiva del Vaticà.' },
  gl: { title: 'Onde ver a visita papal', subtitle: 'TV, streaming e radio: todas as formas de seguir a visita en directo', tv: 'Televisión', streaming: 'Streaming', radio: 'Radio', free: 'Gratuíto', giantScreens: 'Pantallas xigantes', giantScreensBody: 'Instalaranse pantallas xigantes nos principais puntos de Madrid, Barcelona e Canarias para que os fieis poidan seguir os actos en directo.', mainCoverage: 'A cobertura principal estará a cargo de RTVE (La 1, La 2 e RTVE Play) con retransmisión completa. Os canais relixiosos 13TV e TRECE ofrecen cobertura especializada. Vatican News retransmitirá en directo dende a perspectiva do Vaticano.' },
  eu: { title: 'Non ikusi bisitaldi papala', subtitle: 'TB, streaming eta irratia: bisitaldia zuzenean jarraitzeko modu guztiak', tv: 'Telebista', streaming: 'Streaming', radio: 'Irratia', free: 'Doan', giantScreens: 'Pantaila erraldoiak', giantScreensBody: 'Madril, Bartzelona eta Kanarietako leku nagusietan pantaila erraldoiak jarriko dira, lekuetan sartu ezin diren fededunek ekitaldiak zuzenean jarrai ditzaten.', mainCoverage: 'Estaldura nagusia RTVEren ardurapean egongo da (La 1, La 2 eta RTVE Play), ekitaldi nagusien emisio osoa eskainiz. 13TV eta TRECE kanal erlijiosoek estaldura berezia eskainiko dute. Vatican News-ek zuzenean emitituko du Vatikanoaren ikuspegitik.' },
}

export default function DondeVerPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const t = T[locale]

  const grouped = {
    tv: tvChannels.filter((c) => c.type === 'tv'),
    streaming: tvChannels.filter((c) => c.type === 'streaming'),
    radio: tvChannels.filter((c) => c.type === 'radio'),
  }

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.title, href: localizePath('/donde-ver', locale) },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mb-8 rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
          <p className="text-center text-sm text-papal-navy/80">{t.mainCoverage}</p>
        </div>

        {(['tv', 'streaming', 'radio'] as const).map((type) => (
          <section key={type} className="mb-10">
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t[type]}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[type].map((channel) => (
                <div
                  key={channel.name}
                  className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-heading text-lg font-bold text-papal-navy">
                      {channel.name}
                    </h3>
                    <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      {t.free}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-papal-navy/60">{channel.description}</p>
                  {channel.url && (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-papal-gold hover:underline"
                    >
                      {channel.name} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl bg-gray-50 p-6">
          <h2 className="font-heading text-xl font-bold text-papal-navy">{t.giantScreens}</h2>
          <p className="mt-2 text-sm text-papal-navy/70">{t.giantScreensBody}</p>
        </section>
      </Container>
    </>
  )
}
