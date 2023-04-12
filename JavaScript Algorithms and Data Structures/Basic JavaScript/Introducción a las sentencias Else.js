//Introducción a las sentencias Else
/* Cuando una condición para una ifdeclaración es verdadera, se ejecuta el bloque de código que la sigue. ¿Qué pasa cuando esa condición es falsa? Normalmente no pasaría nada. Con una elsedeclaración, se puede ejecutar un bloque de código alternativo.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine las if declaraciones en una sola if/else declaración.*/
//Ejercicio
/* Solo debe tener una if declaración en el editor.
Debes usar una else declaración
testElse(4) debe devolver la cadena5 or Smaller
testElse(5) debe devolver la cadena5 or Smaller
testElse(6) debe devolver la cadenaBigger than 5
testElse(10) debe devolver la cadenaBigger than 5
No debe cambiar el código por encima o por debajo de los comentarios especificados.*/
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
