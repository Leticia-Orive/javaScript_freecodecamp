//Combine dos arreglos usando el método concat
/* Concatenación significa unir elementos de extremo a extremo. JavaScript ofrece el concatmétodo tanto para cadenas como para matrices que funcionan de la misma manera. Para las matrices, se llama al método en uno, luego se proporciona otra matriz como argumento para concat, que se agrega al final de la primera matriz. Devuelve una nueva matriz y no muta ninguna de las matrices originales. Aquí hay un ejemplo:

[1, 2, 3].concat([4, 5, 6]);
La matriz devuelta sería [1, 2, 3, 4, 5, 6].

Use el concatmétodo en la nonMutatingConcatfunción para concatenar attachhasta el final de original. La función debe devolver la matriz concatenada.*/
//Ejercicio
/* Su código debe usar el concatmétodo.
La firstmatriz no debe cambiar.
La secondmatriz no debe cambiar.
nonMutatingConcat([1, 2, 3], [4, 5]) debería [1, 2, 3, 4, 5]volver*/

function nonMutatingConcat(original, attach) {
  // Add your code below this line

  return original.concat(attach);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
