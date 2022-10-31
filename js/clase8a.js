const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua","perros"]
};
console.log(gato);
console.log("-------------------");

//mostrar solo un elemento
console.log(gato.nombre)
console.log(gato.duerme)
console.log(gato.enemigos[0])
console.log("-------------------")

//Notacion de corchetes (nos servira para correrlo)
console.log(gato['nombre'])
console.log(gato['edad'])
console.log(gato["enemigos"][1])
console.log("-------------------")

//CRUD (prioridades)

//crear (create) prioridad y dato
gato.colot = "Azul";

//Leer (read)
console.log(gato);
console.log("-------------------")

//actualizar (update)
gato.edad = 11
console.log(gato.edad);
console.log("-------------------")

//Eliminar (delete)
delete gato.duerme
console.log(gato);
console.log("-------------------")