//Suma todos los números impares de Fibonacci
/* Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales que num.

Los primeros dos números en la secuencia de Fibonacci son 0 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los primeros siete números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10)debe volver 10porque todos los números impares de Fibonacci menores o iguales que 10son 1, 1, 3 y 5.*/
//Ejercicio
/* sumFibs(1)debe devolver un número.
sumFibs(1000)debe devolver 1785.
sumFibs(4000000)debe devolver 4613732.
sumFibs(4)debe regresar 5.
sumFibs(75024)debe devolver 60696.
sumFibs(75025)debe devolver 135721.*/
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
