//Suma todos los números primos
/* Un número primo es un número entero mayor que 1 con exactamente dos divisores: 1 y él mismo. Por ejemplo, el 2 es un número primo porque solo es divisible por 1 y 2. En cambio, el 4 no es primo porque es divisible por 1, 2 y 4.

Reescribe sumPrimespara que devuelva la suma de todos los números primos que son menores o iguales que num.*/
//Ejercicio
/* sumPrimes(10)debe devolver un número.
sumPrimes(10) debe volver 17.
sumPrimes(977) debe devolver 73156.*/

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}
