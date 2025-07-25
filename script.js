// Theme Management
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', newTheme);

  // Toggle icon visibility
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  if (newTheme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }

  // Store preference in localStorage
  localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage or default to dark
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  if (savedTheme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

// Scroll Animation Handler
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 100) {
    navbar.style.background = 'var(--glass-bg)';
    navbar.style.backdropFilter = 'blur(20px)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initSmoothScrolling();
  handleScrollAnimations(); // Initial check for elements in view
});

// Event listeners for scroll-based functionality
window.addEventListener('scroll', function() {
  handleScrollAnimations();
  handleNavbarScroll();
});
