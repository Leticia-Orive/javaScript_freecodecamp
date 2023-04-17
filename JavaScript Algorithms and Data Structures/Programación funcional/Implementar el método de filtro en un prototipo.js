//Implementar el método de filtro en un prototipo
/* Puede aprender mucho sobre el filtermétodo si implementa su propia versión. Se recomienda utilizar un forbucle o Array.prototype.forEach().

Escribe el tuyo propio Array.prototype.myFilter(), que debería comportarse exactamente como Array.prototype.filter(). No debe utilizar el método incorporado filter. ArraySe puede acceder a la instancia en el myFiltermétodo usando this.*/
//Ejercicio
/* [23, 65, 98, 5, 13].myFilter(item => item % 2)debe igualar [23, 65, 5, 13].
["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")debería ["naomi"]volver
[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)debería [1, 2, 5]volver
Su código no debe usar el filtermétodo.*/

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
