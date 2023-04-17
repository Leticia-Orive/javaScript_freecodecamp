//Gorila falso
/* Elimina todos los valores falsos de una matriz. Devuelve una nueva matriz; no cambie la matriz original.
Los valores falsos en JavaScript son false, null, 0, "", undefinedy NaN.
Sugerencia: Intente convertir cada valor a un valor booleano.*/
//Ejercicio
/* bouncer([7, "ate", "", false, 9])debería [7, "ate", 9] volver
bouncer(["a", "b", "c"])debería ["a", "b", "c"] volver
bouncer([false, null, 0, NaN, undefined, ""])debería [] volver
bouncer([null, NaN, 1, 2, undefined])debería [1, 2] volver
No debes mutar arr.*/

function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}
