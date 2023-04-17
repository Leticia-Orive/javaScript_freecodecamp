//Dónde pertenezco
/* Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debería regresar 1porque es mayor que 1(índice 0), pero menor que 2(índice 1).

Del mismo modo, getIndexToIns([20,3,5], 19) debería regresar 2porque una vez que se haya ordenado la matriz, se verá como [3,5,20]y 19es menor que 20(índice 2) y mayor que 5(índice 1).*/
//Ejercicio
/* getIndexToIns([10, 20, 30, 40, 50], 35) debería 3volver
getIndexToIns([10, 20, 30, 40, 50], 35)debe devolver un número.
getIndexToIns([10, 20, 30, 40, 50], 30) debería 2volver
getIndexToIns([10, 20, 30, 40, 50], 30)debe devolver un número.
getIndexToIns([40, 60], 50) debería 1volver
getIndexToIns([40, 60], 50)debe devolver un número.
getIndexToIns([3, 10, 5], 3) debería 0volver
getIndexToIns([3, 10, 5], 3)debe devolver un número.
getIndexToIns([5, 3, 20, 3], 5) debería 2volver
getIndexToIns([5, 3, 20, 3], 5)debe devolver un número.
getIndexToIns([2, 20, 10], 19) debería 2volver
getIndexToIns([2, 20, 10], 19)debe devolver un número.
getIndexToIns([2, 5, 10], 15) debería 3volver
getIndexToIns([2, 5, 10], 15)debe devolver un número.
getIndexToIns([], 1) debería 0volver
getIndexToIns([], 1)debe devolver un número.*/

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
