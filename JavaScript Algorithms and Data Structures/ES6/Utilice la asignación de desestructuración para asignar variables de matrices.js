//Utilice la asignación de desestructuración para asignar variables de matrices
/* ES6 hace que la desestructuración de matrices sea tan fácil como la desestructuración de objetos.

Una diferencia clave entre el operador de distribución y la desestructuración de la matriz es que el operador de distribución desempaqueta todo el contenido de una matriz en una lista separada por comas. En consecuencia, no puede elegir qué elementos desea asignar a las variables.

Desestructurar una matriz nos permite hacer exactamente eso:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
La consola mostrará los valores de ay bcomo 1, 2.

A la variable ase le asigna el primer valor de la matriz y bse le asigna el segundo valor de la matriz. También podemos acceder al valor en cualquier índice en una matriz con desestructuración usando comas para alcanzar el índice deseado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
La consola mostrará los valores de a, by cas 1, 2, 5.

Use la asignación de desestructuración para intercambiar los valores de ay bpara que areciba el valor almacenado en b, y breciba el valor almacenado en a.*/
//Ejercicio
/* El valor de adebería ser 6, después del intercambio.
El valor de bdebería ser 8, después del intercambio.
Debe usar la desestructuración de matrices para intercambiar a y b.*/

let a = 8,
  b = 6;

// Only change code below this line
[a, b] = [b, a];
