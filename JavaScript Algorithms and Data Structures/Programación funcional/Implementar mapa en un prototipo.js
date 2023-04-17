//Implementar mapa en un prototipo
/*Como ha visto al aplicar Array.prototype.map(), o simplemente map()antes, el mapmétodo devuelve una matriz de la misma longitud que la que se invocó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga.

En otras palabras, mapes una función pura y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

Puede aprender mucho sobre el mapmétodo si implementa su propia versión. Se recomienda utilizar un forbucle o Array.prototype.forEach().

Escribe el tuyo propio Array.prototype.myMap(), que debería comportarse exactamente como Array.prototype.map(). No debe utilizar el método incorporado map. ArraySe puede acceder a la instancia en el myMapmétodo usando this. */
//Ejercicio
/* [23, 65, 98, 5, 13].myMap(item => item * 2)debe igualar [46, 130, 196, 10, 26].
["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())debería ["NAOMI", "QUINCY", "CAMPERBOT"]volver
[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])debería [1, 2, 5, 2, 1]volver
Su código no debe usar el mapmétodo.*/

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};
