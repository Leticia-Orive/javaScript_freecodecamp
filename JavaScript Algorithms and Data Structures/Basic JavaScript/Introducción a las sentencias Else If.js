//Introducción a las sentencias Else If
/* Si tiene varias condiciones que deben abordarse, puede encadenar ifdeclaraciones junto con else ifdeclaraciones.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Convierta la lógica para usar else if sentencias.*/
//Ejercicio
/* Debe tener al menos dos else declaraciones
Debe tener al menos dos if declaraciones
Debe tener llaves de cierre y apertura para cada if elsebloque de código.
testElseIf(0)debe devolver la cadenaSmaller than 5
testElseIf(5)debe devolver la cadenaBetween 5 and 10
testElseIf(7)debe devolver la cadenaBetween 5 and 10
testElseIf(10)debe devolver la cadenaBetween 5 and 10
testElseIf(12)debe devolver la cadenaGreater than 10*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
