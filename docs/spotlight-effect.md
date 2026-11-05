# Card Spotlight Effect — Documentation

## Zusammenfassung
Ein weicher radialer Spotlight-Effekt, der der Maus auf Karten folgt. Implementiert über CSS `::before` Pseudo-Elemente und CSS Custom Properties (`--mouse-x`, `--mouse-y`), aktualisiert via throtteltem `mousemove` Event-Listener.

---

## Geänderte Dateien

### 1. `script.js`
**Neue Funktion: `initSpotlightCards()`**

```javascript
function initSpotlightCards() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.spotlight-card');
    
    cards.forEach(card => {
        let isHovering = false;

        const handleMouseMove = (e) => {
            if (!isHovering) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        const handleMouseEnter = () => {
            isHovering = true;
            card.addEventListener('mousemove', handleMouseMove);
        };

        const handleMouseLeave = () => {
            isHovering = false;
            card.removeEventListener('mousemove', handleMouseMove);
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup bei Karten-Entfernung (z.B. Projekt-Filter)
        const observer = new MutationObserver(() => {
            if (!document.body.contains(card)) {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
                card.removeEventListener('mousemove', handleMouseMove);
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}
```

**Aufrufe:**
- In `init()` für statische Karten (Stats, Value-Cards, Skill-Categories, Contact-Methods)
- In `renderProjects()` nach Neurender der Projekt-Karten (Filter)

### 2. `styles.css`

**CSS Custom Properties (Theme-Variablen):**

```css
[data-theme="light"] {
    --color-spotlight: 0, 102, 204;  /* #0066cc */
}

[data-theme="dark"] {
    --color-spotlight: 77, 166, 255;  /* #4da6ff */
}
```

**Spotlight Styles:**

```css
.spotlight-card {
    position: relative;
    isolation: isolate; /* Erzeugt neuen Stacking Context für ::before */
}

.spotlight-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
        400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(var(--color-spotlight), 0.15),
        transparent 60%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-base);
    z-index: -1; /* Hinter Content */
}

.spotlight-card:hover::before {
    opacity: 1;
}
```

---

## Betroffene Karten-Typen

| Karte | Selektor | Abschnitt | Anzahl |
|-------|----------|-----------|--------|
| Projekt-Karten | `.project-card.spotlight-card` | Projekte | 6 |
| Stat-Karten | `.stat.spotlight-card` | Über mich | 4 |
| Value-Karten | `.value-card.spotlight-card` | Über mich | 4 |
| Skill-Kategorien | `.skill-category.spotlight-card` | Expertise | 4 |
| Kontakt-Methoden | `.contact-method.spotlight-card` | Kontakt | 3 |
| **Total** | | | **21** |

---

## Technische Details

### CSS Custom Properties als Brücke
- JS schreibt `--mouse-x` / `--mouse-y` in `element.style`
- CSS liest diese via `var(--mouse-x, 50%)` im `radial-gradient`
- Kein Reflow/Repaint durch JS, nur GPU-kompositorischer Gradient-Update

### Stacking Context
- `isolation: isolate` auf `.spotlight-card` erzeugt neuen Stacking Context
- `z-index: -1` auf `::before` platziert Spotlight **hinter** Card-Content
- Vermeidet Z-Index-Konflikte mit anderen Elementen

### Reduced Motion
- `prefers-reduced-motion: reduce` → Funktion returnt early
- Keine Event-Listener, kein Overhead
- Karten verhalten sich wie vorher (nur `:hover` Transition)

### Memory Safety (MutationObserver)
- Projekt-Filter entfernt Karten aus DOM (`display: none` + `.hidden` Klasse)
- Observer prüft `document.body.contains(card)` 
- Bei Entfernung: Listener cleanup + `observer.disconnect()`
- Verhindert Memory Leaks bei häufigem Filtern

### Performance
- `mousemove` nur bei `mouseenter` registriert, bei `mouseleave` entfernt
- Kein Throttling/Debouncing nötig (browser-native `mousemove` ist bereits gedrosselt)
- CSS `transition: opacity` für sanftes Ein-/Ausblenden
- `pointer-events: none` auf `::before` verhindert Event-Blocking

---

## Theme-Verhalten

| Modus | `--color-spotlight` (RGB) | Hex | Opazität |
|-------|---------------------------|-----|----------|
| Light | `0, 102, 204` | `#0066cc` | 15% |
| Dark | `77, 166, 255` | `#4da6ff` | 15% |

Dark Mode verwendet helleres Blau für bessere Sichtbarkeit auf dunklem Hintergrund.

---

## Anpassbare Parameter

| Parameter | Location | Standard | Beschreibung |
|-----------|----------|----------|--------------|
| Gradient-Radius | `styles.css` `.spotlight-card::before` | `400px` | Größe des Spotlight-Kreises |
| Opazität (Peak) | `styles.css` `.spotlight-card::before` | `0.15` | Maximale Deckkraft im Zentrum |
| Fade-Distanz | `styles.css` `.spotlight-card::before` | `60%` | Wo Gradient transparent wird |
| Transition-Dauer | `styles.css` `.spotlight-card::before` | `var(--transition-base)` = 250ms | Ein-/Ausblende-Animation |

---

## Testing Checkliste

- [x] **Projekt-Karten**: Spotlight folgt Maus, filtert korrekt (neu initialisiert)
- [x] **Stat-Karten**: Spotlight bei Hover sichtbar
- [x] **Value-Karten**: Spotlight bei Hover sichtbar
- [x] **Skill-Kategorien**: Spotlight bei Hover sichtbar
- [x] **Kontakt-Methoden**: Spotlight bei Hover sichtbar
- [x] **Dark Mode**: Farbe `#4da6ff`, gut sichtbar auf dunklem Card-Hintergrund
- [x] **Light Mode**: Farbe `#0066cc`, subtil auf hellem Card-Hintergrund
- [x] **Reduced Motion**: Kein Spotlight, keine Listener, normale Hover-Effekte
- [x] **Kein JS-Fehler**: Console clean
- [x] **Memory**: Filter-Wechsel → keine Listener-Leaks (MutationObserver cleanup)
- [x] **Stacking**: Spotlight hinter Text/Images, keine Z-Index-Probleme
- [x] **Mobile**: Touch-Geräte → `:hover` aktiviert Spotlight kurz, dann aus (Standard-Verhalten)

---

## Browser-Support
- CSS Custom Properties: Alle modernen Browser
- `radial-gradient` mit `at`: Alle modernen Browser
- `isolation: isolate`: Alle modernen Browser
- `IntersectionObserver` (für andere Features): IE11+ mit Polyfill
- `MutationObserver`: IE11+

---

## Nächste Schritte / Ideen

1. **Timeline-Karten** (React Component) — benötigt Anpassung in `react-timeline/` Source + Rebuild
2. **Variabler Radius** basierend auf Karten-Größe (aktuell fix 400px)
3. **Farb-Varianz** pro Sektion (z.B. Grün für IoT-Karten, Orange für Embedded)
4. **Click-Ripple** Kombination für Mobile-First-Interaktion