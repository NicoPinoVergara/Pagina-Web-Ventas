// Simulación de una base de datos de productos
const productos = [
    {
        id: 1,
        nombre: 'Croquetas Premium',
        descripcion: 'Alimento completo para perros adultos de todas las razas. Ingredientes naturales y de alta calidad.',
        precio: 25.990,
        imagen: 'https://via.placeholder.com/200x200?text=Croquetas+Premium'
    },
    {
        id: 2,
        nombre: 'Comida Húmeda',
        descripcion: 'Deliciosas latas de comida húmeda con pollo y vegetales. Ideal para paladares exigentes.',
        precio: 15.000,
        imagen: 'https://via.placeholder.com/200x200?text=Comida+Húmeda'
    },
    {
        id: 3,
        nombre: 'Snacks Dentales',
        descripcion: 'Premios para perros que ayudan a mantener sus dientes limpios y saludables.',
        precio: 8.75,
        imagen: 'https://via.placeholder.com/200x200?text=Snacks+Dentales'
    }
];

const productosContainer = document.getElementById('productos');

// Función para renderizar los productos en la página
function renderizarProductos() {
    productos.forEach(producto => {
        // Crear un div para cada producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        // Insertar el HTML del producto dentro del div
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span class="precio">$${producto.precio.toFixed(2)}</span>
            <button>Añadir al carrito</button>
        `;

        // Añadir el producto al contenedor de productos en el DOM
        productosContainer.appendChild(productoDiv);
    });
}

// Llamar a la función al cargar la página
renderizarProductos();