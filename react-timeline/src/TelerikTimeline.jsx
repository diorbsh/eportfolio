import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { experienceDataReversed } from './experienceData'
import './TelerikTimeline.css'

function TelerikTimeline() {
  return (
    <div className="telerik-timeline-container">
      <div className="timeline-wrapper">
        {/* Central vertical line */}
        <div className="timeline-line" />

        {/* Timeline items */}
        <div className="timeline-items">
          {experienceDataReversed.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experienceDataReversed.length - 1}
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