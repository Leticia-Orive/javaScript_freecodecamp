//Desestructuración mediante elementos de descanso
/*En algunas situaciones que involucran la desestructuración de arreglos, es posible que deseemos recopilar el resto de los elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostraría los valores 1, 2y [3, 4, 5, 7].

Variables ay btome el primer y segundo valor de la matriz. Después de eso, debido a la presencia de la sintaxis rest, arrobtiene el resto de los valores en forma de matriz. El elemento resto solo funciona correctamente como última variable de la lista. Como en, no puede usar la sintaxis de descanso para capturar un subarreglo que omite el último elemento del arreglo original.

Use una asignación de desestructuración con la sintaxis rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo()debe devolver un subarreglo del arreglo original listcon los primeros dos elementos omitidos. */
//Ejercicio
/* removeFirstTwo([1, 2, 3, 4, 5])debiera ser[3, 4, 5]
removeFirstTwo() no debe modificar list
Array.slice() No debería ser usado.
listSe debe utilizar la desestructuración .*/

/*
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source); */

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
