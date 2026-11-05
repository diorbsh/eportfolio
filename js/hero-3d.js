/**
 * Hero 3D Scene — Three.js Setup (M1 Grundgerüst)
 * Transparente Canvas hinter Hero-Content, lazy geladen, pausierbar
 */
(() => {
    'use strict';

    // Prüfe prefers-reduced-motion und WebGL-Support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasWebGL = (() => {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    })();

    if (prefersReducedMotion || !hasWebGL) {
        // Fallback: Canvas nicht erstellen, Hero funktioniert wie bisher
        const canvas = document.getElementById('hero-3d-canvas');
        if (canvas) canvas.style.display = 'none';
        return;
    }

    // Three.js per Dynamic Import laden (ESM via CDN)
    let THREE;
    let scene, camera, renderer;
    let animationId = null;
    let isVisible = true;
    let isTabActive = true;
    let resizeTimeout = null;

    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    async function initThree() {
        try {
            THREE = await import('https://esm.sh/three@0.165.0');
        } catch (err) {
            console.warn('[Hero3D] Three.js konnte nicht geladen werden:', err);
            canvas.style.display = 'none';
            return;
        }

        setupScene();
        setupResizeHandler();
        setupVisibilityHandlers();
        startRenderLoop();
    }

    function setupScene() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // Renderer: transparent, antialias, pixelRatio begrenzt
        renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0); // transparent
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        // Scene
        scene = new THREE.Scene();

        // Camera: Perspective, positioniert für Hero-Höhe
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 15);

        // Platzhalter: Licht (später für Mikrocontroller/Netzwerk)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);
    }

    function startRenderLoop() {
        let lastTime = 0;

        function animate(time) {
            if (!isVisible || !isTabActive) {
                animationId = requestAnimationFrame(animate);
                return;
            }

            const delta = (time - lastTime) * 0.001; // Sekunden
            lastTime = time;

            // Hier später: Mikrocontroller-Animation, Netzwerk-Animation
            // Für M1: nur leere Szene rendern

            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        }

        animationId = requestAnimationFrame(animate);
    }

    function stopRenderLoop() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    function setupResizeHandler() {
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!renderer || !camera || !canvas) return;

                const width = canvas.clientWidth;
                const height = canvas.clientHeight;

                if (width === 0 || height === 0) return;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }, 100);
        }

        window.addEventListener('resize', handleResize, { passive: true });
    }

    function setupVisibilityHandlers() {
        // IntersectionObserver: Hero im Viewport?
        const heroSection = document.getElementById('home');
        if (heroSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isVisible = entry.isIntersecting;
                });
            }, { rootMargin: '100px' }); // Etwas früher starten/stoppen
            observer.observe(heroSection);
        }

        // Tab-Visibility
        document.addEventListener('visibilitychange', () => {
            isTabActive = !document.hidden;
        });
    }

    // Cleanup-Funktion (für Unmount/Seitenwechsel)
    function dispose() {
        stopRenderLoop();
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', visibilityHandler);

        if (renderer) {
            renderer.dispose();
            renderer.forceContextLoss();
            const gl = renderer.getContext();
            if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext();
        }

        if (scene) {
            scene.traverse(obj => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) {
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach(m => m.dispose());
                    } else {
                        obj.material.dispose();
                    }
                }
            });
        }
    }

    // Export für manuelles Cleanup falls nötig
    window.Hero3D = { dispose };

    // Initialisierung starten
    initThree();
})();