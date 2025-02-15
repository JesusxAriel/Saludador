export function saludar(nombre = '', genero = '', edad = null) {
    const hora = new Date().getHours();
    let saludo = '';

    if (hora >= 6 && hora < 12) {
        saludo = 'Buenos días';
    } else if (hora >= 12 && hora < 20) {
        saludo = 'Buenas tardes';
    } else {
        saludo = 'Buenas noches';
    }

    let tratamiento = '';

    // Asignar "joven" o "señor/señora" según la edad
    if (edad !== null) {
        if (edad < 30) {
            tratamiento = (genero === 'masculino') ? 'joven' : 'señorita';
        } else {
            tratamiento = (genero === 'masculino') ? 'señor' : 'señora';
        }
    }

    if (tratamiento) {
        saludo += `, ${tratamiento}`;
    }

    if (nombre) {
        saludo += `, ${nombre}`;
    }

    return saludo;
}
