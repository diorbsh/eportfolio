import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap, faCode, faCogs, faCertificate, faPlay, faAward } from '@fortawesome/free-solid-svg-icons'
import './TelerikTimeline.css'

const timelineData = [
  {
    date: 'Jul 2025 – heute',
    title: 'QMS Process Manager',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Prozessmanagement, Prozessoptimierung, Qualitätsmanagement (ISO 9001), BPMN, Projektmanagement',
    icon: faBriefcase,
    color: '#5000ca',
    category: 'work',
    badge: { label: 'Qualitätsmanagement', icon: faCertificate }
  },
  {
    date: 'Feb 2025 – Jul 2025',
    title: 'Video Editor',
    company: 'Sankt Gallen, Schweiz',
    description: 'Videoschnitt, Videoproduktion, CapCut Pro, Content-Produktion',
    icon: faPlay,
    color: '#5000ca',
    category: 'work',
    badge: { label: 'Content Creation', icon: faAward }
  },
  {
    date: 'Jan 2024 – Mai 2024',
    title: 'Rekrutenschule',
    company: 'Frauenfeld, Thurgau, Schweiz',
    description: 'Teamführung, Belastbarkeit, Kommunikationstechnik, Krisenmanagement',
    icon: faGraduationCap,
    color: '#34c759',
    category: 'education',
    badge: { label: 'Ausbildung', icon: faGraduationCap }
  },
  {
    date: 'Sep 2023 – Nov 2023',
    title: 'Softwareentwickler',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Mobile App Development, C# / Xamarin, Web Development, FileZilla, WordPress, PHP',
    icon: faCode,
    color: '#0071e3',
    category: 'work',
    badge: { label: 'Vollzeit', icon: faBriefcase }
  },
  {
    date: 'Aug 2022 – Jul 2023',
    title: 'Software Entwickler – Praktikum',
    company: 'Diepoldsau, Sankt Gallen, Schweiz',
    description: 'App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN',
    icon: faCogs,
    color: '#ff6b35',
    category: 'work',
    badge: { label: 'Praktikum', icon: faCogs }
  }
]

function TelerikTimeline() {
  return (
    <div className="telerik-timeline-container">
      <div className="timeline-wrapper">
        {/* Central vertical line */}
        <div className="timeline-line" />

        {/* Timeline items */}
        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ item, index, isLast }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`timeline-item ${isEven ? 'timeline-item--left' : 'timeline-item--right'} ${item.category}`}
      data-animate="fade-up"
      style={{
        '--item-color': item.color,
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Card on left or right side */}
      <div className="timeline-card">
        <div className="card-header">
          <div className="card-icon" style={{ background: item.color }}>
            <FontAwesomeIcon icon={item.icon} size="lg" color="white" />
          </div>
          <div className="card-date" style={{ background: item.color }}>
            {item.date}
          </div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <h4 className="card-company">{item.company}</h4>
          <p className="card-description">{item.description}</p>
        </div>
        {item.badge && (
          <div className={`card-badge ${item.category}`} style={{ background: item.color }}>
            <FontAwesomeIcon icon={item.badge.icon} size="xs" color="white" />
            <span>{item.badge.label}</span>
          </div>
        )}
      </div>

      {/* Connector dot on the central line */}
      <div
        className="timeline-dot"
        style={{ background: item.color, boxShadow: `0 0 0 4px var(--color-bg), 0 0 0 6px ${item.color}` }}
      />

      {/* Vertical connector line from dot to next item (except last) */}
      {!isLast && (
        <div
          className="timeline-connector"
          style={{ background: `linear-gradient(180deg, ${item.color}, ${timelineData[index + 1].color})` }}
        />
      )}
    </div>
  )
}

export default TelerikTimeline