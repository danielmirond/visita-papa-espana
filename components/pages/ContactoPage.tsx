'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

const L = {
  es: {
    breadcrumb: 'Contacto',
    title: 'Contacto · visita-papa-2026.com',
    subtitle:
      'Escríbenos si quieres corregir información, ejercer tus derechos RGPD, proponer colaboración o simplemente saludar. Respondemos habitualmente en 48 horas.',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    purposeLabel: 'Motivo',
    subjectLabel: 'Asunto (opcional)',
    messageLabel: 'Mensaje',
    consentLabel:
      'He leído y acepto la política de privacidad. Los datos de este formulario se tratan conforme al RGPD únicamente para responder a tu consulta.',
    purposes: {
      general: 'Consulta general',
      prensa: 'Prensa / medios',
      rgpd: 'Ejercicio de derechos RGPD',
      afiliacion: 'Propuesta de afiliación o partnership',
      correccion: 'Corrección de contenido',
      otro: 'Otro',
    },
    submit: 'Enviar mensaje',
    submitting: 'Enviando…',
    successTitle: '¡Mensaje enviado!',
    successBody:
      'Gracias por escribir. Hemos recibido tu mensaje y te responderemos en un plazo máximo de 48 horas al email que has facilitado.',
    sendAnother: 'Enviar otro mensaje',
    errorTitle: 'No se pudo enviar',
    errors: {
      invalid_name: 'El nombre es obligatorio.',
      invalid_email: 'El email no es válido.',
      invalid_message: 'El mensaje debe tener al menos 10 caracteres.',
      missing_consent: 'Debes aceptar la política de privacidad.',
      rate_limit: 'Demasiadas solicitudes. Inténtalo en unos minutos.',
      not_configured:
        'El servicio de email no está disponible en este momento. Escríbenos directamente a daniel.mirond@gmail.com.',
      send_failed: 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.',
      server_error: 'Error del servidor. Inténtalo de nuevo.',
      network: 'No se pudo conectar con el servidor. Comprueba tu conexión.',
    } as Record<string, string>,
    privacyLink: 'política de privacidad',
    cookieLink: 'política de cookies',
    dataRightsNote:
      'Para ejercer tus derechos RGPD (acceso, rectificación, supresión, oposición, limitación, portabilidad o revocación del consentimiento) selecciona el motivo "Ejercicio de derechos RGPD" y adjunta una descripción clara.',
    responsable: 'Responsable',
    responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Respuesta',
    responseValue: 'Habitualmente en 24-48 horas. Máx. 30 días naturales (RGPD art. 12).',
  },
  en: {
    breadcrumb: 'Contact',
    title: 'Contact · visita-papa-2026.com',
    subtitle:
      'Write to us to correct information, exercise your GDPR rights, propose collaboration or just say hi. We usually reply within 48 hours.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    purposeLabel: 'Purpose',
    subjectLabel: 'Subject (optional)',
    messageLabel: 'Message',
    consentLabel:
      'I have read and accept the privacy policy. Data from this form is processed under GDPR only to reply to your enquiry.',
    purposes: {
      general: 'General enquiry',
      prensa: 'Press / media',
      rgpd: 'Exercise of GDPR rights',
      afiliacion: 'Affiliate or partnership proposal',
      correccion: 'Content correction',
      otro: 'Other',
    },
    submit: 'Send message',
    submitting: 'Sending…',
    successTitle: 'Message sent!',
    successBody:
      'Thanks for writing. We have received your message and will reply within 48 hours to the email you provided.',
    sendAnother: 'Send another message',
    errorTitle: 'Could not send',
    errors: {
      invalid_name: 'Name is required.',
      invalid_email: 'Email is not valid.',
      invalid_message: 'Message must be at least 10 characters.',
      missing_consent: 'You must accept the privacy policy.',
      rate_limit: 'Too many requests. Try again in a few minutes.',
      not_configured:
        'The email service is not available right now. Write directly to daniel.mirond@gmail.com.',
      send_failed: 'Failed to send the message. Try again later.',
      server_error: 'Server error. Try again.',
      network: 'Could not reach the server. Check your connection.',
    } as Record<string, string>,
    privacyLink: 'privacy policy',
    cookieLink: 'cookie policy',
    dataRightsNote:
      'To exercise your GDPR rights (access, rectification, deletion, objection, limitation, portability or withdrawal of consent) choose the "Exercise of GDPR rights" purpose and provide a clear description.',
    responsable: 'Data controller',
    responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Reply time',
    responseValue: 'Usually 24-48 hours. Max. 30 calendar days (GDPR art. 12).',
  },
  it: {
    breadcrumb: 'Contatto',
    title: 'Contatto · visita-papa-2026.com',
    subtitle: 'Scrivici per correggere informazioni, esercitare i tuoi diritti GDPR, proporre collaborazioni o salutare. Rispondiamo di solito entro 48 ore.',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    purposeLabel: 'Motivo',
    subjectLabel: 'Oggetto (opzionale)',
    messageLabel: 'Messaggio',
    consentLabel: 'Ho letto e accetto la privacy policy. I dati di questo modulo sono trattati secondo il GDPR solo per rispondere alla tua richiesta.',
    purposes: { general: 'Richiesta generale', prensa: 'Stampa / media', rgpd: 'Esercizio dei diritti GDPR', afiliacion: 'Affiliazione o partnership', correccion: 'Correzione di contenuto', otro: 'Altro' },
    submit: 'Invia messaggio', submitting: 'Invio in corso…',
    successTitle: 'Messaggio inviato!', successBody: 'Grazie per averci scritto. Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 48 ore all\'email fornita.',
    sendAnother: 'Invia un altro messaggio', errorTitle: 'Impossibile inviare',
    errors: {
      invalid_name: 'Il nome è obbligatorio.',
      invalid_email: 'Email non valida.',
      invalid_message: 'Il messaggio deve avere almeno 10 caratteri.',
      missing_consent: 'Devi accettare la privacy policy.',
      rate_limit: 'Troppe richieste. Riprova tra qualche minuto.',
      not_configured: 'Il servizio email non è disponibile al momento.',
      send_failed: 'Errore nell\'invio. Riprova più tardi.',
      server_error: 'Errore del server. Riprova.',
      network: 'Impossibile raggiungere il server. Controlla la connessione.',
    } as Record<string, string>,
    privacyLink: 'privacy policy', cookieLink: 'politica dei cookie',
    dataRightsNote: 'Per esercitare i tuoi diritti GDPR (accesso, rettifica, cancellazione, opposizione, limitazione, portabilità o revoca del consenso) scegli il motivo "Esercizio dei diritti GDPR" e fornisci una descrizione chiara.',
    responsable: 'Titolare', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Tempo di risposta', responseValue: 'Solitamente 24-48 ore. Max. 30 giorni naturali (GDPR art. 12).',
  },
  fr: {
    breadcrumb: 'Contact',
    title: 'Contact · visita-papa-2026.com',
    subtitle: 'Écris-nous pour corriger une information, exercer tes droits RGPD, proposer une collaboration ou simplement saluer. Nous répondons habituellement sous 48 heures.',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    purposeLabel: 'Motif',
    subjectLabel: 'Objet (facultatif)',
    messageLabel: 'Message',
    consentLabel: 'J\'ai lu et j\'accepte la politique de confidentialité. Les données de ce formulaire sont traitées selon le RGPD uniquement pour répondre à ta demande.',
    purposes: { general: 'Demande générale', prensa: 'Presse / médias', rgpd: 'Exercice des droits RGPD', afiliacion: 'Affiliation ou partenariat', correccion: 'Correction de contenu', otro: 'Autre' },
    submit: 'Envoyer le message', submitting: 'Envoi en cours…',
    successTitle: 'Message envoyé !', successBody: 'Merci de nous avoir écrit. Nous avons reçu ton message et répondrons sous 48 heures à l\'email fourni.',
    sendAnother: 'Envoyer un autre message', errorTitle: 'Impossible d\'envoyer',
    errors: {
      invalid_name: 'Le nom est obligatoire.',
      invalid_email: 'Email non valide.',
      invalid_message: 'Le message doit contenir au moins 10 caractères.',
      missing_consent: 'Tu dois accepter la politique de confidentialité.',
      rate_limit: 'Trop de requêtes. Réessaie dans quelques minutes.',
      not_configured: 'Le service d\'email n\'est pas disponible actuellement.',
      send_failed: 'Échec de l\'envoi. Réessaie plus tard.',
      server_error: 'Erreur serveur. Réessaie.',
      network: 'Impossible de joindre le serveur. Vérifie ta connexion.',
    } as Record<string, string>,
    privacyLink: 'politique de confidentialité', cookieLink: 'politique de cookies',
    dataRightsNote: 'Pour exercer tes droits RGPD (accès, rectification, suppression, opposition, limitation, portabilité ou retrait du consentement) choisis le motif "Exercice des droits RGPD" et fournis une description claire.',
    responsable: 'Responsable du traitement', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Délai de réponse', responseValue: 'Habituellement 24-48 heures. Max. 30 jours calendaires (RGPD art. 12).',
  },
  de: {
    breadcrumb: 'Kontakt',
    title: 'Kontakt · visita-papa-2026.com',
    subtitle: 'Schreib uns, um Informationen zu korrigieren, deine DSGVO-Rechte auszuüben, eine Zusammenarbeit vorzuschlagen oder einfach Hallo zu sagen. Wir antworten normalerweise innerhalb von 48 Stunden.',
    nameLabel: 'Name',
    emailLabel: 'E-Mail',
    purposeLabel: 'Anliegen',
    subjectLabel: 'Betreff (optional)',
    messageLabel: 'Nachricht',
    consentLabel: 'Ich habe die Datenschutzerklärung gelesen und akzeptiere sie. Die Daten aus diesem Formular werden gemäß DSGVO ausschließlich zur Beantwortung deiner Anfrage verarbeitet.',
    purposes: { general: 'Allgemeine Anfrage', prensa: 'Presse / Medien', rgpd: 'Ausübung DSGVO-Rechte', afiliacion: 'Affiliate oder Partnerschaft', correccion: 'Inhaltskorrektur', otro: 'Sonstiges' },
    submit: 'Nachricht senden', submitting: 'Senden…',
    successTitle: 'Nachricht gesendet!', successBody: 'Danke, dass du uns geschrieben hast. Wir haben deine Nachricht erhalten und antworten innerhalb von 48 Stunden an die angegebene E-Mail.',
    sendAnother: 'Weitere Nachricht senden', errorTitle: 'Senden fehlgeschlagen',
    errors: {
      invalid_name: 'Name ist erforderlich.',
      invalid_email: 'E-Mail ist ungültig.',
      invalid_message: 'Die Nachricht muss mindestens 10 Zeichen haben.',
      missing_consent: 'Du musst die Datenschutzerklärung akzeptieren.',
      rate_limit: 'Zu viele Anfragen. Versuche es in ein paar Minuten erneut.',
      not_configured: 'Der E-Mail-Dienst ist derzeit nicht verfügbar.',
      send_failed: 'Senden der Nachricht fehlgeschlagen.',
      server_error: 'Serverfehler. Versuche es erneut.',
      network: 'Server nicht erreichbar. Überprüfe deine Verbindung.',
    } as Record<string, string>,
    privacyLink: 'Datenschutzerklärung', cookieLink: 'Cookie-Richtlinie',
    dataRightsNote: 'Um deine DSGVO-Rechte (Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung, Portabilität oder Widerruf) auszuüben, wähle als Anliegen "Ausübung DSGVO-Rechte" und gib eine klare Beschreibung an.',
    responsable: 'Verantwortlicher', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Antwortzeit', responseValue: 'Normalerweise 24-48 Stunden. Max. 30 Kalendertage (DSGVO Art. 12).',
  },
  pt: {
    breadcrumb: 'Contacto',
    title: 'Contacto · visita-papa-2026.com',
    subtitle: 'Escreve-nos para corrigir informações, exercer os teus direitos RGPD, propor colaborações ou simplesmente saudar. Respondemos habitualmente em 48 horas.',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    purposeLabel: 'Motivo',
    subjectLabel: 'Assunto (opcional)',
    messageLabel: 'Mensagem',
    consentLabel: 'Li e aceito a política de privacidade. Os dados deste formulário são tratados conforme o RGPD apenas para responder à tua consulta.',
    purposes: { general: 'Consulta geral', prensa: 'Imprensa / media', rgpd: 'Exercício dos direitos RGPD', afiliacion: 'Afiliação ou parceria', correccion: 'Correção de conteúdo', otro: 'Outro' },
    submit: 'Enviar mensagem', submitting: 'A enviar…',
    successTitle: 'Mensagem enviada!', successBody: 'Obrigado por escreveres. Recebemos a tua mensagem e responderemos em 48 horas ao email fornecido.',
    sendAnother: 'Enviar outra mensagem', errorTitle: 'Não foi possível enviar',
    errors: {
      invalid_name: 'O nome é obrigatório.',
      invalid_email: 'Email inválido.',
      invalid_message: 'A mensagem deve ter pelo menos 10 caracteres.',
      missing_consent: 'Tens de aceitar a política de privacidade.',
      rate_limit: 'Demasiados pedidos. Tenta dentro de alguns minutos.',
      not_configured: 'O serviço de email não está disponível de momento.',
      send_failed: 'Falha ao enviar a mensagem.',
      server_error: 'Erro do servidor. Tenta novamente.',
      network: 'Não foi possível contactar o servidor. Verifica a ligação.',
    } as Record<string, string>,
    privacyLink: 'política de privacidade', cookieLink: 'política de cookies',
    dataRightsNote: 'Para exercer os teus direitos RGPD (acesso, retificação, eliminação, oposição, limitação, portabilidade ou retirada do consentimento) escolhe o motivo "Exercício dos direitos RGPD" e fornece uma descrição clara.',
    responsable: 'Responsável', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Tempo de resposta', responseValue: 'Habitualmente 24-48 horas. Máx. 30 dias naturais (RGPD art. 12).',
  },
  ca: {
    breadcrumb: 'Contacte',
    title: 'Contacte · visita-papa-2026.com',
    subtitle: 'Escriu-nos per corregir informació, exercir els teus drets RGPD, proposar col·laboració o simplement saludar. Responem habitualment en 48 hores.',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    purposeLabel: 'Motiu',
    subjectLabel: 'Assumpte (opcional)',
    messageLabel: 'Missatge',
    consentLabel: 'He llegit i accepto la política de privacitat. Les dades d\'aquest formulari es tracten segons el RGPD només per respondre a la teva consulta.',
    purposes: { general: 'Consulta general', prensa: 'Premsa / mitjans', rgpd: 'Exercici de drets RGPD', afiliacion: 'Afiliació o partenariat', correccion: 'Correcció de contingut', otro: 'Altres' },
    submit: 'Envia el missatge', submitting: 'Enviant…',
    successTitle: 'Missatge enviat!', successBody: 'Gràcies per escriure. Hem rebut el teu missatge i respondrem en 48 hores a l\'email facilitat.',
    sendAnother: 'Envia un altre missatge', errorTitle: 'No s\'ha pogut enviar',
    errors: {
      invalid_name: 'El nom és obligatori.',
      invalid_email: 'Email no vàlid.',
      invalid_message: 'El missatge ha de tenir almenys 10 caràcters.',
      missing_consent: 'Has d\'acceptar la política de privacitat.',
      rate_limit: 'Massa sol·licituds. Torna-ho a provar en uns minuts.',
      not_configured: 'El servei d\'email no està disponible en aquest moment.',
      send_failed: 'Error en enviar el missatge.',
      server_error: 'Error del servidor. Torna-ho a provar.',
      network: 'No s\'ha pogut connectar amb el servidor.',
    } as Record<string, string>,
    privacyLink: 'política de privacitat', cookieLink: 'política de galetes',
    dataRightsNote: 'Per exercir els teus drets RGPD (accés, rectificació, supressió, oposició, limitació, portabilitat o revocació del consentiment) tria el motiu "Exercici de drets RGPD" i proporciona una descripció clara.',
    responsable: 'Responsable', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Temps de resposta', responseValue: 'Habitualment 24-48 hores. Màx. 30 dies naturals (RGPD art. 12).',
  },
  gl: {
    breadcrumb: 'Contacto',
    title: 'Contacto · visita-papa-2026.com',
    subtitle: 'Escríbenos para corrixir información, exercer os teus dereitos RGPD, propoñer colaboración ou simplemente saudar. Respondemos habitualmente en 48 horas.',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    purposeLabel: 'Motivo',
    subjectLabel: 'Asunto (opcional)',
    messageLabel: 'Mensaxe',
    consentLabel: 'Lin e acepto a política de privacidade. Os datos deste formulario trátanse conforme ao RGPD só para responder á túa consulta.',
    purposes: { general: 'Consulta xeral', prensa: 'Prensa / medios', rgpd: 'Exercicio de dereitos RGPD', afiliacion: 'Afiliación ou partenariado', correccion: 'Corrección de contido', otro: 'Outro' },
    submit: 'Enviar mensaxe', submitting: 'Enviando…',
    successTitle: 'Mensaxe enviada!', successBody: 'Grazas por escribir. Recibimos a túa mensaxe e responderémosche en 48 horas ao email facilitado.',
    sendAnother: 'Enviar outra mensaxe', errorTitle: 'Non se puido enviar',
    errors: {
      invalid_name: 'O nome é obrigatorio.',
      invalid_email: 'Email non válido.',
      invalid_message: 'A mensaxe debe ter polo menos 10 caracteres.',
      missing_consent: 'Tes que aceptar a política de privacidade.',
      rate_limit: 'Demasiadas solicitudes. Téntao dentro duns minutos.',
      not_configured: 'O servizo de email non está dispoñible.',
      send_failed: 'Fallou o envío da mensaxe.',
      server_error: 'Erro do servidor. Téntao de novo.',
      network: 'Non se puido conectar co servidor.',
    } as Record<string, string>,
    privacyLink: 'política de privacidade', cookieLink: 'política de cookies',
    dataRightsNote: 'Para exercer os teus dereitos RGPD (acceso, rectificación, supresión, oposición, limitación, portabilidade ou revogación do consentimento) escolle o motivo "Exercicio de dereitos RGPD" e proporciona unha descrición clara.',
    responsable: 'Responsable', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Tempo de resposta', responseValue: 'Habitualmente 24-48 horas. Máx. 30 días naturais (RGPD art. 12).',
  },
  eu: {
    breadcrumb: 'Kontaktua',
    title: 'Kontaktua · visita-papa-2026.com',
    subtitle: 'Idatzi informazioa zuzentzeko, zure RGPD eskubideak gauzatzeko, lankidetza proposatzeko edo besterik gabe agurtzeko. Ohiko erantzun denbora 48 ordu.',
    nameLabel: 'Izena',
    emailLabel: 'Emaila',
    purposeLabel: 'Arrazoia',
    subjectLabel: 'Gaia (aukerakoa)',
    messageLabel: 'Mezua',
    consentLabel: 'Irakurri eta onartu dut pribatutasun-politika. Formulario honen datuak RGPDren arabera tratatzen dira, zure kontsultari erantzuteko soilik.',
    purposes: { general: 'Kontsulta orokorra', prensa: 'Prentsa / hedabideak', rgpd: 'RGPD eskubideen egikaritza', afiliacion: 'Afiliazioa edo partnership', correccion: 'Eduki zuzenketa', otro: 'Beste bat' },
    submit: 'Bidali mezua', submitting: 'Bidaltzen…',
    successTitle: 'Mezua bidalita!', successBody: 'Mila esker idazteagatik. Zure mezua jaso dugu eta 48 orduko epean erantzungo dizugu emandako emailera.',
    sendAnother: 'Bidali beste mezu bat', errorTitle: 'Ezin izan da bidali',
    errors: {
      invalid_name: 'Izena derrigorrezkoa da.',
      invalid_email: 'Email baliogabea.',
      invalid_message: 'Mezuak gutxienez 10 karaktere izan behar ditu.',
      missing_consent: 'Pribatutasun-politika onartu behar duzu.',
      rate_limit: 'Eskaera gehiegi. Saiatu berriro minutu batzuk barru.',
      not_configured: 'Email zerbitzua ez dago eskuragarri une honetan.',
      send_failed: 'Akatsa mezua bidaltzean.',
      server_error: 'Zerbitzari errorea. Saiatu berriro.',
      network: 'Ezin izan da zerbitzariarekin konektatu.',
    } as Record<string, string>,
    privacyLink: 'pribatutasun-politika', cookieLink: 'cookie-politika',
    dataRightsNote: 'Zure RGPD eskubideak (sarbidea, zuzenketa, ezabatzea, aurka egitea, mugatzea, eramangarritasuna edo adostasuna kentzea) gauzatzeko, aukeratu "RGPD eskubideen egikaritza" arrazoia eta eman deskribapen argia.',
    responsable: 'Arduraduna', responsableValue: 'Daniel Mirón · NIF 44039446N',
    response: 'Erantzun denbora', responseValue: 'Ohikoa 24-48 ordu. Geh. 30 egun natural (RGPD 12. art.).',
  },
} as const

