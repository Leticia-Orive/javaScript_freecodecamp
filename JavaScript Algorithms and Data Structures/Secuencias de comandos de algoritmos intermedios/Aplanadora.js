//Aplanadora
/* Aplane una matriz anidada. Debe tener en cuenta los diferentes niveles de anidamiento.*/
//Ejercicio
/* steamrollArray([[["a"]], [["b"]]])debería ["a", "b"]volver
steamrollArray([1, [2], [3, [[4]]]])debería [1, 2, 3, 4]volver
steamrollArray([1, [], [3, [[4]]]])debería [1, 3, 4]volver
steamrollArray([1, {}, [3, [[4]]]])debería [1, {}, 3, 4]volver
Su solución no debe usar los métodos Array.prototype.flat()o Array.prototype.flatMap().
No se deben utilizar variables globales.*/
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
