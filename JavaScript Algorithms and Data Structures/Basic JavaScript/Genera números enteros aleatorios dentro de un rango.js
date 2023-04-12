//Genera números enteros aleatorios dentro de un rango
/* En lugar de generar un número entero aleatorio entre cero y un número dado como hicimos antes, podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.

Para ello, definiremos un número mínimo miny un número máximo max.

Esta es la fórmula que usaremos. Tómese un momento para leerlo e intente comprender qué está haciendo este código:

Math.floor(Math.random() * (max - min + 1)) + min
Cree una función llamada randomRangeque tome un rango myMiny myMaxdevuelva un número entero aleatorio que sea mayor o igual que myMin, y menor o igual que myMax, inclusive.*/
//Ejercicio
/* El número aleatorio más bajo que puede generar randomRangedebe ser igual a su número mínimo, myMin.
El número aleatorio más alto que puede generar randomRangedebe ser igual a su número máximo, myMax.
El número aleatorio generado por randomRangedebe ser un número entero, no un decimal.
randomRangedebe usar tanto myMaxcomo myMin, y devolver un número aleatorio en su rango.*/

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// Only change code below this line.

const myRandom = randomRange(5, 15);

console.log(myRandom);
