// Paso 1: Declarar el array vacío para almacenar los nombres
let amigos = [];

// Elementos del DOM (Accesibles solo una vez para optimizar rendimiento)
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Paso 2-6: Implementar función para agregar amigos con validación y eliminación
function agregarAmigo() {
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

// Permitir agregar con "Enter"
inputNombre.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Función optimizada para actualizar la lista con `documentFragment`
function actualizarLista() {
    listaAmigos.innerHTML = "";  
    let fragment = document.createDocumentFragment();

    amigos.forEach((amigo, index) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        nuevoElemento.classList.add("added");

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.setAttribute("aria-label", `Eliminar a ${amigo} de la lista`);
        botonEliminar.onclick = () => eliminarAmigo(index);

        nuevoElemento.appendChild(botonEliminar);
        fragment.appendChild(nuevoElemento);
    });

    listaAmigos.appendChild(fragment); // Evita repintados innecesarios en el DOM
}

// Función para eliminar un amigo con animación
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Paso 5 y 6: Implementar el sorteo aleatorio con optimización
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</p>`;
    resultado.classList.add("show");

    //setTimeout(() => resultado.classList.remove("show"), 15000);
}
