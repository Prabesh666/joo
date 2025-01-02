// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Handle mobile menu links
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});