// Booking functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle all booking buttons
    const bookingButtons = document.querySelectorAll('.book-room-btn, .book-btn, .cta-btn');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', handleBooking);
    });
});

function handleBooking(event) {
    event.preventDefault();
    
    // Get room type from closest room card if available
    const roomCard = event.target.closest('.room-card');
    const roomType = roomCard ? roomCard.querySelector('.room-title').textContent : 'Standard Room';
    
    // Show booking confirmation
    alert(`Thank you for your interest in booking ${roomType}! In a real application, this would open a booking form.`);
}