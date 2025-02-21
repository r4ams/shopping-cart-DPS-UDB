# 🛒 Shopping Cart - DPS UDB

Este es un proyecto de carrito de compras desarrollado con **JavaScript**, **Tailwind CSS** y almacenamiento en `localStorage`.  
Permite agregar productos al carrito, calcular totales, administrar inventario y generar una factura al confirmar la compra.

## 🚀 Funcionalidades

✅ Agregar productos al carrito  
✅ Actualización dinámica del total de la compra  
✅ Inventario administrado automáticamente  
✅ Generación de factura al finalizar la compra  
✅ Almacenamiento en `localStorage` para persistencia de datos

## 📌 Cómo Ejecutar el Proyecto

1. Clona el repositorio:  
   ```sh
   git clone https://github.com/r4ams/shopping-cart-DPS-UDB.git

2. Abre el archivo `index.html` en tu navegador favorito.


## 📂 Estructura del Proyecto

```bash
shopping-cart-DPS-UDB/ 
│── resources/          # Recursos estáticos 
│   ├── css/           # Archivos de estilos customizados
│   │   ├── styles.css # Estilos generales 
│   ├── images/        # Imágenes de los productos 
│── js/                # Código JavaScript  
│   ├── app.js         # Lógica general
│   ├── cartItem.js    # Modelo de item en el carrito
│   ├── product.js     # Modelo de producto 
│   ├── inventory.js   # Gestión del inventario 
│   ├── shoppingCart.js # Lógica del carrito de compras 
│   ├── storeUI.js     # Manejo de la interfaz del store y UI 
│── index.html         # Página principal 
│── README.md          # Documentación del proyecto