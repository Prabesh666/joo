// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    renderAmenities();
});

// Render amenities
function renderAmenities() {
    const amenitiesContainer = document.getElementById('amenitiesContainer');
    if (!amenitiesContainer) return; // Guard clause
    
    amenitiesData.forEach(amenity => {
        const amenityElement = document.createElement('div');
        amenityElement.className = 'amenity-card';
        
        amenityElement.innerHTML = `
            <span class="amenity-icon">${amenity.icon}</span>
            <div class="amenity-info">
                <h3>${amenity.title}</h3>
                <p>${amenity.description}</p>
            </div>
        `;
        
        amenitiesContainer.appendChild(amenityElement);
    });
}