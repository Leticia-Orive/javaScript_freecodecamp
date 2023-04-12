//Iterar números impares con un bucle For
/* Los bucles for no tienen que iterar uno a la vez. Cambiando nuestro final-expression, podemos contar por números pares.

Comenzaremos en i = 0y repetiremos while i < 10. Incrementaremos ien 2 cada ciclo con i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArrayahora contendrá [0, 2, 4, 6, 8]. Cambiemos nuestro initializationpara que podamos contar por números impares.

Empuje los números impares del 1 al 9 para myArrayusar un for bucle.*/
//Ejercicio
/* Deberías estar usando un forbucle para esto.
myArray debe igualar [1, 3, 5, 7, 9].*/

// Setup
const myArray = [];

// Only change code below this line
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
