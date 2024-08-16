window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; // Original semi-transparent background
    }
});