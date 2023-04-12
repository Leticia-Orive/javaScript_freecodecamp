//Utilice el operador condicional (ternario)
/* El operador condicional , también llamado operador ternario , se puede usar como una expresión if-else de una línea.

La sintaxis es a ? b : c, donde aes la condición, bes el código que se ejecutará cuando la condición regrese truey ces el código que se ejecutará cuando la condición regrese false.

La siguiente función usa una if/elsedeclaración para verificar una condición:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
Esto se puede reescribir usando el operador condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Usa el operador condicional en la checkEqualfunción para verificar si dos números son iguales o no. La función debe devolver la cadena Equalo la cadena Not Equal.

*/
//Ejercicio
/* checkEqual debe usar el operador condicional
checkEqual(1, 2) debe devolver la cadenaNot Equal
checkEqual(1, 1) debe devolver la cadenaEqual
checkEqual(1, -1) debe devolver la cadenaNot Equal*/
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
