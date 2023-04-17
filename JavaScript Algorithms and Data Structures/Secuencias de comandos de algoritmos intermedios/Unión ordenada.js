//Unión ordenada
/*Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden de las matrices proporcionadas originalmente.

En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, pero sin duplicados en la matriz final.

Los números únicos deben clasificarse según su orden original, pero la matriz final no debe clasificarse en orden numérico.

Consulte las pruebas de aserción para ver ejemplos. */
//Ejercicio
/*uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])debería [1, 3, 2, 5, 4]volver
uniteUnique([1, 2, 3], [5, 2, 1])debería [1, 2, 3, 5]volver
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])debería [1, 2, 3, 5, 4, 6, 7, 8]volver
uniteUnique([1, 3, 2], [5, 4], [5, 6])debería [1, 3, 2, 5, 4, 6]volver
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])debería [1, 3, 2, 5, 4]volver */

function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  const finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    // Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
