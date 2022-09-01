document.write("----- For ---- <br>")
var suma = 0 
var n = parseInt(prompt("Digite el numero que desea llegar en for y while"))
for(i = 1; i<=n; i++){
    suma = suma + 1;
    document.write("La suma de los n numeros es", suma, "<br>")
}
document.write("------ while ---- <br>")
suma = 0;
i = 1; 
while(i<=n){
    suma = suma + i;
    document.write("La suma de los n numeros es ", suma, "<br/>")
    i = i+1;
}