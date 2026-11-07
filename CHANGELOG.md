# Changelog

All notable changes to this portfolio website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.7.0] - 2025-11-07

### Added
- **Experience Strips (M1: Data & Desktop Layout)** — Replaces vertical Telerik timeline with horizontal expanding strips:
  - Five horizontal strips (oldest left → newest right), each with distinct accent color
  - Hover/tap expands strip to 5× width via `flex-grow` transition (0.4s, cubic-bezier)
  - Vertical year labels using `writing-mode: vertical-rl` + `rotate(180deg)` on collapsed strips
  - Newest strip (index 4) open by default
  - Full keyboard navigation: ArrowLeft/Right, Home, End, Enter/Space
  - ARIA tablist pattern: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `hidden` on inactive panels
  - Anti-flicker 80ms hover delay via `setTimeout`/`clearTimeout`
  - Shared data source (`experienceData.js`) used by both ExperienceStrips and TelerikTimeline
  - Build-time switch (`USE_STRIP_TIMELINE`) to toggle between implementations

### Technical Details
- **Single data source**: `experienceData.js` exports 5 entries with `id`, `date`, `yearLabel`, `title`, `company`, `description`, `icon`, `color`, `category`, `badge`, `skills[]`
- **Flex-grow animation**: Inactive strips `flex-grow: 1`, active `flex-grow: 5` with smooth cubic-bezier transition
- **Content reveal**: `.strip-content` uses `opacity` + `visibility` + `transform` transitions with staggered delay
- **CSS custom properties**: `--strip-color` set via inline style, consumed by `background`, `color`, badges, icons
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` disables all transitions/animations
- **Vite build**: UMD bundle (`timeline.umd.js`) + CSS (`timeline.css`) copied to root for vanilla JS integration

### Documentation
- Added `docs/experience-strips-m1.md` with implementation details, customization guide, and testing checklist

## [1.6.0] - 2025-11-07

### Added
- **Profile Photo as Favicon & Navigation Logo** — Replaces "DB" monogram and emoji favicon:
  - Face-centered crop from hero profile photo (shifted up 30% for optimal face visibility at 16px)
  - Complete favicon set: favicon.ico (32×32), favicon-16×16.png, favicon-32×32.png, apple-touch-icon.png (180×180), icon-192.png, icon-512.png
  - Navigation logo: 96×96px Retina-ready image displayed at 36×36px with CSS `border-radius: 50%`, `object-fit: cover`, subtle theme-aware border
  - Cache-busting query parameter (`?v=2`) on all icon links to bypass aggressive browser favicon caching
  - Full theme support: border colors use CSS custom properties (`--color-border`, `--color-primary`) for automatic light/dark adaptation
  - Accessibility: proper `alt` text, `aria-label` on link, fixed dimensions prevent layout shift

### Technical Details
- **Asset generation**: Sharp (Node.js) script crops 406×416 source to 406×406 square centered on face, then resizes to all required dimensions
- **Crop positioning**: `top = (height - size) * 0.3` shifts crop upward to center face in portrait-oriented photo
- **Navigation logo**: CSS-only rounding via `border-radius: 50%` (no mask images needed), `flex-shrink: 0` prevents distortion
- **Theme integration**: Border uses `var(--color-border)` (default) and `var(--color-primary)` (hover) — updates live with theme toggle
- **Zero layout shift**: `width="36" height="36"` on `<img>` + fixed CSS dimensions

### Documentation
- Added `docs/favicon-and-logo.md` with implementation details, regeneration guide, and testing checklist

## [1.5.0] - 2025-11-07

### Added
- **Circular Theme Transition** — Theme toggle now animates via View Transitions API:
  - Circular reveal expanding from button center to cover full viewport (~600ms, ease-in-out)
  - Works bidirectionally (Dark→Light and Light→Dark)
  - Keyboard accessible: Enter/Space on button triggers same animation
  - Radius calculated via `Math.hypot()` to reach furthest viewport corner (no corner left behind)
  - Fallback: instant switch if View Transitions API unavailable (no errors, no warnings)
  - Respects `prefers-reduced-motion: reduce` (instant switch)
  - Rapid clicks ignored during active transition (no state corruption)
  - Fixed header with backdrop-filter blur remains stable, no flicker
  - Scroll position preserved exactly, no layout shift
  - Typing effect, Three.js canvas, and all other animations continue uninterrupted
  - `aria-pressed` and `aria-label` stay in sync with current theme
  - Focus remains on button, focus ring visible throughout

### Technical Details
- **View Transitions API** — Uses `document.startViewTransition()` with clip-path animation on `::view-transition-new(root)`
- **Default VT animation disabled** — `::view-transition-old/new(root)` get `animation: none; mix-blend-mode: normal`
- **CSS transitions paused** — Temporary `.theme-transitioning` class on `<html>` sets `transition-duration: 0.01ms !important`
- **Center calculation** — `getBoundingClientRect()` on button (works for desktop, mobile, keyboard)
- **Cleanup** — `themeTransitionActive` flag, all promises caught, class removed, no memory leaks
- **Vanilla JS** — No dependencies, no React state, no re-renders

### Documentation
- Added `docs/theme-transition.md` with implementation details, customization guide, browser support table, and testing checklist

## [1.4.0] - 2025-11-06

### Added
- **Professional Contact Form Success & Error States** — Complete overhaul of form submission feedback:
  - **Sending state**: Button shows spinner + "Wird gesendet…", form fields disabled, visual opacity reduction
  - **Success state**: Form fades out (300ms), replaced by success view with:
    - SVG checkmark with stroke animation (circle draws in ~700ms, check draws in ~500ms with delay) in accent color
    - Headline "Nachricht gesendet"
    - Text "Danke für deine Nachricht. Ich melde mich bald bei dir zurück."
    - Subtle contact echo "Antwort an: [entered email/phone]"
    - "Neue Nachricht schreiben" button to reset form cleanly
  - **Error state**: Form stays with all data intact, shows inline error message above form:
    - Message "Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder schreibe mir direkt per E-Mail."
    - "Erneut versuchen" button to return to form
    - No harsh red; uses theme-aware error color
  - Field-level validation with inline error messages (required fields, email/phone format)
  - All transitions respect `prefers-reduced-motion` (instant state changes, no animations)

### Technical Details
- **No false success** — Success view only shown after verified `response.ok` from FormSubmit.co; network errors, timeouts, non-2xx status → error state
- **Double-submit prevention** — `isSubmitting` flag + disabled button + form opacity; second clicks/Enter ignored
- **Data preservation on error** — Form reset only on success; error keeps all user input
- **Client-side validation** — Required fields + email/phone regex; inline error messages with `aria-live="polite"`; real-time clearing on input
- **Layout stability** — Form container maintains height during transitions; `hidden` + CSS transitions for smooth cross-fade; no scroll jump
- **Timer cleanup** — 15s fetch timeout via `AbortController`; `clearTimeout`/`cancelAnimationFrame` on unload and state changes; no StrictMode warnings
- **Accessibility** — `aria-live="polite"` for status, `role="alert"` for error, `role="status"` for success; focus management (success title / error text get `tabindex="-1"` + `focus()`); keyboard-operable buttons with visible focus rings
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables stroke animation and fade transitions; instant state swap
- **Theme support** — Success checkmark uses `--color-accent`; error uses `--color-error`; all colors adapt live to Dark/Light toggle
- **Mobile friendly** — Success/error views responsive; long emails wrap via `word-break: break-word`; no horizontal scroll
- **Coexistence** — Form states isolated from spotlight/hover effects; no interference with other page animations
- **Privacy** — No console logging of form data; no localStorage/sessionStorage usage

### Documentation
- Added `docs/contact-success-state.md` with implementation details and customization guide

## [1.3.0] - 2025-11-06

### Added
- **Copy-to-Clipboard Buttons for Contact Cards** — Each contact method (E-Mail, GitHub, LinkedIn) now has a copy button:
  - Click copies the exact displayed value (E-Mail address, GitHub URL, LinkedIn URL) to clipboard
  - Button shows checkmark icon + "Kopiert!" tooltip for 2 seconds, then reverts
  - Subtle pop-in animation for checkmark, smooth fade for tooltip
  - Desktop: button appears on card hover/focus; Touch: button always visible (min 40×40px tap target)
  - Full keyboard support: focusable, activatable with Enter/Space, visible focus ring
  - Screenreader support: `aria-live="polite"` announces "Kopiert!", `aria-label` describes action
  - Theme-aware colors: adapts instantly to Dark/Light mode toggle
  - No layout shift: fixed-size button, tooltip as overlay

### Technical Details
- **Clipboard API with fallback** — Uses `navigator.clipboard.writeText()` in secure contexts, falls back to hidden textarea + `execCommand('copy')` for compatibility
- **Error handling** — `try/catch` on both methods; on failure shows "Fehlgeschlagen" instead of false success
- **Per-card state** — Each button manages its own `copied` state and timeout; rapid clicks on multiple cards work independently
- **Timer cleanup** — `setTimeout` cleared on re-click and on page unload (`beforeunload`); no memory leaks, no StrictMode warnings
- **No navigation interference** — Buttons are real `<button type="button">` outside link wrappers; `preventDefault()` + `stopPropagation()` on click
- **Touch-friendly** — `@media (hover: none)` makes buttons always visible with adequate tap target
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables animations, keeps instant icon/text swap
- **Spotlight coexistence** — Button has `z-index: 1`, spotlight `::before` has `z-index: 0`; button stays clickable above spotlight
- **Semantic HTML** — Contact cards restructured: outer `.contact-method` (div), inner `.method-link` (a), sibling `.copy-btn` (button)
- **Exact value copy** — Uses `data-copy-target` attribute with trimmed values; no whitespace/newlines

### Documentation
- Added `docs/copy-button.md` with implementation details and customization guide

## [1.2.0] - 2025-11-06

### Added
- **Hero Photo 3D Tilt & Glow Effect** — Interactive 3D tilt on profile photo with glowing ring and moving shine:
  - Smooth 3D tilt following mouse direction (max 8° per axis) with perspective
  - Subtle glow ring in accent color appearing on hover, fading smoothly in/out
  - Optional shine/glint effect following mouse position across the photo surface
  - Automatic reset on mouse leave, window blur, and when Hero scrolls out of viewport
  - Full `prefers-reduced-motion` support: tilt and shine disabled, subtle glow retained
  - Touch-friendly: effect only enabled for fine pointers with hover capability (`@media (hover: hover) and (pointer: fine)`)
  - Theme-aware: accent colors adapt live to Dark/Light mode toggle via CSS variables
  - No layout shift: photo maintains exact size and position in rest state and during hover
  - No flickering: mouse events on stationary wrapper (`.profile-wrapper`), tilt applied to inner container (`.profile-tilt-inner`)
  - Performance: `requestAnimationFrame` with smooth interpolation, `will-change` only during active hover
  - Cleanup: listeners and animation frames properly removed on page unload

### Technical Details
- Vanilla JS implementation with CSS Custom Properties for transform/glow/shine positions
- Events attached to stationary wrapper to prevent edge-flickering (Errorquelle #1)
- Direct DOM style manipulation via `element.style.setProperty()` — no React state / no re-renders (Errorquelle #2)
- `cancelAnimationFrame` + `removeEventListener` on `beforeunload` and unmount (Errorquelle #3)
- `will-change: transform` only on inner tilt container during animation, removed at rest (Errorquelle #4)
- Glow (`::before`) and shine (`::after`) overlays with `pointer-events: none`, correct `z-index`, no click interception (Errorquelle #5)
- No size change, no scrollbar, no overlap with text column (Errorquelle #6)
- Reset triggers: `mouseleave`, `window blur`, Hero out of viewport via `scroll` listener (Errorquelle #7)
- Touch devices: effect completely disabled via media query (Errorquelle #8)
- `prefers-reduced-motion`: tilt + shine off, subtle glow only (Errorquelle #9)
- Theme toggle: glow/shine colors update live via `--color-accent` / `--color-accent-rgb` CSS variables (Errorquelle #10)
- Coexists with card spotlight, typing effect, parallax, and Three.js canvas without interference (Errorquelle #11)

### Documentation
- Added `docs/photo-tilt-effect.md` with implementation details and customization guide

## [1.1.0] - 2025-11-05

### Added
- **Hero Typing Effect** — Typewriter animation for role tag cycling through 9 roles:
  "Software Developer", "Mobile App Developer", "IoT Specialist", "Embedded Systems Developer",
  "API & Integration Developer", "Cloud Enthusiast", "QMS Process Manager",
  "Wirtschaftsinformatik-Student", "Clean Code Fan"
- Blinking cursor (`|`) matching text color via `currentColor`
- Screenreader support: `aria-live="polite"`, `aria-atomic="true"`, `sr-only` live region updated only on word boundaries
- Full `prefers-reduced-motion` support: shows static first role, hides cursor
- Reserved line height (`min-height: 1.5em`) prevents layout shift during animation
- Documentation: `docs/typing-effect.md`

### Technical Details
- Vanilla JS implementation with `setTimeout` recursion (no external dependencies)
- Clean interval cleanup via recursive timeout (no memory leaks)
- Roles defined as constant array for easy maintenance
- Works in Light/Dark mode and mobile without text wrapping issues

### Fixed
- **Duplicate cursor in typing effect** — Removed `|` character from HTML cursor span (was visible alongside CSS block cursor due to missing `overflow: hidden`); added `overflow: hidden` to `.typing-cursor` as safeguard
- **Cursor baseline alignment** — Reduced cursor height from `1em` to `0.85em` to align with cap-height (was extending above capital letters due to full line-height with `vertical-align: text-bottom`)

### Added (3D Hero — M1)
- **Three.js Scene Foundation** — Transparent WebGL canvas behind Hero content, lazy-loaded via dynamic import
- WebGL support detection & `prefers-reduced-motion` fallback (graceful degradation)
- Render-loop pausing via IntersectionObserver (Hero visibility) + `visibilitychange` (tab background)
- Resize handling with debounced renderer/camera update
- Full resource cleanup on dispose (geometries, materials, renderer, context loss)
- Accessibility: `aria-hidden="true"` on decorative canvas
- Documentation: `docs/milestone-3d-01.md`

### Added (Card Spotlight Effect)
- **Soft Radial Spotlight** — CSS `::before` pseudo-element with radial gradient following mouse position on card hover
- Applied to 5 card types: Project cards, Stat cards, Value cards, Skill categories, Contact methods
- CSS Custom Properties (`--mouse-x`, `--mouse-y`) updated via throttled `mousemove` listener
- Theme-aware colors via `--color-spotlight` variable (Light: `#0066cc`, Dark: `#4da6ff`)
- `isolation: isolate` for correct stacking context, `z-index: -1` keeps spotlight behind content
- Full `prefers-reduced-motion` support: effect disabled, no JS listeners attached
- Memory-safe: MutationObserver cleanup when cards removed (e.g., project filtering)
- Documentation: `docs/spotlight-effect.md`

---

## [1.0.0] - 2025-10-18

### Added
- Portfolio website with Hero, About, Expertise, Experience (React Timeline), Projects, and Contact sections
- Dark/Light theme toggle with persistence
- Responsive design with mobile-first approach
- React-based Timeline component bundled as UMD
- Project filtering by category (Mobile, IoT, Embedded, Web)
- Contact form with validation
- Skip link for accessibility
- Semantic HTML5 structure