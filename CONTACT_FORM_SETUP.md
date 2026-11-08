# Contact Form Setup Guide

This document explains how to configure and test the contact form with FormSubmit and spam protection.

## Overview

The contact form supports two spam protection variants:

| Feature | Variante A (FormSubmit Captcha) | Variante B (Cloudflare Turnstile) |
|---------|--------------------------------|-----------------------------------|
| **Complexity** | Simple (no backend) | Requires serverless function |
| **Spam Protection** | Basic (FormSubmit's built-in) | Strong (invisible CAPTCHA) |
| **User Experience** | May show captcha challenge | Invisible/non-interactive |
| **Privacy** | Good | Excellent (GDPR-friendly) |
| **Cost** | Free | Free (Cloudflare Turnstile) |

---

## Current Implementation (Ready to Use)

The form is already configured with **baseline spam protection** (always active):

1. **Honeypot field** (`_honey` / `website`) - hidden via CSS (position: absolute; left: -9999px)
2. **Time check** - rejects submissions faster than 3 seconds
3. **Input sanitization** - trims, normalizes whitespace
4. **Max lengths** - Name: 80, Email: 120, Message: 5000 chars
5. **Link spam heuristic** - rejects > 2 URLs in message
6. **Client-side rate limit** - 45 second cooldown after successful submit

---

## Variante A: FormSubmit Captcha (Simplest)

### Enable
In `script.js`, change:
```javascript
const FORMSUBMIT_PARAMS = {
    _subject: 'Neue Nachricht über das Portfolio',
    _template: 'table',
    _captcha: 'true'  // Change from 'false' to 'true'
};
```

### How it works
- FormSubmit adds `_captcha=true` to form data
- On suspicious submissions, FormSubmit shows a captcha challenge page
- User solves captcha → form submits → returns to your site
- **With AJAX**: FormSubmit returns JSON, but captcha flow may redirect

### Caveat with AJAX
FormSubmit's captcha is designed for traditional form POST. With AJAX:
- If captcha triggered, FormSubmit returns HTML challenge page (not JSON)
- The `Accept: application/json` header may prevent captcha display
- **Recommendation**: Use Variante B for AJAX, or submit to FormSubmit directly (no AJAX)

---

## Variante B: Cloudflare Turnstile (Recommended)

### Setup Steps

#### 1. Create Turnstile Site
1. Go to [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/ → Turnstile)
2. Click "Add Site"
3. **Site name**: Your portfolio domain (e.g., `diorbsh.github.io`)
4. **Domain**: Add your production domain AND `localhost`
   - Example: `diorbsh.github.io`, `localhost`
5. **Widget Mode**: Choose "Managed" (auto) or "Non-interactive" (invisible)
6. Click "Create"
7. Copy **Site Key** (public) and **Secret Key** (private)

#### 2. Configure Frontend
Add Site Key to HTML meta tag (in `index.html`):
```html
<meta name="turnstile-site-key" content="YOUR_SITE_KEY_HERE">
```
Or set via environment variable at build time.

The Turnstile script is already loaded async in `index.html`:
```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

#### 3. Deploy Serverless Function
The function at `functions/api/contact.js` handles:
- Turnstile token verification (server-side)
- Input validation & sanitization
- Forwarding to FormSubmit OR sending via Resend/Brevo

**Deploy to Cloudflare Pages:**
1. Push to GitHub
2. Connect repo in Cloudflare Pages
3. Build settings: Framework = "None", Build command = (empty), Output = (empty)
4. Add Environment Variables in Pages dashboard:
   - `TURNSTILE_SECRET_KEY` = your secret key
   - `FORMSUBMIT_EMAIL` = `diorbushati@gmail.com`
   - Optional: `FORMSUBMIT_ALIAS_ID` = your FormSubmit alias
   - Optional: `RESEND_API_KEY` or `BREVO_API_KEY` for direct email

**Deploy to Netlify:**
- Place function in `netlify/functions/contact.js`
- Add env vars in Netlify dashboard

**Deploy to Vercel:**
- Place function in `api/contact.js`
- Add env vars in Vercel dashboard

#### 4. Update Frontend Endpoint
In `script.js`, change the endpoint:
```javascript
const FORMSUBMIT_ENDPOINT = '/api/contact'; // Your serverless function
```

---

## Using FormSubmit Alias ID (Privacy)

Instead of exposing your email in frontend code:

1. Register at [formsubmit.co](https://formsubmit.co) with your email
2. Verify email via confirmation link
3. Get your **Alias ID** (e.g., `abc123xyz`)
3. In frontend, use alias:
   ```javascript
   const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/abc123xyz';
   ```
4. Or in serverless function, set `FORMSUBMIT_ALIAS_ID` env var

---

## Testing Checklist

### Normal Submission
1. Fill all fields correctly
2. Wait > 3 seconds after page load
3. Submit
4. ✅ Success view shows "Vielen Dank, ich melde mich in Kürze bei Ihnen."
5. ✅ Email received at `diorbushati@gmail.com`
6. ✅ Form resets on "Neue Nachricht schreiben"

### Honeypot Test (Bot Simulation)
1. Open DevTools → Console
2. Run: `document.querySelector('#website').value = 'bot'`
3. Submit form
4. ✅ Shows success view (fake) but **no email sent**
5. ✅ Console logs "Honeypot triggered, silently ignoring submission"

### Too Fast Submission
1. Reload page
2. Immediately fill and submit (< 3 seconds)
3. ✅ Error: "Bitte nehmen Sie sich einen Moment Zeit für Ihre Nachricht."

### Link Spam Test
1. Fill form with message containing 3+ URLs
2. Submit
3. ✅ Error: "Zu viele Links in der Nachricht (maximal 2 erlaubt)."

### Rate Limit Test
1. Submit successfully
2. Try to submit again within 45 seconds
3. ✅ Error: "Bitte warten Sie X Sekunden, bevor Sie eine weitere Nachricht senden."

### Turnstile Test (Variante B)
1. Without Turnstile token (block script or clear token)
2. Submit
3. ✅ Error: "Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut."

### Validation Tests
| Field | Invalid Input | Expected Error |
|-------|---------------|----------------|
| Name | Empty | "Dieses Feld ist erforderlich." |
| Name | 81 chars | "Maximal 80 Zeichen erlaubt." |
| Email | Empty | "Dieses Feld ist erforderlich." |
| Email | "invalid" | "Bitte geben Sie eine gültige E-Mail-Adresse oder Telefonnummer ein." |
| Message | Empty | "Dieses Feld ist erforderlich." |
| Message | 9 chars | "Nachricht muss mindestens 10 Zeichen lang sein." |
| Message | 5001 chars | "Nachricht ist zu lang (max. 5000 Zeichen)." |

---

## First FormSubmit Submission

**Important:** On the **very first** form submission to a new email/alias:
1. FormSubmit sends a **confirmation email** to `diorbushati@gmail.com`
2. You **must click the confirmation link** in that email
3. Only after confirmation will subsequent submissions be delivered
4. Check **Spam folder** if you don't see it

---

## Troubleshooting

### Emails not arriving
- Check Spam/Junk folder
- Verify FormSubmit confirmation email was clicked
- Check FormSubmit dashboard for delivery status
- If using serverless function: check function logs

### Turnstile not loading
- Verify Site Key is correct in meta tag
- Check browser console for errors
- Ensure domain is added in Turnstile dashboard (including localhost)

### FormSubmit returns error
- Check `_subject` and `_template` parameters
- Verify email/alias is correct
- Check FormSubmit rate limits (100/day free tier)

### CORS errors (serverless function)
- Function includes CORS headers
- Ensure frontend calls correct endpoint (`/api/contact`)

---

## Files Modified

| File | Purpose |
|------|---------|
| `index.html` | Form HTML, Turnstile widget container, meta tag for site key |
| `styles.css` | Honeypot hiding, Turnstile widget styles |
| `script.js` | Enhanced validation, spam protection, Turnstile integration, FormSubmit AJAX |
| `functions/api/contact.js` | Serverless function for Turnstile verification (Variante B) |
| `.env.example` | Environment variable template |

---

## Security Notes

- **Never** commit `.env` or secret keys to git
- Turnstile Secret Key **only** in serverless function environment
- Honeypot field uses CSS hiding (not `display: none`) to catch bots
- All validation runs both client AND server-side
- Rate limiting is client-side only (supplement with server-side in production)