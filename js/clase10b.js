const gato ={
    nombre:"Valiente",
    duerme:"true",
    edad: 10,
    enemigos:["Agua","Perro"],
    otros:{
        amigos:["cobarde","timido","pegajoso"],
        favoritos:{
            comida:{
                fria:"salmón",
                caliente:"pollo",
            },
        },
    },
};

const nombreGato = gato.nombre;
console.log(nombreGato);
console.log("--------------");

const gato2 ={
    nombre:"Valiente",
    duerme:"true",
    edad:10,
    enemigos:["agua","perros"],
    otros:{
        amigos:["Cobarde","Timido","Pegajoso"],
        favoritos:{
            comida:{
                fria:"Salmón",
                caliente:"pollo",
            },
        },
    },
};

const {nombre,duerme,edad,enemigos}=gato2;
console.log(nombre);
console.log(duerme);
console.log(edad);

console.log(enemigos);
console.log("-----------");

const gato3 ={
    duerme:true,
    edad: 10,
    enemigos:["agua","perros"],
    otros:{
        amigos: ["Cobarde","Timido","Pegajoso"],
        favoritos:{
            comida:{
                fria: "Salmón",
                caliente:"pollo",
            },
        },
    },
};
const{nombre1:nombreGato1 ="sin nombre"}=gato3;
console.log(nombreGato1);
console.log("----------");

const gato4 ={
    nombre:"Valiente",
    duerme:"true",
    edad: 10,
    enemigos:["agua","perros"],
    otros:{
        amigos:["Cobarde", "timido", "pegajoso"],
        favoritos:{
            comida:{
                fria: "salmón",
                caliente:"pollo",
            },
        },
    },
};

const{
    otros:{amigos},
}= gato4;
console.log(amigos);