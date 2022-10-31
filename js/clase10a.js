const gato={
    nombre:"Valiente",
    duerme:"true",
    edad:10,
    enemigos:["agua","Perros"],
};

for (const propiedad in gato){
    console.log(gato[propiedad]);
}
console.log("------------");

console.log(Object.values(gato));
console.log("------------");
Object.values(gato).forEach((item)=> console.log(item));
console.log("-----------");

const gato1 ={
    nombre: "Valiente",
    duerme: true,
    edad:10,
    enemigos:["agua","perros"],
    otros:{
        amigos: ["Cobarde","Timido","Pegajoso"],
        favoritos:{
            comida:{
                fria:"Salmón",
                caliente:"Pollo",
            },
        },
    },
}