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
      return true;
    }
    return false;
  }

  removeFromCart(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveToStorage();
  }
}

export default ShoppingCart;
