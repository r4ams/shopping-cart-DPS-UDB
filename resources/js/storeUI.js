class StoreUI {
  constructor(inventory, cart) {
    this.inventory = inventory;
    this.cart = cart;
    this.productContainer = document.getElementById("product-container");
    this.productBestContainer = document.getElementById("best-product-container");
    this.cartContainer = document.getElementById("cart-container");
    this.init();
  }

  init() {
    this.displayfeaturedProducts();
    this.displayBestProducts();
    this.displayCart();
    this.updateCartTotals();
  }

  displayfeaturedProducts() {
    this.productContainer.innerHTML = "";
    let featuredProducts = this.inventory.products.filter(product => product.category === 'featured');  
    featuredProducts.forEach(product => {
      let productCard = document.createElement("div");
      productCard.classList.add("product-card", "bg-white", "p-5", "rounded-lg", "shadow-lg");
      productCard.innerHTML = `
        <figure class="mb-4 h-32 flex">
          <img src="${product.image}" alt="${product.name}" class="mx-auto self-center">
        </figure>
        <h3 class="text-xl mb-2">${product.name}</h3>
        <p id="product-description" class="mb-2">${product.description}</p>
        <div class="text-center">
          <div class="flex flex-row pb-6 pt-4">
            <p class="basis-1/2">Precio: $${product.price}</p>
            <p class="basis-1/2">Stock: ${product.stock}</p>
          </div>
          <div class="flex items-center justify-center space-x-3">
            <label for="qty-${product.id}" class="text-gray-700 font-medium">Cantidad:</label>
            <input type="number" id="qty-${product.id}" min="1" max="${product.stock}" value="1"
                class="w-16 p-2 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <button class="px-3 py-2 bg-[#0038AE] text-white rounded-md hover:bg-blue-600 transition" onclick="storeUI.addToCart(${product.id})">
                Agregar
            </button>
          </div>
        </div> 
      `;
      this.productContainer.appendChild(productCard);
    });
  }

  displayBestProducts() {
    this.productBestContainer.innerHTML = "";
    let bestProducts = this.inventory.products.filter(product => product.category === 'best');
    bestProducts.forEach(product => {
      let productCard = document.createElement("div");
      productCard.classList.add("product-card", "bg-white", "p-5", "rounded-lg", "shadow-lg");
      productCard.innerHTML = `
        <figure class="mb-4 h-32 flex">
          <img src="${product.image}" alt="${product.name}" class="mx-auto self-center">
        </figure>
        <h3 class="text-xl mb-2">${product.name}</h3>
        <p id="product-description" class="mb-2">${product.description}</p>
        <div class="text-center">
          <div class="flex flex-row pb-6 pt-4">
            <p class="basis-1/2">Precio: $${product.price}</p>
            <p class="basis-1/2">Stock: ${product.stock}</p>
          </div>
          <div class="flex items-center justify-center space-x-3">
            <label for="qty-${product.id}" class="text-gray-700 font-medium">Cantidad:</label>
            <input type="number" id="qty-${product.id}" min="1" max="${product.stock}" value="1"
                class="w-16 p-2 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <button class="px-3 py-2 bg-[#0038AE] text-white rounded-md hover:bg-blue-600 transition" onclick="storeUI.addToCart(${product.id})">
                Agregar
            </button>
          </div>
        </div> 
      `;
      this.productBestContainer.appendChild(productCard);
    });
  }

  displayCart() {
    this.cartContainer.innerHTML = "";
    this.cart.items.forEach(item => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item", "flex", "flex-row", "px-6", "py-8", "border-b", "border-[#B0B6BA]", "mx-2");
      cartItem.innerHTML = `
        <div class="basis-1/3">
          <img src="${item.product.image}" alt="${item.product.name}" class="mx-auto self-center">
        </div>
        <div class="basis-2/3 pl-6">
          <h3 class="text-xl mb-2 text-black">${item.product.name}</h3>
          <p id="product-description" class="mb-2 text-black">${item.product.description}</p>
          <div class="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm text-black text-sm">
            <p class="font-medium text-gray-700">Items: <span class="text-blue-500">${item.quantity}</span></p>
            <p class="font-medium text-gray-700">Total: <span class="text-green-600">$${(item.quantity * item.product.price).toFixed(2)}</span></p>
            <button onclick="storeUI.removeFromCart(${item.product.id})"
              class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs">
              Eliminar
            </button>
          </div>
        </div> 
      `;
      this.cartContainer.appendChild(cartItem);
    });
  }

  addToCart(productId) {
    let quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    if (this.cart.addToCart(productId, quantity)) {
      this.displayfeaturedProducts();
      this.displayBestProducts();
      this.displayCart();
      this.updateCartTotals();  // Actualiza los totales
    } else {
      alert("Stock insuficiente");
    }
  }

  removeFromCart(productId) {
    this.cart.removeFromCart(productId);
    this.displayCart();
    this.updateCartTotals();
  }

  updateCartTotals() {
    const totals = this.cart.getCartTotals();

    const totalContainer = document.getElementById('total');
    if (totalContainer) {
        totalContainer.innerHTML = `
            <div class="mx-2 text-black">
                <div class="flex justify-between p-2">
                    <p class="font-semibold">Subtotal</p>
                    <p>$${totals.subtotal}</p>
                </div>
                <div class="flex justify-between p-2">
                    <p class="font-semibold">Impuesto (12%)</p>
                    <p>$${totals.tax}</p>
                </div>
                <div class="flex justify-between p-2 bg-gray-200 font-bold">
                    <p>Total</p>
                    <p>$${totals.total}</p>
                </div>
            </div>
        `;
    }
  }
}

export default StoreUI;
