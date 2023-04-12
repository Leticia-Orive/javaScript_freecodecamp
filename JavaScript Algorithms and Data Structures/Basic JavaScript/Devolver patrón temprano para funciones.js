//Devolver patrón temprano para funciones
/* Cuando returnse llega a una declaración, la ejecución de la función actual se detiene y el control vuelve a la ubicación de llamada.

Ejemplo

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
Lo anterior mostrará la cadena Helloen la consola y devolverá la cadena World. La cadena byebyenunca se mostrará en la consola, porque la función finaliza en la returndeclaración.

Modifique la función abTestpara que si ao bson menores que 0la función salga inmediatamente con un valor de undefined.

Sugerencia
Recuerde que undefinedes una palabra clave , no una cadena.*/
//Ejercicio
/* abTest(2, 2) debe devolver un número
abTest(2, 2) debería volver8
abTest(-2, 2) debería volverundefined
abTest(2, -2) debería volverundefined
abTest(2, 8) debería volver18
abTest(3, 3) debería volver12
abTest(0, 0) debería volver0*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(-2, 2));
