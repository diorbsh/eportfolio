# Contact Card Copy-to-Clipboard Buttons

## Overview
Each contact method card (E-Mail, GitHub, LinkedIn) in the Contact section now includes a copy button that copies the displayed value to the clipboard with visual feedback.

## Files Modified
- `index.html` — Restructured contact cards to separate link from copy button
- `styles.css` — Copy button, tooltip, and state styles with theme support
- `script.js` — `initCopyButtons()` function with full clipboard handling

## HTML Structure
```html
<div class="contact-method spotlight-card">
    <a href="..." class="method-link" aria-label="...">
        <div class="method-icon" aria-hidden="true">
            <i class="fas fa-envelope"></i>
        </div>
        <div class="method-details">
            <span class="method-label">E-Mail</span>
            <span class="method-value" data-copy-value="...">...</span>
        </div>
    </a>
    <button type="button" class="copy-btn" 
            aria-label="E-Mail-Adresse kopieren" 
            data-copy-target="diorbushati@gmail.com" 
            data-copy-label="E-Mail">
        <svg class="copy-icon" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">...</svg>
        <svg class="check-icon" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">...</svg>
        <span class="copy-tooltip" aria-live="polite" aria-atomic="true">Kopiert!</span>
    </button>
</div>
```

Key points:
- Outer container: `.contact-method` (div, not a link)
- Link: `.method-link` (anchor, contains icon + details)
- Button: `.copy-btn` (button type="button", sibling to link)
- Button contains: copy icon, check icon (hidden initially), tooltip

## Configuration

### Changing Copy Values
Edit the `data-copy-target` attribute on each `.copy-btn`:
```html
<button type="button" class="copy-btn" 
        data-copy-target="new-email@example.com" 
        data-copy-label="E-Mail">
```
The `data-copy-label` is used in `aria-label` announcements (e.g., "E-Mail kopiert").

### Changing Tooltip Text
Edit the `.copy-tooltip` content:
```html
<span class="copy-tooltip" aria-live="polite" aria-atomic="true">Copied!</span>
```

### Changing Display Duration
In `script.js`, modify the timeout in `showCopied()` and `showFailed()`:
```javascript
copyTimeout = setTimeout(() => {
    resetButton();
}, 2000); // Change 2000 to desired milliseconds
```

### Changing Icons
Replace the SVG paths in the button:
- `.copy-icon` — Default state (copy document icon)
- `.check-icon` — Success state (checkmark icon)

Current icons use Material Design style paths.

### Changing Button Size
In `styles.css`:
```css
.copy-btn {
    width: 40px;   /* Minimum 40px for touch */
    height: 40px;  /* Minimum 40px for touch */
}
```

### Changing Tooltip Position
In `styles.css`:
```css
.copy-tooltip {
    right: calc(100% + 8px);  /* Distance from button */
    top: 50%;
    transform: translateY(-50%);
}
```

## Accessibility Features

### Keyboard Navigation
- Button is focusable (`tabindex="0"` by default)
- Activates on `Enter` or `Space` key
- Visible focus ring: `outline: 2px solid var(--color-primary)`

### Screen Readers
- `aria-label` on button: "E-Mail-Adresse kopieren", "GitHub-URL kopieren", etc.
- `aria-live="polite"` on tooltip announces "Kopiert!" when shown
- `aria-atomic="true"` ensures entire tooltip is announced
- On success: `aria-label` updates to "E-Mail kopiert"
- On failure: `aria-label` updates to "E-Mail - Kopieren fehlgeschlagen"

### Reduced Motion
`@media (prefers-reduced-motion: reduce)` disables:
- Checkmark pop-in animation
- Tooltip fade/slide transitions
- Button opacity/transform transitions
But keeps instant icon swap and text change.

## Theme Support
Colors adapt automatically via CSS variables:
- Button background: `var(--color-bg-secondary)`
- Button border: `var(--color-border)`
- Button icon color: `var(--color-text-tertiary)`
- Checkmark color: `var(--color-accent)`
- Tooltip background: `var(--color-text)`
- Tooltip text: `var(--color-bg)`
- Tooltip arrow: `border-left-color: var(--color-text)`

## Touch Device Support
`@media (hover: none)` makes buttons:
- Always visible (`opacity: 1`)
- Interactive (`pointer-events: auto`)
- Minimum 40×40px tap target (WCAG 2.5.5)

## Clipboard Implementation

### Primary: Clipboard API
```javascript
await navigator.clipboard.writeText(text);
```
Requires secure context (HTTPS or localhost).

### Fallback: execCommand
```javascript
const textarea = document.createElement('textarea');
textarea.value = text;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
document.body.removeChild(textarea);
```
Works in older browsers and non-secure contexts.

### Error Handling
Both methods wrapped in `try/catch`. On failure:
- Shows "Fehlgeschlagen" in tooltip
- Updates `aria-label` to indicate failure
- Does NOT show false "Kopiert!" success

## Per-Card State Management
Each button maintains independent state:
```javascript
let copyTimeout = null;
let isCopied = false;
```
- Rapid clicks on multiple cards don't interfere
- Re-clicking same button during "copied" state is ignored (prevents timer reset spam)
- Timer resets properly on new copy action

## Cleanup
- `beforeunload` event clears all timeouts and removes listeners
- `once: true` ensures cleanup runs only once
- No memory leaks, no console warnings in development

## Coexistence with Spotlight Effect
- `.contact-method.spotlight-card::before` has `z-index: 0`
- `.copy-btn` has `z-index: 1`
- Button stays clickable above spotlight glow
- `isolation: isolate` on card creates proper stacking context

## Troubleshooting

### Button not appearing
1. Check `@media (hover: hover) and (pointer: fine)` — button only shows on hover/focus on desktop
2. On touch devices, check `@media (hover: none)` — button should always be visible
3. Verify `.copy-btn` has `opacity: 0` initially and transitions to `opacity: 1`

### Copy not working
1. Check browser console for errors
2. Verify `data-copy-target` has correct value
3. Test on HTTPS or localhost (required for Clipboard API)
4. Fallback should work everywhere

### Tooltip not showing
1. Check `.copy-btn.copied .copy-tooltip` has `opacity: 1`
2. Verify `transform: translateY(-50%) translateX(0)` is applied
3. Check z-index: button should be above card content

### Layout shift on hover
1. Ensure `.copy-btn` has fixed `width` and `height`
2. Tooltip uses `position: absolute` — doesn't affect layout
3. Button uses `flex-shrink: 0` — won't compress

### Spotlight covers button
1. Verify `.contact-method.spotlight-card` has `isolation: isolate`
2. Check `::before` has `z-index: 0`
3. Check `.copy-btn` has `z-index: 1`

## Future Enhancements
- Add "copy all contacts" button
- Add copy confirmation toast (global, not per-card)
- Support for copying formatted vCard
- Analytics tracking for copy events