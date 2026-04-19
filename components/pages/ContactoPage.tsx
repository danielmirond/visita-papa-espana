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
