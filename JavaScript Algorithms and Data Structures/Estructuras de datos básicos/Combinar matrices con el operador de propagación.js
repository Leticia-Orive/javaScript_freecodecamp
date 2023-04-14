//Combinar matrices con el operador de propagación
/* Otra gran ventaja del operador de dispersión es la capacidad de combinar matrices, o de insertar todos los elementos de una matriz en otra, en cualquier índice. Con sintaxis más tradicionales, podemos concatenar arreglos, pero esto solo nos permite combinar arreglos al final de uno y al comienzo de otro. La sintaxis extendida hace que la siguiente operación sea extremadamente simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
thatArraytendría el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando la sintaxis extendida, acabamos de lograr una operación que hubiera sido más compleja y detallada si hubiéramos usado métodos tradicionales.

Hemos definido una función spreadOutque devuelve la variable sentence. Modifique la función utilizando el operador de propagación para que devuelva la matriz ['learning', 'to', 'code', 'is', 'fun'].*/
//Ejercicio
/* spreadOut debería volver["learning", "to", "code", "is", "fun"]
La spreadOut función debe utilizar sintaxis extendida*/
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
