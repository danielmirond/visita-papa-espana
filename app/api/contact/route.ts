/**
 * POST /api/contact
 * Recibe un mensaje del formulario de contacto y lo envía por email
 * a la dirección configurada (CONTACT_TO_EMAIL) usando Resend.
 *
 * Anti-spam:
 * - Honeypot: campo oculto `_honey` debe estar vacío
 * - Rate limiting in-memory por IP (5 envíos / 10 min)
 * - Validación server-side de tipos y longitudes
 * - Tiempo mínimo del formulario (1s) para bloquear bots ultrarrápidos
 *
 * Configuración requerida en Vercel env vars:
 *   RESEND_API_KEY          — API key de https://resend.com (free tier 3000/mes)
 *   CONTACT_TO_EMAIL        — destino del mensaje (ej. daniel.mirond@gmail.com)
 *   CONTACT_FROM_EMAIL      — from verificado en Resend (ej. contacto@visita-papa-2026.com)
 *
 * Si RESEND_API_KEY no está configurada, el endpoint responde 503 con un
 * mensaje explicativo para desarrollo local.
 */

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Rate limiting simple en memoria (se resetea en cada cold start de serverless)
const ipHits = new Map<string, { count: number; windowStart: number }>()
const RATE_LIMIT_MAX = 5
const RATE_WINDOW_MS = 10 * 60 * 1000 // 10 minutos

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = ipHits.get(ip)
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    ipHits.set(ip, { count: 1, windowStart: now })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count += 1
  return true
}

// Limpieza periódica
setInterval(() => {
  const now = Date.now()
  ipHits.forEach((v, k) => {
    if (now - v.windowStart > RATE_WINDOW_MS) ipHits.delete(k)
  })
}, RATE_WINDOW_MS).unref?.()

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'rate_limit', message: 'Demasiadas solicitudes. Inténtalo en unos minutos.' },
        { status: 429 }
      )
    }

    const body = await req.json()

    // Honeypot: si está relleno, es un bot
    if (body._honey) {
      // Devolvemos 200 silencioso para no dar pistas
      return NextResponse.json({ ok: true })
    }

    // Validación de tiempo mínimo (1 segundo desde que el form se renderizó)
    const tStart = typeof body._t === 'number' ? body._t : 0
    if (tStart && Date.now() - tStart < 1000) {
      return NextResponse.json({ ok: true }) // bot
    }

    // Validación de campos
    const name = String(body.name || '').trim().slice(0, 100)
    const email = String(body.email || '').trim().slice(0, 120)
    const subject = String(body.subject || '').trim().slice(0, 150)
    const message = String(body.message || '').trim().slice(0, 5000)
    const purpose = String(body.purpose || 'general').trim().slice(0, 30)
    const consent = body.consent === true

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'invalid_name' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: 'invalid_message' }, { status: 400 })
    }
    if (!consent) {
      return NextResponse.json({ error: 'missing_consent' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || 'daniel.mirond@gmail.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'contacto@visita-papa-2026.com'

    if (!apiKey) {
      // Modo dev sin proveedor configurado — loguea y devuelve aviso
      // eslint-disable-next-line no-console
      console.warn('[contact] RESEND_API_KEY no configurada. Mensaje recibido pero no enviado:', {
        name, email, subject, purpose, messageLength: message.length,
      })
      return NextResponse.json(
        {
          error: 'not_configured',
          message:
            'El servicio de email no está configurado en el servidor. El mensaje no se ha enviado.',
        },
        { status: 503 }
      )
    }

    const purposeLabel: Record<string, string> = {
      general: 'Consulta general',
      prensa: 'Prensa / medios',
      rgpd: 'Ejercicio de derechos RGPD',
      afiliacion: 'Propuesta de afiliación o partnership',
      correccion: 'Corrección de contenido',
      otro: 'Otro',
    }

    const htmlBody = `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: auto; padding: 20px; color: #1B2A4A;">
  <h2 style="color: #1B2A4A; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">
    Nuevo mensaje desde visita-papa-2026.com
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr><td style="padding: 8px; background: #FFF8E7;"><strong>Nombre:</strong></td><td style="padding: 8px;">${escapeHtml(name)}</td></tr>
    <tr><td style="padding: 8px; background: #FFF8E7;"><strong>Email:</strong></td><td style="padding: 8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding: 8px; background: #FFF8E7;"><strong>Motivo:</strong></td><td style="padding: 8px;">${escapeHtml(purposeLabel[purpose] || purpose)}</td></tr>
    <tr><td style="padding: 8px; background: #FFF8E7;"><strong>Asunto:</strong></td><td style="padding: 8px;">${escapeHtml(subject) || '<em>(sin asunto)</em>'}</td></tr>
    <tr><td style="padding: 8px; background: #FFF8E7;"><strong>IP:</strong></td><td style="padding: 8px; font-family: monospace; color: #666;">${escapeHtml(ip)}</td></tr>
  </table>
  <h3 style="color: #1B2A4A; margin-top: 24px;">Mensaje:</h3>
  <div style="white-space: pre-wrap; background: #FFF8E7; padding: 16px; border-left: 4px solid #D4AF37; border-radius: 4px;">${escapeHtml(message)}</div>
  <p style="margin-top: 24px; font-size: 12px; color: #888;">
    Consentimiento RGPD: sí, aceptado el ${new Date().toISOString()}.<br/>
    Responde directamente a este email para contactar con ${escapeHtml(name)}.
  </p>
</body>
</html>`

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Contacto web <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `[Web] ${purposeLabel[purpose] || 'Consulta'}: ${subject || 'Sin asunto'} — ${name}`,
        html: htmlBody,
      }),
    })

    if (!resendRes.ok) {
      const errBody = await resendRes.text().catch(() => '')
      // eslint-disable-next-line no-console
      console.error('[contact] Resend API error:', resendRes.status, errBody)
      return NextResponse.json(
        { error: 'send_failed', message: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[contact] unexpected error:', err)
    return NextResponse.json(
      { error: 'server_error', message: 'Error del servidor.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
