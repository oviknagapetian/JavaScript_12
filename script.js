
import { featuredItemsData } from './data.js';

// Function to render featured items
function renderFeaturedItems() {
    const featuredItemsContainer = document.getElementById('featuredItemsContainer');

    featuredItemsData.forEach(item => {
        const featuredItemHTML = `
            <div class="featured-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
        featuredItemsContainer.insertAdjacentHTML('beforeend', featuredItemHTML);
    });
}

// Call the function to render featured items
renderFeaturedItems();

// Function to handle adding items to cart
function addToCart(event) {
    const itemId = event.target.dataset.id;
    const selectedItem = featuredItemsData.find(item => item.id.toString() === itemId);
    if (selectedItem) {
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        const cartItemHTML = `
            <div class="cart-item">
                <img src="${selectedItem.image}" alt="${selectedItem.name}">
                <h3>${selectedItem.name}</h3>
                <p>${selectedItem.price}</p>
                <button class="remove-from-cart" data-id="${selectedItem.id}">Remove</button>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    }
}

// Add event listener for adding items to cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        addToCart(event);
    }
});

// Function to handle removing items from cart
function removeFromCart(event) {
    const itemId = event.target.dataset.id;
    const cartItem = document.querySelector(`.cart-item[data-id="${itemId}"]`);
    if (cartItem) {
        cartItem.remove();
    }
}

// Add event listener for removing items from cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-from-cart')) {
        removeFromCart(event);
    }
});
