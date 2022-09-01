var promedio = parseFloat(prompt("Digite su promedio"));

if (promedio >= 0 && promedio <= 10) {
    document.write("Esta en el rango correcto de 0 a 10")
    document.write("<br>")
    if (promedio >= 8) {
        document.write("Usted esta APROBADO con una nota de ", promedio);
    } else {
        document.write("Usted esta REPROBADO con una nota de ", promedio);
    }
} else {
    document.write("Esta fuera del rango del 0 a 10")
}