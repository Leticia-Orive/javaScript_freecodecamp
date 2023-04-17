//Verificar el constructor de un objeto con instanceof
/* Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript brinda una manera conveniente de verificar esto con el instanceofoperador. instanceofle permite comparar un objeto con un constructor, devolviendo trueo falseen función de si ese objeto se creó o no con el constructor. Aquí hay un ejemplo:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
Este instanceofmétodo devolvería true.

Si se crea un objeto sin usar un constructor, instanceofse verificará que no sea una instancia de ese constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
Este instanceofmétodo devolvería false.

Cree una nueva instancia del Houseconstructor, llámelo myHousey pase una cantidad de dormitorios. Luego, use instanceofpara verificar que es una instancia de House.*/
//Ejercicio
/* myHouse debe tener un numBedroomsatributo establecido en un número.
Debe verificar que myHousees una instancia de Houseuso del instanceofoperador.*/

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(5);
myHouse instanceof House;
