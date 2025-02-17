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
}

export default Inventory;
