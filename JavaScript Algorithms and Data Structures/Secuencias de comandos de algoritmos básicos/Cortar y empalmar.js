//Cortar y empalmar
/* Se le dan dos matrices y un índice.
Copie cada elemento de la primera matriz en la segunda matriz, en orden.
Comience a insertar elementos en el índice nde la segunda matriz.
Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.*/
//Ejercicio
/*frankenSplice([1, 2, 3], [4, 5], 1)debería [4, 1, 2, 3, 5]volver
frankenSplice([1, 2], ["a", "b"], 1)debería ["a", 1, 2, "b"]volver
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)debería ["head", "shoulders", "claw", "tentacle", "knees", "toes"]volver
Todos los elementos de la primera matriz deben agregarse a la segunda matriz en su orden original. frankenSplice([1, 2, 3, 4], [], 0)debería [1, 2, 3, 4]volver
La primera matriz debe permanecer igual después de que se ejecute la función.
La segunda matriz debe permanecer igual después de que se ejecute la función. */

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
