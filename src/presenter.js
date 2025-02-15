import { saludar } from './saludo.js';

const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");  // Nuevo input para la edad
const idiomaSelect = document.querySelector("#idioma");
const saludoDiv = document.querySelector("#saludo");

function mostrarSaludo() {
    const nombre = nombreInput.value;
    const genero = generoSelect.value;
    const edad = parseInt(edadInput.value, 10) || null;  // Convertir a número, si no es válido usar null
    const idioma = idiomaSelect.value;

    saludoDiv.innerText = saludar(nombre, genero, edad, idioma);
}

document.querySelector("button").addEventListener("click", mostrarSaludo);
