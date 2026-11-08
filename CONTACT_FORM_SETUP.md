# Contact Form Setup Guide

This document explains how to configure and test the contact form with FormSubmit.

## Overview

The contact form uses **FormSubmit.co** with a simplified, robust implementation:

- **Primary**: AJAX fetch to `https://formsubmit.co/ajax/email` (no page reload)
- **Fallback**: Normal form submit (page navigates to FormSubmit, then redirects back via `_next`)
- **Spam Protection**: Single honeypot field (CSS-hidden, catches most bots)
- **No Turnstile, no time checks, no rate limits, no link heuristics**

---

## Current Implementation

The form has **baseline spam protection** (always active):

1. **Honeypot field** (`_honey` / `website`) - hidden via CSS (`position: absolute; left: -9999px`)
2. **Input sanitization** - trims, normalizes whitespace
3. **Max lengths** - Name: 80, Email: 120, Message: 5000 chars
4. **Email/phone validation** - accepts valid email or phone number format

---

## FormSubmit Configuration

### First Submission (Important!)

On the **very first** form submission to a new email/alias:

1. FormSubmit sends a **confirmation email** to `diorbushati@gmail.com`
2. You **must click the confirmation link** in that email
3. Only after confirmation will subsequent submissions be delivered
4. Check **Spam folder** if you don't see it

### Using FormSubmit Alias ID (Privacy)

Instead of exposing your email in frontend code:

1. Register at [formsubmit.co](https://formsubmit.co) with your email
2. Verify email via confirmation link
3. Get your **Alias ID** (e.g., `abc123xyz`)
4. In `script.js`, update the endpoint:
   ```javascript
   const FORMSUBMIT_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/abc123xyz';
   ```
5. In `index.html`, update the form action:
   ```html
   <form action="https://formsubmit.co/abc123xyz" method="POST">
   ```

---

## HTML Form Structure (index.html)

The form includes these hidden fields for the fallback flow:

```html
<form id="contactForm" class="contact-form" action="https://formsubmit.co/diorbushati@gmail.com" method="POST" novalidate>
    <!-- Honeypot (hidden via CSS) -->
    <input type="text" name="_honey" id="website" tabindex="-1" autocomplete="off" aria-hidden="true" />

    <!-- Fallback fields (used when JS fetch fails) -->
    <input type="hidden" name="_subject" value="Neue Nachricht über das Portfolio" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="#kontakt-danke" />
    <!-- _replyto is added dynamically by JS when email is valid -->

    <!-- Visible fields: name, email, message -->
    ...
</form>
```

### Fallback Fields Explained

| Field | Purpose |
|-------|---------|
| `_subject` | Email subject line |
| `_template` | Email format: `table` (structured) or `box` (card) |
| `_captcha` | FormSubmit's built-in captcha (keep `false`) |
| `_next` | Redirect after fallback submit (uses `#kontakt-danke` anchor) |
| `_replyto` | Sets Reply-To header (added dynamically by JS) |

---

## JavaScript Implementation (script.js)

### Key Functions

| Function | Purpose |
|----------|---------|
| `initContactForm()` | Main initialization |
| `handleSubmit(e)` | AJAX submit with timeout, triggers fallback on failure |
| `triggerFallbackSubmit()` | Removes JS handler, calls `form.submit()` |
| `showSuccess(contactValue)` | Displays success view with contact info |
| `showErrorState(message)` | Displays error view with retry button |
| `resetForm()` | Resets form to initial state |
| `validateField(input)` | Validates single field on blur/input |

### Flow

```
User submits form
    ↓
Honeypot check (if filled → fake success, no email sent)
    ↓
Client-side validation (required fields, email/phone format)
    ↓
AJAX fetch to FormSubmit (10s timeout)
    ↓
Success? → showSuccess()
    ↓
Fail/Timeout/CORS/Adblock? → triggerFallbackSubmit()
    ↓
Normal form POST → FormSubmit → redirect to #kontakt-danke
```

### Success Detection

FormSubmit returns JSON with **string** success value:
```javascript
// WRONG: result.success === false
// RIGHT:
const isSuccess = result.success === 'true' || result.success === true;
```

---

## Testing Checklist

### Normal Submission
1. Fill all fields correctly
2. Submit
3. ✅ Success view shows "Vielen Dank, ich melde mich in Kürze bei Ihnen."
4. ✅ Email received at `diorbushati@gmail.com`
5. ✅ Form resets on "Neue Nachricht schreiben"

### Honeypot Test (Bot Simulation)
1. Open DevTools → Console
2. Run: `document.querySelector('#website').value = 'bot'`
3. Submit form
4. ✅ Shows success view (fake) but **no email sent**
5. ✅ Console logs "Honeypot triggered, silently ignoring submission"

### Validation Tests

| Field | Invalid Input | Expected Error |
|-------|---------------|----------------|
| Name | Empty | "Dieses Feld ist erforderlich." |
| Name | 81 chars | "Maximal 80 Zeichen erlaubt." (via HTML maxlength) |
| Email | Empty | "Dieses Feld ist erforderlich." |
| Email | "invalid" | "Bitte geben Sie eine gültige E-Mail-Adresse oder Telefonnummer ein." |
| Message | Empty | "Dieses Feld ist erforderlich." |
| Message | 5001 chars | "Maximal 5000 Zeichen erlaubt." (via HTML maxlength) |

### Fallback Test (Simulate Network Failure)
1. Open DevTools → Network tab → Check "Offline"
2. Fill and submit form
3. ✅ Page navigates to FormSubmit, then redirects to `#kontakt-danke`
4. ✅ Success view appears (or FormSubmit's thank you page)

---

## Troubleshooting

### Emails not arriving
- Check Spam/Junk folder
- Verify FormSubmit confirmation email was clicked (first submission only)
- Check FormSubmit dashboard for delivery status

### FormSubmit returns error
- Check `_subject` and `_template` parameters
- Verify email/alias is correct
- Check FormSubmit rate limits (100/day free tier)

### Fallback not working
- Verify form has `action="https://formsubmit.co/..."` and `method="POST"`
- Verify `_next` points to `#kontakt-danke` (or full URL)
- Check browser console for JS errors preventing `form.submit()`

### CORS errors (AJAX)
- The fallback handles this automatically
- FormSubmit supports CORS for AJAX endpoint

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Form HTML with fallback fields, action/method for fallback |
| `styles.css` | Honeypot hiding (`.form-success[hidden]`, `.form-error-state[hidden]`), form styling |
| `script.js` | Simplified validation, AJAX with fallback, honeypot check |
| `.env.example` | Environment variable template (for reference only) |

---

## Security Notes

- **Never** commit `.env` or secret keys to git
- Honeypot field uses CSS hiding (not `display: none`) to catch bots
- All validation runs client-side (FormSubmit also validates server-side)
- No rate limiting client-side (FormSubmit has its own limits)