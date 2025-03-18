// Paso 1: Declarar el array vacío para almacenar los nombres
let amigos = [];

// Paso 2, 3 y 4: Implementar función para agregar amigos con validación y eliminación
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

// Función para actualizar la lista en la interfaz con botones de eliminación
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        nuevoElemento.appendChild(botonEliminar);
        listaAmigos.appendChild(nuevoElemento);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Paso 5: Implementar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</p>`;
}
