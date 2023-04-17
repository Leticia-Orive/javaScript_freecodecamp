//Déjalo caer
/* Dada la matriz arr, itere y elimine cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función funcregrese truecuando el elemento iterado pase a través de él.

Luego, devuelva el resto de la matriz una vez que se cumpla la condición; de lo contrario, arrdebe devolverse como una matriz vacía.*/
//Ejercicio
/* dropElements([1, 2, 3, 4], function(n) {return n >= 3;})debería [3, 4]volver
dropElements([0, 1, 0, 1], function(n) {return n === 1;})debería [1, 0, 1]volver
dropElements([1, 2, 3], function(n) {return n > 0;})debería [1, 2, 3]volver
dropElements([1, 2, 3, 4], function(n) {return n > 5;})debería []volver
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})debería [7, 4]volver
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})debería [3, 9, 2]volver*/
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
