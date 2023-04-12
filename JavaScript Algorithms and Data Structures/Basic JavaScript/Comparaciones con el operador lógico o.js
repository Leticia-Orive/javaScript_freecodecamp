// Comparaciones con el operador lógico o
/* El operador lógico o || ( ) devuelve truesi alguno de los operandos es true. De lo contrario, vuelve false.

El operador lógico o se compone de dos símbolos de tubería: ( ||). Por lo general, esto se puede encontrar entre las teclas Retroceso y Intro.

El patrón a continuación debería parecerle familiar de los puntos de ruta anteriores.

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
Este código devolverá Yessi numestá entre 5y 10( 5e 10incluido). La misma lógica se puede escribir con el operador lógico o .

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine las dos ifdeclaraciones en una declaración que devuelve la cadena Outsidesi valno está entre 10y 20, inclusive. De lo contrario, devuelve la cadena Inside.*/
//Ejercicio
/* Deberías usar el ||operador una vez
Solo debe tener una ifdeclaración
testLogicalOr(0) debe devolver la cadenaOutside
testLogicalOr(9) debe devolver la cadenaOutside
testLogicalOr(10) debe devolver la cadenaInside
testLogicalOr(15) debe devolver la cadenaInside
testLogicalOr(19) debe devolver la cadenaInside
testLogicalOr(20) debe devolver la cadenaInside
testLogicalOr(21) debe devolver la cadenaOutside
testLogicalOr(25) debe devolver la cadenaOutside*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
