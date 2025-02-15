export function saludar(nombre = '', genero = '', edad = null, idioma = 'es') {
    const hora = new Date().getHours();
    let saludo = '';

    // Definir saludos según el idioma
    const saludos = {
        es: { morning: 'Buenos días', afternoon: 'Buenas tardes', night: 'Buenas noches' },
        en: { morning: 'Good morning', afternoon: 'Good afternoon', night: 'Good evening' }
    };

    const titulos = {
        es: { joven: 'joven,', senor: 'Sñr.', senora: 'Sñra.', senorita: 'señorita,' },
        en: { joven: 'young,', senor: 'Mr.', senora: 'Mrs.', senorita: 'Miss,' }
    };

    // Definir el saludo según la hora del día
    if (hora >= 6 && hora < 12) {
        saludo = saludos[idioma].morning;
    } else if (hora >= 12 && hora < 20) {
        saludo = saludos[idioma].afternoon;
    } else {
        saludo = saludos[idioma].night;
    }

    let tratamiento = '';

    // Asignar tratamiento según la edad y género
    if (edad !== null) {
        if (edad < 30) {
            tratamiento = (genero === 'masculino') ? titulos[idioma].joven : titulos[idioma].senorita;
        } else {
            tratamiento = (genero === 'masculino') ? titulos[idioma].senor : titulos[idioma].senora;
        }
    }

    if (tratamiento) {
        saludo += ` ${tratamiento}`;
    }

    if (nombre) {
        saludo += ` ${nombre}`;
    }

    return saludo;
}
