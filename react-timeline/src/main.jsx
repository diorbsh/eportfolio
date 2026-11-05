import React from 'react'
import { createRoot } from 'react-dom/client'
import TelerikTimeline from './TelerikTimeline'
import './styles.css'

// Make the component globally available for the portfolio
window.PortfolioTimeline = TelerikTimeline

// Auto-mount if container exists
const container = document.getElementById('timeline-react-root')
if (container) {
  const root = createRoot(container)
  root.render(<TelerikTimeline />)
}

export default TelerikTimeline