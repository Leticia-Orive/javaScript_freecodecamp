//Mínimo común múltiplo
/* Encuentre el múltiplo común más pequeño de los parámetros proporcionados que se puede dividir uniformemente por ambos, así como por todos los números secuenciales en el rango entre estos parámetros.

El rango será una matriz de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentre el múltiplo común más pequeño de 1 y 3 que también sea divisible por todos los números entre 1 y 3. La respuesta aquí sería 6.

*/
//Ejercicio
/*smallestCommons([1, 5])debe devolver un número.
smallestCommons([1, 5])debe devolver 60.
smallestCommons([5, 1])debe devolver 60.
smallestCommons([2, 10])debe devolver 2520.
smallestCommons([1, 13])debe devolver 360360.
smallestCommons([23, 18])debe devolver 6056820. */
// Find the SCM of a range of numbers
function smallestCommons(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    const currentFactors = getPrimeFactors(i);
    for (let prime in currentFactors) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime];
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while (num % i === 0) {
      factors[i] = factors[i] ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}

smallestCommons([1, 5]);
