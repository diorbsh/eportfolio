# Hero Photo 3D Tilt & Glow Effect

## Overview
Interactive 3D tilt effect on the Hero profile photo with a glowing ring and optional shine/glint that follows the mouse. The effect is designed to be smooth, performant, and fully accessible.

## Files Modified
- `index.html` — Added inner tilt container (`.profile-tilt-inner`)
- `styles.css` — Complete tilt/glow/shine styling with theme support
- `script.js` — `initHeroPhotoTilt()` function with full event handling

## Effect Description

### 1. 3D Tilt (Kippen)
- The photo tilts in 3D space following the mouse direction
- Maximum tilt: **8° per axis** (X and Y)
- Perspective: 1000px for natural depth perception
- Smooth interpolation (easing factor 0.15) for organic feel
- Applied to inner container (`.profile-tilt-inner`) to prevent layout shift

### 2. Glow Ring (Leuchtrand)
- Radial gradient ring behind the photo (`::before` pseudo-element)
- Color: Accent color (`--color-accent`) — theme-aware
- Appears on hover with 250ms fade-in
- Position follows mouse with slight offset for depth perception
- Disabled for `prefers-reduced-motion` (subtle static glow only)

### 3. Shine/Glint (Glanz)
- Diagonal gradient sweep across photo surface (`::after` pseudo-element)
- Opacity: 0 at rest, 1 on hover
- Position follows mouse with slower interpolation (easing factor 0.08)
- More subtle in Light mode
- Fully disabled for `prefers-reduced-motion`

## Configuration

### Adjusting Tilt Angle
In `script.js`, modify the `maxTilt` constant:
```javascript
const maxTilt = 8; // degrees — change to 6, 10, 12, etc.
```

### Adjusting Glow Color
In `styles.css`, modify the `--color-accent` and `--color-accent-rgb` variables:

```css
:root {
    --color-accent: #4da6ff;        /* Default (used as fallback) */
    --color-accent-rgb: 77, 166, 255;
}

[data-theme="dark"] {
    --color-accent: #4da6ff;
    --color-accent-rgb: 77, 166, 255;
}

[data-theme="light"] {
    --color-accent: #0066cc;
    --color-accent-rgb: 0, 102, 204;
}
```

### Adjusting Animation Speed
In `script.js`, modify the easing factors:
```javascript
// Tilt interpolation (higher = faster/snappier)
currentX += (targetX - currentX) * 0.15;
currentY += (targetY - currentY) * 0.15;

// Shine interpolation (lower = slower/smoother)
currentShineX += (targetShineX - currentShineX) * 0.08;
currentShineY += (targetShineY - currentShineY) * 0.08;
```

### Adjusting Glow Intensity/Size
In `styles.css`, modify the `::before` pseudo-element:
```css
.profile-wrapper::before {
    inset: -4px;                    /* Ring size — increase for larger ring */
    filter: blur(8px);              /* Blur amount — increase for softer glow */
    /* opacity controlled via hover state */
}
```

Hover opacity:
```css
@media (hover: hover) and (pointer: fine) {
    .profile-wrapper:hover::before {
        opacity: 0.35;              /* Dark mode */
    }
}
[data-theme="light"] .profile-wrapper:hover::before {
    opacity: 0.2;                   /* Light mode */
}
```

### Adjusting Shine Intensity
In `styles.css`, modify the `::after` pseudo-element:
```css
.profile-wrapper::after {
    background: linear-gradient(
        110deg,
        transparent 40%,
        rgba(var(--color-accent-rgb), 0.08) 50%,  /* Intensity — change 0.08 */
        transparent 60%
    );
}
[data-theme="light"] .profile-wrapper::after {
    /* ... 0.05 for light mode */
}
```

## Accessibility & Compatibility

### prefers-reduced-motion
- Tilt animation: **disabled** (transform set to `none !important`)
- Shine effect: **disabled** (`display: none`)
- Glow ring: **retained** but more subtle (opacity 0.2 dark / 0.15 light)

