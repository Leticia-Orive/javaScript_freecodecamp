//Comparaciones con el operador lógico Y
/* A veces necesitará probar más de una cosa a la vez. El operador lógico and&& ( ) devuelve truesi y solo si los operandos a la izquierda y a la derecha son verdaderos.

El mismo efecto podría lograrse anidando una ifdeclaración dentro de otra if.

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
Este código devolverá Yessi numes mayor que 5y menor que 10. La misma lógica se puede escribir con el operador lógico y .

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Reemplace las dos declaraciones if con una declaración, usando el &&operador, que devolverá la cadena Yessi vales menor o igual que 50y mayor o igual que 25. De lo contrario, devolverá la cadena No.*/
//Ejercicio
/* Deberías usar el &&operador una vez
Solo debe tener una ifdeclaración
testLogicalAnd(0) debe devolver la cadenaNo
testLogicalAnd(24) debe devolver la cadenaNo
testLogicalAnd(25) debe devolver la cadenaYes
testLogicalAnd(30) debe devolver la cadenaYes
testLogicalAnd(50) debe devolver la cadenaYes
testLogicalAnd(51) debe devolver la cadenaNo
testLogicalAnd(75) debe devolver la cadenaNo
testLogicalAnd(80) debe devolver la cadenaNo*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
