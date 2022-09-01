var num;

num = parseInt(prompt("Digite el numero"));
fpar_impar();

function fpar_impar() {
    if (num % 2 == 0) {
        document.write("El numero ", num , " es PAR");
    } else {
        document.write("El numero " , num , " es IMPAR");
    }
}