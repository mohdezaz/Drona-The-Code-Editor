document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    if (menuIcon && navUl) {
        menuIcon.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
    }
});
