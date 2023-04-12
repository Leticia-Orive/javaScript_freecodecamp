//Manipular matrices con el método pop
/* Otra forma de cambiar los datos en una matriz es con la .pop()función.

.pop()se utiliza para extraer un valor del final de una matriz. Podemos almacenar este valor extraído asignándolo a una variable. En otras palabras, .pop()elimina el último elemento de una matriz y devuelve ese elemento.

Cualquier tipo de entrada se puede extraer de una matriz: números, cadenas, incluso matrices anidadas.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
El primero console.logmostrará el valor 6y el segundo mostrará el valor [1, 4].

Utilice la .pop()función para eliminar el último elemento myArrayy asignar el valor extraído a una nueva variable, removedFromMyArray.*/
//Ejercicio
/* myArray solo debe contener [["John", 23]].
Deberías usar pop()en myArray.
removedFromMyArraysolo debe contener ["cat", 2].*/
// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = myArray.pop();
console.log(myArray);
