document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.nav-list');

    burgerButton.addEventListener('click', function() {
        navList.classList.toggle('active');
        burgerButton.classList.toggle('active');
    });

    var ar_images = [
        "diapo-images/chess-diapo.png",
        "diapo-images/python-diapo.png",
    ];

    var currentImageIndex = 0;
    var diaporamaImage = document.querySelector('.diaporama__image');
    var prevButton = document.querySelector('.diaporama__arrow-left');
    var nextButton = document.querySelector('.diaporama__arrow-right');

    function changeImage(direction) {
        if (direction === 'prev') {
            currentImageIndex = (currentImageIndex - 1 + ar_images.length) % ar_images.length;
        } else if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % ar_images.length;
        }

        diaporamaImage.src = ar_images[currentImageIndex];
    }

    // Event listeners for the buttons
    prevButton.addEventListener('click', function() {
        changeImage('prev');
    });

    nextButton.addEventListener('click', function() {
        changeImage('next');
    });
});