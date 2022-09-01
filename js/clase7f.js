var cateto1, cateto2;
cateto1 = prompt("Ingrese el cateto 1: ");
cateto2 = prompt("Ingresa el cateto 2: ");

var hipo = Math.hypot(cateto1, cateto2);

document.write("La hipotenusa del triangulo es: " + hipo);