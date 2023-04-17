//Buscar y destruir
/* Se le proporcionará una matriz inicial (el primer argumento de la destroyerfunción), seguida de uno o más argumentos. Elimina todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que usar el argumentsobjeto.*/
//Ejercicio
/* destroyer([1, 2, 3, 1, 2, 3], 2, 3)debería [1, 1]volver
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)debería [1, 5, 1]volver
destroyer([3, 5, 1, 2, 2], 2, 3, 5)debería [1]volver
destroyer([2, 3, 2, 3], 2, 3)debería []volver
destroyer(["tree", "hamburger", 53], "tree", 53)debería ["hamburger"]volver
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")debería [12,92,65]volver*/

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
