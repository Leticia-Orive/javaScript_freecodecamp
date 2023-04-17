//Devolver parte de una matriz usando el método de corte
/* El slicemétodo devuelve una copia de ciertos elementos de una matriz. Puede tomar dos argumentos, el primero proporciona el índice de dónde comenzar el segmento, el segundo es el índice de dónde finalizar el segmento (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio de la matriz hasta el final, que es una manera fácil de hacer una copia de toda la matriz. El slicemétodo no muta la matriz original, sino que devuelve una nueva.

Aquí hay un ejemplo:

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
newArraytendría el valor ["Dog", "Tiger"].

Use el slicemétodo en la sliceArrayfunción para devolver parte de la matriz dados los índices animproporcionados . La función debe devolver una matriz.beginSliceendSlice*/
//Ejercicio
/* Su código debe usar el slicemétodo.
La inputAnimvariable no debe cambiar.
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)debería ["Dog", "Tiger"]volver
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)debería ["Cat"]volver
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)debería ["Dog", "Tiger", "Zebra"]volver*/

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  return anim.slice(beginSlice, endSlice);
  // Add your code above this line
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
