document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggleButton = document.getElementById('themeToggle');
    const typingTextElement = document.getElementById('typing-text');
    const copyrightYear = document.getElementById('copyright-year');

    // --- 1. Mobile Menu Toggle ---
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.textContent = '☰';
            }
        });
    });

    // --- 2. Theme Management ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleButton.textContent = '◑';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggleButton.textContent = '◐';
        }
    };

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.hasAttribute('data-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);


    // --- 3. Scroll-Reveal Animations ---
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        animationObserver.observe(element);
    });

    // --- 4. Typing Animation ---
    const textToType = "Real Recognizes Real";
    let charIndex = 0;
    
    function type() {
        if (charIndex < textToType.length) {
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }
    // Start typing after a short delay
    setTimeout(type, 1500);

    // --- 5. Dynamic Copyright Year ---
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});