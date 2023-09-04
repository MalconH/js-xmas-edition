/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/

function validarIntegrantesIngresados(integrantesIngresados) {
    const INTEGRANTES_MAXIMOS = 99;

    if (integrantesIngresados <= 0) {
        return "La cantidad de integrantes ingresados debe ser mayor que 0";
    }

    if (!/^[0-9]+$/.test(integrantesIngresados)) {
        return "La cantidad de integrantes ingresados debe ser un numero válido";
    }

    if (integrantesIngresados > INTEGRANTES_MAXIMOS) {
        return "La cantidad de integrantes ingresados no debe ser mayor a " + INTEGRANTES_MAXIMOS;
    }

    return "";
}

function validarEdad(edad) {
    const EDAD_MAXIMA = 199;

    if (edad <= 0) {
        return "La edad debe ser mayor que 0";
    }

    if (!/^[0-9]+$/.test(edad)) {
        return "La edad debe ser un número válido";
    }

    if (edad >= EDAD_MAXIMA) {
        return "La edad no puede ser mayor que " + EDAD_MAXIMA;
    }

    return "";
}

function validarSalario(salario) {
    if (salario <= 0) {
        return "El salario debe ser mayor que 0";
    }

    if (!/^[0-9]+$/.test(edad)) {
        return "El salario debe ser un monto válido";
    }

    return "";
}
