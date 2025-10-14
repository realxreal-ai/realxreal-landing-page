document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');

    // Section theme observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme');
                body.setAttribute('data-section-theme', theme);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Fade in animations (for original sections)
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });

    // Mobile menu (for new nav)
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.textContent = '☰';
        });
    });
    
    // Theme toggle button (for new nav)
    if(themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Theme toggle functionality can be built here!');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // CTA button
    document.getElementById('ctaButton').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://form.typeform.com/to/nZ5XOQqm', '_blank');
    });

    // Copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Add subtle typing effect to hero title
function typeWriter() {
    const text = 'real×real';
    const heroTitle = document.querySelector('.hero-title');
    let i = 0;
    
    heroTitle.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }
    
    setTimeout(type, 1000);
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 500);
});

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return; // Don't run if not on the FAQ page

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', initFaqAccordion);

        