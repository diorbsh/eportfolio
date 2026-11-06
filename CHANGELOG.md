# Changelog

All notable changes to this portfolio website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

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