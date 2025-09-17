document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const body = document.body;
    const header = document.querySelector('header');

    // Set initial colors based on the first section
    if (sections.length > 0) {
        const firstSection = sections[0];
        const initialBg = firstSection.getAttribute('data-bg');
        const initialText = firstSection.getAttribute('data-text');
        
        body.style.backgroundColor = initialBg;
        body.style.color = initialText;
        header.style.color = initialText; // Ensure header text color matches
    }

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgColor = entry.target.getAttribute('data-bg');
                const textColor = entry.target.getAttribute('data-text');

                body.style.backgroundColor = bgColor;
                body.style.color = textColor;
                header.style.color = textColor; // Match header color to body text color
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle placeholder form submission
    const form = document.getElementById('waitlist-form');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('email-input');
            if (emailInput && emailInput.value) {
                form.style.display = 'none';
                successMessage.style.display = 'block';
            }
        });
    }
});