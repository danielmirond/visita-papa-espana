import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getAreasVoluntariado, getRequisitos, getBeneficios, enlacesOficialesVoluntariado } from '@/data/i18n/content/voluntariado'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: 'Voluntariado',
    title: 'Voluntariado en la visita del Papa León XIV a España',
    subtitle: 'Cómo participar como voluntario en el viaje apostólico de junio de 2026',
    whyTitle: 'Por qué ser voluntario',
    whyBody:
      'Los voluntarios son el alma de toda visita papal. En la JMJ Madrid 2011 participaron más de 35.000 personas; en la visita del Papa Francisco a Fátima 2017, unos 12.000. Para esta visita de junio de 2026 se esperan entre 6.000 y 8.000 voluntarios repartidos por las cuatro ciudades (Madrid, Barcelona, Gran Canaria y Tenerife).',
    areasTitle: 'Áreas de voluntariado',
    requirementsTitle: 'Requisitos',
    benefitsTitle: 'Beneficios de ser voluntario',
    howToTitle: 'Cómo apuntarse',
    howToBody:
      'La inscripción oficial se gestiona a través del portal de la visita (conelpapa.es) y de las diócesis receptoras. Abre habitualmente 6 meses antes del viaje. Pasos:',
    steps: [
      'Registro en el portal oficial con tus datos y una foto',
      'Elegir áreas preferentes (puedes marcar varias)',
      'Firmar el compromiso de asistencia y aceptar el código de conducta',
      'Completar la formación online (8-16 horas según área)',
      'Formación presencial 1-2 semanas antes de la visita',
      'Recogida de credencial y kit en tu ciudad asignada',
    ],
    perfilBuscado: 'Perfil buscado',
    numPlazas: 'Plazas estimadas',
    officialLinks: 'Enlaces oficiales',
    diocesis: 'Diócesis receptoras',
    minAge: 'Las áreas logísticas y sanitarias requieren ser mayor de 18 años.',
  },
  en: {
    breadcrumb: 'Volunteering',
    title: 'Volunteering at Pope Leo XIV’s visit to Spain',
    subtitle: 'How to take part as a volunteer in the June 2026 apostolic journey',
    whyTitle: 'Why volunteer',
    whyBody:
      'Volunteers are the backbone of every papal visit. WYD Madrid 2011 had over 35,000 volunteers; Pope Francis’ visit to Fatima 2017, around 12,000. For June 2026, between 6,000 and 8,000 volunteers are expected across the four host cities.',
    areasTitle: 'Volunteer areas',
    requirementsTitle: 'Requirements',
    benefitsTitle: 'Benefits',
    howToTitle: 'How to apply',
    howToBody:
      'Official registration is managed via the visit portal (conelpapa.es) and the host dioceses. It usually opens 6 months before the trip. Steps:',
    steps: [
      'Register on the official portal with your data and a photo',
      'Choose preferred areas (multiple allowed)',
      'Sign attendance commitment and accept code of conduct',
      'Complete online training (8-16 hours depending on area)',
      'Attend in-person training 1-2 weeks before the visit',
      'Collect your credential and kit in the assigned city',
    ],
    perfilBuscado: 'Profile sought',
    numPlazas: 'Estimated places',
    officialLinks: 'Official links',
    diocesis: 'Host dioceses',
    minAge: 'Logistics and medical areas require being 18+.',
  },
  it: {
    breadcrumb: 'Volontariato',
    title: 'Volontariato per la visita di Papa Leone XIV in Spagna',
    subtitle: 'Come partecipare come volontario al viaggio apostolico del giugno 2026',
    whyTitle: 'Perché fare il volontario',
    whyBody: 'I volontari sono l’anima di ogni visita papale. Attesi 6.000-8.000 volontari nelle quattro città ospitanti.',
    areasTitle: 'Aree di volontariato',
    requirementsTitle: 'Requisiti',
    benefitsTitle: 'Benefici',
    howToTitle: 'Come candidarsi',
    howToBody: 'L’iscrizione si gestisce via conelpapa.es e le diocesi ospitanti. Apre 6 mesi prima del viaggio.',
    steps: [
      'Registrazione sul portale ufficiale',
      'Scelta delle aree preferite',
      'Firma dell’impegno',
      'Formazione online (8-16 ore)',
      'Formazione in presenza 1-2 settimane prima',
      'Ritiro di credenziale e kit',
    ],
    perfilBuscado: 'Profilo cercato',
    numPlazas: 'Posti stimati',
    officialLinks: 'Link ufficiali',
    diocesis: 'Diocesi ospitanti',
    minAge: 'Logistica e area sanitaria: 18+.',
  },
  fr: {
    breadcrumb: 'Bénévolat',
    title: 'Bénévolat pour la visite du Pape Léon XIV en Espagne',
    subtitle: 'Comment participer comme bénévole au voyage apostolique de juin 2026',
    whyTitle: 'Pourquoi être bénévole',
    whyBody: 'Les bénévoles sont l’âme de toute visite papale. 6.000-8.000 bénévoles attendus dans les quatre villes hôtes.',
    areasTitle: 'Domaines de bénévolat',
    requirementsTitle: 'Conditions requises',
    benefitsTitle: 'Avantages',
    howToTitle: 'Comment s’inscrire',
    howToBody: 'Inscription via conelpapa.es et les diocèses hôtes. Ouvre 6 mois avant.',
    steps: [
      'Inscription sur le portail officiel',
      'Choix des domaines préférés',
      'Signature de l’engagement',
      'Formation en ligne (8-16 h)',
      'Formation en présentiel 1-2 semaines avant',
      'Retrait de la carte et du kit',
    ],
    perfilBuscado: 'Profil recherché',
    numPlazas: 'Places estimées',
    officialLinks: 'Liens officiels',
    diocesis: 'Diocèses hôtes',
    minAge: 'Logistique et médical: 18 ans et plus.',
  },
  de: {
    breadcrumb: 'Ehrenamt',
    title: 'Ehrenamtliche beim Besuch von Papst Leo XIV in Spanien',
    subtitle: 'Wie man beim Apostolischen Besuch im Juni 2026 als Freiwillige:r mitmacht',
    whyTitle: 'Warum ehrenamtlich helfen',
    whyBody: 'Freiwillige sind das Herz jedes Papstbesuchs. 6.000-8.000 Freiwillige in den vier Gastgeberstädten erwartet.',
    areasTitle: 'Einsatzbereiche',
    requirementsTitle: 'Voraussetzungen',
    benefitsTitle: 'Vorteile',
    howToTitle: 'Wie anmelden',
    howToBody: 'Anmeldung über conelpapa.es und die Gastdiözesen. Öffnet 6 Monate vor der Reise.',
    steps: [
      'Registrierung auf dem offiziellen Portal',
      'Bereiche auswählen',
      'Verpflichtung unterschreiben',
      'Online-Training (8-16 Std)',
      'Präsenztraining 1-2 Wochen vorher',
      'Ausweis und Kit abholen',
    ],
    perfilBuscado: 'Gesuchtes Profil',
    numPlazas: 'Geschätzte Plätze',
    officialLinks: 'Offizielle Links',
    diocesis: 'Gastdiözesen',
    minAge: 'Logistik und Medizin: ab 18.',
  },
  pt: {
    breadcrumb: 'Voluntariado',
    title: 'Voluntariado na visita do Papa Leão XIV a Espanha',
    subtitle: 'Como participar como voluntário na viagem apostólica de junho de 2026',
    whyTitle: 'Porquê ser voluntário',
    whyBody: 'Os voluntários são a alma de toda visita papal. Esperam-se 6.000-8.000 voluntários nas quatro cidades.',
    areasTitle: 'Áreas de voluntariado',
    requirementsTitle: 'Requisitos',
    benefitsTitle: 'Benefícios',
    howToTitle: 'Como inscrever-se',
    howToBody: 'Inscrição via conelpapa.es e dioceses recetoras. Abre 6 meses antes da viagem.',
    steps: [
      'Registo no portal oficial',
      'Escolher áreas preferidas',
      'Assinar compromisso',
      'Formação online (8-16 h)',
      'Formação presencial 1-2 semanas antes',
      'Recolher credencial e kit',
    ],
    perfilBuscado: 'Perfil procurado',
    numPlazas: 'Lugares estimados',
    officialLinks: 'Ligações oficiais',
    diocesis: 'Dioceses recetoras',
    minAge: 'Logística e área sanitária: 18+.',
  },
  ca: {
    breadcrumb: 'Voluntariat',
    title: 'Voluntariat en la visita del Papa Lleó XIV a Espanya',
    subtitle: 'Com participar com a voluntari en el viatge apostòlic de juny de 2026',
    whyTitle: 'Per què ser voluntari',
    whyBody: 'Els voluntaris són l’ànima de cada visita papal. S’esperen 6.000-8.000 voluntaris a les quatre ciutats.',
    areasTitle: 'Àrees de voluntariat',
    requirementsTitle: 'Requisits',
    benefitsTitle: 'Beneficis',
    howToTitle: 'Com apuntar-se',
    howToBody: 'Inscripció via conelpapa.es i diòcesis receptores. Obre 6 mesos abans.',
    steps: [
      'Registre al portal oficial',
      'Triar àrees preferents',
      'Signar compromís',
      'Formació online (8-16 h)',
      'Formació presencial 1-2 setmanes abans',
      'Recollir credencial i kit',
    ],
    perfilBuscado: 'Perfil buscat',
    numPlazas: 'Places estimades',
    officialLinks: 'Enllaços oficials',
    diocesis: 'Diòcesis receptores',
    minAge: 'Logística i sanitari: +18.',
  },
  gl: {
    breadcrumb: 'Voluntariado',
    title: 'Voluntariado na visita do Papa León XIV a España',
    subtitle: 'Como participar como voluntario na viaxe apostólica de xuño de 2026',
    whyTitle: 'Por que ser voluntario',
    whyBody: 'Os voluntarios son a alma de toda visita papal. Agárdanse 6.000-8.000 voluntarios nas catro cidades.',
    areasTitle: 'Áreas de voluntariado',
    requirementsTitle: 'Requisitos',
    benefitsTitle: 'Beneficios',
    howToTitle: 'Como apuntarse',
    howToBody: 'Inscrición vía conelpapa.es e dioceses receptoras. Abre 6 meses antes.',
    steps: [
      'Rexistro no portal oficial',
      'Escoller áreas preferidas',
      'Asinar compromiso',
      'Formación online (8-16 h)',
      'Formación presencial 1-2 semanas antes',
      'Recoller credencial e kit',
    ],
    perfilBuscado: 'Perfil buscado',
    numPlazas: 'Prazas estimadas',
    officialLinks: 'Ligazóns oficiais',
    diocesis: 'Dioceses receptoras',
    minAge: 'Loxística e sanitario: +18.',
  },
  eu: {
    breadcrumb: 'Boluntariotza',
    title: 'Boluntariotza Leon XIV.a Aita Santuaren Espainiarako bisitaldian',
    subtitle: '2026ko ekaineko bidai apostolikoan boluntario gisa nola parte hartu',
    whyTitle: 'Zergatik boluntario',
    whyBody: 'Boluntarioak edozein bisitaldi papalaren arima dira. 6.000-8.000 boluntario espero dira lau hirietan.',
    areasTitle: 'Boluntariotza arloak',
    requirementsTitle: 'Baldintzak',
    benefitsTitle: 'Onurak',
    howToTitle: 'Nola izena eman',
    howToBody: 'Izen-ematea conelpapa.es bidez eta harrera elizbarrutiek. 6 hilabete lehenago irekitzen da.',
    steps: [
      'Erregistroa atari ofizialean',
      'Gustukoen arloak aukeratu',
      'Konpromisoa sinatu',
      'Online prestakuntza (8-16 ordu)',
      'Aurrez aurreko prestakuntza 1-2 aste lehenago',
      'Kreditu-txartela eta kita jaso',
    ],
    perfilBuscado: 'Bilatzen den profila',
    numPlazas: 'Estimatutako plazak',
    officialLinks: 'Lotura ofizialak',
    diocesis: 'Harrera elizbarrutiak',
    minAge: 'Logistika eta osasuna: 18+.',
  },
} as const satisfies Record<Locale, any>

