// Main JavaScript - Coordinates all functionality

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initMobileMenu();
    initThemeObserver();
    initAnimations();
    initRotatingText();
    initSmoothScroll();
    updateCopyrightYear();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!mobileToggle || !navMenu) return;
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.textContent = '☰';
        });
    });
    
    // Mobile dropdown toggle
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });
}

// Theme Observer - Changes body theme based on section
function initThemeObserver() {
    const sections = document.querySelectorAll('.section[data-theme]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme');
                document.body.setAttribute('data-section-theme', theme);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => observer.observe(section));
}

// Fade-in Animations
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
}

// Rotating Text Animation (like imper.ai)
function initRotatingText() {
    const rotatingText = document.getElementById('rotatingText');
    if (!rotatingText) return;
    
    const phrases = [
        "That video call looks like your CFO.",
        "That Slack message sounds urgent.",
        "That wire transfer request seems legitimate.",
        "That password reset looks official.",
        "That voice note sounds like your boss.",
        "That vendor email appears authentic."
    ];
    
    let currentIndex = 0;
    
    function typeText(text, callback) {
        let charIndex = 0;
        rotatingText.textContent = '';
        
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                rotatingText.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 2000); // Pause before erasing
            }
        }, 50); // Typing speed
    }
    
    function eraseText(callback) {
        let text = rotatingText.textContent;
        
        const erasingInterval = setInterval(() => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                rotatingText.textContent = text;
            } else {
                clearInterval(erasingInterval);
                setTimeout(callback, 500); // Pause before next phrase
            }
        }, 30); // Erasing speed
    }
    
    function rotatePhrase() {
        typeText(phrases[currentIndex], () => {
            eraseText(() => {
                currentIndex = (currentIndex + 1) % phrases.length;
                rotatePhrase();
            });
        });
    }
    
    // Start the rotation
    rotatePhrase();
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for same-page anchors
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Update Copyright Year
function updateCopyrightYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Add shadow to nav on scroll
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50 && nav) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else if (nav) {
        nav.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});