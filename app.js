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

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    });
}
