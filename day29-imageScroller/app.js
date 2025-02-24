const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});