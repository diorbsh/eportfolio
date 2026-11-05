# Typing Effect für Hero-Rollen-Tag

## Übersicht
Implementation eines Typewriter-Effekts für den Rollen-Tag im Hero-Bereich ("Software Developer" etc.). Der Text wird buchstabe für buchstabe getippt, pausiert, dann gelöscht, und die nächste Rolle erscheint.

## Geänderte Dateien

### 1. `index.html`
**Änderung:** Hero-Rollen-Element strukturiert für Typing-Effekt
- `<p class="hero-role">` erhält `aria-live="polite"` und `aria-atomic="true"`
- Inhalt aufgeteilt in:
  - `<span class="hero-role-text">` — der sichtbare Text, der animiert wird
  - `<span class="typing-cursor" aria-hidden="true">|</span>` — blinkender Cursor
- `<span class="sr-only" aria-live="polite" aria-atomic="true"></span>` — Screenreader-Text (wird bei vollständigen Wörtern aktualisiert, nicht bei jedem Buchstaben)

### 2. `script.js`
**Neue Funktion:** `initHeroTyping()`

```javascript
const roles = [
    'Software Developer',
    'Mobile App Developer',
    'IoT Specialist',
    'Embedded Systems Developer',
    'API & Integration Developer',
    'Cloud Enthusiast',
    'QMS Process Manager',
    'Wirtschaftsinformatik-Student',
    'Clean Code Fan'
];
```

**Logik:**
- Tippt mit ~80 ms pro Zeichen
- Pausiert 2 Sekunden nach vollständigem Wort
- Löscht mit ~40 ms pro Zeichen
- Pausiert 0.5 Sekunden vor nächstem Wort
- Endlosschleife durch alle 9 Rollen
- `prefers-reduced-motion`: Zeigt nur erste Rolle ("Software Developer") statisch, Cursor ausgeblendet
- Screenreader: `aria-live="polite"` auf Container + `sr-only` Element wird nur bei vollständigen Wörtern aktualisiert (verhindert Vorlesen jedes Buchstabens)

**Aufruf:** In `init()` nach `initPageTransitions()`

### 3. `styles.css`
**Neue Styles:**
```css
.hero-role {
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
    min-height: 1.5em;  /* Verhindert Zeilenhöhen-Sprung */
}

.hero-role-text { display: inline-block; }

.typing-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: currentColor;  /* Erbt Textfarbe (funktioniert in Light & Dark Mode) */
    animation: cursor-blink 1s ease-in-out infinite;
    vertical-align: text-bottom;
    margin-left: 2px;
    flex-shrink: 0;
}

@keyframes cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .typing-cursor {
        display: none !important;
        animation: none !important;
    }
}
```

**Wichtig:** `min-height: 1.5em` auf `.hero-role` verhindert, dass die Zeilenhöhe beim Tippen/Löschen springt (Platz wird reserviert).

## Barrierefreiheit
- `aria-live="polite"` auf `.hero-role` → Screenreader kündigen Änderungen an
- `aria-atomic="true"` → Ganzes Element wird vorgelesen, nicht nur Änderungen
- `aria-hidden="true"` auf Cursor → Wird nicht vorgelesen
- `sr-only` Element mit `aria-live="polite"` → Vollständige Rolle für Screenreader, wird nur bei Wortende aktualisiert
- `prefers-reduced-motion` vollständig respektiert

## Testing
- ✅ Light Mode: Cursor farblich passend (erbt `currentColor`)
- ✅ Dark Mode: Cursor farblich passend
- ✅ Mobile: Lange Tags brechen nicht um (inline-flex), kein Überlauf
- ✅ Reduced Motion (OS-Einstellung): Statisch "Software Developer", kein Cursor
- ✅ Keyboard-Navigation unbeeinträchtigt
- ✅ Keine Layout-Shifts (reservierte Höhe)

## Anpassung der Tags
Tags können einfach im Array `roles` in `initHeroTyping()` (script.js) geändert werden. Reihenfolge = Anzeigereihenfolge.