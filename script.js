document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.nav-list');
    const diaporamaImage = document.querySelector('.diaporama__image');
    const diaporamaCaption = document.querySelector('.diaporama__image-description');
    const prevButton = document.querySelector('.diaporama__arrow-left');
    const nextButton = document.querySelector('.diaporama__arrow-right');

    burgerButton.addEventListener('click', function () {
        navList.classList.toggle('active');
        burgerButton.classList.toggle('active');
    });

    const ar_images = [
        "diapo-images/chess-diapo.png",
        "diapo-images/python-diapo.png",
    ];

    const ar_captions = [
        "Les échecs sont l'une de mes passions",
        "Python est l'un de mes langages de programmation préférés",
    ];

    var currentImageIndex = 0;

    function changeImage(direction) {
        currentImageIndex = (currentImageIndex + ar_images.length + (direction === 'prev' ? -1 : 1)) % ar_images.length;

        diaporamaImage.src = ar_images[currentImageIndex];
        diaporamaCaption.textContent = ar_captions[currentImageIndex];
    }

    // Event listeners for the buttons
    prevButton.addEventListener('click', function () {
        changeImage('prev');
    });

    nextButton.addEventListener('click', function () {
        changeImage('next');
    });
});
