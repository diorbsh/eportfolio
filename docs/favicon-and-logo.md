# Favicon & Navigation Logo

## Overview
The portfolio now uses the profile photo as both the favicon/app icons and the navigation logo, replacing the previous "DB" monogram and emoji favicon.

## Files Generated

All assets generated from `images/profile.png` (face-centered crop, shifted up ~30% to center the face):

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 32×32 | Legacy browser support |
| `favicon-16x16.png` | 16×16 | Standard favicon |
| `favicon-32x32.png` | 32×32 | High-DPI favicon |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `icon-192.png` | 192×192 | PWA manifest (Android) |
| `icon-512.png` | 512×512 | PWA manifest (Android splash) |
| `images/logo-96.png` | 96×96 | Navigation logo (Retina-ready) |

## Implementation

### HTML (`index.html`)
```html
<!-- Favicon & App Icons -->
<link rel="icon" type="image/x-icon" href="favicon.ico?v=2">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png?v=2">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png?v=2">
<link rel="apple-touch-icon" href="apple-touch-icon.png?v=2">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png?v=2">
<link rel="icon" type="image/png" sizes="512x512" href="icon-512.png?v=2">

<!-- Navigation Logo -->
<a href="#home" class="nav-logo" aria-label="Zur Startseite">
    <img class="logo-image" src="images/logo-96.png?v=2" alt="Dior Bushati" width="36" height="36" aria-hidden="true">
    <span class="logo-text">Dior Bushati</span>
</a>
```

**Cache Busting**: All assets include `?v=2` query parameter to bypass aggressive browser favicon caching.

### CSS (`styles.css`)
```css
.logo-image {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--color-border);
    flex-shrink: 0;
    transition: border-color var(--transition-fast);
}

.nav-logo:hover .logo-image {
    border-color: var(--color-primary);
}
```

**Theme Support**: Border uses CSS custom properties (`--color-border`, `--color-primary`) for automatic light/dark mode adaptation.

## Regenerating Assets

To regenerate with different crop/position:

1. Install sharp: `npm install sharp --save-dev`
2. Create a script similar to the one used:
   ```javascript
   const baseImage = sharp('images/profile.png').extract({
       left: 0,
       top: Math.floor((height - size) * 0.3), // 30% up from center
       width: size,
       height: size
   });
   ```
3. Adjust `top` offset (0.3 = 30% up) to center face differently
4. Run script to generate all sizes
5. Increment cache-busting version (`?v=3`)

## Browser Support

| Format | Browsers |
|--------|----------|
| `.ico` | All (legacy fallback) |
| `.png` 16/32 | Modern browsers |
| `apple-touch-icon` | iOS Safari |
| `icon-192/512` | Chrome/Android PWA |

## Accessibility

- Logo image has `alt="Dior Bushati"` for screen readers
- `aria-hidden="true"` on image (decorative, text label adjacent)
- Link has `aria-label="Zur Startseite"`
- Fixed dimensions (`width="36" height="36"`) prevent layout shift
- `flex-shrink: 0` prevents distortion in flex container

## Testing Checklist

- [x] Favicon appears in browser tab (16px recognizable)
- [x] Apple touch icon works on iOS
- [x] PWA icons work for "Add to Home Screen"
- [x] Nav logo displays at 36×36px, round, face-centered
- [x] Border color adapts to light/dark theme
- [x] Hover state changes border to primary color
- [x] No layout shift on load (fixed dimensions)
- [x] No console errors
- [x] Cache-busting works (increment `?v=` to force refresh)