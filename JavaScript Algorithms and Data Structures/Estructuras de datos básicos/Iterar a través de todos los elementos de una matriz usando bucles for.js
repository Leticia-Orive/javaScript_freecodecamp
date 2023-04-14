//Iterar a través de todos los elementos de una matriz usando bucles for
/* A veces, cuando se trabaja con matrices, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular una matriz en función de qué elementos de datos cumplan con un determinado conjunto de criterios. JavaScript ofrece varios métodos integrados, cada uno de los cuales itera sobre las matrices de maneras ligeramente diferentes para lograr diferentes resultados (como every(), forEach(), map(), etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un forbucle simple.

Considera lo siguiente:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
Usando un forbucle, esta función itera y accede a cada elemento de la matriz, y lo somete a una prueba simple que hemos creado. De esta forma, hemos determinado fácil y programáticamente qué elementos de datos son mayores que 10, y hemos devuelto una nueva matriz, [12, 14, 80]que contiene esos elementos.

Hemos definido una función, filteredArray, que toma arr, una matriz anidada y elemcomo argumentos, y devuelve una nueva matriz. elemrepresenta un elemento que puede o no estar presente en una o más de las matrices anidadas dentro de arr. Modifique la función, utilizando un forbucle, para devolver una versión filtrada de la matriz pasada de modo que se elimine cualquier matriz anidada dentro de arrla que contiene .elem*/
//Ejercicio
/* filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) debería volver[[10, 8, 3], [14, 6, 23]]
filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) debería volver[["flutes", 4]]
filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") debería volver[["amy", "beth", "sam"]]
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) debería volver[]
La filteredArray función debe utilizar un forbucle.*/

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
