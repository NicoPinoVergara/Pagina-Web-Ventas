// Simulación de una base de datos de productos
const productos = [
    {
        id: 1,
        nombre: 'Croquetas Premium',
        descripcion: 'Alimento completo para perros adultos de todas las razas. Ingredientes naturales y de alta calidad.',
        precio: 25990,
        imagen: 'https://tse3.mm.bing.net/th/id/OIP.kRIzSeFqvtdQtexjCsjaiQHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
        id: 2,
        nombre: 'Comida Húmeda',
        descripcion: 'Deliciosas latas de comida húmeda con pollo y vegetales. Ideal para paladares exigentes.',
        precio: 15000,
        imagen: 'https://tse4.mm.bing.net/th/id/OIP.Atn_7Td6eypmA4kbVTwoLwHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
        id: 3,
        nombre: 'Snacks Dentales',
        descripcion: 'Premios para perros que ayudan a mantener sus dientes limpios y saludables.',
        precio: 20000,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_984223-MLC46745992115_072021-F.jpg'
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