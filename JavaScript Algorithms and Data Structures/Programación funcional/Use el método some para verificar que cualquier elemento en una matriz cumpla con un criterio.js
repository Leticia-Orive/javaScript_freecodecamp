//Use el método some para verificar que cualquier elemento en una matriz cumpla con un criterio
/* El somemétodo funciona con matrices para verificar si algún elemento pasa una prueba en particular. Devuelve un valor booleano, truesi alguno de los valores cumple los criterios, falsesi no.

Por ejemplo, el siguiente código comprobaría si algún elemento de la numbersmatriz es inferior a 10:

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
El somemétodo devolvería true.

Use el somemétodo dentro de la checkPositivefunción para verificar si algún elemento arres positivo. La función debe devolver un valor booleano.*/
//Ejercicio
/* Su código debe usar el somemétodo.
checkPositive([1, 2, 3, -4, 5])debería true volver
checkPositive([1, 2, 3, 4, 5])debería true volver
checkPositive([-1, -2, -3, -4, -5])debería false volver*/
function checkPositive(arr) {
  return arr.some((elem) => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);
