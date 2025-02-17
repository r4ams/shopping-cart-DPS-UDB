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

// Obtener los elementos
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeSidebar');

// Añadir evento de clic para mostrar/ocultar la barra lateral
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('translate-x-full');  // Alterna la visibilidad
    overlay.classList.remove('hidden');  // Mostrar el overlay
});

closeButton.addEventListener('click', () => {
  sidebar.classList.add('translate-x-full');  // Cerrar cuando se haga clic en el botón
  overlay.classList.add('hidden');  // Ocultar el overlay
});

// Hacer `storeUI` accesible globalmente
window.storeUI = storeUI;