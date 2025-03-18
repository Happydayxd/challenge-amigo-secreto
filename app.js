// Paso 1: Declarar el array vacío para almacenar los nombres
let amigos = [];

// Paso 2 y 3: Implementar función para agregar amigos con validación de duplicados
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    let nombre = inputNombre.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista visualmente
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Paso 4: Función para actualizar la lista en la interfaz con botones de eliminación
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;

        // Crear botón de eliminación ❌
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        // Agregar el botón al elemento de la lista
        nuevoElemento.appendChild(botonEliminar);
        listaAmigos.appendChild(nuevoElemento);
    });
}

// Paso 4: Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar amigo del array
    actualizarLista(); // Actualizar la lista en la interfaz
}
