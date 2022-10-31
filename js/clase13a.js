console.log(document.querySelectorAll("div p"));
console.log("--------------");

const h1 = document.querySelector("#tituloWeb");

console.log(h1.className);
console.log("-----------------");

console.log(h1.id);
console.log("----------------");

console.log(h1.style);
console.log("--------------");

console.log(h1.tagName);
console.log("---------------");

console.log(h1.textContent);
console.log("-----------------");

h1.textContent="Nuevo texto";
h1.style.backgroundColor="red";
h1.style.color="white";

const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click",()=>{
    parrafo.textContent = "Nuevo texto desde evento"
})