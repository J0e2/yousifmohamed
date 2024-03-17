document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect for hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 1s';
        hero.style.opacity = '1';
    }, 500);

    // Smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - 50, // Adjusted to account for header height
            behavior: 'smooth'
        });
    }
});
