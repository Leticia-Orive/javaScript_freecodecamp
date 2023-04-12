// Comparación con el operador mayor que
/* El operador mayor que ( >) compara los valores de dos números. Si el número de la izquierda es mayor que el número de la derecha, devuelve true. De lo contrario, vuelve false.

Al igual que el operador de igualdad, el operador mayor que convertirá tipos de datos de valores al comparar.

Ejemplos

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
Agregue el operador mayor que a las líneas indicadas para que las declaraciones de retorno tengan sentido.*/
//Ejercicio
/* testGreaterThan(0) debe devolver la cadena10 or Under
testGreaterThan(10) debe devolver la cadena10 or Under
testGreaterThan(11) debe devolver la cadenaOver 10
testGreaterThan(99) debe devolver la cadenaOver 10
testGreaterThan(100) debe devolver la cadenaOver 10
testGreaterThan(101) debe devolver la cadenaOver 100
testGreaterThan(150) debe devolver la cadenaOver 100
Debes usar el >operador al menos dos veces*/

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));
