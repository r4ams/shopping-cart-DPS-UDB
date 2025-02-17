import Product from "./product.js";
import Inventory from "./inventory.js";
import StoreUI from "./storeUI.js";

// Datos iniciales
const initialProducts = [
  new Product(1, "Laptop", 1200, "https://placehold.co/200x200", 5),
  new Product(2, "Smartphone", 800, "https://placehold.co/200x200", 10),
  new Product(3, "Auriculares", 150, "https://placehold.co/200x200", 8),
  new Product(4, "Memoria USB", 150, "https://placehold.co/200x200", 8)
];

// Inicialización del inventario
const inventory = new Inventory();
if (!inventory.loadInventory()) {
  inventory.products = initialProducts;
  inventory.saveInventory();
}

// Inicialización de la UI
const storeUI = new StoreUI(inventory);

// Hacer `storeUI` accesible globalmente
window.storeUI = storeUI;