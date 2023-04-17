//Ordenar una matriz alfabéticamente usando el método de clasificación
/* El sortmétodo ordena los elementos de una matriz según la función de devolución de llamada.

Por ejemplo:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
Esto devolvería el valor [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
Esto devolvería el valor ['z', 's', 'l', 'h', 'b'].

El método de clasificación predeterminado de JavaScript es por valor de punto Unicode de cadena, lo que puede arrojar resultados inesperados. Por lo tanto, se recomienda proporcionar una función de devolución de llamada para especificar cómo ordenar los elementos de la matriz. Cuando compareFunctionse proporciona una función de devolución de llamada de este tipo, normalmente llamada , los elementos de la matriz se ordenan de acuerdo con el valor de retorno de compareFunction: If compareFunction(a,b)devuelve un valor menor que 0 para dos elementos ay b, entonces avendrá antes de b. If compareFunction(a,b)devuelve un valor mayor que 0 para dos elementos ay b, entonces bvendrá antes de a. Si compareFunction(a,b)devuelve un valor igual a 0 para dos elementos ay b, entonces ay bpermanecerá sin cambios.

Use el sortmétodo en la alphabeticalOrderfunción para ordenar los elementos arren orden alfabético. La función debe devolver la matriz ordenada.*/
//Ejercicio
/* Su código debe usar el sortmétodo.
alphabeticalOrder(["a", "d", "c", "a", "z", "g"])debería ["a", "a", "c", "d", "g", "z"]volver
alphabeticalOrder(["x", "h", "a", "m", "n", "m"])debería ["a", "h", "m", "m", "n", "x"]volver
alphabeticalOrder(["a", "a", "a", "a", "x", "t"])debería ["a", "a", "a", "a", "t", "x"]volver*/

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
