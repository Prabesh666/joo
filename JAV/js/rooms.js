// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    renderRooms();
});

// Render rooms
function renderRooms() {
    const roomsContainer = document.getElementById('roomsContainer');
    if (!roomsContainer) return; // Guard clause
    
    roomsData.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.className = 'room-card';
        
        roomElement.innerHTML = `
            <img src="${room.image}" alt="${room.title}" class="room-image">
            <div class="room-info">
                <div class="room-header">
                    <h3 class="room-title">${room.title}</h3>
                    <span class="room-price">${room.price}/night</span>
                </div>
                <p class="room-description">${room.description}</p>
                <button class="book-room-btn">Book Now</button>
            </div>
        `;
        
        roomsContainer.appendChild(roomElement);
    });
}