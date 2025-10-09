document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleButton = document.querySelector('.theme-toggle');

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


    // --- 3. Scroll-Reveal Animations for Content ---
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

    // --- 4. Smooth Scrolling for Nav Links ---
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
});