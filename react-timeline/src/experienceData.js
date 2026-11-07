/**
 * Zentrale Datenquelle für die Erfahrungs-Sektion
 * Wird von beiden Timeline-Komponenten genutzt (TelerikTimeline & ExperienceStrips)
 * Reihenfolge: ÄLTESTE zuerst (Index 0), NEUESTE zuletzt (Index 4)
 */
import { faBriefcase, faGraduationCap, faCode, faCogs, faCertificate, faPlay, faAward } from '@fortawesome/free-solid-svg-icons'

export const experienceData = [
  {
    id: 'praktikum',
    date: 'Aug 2022 – Jul 2023',
    yearLabel: '2022 – 2023',
    title: 'Software Entwickler – Praktikum',
    company: 'Diepoldsau, Sankt Gallen, Schweiz',
    description: 'App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN',
    icon: faCogs,
    color: '#ff6b35', // Orange
    category: 'work',
    badge: { label: 'Praktikum', icon: faCogs },
    skills: ['App-Entwicklung', 'Technische Dokumentation', 'Cloud-Computing', 'IoT', 'MQTT', 'C++', 'Python', 'TortoiseSVN']
  },
  {
    id: 'softwareentwickler',
    date: 'Sep 2023 – Nov 2023',
    yearLabel: '2023',
    title: 'Softwareentwickler',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Mobile App Development, C# / Xamarin, Web Development, FileZilla, WordPress, PHP',
    icon: faCode,
    color: '#0071e3', // Blau
    category: 'work',
    badge: { label: 'Vollzeit', icon: faBriefcase },
    skills: ['Mobile App Development', 'C# / Xamarin', 'Web Development', 'FileZilla', 'WordPress', 'PHP']
  },
  {
    id: 'rekrutenschule',
    date: 'Jan 2024 – Mai 2024',
    yearLabel: '2024',
    title: 'Rekrutenschule',
    company: 'Frauenfeld, Thurgau, Schweiz',
    description: 'Teamführung, Belastbarkeit, Kommunikationstechnik, Krisenmanagement',
    icon: faGraduationCap,
    color: '#34c759', // Grün
    category: 'education',
    badge: { label: 'Ausbildung', icon: faGraduationCap },
    skills: ['Teamführung', 'Belastbarkeit', 'Kommunikationstechnik', 'Krisenmanagement']
  },
  {
    id: 'video-editor',
    date: 'Feb 2025 – Jul 2025',
    yearLabel: '2025',
    title: 'Video Editor',
    company: 'Sankt Gallen, Schweiz',
    description: 'Videoschnitt, Videoproduktion, CapCut Pro, Content-Produktion',
    icon: faPlay,
    color: '#5000ca', // Violett
    category: 'work',
    badge: { label: 'Content Creation', icon: faAward },
    skills: ['Videoschnitt', 'Videoproduktion', 'CapCut Pro', 'Content-Produktion']
  },
  {
    id: 'qms-process-manager',
    date: 'Jul 2025 – heute',
    yearLabel: '2025 – heute',
    title: 'QMS Process Manager',
    company: 'Altstätten, Sankt Gallen, Schweiz',
    description: 'Prozessmanagement, Prozessoptimierung, Qualitätsmanagement (ISO 9001), BPMN, Projektmanagement',
    icon: faBriefcase,
    color: '#5000ca', // Violett
    category: 'work',
    badge: { label: 'Qualitätsmanagement', icon: faCertificate },
    skills: ['Prozessmanagement', 'Prozessoptimierung', 'Qualitätsmanagement (ISO 9001)', 'BPMN', 'Projektmanagement']
  }
]

// Für TelerikTimeline (NEUESTE zuerst) - umgekehrte Reihenfolge
export const experienceDataReversed = [...experienceData].reverse()

// Standard: NEUESTE ist aktiv (Index 4 = letzter Eintrag)
export const DEFAULT_ACTIVE_INDEX = experienceData.length - 1
