# Changelog

All notable changes to this portfolio website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

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