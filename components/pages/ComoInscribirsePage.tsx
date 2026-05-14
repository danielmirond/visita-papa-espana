import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props {
  locale: Locale
}

type Step = { num: number; title: string; body: string }
type Mode = { name: string; range: string; note: string }
type Warning = { icon: string; text: string }
type RelatedLink = { href: string; text: string }
type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  ctaPrimary: string
  ctaSecondary: string
  modesTitle: string
  modes: Mode[]
  stepsTitle: string
  steps: Step[]
  warningsTitle: string
  warnings: Warning[]
  dataTitle: string
  dataIntro: string
  dataItems: string[]
  sourceTitle: string
  sourceBody: string
  relatedTitle: string
  relatedLinks: RelatedLink[]
}

const REGISTRATION_URL = 'https://inscripciones.conelpapa.es'

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Cómo inscribirse',
    title: 'Cómo inscribirse a los actos del Papa León XIV en España',
    subtitle: 'Guía paso a paso · Inscripción oficial gratuita en inscripciones.conelpapa.es',
    intro: 'Para asistir a los actos públicos del Viaje Apostólico del Papa León XIV a España (6-12 de junio de 2026) es obligatoria la inscripción previa. Es gratuita y se realiza en la plataforma oficial de la Conferencia Episcopal Española. La inscripción NO asegura la plaza: el orden de inscripción y la disponibilidad de aforo determinan el acceso. Recomendación: inscríbete cuanto antes.',
    ctaPrimary: 'Ir al formulario oficial',
    ctaSecondary: 'Ver el programa',
    modesTitle: 'Tres modalidades de inscripción',
    modes: [
      { name: 'Grupo', range: 'Parroquia, colegio, comunidad o asociación', note: 'Un único correo/móvil asociado al grupo. Designa un responsable y añade los miembros. La inscripción puede ser escalonada, pero el orden y el tiempo determinan el acceso grupal.' },
      { name: 'Familia / Amigos', range: '2 a 15 personas', note: 'Sin responsable obligatorio. Útil para familias y grupos pequeños de amigos.' },
      { name: 'Individual', range: 'Solo tú', note: 'Sin grupo. La diócesis recomienda acercarse a la parroquia más cercana y unirse a su grupo si es posible.' },
    ],
    stepsTitle: 'Los 6 pasos para inscribirte',
    steps: [
      { num: 1, title: 'Accede al enlace', body: 'Entra en https://inscripciones.conelpapa.es y regístrate con tu correo electrónico o tu número de móvil. Acepta la política de privacidad y la política de cookies para autorizar el tratamiento de los datos de registro.' },
      { num: 2, title: 'Verifica tu acceso', body: 'Recibirás un correo electrónico (o un SMS si elegiste móvil) con un código de un solo uso. Haz clic en el enlace o introduce el código para validar tu acceso a la plataforma.' },
      { num: 3, title: 'Selecciona el tipo de asistencia', body: 'Elige cómo vas a asistir: en grupo (parroquia, colegio, comunidad), en familia o con amigos (2-15 personas), o individualmente. Esta elección determina cómo se gestionan las plazas.' },
      { num: 4, title: 'Elige los eventos', body: 'Filtra por ciudad (Madrid, Gran Canaria, Tenerife) y selecciona los actos a los que quieres asistir. Puedes inscribirte a más de un evento. La Eucaristía del Estadio de Gran Canaria, por ejemplo, está abierta a todo el público hasta completar aforo.' },
      { num: 5, title: 'Rellena los datos personales', body: 'Por cada persona inscrita: nombre y apellidos, fecha de nacimiento, DNI/NIE/Pasaporte, código postal, país de procedencia, sexo, situación eclesial (laico, seminarista, clérigo secular, clérigo consagrado, consagrado/a). Si la persona tiene discapacidad, indícalo junto con la necesidad de acceso especial y de acompañante.' },
      { num: 6, title: 'Confirma la pre-inscripción', body: 'Revisa el resumen y pulsa "Confirmar pre-inscripción". Recibirás un email con el informe. Hasta la confirmación definitiva podrás hacer cambios. Recuerda que la pre-inscripción no asegura plaza.' },
    ],
    warningsTitle: 'Advertencias importantes',
    warnings: [
      { icon: '⚠️', text: 'La inscripción NO asegura la plaza. El orden de registro y la disponibilidad de aforo determinan el acceso final. Inscríbete cuanto antes.' },
      { icon: '⏱️', text: 'En los grupos, el orden y el tiempo de inscripción determinan el acceso conjunto al evento. Se recomienda preparar un listado y registrar a todos los miembros lo antes posible.' },
      { icon: '🧒', text: 'Para inscribir a un menor, su tutor legal debe estar registrado previamente y ser seleccionado como responsable durante la inscripción del menor.' },
      { icon: '♿', text: 'Las personas con discapacidad deben indicar el tipo, si necesitan acceso especial y si requieren acompañante o asistencia adicional.' },
      { icon: '🆔', text: 'Cada persona inscrita debe aportar un documento de identidad válido (DNI, NIE o Pasaporte). Sin este dato no se completa la inscripción.' },
      { icon: '📧', text: 'Si te inscribes en grupo, todo el grupo se gestiona con un único correo o móvil asociado. Los recordatorios y avisos llegarán a esa dirección.' },
    ],
    dataTitle: 'Qué datos pide el formulario',
    dataIntro: 'La inscripción solicita los siguientes datos por cada participante. Tenlos preparados antes de empezar para agilizar el proceso, especialmente si vas a inscribir un grupo grande.',
    dataItems: [
      'Nombre y apellidos completos',
      'Fecha de nacimiento (DD/MM/AAAA)',
      'Documento de identidad: DNI, NIE o Pasaporte',
      'Código postal de residencia',
      'País de procedencia',
      'Sexo (hombre o mujer)',
      'Situación eclesial: laico/a, seminarista, clérigo secular, clérigo consagrado o consagrado/a',
      'Email o número de móvil válido',
      'Si la persona tiene discapacidad: tipo, necesidad de acceso especial y acompañante',
    ],
    sourceTitle: 'Fuente oficial',
    sourceBody: 'La información de esta página procede de la guía oficial publicada el 16 de abril de 2026 por la Diócesis de Canarias y de la plataforma de inscripciones de la Conferencia Episcopal Española (inscripciones.conelpapa.es). Esta guía corresponde a los actos de Madrid, Gran Canaria y Tenerife. Para cualquier duda, los canales oficiales son la diócesis correspondiente y la web conelpapa.es.',
    relatedTitle: 'Páginas relacionadas',
    relatedLinks: [
      { href: '/programa', text: 'Programa completo del viaje' },
      { href: '/como-asistir', text: 'Cómo asistir: información general' },
      { href: '/que-llevar', text: 'Kit del peregrino: qué llevar a los actos' },
      { href: '/papa-bernabeu', text: 'Encuentro diocesano en el Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Vigilia juvenil en la Plaza de Lima' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'How to register',
    title: 'How to register for Pope Leo XIV’s events in Spain',
    subtitle: 'Step-by-step guide · Free official registration at inscripciones.conelpapa.es',
    intro: 'To attend the public events of Pope Leo XIV’s Apostolic Journey to Spain (6-12 June 2026), prior registration is mandatory. It is free and made on the official platform of the Spanish Episcopal Conference. Registration does NOT guarantee a place: order of registration and venue capacity determine access. Recommendation: register as soon as possible.',
    ctaPrimary: 'Open the official form',
    ctaSecondary: 'See the schedule',
    modesTitle: 'Three registration modes',
    modes: [
      { name: 'Group', range: 'Parish, school, community or association', note: 'A single email/phone associated with the group. Appoint a person in charge and add members. Registration can be staggered, but the order and time determine group access.' },
      { name: 'Family / Friends', range: '2 to 15 people', note: 'No mandatory leader. Useful for families and small groups of friends.' },
      { name: 'Individual', range: 'Just you', note: 'No group. The diocese recommends approaching the nearest parish and joining their group if possible.' },
    ],
    stepsTitle: 'The 6 steps to register',
    steps: [
      { num: 1, title: 'Open the link', body: 'Go to https://inscripciones.conelpapa.es and register with your email or phone number. Accept the privacy policy and cookie policy to authorise the processing of registration data.' },
      { num: 2, title: 'Verify access', body: 'You will receive an email (or SMS if you chose phone) with a one-time code. Click the link or enter the code to validate your access to the platform.' },
      { num: 3, title: 'Select the attendance type', body: 'Choose how you will attend: in a group (parish, school, community), with family or friends (2-15 people), or individually. This choice determines how places are managed.' },
      { num: 4, title: 'Choose the events', body: 'Filter by city (Madrid, Gran Canaria, Tenerife) and select the events you want to attend. You can register for more than one. The Eucharist at the Gran Canaria Stadium, for example, is open to the public until capacity is reached.' },
      { num: 5, title: 'Fill in personal data', body: 'For each registered person: full name, date of birth, ID/NIE/Passport, postcode, country of origin, sex, ecclesial status (lay person, seminarian, secular cleric, consecrated cleric, consecrated). If the person has a disability, indicate it together with the need for special access and a companion.' },
      { num: 6, title: 'Confirm the pre-registration', body: 'Review the summary and click "Confirm pre-registration". You will receive an email with the report. Until the final confirmation you can make changes. Remember that pre-registration does not guarantee a place.' },
    ],
    warningsTitle: 'Important warnings',
    warnings: [
      { icon: '⚠️', text: 'Registration does NOT guarantee a place. The order of registration and venue capacity determine final access. Register as soon as possible.' },
      { icon: '⏱️', text: 'For groups, the order and time of registration determine joint access to the event. Prepare a list and register all members as soon as possible.' },
      { icon: '🧒', text: 'To register a minor, their legal guardian must be previously registered and selected as the person in charge during the minor’s registration.' },
      { icon: '♿', text: 'People with disability must indicate the type, whether they need special access and whether they require a companion or additional assistance.' },
      { icon: '🆔', text: 'Each registered person must provide a valid ID document (ID card, residence card or Passport). Without this data the registration is not completed.' },
      { icon: '📧', text: 'If you register as a group, the whole group is managed through a single associated email or phone. Reminders and notices will arrive at that address.' },
    ],
    dataTitle: 'What data the form requests',
    dataIntro: 'Registration requests the following data per participant. Have it ready before you start to speed up the process, especially if you are registering a large group.',
    dataItems: [
      'Full name and surname',
      'Date of birth (DD/MM/YYYY)',
      'ID document: ID card, residence card or Passport',
      'Residence postcode',
      'Country of origin',
      'Sex (male or female)',
      'Ecclesial status: lay person, seminarian, secular cleric, consecrated cleric or consecrated',
      'Valid email or phone number',
      'If the person has a disability: type, need for special access and companion',
    ],
    sourceTitle: 'Official source',
    sourceBody: 'The information on this page comes from the official guide published on 16 April 2026 by the Diocese of the Canary Islands and from the registration platform of the Spanish Episcopal Conference (inscripciones.conelpapa.es). This guide covers events in Madrid, Gran Canaria and Tenerife. For any questions, the official channels are the relevant diocese and the conelpapa.es website.',
    relatedTitle: 'Related pages',
    relatedLinks: [
      { href: '/programa', text: 'Full schedule of the journey' },
      { href: '/como-asistir', text: 'How to attend: general information' },
      { href: '/que-llevar', text: 'Pilgrim kit: what to bring' },
      { href: '/papa-bernabeu', text: 'Diocesan gathering at the Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Youth vigil at Plaza de Lima' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Come iscriversi',
    title: 'Come iscriversi agli atti di Papa Leone XIV in Spagna',
    subtitle: 'Guida passo-passo · Iscrizione ufficiale gratuita su inscripciones.conelpapa.es',
    intro: 'Per partecipare agli atti pubblici del Viaggio Apostolico di Papa Leone XIV in Spagna (6-12 giugno 2026) è obbligatoria l’iscrizione previa. È gratuita e si effettua sulla piattaforma ufficiale della Conferenza Episcopale Spagnola. L’iscrizione NON garantisce il posto: l’ordine di iscrizione e la disponibilità di capienza determinano l’accesso. Raccomandazione: iscriviti il prima possibile.',
    ctaPrimary: 'Apri il modulo ufficiale',
    ctaSecondary: 'Vedi il programma',
    modesTitle: 'Tre modalità di iscrizione',
    modes: [
      { name: 'Gruppo', range: 'Parrocchia, scuola, comunità o associazione', note: 'Un’unica email/telefono associata al gruppo. Designa un responsabile e aggiungi i membri. L’iscrizione può essere graduale, ma l’ordine e il tempo determinano l’accesso di gruppo.' },
      { name: 'Famiglia / Amici', range: 'Da 2 a 15 persone', note: 'Senza responsabile obbligatorio. Utile per famiglie e piccoli gruppi di amici.' },
      { name: 'Individuale', range: 'Solo tu', note: 'Senza gruppo. La diocesi raccomanda di rivolgersi alla parrocchia più vicina e unirsi al loro gruppo se possibile.' },
    ],
    stepsTitle: 'I 6 passi per iscriverti',
    steps: [
      { num: 1, title: 'Accedi al link', body: 'Entra su https://inscripciones.conelpapa.es e registrati con la tua email o il tuo numero di telefono. Accetta la privacy policy e la cookie policy per autorizzare il trattamento dei dati di registrazione.' },
      { num: 2, title: 'Verifica l’accesso', body: 'Riceverai un’email (o un SMS se hai scelto il telefono) con un codice usa e getta. Clicca sul link o inserisci il codice per validare il tuo accesso alla piattaforma.' },
      { num: 3, title: 'Seleziona il tipo di partecipazione', body: 'Scegli come parteciperai: in gruppo (parrocchia, scuola, comunità), in famiglia o con amici (2-15 persone), o individualmente. Questa scelta determina come si gestiscono i posti.' },
      { num: 4, title: 'Scegli gli eventi', body: 'Filtra per città (Madrid, Gran Canaria, Tenerife) e seleziona gli atti a cui vuoi partecipare. Puoi iscriverti a più di un evento. L’Eucaristia allo Stadio di Gran Canaria, ad esempio, è aperta al pubblico fino al raggiungimento della capienza.' },
      { num: 5, title: 'Compila i dati personali', body: 'Per ogni persona iscritta: nome e cognome, data di nascita, DNI/NIE/Passaporto, codice postale, paese di provenienza, sesso, situazione ecclesiale (laico, seminarista, chierico secolare, chierico consacrato, consacrato/a). Se la persona ha disabilità, indicalo insieme alla necessità di accesso speciale e accompagnatore.' },
      { num: 6, title: 'Conferma la pre-iscrizione', body: 'Rivedi il riepilogo e premi "Conferma pre-iscrizione". Riceverai un’email con il rapporto. Fino alla conferma definitiva puoi apportare modifiche. Ricorda che la pre-iscrizione non garantisce il posto.' },
    ],
    warningsTitle: 'Avvertenze importanti',
    warnings: [
      { icon: '⚠️', text: 'L’iscrizione NON garantisce il posto. L’ordine di registrazione e la disponibilità di capienza determinano l’accesso finale. Iscriviti il prima possibile.' },
      { icon: '⏱️', text: 'Nei gruppi, l’ordine e il tempo di iscrizione determinano l’accesso congiunto all’evento. Prepara un elenco e registra tutti i membri al più presto.' },
      { icon: '🧒', text: 'Per iscrivere un minore, il suo tutore legale deve essere già registrato e selezionato come responsabile durante l’iscrizione del minore.' },
      { icon: '♿', text: 'Le persone con disabilità devono indicare il tipo, se necessitano di accesso speciale e se richiedono un accompagnatore o assistenza.' },
      { icon: '🆔', text: 'Ogni persona iscritta deve fornire un documento d’identità valido (DNI, NIE o Passaporto). Senza questo dato l’iscrizione non si completa.' },
      { icon: '📧', text: 'Se ti iscrivi in gruppo, tutto il gruppo è gestito tramite un’unica email o telefono associato. Promemoria e avvisi arriveranno a quell’indirizzo.' },
    ],
    dataTitle: 'Quali dati richiede il modulo',
    dataIntro: 'L’iscrizione richiede i seguenti dati per ciascun partecipante. Tienili pronti prima di iniziare per accelerare il processo, soprattutto se iscrivi un gruppo numeroso.',
    dataItems: [
      'Nome e cognome completi',
      'Data di nascita (GG/MM/AAAA)',
      'Documento d’identità: DNI, NIE o Passaporto',
      'Codice postale di residenza',
      'Paese di provenienza',
      'Sesso (uomo o donna)',
      'Situazione ecclesiale: laico/a, seminarista, chierico secolare, chierico consacrato o consacrato/a',
      'Email o numero di telefono valido',
      'Se la persona ha disabilità: tipo, necessità di accesso speciale e accompagnatore',
    ],
    sourceTitle: 'Fonte ufficiale',
    sourceBody: 'Le informazioni di questa pagina provengono dalla guida ufficiale pubblicata il 16 aprile 2026 dalla Diocesi delle Canarie e dalla piattaforma di iscrizioni della Conferenza Episcopale Spagnola (inscripciones.conelpapa.es). Questa guida riguarda gli atti di Madrid, Gran Canaria e Tenerife. Per qualsiasi dubbio, i canali ufficiali sono la diocesi competente e il sito conelpapa.es.',
    relatedTitle: 'Pagine correlate',
    relatedLinks: [
      { href: '/programa', text: 'Programma completo del viaggio' },
      { href: '/como-asistir', text: 'Come partecipare: informazioni generali' },
      { href: '/que-llevar', text: 'Kit del pellegrino: cosa portare' },
      { href: '/papa-bernabeu', text: 'Incontro diocesano al Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Veglia giovanile in Plaza de Lima' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Comment s’inscrire',
    title: 'Comment s’inscrire aux actes du Pape Léon XIV en Espagne',
    subtitle: 'Guide pas à pas · Inscription officielle gratuite sur inscripciones.conelpapa.es',
    intro: 'Pour assister aux actes publics du Voyage apostolique du Pape Léon XIV en Espagne (6-12 juin 2026), l’inscription préalable est obligatoire. Elle est gratuite et se fait sur la plateforme officielle de la Conférence épiscopale espagnole. L’inscription NE garantit PAS la place : l’ordre d’inscription et la capacité d’accueil déterminent l’accès. Recommandation : inscrivez-vous dès que possible.',
    ctaPrimary: 'Ouvrir le formulaire officiel',
    ctaSecondary: 'Voir le programme',
    modesTitle: 'Trois modalités d’inscription',
    modes: [
      { name: 'Groupe', range: 'Paroisse, école, communauté ou association', note: 'Une seule adresse mail/téléphone associée au groupe. Désignez un responsable et ajoutez les membres. L’inscription peut être échelonnée, mais l’ordre et le temps déterminent l’accès du groupe.' },
      { name: 'Famille / Amis', range: 'De 2 à 15 personnes', note: 'Sans responsable obligatoire. Utile pour les familles et les petits groupes d’amis.' },
      { name: 'Individuel', range: 'Vous seul', note: 'Sans groupe. Le diocèse recommande de se rendre à la paroisse la plus proche et de rejoindre leur groupe si possible.' },
    ],
    stepsTitle: 'Les 6 étapes pour vous inscrire',
    steps: [
      { num: 1, title: 'Accédez au lien', body: 'Allez sur https://inscripciones.conelpapa.es et inscrivez-vous avec votre email ou votre numéro de téléphone. Acceptez la politique de confidentialité et la politique de cookies pour autoriser le traitement des données.' },
      { num: 2, title: 'Vérifiez votre accès', body: 'Vous recevrez un email (ou un SMS si vous avez choisi le téléphone) avec un code à usage unique. Cliquez sur le lien ou entrez le code pour valider votre accès à la plateforme.' },
      { num: 3, title: 'Sélectionnez le type de participation', body: 'Choisissez comment vous allez assister : en groupe (paroisse, école, communauté), en famille ou avec des amis (2-15 personnes), ou individuellement. Ce choix détermine la gestion des places.' },
      { num: 4, title: 'Choisissez les événements', body: 'Filtrez par ville (Madrid, Grande Canarie, Ténérife) et sélectionnez les actes auxquels vous souhaitez participer. Vous pouvez vous inscrire à plusieurs événements. L’Eucharistie au stade de Grande Canarie, par exemple, est ouverte au public jusqu’à atteindre la capacité.' },
      { num: 5, title: 'Remplissez les données personnelles', body: 'Pour chaque personne inscrite : nom et prénom, date de naissance, DNI/NIE/Passeport, code postal, pays d’origine, sexe, situation ecclésiale (laïc, séminariste, clerc séculier, clerc consacré, consacré/e). Si la personne a un handicap, indiquez-le avec le besoin d’accès spécial et d’accompagnateur.' },
      { num: 6, title: 'Confirmez la pré-inscription', body: 'Vérifiez le récapitulatif et appuyez sur "Confirmer la pré-inscription". Vous recevrez un email avec le rapport. Jusqu’à la confirmation définitive vous pouvez modifier. La pré-inscription ne garantit pas la place.' },
    ],
    warningsTitle: 'Avertissements importants',
    warnings: [
      { icon: '⚠️', text: 'L’inscription NE garantit PAS la place. L’ordre d’enregistrement et la capacité d’accueil déterminent l’accès final. Inscrivez-vous dès que possible.' },
      { icon: '⏱️', text: 'Pour les groupes, l’ordre et le temps d’inscription déterminent l’accès conjoint à l’événement. Préparez une liste et enregistrez tous les membres au plus vite.' },
      { icon: '🧒', text: 'Pour inscrire un mineur, son tuteur légal doit être préalablement enregistré et sélectionné comme responsable lors de l’inscription du mineur.' },
      { icon: '♿', text: 'Les personnes en situation de handicap doivent indiquer le type, si elles ont besoin d’un accès spécial et d’un accompagnateur ou d’une assistance.' },
      { icon: '🆔', text: 'Chaque personne inscrite doit fournir une pièce d’identité valide (carte d’identité, NIE ou Passeport). Sans cette donnée l’inscription n’est pas complétée.' },
      { icon: '📧', text: 'Si vous vous inscrivez en groupe, tout le groupe est géré via une seule adresse mail ou téléphone associé. Les rappels et avis arriveront à cette adresse.' },
    ],
    dataTitle: 'Quelles données demande le formulaire',
    dataIntro: 'L’inscription demande les données suivantes par participant. Préparez-les avant de commencer pour accélérer le processus, surtout si vous inscrivez un grand groupe.',
    dataItems: [
      'Nom et prénom complets',
      'Date de naissance (JJ/MM/AAAA)',
      'Pièce d’identité : carte d’identité, NIE ou Passeport',
      'Code postal de résidence',
      'Pays d’origine',
      'Sexe (homme ou femme)',
      'Situation ecclésiale : laïc, séminariste, clerc séculier, clerc consacré ou consacré/e',
      'Email ou numéro de téléphone valide',
      'Si la personne a un handicap : type, besoin d’accès spécial et d’accompagnateur',
    ],
    sourceTitle: 'Source officielle',
    sourceBody: 'Les informations de cette page proviennent du guide officiel publié le 16 avril 2026 par le Diocèse des Canaries et de la plateforme d’inscriptions de la Conférence épiscopale espagnole (inscripciones.conelpapa.es). Ce guide concerne les actes de Madrid, Grande Canarie et Ténérife. Pour toute question, les canaux officiels sont le diocèse compétent et le site conelpapa.es.',
    relatedTitle: 'Pages liées',
    relatedLinks: [
      { href: '/programa', text: 'Programme complet du voyage' },
      { href: '/como-asistir', text: 'Comment assister : informations générales' },
      { href: '/que-llevar', text: 'Kit du pèlerin : que apporter' },
      { href: '/papa-bernabeu', text: 'Rencontre diocésaine au Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Veillée des jeunes à Plaza de Lima' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Anmeldung',
    title: 'Wie man sich für die Akte von Papst Leo XIV. in Spanien anmeldet',
    subtitle: 'Schritt-für-Schritt-Anleitung · Kostenlose offizielle Anmeldung auf inscripciones.conelpapa.es',
    intro: 'Um an den öffentlichen Akten der Apostolischen Reise von Papst Leo XIV. nach Spanien (6.-12. Juni 2026) teilzunehmen, ist eine vorherige Anmeldung obligatorisch. Sie ist kostenlos und erfolgt über die offizielle Plattform der Spanischen Bischofskonferenz. Die Anmeldung GARANTIERT KEINEN Platz: Reihenfolge der Anmeldung und Veranstaltungskapazität bestimmen den Zugang. Empfehlung: Melden Sie sich so früh wie möglich an.',
    ctaPrimary: 'Offizielles Formular öffnen',
    ctaSecondary: 'Programm anzeigen',
    modesTitle: 'Drei Anmeldemodalitäten',
    modes: [
      { name: 'Gruppe', range: 'Pfarrei, Schule, Gemeinschaft oder Verein', note: 'Eine einzige E-Mail/Telefon, die der Gruppe zugeordnet ist. Bestimmen Sie eine verantwortliche Person und fügen Sie Mitglieder hinzu. Die Anmeldung kann gestaffelt erfolgen, aber Reihenfolge und Zeit bestimmen den Gruppenzugang.' },
      { name: 'Familie / Freunde', range: '2 bis 15 Personen', note: 'Ohne verpflichtenden Verantwortlichen. Nützlich für Familien und kleine Freundeskreise.' },
      { name: 'Einzeln', range: 'Nur Sie', note: 'Ohne Gruppe. Die Diözese empfiehlt, sich an die nächstgelegene Pfarrei zu wenden und sich nach Möglichkeit deren Gruppe anzuschließen.' },
    ],
    stepsTitle: 'Die 6 Schritte zur Anmeldung',
    steps: [
      { num: 1, title: 'Den Link öffnen', body: 'Gehen Sie auf https://inscripciones.conelpapa.es und registrieren Sie sich mit Ihrer E-Mail-Adresse oder Telefonnummer. Akzeptieren Sie die Datenschutzerklärung und die Cookie-Richtlinie, um die Verarbeitung der Anmeldedaten zu autorisieren.' },
      { num: 2, title: 'Zugang verifizieren', body: 'Sie erhalten eine E-Mail (oder eine SMS, wenn Sie das Telefon gewählt haben) mit einem Einmalcode. Klicken Sie auf den Link oder geben Sie den Code ein, um Ihren Zugang zur Plattform zu validieren.' },
      { num: 3, title: 'Teilnahmeart wählen', body: 'Wählen Sie, wie Sie teilnehmen werden: als Gruppe (Pfarrei, Schule, Gemeinschaft), mit Familie oder Freunden (2-15 Personen) oder einzeln. Diese Wahl bestimmt die Platzverwaltung.' },
      { num: 4, title: 'Veranstaltungen wählen', body: 'Filtern Sie nach Stadt (Madrid, Gran Canaria, Teneriffa) und wählen Sie die Akte aus, an denen Sie teilnehmen möchten. Sie können sich für mehrere Veranstaltungen anmelden. Die Eucharistie im Stadion von Gran Canaria zum Beispiel ist bis zur Kapazitätsgrenze öffentlich.' },
      { num: 5, title: 'Persönliche Daten ausfüllen', body: 'Für jede angemeldete Person: vollständiger Name, Geburtsdatum, DNI/NIE/Reisepass, Postleitzahl, Herkunftsland, Geschlecht, kirchlicher Stand (Laie, Seminarist, Diözesankleriker, Ordenskleriker, Geweihte/r). Bei Behinderung: Art, Bedarf an Sonderzugang und Begleitperson angeben.' },
      { num: 6, title: 'Voranmeldung bestätigen', body: 'Überprüfen Sie die Zusammenfassung und drücken Sie "Voranmeldung bestätigen". Sie erhalten eine E-Mail mit dem Bericht. Bis zur endgültigen Bestätigung können Sie Änderungen vornehmen. Die Voranmeldung garantiert keinen Platz.' },
    ],
    warningsTitle: 'Wichtige Hinweise',
    warnings: [
      { icon: '⚠️', text: 'Die Anmeldung GARANTIERT KEINEN Platz. Die Reihenfolge der Registrierung und die Kapazität bestimmen den endgültigen Zugang. Melden Sie sich so früh wie möglich an.' },
      { icon: '⏱️', text: 'Bei Gruppen bestimmen Reihenfolge und Zeit der Anmeldung den gemeinsamen Zugang zur Veranstaltung. Bereiten Sie eine Liste vor und melden Sie alle Mitglieder so schnell wie möglich an.' },
      { icon: '🧒', text: 'Um einen Minderjährigen anzumelden, muss sein gesetzlicher Vormund vorher registriert sein und während der Anmeldung als Verantwortlicher ausgewählt werden.' },
      { icon: '♿', text: 'Menschen mit Behinderung müssen die Art angeben, ob sie Sonderzugang brauchen und ob sie eine Begleitperson oder Hilfe benötigen.' },
      { icon: '🆔', text: 'Jede angemeldete Person muss ein gültiges Ausweisdokument (Personalausweis, NIE oder Reisepass) vorlegen. Ohne diese Daten wird die Anmeldung nicht abgeschlossen.' },
      { icon: '📧', text: 'Wenn Sie sich als Gruppe anmelden, wird die gesamte Gruppe über eine einzige zugeordnete E-Mail oder Telefonnummer verwaltet. Erinnerungen und Mitteilungen kommen an diese Adresse.' },
    ],
    dataTitle: 'Welche Daten das Formular verlangt',
    dataIntro: 'Die Anmeldung verlangt folgende Daten pro Teilnehmer. Halten Sie sie bereit, bevor Sie beginnen, um den Prozess zu beschleunigen, besonders bei großen Gruppen.',
    dataItems: [
      'Vollständiger Vor- und Nachname',
      'Geburtsdatum (TT/MM/JJJJ)',
      'Ausweisdokument: Personalausweis, NIE oder Reisepass',
      'Postleitzahl des Wohnsitzes',
      'Herkunftsland',
      'Geschlecht (männlich oder weiblich)',
      'Kirchlicher Stand: Laie, Seminarist, Diözesankleriker, Ordenskleriker oder Geweihte/r',
      'Gültige E-Mail oder Telefonnummer',
      'Bei Behinderung: Art, Bedarf an Sonderzugang und Begleitperson',
    ],
    sourceTitle: 'Offizielle Quelle',
    sourceBody: 'Die Informationen auf dieser Seite stammen aus dem offiziellen Leitfaden, der am 16. April 2026 von der Diözese der Kanarischen Inseln veröffentlicht wurde, sowie von der Anmeldeplattform der Spanischen Bischofskonferenz (inscripciones.conelpapa.es). Dieser Leitfaden betrifft die Akte in Madrid, Gran Canaria und Teneriffa. Für Fragen sind die jeweilige Diözese und die Website conelpapa.es die offiziellen Kanäle.',
    relatedTitle: 'Verwandte Seiten',
    relatedLinks: [
      { href: '/programa', text: 'Vollständiges Reiseprogramm' },
      { href: '/como-asistir', text: 'Wie man teilnimmt: allgemeine Informationen' },
      { href: '/que-llevar', text: 'Pilgerset: was mitbringen' },
      { href: '/papa-bernabeu', text: 'Diözesanbegegnung im Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Jugendvigil an der Plaza de Lima' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Como inscrever-se',
    title: 'Como inscrever-se nos atos do Papa Leão XIV em Espanha',
    subtitle: 'Guia passo a passo · Inscrição oficial gratuita em inscripciones.conelpapa.es',
    intro: 'Para assistir aos atos públicos da Viagem Apostólica do Papa Leão XIV a Espanha (6-12 de junho de 2026) é obrigatória a inscrição prévia. É gratuita e realiza-se na plataforma oficial da Conferência Episcopal Espanhola. A inscrição NÃO assegura lugar: a ordem de inscrição e a disponibilidade de lotação determinam o acesso. Recomendação: inscreva-se o quanto antes.',
    ctaPrimary: 'Abrir o formulário oficial',
    ctaSecondary: 'Ver o programa',
    modesTitle: 'Três modalidades de inscrição',
    modes: [
      { name: 'Grupo', range: 'Paróquia, escola, comunidade ou associação', note: 'Um único email/telemóvel associado ao grupo. Designe um responsável e adicione os membros. A inscrição pode ser escalonada, mas a ordem e o tempo determinam o acesso em grupo.' },
      { name: 'Família / Amigos', range: 'De 2 a 15 pessoas', note: 'Sem responsável obrigatório. Útil para famílias e pequenos grupos de amigos.' },
      { name: 'Individual', range: 'Apenas você', note: 'Sem grupo. A diocese recomenda dirigir-se à paróquia mais próxima e juntar-se ao seu grupo se possível.' },
    ],
    stepsTitle: 'Os 6 passos para se inscrever',
    steps: [
      { num: 1, title: 'Aceda ao link', body: 'Entre em https://inscripciones.conelpapa.es e registe-se com o seu email ou número de telemóvel. Aceite a política de privacidade e a política de cookies para autorizar o tratamento dos dados de registo.' },
      { num: 2, title: 'Verifique o acesso', body: 'Receberá um email (ou um SMS se escolheu telemóvel) com um código de uso único. Clique no link ou introduza o código para validar o seu acesso à plataforma.' },
      { num: 3, title: 'Selecione o tipo de assistência', body: 'Escolha como vai assistir: em grupo (paróquia, escola, comunidade), em família ou com amigos (2-15 pessoas), ou individualmente. Esta escolha determina como se gerem os lugares.' },
      { num: 4, title: 'Escolha os eventos', body: 'Filtre por cidade (Madrid, Gran Canária, Tenerife) e selecione os atos a que quer assistir. Pode inscrever-se em mais de um evento. A Eucaristia no Estádio de Gran Canária, por exemplo, é aberta ao público até completar lotação.' },
      { num: 5, title: 'Preencha os dados pessoais', body: 'Por cada pessoa inscrita: nome e apelidos, data de nascimento, DNI/NIE/Passaporte, código postal, país de origem, sexo, situação eclesial (leigo, seminarista, clérigo secular, clérigo consagrado, consagrado/a). Se a pessoa tem deficiência, indique-o com a necessidade de acesso especial e acompanhante.' },
      { num: 6, title: 'Confirme a pré-inscrição', body: 'Reveja o resumo e prima "Confirmar pré-inscrição". Receberá um email com o relatório. Até à confirmação definitiva pode fazer alterações. A pré-inscrição não assegura lugar.' },
    ],
    warningsTitle: 'Avisos importantes',
    warnings: [
      { icon: '⚠️', text: 'A inscrição NÃO assegura lugar. A ordem de registo e a lotação determinam o acesso final. Inscreva-se o quanto antes.' },
      { icon: '⏱️', text: 'Nos grupos, a ordem e o tempo de inscrição determinam o acesso conjunto ao evento. Prepare uma lista e registe todos os membros o quanto antes.' },
      { icon: '🧒', text: 'Para inscrever um menor, o seu tutor legal deve estar previamente registado e ser selecionado como responsável durante a inscrição do menor.' },
      { icon: '♿', text: 'As pessoas com deficiência devem indicar o tipo, se necessitam de acesso especial e se requerem acompanhante ou assistência.' },
      { icon: '🆔', text: 'Cada pessoa inscrita deve apresentar um documento de identidade válido (DNI, NIE ou Passaporte). Sem este dado a inscrição não se completa.' },
      { icon: '📧', text: 'Se se inscreve em grupo, todo o grupo é gerido com um único email ou telemóvel associado. Os lembretes e avisos chegarão a essa morada.' },
    ],
    dataTitle: 'Que dados pede o formulário',
    dataIntro: 'A inscrição solicita os seguintes dados por participante. Tenha-os preparados antes de começar para acelerar o processo, especialmente se vai inscrever um grupo grande.',
    dataItems: [
      'Nome e apelidos completos',
      'Data de nascimento (DD/MM/AAAA)',
      'Documento de identidade: DNI, NIE ou Passaporte',
      'Código postal de residência',
      'País de origem',
      'Sexo (homem ou mulher)',
      'Situação eclesial: leigo/a, seminarista, clérigo secular, clérigo consagrado ou consagrado/a',
      'Email ou número de telemóvel válido',
      'Se a pessoa tem deficiência: tipo, necessidade de acesso especial e acompanhante',
    ],
    sourceTitle: 'Fonte oficial',
    sourceBody: 'A informação desta página vem do guia oficial publicado a 16 de abril de 2026 pela Diocese das Canárias e da plataforma de inscrições da Conferência Episcopal Espanhola (inscripciones.conelpapa.es). Este guia abrange os atos de Madrid, Gran Canária e Tenerife. Para qualquer dúvida, os canais oficiais são a diocese correspondente e o site conelpapa.es.',
    relatedTitle: 'Páginas relacionadas',
    relatedLinks: [
      { href: '/programa', text: 'Programa completo da viagem' },
      { href: '/como-asistir', text: 'Como assistir: informação geral' },
      { href: '/que-llevar', text: 'Kit do peregrino: o que levar' },
      { href: '/papa-bernabeu', text: 'Encontro diocesano no Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Vigília juvenil na Plaza de Lima' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Com inscriure’s',
    title: 'Com inscriure’s als actes del Papa Lleó XIV a Espanya',
    subtitle: 'Guia pas a pas · Inscripció oficial gratuïta a inscripciones.conelpapa.es',
    intro: 'Per assistir als actes públics del Viatge Apostòlic del Papa Lleó XIV a Espanya (6-12 de juny de 2026) és obligatòria la inscripció prèvia. És gratuïta i es fa a la plataforma oficial de la Conferència Episcopal Espanyola. La inscripció NO assegura plaça: l’ordre d’inscripció i la disponibilitat d’aforament determinen l’accés. Recomanació: inscriu-te com més aviat millor.',
    ctaPrimary: 'Anar al formulari oficial',
    ctaSecondary: 'Veure el programa',
    modesTitle: 'Tres modalitats d’inscripció',
    modes: [
      { name: 'Grup', range: 'Parròquia, escola, comunitat o associació', note: 'Un únic correu/mòbil associat al grup. Designa un responsable i afegeix els membres. La inscripció pot ser esglaonada, però l’ordre i el temps determinen l’accés grupal.' },
      { name: 'Família / Amics', range: 'De 2 a 15 persones', note: 'Sense responsable obligatori. Útil per a famílies i petits grups d’amics.' },
      { name: 'Individual', range: 'Només tu', note: 'Sense grup. La diòcesi recomana acostar-se a la parròquia més propera i unir-se al seu grup si és possible.' },
    ],
    stepsTitle: 'Els 6 passos per inscriure’t',
    steps: [
      { num: 1, title: 'Accedeix a l’enllaç', body: 'Entra a https://inscripciones.conelpapa.es i registra’t amb el teu correu electrònic o número de mòbil. Accepta la política de privacitat i la política de galetes per autoritzar el tractament de les dades de registre.' },
      { num: 2, title: 'Verifica l’accés', body: 'Rebràs un correu (o un SMS si has triat mòbil) amb un codi d’un sol ús. Fes clic a l’enllaç o introdueix el codi per validar el teu accés a la plataforma.' },
      { num: 3, title: 'Selecciona el tipus d’assistència', body: 'Tria com hi assistiràs: en grup (parròquia, escola, comunitat), en família o amb amics (2-15 persones), o individualment. Aquesta tria determina com es gestionen les places.' },
      { num: 4, title: 'Tria els esdeveniments', body: 'Filtra per ciutat (Madrid, Gran Canària, Tenerife) i selecciona els actes als quals vols assistir. Pots inscriure’t a més d’un esdeveniment. L’Eucaristia a l’Estadi de Gran Canària, per exemple, és oberta al públic fins a completar aforament.' },
      { num: 5, title: 'Omple les dades personals', body: 'Per cada persona inscrita: nom i cognoms, data de naixement, DNI/NIE/Passaport, codi postal, país d’origen, sexe, situació eclesial (laic, seminarista, clergue secular, clergue consagrat, consagrat/da). Si la persona té discapacitat, indica-ho amb la necessitat d’accés especial i acompanyant.' },
      { num: 6, title: 'Confirma la pre-inscripció', body: 'Revisa el resum i prem "Confirmar pre-inscripció". Rebràs un correu amb l’informe. Fins a la confirmació definitiva pots fer canvis. La pre-inscripció no assegura plaça.' },
    ],
    warningsTitle: 'Advertiments importants',
    warnings: [
      { icon: '⚠️', text: 'La inscripció NO assegura plaça. L’ordre de registre i la disponibilitat d’aforament determinen l’accés final. Inscriu-te com més aviat millor.' },
      { icon: '⏱️', text: 'En els grups, l’ordre i el temps d’inscripció determinen l’accés conjunt a l’esdeveniment. Prepara una llista i registra tots els membres tan aviat com sigui possible.' },
      { icon: '🧒', text: 'Per inscriure un menor, el seu tutor legal ha d’estar prèviament registrat i ser seleccionat com a responsable durant la inscripció del menor.' },
      { icon: '♿', text: 'Les persones amb discapacitat han d’indicar el tipus, si necessiten accés especial i si requereixen acompanyant o assistència.' },
      { icon: '🆔', text: 'Cada persona inscrita ha d’aportar un document d’identitat vàlid (DNI, NIE o Passaport). Sense aquesta dada no es completa la inscripció.' },
      { icon: '📧', text: 'Si t’inscrius en grup, tot el grup es gestiona amb un únic correu o mòbil associat. Els recordatoris i avisos arribaran a aquesta adreça.' },
    ],
    dataTitle: 'Quines dades demana el formulari',
    dataIntro: 'La inscripció sol·licita les següents dades per participant. Tingues-les preparades abans de començar per agilitzar el procés, especialment si has d’inscriure un grup gran.',
    dataItems: [
      'Nom i cognoms complets',
      'Data de naixement (DD/MM/AAAA)',
      'Document d’identitat: DNI, NIE o Passaport',
      'Codi postal de residència',
      'País d’origen',
      'Sexe (home o dona)',
      'Situació eclesial: laic/a, seminarista, clergue secular, clergue consagrat o consagrat/da',
      'Correu o número de mòbil vàlid',
      'Si la persona té discapacitat: tipus, necessitat d’accés especial i acompanyant',
    ],
    sourceTitle: 'Font oficial',
    sourceBody: 'La informació d’aquesta pàgina prové de la guia oficial publicada el 16 d’abril de 2026 per la Diòcesi de Canàries i de la plataforma d’inscripcions de la Conferència Episcopal Espanyola (inscripciones.conelpapa.es). Aquesta guia correspon als actes de Madrid, Gran Canària i Tenerife. Per a qualsevol dubte, els canals oficials són la diòcesi corresponent i el web conelpapa.es.',
    relatedTitle: 'Pàgines relacionades',
    relatedLinks: [
      { href: '/programa', text: 'Programa complet del viatge' },
      { href: '/como-asistir', text: 'Com assistir: informació general' },
      { href: '/que-llevar', text: 'Kit del pelegrí: què portar' },
      { href: '/papa-bernabeu', text: 'Trobada diocesana al Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Vetlla juvenil a la Plaça de Lima' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Como inscribirse',
    title: 'Como inscribirse aos actos do Papa León XIV en España',
    subtitle: 'Guía paso a paso · Inscrición oficial gratuíta en inscripciones.conelpapa.es',
    intro: 'Para asistir aos actos públicos da Viaxe Apostólica do Papa León XIV a España (6-12 de xuño de 2026) é obrigatoria a inscrición previa. É gratuíta e realízase na plataforma oficial da Conferencia Episcopal Española. A inscrición NON asegura a praza: a orde de inscrición e a dispoñibilidade de aforo determinan o acceso. Recomendación: inscríbete canto antes.',
    ctaPrimary: 'Ir ao formulario oficial',
    ctaSecondary: 'Ver o programa',
    modesTitle: 'Tres modalidades de inscrición',
    modes: [
      { name: 'Grupo', range: 'Parroquia, colexio, comunidade ou asociación', note: 'Un único correo/móbil asociado ao grupo. Designa un responsable e engade os membros. A inscrición pode ser escalonada, pero a orde e o tempo determinan o acceso grupal.' },
      { name: 'Familia / Amigos', range: 'De 2 a 15 persoas', note: 'Sen responsable obrigatorio. Útil para familias e pequenos grupos de amigos.' },
      { name: 'Individual', range: 'Só ti', note: 'Sen grupo. A diocese recomenda achegarse á parroquia máis cercana e unirse ao seu grupo se é posible.' },
    ],
    stepsTitle: 'Os 6 pasos para inscribirte',
    steps: [
      { num: 1, title: 'Accede á ligazón', body: 'Entra en https://inscripciones.conelpapa.es e rexístrate co teu correo electrónico ou o teu número de móbil. Acepta a política de privacidade e a política de cookies para autorizar o tratamento dos datos de rexistro.' },
      { num: 2, title: 'Verifica o teu acceso', body: 'Recibirás un correo (ou un SMS se elixiches móbil) cun código dun só uso. Fai clic na ligazón ou introduce o código para validar o teu acceso á plataforma.' },
      { num: 3, title: 'Selecciona o tipo de asistencia', body: 'Elixe como vas asistir: en grupo (parroquia, colexio, comunidade), en familia ou con amigos (2-15 persoas), ou individualmente. Esta elección determina como se xestionan as prazas.' },
      { num: 4, title: 'Elixe os eventos', body: 'Filtra por cidade (Madrid, Gran Canaria, Tenerife) e selecciona os actos aos que queres asistir. Podes inscribirte a máis dun evento. A Eucaristía no Estadio de Gran Canaria, por exemplo, está aberta ao público ata completar aforo.' },
      { num: 5, title: 'Cubre os datos persoais', body: 'Por cada persoa inscrita: nome e apelidos, data de nacemento, DNI/NIE/Pasaporte, código postal, país de orixe, sexo, situación eclesial (laico, seminarista, clérigo secular, clérigo consagrado, consagrado/a). Se a persoa ten discapacidade, indícao coa necesidade de acceso especial e acompañante.' },
      { num: 6, title: 'Confirma a pre-inscrición', body: 'Revisa o resumo e preme "Confirmar pre-inscrición". Recibirás un correo co informe. Ata a confirmación definitiva podes facer cambios. A pre-inscrición non asegura praza.' },
    ],
    warningsTitle: 'Advertencias importantes',
    warnings: [
      { icon: '⚠️', text: 'A inscrición NON asegura a praza. A orde de rexistro e a dispoñibilidade de aforo determinan o acceso final. Inscríbete canto antes.' },
      { icon: '⏱️', text: 'Nos grupos, a orde e o tempo de inscrición determinan o acceso conxunto ao evento. Prepara unha lista e rexistra todos os membros canto antes.' },
      { icon: '🧒', text: 'Para inscribir un menor, o seu titor legal debe estar previamente rexistrado e ser seleccionado como responsable durante a inscrición do menor.' },
      { icon: '♿', text: 'As persoas con discapacidade deben indicar o tipo, se necesitan acceso especial e se requiren acompañante ou asistencia.' },
      { icon: '🆔', text: 'Cada persoa inscrita debe achegar un documento de identidade válido (DNI, NIE ou Pasaporte). Sen este dato non se completa a inscrición.' },
      { icon: '📧', text: 'Se te inscribes en grupo, todo o grupo xestionase cun único correo ou móbil asociado. Os recordatorios e avisos chegarán a ese enderezo.' },
    ],
    dataTitle: 'Que datos pide o formulario',
    dataIntro: 'A inscrición solicita os seguintes datos por participante. Téñoos preparados antes de comezar para axilizar o proceso, especialmente se vas inscribir un grupo grande.',
    dataItems: [
      'Nome e apelidos completos',
      'Data de nacemento (DD/MM/AAAA)',
      'Documento de identidade: DNI, NIE ou Pasaporte',
      'Código postal de residencia',
      'País de orixe',
      'Sexo (home ou muller)',
      'Situación eclesial: laico/a, seminarista, clérigo secular, clérigo consagrado ou consagrado/a',
      'Correo ou número de móbil válido',
      'Se a persoa ten discapacidade: tipo, necesidade de acceso especial e acompañante',
    ],
    sourceTitle: 'Fonte oficial',
    sourceBody: 'A información desta páxina procede da guía oficial publicada o 16 de abril de 2026 pola Diocese de Canarias e da plataforma de inscricións da Conferencia Episcopal Española (inscripciones.conelpapa.es). Esta guía corresponde aos actos de Madrid, Gran Canaria e Tenerife. Para calquera dúbida, as canles oficiais son a diocese correspondente e o web conelpapa.es.',
    relatedTitle: 'Páxinas relacionadas',
    relatedLinks: [
      { href: '/programa', text: 'Programa completo da viaxe' },
      { href: '/como-asistir', text: 'Como asistir: información xeral' },
      { href: '/que-llevar', text: 'Kit do peregrino: que levar' },
      { href: '/papa-bernabeu', text: 'Encontro diocesano no Bernabéu' },
      { href: '/vigilia-plaza-lima', text: 'Vixilia xuvenil na Praza de Lima' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Nola izena eman',
    title: 'Nola eman izena Leon XIV.a Aita Santuaren ekitaldietan Espainian',
    subtitle: 'Urratsez urrats gida · Izena emateko ofiziala doan inscripciones.conelpapa.es-en',
    intro: 'Leon XIV.a Aita Santuaren Espainiarako Bidaia Apostolikoaren ekitaldi publikoetan parte hartzeko (2026ko ekainaren 6-12) aurretiko izen-ematea derrigorrezkoa da. Doakoa da eta Espainiako Apezpiku Konferentziaren plataforma ofizialean egiten da. Izen-emateak EZ DU lekua ziurtatzen: izen-ematearen ordenak eta edukieren erabilgarritasunak erabakitzen dute sarbidea. Gomendioa: eman izena ahalik eta lasterren.',
    ctaPrimary: 'Inprimaki ofiziala ireki',
    ctaSecondary: 'Programa ikusi',
    modesTitle: 'Hiru izen emateko modu',
    modes: [
      { name: 'Taldea', range: 'Parrokia, ikastetxea, komunitatea edo elkartea', note: 'Talderi lotutako helbide elektroniko/telefono bakarra. Izenda ezazu arduradun bat eta gehitu kideak. Izen-ematea mailakatua izan daiteke, baina ordena eta denborak taldeko sarbidea zehazten dute.' },
      { name: 'Familia / Lagunak', range: '2-15 pertsona', note: 'Arduradunik gabe. Familientzat eta lagun-talde txikientzat erabilgarria.' },
      { name: 'Banaka', range: 'Zu bakarrik', note: 'Talderik gabe. Elizbarrutiak gomendatzen du gertuen dagoen parrokiara hurbiltzea eta beren taldera batzea ahal bada.' },
    ],
    stepsTitle: 'Izena emateko 6 urratsak',
    steps: [
      { num: 1, title: 'Sartu estekan', body: 'Sartu https://inscripciones.conelpapa.es helbidean eta erregistratu zaitez zure helbide elektronikoarekin edo telefono-zenbakiarekin. Onartu pribatutasun-politika eta cookien politika erregistro-datuen tratamendua baimendu ahal izateko.' },
      { num: 2, title: 'Egiaztatu zure sarbidea', body: 'Helbide elektroniko bat (edo SMS bat telefonoa aukeratu baduzu) jasoko duzu erabilera bakarreko kodearekin. Egin klik estekan edo sartu kodea plataforman zure sarbidea baliozkotzeko.' },
      { num: 3, title: 'Aukeratu parte-hartze mota', body: 'Aukeratu nola parte hartuko duzun: taldean (parrokia, ikastetxea, komunitatea), familian edo lagunekin (2-15 pertsona), edo banaka. Aukera honek lekuak nola kudeatzen diren erabakitzen du.' },
      { num: 4, title: 'Aukeratu ekitaldiak', body: 'Iragazi hiriz (Madril, Gran Canaria, Tenerife) eta aukeratu parte hartu nahi duzun ekitaldiak. Ekitaldi batean baino gehiagotan eman dezakezu izena. Gran Canariako Estadioko Eukaristia, esate baterako, edukiera bete arte irekia da publikoarentzat.' },
      { num: 5, title: 'Bete datu pertsonalak', body: 'Izena emandako pertsona bakoitzeko: izen-abizenak, jaiotze-data, NAN/NIE/Pasaportea, posta-kodea, jatorri-herrialdea, sexua, eliza-egoera (laikoa, seminarista, kleriko sekularra, kleriko sagaratua, sagaratua). Pertsonak desgaitasuna badu, adierazi mota, sarbide bereziaren beharra eta laguntzailearena.' },
      { num: 6, title: 'Berretsi aurre-izen-ematea', body: 'Berrikusi laburpena eta sakatu "Berretsi aurre-izen-ematea". Txostenarekin email bat jasoko duzu. Behin betiko berresteraino aldaketak egin ditzakezu. Aurre-izen-emateak ez du lekua ziurtatzen.' },
    ],
    warningsTitle: 'Ohartarazpen garrantzitsuak',
    warnings: [
      { icon: '⚠️', text: 'Izen-emateak EZ DU lekua ziurtatzen. Erregistro-ordenak eta edukiera-erabilgarritasunak azkenengo sarbidea erabakitzen dute. Eman izena ahalik eta lasterren.' },
      { icon: '⏱️', text: 'Taldeetan, izen-ematearen ordenak eta denborak taldeko sarbide bateratua erabakitzen dute. Prestatu zerrenda eta erregistratu kide guztiak ahalik eta lasterren.' },
      { icon: '🧒', text: 'Adingabeko bati izena emateko, haren tutore legalak aurretik erregistratuta egon behar du eta adingabearen izen-ematean arduradun gisa hautatu behar da.' },
      { icon: '♿', text: 'Desgaitasuna duten pertsonek mota, sarbide berezia behar duten eta laguntzailea edo laguntza behar duten adierazi behar dute.' },
      { icon: '🆔', text: 'Izena ematen duen pertsona bakoitzak baliozko identifikazio-dokumentu bat aurkeztu behar du (NAN, NIE edo Pasaportea). Datu hori gabe izen-ematea ez da osatzen.' },
      { icon: '📧', text: 'Taldean izena ematen baduzu, talde osoa lotutako helbide elektroniko edo telefono bakar batekin kudeatzen da. Gogorarazpenak eta abisuak helbide horretara iritsiko dira.' },
    ],
    dataTitle: 'Inprimakiak zer datu eskatzen dituen',
    dataIntro: 'Izen-emateak parte-hartzaile bakoitzeko datu hauek eskatzen ditu. Eduki itzazu prest hasi aurretik prozesua bizkortzeko, batez ere talde handi bati izena ematen badiozu.',
    dataItems: [
      'Izen-abizen osoak',
      'Jaiotze-data (UU/HH/UUUU)',
      'Identifikazio-dokumentua: NAN, NIE edo Pasaportea',
      'Bizilekuko posta-kodea',
      'Jatorri-herrialdea',
      'Sexua (gizona edo emakumea)',
      'Eliza-egoera: laikoa, seminarista, kleriko sekularra, kleriko sagaratua edo sagaratua',
      'Baliozko helbide elektronikoa edo telefono-zenbakia',
      'Pertsonak desgaitasuna badu: mota, sarbide berezia eta laguntzailea',
    ],
    sourceTitle: 'Iturri ofiziala',
    sourceBody: 'Orri honetako informazioa Kanarietako Elizbarrutiak 2026ko apirilaren 16an argitaratutako gida ofizialetik eta Espainiako Apezpiku Konferentziaren izen-emateen plataformatik dator (inscripciones.conelpapa.es). Gida hau Madril, Gran Canaria eta Tenerifeko ekitaldiei dagokie. Edozein zalantzaren aurrean, kanal ofizialak dagokion elizbarrutia eta conelpapa.es webgunea dira.',
    relatedTitle: 'Erlazionatutako orriak',
    relatedLinks: [
      { href: '/programa', text: 'Bidaiaren programa osoa' },
      { href: '/como-asistir', text: 'Nola parte hartu: informazio orokorra' },
      { href: '/que-llevar', text: 'Erromes-kita: zer eraman' },
      { href: '/papa-bernabeu', text: 'Bernabéuko elizbarrutiko topaketa' },
      { href: '/vigilia-plaza-lima', text: 'Lima plazako gazteen bijilia' },
    ],
  },
}

export default function ComoInscribirsePage({ locale }: Props) {
  const t = L[locale]
  const breadcrumbs = [
    { name: t.breadcrumbHome, href: localizePath('/', locale) },
    { name: t.breadcrumbCurrent, href: '#' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-block rounded-lg bg-papal-gold px-5 py-3 font-semibold text-papal-navy transition-colors hover:bg-papal-gold/90"
            >
              {t.ctaPrimary} →
            </a>
            <Link
              href={localizePath('/programa', locale)}
              className="inline-block rounded-lg border border-white/30 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.modesTitle}</h2>
          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
            {t.modes.map((mode) => (
              <div key={mode.name} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <h3 className="font-heading text-base font-bold text-papal-navy">{mode.name}</h3>
                <p className="text-xs uppercase tracking-wide text-papal-gold">{mode.range}</p>
                <p className="mt-2 text-sm text-papal-navy/80">{mode.note}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.stepsTitle}</h2>
          <ol className="not-prose mt-4 space-y-4">
            {t.steps.map((step) => (
              <li key={step.num} className="flex gap-4 rounded-lg border border-papal-navy/10 bg-white p-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-papal-navy font-heading text-lg font-bold text-white">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-papal-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-papal-navy/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.warningsTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.warnings.map((w, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-papal-gold/40 bg-papal-gold/10 p-3">
                <span className="text-xl" aria-hidden="true">{w.icon}</span>
                <p className="text-sm text-papal-navy">{w.text}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.dataTitle}</h2>
          <p>{t.dataIntro}</p>
          <ul>
            {t.dataItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 rounded-lg border border-papal-navy/10 bg-papal-navy/5 p-6 text-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-block rounded-lg bg-papal-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-papal-navy/90"
            >
              {t.ctaPrimary} →
            </a>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.sourceTitle}</h2>
          <p className="text-sm text-papal-navy/70">{t.sourceBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(link.href, locale)}
                  className="text-papal-navy underline decoration-papal-gold underline-offset-4 hover:text-papal-gold"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  )
}
