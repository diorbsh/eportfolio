# Experience Strips — M1: Data & Desktop Layout

## Overview

The Experience section now uses **horizontal expanding strips** instead of the vertical Telerik-style timeline. Five strips represent work/education entries (oldest left → newest right). Hovering or focusing a strip expands it to 5× width, revealing full content. The newest entry is open by default.

## Implementation

### Files Created/Modified

| File | Purpose |
|------|---------|
| `react-timeline/src/experienceData.js` | Single source of truth for experience data (used by both components) |
| `react-timeline/src/ExperienceStrips.jsx` | Main React component with hover/keyboard logic |
| `react-timeline/src/ExperienceStrips.css` | Styles for desktop (flex row) and mobile (flex column) |
| `react-timeline/src/main.jsx` | Build-time switch `USE_STRIP_TIMELINE` |
| `react-timeline/src/TelerikTimeline.jsx` | Updated to use shared `experienceDataReversed` |
| `timeline.umd.js` / `timeline.css` | Vite build outputs copied to root |

### Data Structure (`experienceData.js`)

```javascript
export const experienceData = [
  {
    id: 'praktikum',
    date: 'Aug 2022 – Jul 2023',
    yearLabel: '2022 – 2023',
    title: 'Software Entwickler – Praktikum',
    company: 'Diepoldsau, Sankt Gallen, Schweiz',
    description: 'App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN',
    icon: faCogs,
    color: '#ff6b35',      // Used for --strip-color CSS variable
    category: 'work',
    badge: { label: 'Praktikum', icon: faCogs },
    skills: ['App-Entwicklung', 'Technische Dokumentation', ...]
  },
  // ... 4 more entries
];
```

- **Order**: Oldest first (index 0) → Newest last (index 4)
- **Reversed export**: `experienceDataReversed` for TelerikTimeline (newest first)
- **Default active**: `DEFAULT_ACTIVE_INDEX = 4` (newest)

### Component Architecture (`ExperienceStrips.jsx`)

```
ExperienceStrips (wrapper, controlled by USE_STRIP_TIMELINE in main.jsx)
  └── ExperienceStripsInner (actual implementation)
        ├── State: activeIndex, isMounted, stripRefs[]
        ├── Keyboard: ArrowLeft/Right, Home, End, Enter/Space
        ├── Hover: 80ms delay via setTimeout/clearTimeout (anti-flicker)
        ├── ARIA: role="tablist" → role="tab" + role="tabpanel"
        └── Render: 5 <button> strips with flexGrow 1/5
```

**Key props on each strip `<button>`**:
- `style={{ '--strip-color': item.color, flexGrow: isActive ? 5 : 1 }}`
- `className="experience-strip ${isActive ? 'active' : ''} ${item.category}"`
- `role="tab"`, `aria-selected`, `aria-controls`, `id`, `tabIndex`
- `onMouseEnter/Leave`, `onClick`, `onFocus` → `setActiveIndex(index)`

### CSS Architecture (`ExperienceStrips.css`)

#### Desktop (≥768px)
```css
.experience-strips {
  display: flex;
  flex-direction: row;
  height: 260px;
  gap: 8px;
}

.experience-strip {
  flex: 1;
  background: var(--strip-color);
  color: #fff;
  transition: flex-grow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.experience-strip.active { flex-grow: 5; }

.strip-content {
  opacity: 0; visibility: hidden;
  transition: opacity 0.3s ease 0.1s, visibility 0s linear 0.4s;
}

.experience-strip.active .strip-content {
  opacity: 1; visibility: visible;
}

.strip-year {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
```

#### Mobile (<768px)
```css
@media (max-width: 768px) {
  .experience-strips {
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
  .experience-strip {
    min-height: 60px;
    max-height: 60px;
    transition: max-height 0.4s cubic-bezier(...);
  }
  .experience-strip.active { max-height: 380px; }
  .strip-year { display: none; }
}
```

### CSS Custom Properties

Each strip receives `--strip-color` via inline style. Consumed by:
- `.experience-strip` → `background: var(--strip-color); color: #fff;`
- `.strip-icon` → `background: var(--strip-color);` (inline)
- `.strip-badge` → `background: var(--strip-color);` (inline)
- `.strip-skill` → uses semi-transparent white with backdrop-filter

### Accessibility

- **ARIA tablist**: Container `role="tablist"`, buttons `role="tab"`, panels `role="tabpanel"`
- **State**: `aria-selected="true/false"`, `aria-controls="strip-panel-{id}"`, `hidden` on inactive panels
- **Keyboard**: `tabIndex={isActive ? 0 : -1}`, ArrowLeft/Right, Home, End, Enter/Space
- **Focus**: Visible outline via `:focus-visible` using `var(--strip-color)`
- **Reduced motion**: All transitions disabled via `@media (prefers-reduced-motion: reduce)`

### Build Switch

In `main.jsx`:
```javascript
const USE_STRIP_TIMELINE = true;  // false = TelerikTimeline
const ComponentToRender = USE_STRIP_TIMELINE ? ExperienceStrips : TelerikTimeline;
```

In `ExperienceStrips.jsx`:
```javascript
export default function ExperienceStrips() {
  return <ExperienceStripsInner />;
}
```
When `USE_STRIP_TIMELINE = false`, `main.jsx` renders `TelerikTimeline` instead.

### Regenerating Build Output

```bash
cd react-timeline
npm run build
cp dist/timeline.umd.cjs ../timeline.umd.js
cp dist/style.css ../timeline.css
```

### Testing Checklist

- [x] 5 strips render in correct order (oldest→newest left→right)
- [x] Each strip has correct background color (`--strip-color`)
- [x] Text is white on all colored backgrounds
- [x] Newest strip (index 4) open by default (`flex-grow: 5`)
- [x] Hover expands strip smoothly (0.4s cubic-bezier)
- [x] 80ms hover delay prevents flicker
- [x] Keyboard: ArrowLeft/Right, Home, End, Enter/Space all work
- [x] ARIA: `role="tablist"`, `aria-selected`, `aria-controls`, `hidden`
- [x] Vertical year labels: `writing-mode: vertical-rl`, `rotate(180deg)`
- [x] Mobile (<768px): flex-direction column, max-height accordion
- [x] Dark/Light theme: colors persist, text contrast maintained
- [x] Reduced motion: transitions disabled
- [x] No console errors
- [x] Build outputs copied to root (`timeline.umd.js`, `timeline.css`)

## Next Steps (M2/M3)

- **M2**: Interaction polish (touch behavior, focus management), 6th dummy entry test
- **M3**: Entrance animation (`stripsFadeIn`), mobile swipe gestures, full accessibility audit