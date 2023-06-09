//Devolver los números más grandes en matrices
/* Devuelve una matriz que consiste en el número más grande de cada subarreglo proporcionado. Para simplificar, la matriz proporcionada contendrá exactamente 4 sub-matrices.

Recuerde, puede iterar a través de una matriz con un bucle for simple y acceder a cada miembro con sintaxis de matriz arr[i].*/
//Ejercicio
/* largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])  debe devolver una matriz.
esperando :largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])debería [27, 5, 39, 1001] volver
esperando :largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])debería [9, 35, 97, 1000000] volver
esperando :largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])debería [25, 48, 21, -3] volver*/

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
