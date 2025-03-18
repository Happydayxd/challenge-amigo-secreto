// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Corrección aplicada
    let listaAmigos = document.getElementById("listaAmigos");

    let nombre = inputNombre.value.trim(); 

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Evitar nombres duplicados
    let nombresActuales = Array.from(listaAmigos.children).map(item => item.textContent);
    if (nombresActuales.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    inputNombre.value = ""; // Limpiar el campo después de añadir el nombre
}
