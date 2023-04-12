//Comparación con el operador menor o igual que
/* El operador menor o igual que ( <=) compara los valores de dos números. Si el número de la izquierda es menor o igual que el número de la derecha, devuelve true. Si el número de la izquierda es mayor que el número de la derecha, devuelve false. Al igual que el operador de igualdad, el operador menor o igual que convierte los tipos de datos.

Ejemplos

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Agregue el operador menor o igual que a las líneas indicadas para que las declaraciones de retorno tengan sentido.*/
//Ejercicio
/* testLessOrEqual(0) debe devolver la cadenaSmaller Than or Equal to 12
testLessOrEqual(11) debe devolver la cadenaSmaller Than or Equal to 12
testLessOrEqual(12) debe devolver la cadenaSmaller Than or Equal to 12
testLessOrEqual(23) debe devolver la cadenaSmaller Than or Equal to 24
testLessOrEqual(24) debe devolver la cadenaSmaller Than or Equal to 24
testLessOrEqual(25) debe devolver la cadenaMore Than 24
testLessOrEqual(55) debe devolver la cadenaMore Than 24
Debes usar el <=operador al menos dos veces*/
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10));
