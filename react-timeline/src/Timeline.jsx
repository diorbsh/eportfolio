import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap, faCode, faCogs } from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css'
import './Timeline.css'

const timelineData = [
  {
    date: 'Jul 2025 – heute',
    title: 'QMS Process Manager',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Prozessmanagement, Prozessoptimierung, Qualitätsmanagement (ISO 9001), BPMN, Projektmanagement',
    icon: faBriefcase,
    color: '#5000ca',
    category: 'work'
  },
  {
    date: 'Feb 2025 – Jul 2025',
    title: 'Video Editor',
    company: 'Sankt Gallen, Schweiz',
    description: 'Videoschnitt, Videoproduktion, CapCut Pro, Content-Produktion',
    icon: faBriefcase,
    color: '#5000ca',
    category: 'work'
  },
  {
    date: 'Jan 2024 – Mai 2024',
    title: 'Rekrutenschule',
    company: 'Frauenfeld, Thurgau, Schweiz',
    description: 'Teamführung, Belastbarkeit, Kommunikationstechnik, Krisenmanagement',
    icon: faGraduationCap,
    color: '#5000ca',
    category: 'education'
  },
  {
    date: 'Sep 2023 – Nov 2023',
    title: 'Softwareentwickler',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Mobile App Development, C# / Xamarin, Web Development, FileZilla, WordPress, PHP',
    icon: faCode,
    color: '#5000ca',
    category: 'work'
  },
  {
    date: 'Aug 2022 – Jul 2023',
    title: 'Software Entwickler – Praktikum',
    company: 'Diepoldsau, Sankt Gallen, Schweiz',
    description: 'App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN',
    icon: faCogs,
    color: '#5000ca',
    category: 'work'
  }
]

function Timeline() {
  return (
    <div id="history" className="timeline-container">
      <div className="items-container">
        <h2 className="section-title">Erfahrung</h2>
        <p className="section-subtitle">Mein beruflicher Werdegang</p>
        <VerticalTimeline className="vertical-timeline">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.category}`}
              contentStyle={{
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                boxShadow: 'var(--shadow-md)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)'
              }}
              contentArrowStyle={{
                borderRight: `7px solid var(--color-surface)`
              }}
              date={item.date}
              iconStyle={{
                background: item.color,
                color: '#fff',
                boxShadow: `0 0 0 4px var(--color-background), 0 0 0 6px ${item.color}`
              }}
              icon={<FontAwesomeIcon icon={item.icon} size="lg" />}
              dateClassName="timeline-date"
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
              <p className="vertical-timeline-element-description">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Timeline