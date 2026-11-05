import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faGraduationCap,
  faCode,
  faCogs,
  faCertificate,
  faAward,
  faArrowRight,
  faCheckCircle,
  faCircle,
  faDotCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import './Roadmap.css'

const roadmapData = [
  {
    id: 'praktikum',
    date: 'Aug 2022 – Jul 2023',
    title: 'Software Entwickler – Praktikum',
    company: 'Diepoldsau, Sankt Gallen, Schweiz',
    description: 'App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN',
    skills: ['App-Entwicklung', 'Technische Dokumentation', 'Cloud-Computing', 'IoT', 'MQTT', 'C++', 'Python', 'TortoiseSVN'],
    category: 'work',
    icon: faCogs,
    color: '#5000ca',
    status: 'completed',
    x: 50,
    y: 10
  },
  {
    id: 'softwareentwickler',
    date: 'Sep 2023 – Nov 2023',
    title: 'Softwareentwickler',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Mobile App Development, C# / Xamarin, Web Development, FileZilla, WordPress, PHP',
    skills: ['Mobile App Development', 'C# / Xamarin', 'Web Development', 'FileZilla', 'WordPress', 'PHP'],
    category: 'work',
    icon: faCode,
    color: '#0071e3',
    status: 'completed',
    x: 50,
    y: 28
  },
  {
    id: 'rekrutenschule',
    date: 'Jan 2024 – Mai 2024',
    title: 'Rekrutenschule',
    company: 'Frauenfeld, Thurgau, Schweiz',
    description: 'Teamführung, Belastbarkeit, Kommunikationstechnik, Krisenmanagement',
    skills: ['Teamführung', 'Belastbarkeit', 'Kommunikationstechnik', 'Krisenmanagement'],
    category: 'education',
    icon: faGraduationCap,
    color: '#34c759',
    status: 'completed',
    x: 50,
    y: 46
  },
  {
    id: 'videoeditor',
    date: 'Feb 2025 – Jul 2025',
    title: 'Video Editor',
    company: 'Sankt Gallen, Schweiz',
    description: 'Videoschnitt, Videoproduktion, CapCut Pro, Content-Produktion',
    skills: ['Videoschnitt', 'Videoproduktion', 'CapCut Pro', 'Content-Produktion'],
    category: 'work',
    icon: faAward,
    color: '#ff6b35',
    status: 'completed',
    x: 50,
    y: 64
  },
  {
    id: 'qms',
    date: 'Jul 2025 – heute',
    title: 'QMS Process Manager',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Prozessmanagement, Prozessoptimierung, Qualitätsmanagement (ISO 9001), BPMN, Projektmanagement',
    skills: ['Prozessmanagement', 'Prozessoptimierung', 'Qualitätsmanagement (ISO 9001)', 'BPMN', 'Projektmanagement'],
    category: 'work',
    icon: faBriefcase,
    color: '#5000ca',
    status: 'current',
    x: 50,
    y: 82
  }
]

const expertiseCategories = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: faMobileScreenButton,
    color: '#0071e3',
    skills: ['Xamarin', 'C#', '.NET', 'HTML5', 'CSS3', 'Git', 'Mobile UI/UX'],
    position: { x: 15, y: 20 }
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    icon: faMicrochip,
    color: '#34c759',
    skills: ['ESP32', 'IoT', 'Embedded C', 'Cloud-Computing', 'Datengesteuerte Anleitungen', 'Sensorik'],
    position: { x: 85, y: 20 }
  },
  {
    id: 'process',
    title: 'Prozessmanagement & Qualität',
    icon: faClipboardCheck,
    color: '#ff6b35',
    skills: ['ISO 9001', 'BPMN', 'Projektmanagement', 'Prozessoptimierung', 'Change Management', 'Stakeholder-Kommunikation'],
    position: { x: 50, y: 40 }
  }
]