export default function ContactoPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const formStart = useRef<number>(Date.now())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState<keyof typeof L.es.purposes>('general')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [honey, setHoney] = useState('')

  useEffect(() => {
    formStart.current = Date.now()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          purpose,
          subject,
          message,
          consent,
          _honey: honey,
          _t: formStart.current,
        }),
      })

      if (res.ok) {
        setStatus('success')
        // Limpia formulario
        setName('')
        setEmail('')
        setPurpose('general')
        setSubject('')
        setMessage('')
        setConsent(false)
        return
      }

      const data = await res.json().catch(() => ({}))
      const errKey = data.error || 'send_failed'
      setErrorMsg(t.errors[errKey] || t.errors.send_failed)
      setStatus('error')
    } catch {
      setErrorMsg(t.errors.network)
      setStatus('error')
    }
  }

  function reset() {
    setStatus('idle')
    setErrorMsg('')
    formStart.current = Date.now()
  }

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/contacto', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="rounded-xl border-2 border-papal-gold/40 bg-papal-cream p-8 text-center">
                <div className="text-5xl">✉️✅</div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-papal-navy">
                  {t.successTitle}
                </h2>
                <p className="mt-3 text-papal-navy/80">{t.successBody}</p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-lg bg-papal-gold px-5 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                noValidate
              >
                {/* Honeypot invisible */}
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                >
                  <label>
                    Leave this field empty
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-papal-navy">{t.nameLabel} *</span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-papal-gold focus:ring-1 focus:ring-papal-gold"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-papal-navy">{t.emailLabel} *</span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-papal-gold focus:ring-1 focus:ring-papal-gold"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-semibold text-papal-navy">{t.purposeLabel} *</span>
                  <select
                    required
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value as keyof typeof L.es.purposes)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-papal-gold focus:ring-1 focus:ring-papal-gold"
                  >
                    {(Object.keys(t.purposes) as (keyof typeof t.purposes)[]).map((k) => (
                      <option key={k} value={k}>
                        {t.purposes[k]}
                      </option>
                    ))}
                  </select>
                </label>

                {purpose === 'rgpd' && (
                  <p className="rounded-lg bg-papal-cream p-3 text-xs text-papal-navy/80">
                    ⚖️ {t.dataRightsNote}
                  </p>
                )}

                <label className="block">
                  <span className="text-sm font-semibold text-papal-navy">{t.subjectLabel}</span>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-papal-gold focus:ring-1 focus:ring-papal-gold"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-papal-navy">{t.messageLabel} *</span>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    minLength={10}
                    maxLength={5000}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-papal-gold focus:ring-1 focus:ring-papal-gold"
                  />
                  <span className="mt-1 block text-right text-xs text-papal-navy/50">
                    {message.length} / 5000
                  </span>
                </label>

                <label className="flex items-start gap-3 rounded-lg border border-papal-gold/20 bg-papal-cream p-3">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-papal-gold"
                  />
                  <span className="text-xs text-papal-navy/80">
                    {t.consentLabel}{' '}
                    <Link
                      href={localizePath('/privacidad', locale)}
                      className="text-papal-gold-dark underline hover:text-papal-gold"
                    >
                      {t.privacyLink}
                    </Link>
                    .
                  </span>
                </label>

                {status === 'error' && errorMsg && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800"
                  >
                    <strong>{t.errorTitle}:</strong> {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg bg-papal-gold px-5 py-3 text-sm font-bold text-papal-navy transition hover:bg-papal-gold-light disabled:opacity-60"
                >
                  {status === 'submitting' ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.responsable}
                  </dt>
                  <dd className="text-papal-navy">{t.responsableValue}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-papal-navy/60">
                    {t.response}
                  </dt>
                  <dd className="text-papal-navy">{t.responseValue}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-papal-navy p-5 text-white/90">
              <p className="text-sm">
                🔒 Tu email no se publica en esta web. El formulario envía el mensaje directamente
                al responsable y únicamente se usa para responder a tu consulta. Los datos se
                borran cuando termina la conversación.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-heading text-base font-bold text-papal-navy">RGPD</h3>
              <p className="mt-2 text-xs text-papal-navy/70">
                Este sitio cumple con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD 3/2018.
                Consulta la{' '}
                <Link
                  href={localizePath('/privacidad', locale)}
                  className="text-papal-gold-dark underline hover:text-papal-gold"
                >
                  {t.privacyLink}
                </Link>{' '}
                y la{' '}
                <Link
                  href={localizePath('/politica-cookies', locale)}
                  className="text-papal-gold-dark underline hover:text-papal-gold"
                >
                  {t.cookieLink}
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}
