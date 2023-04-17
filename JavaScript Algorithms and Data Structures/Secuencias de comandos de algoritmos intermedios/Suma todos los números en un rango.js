//Suma todos los números en un rango
/* Le pasaremos una matriz de dos números. Devuelve la suma de esos dos números más la suma de todos los números entre ellos. El número más bajo no siempre vendrá primero.

Por ejemplo, sumAll([4,1])debe regresar 10porque la suma de todos los números entre 1 y 4 (ambos inclusive) es 10.*/
//Ejercicio
/* sumAll([1, 4])debe devolver un número.
sumAll([1, 4])debe devolver 10.
sumAll([4, 1])debe devolver 10.
sumAll([5, 10])debe devolver 45.
sumAll([10, 5])debe devolver 45.*/

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);
