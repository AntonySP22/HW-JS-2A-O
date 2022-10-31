//Primitivos: (por valor)
let a = "hola";
let b =a;
console.log(b);

a = "chao";
console.log(b);
//Si cambiamos el valor de a, b sigue siendo "hola"

//No primitivos: (por referencia)
let c =["hola"];
let d =c;
console.log(d);

c.push("chao");
console.log(d);

//Lo mismo pasa con los objetos
const e ={
    nombre:"hola",
};

const f =e;

e.nombre="chao";

console.log(f);