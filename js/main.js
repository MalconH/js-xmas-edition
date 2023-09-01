function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return "Este campo sólo acepta letras";
    }

    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "La ciudad no puede estar vacía";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "La descripción no puede tener más de 100 caracteres";
    }

    if (descripcionRegalo.length === 0) {
        return "La descripción no puede estar vacía";
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "La descripción sólo puede tener números y letras";
    }

    return "";
}

function validarFormulario(event) {
    const $form = document.formulario;

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");

    borrarErrores();

    keys.forEach(function (key) {
        const error = errores[key];
        const $error = document.createElement("li");

        if (error) {
            agregarError(error);
            $form[key].className = "error";
        } else {
            $form[key].className = "";
        }
    });

    // const errorNombre = errores.nombre;
    // const errorCiudad = errores.ciudad;
    // const errorDescripcionRegalo = errores.descripcionRegalo;

    // if (errorNombre) {
    //     $form.nombre.className = "error";
    // } else {
    //     $form.nombre.className = "";
    // }

    // if (errorCiudad) {
    //     $form.ciudad.className = "error";
    // } else {
    //     $form.ciudad.className = "";
    // }

    // if (errorDescripcionRegalo) {
    //     $form["descripcion-regalo"].className = "error";
    // } else {
    //     $form["descripcion-regalo"].className = "";
    // }
}

function agregarError(error) {
    const $errores = document.querySelector("#errores");
    const $error = document.createElement("li");

    $error.textContent = error;
    $errores.appendChild($error);
}

function borrarErrores() {
    document.querySelector("#errores").innerHTML = "";
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
