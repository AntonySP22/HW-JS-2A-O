const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua","perros"]
}

console.log(gato.hasOwnProperty("nombre"))
console.log(gato.hasOwnProperty("salud"))

console.log("---------------------------")

//Objetos animados
const gato1 = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua","perros"],
    otros: {
        amigos: ["Cobarde","Timido","Pegajoso"],
        favoritos: {
            comida:{
                fria: "Salmón",
                caliente: "Pollo"
            }
        }
    }
}

console.log(gato1.otros.amigos[0])
console.log(gato1.otros.favoritos.comida.fria)

console.log("---------------------------")