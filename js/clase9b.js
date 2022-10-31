//Objeto globale es nombre
const nombre = "Percy";

const gato = {
	nombre: "Valiente",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer(comida) {
		return `${nombre} esta comiendo ${comida}`;
	},
};

console.log(gato.comer("pez"));
console.log("----------")

//this en el array
const gato1 = {
	nombre: "Valiente",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer(comida) {
		console.log(this);
	},
};

gato1.comer("pez");
console.log("----------")

//this toma el nombre del array
const gato2 = {
	nombre: "Valiente",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer(comida) {
		return `${this.nombre} esta comiendo ${comida}`;
	},
};

console.log(gato2.comer("pez"));
console.log("----------")

//Ocupando el arrow function
const gato3 = {
	nombre: "Valiente",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer: (comida) => {
		return `${this.nombre} esta comiendo ${comida}`;
	},
};

console.log(gato3.comer("pez"));
console.log("----------")

//Opcional con arrow function
const gato4 = {
	nombre: "Valiente",
	duerme: true,
	edad: 10,
	enemigos: ["agua", "perros"],
	comer(comida) {
		return `${this.nombre} esta comiendo ${comida}`;
	},
	mostrarEnemigos() {
		return this.enemigos.forEach((item) => console.log(item));
	},
};

gato4.mostrarEnemigos();