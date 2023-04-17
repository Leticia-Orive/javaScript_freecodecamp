//Use el método every para verificar que cada elemento en una matriz cumpla con un criterio
/* El every método funciona con matrices para verificar si cada elemento pasa una prueba en particular. Devuelve un valor booleano, truesi todos los valores cumplen los criterios, falsesi no.

Por ejemplo, el siguiente código comprobaría si cada elemento de la numbersmatriz es inferior a 10:

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
El everymétodo volvería falseaquí.

Use el everymétodo dentro de la checkPositivefunción para verificar si cada elemento arres positivo. La función debe devolver un valor booleano.*/
//Ejercicio
/* Su código debe usar el everymétodo.
checkPositive([1, 2, 3, -4, 5])debería false volver
checkPositive([1, 2, 3, 4, 5])debería true volver
checkPositive([1, -2, 3, -4, 5])debería false volver*/

function checkPositive(arr) {
  // Add your code below this line

  return arr.every((val) => val > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
