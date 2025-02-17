class StoreUI {
  constructor(inventory) {
    this.inventory = inventory;
    this.productContainer = document.getElementById("product-container");
    this.init();
  }

  init() {
    this.displayProducts();
  }

  displayProducts() {
    this.productContainer.innerHTML = "";
    this.inventory.products.forEach(product => {
      let productCard = document.createElement("div");
      productCard.classList.add("product-card", "bg-white", "p-5", "rounded-lg", "shadow-lg");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover mb-4">
        <h3 class="text-xl mb-2">${product.name}</h3>
        <p id="product-description" class="mb-2">Lorem ipsum dolor, sit amet consectetur</p>
        <div class="text-center">
          <p>$${product.price}</p>
          <p>Stock: ${product.stock}</p>
          <input type="number" id="qty-${product.id}" min="1" max="${product.stock}" value="1">
          <button class="bg-[#0038AE] py-2 px-4 rounded-full" onclick="storeUI.addToCart(${product.id})">Agregar</button>
        </div> 
      `;
      this.productContainer.appendChild(productCard);
    });
  }

}

export default StoreUI;
