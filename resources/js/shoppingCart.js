import CartItem from "./cartItem.js";

class ShoppingCart {
  constructor(inventory) {
    this.inventory = inventory;
    this.items = this.loadFromStorage() || [];
  }

  loadFromStorage() {
    return JSON.parse(localStorage.getItem("shoppingCart")) || [];
  }

  saveToStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(this.items));
  }

  //agregar un producto al carrito
  addToCart(productId, quantity) {
    let product = this.inventory.getProductById(productId);

    if (product && product.stock >= quantity) {
      let cartItem = this.items.find(item => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        this.items.push(new CartItem(product, quantity));
      }

      this.inventory.reduceStock(productId, quantity);
      this.saveToStorage();
      // Actualizar el contador del carrito
      window.storeUI.updateCartCount();

      return true;
    }
    return false;
  }

  //eliminar un producto del carrito
  removeFromCart(productId) {
    // Encontrar el producto en el carrito antes de eliminarlo
    let cartItem = this.items.find(item => item.product.id === productId);

    if (cartItem) {
        // Restaurar el stock en el inventario
        this.inventory.increaseStock(productId, cartItem.quantity);

        // Filtrar los productos del carrito para eliminar el seleccionado
        this.items = this.items.filter(item => item.product.id !== productId);

        // Guardar cambios en el almacenamiento
        this.saveToStorage();

        // Actualizar la UI (si tienes un método para esto en StoreUI)
        window.storeUI.displayCart();
        window.storeUI.displayfeaturedProducts();
        window.storeUI.displayBestProducts();
        // Actualizar el contador del carrito
        window.storeUI.updateCartCount();
    }
  }

  // Obtener los totales del carrito
  getCartTotals() {
    let subtotal = 0;

    this.items.forEach(item => {
        subtotal += item.quantity * item.product.price;
    });

    const taxRate = 0.12; // 12% de impuesto
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
  }

  emptyCart() {
    this.items = [];
    this.saveToStorage(); // Guardar el carrito vacío en localStorage
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}

export default ShoppingCart;
