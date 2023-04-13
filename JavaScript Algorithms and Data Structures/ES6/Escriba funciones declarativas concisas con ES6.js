//Escriba funciones declarativas concisas con ES6
/* Al definir funciones dentro de objetos en ES5, debemos usar la palabra clave functionde la siguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Con ES6, puede eliminar la functionpalabra clave y los dos puntos al definir funciones en objetos. He aquí un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refactorice la función setGeardentro del objeto bicyclepara usar la sintaxis abreviada descrita anteriormente.

*/
//Ejercicio
/* No se debe utilizar la expresión de función tradicional.
setGear debe ser una función declarativa.
bicycle.setGear(48) debe cambiar el gearvalor a 48.*/

/*// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear); */

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};
