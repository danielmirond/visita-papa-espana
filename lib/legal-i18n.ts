/**
 * Diccionarios de las páginas legales (aviso-legal, privacidad,
 * política de cookies) localizados a los 9 idiomas del sitio.
 *
 * Los datos del responsable (nombre, NIF, email) son constantes
 * universales (no se traducen). Los textos narrativos sí.
 *
 * Fallback: si un locale no tiene traducción de una clave, se usa ES.
 */

import type { Locale } from '@/data/i18n/types'

export const LEGAL_ENTITY = {
  titular: 'Daniel Mirón',
  nif: '44039446N',
  domain: 'www.visita-papa-2026.com',
  lastUpdated: '2026-04-19',
} as const

// =============================================================================
// AVISO LEGAL
// =============================================================================

type AvisoLegal = {
  title: string
  backLbl: string
  identBlock: string
  titularLbl: string
  nifLbl: string
  contactLbl: string
  contactCta: string
  domainLbl: string
  aboutTitle: string
  aboutBody: (officialUrl: string) => string
  afilTitle: string
  afilBody1: string
  afilBody2: string
  ipTitle: string
  ipBody: string
  privTitle: string
  privBody: (cookiesPath: string, privacidadPath: string) => string
  rightsLine: string
  liabilityTitle: string
  liabilityBody: string
}

