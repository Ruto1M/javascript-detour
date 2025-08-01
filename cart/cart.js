// Product data 
const products = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.59 },
  { id: 3, name: "Cherry", price: 2.99 },
  { id: 4, name: "Dates", price: 3.49 },
];
const productsList = document.getElementById("products-list");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotalDiv = document.getElementById("cart-total");

// Cart will be an object with productId keys and quantity values
let cart = {};

// Render product list with "Add to Cart" buttons
function renderProducts() {
  productsList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productsList.appendChild(div);
  });
}

// Render cart items with quantity inputs and remove buttons
function renderCart() {
  cartItemsDiv.innerHTML = "";
  const cartEntries = Object.entries(cart);
  if (cartEntries.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalDiv.textContent = "";
    return;
  }
  let total = 0;
  cartEntries.forEach(([id, quantity]) => {
    const product = products.find(p => p.id == id);
    const subtotal = product.price * quantity;
    total += subtotal;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)} x </span>
      <input type="number" min="1" value="${quantity}" data-id="${id}" />
      <span> = $${subtotal.toFixed(2)}</span>
      <button class="remove-btn" data-id="${id}">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
  });
  cartTotalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

// Add product to cart or increase quantity
function addToCart(productId) {
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
  renderCart();
}

// Update quantity from input
function updateQuantity(productId, quantity) {
  if (quantity < 1) {
    // Remove if quantity less than 1
    delete cart[productId];
  } else {
    cart[productId] = quantity;
  }
  renderCart();
}

// Remove product from cart
function removeFromCart(productId) {
  delete cart[productId];
  renderCart();
}

// Event listeners
productsList.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.getAttribute("data-id");
    addToCart(id);
  }
});
cartItemsDiv.addEventListener("input", e => {
  if (e.target.tagName === "INPUT") {
    const id = e.target.getAttribute("data-id");
    const quantity = parseInt(e.target.value);
    if (!isNaN(quantity)) {
      updateQuantity(id, quantity);
    }
  }
});
cartItemsDiv.addEventListener("click", e => {
  if (e.target.classList.contains("remove-btn")) {
    const id = e.target.getAttribute("data-id");
    removeFromCart(id);
  }
});

// Initialize
renderProducts();
renderCart();