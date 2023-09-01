function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter",
        "ValidarNombre no validó que el nombre sea un string vacío"
    );

    console.assert(validarNombre("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") ===
        "Este campo debe tener menos de 50 caracteres",
        "ValidarNombre no validó que el nombre tenga más de 50 caracteres"
    );

    console.assert(validarNombre("1235") === "Este campo sólo acepta letras",
        "validarNombre no valido que el nombre sólo puede contener letras"
    );

    // Hay que tambiar crear UnitTests para el happy path (ver apunte 31/08)
    console.assert(validarNombre("Malcon") === "",
        "validarNombre falló validando un nombre correcto"
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "La ciudad no puede estar vacía",
        "validarCiudad no validó que la ciudad no puede estar vacía"
    );

    // Happy path (apunte)
    console.assert(
        validarCiudad("Buenos Aires") === "",
        "validarCiudad no validó correctamente una ciudad válida"
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "La descripción no puede estar vacía",
        "validarDescripcionRegalo no validó que la descripción no puede ser un string vacio"
    );

    console.assert(
        validarDescripcionRegalo("asdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdad"
        ) === "La descripción no puede tener más de 100 caracteres",
        "validarDescripcionRegalo no validó que la descripción no puede ser igual o mayor a 100 caracteres"
    );

    console.assert(
        validarDescripcionRegalo(".,.,.,.,") === "La descripción sólo puede tener números y letras",
        "validarDescripcionRegalo no validó que la descripción sólo puede tener números y letras"
    );

    // Hay que también crear UnitTests para el "happy path" (camino correcto).
    console.assert(
        validarDescripcionRegalo("Regalo") === "",
        "validarDescripcionRegalo falló al validar una descripción correcta"
    );
}


probarValidarNombre();
probarValidarDescripcionRegalo();
