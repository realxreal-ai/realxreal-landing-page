// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '◐';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '◑';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '◑';
    }
});
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// CTA Button functionality
function handleCtaClick(e) {
    e.preventDefault();
    // Replace with your actual CRM signup link
    window.open('https://form.typeform.com/to/nZ5XOQqm', '_blank');
}

document.getElementById('heroCtaBtn').addEventListener('click', handleCtaClick);
document.getElementById('finalCtaBtn').addEventListener('click', handleCtaClick);

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Parallax effect for floating elements
document.addEventListener('mousemove', function(e) {
    const floatingElements = document.querySelectorAll('.floating-element');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const xMove = (x - 0.5) * speed * 20;
        const yMove = (y - 0.5) * speed * 20;
        
        element.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Dynamic navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        if (document.body.getAttribute('data-theme') === 'dark') {
            nav.style.background = 'rgba(15, 4, 53, 0.95)';
        }
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        if (document.body.getAttribute('data-theme') === 'dark') {
            nav.style.background = 'rgba(15, 4, 53, 0.8)';
        }
    }
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

// Add glitch effect on logo hover
document.querySelector('.nav-logo').addEventListener('mouseenter', function() {
    this.style.animation = 'glitch 0.3s ease-in-out';
});

document.querySelector('.nav-logo').addEventListener('animationend', function() {
    this.style.animation = '';
});

// Add CSS for glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(glitchStyle);