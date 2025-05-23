// let carrito = [];

// function agregarAlCarrito(nombre, precio, boton) {
//     let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//     carrito.push({ nombre, precio });
//     localStorage.setItem("carrito", JSON.stringify(carrito));

//     // Buscar el contenedor del producto y el mensaje dentro de él
//     const contenedorProducto = boton.parentElement;
//     const mensaje = contenedorProducto.querySelector(".mensaje");

//     mensaje.textContent = `${nombre} *Agregado!`;
//     mensaje.style.display = "block";

//     setTimeout(() => {
//         mensaje.style.display = "none";
//     }, 2000); // Oculta el mensaje después de 2 segundos
// }



// function cargarCarrito() {
//     let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//     const listaCarrito = document.getElementById("carrito");
//     listaCarrito.innerHTML = "";
//     let total = 0;

//     carrito.forEach((producto, index) => {
//         const item = document.createElement("li");
//         item.textContent = `${producto.nombre} - $${producto.precio}`;
//         const botonEliminar = document.createElement("button");
//         botonEliminar.textContent = "Eliminar";
//         botonEliminar.onclick = () => eliminarProducto(index);
//         item.appendChild(botonEliminar);
//         listaCarrito.appendChild(item);
//         total += producto.precio;
//     });

//     document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
// }

// function eliminarProducto(index) {
//     let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//     carrito.splice(index, 1);
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     cargarCarrito();
// }

// function vaciarCarrito() {
//     localStorage.removeItem("carrito");
//     cargarCarrito();
// }

// window.onload = cargarCarrito;
//=============================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    actualizarContadorCarrito();
});

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contadorElemento = document.getElementById("carrito-contador");

    if (contadorElemento) {
        contadorElemento.textContent = carrito.length > 0 ? carrito.length : "";
    } else {
        console.warn("⚠ No se encontró el elemento con ID 'carrito-contador'.");
    }
}

// Función para agregar un producto y actualizar el contador
function agregarAlCarrito(nombre, precio, imagen) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({ nombre, precio, imagen });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContadorCarrito();

    // Mostrar mensaje de confirmación
    alert(`✅ ${nombre} ha sido agregado al carrito.`);
}



// Función para actualizar el carrito en pantalla
document.addEventListener("DOMContentLoaded", function() {
    actualizarCarritoUI();
});

function actualizarCarritoUI() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoElemento = document.getElementById("carrito");

    if (carritoElemento) {
        carritoElemento.innerHTML = ""; // Limpiar antes de renderizar

        carrito.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("carrito-item");

            li.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" class="miniatura">
                <span>${item.nombre} - $${item.precio}</span>
                <button onclick="eliminarItem('${item.nombre}')">Eliminar</button>
            `;

            carritoElemento.appendChild(li);
        });

        actualizarTotal();
    } else {
        console.error("❌ Error: No se encontró el elemento con ID 'carrito'. Verifica tu HTML.");
    }
}


// Función para eliminar un producto del carrito
function eliminarItem(nombre) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(item => item.nombre !== nombre);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarritoUI();
    actualizarContadorCarrito(); // Asegurar que el contador se actualiza
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarCarritoUI();
    actualizarContadorCarrito(); // Asegurar que el contador se actualiza
}

// Actualizar el total del carrito
function actualizarTotal() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.getElementById("total").textContent = `Total: $${total}`;
}

// Cargar el carrito al iniciar la página
document.addEventListener("DOMContentLoaded", actualizarCarritoUI);

document.getElementById("formPago").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
    
    // Aquí podrías agregar validaciones adicionales antes de procesar el pago

    alert("✅ Pago efectuado correctamente. ¡Gracias por tu compra en HouseAtelier!");

    // Opcional: Limpiar los campos después del pago
    this.reset();
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});


// function actualizarContadorCarrito() {
//     let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//     const contadorElemento = document.getElementById("carrito-contador");

//     if (contadorElemento) {
//         contadorElemento.textContent = carrito.length > 0 ? carrito.length : "";
//     } else {
//         console.error("❌ Error: No se encontró el elemento con ID 'carrito-contador'. Verifica tu HTML.");
//     }
// }

// // Llamar a la función en todas las páginas
// document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);




