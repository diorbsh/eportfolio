(() => {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

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

    const timelineData = [
        {
            date: 'Jul 2025 – heute',
            title: 'QMS Process Manager',
            company: 'Altstätten, Sankt Gallen, Schweiz',
            description: 'Prozessmanagement, Prozessoptimierung, Qualitätsmanagement (ISO 9001), BPMN, Projektmanagement',
            icon: 'briefcase'
        },
        {
            date: 'Feb 2025 – Jul 2025',
            title: 'Video Editor',
            company: 'Sankt Gallen, Schweiz',
            description: 'Videoschnitt, Videoproduktion, CapCut Pro, Content-Produktion',
            icon: 'briefcase'
        },
        {
            date: 'Jan 2024 – Mai 2024',
            title: 'Rekrutenschule',
            company: 'Frauenfeld, Thurgau, Schweiz',
            description: 'Teamführung, Belastbarkeit, Kommunikationstechnik, Krisenmanagement',
            icon: 'briefcase'
        },
        {
            date: 'Sep 2023 – Nov 2023',
            title: 'Softwareentwickler',
            company: 'Altstätten, Sankt Gallen, Schweiz',
            description: 'Mobile App Development, C# / Xamarin, Web Development, FileZilla, WordPress, PHP',
            icon: 'briefcase'
        },
        {
            date: 'Aug 2022 – Jul 2023',
            title: 'Software Entwickler – Praktikum',
            company: 'Diepoldsau, Sankt Gallen, Schweiz',
            description: 'App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN',
            icon: 'briefcase'
        }
    ];

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

        state.projects = projectsData;
        renderProjects();
        renderSkills();
        // renderTimeline() - now handled by React component

        document.documentElement.classList.add('js-loaded');
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

        toggle.addEventListener('click', () => {
            const newTheme = state.theme === 'dark' ? 'light' : 'dark';
            toggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                toggle.style.transform = 'scale(1)';
            }, 150);
            applyTheme(newTheme);
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

    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        grid.innerHTML = projectsData.map((project, index) => `
            <article class="project-card" data-category="${project.category}" style="animation-delay: ${index * 100}ms">
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

    function renderTimeline() {
        const container = document.getElementById('timeline');
        if (!container) return;

        container.innerHTML = timelineData.map((item, index) => `
            <article class="timeline-item" style="animation-delay: ${index * 150}ms" data-animate="fade-up">
                <div class="timeline-marker" style="background: ${item.color};">
                    <i class="fas fa-${item.icon}" aria-hidden="true"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">${item.date}</div>
                    <h3 class="timeline-title">${item.title}</h3>
                    <h4 class="timeline-company">${item.company}</h4>
                    <p class="timeline-description">${item.description}</p>
                </div>
            </article>
        `).join('');
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

        const RECEIVER_EMAIL = 'diorbushati@gmail.com';
        const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECEIVER_EMAIL}`;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            const btnLoading = submitBtn.querySelector('.btn-loading');

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            data._subject = `Neue Portfolio-Anfrage von ${data.name}`;

            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').hidden = true;
            btnLoading.hidden = false;

            try {
                const response = await fetch(FORMSUBMIT_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').hidden = false;
                submitBtn.querySelector('.btn-text').textContent = 'Gesendet! ✓';
                btnLoading.hidden = true;
                submitBtn.style.background = 'var(--color-success)';

                form.reset();

                setTimeout(() => {
                    submitBtn.querySelector('.btn-text').textContent = originalText;
                    submitBtn.style.background = '';
                }, 3000);
            } catch (error) {
                console.error('FAILED...', error);
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').hidden = false;
                btnLoading.hidden = true;
                submitBtn.querySelector('.btn-text').textContent = 'Fehler – erneut versuchen';
                submitBtn.style.background = 'var(--color-error)';

                setTimeout(() => {
                    submitBtn.querySelector('.btn-text').textContent = originalText;
                    submitBtn.style.background = '';
                }, 3000);
            }
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                if (input.value) input.parentElement.classList.add('filled');
                else input.parentElement.classList.remove('filled');
            });
        });
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