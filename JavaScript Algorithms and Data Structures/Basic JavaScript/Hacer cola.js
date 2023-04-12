//Hacer cola
/* En informática, una cola es una estructura de datos abstracta donde los elementos se mantienen en orden. Los elementos nuevos se pueden agregar al final de la cola y los elementos antiguos se quitan del frente de la cola.

Escriba una función nextInLineque tome una matriz ( arr) y un número ( item) como argumentos.

Agregue el número al final de la matriz, luego elimine el primer elemento de la matriz.

La nextInLinefunción debería devolver el elemento que se eliminó.*/
//Ejercicio
/* nextInLine([], 5) debe devolver un número.
nextInLine([], 1) debería volver 1
nextInLine([2], 1) debería volver 2
nextInLine([5,6,7,8,9], 1) debería volver 5
Después nextInLine(testArr, 10), testArr[4] debe ser 10*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();

  // Only change code above this line
  return item;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
