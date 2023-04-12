//Anidamiento de bucles
/* Si tiene una matriz multidimensional, puede usar la misma lógica que el punto de referencia anterior para recorrer tanto la matriz como las sub-matrices. Aquí hay un ejemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
Esto da salida a cada subelemento de arruno en uno. Tenga en cuenta que para el bucle interno, estamos comprobando .lengthof arr[i], ya que arr[i]es en sí mismo una matriz.

Modifique la función multiplyAllpara que devuelva el producto de todos los números en los subconjuntos de arr.*/
//Ejercicio
/* multiplyAll([[1], [2], [3]]) debería volver 6
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) debería volver 5040
multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) debería volver 54*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

const product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);
