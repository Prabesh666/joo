// Restaurant data
const restaurants = [
    {
        name: "The Grand Bistro",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        description: "Experience classic French cuisine with a modern twist in our elegant bistro setting. Our expert chefs create memorable dishes using the finest seasonal ingredients.",
        cuisines: ["French", "Contemporary"],
        hours: "Breakfast: 7:00 AM - 10:30 AM\nDinner: 6:00 PM - 10:30 PM"
    },
    {
        name: "Azure Lounge",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        description: "A sophisticated rooftop venue offering panoramic city views, craft cocktails, and a curated menu of international small plates perfect for sharing.",
        cuisines: ["International", "Tapas"],
        hours: "Daily: 4:00 PM - 12:00 AM"
    },
    {
        name: "Sakura",
        image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        description: "Immerse yourself in authentic Japanese cuisine featuring the freshest sushi, sashimi, and traditional hot dishes prepared by our master chefs.",
        cuisines: ["Japanese", "Sushi"],
        hours: "Lunch: 12:00 PM - 2:30 PM\nDinner: 6:00 PM - 10:00 PM"
    }
];

// Render restaurants
document.addEventListener('DOMContentLoaded', () => {
    const restaurantsContainer = document.getElementById('restaurantsContainer');
    if (!restaurantsContainer) return;

    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement('div');
        restaurantElement.className = 'restaurant-card';
        
        restaurantElement.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.description}</p>
                <div class="cuisine-tags">
                    ${restaurant.cuisines.map(cuisine => `
                        <span class="cuisine-tag">${cuisine}</span>
                    `).join('')}
                </div>
                <div class="opening-hours">
                    <h3>Opening Hours</h3>
                    <p>${restaurant.hours.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `;
        
        restaurantsContainer.appendChild(restaurantElement);
    });
});