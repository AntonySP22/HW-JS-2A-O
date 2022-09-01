var num, i;
i = 1;

alert("Precione ENTER o ACEPTAR para mencionar los numeros multiplos de 3: ");

num = parseInt(prompt("Digitar el numero hasta donde realizar la multiplicacion: "));

while (i <= num) {
    if (i % 3 == 0) {
    document.write("El numero ", i ," es multiplo de 3 <br>");
    }
    i = i + 1;
}
