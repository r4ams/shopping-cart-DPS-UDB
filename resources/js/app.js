import Product from "./product.js";
import Inventory from "./inventory.js";
import ShoppingCart from "./shoppingCart.js";
import StoreUI from "./storeUI.js";

// Datos iniciales
const initialProducts = [
  new Product(1, "Daflon 500 Mg", "1 caja , 60 comprimidos recubiertos", 12.92, "./resources/images/products/product1.png", 5, 'featured'),
  new Product(2, "Ozempic Dual Dose 2 Mg", "1 caja , 1 pluma precargada con 6 agujas", 17.00, "./resources/images/products/product2.png", 3, 'featured'),
  new Product(3, "Rovartal NF 10 Mg", "1 caja , 30 comprimidos", 19.00, "./resources/images/products/product3.png", 4, 'featured'),
  new Product(4, "Micardis Plus 80 mg/12.5 mg", "1 caja , 14 comprimidos recubiertos", 21.00, "./resources/images/products/product4.png", 7, 'featured'),
  new Product(5, "Concor AM 10 Mg", "1 caja , 30 tabletas", 7.00, "./resources/images/products/product5.png", 6, 'best'),
  new Product(6, "Daflon 1000 Mg", "1 caja , 36 comprimidos", 19.99, "./resources/images/products/product6.png", 10, 'best'),
  new Product(7, "Micardis Plus 80 mg/12.5 mg", "1 caja , 14 comprimidos recubiertos", 16.00, "./resources/images/products/product7.png", 2, 'best'),
  new Product(8, "Kolestevan 20 Mg", "1 caja , 30 tabletas", 29.00, "./resources/images/products/product8.png", 19, 'best'),
];

// Inicialización del inventario
const inventory = new Inventory();
if (!inventory.loadInventory()) {
  inventory.products = initialProducts;
  inventory.saveInventory();
}

// Inicialización del carrito
const cart = new ShoppingCart(inventory);

// Inicialización de la UI
const storeUI = new StoreUI(inventory, cart);

// Obtener los elementos
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');

// Añadir evento de clic para mostrar/ocultar la barra lateral
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('translate-x-full');  // Alterna la visibilidad
    overlay.classList.remove('hidden');  // Mostrar el overlay
});

closeButton.addEventListener('click', () => {
  sidebar.classList.add('translate-x-full');  // Cerrar cuando se haga clic en el botón
  overlay.classList.add('hidden');  // Ocultar el overlay
});

document.addEventListener("DOMContentLoaded", () => {
  storeUI.updateCartCount();
});

// Hacer `storeUI` accesible globalmente
window.storeUI = storeUI;