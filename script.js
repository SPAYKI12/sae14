
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.nav-list');

    burgerButton.addEventListener('click', function() {
        navList.classList.toggle('active');
        burgerButton.classList.toggle('active');
    });
});
