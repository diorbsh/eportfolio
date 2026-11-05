# M1 – 3D Hero: Analyse und Grundgerüst

## Zusammenfassung
Three.js per Dynamic Import (CDN) eingebunden, transparente Canvas-Ebene hinter Hero-Content eingefügt, Resize-Handling, Visibility-Pause (IntersectionObserver + Tab-Visibility), Cleanup, Reduced-Motion/WebGL-Fallback.

---

## Geänderte Dateien

### 1. `js/hero-3d.js` (NEU)
**Inhalt:**
- WebGL-Support & `prefers-reduced-motion` Prüfung vor Initialisierung
- Three.js per `import('https://esm.sh/three@0.165.0')` lazy laden
- `WebGLRenderer`: `alpha: true`, `antialias: true`, `pixelRatio ≤ 2`, `SRGBColorSpace`
- `PerspectiveCamera` (fov 45, near 0.1, far 100, pos z=15)
- Leere Scene mit AmbientLight + DirectionalLight (Platzhalter für M2/M3)
- Render-Loop mit `requestAnimationFrame`, pausiert bei:
  - Hero nicht im Viewport (`IntersectionObserver`, `rootMargin: 100px`)
  - Tab im Hintergrund (`visibilitychange`)
- Resize-Handler (debounced 100ms): `renderer.setSize()`, `camera.aspect`, `updateProjectionMatrix()`
- Cleanup: `renderer.dispose()`, `forceContextLoss()`, Geometrien/Materialien `dispose()`, Event-Listener entfernen
- Export `window.Hero3D.dispose()` für manuelles Cleanup

### 2. `index.html`
- `<canvas id="hero-3d-canvas" aria-hidden="true"></canvas>` als **erstes Kind** in `#home.hero` (vor `.hero-content`)
- `<script src="js/hero-3d.js"></script>` vor `script.js` eingebunden

### 3. `styles.css`
```css
#hero-3d-canvas {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
}

.hero-content {
    position: relative;
    z-index: 1;
}
```

### 4. `script.js`
Keine Änderung nötig (hero-3d.js ist selbstinitialisierendes IIFE-Modul).

---

## Testing

### Checkliste
- [x] **Desktop**: Canvas rendert transparent hinter Hero-Text und Foto
- [x] **Mobile** (≤768px): Canvas passt sich `min-height: auto` an, keine Scrollbars
- [x] **Dark Mode**: Canvas-Hintergrund transparent, bestehende Gradienten (`.hero::before`) sichtbar
- [x] **Light Mode**: Gleiches Verhalten
- [x] **Reduced Motion** (OS): Canvas `display: none`, Hero funktioniert wie vorher
- [x] **Kein WebGL** (z. B. alter Browser): Canvas ausgeblendet, kein Fehler
- [x] **Tab versteckt**: Render-Loop pausiert (kein CPU-Verbrauch im Hintergrund)
- [x] **Hero aus Viewport gescrollt**: Render-Loop pausiert (IntersectionObserver)
- [x] **Resize**: Canvas passt sich flüssig an, keine Verzerrung
- [x] **Keine Layout-Shifts**: `pointer-events: none`, `z-index` korrekt, Text/Foto klickbar
- [x] **Console**: Keine Errors, Three.js lädt asynchron ohne Blocking

### Manuelle Tests
```bash
# Server starten
cd /Users/dior/Desktop/portfolio-website
npx serve . -l 8000
# http://localhost:8000 öffnen

# DevTools → Console: "Three.js geladen" prüfen
# DevTools → Elements: #hero-3d-canvas hinter .hero-content (z-index 0 vs 1)
# DevTools → Network: three.js Chunk wird geladen (esm.sh)
```

---

## Anpassbare Parameter (für spätere Meilensteine)

| Parameter | Location | Standard | Beschreibung |
|-----------|----------|----------|--------------|
| `camera.position.z` | hero-3d.js:setupScene() | 15 | Kamera-Abstand zur Szene |
| `camera.fov` | hero-3d.js:setupScene() | 45 | Field of View |
| `renderer.setPixelRatio` max | hero-3d.js:setupScene() | 2 | Max Device Pixel Ratio |
| `rootMargin` IntersectionObserver | hero-3d.js:setupVisibilityHandlers() | 100px | Wann Loop startet/stoppt |
| `debounce` Resize | hero-3d.js:setupResizeHandler() | 100ms | Resize-Handler Verzögerung |

---

## Nächste Schritte (M2)
- Mikrocontroller-Modell aus Primitiven (Box, Cylinder, Sphere)
- Langsame Schwebe-Animation (Y-Offset sin/cos) + Rotation
- Material: MeshStandardMaterial mit Akzentfarbe, Emissive für LEDs