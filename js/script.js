document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('header nav ul');

    if (menuIcon && navUl) {
        menuIcon.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the # link from scrolling to top
            navUl.classList.toggle('show');
        });
    }
});
