# Dior Bushati — Portfolio Website

Personal portfolio website showcasing projects, skills, and experience as a Software Developer specializing in mobile apps, IoT, embedded systems, and quality management.

🌐 **Live Demo**: [https://diorbsh.github.io](https://diorbsh.github.io) (after deployment)

---

## ✨ Features

### Implemented
- **Hero Typing Effect** — Animated role rotation with typewriter effect and blinking cursor (9 roles)
- **3D Hero Background (M1 Foundation)** — Three.js WebGL canvas with lazy loading, visibility-aware render loop, resize handling, full cleanup
- **Scroll-Reveal Animations** — Staggered entrance animations with direction variants
- **Counter Animations** — Smooth counting with German number formatting
- **Reduced Motion Support** — Full `prefers-reduced-motion` compliance
- **Dark/Light Mode** — Theme toggle with system preference detection and persistence
- **Project Filtering** — Filter by category (Mobile, IoT, Embedded, Web)
- **Contact Form** — With FormSubmit integration and validation
- **React Timeline** — Experience timeline as UMD component
- **Responsive Design** — Mobile-first with fluid typography

### Planned (3D Hero Milestones)
- **M2** — Microcontroller Model: ESP32-like board from primitives, hover/rotation animation
- **M3** — IoT Network: Nodes, connection lines, traveling data packets
- **M4** — Mouse Interaction: Parallax tilt, node highlight/repel, scroll fade-out
- **M5** — Theme & Responsive: Live Dark/Light color sync, mobile optimizations
- **M6** — Performance & Polish: InstancedMesh, 60fps target, accessibility finalization

---

## 🚀 Quick Start

```bash
# Clone and navigate
cd portfolio-website

# Start local server (port 8000)
npx serve . -p 8000

# Or with Python
python3 -m http.server 8000

# Open http://localhost:8000
```

---

## 📁 Project Structure

```
portfolio-website/
├── index.html           # Main HTML structure
├── script.js            # Vanilla JS (IIFE module pattern)
├── styles.css           # CSS with custom properties theming
├── timeline.css         # React Timeline component styles
├── timeline.umd.js      # Bundled React Timeline (UMD)
├── CHANGELOG.md         # Version history
├── docs/
│   ├── typing-effect.md       # Typing effect documentation
│   ├── milestone-3d-01.md     # 3D Hero M1 documentation
│   └── milestone-01-plan.md   # Original M1 plan
├── js/
│   └── hero-3d.js             # Three.js 3D scene (M1+)
├── images/              # Assets (profile, project thumbnails)
└── react-timeline/      # React Timeline source (Vite project)
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **HTML** | Semantic HTML5, ARIA attributes |
| **CSS** | Custom Properties, CSS Grid/Flexbox, `@media (prefers-reduced-motion)` |
| **JavaScript** | Vanilla ES6+, IIFE module, IntersectionObserver, requestAnimationFrame |
| **3D Graphics** | **Three.js (r165)** via ESM CDN (esm.sh), lazy-loaded |
| **React** | Timeline component (v18, bundled as UMD via Vite) |
| **Icons** | Font Awesome 6 (CDN) |
| **Fonts** | Inter (Google Fonts) |
| **Deploy** | GitHub Pages / Netlify / Vercel (static) |

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`, `nav`)
- Skip link for keyboard users
- `aria-live` regions for dynamic content (typing effect, form status)
- Focus-visible styles for all interactive elements
- Reduced motion support via OS preference
- Color contrast ratios WCAG AA compliant
- Alt text for all meaningful images
- Decorative 3D canvas: `aria-hidden="true"`

---

## 🎨 Theming

CSS Custom Properties in `:root` (light) and `[data-theme="dark"]`:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-primary: #0066cc;
  --color-accent: #00aa55;
  /* ... */
}

[data-theme="dark"] {
  --color-bg: #1a1a1a;
  --color-text: #f5f5f5;
  --color-primary: #4da6ff;
  --color-accent: #55dd88;
  /* ... */
}
```

Toggle persists to `localStorage` and respects `prefers-color-scheme`.

The 3D scene reacts to theme changes via CSS custom properties (planned M5).

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| ≤ 480px | Mobile (single column) |
| 481–768px | Tablet |
| 769–1024px | Desktop |
| > 1024px | Large desktop |

Mobile-first approach with fluid typography (`clamp()`).

---

## 📄 License

MIT License — feel free to use as inspiration for your own portfolio.

---

## 🤝 Contact

- **Email**: diorbushati@gmail.com
- **GitHub**: [@diorbsh](https://github.com/diorbsh)
- **LinkedIn**: [diorbushati](https://www.linkedin.com/in/diorbushati/)

---

*Built with care by Dior Bushati*