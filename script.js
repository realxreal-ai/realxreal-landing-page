document.addEventListener('DOMContentLoaded', function() {
    // This script provides feedback for the placeholder form.
    // If you replace the form with your CRM's embedded code, 
    // you might not need this script, or you may need to adapt it.

    const form = document.getElementById('waitlist-form');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission which reloads the page
            event.preventDefault();

            // Here you would typically send the data to your server or CRM
            // For this placeholder, we'll just show the success message.
            const emailInput = document.getElementById('email-input');
            
            if (emailInput && emailInput.value) {
                // Hide the form and show the success message
                form.style.display = 'none';
                document.querySelector('.form-title').style.display = 'none';
                successMessage.style.display = 'block';

                // Optional: You can clear the input field
                emailInput.value = '';
            }
        });
    }
});