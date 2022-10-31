const frutas = ["sandia", "pera", "melon"];
console.log(frutas.length);
console.log("----------");


frutas.push("banana");
console.log(frutas);
console.log("----------");

const gato = {
	nombre: "Zeus",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer: function () {
		console.log("Ahora esta comiendo");
	},
};

gato.comer();
console.log("----------");


const gato1 = {
	nombre: "Zeus",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer(comida) {
		return "Ahora esta comiendo: " + comida;
	},
};

console.log(gato1.comer("pez"));