document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleButton = document.getElementById('themeToggle');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    // --- 1. Scrolling Section Theme Changer ---
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme');
                body.setAttribute('data-section-theme', theme);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.content-section').forEach(section => {
        sectionObserver.observe(section);
    });

    // --- 2. Manual Light/Dark Theme Toggle ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('manual-dark');
            body.classList.remove('manual-light');
            themeToggleButton.textContent = '◑';
        } else {
            body.classList.add('manual-light');
            body.classList.remove('manual-dark');
            themeToggleButton.textContent = '◐';
        }
        localStorage.setItem('theme', theme);
    };

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // --- 3. Mobile Menu Toggle ---
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.textContent = '☰';
        });
    });

    // --- 4. Scroll-Reveal Animations for Content ---
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        animationObserver.observe(element);
    });

    // --- 5. Smooth Scrolling for Nav Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 6. CTA Button Click Handler ---
    document.getElementById('ctaButton').addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual CRM signup link
        window.open('https://your-crm-signup-link.com', '_blank');
    });

    // --- 7. Logo Click - Scroll to Top ---
    document.querySelector('.nav-logo').addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#hero') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});