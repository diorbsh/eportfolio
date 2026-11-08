(() => {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // View Transition state
    let themeTransitionActive = false;

    const state = {
        theme: 'light',
        scrollY: 0,
        isScrolling: false,
        mousePosition: { x: 0, y: 0 },
        projects: [],
        activeFilter: 'all'
    };

    const projectsData = [
        {
            id: 1,
            title: 'Xamarin Cloud-App',
            description: 'Mobile App mit Xamarin und Cloud-Anbindung zur Visualisierung von Maschinen. Die Kommunikation zwischen App und Maschine läuft über MQTT und eine IoT-Infrastruktur, wodurch Maschinendaten in Echtzeit dargestellt werden.',
            category: 'mobile',
            tags: ['Xamarin', 'C#', 'MQTT', 'Cloud', '.NET'],
            image: 'images/xamarin.png',
            links: [
                { text: 'Quellcode', url: '#', type: 'github' }
            ],
            featured: true
        },
        {
            id: 2,
            title: 'IoT Schnittstelle',
            description: 'Konzeption und Umsetzung einer IoT-Schnittstelle zwischen Mobile-App, MQTT-Broker (Mosquitto) und Maschine. Ermöglicht die bidirektionale Kommunikation und Steuerung von Maschinen über das Internet.',
            category: 'iot',
            tags: ['ESP32', 'MQTT', 'Mosquitto', 'IoT', 'C++'],
            image: 'images/iot.png',
            links: [
                { text: 'Quellcode', url: '#', type: 'github' }
            ],
            featured: true
        },
        {
            id: 3,
            title: 'WeatherStation',
            description: 'Entwicklung einer Wetterstation mit CircuitPython auf einem Mikrocontroller. Sensoren erfassen Temperatur, Luftfeuchtigkeit und Luftdruck in Echtzeit, die Daten werden ausgelesen, verarbeitet und angezeigt.',
            category: 'embedded',
            tags: ['CircuitPython', 'Mikrocontroller', 'Sensoren', 'IoT', 'Embedded'],
            image: 'images/weatherstation.jpg',
            links: [
                { text: 'Quellcode', url: '#', type: 'github' }
            ],
            featured: false
        },
        {
            id: 4,
            title: 'E-Commerce Shop',
            description: 'Umsetzung eines E-Commerce-Shops mit reinem HTML, CSS und JavaScript – von der Produktdarstellung bis zur Warenkorb-Logik, ohne Framework.',
            category: 'web',
            tags: ['HTML', 'CSS', 'JavaScript', 'Vanilla JS'],
            image: 'images/ecommerceshop.png',
            links: [
                { text: 'Quellcode', url: '#', type: 'github' }
            ],
            featured: false
        },
        {
            id: 5,
            title: 'Arduino-Steuerung mit Node-RED',
            description: 'Aufbau von Node-RED-Flows zur Steuerung eines Arduino. Über verknüpfte Nodes und Switches werden Befehle verarbeitet und an das Arduino weitergeleitet, um dessen Verhalten in Echtzeit zu steuern.',
            category: 'embedded',
            tags: ['Node-RED', 'Arduino', 'IoT', 'Visual Programming'],
            image: 'images/nodered.png',
            links: [
                { text: 'Quellcode', url: '#', type: 'github' }
            ],
            featured: false
        },
        {
            id: 6,
            title: 'WordPress Webseite',
            description: 'Erstellung einer WordPress-Webseite mit allen grundlegenden Funktionen – von der Struktur über die Beitragsverwaltung bis zur individuellen Anpassung des Designs.',
            category: 'web',
            tags: ['WordPress', 'PHP', 'CMS', 'Web Design'],
            image: 'images/wordpress.jpg',
            links: [
                { text: 'Quellcode', url: '#', type: 'github' }
            ],
            featured: false
        }
    ];

    const skillsData = {
        frontend: [
            { name: 'Xamarin', icon: '📱' },
            { name: 'C#', icon: '🔷' },
            { name: '.NET', icon: '💜' },
            { name: 'HTML5', icon: '🌐' },
            { name: 'CSS3', icon: '🎨' },
            { name: 'JavaScript', icon: '📜' },
            { name: 'Git', icon: '📝' },
            { name: 'Mobile UI/UX', icon: '📐' }
        ],
        backend: [
            { name: 'ESP32', icon: '🔌' },
            { name: 'Embedded C', icon: '⚙️' },
            { name: 'C++', icon: '⚡' },
            { name: 'Python', icon: '🐍' },
            { name: 'MQTT', icon: '📡' },
            { name: 'Mosquitto', icon: '📨' },
            { name: 'Cloud Computing', icon: '☁️' },
            { name: 'Node-RED', icon: '🔗' }
        ],
        cloud: [
            { name: 'ISO 9001', icon: '📋' },
            { name: 'BPMN', icon: '📊' },
            { name: 'Projektmanagement', icon: '📈' },
            { name: 'Prozessoptimierung', icon: '🔄' },
            { name: 'Change Management', icon: '🔀' },
            { name: 'Stakeholder-Kommunikation', icon: '🤝' },
            { name: 'Qualitätsmanagement', icon: '✅' },
            { name: 'Prozessdesign', icon: '🎯' }
        ],
        tools: [
            { name: 'Visual Studio', icon: '💻' },
            { name: 'VS Code', icon: '📝' },
            { name: 'FileZilla', icon: '📁' },
            { name: 'TortoiseSVN', icon: '📚' },
            { name: 'WordPress', icon: '🌐' },
            { name: 'CapCut Pro', icon: '✂️' },
            { name: 'CircuitPython', icon: '🐍' },
            { name: 'Technische Dokumentation', icon: '📄' }
        ]
    };

    // Experience Timeline Data (shared with React component)
// Order: oldest first (index 0) → newest last (index 4)
const experienceData = [
    {
        id: 'praktikum',
        date: 'Aug 2022 – Jul 2023',
        yearLabel: '2022–2023',
        title: 'Software Entwickler – Praktikum',
        company: 'Diepoldsau, Sankt Gallen, Schweiz',
        ort: 'Diepoldsau, Sankt Gallen, Schweiz',
        beschreibung: 'Entwicklung einer mobilen App mit Xamarin und Cloud-Anbindung zur Visualisierung von Maschinendaten in Echtzeit. Kommunikation zwischen App und Maschine über MQTT und eine IoT-Infrastruktur.',
        aufgaben: [
            'Entwicklung der mobilen App mit Xamarin.Forms und C#',
            'Anbindung an MQTT-Broker (Mosquitto) für Echtzeit-Datenaustausch',
            'Implementierung von Cloud-Services zur Datenspeicherung und -verarbeitung',
            'Erstellung technischer Dokumentation und API-Spezifikationen',
            'Zusammenarbeit mit Embedded-Team für Maschinen-Integration'
        ],
        icon: 'cogs',
        color: '#ff6b35',
        category: 'work',
        badge: { label: 'Praktikum', icon: 'cogs' },
        skills: [
            { name: 'Xamarin', info: 'Cross-Platform Mobile Development' },
            { name: 'C#', info: 'Hauptprogrammiersprache für App-Logik' },
            { name: 'MQTT', info: 'Leichtgewichtiges Messaging-Protokoll für IoT' },
            { name: 'Mosquitto', info: 'Open-Source MQTT Broker' },
            { name: 'Cloud Computing', info: 'Azure/AWS für Backend-Services' },
            { name: 'Python', info: 'Skripte für Datenverarbeitung & Testing' },
            { name: 'TortoiseSVN', info: 'Versionskontrolle im Team' }
        ]
    },
    {
        id: 'softwareentwickler',
        date: 'Sep 2023 – Nov 2023',
        yearLabel: '2023',
        title: 'Softwareentwickler',
        company: 'Altstätten, Sankt Gallen, Schweiz',
        ort: 'Altstätten, Sankt Gallen, Schweiz',
        beschreibung: 'Entwicklung mobiler Apps mit C#/Xamarin sowie Web-Anwendungen. Betreuung von WordPress-Projekten und Server-Administration.',
        aufgaben: [
            'Mobile App Development mit C# und Xamarin.Forms',
            'Web Development: Frontend (HTML/CSS/JS) und Backend (PHP)',
            'WordPress-Entwicklung: Themes, Plugins, Custom Post Types',
            'Server-Administration via FileZilla (FTP/SFTP)',
            'Datenbank-Design und -Optimierung (MySQL)'
        ],
        icon: 'code',
        color: '#0071e3',
        category: 'work',
        badge: { label: 'Vollzeit', icon: 'briefcase' },
        skills: [
            { name: 'C# / Xamarin', info: 'Mobile App Entwicklung für iOS & Android' },
            { name: 'Web Development', info: 'HTML5, CSS3, JavaScript, PHP' },
            { name: 'FileZilla', info: 'FTP/SFTP Client für Server-Management' },
            { name: 'WordPress', info: 'CMS-Entwicklung: Themes & Plugins' },
            { name: 'PHP', info: 'Serverseitige Programmierung' },
            { name: 'MySQL', info: 'Datenbank-Design & Queries' }
        ]
    },
    {
        id: 'rekrutenschule',
        date: 'Jan 2024 – Mai 2024',
        yearLabel: '2024',
        title: 'Rekrutenschule',
        company: 'Frauenfeld, Thurgau, Schweiz',
        ort: 'Frauenfeld, Thurgau, Schweiz',
        beschreibung: 'Militärische Grundausbildung mit Fokus auf Führung, Kommunikation und Krisenmanagement.',
        aufgaben: [
            'Teamführung und Personalverantwortung in Übungsszenarien',
            'Kommunikationstechnik: Funkgeräte, verschlüsselte Verbindungen',
            'Krisenmanagement und Entscheidungsfindung unter Zeitdruck',
            'Physische und mentale Belastbarkeitsübungen',
            'Ausbildung in militärischer Taktik und Ordnung'
        ],
        icon: 'graduation-cap',
        color: '#34c759',
        category: 'education',
        badge: { label: 'Ausbildung', icon: 'graduation-cap' },
        skills: [
            { name: 'Teamführung', info: 'Führen von Gruppen in Ausbildungs-Szenarien' },
            { name: 'Belastbarkeit', info: 'Physische & mentale Resilienz' },
            { name: 'Kommunikationstechnik', info: 'Funk, BTM, verschlüsselte Verbindungen' },
            { name: 'Krisenmanagement', info: 'Entscheidungen unter Druck & Unsicherheit' }
        ]
    },
    {
        id: 'video-editor',
        date: 'Feb 2025 – Jul 2025',
        yearLabel: '2025',
        title: 'Video Editor',
        company: 'Sankt Gallen, Schweiz',
        ort: 'Sankt Gallen, Schweiz',
        beschreibung: 'Produktion und Schnitt von Video-Content für Social Media und Marketing. Einsatz von CapCut Pro für effiziente Workflows.',
        aufgaben: [
            'Videoschnitt und Post-Production für Social Media (Reels, Shorts, TikTok)',
            'Videoproduktion: Drehplanung, Aufnahme, Licht, Ton',
            'Content-Strategie und Redaktionsplanung',
            'Effiziente Workflows mit CapCut Pro (Templates, Auto-Captions)',
            'Zusammenarbeit mit Marketing-Team für Kampagnen-Umsetzung'
        ],
        icon: 'play',
        color: '#5000ca',
        category: 'work',
        badge: { label: 'Content Creation', icon: 'award' },
        skills: [
            { name: 'Videoschnitt', info: 'Schnitt, Color Grading, Audio-Mixing' },
            { name: 'Videoproduktion', info: 'Konzeption, Dreh, Post-Production' },
            { name: 'CapCut Pro', info: 'Professionelles Schnitt-Tool mit KI-Features' },
            { name: 'Content-Produktion', info: 'Redaktionsplanung, Storytelling, Publishing' }
        ]
    },
    {
        id: 'qms-process-manager',
        date: 'Jul 2025 – heute',
        yearLabel: '2025–heute',
        title: 'QMS Process Manager',
        company: 'Altstätten, Sankt Gallen, Schweiz',
        ort: 'Altstätten, Sankt Gallen, Schweiz',
        beschreibung: 'Verantwortung für Qualitätsmanagementsystem (ISO 9001), Prozessoptimierung und BPMN-Modellierung. Steuerung von Projekten und Change-Management.',
        aufgaben: [
            'Weiterentwicklung und Pflege des QMS nach ISO 9001',
            'Prozessmodellierung und -optimierung mit BPMN 2.0',
            'Projektmanagement: Planung, Steuerung, Controlling',
            'Change Management: Antragsprüfung, Risikobewertung, Freigabe',
            'Audit-Vorbereitung und -Begleitung (intern/extern)',
            'Schulung von Mitarbeitenden zu QM-Themen'
        ],
        icon: 'briefcase',
        color: '#5000ca',
        category: 'work',
        badge: { label: 'Qualitätsmanagement', icon: 'certificate' },
        skills: [
            { name: 'Prozessmanagement', info: 'End-to-End Prozessverantwortung' },
            { name: 'Prozessoptimierung', info: 'Analyse, Verbesserung, Automatisierung' },
            { name: 'Qualitätsmanagement (ISO 9001)', info: 'Normkonforme QMS-Gestaltung & Audits' },
            { name: 'BPMN', info: 'Business Process Model and Notation 2.0' },
            { name: 'Projektmanagement', info: 'Klassisch & agil (Scrum, Kanban)' },
            { name: 'Change Management', info: 'ITIL-basierter Änderungsprozess' }
        ]
    }
];

// Default open index (newest = last)
const DEFAULT_OPEN_INDEX = experienceData.length - 1;

    function init() {
        loadTheme();
        initThemeToggle();
        initMobileMenu();
        initSmoothScroll();
        initScrollAnimations();
        initProjectFilter();
        initProjectCards();
        initSkillTags();
        initCounterAnimation();
        initContactForm();
        initParallaxEffects();
        initMouseTracking();
        initKeyboardNavigation();
        initHeaderScroll();
        initPageTransitions();
        initBackToTop();
        initHeroTyping();
        initSpotlightCards();
        initCopyButtons();
        const photoTiltCleanup = initHeroPhotoTilt();

        state.projects = projectsData;
        renderProjects();
        renderSkills();
        const timelineCleanup = initExperienceTimeline();

        document.documentElement.classList.add('js-loaded');

        // Cleanup on page unload
        if (timelineCleanup) {
            window.addEventListener('beforeunload', timelineCleanup, { once: true });
        }

        // Cleanup on page unload (handles StrictMode-like double-init in dev)
        if (photoTiltCleanup) {
            window.addEventListener('beforeunload', photoTiltCleanup, { once: true });
        }
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            state.theme = savedTheme;
        } else if (prefersDarkScheme.matches) {
            state.theme = 'dark';
        }
        applyTheme(state.theme);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        state.theme = theme;

        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.setAttribute('aria-pressed', theme === 'dark');
        }
    }

    function initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Circular theme transition using View Transitions API
        function toggleThemeWithTransition(button, newTheme) {
            // Skip if transition already in progress
            if (themeTransitionActive) return;

            // Respect prefers-reduced-motion
            if (prefersReducedMotion) {
                applyTheme(newTheme);
                return;
            }

            // Check for View Transitions API support
            if (!document.startViewTransition) {
                applyTheme(newTheme);
                return;
            }

            themeTransitionActive = true;

            // Calculate center of button
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate radius to furthest corner of viewport
            const maxX = Math.max(centerX, window.innerWidth - centerX);
            const maxY = Math.max(centerY, window.innerHeight - centerY);
            const radius = Math.hypot(maxX, maxY);

            // Create clip-path for the circular reveal
            const clipPathStart = `circle(0px at ${centerX}px ${centerY}px)`;
            const clipPathEnd = `circle(${radius}px at ${centerX}px ${centerY}px)`;

            // Disable CSS transitions during view transition to prevent interference
            document.documentElement.classList.add('theme-transitioning');

            try {
                const transition = document.startViewTransition(() => {
                    applyTheme(newTheme);
                });

                // Wait for the transition to be ready (DOM updated)
                transition.ready.then(() => {
                    // Animate the clip-path on the new root
                    const newRoot = document.documentElement;
                    newRoot.animate(
                        [
                            { clipPath: clipPathStart },
                            { clipPath: clipPathEnd }
                        ],
                        {
                            duration: 600,
                            easing: 'ease-in-out',
                            pseudoElement: '::view-transition-new(root)'
                        }
                    ).finished.then(() => {
                        // Clean up
                        document.documentElement.classList.remove('theme-transitioning');
                        themeTransitionActive = false;
                    }).catch(() => {
                        // Clean up on error/abort
                        document.documentElement.classList.remove('theme-transitioning');
                        themeTransitionActive = false;
                    });
                }).catch(() => {
                    // Clean up if transition.ready fails
                    document.documentElement.classList.remove('theme-transitioning');
                    themeTransitionActive = false;
                });

                // Handle rapid clicks - skip transition if another click comes in
                transition.finished.then(() => {
                    themeTransitionActive = false;
                }).catch(() => {
                    themeTransitionActive = false;
                });

            } catch (error) {
                // Fallback if View Transition fails
                document.documentElement.classList.remove('theme-transitioning');
                themeTransitionActive = false;
                applyTheme(newTheme);
            }
        }

        toggle.addEventListener('click', () => {
            const newTheme = state.theme === 'dark' ? 'light' : 'dark';
            toggleThemeWithTransition(toggle, newTheme);
        });

        // Keyboard support - Enter/Space triggers same transition
        toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const newTheme = state.theme === 'dark' ? 'light' : 'dark';
                toggleThemeWithTransition(toggle, newTheme);
            }
        });

        prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    function initMobileMenu() {
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        if (!btn || !menu) return;

        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            menu.hidden = expanded;
        });

        menu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                btn.setAttribute('aria-expanded', 'false');
                menu.hidden = true;
            });
        });

        document.addEventListener('click', (e) => {
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                btn.setAttribute('aria-expanded', 'false');
                menu.hidden = true;
            }
        });
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });

                    target.focus({ preventScroll: true });
                }
            });
        });
    }

    function initScrollAnimations() {
        if (prefersReducedMotion) {
            document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('visible'));
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = parseInt(element.dataset.delay) || 0;

                    setTimeout(() => {
                        element.classList.add('visible');
                    }, delay);

                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }

    function initProjectFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const grid = document.getElementById('projectsGrid');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                state.activeFilter = btn.dataset.filter;
                filterProjects(state.activeFilter);
            });
        });
    }

    function filterProjects(filter) {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            const category = card.dataset.category;
            const shouldShow = filter === 'all' || category === filter;

            if (shouldShow) {
                card.style.display = 'block';
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, index * 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    function initProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    function initSpotlightCards() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const cards = document.querySelectorAll('.spotlight-card');

        cards.forEach(card => {
            let rafId = null;
            let isHovering = false;

            const handleMouseMove = (e) => {
                if (!isHovering) return;

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };

            const handleMouseEnter = () => {
                isHovering = true;
                card.addEventListener('mousemove', handleMouseMove);
            };

            const handleMouseLeave = () => {
                isHovering = false;
                card.removeEventListener('mousemove', handleMouseMove);
                // Reset to center for smooth transition out
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup on card removal (e.g., filter change)
            const observer = new MutationObserver(() => {
                if (!document.body.contains(card)) {
                    card.removeEventListener('mouseenter', handleMouseEnter);
                    card.removeEventListener('mouseleave', handleMouseLeave);
                    card.removeEventListener('mousemove', handleMouseMove);
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }

    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        grid.innerHTML = projectsData.map((project, index) => `
            <article class="project-card spotlight-card" data-category="${project.category}" style="animation-delay: ${index * 100}ms">
                <div class="project-image" aria-hidden="true">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" />
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');

        initProjectCards();
        initSpotlightCards();
        initCopyButtons();
    }

    function initSkillTags() {
        document.addEventListener('mouseover', (e) => {
            const tag = e.target.closest('.skill-tag');
            if (tag) {
                tag.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            const tag = e.target.closest('.skill-tag');
            if (tag) {
                tag.style.transform = 'translateY(0) scale(1)';
            }
        });
    }

    function renderSkills() {
        Object.entries(skillsData).forEach(([key, skills]) => {
            const container = document.getElementById(`${key}Skills`);
            if (!container) return;

            container.innerHTML = skills.map((skill, index) => `
                <span class="skill-tag" style="animation-delay: ${index * 50}ms">
                    <span aria-hidden="true">${skill.icon}</span>
                    ${skill.name}
                </span>
            `).join('');
        });
    }

    // ============ EXPERIENCE TIMELINE - ACCORDION STYLE ============
    // Vertical timeline with expandable cards (accordion behavior)
    function initExperienceTimeline() {
        const container = document.getElementById('timeline-react-root') || document.getElementById('timeline');
        if (!container) return;

        let openIndex = DEFAULT_OPEN_INDEX;

        // Create timeline HTML
        function render() {
            const itemsHtml = experienceData.map((item, index) => {
                const isOpen = index === openIndex;
                const detailsId = `timeline-details-${item.id}`;
                const headerId = `timeline-header-${item.id}`;

                // Preview skills (max 3) for collapsed state
                const previewSkills = item.skills.slice(0, 3).map(skill =>
                    `<span class="timeline-skill timeline-skill-preview" data-tooltip="${escapeHtml(skill.info)}">${escapeHtml(skill.name)}</span>`
                ).join('');
                const extraCount = item.skills.length > 3 ? item.skills.length - 3 : 0;
                const extraSkillsHtml = extraCount > 0 ?
                    `<span class="timeline-skill timeline-skill-more" aria-label="${extraCount} weitere Skills">+${extraCount}</span>` : '';

                // All skills for expanded state (with tooltips)
                const allSkillsHtml = item.skills.map(skill =>
                    `<span class="timeline-skill" data-tooltip="${escapeHtml(skill.info)}">${escapeHtml(skill.name)}</span>`
                ).join('');

                // Aufgaben list
                const aufgabenHtml = item.aufgaben && item.aufgaben.length > 0
                    ? `<ul class="timeline-aufgaben">${item.aufgaben.map(a => `<li>${escapeHtml(a)}</li>`).join('')}</ul>`
                    : '';

                return `
                    <article class="timeline-item ${item.category} ${isOpen ? 'open' : ''}"
                             data-index="${index}"
                             data-animate="fade-up"
                             style="animation-delay: ${index * 100}ms">
                        <div class="timeline-marker" style="--marker-color: ${item.color};">
                            <i class="fas fa-${item.icon}" aria-hidden="true" style="color: var(--color-bg);"></i>
                        </div>
                        <div class="timeline-content">
                            <header class="timeline-header" id="${headerId}" role="heading" aria-level="3">
                                <div class="timeline-date">${escapeHtml(item.date)}</div>
                                <div class="timeline-main">
                                    <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
                                    <p class="timeline-company">${escapeHtml(item.ort)}</p>
                                </div>
                                ${item.badge ? `
                                    <span class="timeline-badge" style="background: ${item.color};">
                                        <i class="fas fa-${item.badge.icon}" aria-hidden="true"></i>
                                        ${escapeHtml(item.badge.label)}
                                    </span>
                                ` : ''}
                            </header>

                            <!-- Preview skills (collapsed state) -->
                            <div class="timeline-skills-preview" aria-hidden="${isOpen}">
                                ${previewSkills}
                                ${extraSkillsHtml}
                            </div>

                            <!-- Expandable details -->
                            <div class="timeline-details" id="${detailsId}" role="region" aria-labelledby="${headerId}" hidden="${!isOpen}">
                                <div class="timeline-details-inner">
                                    ${item.beschreibung ? `<p class="timeline-description">${escapeHtml(item.beschreibung)}</p>` : ''}
                                    ${aufgabenHtml}
                                    <div class="timeline-skills" aria-label="Technologien und Skills">
                                        ${allSkillsHtml}
                                    </div>
                                </div>
                            </div>

                            <!-- Toggle button (full header is also clickable via JS) -->
                            <button type="button"
                                    class="timeline-toggle"
                                    aria-expanded="${isOpen}"
                                    aria-controls="${detailsId}"
                                    aria-label="${isOpen ? 'Details ausblenden' : 'Details anzeigen'}"
                                    data-index="${index}">
                                <span class="timeline-toggle-text">${isOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}</span>
                                <i class="fas fa-chevron-down" aria-hidden="true"></i>
                            </button>
                        </div>
                    </article>
                `;
            }).join('');

            container.innerHTML = `
                <div class="timeline-container" role="list" aria-label="Berufserfahrung">
                    ${itemsHtml}
                </div>
            `;

            attachListeners();
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function attachListeners() {
            const items = container.querySelectorAll('.timeline-item');
            const toggles = container.querySelectorAll('.timeline-toggle');

            // Click on toggle button
            toggles.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const index = parseInt(btn.dataset.index, 10);
                    toggleItem(index);
                });
            });

            // Click on header (entire header area) - accordion trigger
            items.forEach(item => {
                const header = item.querySelector('.timeline-header');
                if (header) {
                    header.addEventListener('click', () => {
                        const index = parseInt(item.dataset.index, 10);
                        toggleItem(index);
                    });
                    // Keyboard support for header
                    header.setAttribute('tabindex', '0');
                    header.setAttribute('role', 'button');
                    header.setAttribute('aria-expanded', item.classList.contains('open'));
                    header.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            const index = parseInt(item.dataset.index, 10);
                            toggleItem(index);
                        }
                    });
                }
            });

            // Tooltip handling for skill chips
            const skillChips = container.querySelectorAll('.timeline-skill[data-tooltip]');
            skillChips.forEach(chip => {
                let tooltip = null;
                let hideTimeout = null;

                const showTooltip = () => {
                    if (tooltip) return;
                    tooltip = document.createElement('div');
                    tooltip.className = 'timeline-tooltip';
                    tooltip.textContent = chip.dataset.tooltip;
                    tooltip.setAttribute('role', 'tooltip');
                    document.body.appendChild(tooltip);

                    const rect = chip.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + rect.width / 2}px`;
                    tooltip.style.top = `${rect.top - 8}px`;
                    tooltip.style.transform = 'translateX(-50%) translateY(-100%)';

                    requestAnimationFrame(() => tooltip.classList.add('visible'));
                };

                const hideTooltip = () => {
                    if (!tooltip) return;
                    tooltip.classList.remove('visible');
                    tooltip.addEventListener('transitionend', () => {
                        tooltip.remove();
                        tooltip = null;
                    }, { once: true });
                };

                chip.addEventListener('mouseenter', () => {
                    clearTimeout(hideTimeout);
                    showTooltip();
                });
                chip.addEventListener('mouseleave', () => {
                    hideTimeout = setTimeout(hideTooltip, 100);
                });
                chip.addEventListener('focus', showTooltip);
                chip.addEventListener('blur', hideTooltip);
                // Touch support
                chip.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    showTooltip();
                }, { passive: false });
            });

            // Arrow key navigation between items
            container.addEventListener('keydown', (e) => {
                if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) return;
                e.preventDefault();

                const itemsArray = Array.from(items);
                const currentFocus = document.activeElement;
                let currentIndex = itemsArray.findIndex(item =>
                    item.contains(currentFocus) || item.querySelector('.timeline-toggle') === currentFocus || item.querySelector('.timeline-header') === currentFocus
                );

                if (currentIndex === -1) currentIndex = openIndex;

                let newIndex = currentIndex;
                if (e.key === 'ArrowDown') newIndex = Math.min(currentIndex + 1, itemsArray.length - 1);
                else if (e.key === 'ArrowUp') newIndex = Math.max(currentIndex - 1, 0);
                else if (e.key === 'Home') newIndex = 0;
                else if (e.key === 'End') newIndex = itemsArray.length - 1;

                if (newIndex !== currentIndex) {
                    const targetHeader = itemsArray[newIndex].querySelector('.timeline-header');
                    if (targetHeader) targetHeader.focus();
                }
            });
        }

        function toggleItem(index) {
            if (index === openIndex) {
                // Allow closing the currently open item on second click
                closeItem(index);
                return;
            }

            const items = container.querySelectorAll('.timeline-item');
            const prevOpen = items[openIndex];
            const newOpen = items[index];

            if (!newOpen) return;

            // Close previous
            if (prevOpen) {
                closeItem(openIndex, false);
            }

            // Open new
            openItem(newOpen, index);
            openIndex = index;
        }

        function openItem(item, index) {
            const details = item.querySelector('.timeline-details');
            const toggle = item.querySelector('.timeline-toggle');
            const header = item.querySelector('.timeline-header');
            const previewSkills = item.querySelector('.timeline-skills-preview');
            const toggleText = toggle?.querySelector('.timeline-toggle-text');

            item.classList.add('open');
            if (details) {
                details.hidden = false;
                // Force reflow for animation
                details.offsetHeight;
                details.classList.add('expanded');
            }
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'true');
                toggle.setAttribute('aria-label', 'Details ausblenden');
            }
            if (header) {
                header.setAttribute('aria-expanded', 'true');
            }
            if (toggleText) toggleText.textContent = 'Weniger anzeigen';
            if (previewSkills) previewSkills.setAttribute('aria-hidden', 'true');
        }

        function closeItem(index, updateOpenIndex = true) {
            const items = container.querySelectorAll('.timeline-item');
            const item = items[index];
            if (!item) return;

            const details = item.querySelector('.timeline-details');
            const toggle = item.querySelector('.timeline-toggle');
            const header = item.querySelector('.timeline-header');
            const previewSkills = item.querySelector('.timeline-skills-preview');
            const toggleText = toggle?.querySelector('.timeline-toggle-text');

            item.classList.remove('open');
            if (details) {
                details.classList.remove('expanded');
                // Wait for transition before hiding
                const handleTransitionEnd = () => {
                    if (!item.classList.contains('open')) {
                        details.hidden = true;
                    }
                    details.removeEventListener('transitionend', handleTransitionEnd);
                };
                details.addEventListener('transitionend', handleTransitionEnd);
            }
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Details anzeigen');
            }
            if (header) {
                header.setAttribute('aria-expanded', 'false');
            }
            if (toggleText) toggleText.textContent = 'Mehr anzeigen';
            if (previewSkills) previewSkills.setAttribute('aria-hidden', 'false');

            if (updateOpenIndex && openIndex === index) {
                openIndex = -1;
            }
        }

        // Cleanup
        return () => {
            // No persistent listeners to clean up (all on container or recreated on render)
        };
    }

    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-value[data-count]');

        if (prefersReducedMotion) {
            counters.forEach(el => {
                el.textContent = el.dataset.count;
            });
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    function animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            const current = Math.floor(target * eased);
            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const FORMSUBMIT_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/diorbushati@gmail.com';
        const SUBMIT_TIMEOUT = 10000; // 10 seconds timeout

        // Form elements
        const formContent = form.querySelector('.form-content');
        const submitBtn = form.querySelector('#submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const formStatus = form.querySelector('#formStatus');
        const formSuccess = form.querySelector('.form-success');
        const formErrorState = form.querySelector('.form-error-state');
        const resetFormBtn = form.querySelector('#resetFormBtn');
        const retryBtn = form.querySelector('#retryBtn');
        const successContactValue = form.querySelector('.success-contact-value');
        const honeypotInput = form.querySelector('#website'); // name="_honey"

        // Field elements
        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const messageInput = form.querySelector('#message');
        const inputs = [nameInput, emailInput, messageInput];

        // State
        let isSubmitting = false;
        let submitTimeoutId = null;
        let fallbackTriggered = false;

        // Simple email validation
        function isValidEmail(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
        }

        // Validation helpers
        function validateField(input) {
            const value = input.value.trim();
            const errorEl = input.parentElement.querySelector('.form-error');
            let isValid = true;
            let errorMessage = '';

            if (!value) {
                isValid = false;
                errorMessage = 'Dieses Feld ist erforderlich.';
            } else if (input.id === 'email' && !isValidEmail(value) && !/^[\d\s\-\+\(\)]{7,}$/.test(value)) {
                isValid = false;
                errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse oder Telefonnummer ein.';
            }

            if (!isValid) {
                input.parentElement.classList.add('has-error');
                if (errorEl) {
                    errorEl.textContent = errorMessage;
                    errorEl.classList.add('visible');
                }
            } else {
                input.parentElement.classList.remove('has-error');
                if (errorEl) {
                    errorEl.classList.remove('visible');
                    errorEl.textContent = '';
                }
            }

            return isValid;
        }

        function clearAllErrors() {
            inputs.forEach(input => {
                input.parentElement.classList.remove('has-error');
                const errorEl = input.parentElement.querySelector('.form-error');
                if (errorEl) {
                    errorEl.classList.remove('visible');
                    errorEl.textContent = '';
                }
            });
            hideFormStatus();
        }

        function showFormStatus(message, type) {
            formStatus.textContent = message;
            formStatus.hidden = false;
            formStatus.className = 'form-status ' + type;
            requestAnimationFrame(() => {
                formStatus.classList.add('visible');
            });
        }

        function hideFormStatus() {
            formStatus.classList.remove('visible', 'success', 'error');
            formStatus.addEventListener('transitionend', function handler() {
                formStatus.hidden = true;
                formStatus.textContent = '';
                formStatus.removeEventListener('transitionend', handler);
            }, { once: true });
        }

        // Reset loading state - ALWAYS called via finally
        function resetLoadingState() {
            isSubmitting = false;
            form.classList.remove('submitting');
            btnText.hidden = false;
            btnLoading.hidden = true;
            submitBtn.disabled = false;
        }

        // Success view
        function showSuccess(contactValue) {
            form.classList.remove('submitting');
            formContent.hidden = true;
            formContent.setAttribute('aria-hidden', 'true');

            successContactValue.textContent = contactValue;
            formSuccess.hidden = false;
            formSuccess.setAttribute('aria-hidden', 'false');

            requestAnimationFrame(() => {
                formSuccess.classList.add('visible');
            });

            const successTitle = formSuccess.querySelector('.success-title');
            if (successTitle) {
                successTitle.setAttribute('tabindex', '-1');
                successTitle.focus({ preventScroll: true });
            }
        }

        function hideSuccess() {
            formSuccess.classList.remove('visible');
            formSuccess.addEventListener('transitionend', function handler() {
                formSuccess.hidden = true;
                formSuccess.setAttribute('aria-hidden', 'true');
                formSuccess.removeEventListener('transitionend', handler);
            }, { once: true });
        }

        // Error state
        function showErrorState(message) {
            form.classList.remove('submitting');
            formContent.hidden = true;
            formContent.setAttribute('aria-hidden', 'true');

            const errorText = formErrorState.querySelector('.error-text');
            if (errorText && message) {
                errorText.textContent = message;
            }

            formErrorState.hidden = false;
            formErrorState.setAttribute('aria-hidden', 'false');

            requestAnimationFrame(() => {
                formErrorState.classList.add('visible');
            });

            if (errorText) {
                errorText.setAttribute('tabindex', '-1');
                errorText.focus({ preventScroll: true });
            }
        }

        function hideErrorState() {
            formErrorState.classList.remove('visible');
            formErrorState.addEventListener('transitionend', function handler() {
                formErrorState.hidden = true;
                formErrorState.setAttribute('aria-hidden', 'true');
                formErrorState.removeEventListener('transitionend', handler);
            }, { once: true });
        }

        // Reset form to initial state
        function resetForm() {
            hideSuccess();
            hideErrorState();
            hideFormStatus();
            clearAllErrors();

            form.reset();

            formContent.hidden = false;
            formContent.setAttribute('aria-hidden', 'false');
            form.classList.remove('submitting');

            requestAnimationFrame(() => {
                formContent.style.opacity = '';
                formContent.style.transform = '';
            });

            nameInput.focus({ preventScroll: true });
        }

        // Submit handler - primary: fetch AJAX, fallback: normal form submit
        async function handleSubmit(e) {
            e.preventDefault();

            if (isSubmitting) return;

            // Honeypot check - if filled, silently ignore (spam bot)
            if (honeypotInput && honeypotInput.value.trim() !== '') {
                console.log('Honeypot triggered, silently ignoring submission');
                showSuccess('—');
                return;
            }

            // Validate all fields
            clearAllErrors();
            let allValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) allValid = false;
            });

            if (!allValid) {
                const firstInvalid = form.querySelector('.has-error input, .has-error textarea');
                if (firstInvalid) firstInvalid.focus({ preventScroll: true });
                return;
            }

            isSubmitting = true;
            form.classList.add('submitting');
            btnText.hidden = true;
            btnLoading.hidden = false;
            submitBtn.disabled = true;

            // Get and sanitize form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            data.name = data.name.trim();
            data.email = data.email.trim();
            data.message = data.message.trim();

            // Add _replyto if email is valid (FormSubmit uses this for Reply-To header)
            const extraParams = {};
            if (isValidEmail(data.email)) {
                extraParams._replyto = data.email;
            }
            extraParams._subject = 'Neue Nachricht über das Portfolio';
            extraParams._template = 'table';
            extraParams._captcha = 'false';

            const contactValue = data.email; // Store for success view

            // Set timeout for fetch
            const controller = new AbortController();
            submitTimeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT);

            try {
                const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({ ...data, ...extraParams }),
                    signal: controller.signal,
                });

                clearTimeout(submitTimeoutId);
                submitTimeoutId = null;

                if (!response.ok) {
                    throw new Error(`Server responded with ${response.status}`);
                }

                const result = await response.json();

                // FormSubmit returns success as STRING "true" or "false" (not boolean!)
                const isSuccess = result.success === 'true' || result.success === true;

                if (!isSuccess) {
                    throw new Error(result.message || 'FormSubmit returned error: ' + JSON.stringify(result));
                }

                // Success - show success view
                showSuccess(contactValue);

            } catch (error) {
                // Don't show error if aborted (timeout) - trigger fallback instead
                if (error.name === 'AbortError') {
                    console.warn('Fetch timeout, triggering fallback submit...');
                    triggerFallbackSubmit();
                    return;
                }

                console.error('Form submission failed:', error);

                // Trigger fallback submit for network/CORS/Adblocker errors
                triggerFallbackSubmit();
            } finally {
                if (!fallbackTriggered) {
                    resetLoadingState();
                }
            }
        }

        // Fallback: normal form submit (page navigation to FormSubmit, then redirect to _next)
        function triggerFallbackSubmit() {
            if (fallbackTriggered) return;
            fallbackTriggered = true;

            // Remove the submit event listener to allow normal submission
            form.removeEventListener('submit', handleSubmit);

            // Show loading state
            btnText.hidden = true;
            btnLoading.hidden = false;
            submitBtn.disabled = true;

            // Submit the form normally (will navigate to FormSubmit, then redirect to #kontakt-danke)
            form.submit();
        }

        // Event listeners
        form.addEventListener('submit', handleSubmit);

        // Real-time validation on blur
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.parentElement.classList.contains('has-error')) {
                    validateField(input);
                }
            });
        });

        // Focus styles
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });

        // Reset form button
        resetFormBtn.addEventListener('click', resetForm);

        // Retry button
        retryBtn.addEventListener('click', () => {
            hideErrorState();
            formContent.hidden = false;
            formContent.setAttribute('aria-hidden', 'false');
            requestAnimationFrame(() => {
                formContent.style.opacity = '';
                formContent.style.transform = '';
            });
            nameInput.focus({ preventScroll: true });
        });

        // Cleanup function
        function cleanup() {
            if (submitTimeoutId) clearTimeout(submitTimeoutId);
            form.removeEventListener('submit', handleSubmit);
            inputs.forEach(input => {
                input.removeEventListener('blur', validateField);
                input.removeEventListener('focus', () => {});
            });
            resetFormBtn.removeEventListener('click', resetForm);
            retryBtn.removeEventListener('click', resetForm);
        }

        form._contactFormCleanup = cleanup;
        window.addEventListener('beforeunload', cleanup, { once: true });
    }

    function initParallaxEffects() {
        if (prefersReducedMotion) return;

        const hero = document.querySelector('.hero');
        const codeWindow = document.querySelector('.code-window');
        const heroVisual = document.querySelector('.hero-visual');

        if (!hero || !codeWindow) return;

        let ticking = false;

        function updateParallax() {
            const scrollY = window.scrollY;
            const heroHeight = hero.offsetHeight;
            const progress = Math.min(scrollY / heroHeight, 1);

            if (codeWindow) {
                const rotateY = -5 + progress * 5;
                const rotateX = 5 - progress * 5;
                const translateY = scrollY * 0.3;
                codeWindow.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;
            }

            if (heroVisual) {
                heroVisual.style.transform = `translateY(${scrollY * 0.1}px)`;
            }

            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    }

    function initMouseTracking() {
        if (prefersReducedMotion) return;

        const hero = document.querySelector('.hero');
        const codeWindow = document.querySelector('.code-window');

        if (!hero || !codeWindow) return;

        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const rotateY = -5 + x * 10;
            const rotateX = 5 - y * 10;

            codeWindow.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        hero.addEventListener('mouseleave', () => {
            codeWindow.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)';
        });
    }

    function initHeroPhotoTilt() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        if (prefersReducedMotion || !hasHover) return;

        const profileWrapper = document.querySelector('.profile-wrapper');
        const profileTiltInner = document.querySelector('.profile-tilt-inner');
        const profileImage = document.querySelector('.profile-image');
        const hero = document.querySelector('.hero');

        if (!profileWrapper || !profileTiltInner || !profileImage || !hero) return;

        let rafId = null;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        let currentShineX = 0;
        let currentShineY = 0;
        let targetShineX = 0;
        let targetShineY = 0;
        const maxTilt = 8; // degrees - max 8° per axis
        const isHovering = false;

        function animate() {
            // Smooth interpolation for tilt
            currentX += (targetX - currentX) * 0.15;
            currentY += (targetY - currentY) * 0.15;

            // Smooth interpolation for shine (slower, more subtle)
            currentShineX += (targetShineX - currentShineX) * 0.08;
            currentShineY += (targetShineY - currentShineY) * 0.08;

            // Apply tilt transform via CSS variables on the inner container
            profileTiltInner.style.setProperty('--tilt-x', `${-currentY}deg`);
            profileTiltInner.style.setProperty('--tilt-y', `${currentX}deg`);

            // Update glow position (follows mouse with slight offset for depth)
            profileWrapper.style.setProperty('--glow-x', `${50 + currentX * 1.5}%`);
            profileWrapper.style.setProperty('--glow-y', `${50 - currentY * 1.5}%`);

            // Update shine position (follows mouse with more offset for glint effect)
            profileWrapper.style.setProperty('--shine-x', `${50 + currentShineX * 3}%`);
            profileWrapper.style.setProperty('--shine-y', `${50 - currentShineY * 3}%`);

            // Continue animation if there's still movement
            const tiltMoving = Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01;
            const shineMoving = Math.abs(targetShineX - currentShineX) > 0.01 || Math.abs(targetShineY - currentShineY) > 0.01;

            if (tiltMoving || shineMoving) {
                rafId = requestAnimationFrame(animate);
            } else {
                rafId = null;
            }
        }

        function handleMouseMove(e) {
            const rect = profileWrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate normalized position (-1 to 1)
            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);

            // Clamp and apply max tilt
            targetX = Math.max(-1, Math.min(1, deltaX)) * maxTilt;
            targetY = Math.max(-1, Math.min(1, deltaY)) * maxTilt;

            // Shine follows mouse with same normalization but different range
            targetShineX = Math.max(-1, Math.min(1, deltaX));
            targetShineY = Math.max(-1, Math.min(1, deltaY));

            if (!rafId) {
                rafId = requestAnimationFrame(animate);
            }
        }

        function handleMouseLeave() {
            targetX = 0;
            targetY = 0;
            targetShineX = 0;
            targetShineY = 0;
            // Reset glow and shine to center
            profileWrapper.style.setProperty('--glow-x', '50%');
            profileWrapper.style.setProperty('--glow-y', '50%');
            profileWrapper.style.setProperty('--shine-x', '50%');
            profileWrapper.style.setProperty('--shine-y', '50%');

            if (!rafId) {
                rafId = requestAnimationFrame(animate);
            }
        }

        function handleBlur() {
            // Reset on window/tab blur
            targetX = 0;
            targetY = 0;
            targetShineX = 0;
            targetShineY = 0;
            profileWrapper.style.setProperty('--glow-x', '50%');
            profileWrapper.style.setProperty('--glow-y', '50%');
            profileWrapper.style.setProperty('--shine-x', '50%');
            profileWrapper.style.setProperty('--shine-y', '50%');

            if (!rafId) {
                rafId = requestAnimationFrame(animate);
            }
        }

        function handleScroll() {
            // Reset when hero scrolls out of viewport
            const heroRect = hero.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // If hero is completely out of view (top or bottom)
            if (heroRect.bottom <= 0 || heroRect.top >= viewportHeight) {
                targetX = 0;
                targetY = 0;
                targetShineX = 0;
                targetShineY = 0;
                profileWrapper.style.setProperty('--glow-x', '50%');
                profileWrapper.style.setProperty('--glow-y', '50%');
                profileWrapper.style.setProperty('--shine-x', '50%');
                profileWrapper.style.setProperty('--shine-y', '50%');

                if (!rafId) {
                    rafId = requestAnimationFrame(animate);
                }
            }
        }

        // Events on STATIONARY wrapper (profile-wrapper) - prevents edge flickering
        profileWrapper.addEventListener('mousemove', handleMouseMove);
        profileWrapper.addEventListener('mouseleave', handleMouseLeave);

        // Global events for reset
        window.addEventListener('blur', handleBlur);
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function - called on page unload or when effect is disabled
        function cleanup() {
            if (rafId) cancelAnimationFrame(rafId);
            profileWrapper.removeEventListener('mousemove', handleMouseMove);
            profileWrapper.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('scroll', handleScroll);

            // Reset all CSS variables
            profileTiltInner.style.removeProperty('--tilt-x');
            profileTiltInner.style.removeProperty('--tilt-y');
            profileWrapper.style.removeProperty('--glow-x');
            profileWrapper.style.removeProperty('--glow-y');
            profileWrapper.style.removeProperty('--shine-x');
            profileWrapper.style.removeProperty('--shine-y');
        }

        // Store cleanup for potential future use (e.g., theme toggle re-init)
        profileWrapper._tiltCleanup = cleanup;

        return cleanup;
    }

    /**
     * Copy-to-clipboard buttons for contact cards
     * Handles clipboard API with fallback, per-card state, cleanup, accessibility
     */
    function initCopyButtons() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const copyButtons = document.querySelectorAll('.copy-btn');

        if (!copyButtons.length) return;

        copyButtons.forEach(button => {
            const copyTarget = button.dataset.copyTarget;
            const copyLabel = button.dataset.copyLabel || 'Inhalt';
            let copyTimeout = null;
            let isCopied = false;

            // Copy to clipboard with fallback
            async function copyToClipboard(text) {
                // Try modern Clipboard API first (requires secure context)
                if (navigator.clipboard && window.isSecureContext) {
                    try {
                        await navigator.clipboard.writeText(text);
                        return true;
                    } catch (err) {
                        // Fall through to fallback
                        console.warn('Clipboard API failed, using fallback:', err);
                    }
                }

                // Fallback: hidden textarea + execCommand
                try {
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.setAttribute('readonly', '');
                    textarea.style.position = 'absolute';
                    textarea.style.left = '-9999px';
                    textarea.style.top = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    textarea.setSelectionRange(0, text.length);
                    const success = document.execCommand('copy');
                    document.body.removeChild(textarea);
                    return success;
                } catch (err) {
                    console.error('Copy fallback failed:', err);
                    return false;
                }
            }

            function showCopied() {
                if (isCopied) return;
                isCopied = true;
                button.classList.add('copied');
                button.setAttribute('aria-label', `${copyLabel} kopiert`);

                // Clear any existing timeout
                if (copyTimeout) clearTimeout(copyTimeout);

                // Reset after 2 seconds
                copyTimeout = setTimeout(() => {
                    resetButton();
                }, 2000);
            }

            function showFailed() {
                if (isCopied) return;
                isCopied = true;
                button.classList.add('copied');
                button.setAttribute('aria-label', `${copyLabel} - Kopieren fehlgeschlagen`);
                // Change tooltip text to indicate failure
                const tooltip = button.querySelector('.copy-tooltip');
                if (tooltip) {
                    tooltip.textContent = 'Fehlgeschlagen';
                }

                if (copyTimeout) clearTimeout(copyTimeout);
                copyTimeout = setTimeout(() => {
                    resetButton();
                    if (tooltip) tooltip.textContent = 'Kopiert!';
                }, 2000);
            }

            function resetButton() {
                isCopied = false;
                button.classList.remove('copied');
                button.setAttribute('aria-label', `${copyLabel} kopieren`);
                if (copyTimeout) {
                    clearTimeout(copyTimeout);
                    copyTimeout = null;
                }
            }

            function handleClick(e) {
                e.preventDefault();
                e.stopPropagation();

                // Don't do anything if already in copied state
                if (isCopied) return;

                copyToClipboard(copyTarget).then(success => {
                    if (success) {
                        showCopied();
                    } else {
                        showFailed();
                    }
                });
            }

            function handleKeyDown(e) {
                // Trigger on Enter or Space
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick(e);
                }
            }

            // Cleanup function for this button
            function cleanup() {
                if (copyTimeout) clearTimeout(copyTimeout);
                button.removeEventListener('click', handleClick);
                button.removeEventListener('keydown', handleKeyDown);
            }

            // Attach listeners
            button.addEventListener('click', handleClick);
            button.addEventListener('keydown', handleKeyDown);

            // Store cleanup for potential unmount
            button._copyCleanup = cleanup;
        });

        // Global cleanup on page unload
        window.addEventListener('beforeunload', () => {
            copyButtons.forEach(button => {
                if (button._copyCleanup) button._copyCleanup();
            });
        }, { once: true });
    }

    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach((btn, index) => {
            btn.addEventListener('keydown', (e) => {
                let newIndex = index;
                if (e.key === 'ArrowRight') newIndex = (index + 1) % filterBtns.length;
                else if (e.key === 'ArrowLeft') newIndex = (index - 1 + filterBtns.length) % filterBtns.length;
                else return;

                e.preventDefault();
                filterBtns[newIndex].focus();
                filterBtns[newIndex].click();
            });
        });
    }

    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScrollY = 0;
        let ticking = false;

        function updateHeader() {
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (scrollY > lastScrollY && scrollY > 200) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }

    function initPageTransitions() {
        if (prefersReducedMotion) return;

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    target.style.scrollMarginTop = '100px';
                }
            });
        });
    }

    function initBackToTop() {
        const backToTopBtn = document.querySelector('.footer-back-to-top');
        if (!backToTopBtn) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let ticking = false;

        function updateBackToTop() {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const showThreshold = viewportHeight * 0.5; // Show after scrolling half viewport

            if (scrollY > showThreshold) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateBackToTop);
                ticking = true;
            }
        }, { passive: true });

        // Also handle click for smooth scroll to top (backup to native smooth scroll)
        backToTopBtn.addEventListener('click', (e) => {
            if (prefersReducedMotion) return;
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Initial check
        updateBackToTop();
    }

    /**
     * Typing-Effekt für den Hero-Rollen-Tag
     * Wechselt durch verschiedene Rollen mit Typewriter-Animation
     * Respektiert prefers-reduced-motion (zeigt nur erste Rolle statisch)
     */
    function initHeroTyping() {
        const roleElement = document.querySelector('.hero-role-text');
        const cursorElement = document.querySelector('.typing-cursor');
        const srOnlyElement = document.querySelector('.hero .sr-only');

        if (!roleElement || !cursorElement) return;

        const roles = [
            'Software Developer',
            'Mobile App Developer',
            'IoT Specialist',
            'Embedded Systems Developer',
            'API & Integration Developer',
            'Cloud Enthusiast',
            'QMS Process Manager',
            'Wirtschaftsinformatik-Student',
            'Clean Code Fan'
        ];

        // Bei prefers-reduced-motion: nur erste Rolle statisch anzeigen
        if (prefersReducedMotion) {
            roleElement.textContent = roles[0];
            cursorElement.style.display = 'none';
            if (srOnlyElement) {
                srOnlyElement.textContent = roles[0];
            }
            return;
        }

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 80;      // ms pro Zeichen beim Tippen
        const deleteSpeed = 40;    // ms pro Zeichen beim Löschen
        const pauseAfterType = 2000; // Pause nach vollständigem Tippen
        const pauseAfterDelete = 500; // Pause vor nächstem Tippen

        // Screenreader-Text aktualisieren
        function updateSrText(text) {
            if (srOnlyElement) {
                srOnlyElement.textContent = text;
            }
        }

        // Initiale Screenreader-Text
        updateSrText(roles[0]);

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                // Zeichen löschen
                roleElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Zeichen tippen
                roleElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            // Screenreader nur bei vollständigen Wörtern updaten (nicht bei jedem Buchstaben)
            if (!isDeleting && charIndex === currentRole.length) {
                updateSrText(currentRole);
            }

            // Prüfen ob Wort fertig getippt
            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, pauseAfterType);
                return;
            }

            // Prüfen ob Wort fertig gelöscht
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, pauseAfterDelete);
                return;
            }

            // Nächstes Zeichen
            const speed = isDeleting ? deleteSpeed : typeSpeed;
            setTimeout(type, speed);
        }

        // Cursor blinken lassen
        cursorElement.style.animation = 'cursor-blink 1s ease-in-out infinite';

        // Starten
        type();
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        const heroElements = document.querySelectorAll('.hero-text > *, .hero-visual');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 100}ms`;
            el.classList.add('animate-in');
        });
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.Portfolio = {
        theme: state.theme,
        toggleTheme: () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'),
        projects: projectsData,
        skills: skillsData,
        timeline: timelineData
    };
})();