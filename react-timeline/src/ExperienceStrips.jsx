import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { experienceData, DEFAULT_ACTIVE_INDEX } from './experienceData'
import './ExperienceStrips.css'

function ExperienceStripsInner() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX)
  const [isMounted, setIsMounted] = useState(false)
  const stripRefs = useRef([])

  // Einblend-Animation beim Mount (einmalig)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Keyboard Navigation
  const handleKeyDown = (e, index) => {
    let newIndex = activeIndex
    switch (e.key) {
      case 'ArrowRight':
        newIndex = Math.min(index + 1, experienceData.length - 1)
        break
      case 'ArrowLeft':
        newIndex = Math.max(index - 1, 0)
        break
      case 'Home':
        newIndex = 0
        break
      case 'End':
        newIndex = experienceData.length - 1
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        newIndex = index
        break
      default:
        return
    }
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
      stripRefs.current[newIndex]?.focus()
    }
  }

  // Hover mit Verzögerung gegen Flackern
  const hoverTimers = useRef({})
  const handleMouseEnter = (index) => {
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index])
    }
    hoverTimers.current[index] = setTimeout(() => {
      setActiveIndex(index)
    }, 80)
  }

  const handleMouseLeave = (index) => {
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index])
      delete hoverTimers.current[index]
    }
  }

  // Cleanup Timer
  useEffect(() => {
    return () => {
      Object.values(hoverTimers.current).forEach(timer => clearTimeout(timer))
    }
  }, [])

  return (
    <div className="experience-strips-container" role="region" aria-label="Berufserfahrung als Streifen">
      <div className="experience-strips" role="tablist">
        {experienceData.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item.id}
              ref={(el) => { stripRefs.current[index] = el }}
              className={`experience-strip ${isActive ? 'active' : ''} ${item.category}`}
              style={{
                '--strip-color': item.color,
                flexGrow: isActive ? 5 : 1,
                transitionDelay: `${index * 80}ms`
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`strip-panel-${item.id}`}
              id={`strip-tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              {/* Icon oben */}
              <div className="strip-icon" style={{ background: item.color }}>
                <FontAwesomeIcon icon={item.icon} size="lg" color="white" />
              </div>

              {/* Ausgeklappter Inhalt */}
              <div
                className="strip-content"
                id={`strip-panel-${item.id}`}
                role="tabpanel"
                aria-labelledby={`strip-tab-${item.id}`}
                hidden={!isActive}
              >
                <div className="strip-content-inner">
                  <div className="strip-header">
                    <div className="strip-badge" style={{ background: item.color }}>
                      <FontAwesomeIcon icon={item.badge.icon} size="xs" color="white" />
                      <span>{item.badge.label}</span>
                    </div>
                    <h3 className="strip-title">{item.title}</h3>
                    <h4 className="strip-company">{item.company}</h4>
                    <p className="strip-date">{item.date}</p>
                    <p className="strip-description">{item.description}</p>
                  </div>
                  <div className="strip-skills">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="strip-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eingeklappt: senkrechtes Jahr-Label unten */}
              <div className="strip-year" aria-hidden="true">
                <span>{item.yearLabel}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Schalter-Komponente: rendert entweder ExperienceStrips oder null
// Der Schalter wird in main.jsx gesteuert
export default function ExperienceStrips() {
  // USE_STRIP_TIMELINE wird in main.jsx definiert
  // Hier rendern wir immer die Komponente, main.jsx entscheidet ob sie gemountet wird
  return <ExperienceStripsInner />
}
