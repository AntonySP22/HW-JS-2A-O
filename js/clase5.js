let nombreuser = "Elmer Cruz";

console.log("Bienvenido: "+ nombreuser)
console.log("Bienvenido: \n"+ nombreuser)

//Templade String
console.log(`Bienvenido: ${nombreuser}`)
console.log(`Bienvenido: 
${nombreuser}`)

//Podemos ocupar funciones string
console.log(`Bienvenido: ${nombreuser.toUpperCase()}`)
 
let estado = true;

//Operador ternario
console.log(`
${estado ? "en linea" : "offline"}
`)

estado = false;

console.log(`
${estado ? "en linea" : "offline"}
`)