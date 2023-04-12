//Orden lógico en declaraciones If Else
/* El orden es importante en ifsus else ifdeclaraciones.

La función se ejecuta de arriba hacia abajo, por lo que deberá tener cuidado con la declaración que aparece primero.

Tome estas dos funciones como ejemplo.

Aquí está el primero:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
Y el segundo simplemente cambia el orden de las declaraciones:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
Si bien estas dos funciones parecen casi idénticas, si les pasamos un número a ambas, obtenemos resultados diferentes.

foo(0)
bar(0)
foo(0)devolverá la cadena Less than oney bar(0)devolverá la cadena Less than two.

Cambie el orden de la lógica en la función para que devuelva las declaraciones correctas en todos los casos.

*/
//Ejercicio
/* orderMyLogic(4) debe devolver la cadenaLess than 5
orderMyLogic(6) debe devolver la cadenaLess than 10
orderMyLogic(11) debe devolver la cadenaGreater than or equal to 10*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
// Change this value to test
console.log(orderMyLogic(3));
