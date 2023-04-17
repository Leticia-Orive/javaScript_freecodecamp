//mono fornido
/* Escriba una función que divida una matriz (primer argumento) en grupos de la longitud de size(segundo argumento) y los devuelva como una matriz bidimensional.*/
//Ejercicio
/* chunkArrayInGroups(["a", "b", "c", "d"], 2) debería [["a", "b"], ["c", "d"]] volver
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) debería [[0, 1, 2], [3, 4, 5]] volver
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) debería [[0, 1], [2, 3], [4, 5]] volver
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) debería [[0, 1, 2, 3], [4, 5]] volver
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) debería [[0, 1, 2], [3, 4, 5], [6]] volver
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) debería [[0, 1, 2, 3], [4, 5, 6, 7], [8]] volver
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) debería [[0, 1], [2, 3], [4, 5], [6, 7], [8]] volver*/

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