export default function VoluntariadoPage({ locale }: Props) {
  const t = L[locale] || L.es
  const areasVoluntariado = getAreasVoluntariado(locale)
  const requisitos = getRequisitos(locale)
  const beneficios = getBeneficios(locale)

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/voluntariado', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <section className="mb-8 rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
          <h2 className="font-heading text-xl font-bold text-papal-navy">{t.whyTitle}</h2>
          <p className="mt-2 text-papal-navy/80">{t.whyBody}</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t.areasTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {areasVoluntariado.map((area) => (
              <article
                key={area.id}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-heading text-lg font-bold text-papal-navy">{area.titulo}</h3>
                <p className="mt-2 text-sm text-papal-navy/70">{area.descripcion}</p>
                <dl className="mt-3 space-y-1 text-xs text-papal-navy/60">
                  <div>
                    <dt className="inline font-semibold">{t.perfilBuscado}: </dt>
                    <dd className="inline">{area.perfilBuscado}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">{t.numPlazas}: </dt>
                    <dd className="inline">{area.numPlazasAprox}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.requirementsTitle}</h2>
            <ul className="mt-3 space-y-3 text-sm text-papal-navy/80">
              {requisitos.map((r) => (
                <li key={r.titulo}>
                  <strong className="text-papal-navy">{r.titulo}.</strong> {r.descripcion}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded bg-amber-50 p-2 text-xs text-amber-900">{t.minAge}</p>
          </div>

          <div className="rounded-xl bg-papal-navy p-6 text-white">
            <h2 className="font-heading text-xl font-bold">{t.benefitsTitle}</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              {beneficios.map((b) => (
                <li key={b.titulo}>
                  ✨ <strong>{b.titulo}.</strong> {b.descripcion}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10 rounded-xl border border-papal-gold/30 bg-papal-cream p-6">
          <h2 className="font-heading text-xl font-bold text-papal-navy">{t.howToTitle}</h2>
          <p className="mt-2 text-papal-navy/80">{t.howToBody}</p>
          <ol className="mt-4 space-y-2 text-sm text-papal-navy/80">
            {t.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-papal-gold text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-xl font-bold text-papal-navy">{t.officialLinks}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={enlacesOficialesVoluntariado.conelpapa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-papal-gold hover:underline"
              >
                conelpapa.es — Portal oficial de la visita →
              </a>
            </li>
            <li>
              <a
                href={enlacesOficialesVoluntariado.cee}
                target="_blank"
                rel="noopener noreferrer"
                className="text-papal-gold hover:underline"
              >
                conferenciaepiscopal.es — Conferencia Episcopal Española →
              </a>
            </li>
          </ul>
          <h3 className="mt-5 font-heading text-base font-semibold text-papal-navy">{t.diocesis}</h3>
          <ul className="mt-2 space-y-1 text-sm text-papal-navy/70">
            <li>
              <a href={enlacesOficialesVoluntariado.madrid} target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">
                · Archidiócesis de Madrid
              </a>
            </li>
            <li>
              <a href={enlacesOficialesVoluntariado.barcelona} target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">
                · Archidiócesis de Barcelona
              </a>
            </li>
            <li>
              <a href={enlacesOficialesVoluntariado.canarias} target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">
                · Diócesis de Canarias
              </a>
            </li>
            <li>
              <a href={enlacesOficialesVoluntariado.tenerife} target="_blank" rel="noopener noreferrer" className="hover:text-papal-gold-dark">
                · Diócesis de Tenerife
              </a>
            </li>
          </ul>
        </section>
      </Container>
    </>
  )
}
