import React from 'react'
import { createRoot } from 'react-dom/client'
import TelerikTimeline from './TelerikTimeline'
import ExperienceStrips from './ExperienceStrips'
import './styles.css'
import './ExperienceStrips.css'

// SCHALTER: true = ExperienceStrips (neue Streifen), false = TelerikTimeline (alte Timeline)
// In ExperienceStrips.jsx wird ebenfalls USE_STRIP_TIMELINE = true gesetzt
// Hier entscheiden wir, welche Komponente gerendert wird
const USE_STRIP_TIMELINE = true

const ComponentToRender = USE_STRIP_TIMELINE ? ExperienceStrips : TelerikTimeline

// Make the component globally available for the portfolio
window.PortfolioTimeline = ComponentToRender

// Auto-mount if container exists
const container = document.getElementById('timeline-react-root')
if (container) {
  const root = createRoot(container)
  root.render(<ComponentToRender />)
}

export default ComponentToRender