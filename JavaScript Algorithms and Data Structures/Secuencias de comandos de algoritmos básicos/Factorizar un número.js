//Factorizar un número
/* Devuelve el factorial del entero proporcionado.

Si el entero se representa con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales a menudo se representan con la notación abreviadan!

Por ejemplo:5! = 1 * 2 * 3 * 4 * 5 = 120

Solo se proporcionarán a la función números enteros mayores o iguales a cero.*/
//Ejercicio
/*factorialize(5) debe devolver un número.
factorialize(5) debería 120 volver
factorialize(10) debería 3628800 volver
factorialize(20) debería 2432902008176640000 volver
factorialize(0) debería 1 volver */

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);
