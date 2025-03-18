// Paso 1: Declarar el array vacío para almacenar los nombres
let amigos = [];

// Paso 2: Implementar la función para agregar amigos
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    let nombre = inputNombre.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
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