### Touch Devices
- Effect **completely disabled** via `@media (hover: hover) and (pointer: fine)`
- Photo appears static with normal hover states (if any)

### Theme Toggle (Dark/Light)
- Colors update **live** via CSS variables — no JS re-initialization needed
- `--color-accent` and `--color-accent-rgb` change on theme switch
- Glow and shine automatically reflect new colors

### Keyboard Navigation
- Effect only triggers on mouse hover — no keyboard interference
- Focus styles unaffected

## Technical Implementation Details

### HTML Structure
```html
<div class="profile-wrapper">
    <div class="profile-tilt-inner">
        <img src="images/profile.png" alt="..." class="profile-image" />
    </div>
</div>
```
- `.profile-wrapper` — Stationary container, receives mouse events
- `.profile-tilt-inner` — Actually tilts via CSS transform
- `.profile-image` — Static image, no transforms

### CSS Variables Set by JS
| Variable | Element | Purpose |
|----------|---------|---------|
| `--tilt-x` | `.profile-tilt-inner` | Rotation around X axis (deg) |
| `--tilt-y` | `.profile-tilt-inner` | Rotation around Y axis (deg) |
| `--glow-x` | `.profile-wrapper` | Glow horizontal position (%) |
| `--glow-y` | `.profile-wrapper` | Glow vertical position (%) |
| `--shine-x` | `.profile-wrapper` | Shine horizontal position (%) |
| `--shine-y` | `.profile-wrapper` | Shine vertical position (%) |

### Event Listeners
| Event | Target | Purpose |
|-------|--------|---------|
| `mousemove` | `.profile-wrapper` | Track mouse for tilt/glow/shine |
| `mouseleave` | `.profile-wrapper` | Reset to center |
| `blur` | `window` | Reset when tab loses focus |
| `scroll` | `window` (passive) | Reset when Hero scrolls out of view |
| `beforeunload` | `window` | Cleanup animation frame & listeners |

### Cleanup
The `initHeroPhotoTilt()` function returns a cleanup function that:
1. Cancels any pending `requestAnimationFrame`
2. Removes all event listeners
3. Resets all CSS custom properties

This is automatically called on `beforeunload` via the `init()` function.

## Browser Support
- Modern browsers with CSS Custom Properties support
- `requestAnimationFrame` (IE10+)
- `matchMedia` for media queries (IE10+)
- `IntersectionObserver` not used (scroll check uses `getBoundingClientRect`)

## Performance Notes
- `will-change: transform` only on `.profile-tilt-inner` during active animation
- No layout thrashing: reads (getBoundingClientRect) and writes (style.setProperty) separated
- Passive scroll listener for reset check
- Shine animation runs at lower frequency (slower interpolation factor)
- No reflows triggered by the effect

## Troubleshooting

### Effect not appearing
1. Check `prefers-reduced-motion` is not enabled in OS settings
2. Verify using mouse (not touch) on desktop
3. Check browser console for JS errors
4. Verify `.profile-wrapper`, `.profile-tilt-inner`, `.profile-image` exist in DOM

### Flickering at edges
- Ensure mouse events are on `.profile-wrapper` (stationary), not `.profile-tilt-inner` or `.profile-image`
- The wrapper must not transform

### Glow/shine not updating on theme toggle
- Verify `--color-accent` and `--color-accent-rgb` are defined in both `[data-theme="dark"]` and `[data-theme="light"]`
- No JS re-init needed — CSS variables are reactive

### Photo blurry at rest
- Ensure `will-change: transform` is NOT on `.profile-image` or `.profile-tilt-inner` in rest state
- Only the inner container gets `will-change` during animation (handled by JS adding/removing class or via CSS hover)

## Future Enhancements
- Add configurable spring physics for even more natural motion
- Add parallax depth layers behind photo
- Add click/tap ripple effect for mobile (separate from tilt)