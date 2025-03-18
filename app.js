// Paso 1: Declarar el array vacío para almacenar los nombres
let amigos = [];

// Paso 2, 3, 4: Implementar función para agregar amigos con validación y eliminación
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    let nombre = inputNombre.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

// Función para actualizar la lista en la interfaz con animaciones
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        nuevoElemento.classList.add("added");

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = function () {
            eliminarAmigo(index, nuevoElemento);
        };

        nuevoElemento.appendChild(botonEliminar);
        listaAmigos.appendChild(nuevoElemento);

        // Quitar la clase de animación después de 300ms
        setTimeout(() => nuevoElemento.classList.remove("added"), 300);
    });
}

// Función para eliminar un amigo con animación
function eliminarAmigo(index, elemento) {
    elemento.classList.add("removed"); // Agregar animación de eliminación

    setTimeout(() => {
        amigos.splice(index, 1);
        actualizarLista();
    }, 300); // Esperar la animación antes de actualizar la lista
}

// Paso 5 y 6: Implementar el sorteo aleatorio con animación
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</p>`;

    resultado.classList.add("show"); // Aplicar animación

    // Remover la animación después de 2 segundos
    setTimeout(() => resultado.classList.remove("show"), 2000);
}
