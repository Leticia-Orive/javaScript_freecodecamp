//Comparación con el Operador de Desigualdad Estricta
/* El operador de desigualdad estricta ( !==) es el opuesto lógico del operador de igualdad estricta. Significa "Estrictamente no igual" y regresa falsedonde regresaría la igualdad estricta truey viceversa . El operador de desigualdad estricta no convertirá tipos de datos.

Ejemplos

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Agregue el operador de desigualdad estricta a la ifdeclaración para que la función devuelva la cadena Not Equalcuando valno sea estrictamente igual a 17*/
//Ejercicio
/* testStrictNotEqual(17) debe devolver la cadenaEqual
testStrictNotEqual("17") debe devolver la cadenaNot Equal
testStrictNotEqual(12) debe devolver la cadenaNot Equal
testStrictNotEqual("bob") debe devolver la cadenaNot Equal
Debes usar el !==operador*/

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));
