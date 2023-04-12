//Iterar con bucles while de JavaScript
/* Puede ejecutar el mismo código varias veces mediante un bucle.

El primer tipo de bucle que aprenderemos se llama bucle whileporque se ejecuta mientras una condición específica es verdadera y se detiene una vez que esa condición ya no es verdadera.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
En el ejemplo de código anterior, el whilebucle se ejecutará 5 veces y agregará los números del 0 al 4 a ourArray.

Intentemos hacer funcionar un bucle while insertando valores en una matriz.

Agregue los números del 5 al 0 (inclusive) en orden descendente para myArrayusar un whilebucle.*/
//Ejercicio
/* Deberías estar usando un whilebucle para esto.
myArray debe igualar [5, 4, 3, 2, 1, 0].*/

// Setup
const myArray = [];

// Only change code below this line.
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
