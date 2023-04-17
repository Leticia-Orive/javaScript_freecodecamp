//Agregue elementos al final de una matriz usando concat en lugar de empujar
/* La programación funcional tiene que ver con la creación y el uso de funciones que no mutan.

El último desafío introdujo el concatmétodo como una forma de fusionar arreglos en un nuevo arreglo sin mutar los arreglos originales. Comparar concatcon el pushmétodo. pushagrega elementos al final de la misma matriz a la que se llama, lo que muta esa matriz. Aquí hay un ejemplo:

const arr = [1, 2, 3];
arr.push(4, 5, 6);
arrtendría un valor modificado de [1, 2, 3, 4, 5, 6], que no es la forma de programación funcional.

concatofrece una forma de fusionar nuevos elementos al final de una matriz sin efectos secundarios de mutación.

Cambie la nonMutatingPushfunción para que se use concatpara fusionarse newItemhasta el final originalsin mutar originalo newItemmatrices. La función debe devolver una matriz.*/
//Ejercicio
/* Su código debe usar el concatmétodo.
Su código no debe usar el pushmétodo.
La first matriz no debe cambiar.
La second matriz no debe cambiar.
nonMutatingPush([1, 2, 3], [4, 5])debería [1, 2, 3, 4, 5]volver*/

function nonMutatingPush(original, newItem) {
  // Add your code below this line

  return original.concat(newItem);

  // Add your code above this line
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
