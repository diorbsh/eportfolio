# Circular Theme Transition

## Overview

A circular reveal animation for the Dark/Light theme toggle using the View Transitions API. When the user clicks the theme toggle button (or presses Enter/Space), the new theme expands as a circle from the button's center, covering the entire viewport in ~600ms with an ease-in-out easing.

## Implementation

### Files Modified

1. **script.js** - Added `toggleThemeWithTransition()` function in `initThemeToggle()`
2. **styles.css** - Added View Transition pseudo-element styles and `.theme-transitioning` class

### How It Works

1. **Button Click** → `toggleThemeWithTransition()` is called with the button element and new theme
2. **API Check** → Verifies `document.startViewTransition` exists
3. **Reduced Motion** → Respects `prefers-reduced-motion: reduce` (instant switch)
4. **Center Calculation** → Gets button center via `getBoundingClientRect()`
5. **Radius Calculation** → Uses `Math.hypot()` to reach furthest viewport corner
6. **Transition Start** → `document.startViewTransition()` wraps the theme change
5. **Clip-Path Animation** → Animates `::view-transition-new(root)` from `circle(0)` to `circle(radius)`
6. **CSS Transitions Disabled** → `.theme-transitioning` class prevents interference
7. **Cleanup** → Removes class and resets state after animation completes

### Key Features

- **Bidirectional**: Works for both Dark→Light and Light→Dark
- **Keyboard Accessible**: Enter/Space on button triggers same animation
- **Fallback**: Instant switch if View Transitions API unavailable
- **Reduced Motion**: Instant switch when `prefers-reduced-motion: reduce`
- **Rapid Click Protection**: Ignores clicks during active transition
- **Scroll Position Preserved**: No layout shift or scroll jump
- **Fixed Header Safe**: Header with blur backdrop doesn't flicker
- **Dynamic Content Safe**: Typing effect, Three.js canvas continue uninterrupted
- **Accessibility**: `aria-pressed` and `aria-label` stay in sync

## Customization

### Duration & Easing

In `script.js`, modify the animate options:

```javascript
newRoot.animate(
    [
        { clipPath: clipPathStart },
        { clipPath: clipPathEnd }
    ],
    {
        duration: 600,        // Change duration (ms)
        easing: 'ease-in-out', // Change easing
        pseudoElement: '::view-transition-new(root)'
    }
)
```

### Colors

The transition uses the existing theme CSS variables. No additional color configuration needed.

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 111+ | ✅ Full |
| Edge | 111+ | ✅ Full |
| Firefox | 125+ | ✅ Full |
| Safari | 18+ | ✅ Full |
| Older | - | ❌ Fallback |

**Fallback Behavior**: Browsers without View Transitions API support will instantly switch themes without animation (same as before this feature).

## Testing Checklist

- [x] Theme toggles in both directions (Dark↔Light)
- [x] Click on desktop button (right side of nav)
- [x] Click on mobile button (in header)
- [x] Keyboard: Enter key
- [x] Keyboard: Space key
- [x] Rapid multiple clicks (ignored during transition)
- [x] Page scrolled mid-page (header has `.scrolled` class)
- [x] Page reloaded (saved theme persists, no animation on load)
- [x] `prefers-reduced-motion: reduce` (simulated - instant switch)
- [x] View Transitions API unavailable (simulated - instant switch)
- [x] Typing effect continues after toggle
- [x] Three.js canvas continues after toggle
- [x] `aria-pressed` matches current theme
- [x] Focus remains on button, focus ring visible
- [x] No console errors or warnings
- [x] No layout shift, no scrollbar appearance
- [x] Scroll position preserved exactly

## Architecture Notes

- **Zero dependencies** - Uses only native Web APIs
- **Minimal CSS** - Only disables default VT animation and CSS transitions during effect
- **State management** - `themeTransitionActive` flag prevents race conditions
- **Cleanup** - All promises caught, class removed, flag reset
- **StrictMode safe** - No double-invocation issues

## Accessibility

- `prefers-reduced-motion` respected (WCAG 2.3.3)
- Keyboard operable (WCAG 2.1.1)
- Focus management maintained
- ARIA attributes updated correctly
- Screen readers: theme change announced via `aria-pressed` change