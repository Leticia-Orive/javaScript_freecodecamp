//Comparación con el operador menor que
/* El operador menor que ( <) compara los valores de dos números. Si el número de la izquierda es menor que el número de la derecha, devuelve true. De lo contrario, vuelve false. Al igual que el operador de igualdad, el operador menor que convierte los tipos de datos al comparar.

Ejemplos

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Agregue el operador menor que a las líneas indicadas para que las declaraciones de retorno tengan sentido.

*/
//Ejercicio
/* testLessThan(0) debe devolver la cadenaUnder 25
testLessThan(24) debe devolver la cadenaUnder 25
testLessThan(25) debe devolver la cadenaUnder 55
testLessThan(54) debe devolver la cadenaUnder 55
testLessThan(55) debe devolver la cadena55 or Over
testLessThan(99) debe devolver la cadena55 or Over
Debes usar el < operador al menos dos veces*/

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10));
