import Product from "./product.js";

class Inventory {
  constructor() {
    this.products = this.loadInventory() || [];
  }

  loadInventory() {
    return JSON.parse(localStorage.getItem("inventory")) || null;
  }

  saveInventory() {
    localStorage.setItem("inventory", JSON.stringify(this.products));
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  reduceStock(id, quantity) {
    let product = this.getProductById(id);
    if (product && product.stock >= quantity) {
      product.stock -= quantity;
      this.saveInventory();
      return true;
    }
    return false;
  }
}

export default Inventory;