const AVISO_LEGAL: Partial<Record<Locale, AvisoLegal>> = {
  es: {
    title: 'Aviso legal',
    backLbl: '← Volver',
    identBlock: 'Datos identificativos (art. 10 LSSI-CE)',
    titularLbl: 'Titular',
    nifLbl: 'NIF',
    contactLbl: 'Contacto',
    contactCta: 'Formulario de contacto',
    domainLbl: 'Dominio',
    aboutTitle: 'Sobre este sitio',
    aboutBody: (url) =>
      `Este sitio web es un proyecto informativo independiente y no tiene vinculación oficial con la Santa Sede, la Conferencia Episcopal Española, el Gobierno de España ni ninguna otra institución pública o religiosa. La información publicada se recopila de fuentes públicas y puede contener inexactitudes. Para información oficial, consulta ${url}.`,
    afilTitle: 'Política de afiliación y no intermediación',
    afilBody1:
      'Este sitio web participa en programas de afiliación (Amazon, Booking.com, Skyscanner, Renfe y similares). Algunos enlaces son enlaces de afiliado: si compras o reservas a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Obligación de transparencia conforme al art. 20 de la Ley 34/2002 (LSSI-CE).',
    afilBody2:
      'No somos agencia de viajes ni intermediario turístico. No organizamos, vendemos ni facturamos paquetes combinados, vuelos, alojamientos, entradas a actos litúrgicos ni servicios de transporte. Al pulsar un enlace de afiliado eres redirigido directamente al portal del proveedor, que es quien tramita la transacción y emite la factura. La Ley 16/2015 de viajes combinados no nos es aplicable.',
    ipTitle: 'Propiedad intelectual',
    ipBody:
      'Las imágenes utilizadas proceden de fuentes con licencia libre (Wikimedia Commons, Unsplash) o son de elaboración propia. Si crees que algún contenido infringe tus derechos, contacta con nosotros para su retirada inmediata.',
    privTitle: 'Privacidad y cookies',
    privBody: (c, p) =>
      `Este sitio utiliza cookies técnicas propias (exentas de consentimiento) y cookies analíticas de Google Analytics 4 (previo consentimiento del usuario). No existe newsletter ni suscripción por email. La única recogida de datos personales es el formulario de contacto. Consulta el detalle completo en nuestra política de cookies (${c}) y política de privacidad (${p}).`,
    rightsLine:
      'Para ejercer tus derechos RGPD, usa el formulario de contacto indicando el motivo "Ejercicio de derechos RGPD".',
    liabilityTitle: 'Limitación de responsabilidad',
    liabilityBody:
      'La información se proporciona "tal cual" y puede cambiar sin previo aviso. No nos hacemos responsables de decisiones tomadas en base a la información publicada. Consulta siempre las fuentes oficiales antes de hacer planes definitivos.',
  },
  en: {
    title: 'Legal notice',
    backLbl: '← Back',
    identBlock: 'Identity details (LSSI-CE art. 10)',
    titularLbl: 'Owner',
    nifLbl: 'Tax ID (NIF)',
    contactLbl: 'Contact',
    contactCta: 'Contact form',
    domainLbl: 'Domain',
    aboutTitle: 'About this site',
    aboutBody: (url) =>
      `This website is an independent informational project with no official affiliation with the Holy See, the Spanish Episcopal Conference, the Government of Spain or any other public or religious institution. Information is collected from public sources and may contain inaccuracies. For official information, see ${url}.`,
    afilTitle: 'Affiliate and non-intermediary policy',
    afilBody1:
      'This website participates in affiliate programmes (Amazon, Booking.com, Skyscanner, Renfe and similar). Some links are affiliate links: if you buy or book through them, we receive a small commission at no extra cost to you. Transparency obligation under Spanish Law 34/2002 (LSSI-CE) art. 20.',
    afilBody2:
      'We are not a travel agency nor a tourism intermediary. We do not organise, sell or invoice package tours, flights, accommodation, liturgical event tickets or transport services. When you click an affiliate link you are redirected to the provider, who handles the transaction and issues the invoice. Spanish Law 16/2015 on package travel does not apply to us.',
    ipTitle: 'Intellectual property',
    ipBody:
      'Images come from freely-licensed sources (Wikimedia Commons, Unsplash) or are original. If you believe any content infringes your rights, contact us for immediate removal.',
    privTitle: 'Privacy and cookies',
    privBody: (c, p) =>
      `This site uses its own technical cookies (exempt from consent) and Google Analytics 4 cookies (subject to user consent). There is no newsletter or email subscription. The only personal data collection is the contact form. See full detail in our cookie policy (${c}) and privacy policy (${p}).`,
    rightsLine:
      'To exercise your GDPR rights, use the contact form and select "Exercise of GDPR rights" as the reason.',
    liabilityTitle: 'Liability disclaimer',
    liabilityBody:
      'Information is provided "as is" and may change without notice. We are not liable for decisions based on the published information. Always consult official sources before making final plans.',
  },
  it: {
    title: 'Note legali',
    backLbl: '← Indietro',
    identBlock: 'Dati identificativi (art. 10 LSSI-CE)',
    titularLbl: 'Titolare',
    nifLbl: 'Codice fiscale',
    contactLbl: 'Contatto',
    contactCta: 'Modulo di contatto',
    domainLbl: 'Dominio',
    aboutTitle: 'Su questo sito',
    aboutBody: (url) =>
      `Questo sito è un progetto informativo indipendente senza affiliazione ufficiale con la Santa Sede, la Conferenza Episcopale Spagnola, il Governo spagnolo o altre istituzioni pubbliche o religiose. Le informazioni provengono da fonti pubbliche e possono contenere imprecisioni. Per informazioni ufficiali: ${url}.`,
    afilTitle: 'Politica di affiliazione e non intermediazione',
    afilBody1:
      'Questo sito partecipa a programmi di affiliazione (Amazon, Booking.com, Skyscanner, Renfe e simili). Alcuni link sono link di affiliazione: se acquisti o prenoti, riceviamo una piccola commissione senza costi aggiuntivi. Obbligo di trasparenza ex art. 20 LSSI-CE.',
    afilBody2:
      'Non siamo agenzia di viaggi né intermediario turistico. Non organizziamo, vendiamo né fatturiamo pacchetti, voli, alloggi, biglietti di eventi o servizi di trasporto. Al clic sul link di affiliazione sei reindirizzato al fornitore, che gestisce la transazione. La legge 16/2015 sui pacchetti turistici non ci si applica.',
    ipTitle: 'Proprietà intellettuale',
    ipBody:
      'Le immagini provengono da fonti con licenza libera (Wikimedia Commons, Unsplash) o sono originali. Se un contenuto viola i tuoi diritti, contattaci per la rimozione immediata.',
    privTitle: 'Privacy e cookie',
    privBody: (c, p) =>
      `Il sito usa cookie tecnici propri (esenti dal consenso) e cookie di Google Analytics 4 (con consenso). Non esiste newsletter. L'unica raccolta di dati personali è il modulo di contatto. Dettagli in politica dei cookie (${c}) e privacy (${p}).`,
    rightsLine:
      'Per esercitare i tuoi diritti GDPR, usa il modulo di contatto indicando "Esercizio dei diritti GDPR".',
    liabilityTitle: 'Limitazione di responsabilità',
    liabilityBody:
      'Le informazioni sono fornite "così come sono" e possono cambiare senza preavviso. Non siamo responsabili delle decisioni prese sulla base dei contenuti pubblicati. Consulta sempre le fonti ufficiali.',
  },
  fr: {
    title: 'Mentions légales',
    backLbl: '← Retour',
    identBlock: 'Données d\'identification (art. 10 LSSI-CE)',
    titularLbl: 'Titulaire',
    nifLbl: 'NIF (ID fiscal)',
    contactLbl: 'Contact',
    contactCta: 'Formulaire de contact',
    domainLbl: 'Domaine',
    aboutTitle: 'À propos de ce site',
    aboutBody: (url) =>
      `Ce site est un projet informatif indépendant sans affiliation officielle avec le Saint-Siège, la Conférence Épiscopale Espagnole, le Gouvernement d'Espagne ou toute autre institution publique ou religieuse. Les informations proviennent de sources publiques. Pour info officielle : ${url}.`,
    afilTitle: 'Politique d\'affiliation et de non-intermédiation',
    afilBody1:
      'Ce site participe à des programmes d\'affiliation (Amazon, Booking.com, Skyscanner, Renfe, etc.). Certains liens sont des liens affiliés : si tu achètes ou réserves via ces liens, nous recevons une petite commission sans coût supplémentaire. Obligation de transparence (art. 20 LSSI-CE).',
    afilBody2:
      'Nous ne sommes ni agence de voyages ni intermédiaire touristique. Nous n\'organisons, vendons ni facturons aucun forfait, vol, hébergement, billet ou service de transport. En cliquant sur un lien affilié tu es redirigé vers le fournisseur. La Loi 16/2015 sur les voyages à forfait ne nous est pas applicable.',
    ipTitle: 'Propriété intellectuelle',
    ipBody:
      'Les images proviennent de sources à licence libre (Wikimedia Commons, Unsplash) ou sont originales. Si un contenu viole tes droits, contacte-nous pour un retrait immédiat.',
    privTitle: 'Vie privée et cookies',
    privBody: (c, p) =>
      `Ce site utilise des cookies techniques propres (exemptés de consentement) et Google Analytics 4 (avec consentement). Pas de newsletter. La seule collecte de données personnelles est le formulaire de contact. Détails dans la politique de cookies (${c}) et de confidentialité (${p}).`,
    rightsLine:
      'Pour exercer tes droits RGPD, utilise le formulaire de contact avec le motif "Exercice des droits RGPD".',
    liabilityTitle: 'Limitation de responsabilité',
    liabilityBody:
      'Les informations sont fournies "en l\'état" et peuvent changer sans préavis. Nous ne sommes pas responsables des décisions prises sur la base des contenus. Consulte toujours les sources officielles.',
  },
  de: {
    title: 'Impressum',
    backLbl: '← Zurück',
    identBlock: 'Identifikationsdaten (LSSI-CE Art. 10)',
    titularLbl: 'Inhaber',
    nifLbl: 'Steuer-ID (NIF)',
    contactLbl: 'Kontakt',
    contactCta: 'Kontaktformular',
    domainLbl: 'Domain',
    aboutTitle: 'Über diese Website',
    aboutBody: (url) =>
      `Diese Website ist ein unabhängiges Informationsprojekt ohne offizielle Verbindung zum Heiligen Stuhl, der Spanischen Bischofskonferenz, der Regierung Spaniens oder anderen öffentlichen/religiösen Institutionen. Informationen aus öffentlichen Quellen. Für offizielle Informationen: ${url}.`,
    afilTitle: 'Affiliate- und Nichtvermittlungsrichtlinie',
    afilBody1:
      'Diese Website nimmt an Affiliate-Programmen teil (Amazon, Booking.com, Skyscanner, Renfe u. a.). Einige Links sind Affiliate-Links: bei Kauf/Buchung erhalten wir eine kleine Provision ohne Mehrkosten. Transparenzpflicht nach LSSI-CE Art. 20.',
    afilBody2:
      'Wir sind weder Reisebüro noch touristischer Vermittler. Wir organisieren, verkaufen oder stellen keine Pauschalreisen, Flüge, Unterkünfte, Eventtickets oder Transportdienste in Rechnung. Beim Klick auf einen Affiliate-Link wirst du zum Anbieter weitergeleitet. Gesetz 16/2015 über Pauschalreisen gilt nicht für uns.',
    ipTitle: 'Urheberrecht',
    ipBody:
      'Bilder stammen aus frei lizenzierten Quellen (Wikimedia Commons, Unsplash) oder sind originell. Bei Urheberrechtsverletzung Kontakt zur sofortigen Entfernung.',
    privTitle: 'Datenschutz und Cookies',
    privBody: (c, p) =>
      `Die Website nutzt eigene technische Cookies (einwilligungsfrei) und Google Analytics 4 (mit Einwilligung). Kein Newsletter. Die einzige Erhebung personenbezogener Daten erfolgt über das Kontaktformular. Details in der Cookie-Richtlinie (${c}) und Datenschutzerklärung (${p}).`,
    rightsLine:
      'Um deine DSGVO-Rechte auszuüben, nutze das Kontaktformular mit dem Grund "Ausübung der DSGVO-Rechte".',
    liabilityTitle: 'Haftungsausschluss',
    liabilityBody:
      'Informationen werden "wie besehen" bereitgestellt und können sich ohne Vorankündigung ändern. Wir haften nicht für Entscheidungen aufgrund veröffentlichter Inhalte. Immer offizielle Quellen konsultieren.',
  },
  pt: {
    title: 'Aviso legal',
    backLbl: '← Voltar',
    identBlock: 'Dados identificativos (art. 10 LSSI-CE)',
    titularLbl: 'Titular',
    nifLbl: 'NIF',
    contactLbl: 'Contacto',
    contactCta: 'Formulário de contacto',
    domainLbl: 'Domínio',
    aboutTitle: 'Sobre este site',
    aboutBody: (url) =>
      `Este site é um projeto informativo independente sem vinculação oficial com a Santa Sé, a Conferência Episcopal Espanhola, o Governo de Espanha ou outras instituições públicas/religiosas. Informações de fontes públicas. Para informação oficial: ${url}.`,
    afilTitle: 'Política de afiliação e não intermediação',
    afilBody1:
      'Este site participa em programas de afiliação (Amazon, Booking.com, Skyscanner, Renfe e similares). Alguns links são de afiliação: se compras ou reservas através deles, recebemos uma pequena comissão sem custo adicional. Obrigação de transparência (art. 20 LSSI-CE).',
    afilBody2:
      'Não somos agência de viagens nem intermediário turístico. Não organizamos, vendemos ou faturamos pacotes, voos, alojamentos, bilhetes nem serviços de transporte. Ao clicar num link de afiliação és redirecionado ao fornecedor. A Lei 16/2015 sobre pacotes de viagem não nos é aplicável.',
    ipTitle: 'Propriedade intelectual',
    ipBody:
      'As imagens provêm de fontes com licença livre (Wikimedia Commons, Unsplash) ou são originais. Se algum conteúdo viola os teus direitos, contacta-nos para remoção imediata.',
    privTitle: 'Privacidade e cookies',
    privBody: (c, p) =>
      `O site usa cookies técnicos próprios (isentos de consentimento) e Google Analytics 4 (com consentimento). Não há newsletter. A única recolha de dados pessoais é o formulário de contacto. Detalhes na política de cookies (${c}) e privacidade (${p}).`,
    rightsLine:
      'Para exerceres os teus direitos RGPD, usa o formulário de contacto com o motivo "Exercício de direitos RGPD".',
    liabilityTitle: 'Limitação de responsabilidade',
    liabilityBody:
      'A informação é fornecida "tal como está" e pode alterar-se sem aviso. Não somos responsáveis por decisões tomadas com base nos conteúdos. Consulta sempre as fontes oficiais.',
  },
  ca: {
    title: 'Avís legal',
    backLbl: '← Tornar',
    identBlock: 'Dades identificatives (art. 10 LSSI-CE)',
    titularLbl: 'Titular',
    nifLbl: 'NIF',
    contactLbl: 'Contacte',
    contactCta: 'Formulari de contacte',
    domainLbl: 'Domini',
    aboutTitle: 'Sobre aquest lloc',
    aboutBody: (url) =>
      `Aquest lloc és un projecte informatiu independent sense vinculació oficial amb la Santa Seu, la Conferència Episcopal Espanyola, el Govern d'Espanya ni cap altra institució. Informació de fonts públiques. Per informació oficial: ${url}.`,
    afilTitle: 'Política d\'afiliació i no intermediació',
    afilBody1:
      'Aquest lloc participa en programes d\'afiliació (Amazon, Booking.com, Skyscanner, Renfe i similars). Alguns enllaços són d\'afiliació: si compres o reserves, rebem una petita comissió sense cost addicional. Obligació de transparència (art. 20 LSSI-CE).',
    afilBody2:
      'No som agència de viatges ni intermediari turístic. No organitzem, venem ni facturem paquets, vols, allotjaments, entrades ni serveis de transport. En fer clic a un enllaç d\'afiliació ets redirigit al proveïdor. La Llei 16/2015 de viatges combinats no ens és aplicable.',
    ipTitle: 'Propietat intel·lectual',
    ipBody:
      'Les imatges provenen de fonts amb llicència lliure (Wikimedia Commons, Unsplash) o són originals. Si algun contingut vulnera els teus drets, contacta\'ns per a la retirada immediata.',
    privTitle: 'Privacitat i galetes',
    privBody: (c, p) =>
      `El lloc usa galetes tècniques pròpies (exemptes de consentiment) i Google Analytics 4 (amb consentiment). No hi ha newsletter. L'única recollida de dades personals és el formulari de contacte. Detalls a la política de galetes (${c}) i privacitat (${p}).`,
    rightsLine:
      'Per exercir els teus drets RGPD, usa el formulari de contacte amb el motiu "Exercici de drets RGPD".',
    liabilityTitle: 'Limitació de responsabilitat',
    liabilityBody:
      'La informació es proporciona "tal qual" i pot canviar sense avís. No ens fem responsables de decisions preses basades en els continguts. Consulta sempre les fonts oficials.',
  },
  gl: {
    title: 'Aviso legal',
    backLbl: '← Volver',
    identBlock: 'Datos identificativos (art. 10 LSSI-CE)',
    titularLbl: 'Titular',
    nifLbl: 'NIF',
    contactLbl: 'Contacto',
    contactCta: 'Formulario de contacto',
    domainLbl: 'Dominio',
    aboutTitle: 'Sobre este sitio',
    aboutBody: (url) =>
      `Este sitio é un proxecto informativo independente sen vinculación oficial coa Santa Sé, a Conferencia Episcopal Española, o Goberno de España nin ningunha outra institución. Información de fontes públicas. Para información oficial: ${url}.`,
    afilTitle: 'Política de afiliación e non intermediación',
    afilBody1:
      'Este sitio participa en programas de afiliación (Amazon, Booking.com, Skyscanner, Renfe e similares). Algunhas ligazóns son de afiliación: se compras ou reservas, recibimos unha pequena comisión sen custo adicional. Obriga de transparencia (art. 20 LSSI-CE).',
    afilBody2:
      'Non somos axencia de viaxes nin intermediario turístico. Non organizamos, vendemos nin facturamos paquetes, voos, aloxamentos, entradas nin servizos de transporte. Ao premer nunha ligazón de afiliación redirixímoste ao provedor. A Lei 16/2015 de viaxes combinadas non nos é aplicable.',
    ipTitle: 'Propiedade intelectual',
    ipBody:
      'As imaxes proveñen de fontes con licenza libre (Wikimedia Commons, Unsplash) ou son orixinais. Se algún contido vulnera os teus dereitos, contáctanos para a retirada inmediata.',
    privTitle: 'Privacidade e cookies',
    privBody: (c, p) =>
      `O sitio usa cookies técnicas propias (exentas de consentimento) e Google Analytics 4 (con consentimento). Non hai newsletter. A única recollida de datos persoais é o formulario de contacto. Detalles na política de cookies (${c}) e privacidade (${p}).`,
    rightsLine:
      'Para exercer os teus dereitos RGPD, usa o formulario de contacto co motivo "Exercicio de dereitos RGPD".',
    liabilityTitle: 'Limitación de responsabilidade',
    liabilityBody:
      'A información fornécese "tal cal" e pode cambiar sen aviso. Non nos facemos responsables de decisións tomadas en base aos contidos. Consulta sempre as fontes oficiais.',
  },
  eu: {
    title: 'Lege-oharra',
    backLbl: '← Itzuli',
    identBlock: 'Identifikazio-datuak (LSSI-CE 10. artikulua)',
    titularLbl: 'Titularra',
    nifLbl: 'NIF',
    contactLbl: 'Kontaktua',
    contactCta: 'Kontaktu-formularioa',
    domainLbl: 'Domeinua',
    aboutTitle: 'Webgune honi buruz',
    aboutBody: (url) =>
      `Webgune hau proiektu informatibo independentea da, Egoitza Santuarekin, Espainiako Gotzainen Batzarrarekin, Espainiako Gobernuarekin edo beste erakunde publiko/erlijiosoekin lotura ofizialik gabe. Informazioa iturri publikoetatik. Informazio ofizialerako: ${url}.`,
    afilTitle: 'Afiliazio- eta ez-bitartekaritza-politika',
    afilBody1:
      'Webgune honek afiliazio-programetan parte hartzen du (Amazon, Booking.com, Skyscanner, Renfe eta antzekoak). Esteka batzuk afiliazio-estekak dira: erosten edo erreserbatzen baduzu, komisio txiki bat jasotzen dugu kostu gehigarririk gabe. Gardentasun-betebeharra (LSSI-CE 20. art.).',
    afilBody2:
      'Ez gara bidaia-agentzia ez turismo-bitartekaria. Ez ditugu pakete, hegaldi, ostatu, sarrera edo garraio-zerbitzuak antolatzen, saltzen edo fakturatzen. Afiliazio-esteka batean sakatzean hornitzailearengana birbidalitzen zaitugu. 16/2015 bidaia konbinatuen Legea ez zaigu aplikatzen.',
    ipTitle: 'Jabetza intelektuala',
    ipBody:
      'Irudiak lizentzia libreko iturrietatik datoz (Wikimedia Commons, Unsplash) edo originalak dira. Edukiren batek zure eskubideak urratzen baditu, harremanetan jarri berehala kentzeko.',
    privTitle: 'Pribatutasuna eta cookieak',
    privBody: (c, p) =>
      `Webguneak cookie tekniko propioak (adostasunetik salbuetsitakoak) eta Google Analytics 4 cookieak (adostasunarekin) erabiltzen ditu. Ez dago newsletterrik. Datu pertsonalen bilketa bakarra kontaktu-formularioa da. Xehetasunak cookie-politikan (${c}) eta pribatutasun-politikan (${p}).`,
    rightsLine:
      'Zure RGPD eskubideak gauzatzeko, erabili kontaktu-formularioa "RGPD eskubideen egikaritza" arrazoia aukeratuta.',
    liabilityTitle: 'Erantzukizun-muga',
    liabilityBody:
      'Informazioa "den bezala" ematen da eta aldatu daiteke abisurik gabe. Ez gara argitaratutako edukietan oinarritutako erabakien erantzule. Beti iturri ofizialak kontsultatu.',
  },
}

export function getAvisoLegal(locale: Locale): AvisoLegal {
  return AVISO_LEGAL[locale] || AVISO_LEGAL.es!
}
