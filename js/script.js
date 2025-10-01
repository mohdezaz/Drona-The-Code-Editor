document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    if (menuIcon && navUl) {
        menuIcon.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
    }

    // Popup functionality
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.querySelector('.close-btn');

    // Show popup after 30 seconds
    setTimeout(function() {
        if (popupOverlay) {
            popupOverlay.style.display = 'flex';
        }
    }, 30000);

    // Close popup when the close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    // Close popup when clicking outside the popup content
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    // Handle form submission
    const popupForm = document.querySelector('#popup form');
    if (popupForm) {
        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted!');
            // Here you would typically handle the form data, e.g., send it to a server.
            // For this example, we'll just close the popup.
            if (popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }
});
