/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
function validarCiudad(ciudad) {
    const $opciones = document.formulario.ciudad.children;
    const ciudades = [];
    for (let i = 0; i < $opciones.length; i++) {
        ciudades.push($opciones[i].value);
    }

    if (ciudad === "") {
        return "Este campo no puede estar vacío";
    }

    if (!ciudades.includes(ciudad)) {
        return "La ciudad ingresada no es válida";
    }

    return "";
}

function validarDescripcionRegalo(descripcion) {
    if (descripcion === "") {
        return "Este campo no puede estar vacío"
    }

    return "";
}

function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
}

// Pruebas de funciones
function probarValidarCiudad() {
    console.assert(validarCiudad("") === "Este campo no puede estar vacío",
        "ValidarCiudad no validó que la ciudad sea un string vacío");

    console.assert(validarCiudad("Esperanza") === "La ciudad ingresada no es válida",
        "ValidarCiudad no validó que la ciudad no es válida");
}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "Este campo no puede estar vacío",
        "ValidarDescripcionRegalo no validó que la descripción sea un string vacío");
}

function probarCalcularSalarioMensual() {
    console.assert(calcularSalarioMensual(12000) === 1000,
        "calcularSalarioMensual no funcionó correctamente con un sueldo anual de 12000");

    console.assert(calcularSalarioMensual(0) === 0,
        "calcularSalarioMensual no funcionó correctamente con un sueldo anual de 0");
}
""

probarCalcularSalarioMensual();
probarValidarCiudad();
probarValidarDescripcionRegalo();
