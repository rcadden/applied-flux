/**
 * POST /api/contact
 *
 * Accepts a contact form submission and emails it to hello@appliedflux.com
 * via Cloudflare Email Service (send_email binding).
 *
 * Binding required in Cloudflare Pages dashboard:
 *   Type: Email binding
 *   Variable name: CONTACT_EMAIL
 *   Destination address: hello@appliedflux.com
 *
 * The sending address (from) must be a domain you have onboarded to
 * Cloudflare Email Service. Set the SEND_FROM_ADDRESS env var in the
 * Pages dashboard (e.g. "noreply@appliedflux.com").
 */

const MAX_MESSAGE_BYTES = 8000;
const REQUIRED_FIELDS = ['name', 'message'];

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse body — accept both JSON and form-encoded
  let data;
  const contentType = request.headers.get('content-type') || '';
  try {
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
  } catch {
    return jsonResponse({ ok: false, error: 'Could not parse request body.' }, 400);
  }

  // Honeypot — bots fill this, humans leave it blank
  if (data.website && data.website.trim() !== '') {
    // Silently accept to avoid giving bots feedback
    return jsonResponse({ ok: true });
  }

  // Validate required fields
  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || String(data[field]).trim() === '') {
      return jsonResponse({ ok: false, error: `Missing required field: ${field}` }, 422);
    }
  }

  // At least one of email or phone must be present
  const email = String(data.email || '').trim();
  const phone = String(data.phone || '').trim();
  if (!email && !phone) {
    return jsonResponse({ ok: false, error: 'Please provide an email address or phone number.' }, 422);
  }

  // Validate email format if provided
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: 'Email address looks invalid.' }, 422);
  }

  // Reject oversized messages
  const message = String(data.message).trim();
  if (new TextEncoder().encode(message).length > MAX_MESSAGE_BYTES) {
    return jsonResponse({ ok: false, error: 'Message is too long.' }, 422);
  }

  const name = String(data.name).trim();
  const contact = email || phone;

  // Construct email
  const sendFrom = (env.SEND_FROM_ADDRESS || 'noreply@appliedflux.com').trim();
  const subject = `New inquiry from ${name} — Applied Flux`;

  const textBody = [
    `Name: ${name}`,
    `Contact: ${contact}`,
    '',
    message,
    '',
    '---',
    'Submitted via appliedflux.com/websites',
  ].join('\n');

  const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; color: #23201b; max-width: 600px; margin: 0 auto; padding: 2rem;">
  <p style="font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #6c6259; margin-bottom: 1.5rem;">New inquiry via appliedflux.com</p>
  <table style="border-collapse: collapse; width: 100%; margin-bottom: 1.5rem;">
    <tr>
      <td style="padding: 0.5rem 1rem 0.5rem 0; color: #6c6259; font-family: sans-serif; font-size: 0.875rem; white-space: nowrap; vertical-align: top;">Name</td>
      <td style="padding: 0.5rem 0; font-family: sans-serif; font-size: 0.9375rem;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 1rem 0.5rem 0; color: #6c6259; font-family: sans-serif; font-size: 0.875rem; white-space: nowrap; vertical-align: top;">Contact</td>
      <td style="padding: 0.5rem 0; font-family: sans-serif; font-size: 0.9375rem;">${escapeHtml(contact)}</td>
    </tr>
  </table>
  <hr style="border: none; border-top: 1px solid rgba(35,32,27,0.13); margin-bottom: 1.5rem;">
  <div style="font-family: sans-serif; font-size: 0.9375rem; line-height: 1.75; color: #23201b; white-space: pre-wrap;">${escapeHtml(message)}</div>
</body>
</html>`.trim();

  // Send via Cloudflare Email Service binding
  if (!env.CONTACT_EMAIL) {
    console.error('CONTACT_EMAIL binding is not configured.');
    return jsonResponse({ ok: false, error: 'Email service is not configured.' }, 503);
  }

  try {
    await env.CONTACT_EMAIL.send({
      to: 'hello@appliedflux.com',
      from: sendFrom,
      replyTo: email || undefined,
      subject,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error('Email send failed:', err?.message ?? err);
    return jsonResponse({ ok: false, error: 'Could not send your message. Please email hello@appliedflux.com directly.' }, 500);
  }

  return jsonResponse({ ok: true });
}

// Only POST is handled; anything else gets a 405
export async function onRequest(context) {
  if (context.request.method === 'POST') {
    return onRequestPost(context);
  }
  return new Response('Method not allowed', { status: 405 });
}

// ── helpers ──────────────────────────────────────────────────────────────────

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
