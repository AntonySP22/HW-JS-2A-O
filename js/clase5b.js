var nombreuser = "Daniel Figueroa"
var nombreuser = "Elmer Cruz"

console.log(nombreuser)

/* 
Quitar los comentarios al siguiente codigo y ver 
que pasa volverlo luego a poner
*/
/*
let n_user = "Elmer Cruz"
let n_user = "Daniel Figueroa"

console-log(n_user)
*/

//No puede haber dos variables pero si puede cambiar su valor

let estado = true;
estado = false;

console.log(estado);

//Scope
var state = true

if (state) {
    console.log("Entro al if con var")
    var state = false
}
console.log(state)

let state2 = true

if (state2) {
    console.log("Entro al if con let")
}

console.log(state2)

//El let solo vive dentro del for
for (let i = 0; i < 5; i++) {
    console.log(i)
}
//Daria un error
//console.log(i)

//Const - variable constaten
const estado3 = true
//no se puede volver a declarar o cambiar estado
/* const estado3 = false;
*/
console.log(estado3);

const state3 = true
if (state3) {
    console.log("Entro al if con const");
    const state3 = false
    console.log(state3)
}
console.log(state3)