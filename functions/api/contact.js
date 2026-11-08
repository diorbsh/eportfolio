/**
 * Cloudflare Pages Function: Contact Form Handler with Turnstile Verification
 *
 * This function:
 * 1. Verifies Turnstile token server-side
 * 2. Validates and sanitizes form input
 * 3. Forwards to FormSubmit OR sends via Resend/Brevo
 *
 * Deploy: Place in /functions/api/contact.js (Cloudflare Pages)
 *
 * Required Environment Variables (set in Cloudflare Pages dashboard):
 * - TURNSTILE_SECRET_KEY: Your Turnstile secret key
 * - FORMSUBMIT_EMAIL: Email to receive submissions (or FORMSUBMIT_ALIAS_ID)
 * - RESEND_API_KEY or BREVO_API_KEY: Optional, for direct email sending
 *
 * Frontend: Set TURNSTILE_SITE_KEY in meta tag, form submits to /api/contact
 */

export async function onRequestPost(context) {
    const { request, env } = context;

    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        // Parse JSON body
        const contentType = request.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            return jsonResponse({ success: false, message: 'Content-Type must be application/json' }, 400, corsHeaders);
        }

        const data = await request.json();

        // Extract and validate fields
        const { name, email, message, 'cf-turnstile-response': turnstileToken, ...rest } = data;

        // Server-side validation
        const validationError = validateForm({ name, email, message });
        if (validationError) {
            return jsonResponse({ success: false, message: validationError }, 400, corsHeaders);
        }

        // Verify Turnstile token
        const turnstileSecret = env.TURNSTILE_SECRET_KEY;
        if (!turnstileSecret) {
            console.error('TURNSTILE_SECRET_KEY not configured');
            return jsonResponse({ success: false, message: 'Server configuration error' }, 500, corsHeaders);
        }

        if (!turnstileToken) {
            return jsonResponse({ success: false, message: 'Sicherheitsprüfung fehlgeschlagen: Token fehlt' }, 400, corsHeaders);
        }

        const turnstileVerified = await verifyTurnstile(turnstileToken, turnstileSecret, request.headers.get('cf-connecting-ip'));
        if (!turnstileVerified.success) {
            console.warn('Turnstile verification failed:', turnstileVerified['error-codes']);
            return jsonResponse({ success: false, message: 'Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.' }, 400, corsHeaders);
        }

        // Sanitize inputs
        const sanitized = {
            name: sanitizeInput(name),
            email: sanitizeInput(email),
            message: sanitizeInput(message)
        };

        // Forward to FormSubmit or send directly
        let result;
        const formsSubmitEmail = env.FORMSUBMIT_EMAIL || 'diorbushati@gmail.com';
        const formsSubmitAlias = env.FORMSUBMIT_ALIAS_ID;

        if (env.RESEND_API_KEY) {
            // Use Resend (recommended for production)
            result = await sendViaResend(env.RESEND_API_KEY, sanitized, formsSubmitEmail);
        } else if (env.BREVO_API_KEY) {
            // Use Brevo
            result = await sendViaBrevo(env.BREVO_API_KEY, sanitized, formsSubmitEmail);
        } else if (formsSubmitAlias) {
            // Use FormSubmit with alias ID
            result = await forwardToFormSubmit(`https://formsubmit.co/ajax/${formsSubmitAlias}`, sanitized);
        } else {
            // Use FormSubmit with email (less secure - email exposed in frontend if not using alias)
            result = await forwardToFormSubmit(`https://formsubmit.co/ajax/${formsSubmitEmail}`, sanitized);
        }

        if (result.success) {
            return jsonResponse({ success: true, message: 'Nachricht erfolgreich gesendet' }, 200, corsHeaders);
        } else {
            return jsonResponse({ success: false, message: result.message || 'Versand fehlgeschlagen' }, 500, corsHeaders);
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return jsonResponse({ success: false, message: 'Ein unerwarteter Fehler ist aufgetreten' }, 500, corsHeaders);
    }
}

function validateForm({ name, email, message }) {
    if (!name || name.trim().length < 2) {
        return 'Name muss mindestens 2 Zeichen lang sein';
    }
    if (name.length > 80) {
        return 'Name ist zu lang (max. 80 Zeichen)';
    }
    if (!email || email.trim().length < 5) {
        return 'E-Mail oder Telefon ist erforderlich';
    }
    if (email.length > 120) {
        return 'E-Mail/Telefon ist zu lang (max. 120 Zeichen)';
    }
    // Email or phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    if (!emailRegex.test(email.trim()) && !phoneRegex.test(email.trim())) {
        return 'Bitte geben Sie eine gültige E-Mail-Adresse oder Telefonnummer ein';
    }
    if (!message || message.trim().length < 10) {
        return 'Nachricht muss mindestens 10 Zeichen lang sein';
    }
    if (message.length > 5000) {
        return 'Nachricht ist zu lang (max. 5000 Zeichen)';
    }
    // Link spam check
    const urlCount = (message.match(/(?:https?:\/\/|www\.)[^\s]+/gi) || []).length;
    if (urlCount > 2) {
        return 'Zu viele Links in der Nachricht (maximal 2 erlaubt)';
    }
    return null;
}

function sanitizeInput(value) {
    return value.trim().replace(/\s+/g, ' ').slice(0, 10000); // Safety limit
}

async function verifyTurnstile(token, secret, userIP) {
    const formData = new FormData();
    formData.append('secret', secret);
    formData.append('response', token);
    if (userIP) formData.append('remoteip', userIP);

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData
    });

    return response.json();
}

async function forwardToFormSubmit(endpoint, data) {
    const submitData = {
        ...data,
        _subject: 'Neue Nachricht über das Portfolio',
        _template: 'table',
        _captcha: 'false'
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
    });

    const result = await response.json().catch(() => ({}));
    return {
        success: response.ok && result.success !== false,
        message: result.message
    };
}

async function sendViaResend(apiKey, data, toEmail) {
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: 'Portfolio Contact <noreply@yourdomain.com>', // Update with verified domain
            to: [toEmail],
            subject: `Neue Portfolio-Anfrage von ${data.name}`,
            html: `
                <h2>Neue Nachricht über das Portfolio</h2>
                <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
                <p><strong>Kontakt:</strong> ${escapeHtml(data.email)}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
            `,
            text: `Neue Nachricht über das Portfolio\n\nName: ${data.name}\nKontakt: ${data.email}\n\nNachricht:\n${data.message}`
        })
    });

    const result = await response.json().catch(() => ({}));
    return {
        success: response.ok,
        message: result.message
    };
}

async function sendViaBrevo(apiKey, data, toEmail) {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            sender: { name: 'Portfolio Contact', email: 'noreply@yourdomain.com' }, // Update with verified domain
            to: [{ email: toEmail }],
            subject: `Neue Portfolio-Anfrage von ${data.name}`,
            htmlContent: `
                <h2>Neue Nachricht über das Portfolio</h2>
                <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
                <p><strong>Kontakt:</strong> ${escapeHtml(data.email)}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
            `,
            textContent: `Neue Nachricht über das Portfolio\n\nName: ${data.name}\nKontakt: ${data.email}\n\nNachricht:\n${data.message}`
        })
    });

    const result = await response.json().catch(() => ({}));
    return {
        success: response.ok,
        message: result.message
    };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function jsonResponse(data, status, headers) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { ...headers, 'Content-Type': 'application/json' }
    });
}