// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
});

function handleSmoothScroll(event) {
    event.preventDefault();
    
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}