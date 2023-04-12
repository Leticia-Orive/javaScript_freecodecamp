//Comparación con el Operador de Desigualdad
/* El operador de desigualdad ( !=) es lo opuesto al operador de igualdad. Significa no igual y vuelve falsedonde volvería la igualdad truey viceversa . Al igual que el operador de igualdad, el operador de desigualdad convertirá tipos de datos de valores al comparar.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Agregue el operador de desigualdad !=en la ifinstrucción para que la función devuelva la cadena Not Equalcuando valno sea equivalente a 99.*/
//Ejercicio
/* testNotEqual(99) debe devolver la cadenaEqual
testNotEqual("99") debe devolver la cadenaEqual
testNotEqual(12) debe devolver la cadenaNot Equal
testNotEqual("12") debe devolver la cadenaNot Equal
testNotEqual("bob") debe devolver la cadenaNot Equal
Debes usar el !=operador*/
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));
