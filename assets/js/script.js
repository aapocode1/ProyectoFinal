let carrito = [];

// function agregarAlCarrito(nombre, precio) {
//     carrito.push({ nombre, precio });
//     actualizarCarrito();
// }

function agregarAlCarrito(nombre, precio, boton) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Buscar el contenedor del producto y el mensaje dentro de él
    const contenedorProducto = boton.parentElement;
    const mensaje = contenedorProducto.querySelector(".mensaje");

    mensaje.textContent = `${nombre} *Agregado!`;
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 1000); // Oculta el mensaje después de 2 segundos
}

// function actualizarCarrito() {
//     const listaCarrito = document.getElementById("carrito");
//     listaCarrito.innerHTML = "";
//     carrito.forEach((producto, index) => {
//         const item = document.createElement("li");
//         item.textContent = `${producto.nombre} - $${producto.precio}`;
//         const botonEliminar = document.createElement("button");
//         botonEliminar.textContent = "Eliminar";
//         botonEliminar.onclick = () => eliminarProducto(index);
//         item.appendChild(botonEliminar);
//         listaCarrito.appendChild(item);
//     });
// }

// function eliminarProducto(index) {
//     carrito.splice(index, 1);
//     actualizarCarrito();
// }

// function vaciarCarrito() {
//     carrito = [];
//     actualizarCarrito();
// }

function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarProducto(index);
        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    cargarCarrito();
}

window.onload = cargarCarrito;
