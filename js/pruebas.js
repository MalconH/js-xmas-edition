function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter",
        "ValidarNombre no validó que el nombre sea un string vacío");

    console.assert(validarNombre("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") ===
        "Este campo debe tener menos de 50 caracteres",
        "ValidarNombre no validó que el nombre tenga más de 50 caracteres")
}

probarValidarNombre();
