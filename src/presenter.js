import { saludar } from './saludo.js'; // Importa la función 'saludar'

const nombreInput = document.querySelector("#nombre"); // Obtenemos el nombre
const generoSelect = document.querySelector("#genero"); // Obtenemos el genero
const edadInput = document.querySelector("#edad"); //Obtenemos la edad
const saludoDiv = document.querySelector("#saludo"); // Obtenemos el saludo


function mostrarSaludo() {
    const nombre = nombreInput.value;
    const genero = generoSelect.value;
    const edad = edadInput.value ? parseInt(edadInput.value, 10) : null; // Convertir la edad a número

    saludoDiv.innerText = saludar(nombre, genero, edad);
}


document.querySelector("button").addEventListener("click", mostrarSaludo);
