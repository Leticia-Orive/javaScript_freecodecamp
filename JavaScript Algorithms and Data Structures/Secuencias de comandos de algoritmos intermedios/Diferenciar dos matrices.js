//Diferenciar dos matrices
/* Compare dos matrices y devuelva una nueva matriz con cualquier elemento que solo se encuentre en una de las dos matrices dadas, pero no en ambas. En otras palabras, devuelva la diferencia simétrica de las dos matrices.

Nota: puede devolver la matriz con sus elementos en cualquier orden.*/
//Ejercicio
/* diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])debe devolver una matriz.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debería ["pink wool"]volver
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debe devolver una matriz con un elemento.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debería ["diorite", "pink wool"]volver
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debe devolver una matriz con dos elementos.
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]debería []volver
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]debería devolver una matriz vacía.
[1, 2, 3, 5], [1, 2, 3, 4, 5]debería [4]volver
[1, 2, 3, 5], [1, 2, 3, 4, 5]debe devolver una matriz con un elemento.
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]debería ["piglet", 4]volver
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]debe devolver una matriz con dos elementos.
[], ["snuffleupagus", "cookie monster", "elmo"]debería ["snuffleupagus", "cookie monster", "elmo"]volver
[], ["snuffleupagus", "cookie monster", "elmo"]debe devolver una matriz con tres elementos.
[1, "calf", 3, "piglet"], [7, "filly"]debería [1, "calf", 3, "piglet", 7, "filly"]volver
[1, "calf", 3, "piglet"], [7, "filly"]debe devolver una matriz con seis elementos.*/
function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
