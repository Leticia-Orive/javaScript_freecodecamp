//Evite mutaciones y efectos secundarios mediante la programación funcional
/* Si aún no lo ha descubierto, el problema en el desafío anterior fue con la splicellamada en la tabClose()función. Desafortunadamente, splicecambia la matriz original a la que se llama, por lo que la segunda llamada usó una matriz modificada y arrojó resultados inesperados.

Este es un pequeño ejemplo de un patrón mucho más grande: llama a una  función en una variable, una matriz o un objeto, y la  función cambia la variable o algo en el objeto.

Uno de los principios básicos de la programación funcional es no cambiar las cosas. Los cambios conducen a errores. Es más fácil prevenir errores sabiendo que sus funciones no cambian nada, incluidos los argumentos de la  función o cualquier variable global.

El ejemplo anterior no tenía operaciones complicadas, pero el splicemétodo cambió la matriz original y resultó en un error.

Recuerde que en la programación funcional, cambiar o alterar cosas se llama mutación , y el resultado se llama efecto secundario . Una función, idealmente, debería ser una  función pura , lo que significa que no causa ningún efecto secundario.

Tratemos de dominar esta disciplina y no alterar ninguna variable u objeto en nuestro código.

Complete el código de la  función incrementerpara que devuelva el valor de la variable global fixedValueaumentado en uno.*/
//Ejercicio
/* Su  función incrementerno debe cambiar el valor de fixedValue(que es 4).
Su incrementer función debe devolver un valor que sea uno más grande que el fixedValuevalor.
Su incrementer función debe devolver un valor basado en el fixedValue valor de la variable global.*/

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1;

  // Only change code above this line
}

// the global variable

let newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