// Import icons dynamically
import { faMobileScreenButton, faMicrochip, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

function Roadmap() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [hoveredNode, setHoveredNode] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const svgRef = useRef(null)

  const getNodeColor = (node) => {
    if (node.status === 'current') return node.color
    if (node.status === 'completed') return node.color
    return 'var(--color-border)'
  }

  const getNodeBorderColor = (node) => {
    if (selectedNode?.id === node.id) return node.color
    if (hoveredNode?.id === node.id) return node.color
    return node.status === 'current' ? node.color : (node.status === 'completed' ? node.color : 'var(--color-border)')
  }

  const getPathColor = (index) => {
    const node = roadmapData[index]
    const nextNode = roadmapData[index + 1]
    if (!nextNode) return 'var(--color-border)'
    if (node.status === 'completed' && nextNode.status !== 'future') return node.color
    return 'var(--color-border)'
  }

  return (
    <div className="roadmap-container" ref={svgRef}>
      <div className="roadmap-header">
        <h2 className="roadmap-title">Karriere-Roadmap</h2>
        <p className="roadmap-subtitle">Mein beruflicher Werdegang als interaktive Wegstrecke</p>
      </div>

      {/* SVG for connecting paths */}
      <svg className="roadmap-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-primary)" />
          </marker>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main vertical path */}
        <path
          d="M50,15 L50,85"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="main-path"
        />

        {/* Path segments with different colors based on completion */}
        {roadmapData.slice(0, -1).map((node, index) => {
          const nextNode = roadmapData[index + 1]
          const progress = node.status === 'completed' ? 1 : (node.status === 'current' ? 0.5 : 0)
          const startY = node.y
          const endY = nextNode.y
          const midY = startY + (endY - startY) * progress

          return (
            <g key={node.id}>
              {/* Completed portion */}
              {progress > 0 && (
                <path
                  d={`M50,${startY} L50,${midY}`}
                  stroke={node.color}
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="path-completed"
                  style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
                />
              )}
              {/* Remaining portion */}
              {progress < 1 && (
                <path
                  d={`M50,${midY} L50,${endY}`}
                  stroke="var(--color-border)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="8,8"
                  className="path-pending"
                />
              )}
            </g>
          )
        })}

        {/* Branch paths to expertise areas */}
        {expertiseCategories.map((cat, index) => {
          const nodeIndex = Math.floor(index * (roadmapData.length / expertiseCategories.length))
          const node = roadmapData[nodeIndex]
          if (!node) return null

          const isLeft = cat.position.x < 50
          const isRight = cat.position.x > 50
          const isCenter = cat.position.x === 50

          let pathD
          if (isLeft) {
            pathD = `M50,${node.y} Q${(50 + cat.position.x) / 2},${node.y} ${cat.position.x},${cat.position.y}`
          } else if (isRight) {
            pathD = `M50,${node.y} Q${(50 + cat.position.x) / 2},${node.y} ${cat.position.x},${cat.position.y}`
          } else {
            pathD = `M50,${node.y} L50,${cat.position.y}`
          }

          return (
            <path
              key={cat.id}
              d={pathD}
              stroke={cat.color}
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,6"
              opacity="0.5"
              className="branch-path"
            />
          )
        })}
      </svg>

      {/* Timeline Nodes */}
      <div className="roadmap-nodes">
        {roadmapData.map((node, index) => (
          <div
            key={node.id}
            className={`roadmap-node ${node.status} ${selectedNode?.id === node.id ? 'selected' : ''} ${hoveredNode?.id === node.id ? 'hovered' : ''}`}
            style={{
              top: `${node.y}%`,
              '--node-color': node.color
            }}
            onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Connecting line to main path */}
            <div className="node-connector" style={{ background: getNodeColor(node) }} />

            {/* Node circle */}
            <div
              className="node-circle"
              style={{
                background: node.status === 'current' ? node.color : (node.status === 'completed' ? node.color : 'var(--color-surface)'),
                borderColor: getNodeBorderColor(node),
                boxShadow: node.status === 'current' ? `0 0 0 4px var(--color-background), 0 0 0 6px ${node.color}, 0 0 20px ${node.color}40` : 'none'
              }}
            >
              {node.status === 'completed' && (
                <FontAwesomeIcon icon={faCheckCircle} className="node-check" size="sm" color="white" />
              )}
              {node.status === 'current' && (
                <FontAwesomeIcon icon={faDotCircle} className="node-current" size="sm" color="white" />
              )}
              {node.status === 'future' && (
                <FontAwesomeIcon icon={faCircle} className="node-future" size="sm" color="var(--color-text-muted)" />
              )}
              <FontAwesomeIcon
                icon={node.icon}
                className="node-icon"
                size="lg"
                color={node.status === 'completed' || node.status === 'current' ? 'white' : 'var(--color-text-muted)'}
              />
            </div>

            {/* Date badge */}
            <div className="node-date" style={{ background: node.color }}>
              {node.date}
            </div>

            {/* Tooltip/Detail panel */}
            <div className={`node-detail ${selectedNode?.id === node.id ? 'open' : ''}`}>
              <div className="detail-header">
                <div className="detail-icon" style={{ background: node.color }}>
                  <FontAwesomeIcon icon={node.icon} size="lg" color="white" />
                </div>
                <div className="detail-info">
                  <h3 className="detail-title">{node.title}</h3>
                  <p className="detail-company">{node.company}</p>
                </div>
                {selectedNode?.id === node.id && (
                  <button
                    className="detail-close"
                    onClick={(e) => { e.stopPropagation(); setSelectedNode(null); }}
                    aria-label="Schließen"
                  >
                    <FontAwesomeIcon icon={faTimes} size="sm" />
                  </button>
                )}
              </div>
              <p className="detail-description">{node.description}</p>
              <div className="detail-skills">
                {node.skills.map((skill, i) => (
                  <span key={i} className="skill-tag" style={{ borderColor: node.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expertise Categories - Branch Nodes */}
      <div className="expertise-branches">
        {expertiseCategories.map((cat) => (
          <div
            key={cat.id}
            className={`expertise-branch ${expandedCategory === cat.id ? 'expanded' : ''}`}
            style={{
              left: `${cat.position.x}%`,
              top: `${cat.position.y}%`,
              '--branch-color': cat.color
            }}
            onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
          >
            <div
              className="branch-node"
              style={{
                background: expandedCategory === cat.id ? cat.color : 'var(--color-surface)',
                borderColor: cat.color,
                boxShadow: expandedCategory === cat.id ? `0 0 20px ${cat.color}40` : 'none'
              }}
            >
              <FontAwesomeIcon
                icon={cat.icon}
                size="2x"
                color={expandedCategory === cat.id ? 'white' : cat.color}
              />
            </div>
            <div className="branch-label" style={{ color: cat.color }}>
              {cat.title}
            </div>

            {expandedCategory === cat.id && (
              <div className="branch-skills">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="branch-skill-tag" style={{ background: cat.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="roadmap-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(roadmapData.filter(n => n.status === 'completed').length / roadmapData.length) * 100}%`,
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
            }}
          />
        </div>
        <div className="progress-stats">
          <span>{roadmapData.filter(n => n.status === 'completed').length} von {roadmapData.length} Stationen abgeschlossen</span>
          <span className="current-badge">Aktuell: QMS Process Manager</span>
        </div>
      </div>
    </div>
  )
}

export default Roadmap