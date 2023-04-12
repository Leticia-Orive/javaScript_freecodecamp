//Iterar con JavaScript For Loops
/* Puede ejecutar el mismo código varias veces mediante un bucle.

El tipo más común de bucle de JavaScript se denomina forbucle porque se ejecuta una cantidad específica de veces.

Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:

for (a; b; c), donde aes la declaración de inicialización, bes la declaración de condición y ces la expresión final.

La declaración de inicialización se ejecuta una sola vez antes de que comience el ciclo. Por lo general, se usa para definir y configurar su variable de bucle.

La declaración de la condición se evalúa al comienzo de cada iteración del ciclo y continuará mientras se evalúe como true. Cuando la condición está falseal comienzo de la iteración, el bucle dejará de ejecutarse. Esto significa que si la condición comienza como falsa, su ciclo nunca se ejecutará.

La expresión final se ejecuta al final de cada iteración de ciclo, antes de la siguiente verificación de condición y, por lo general, se usa para incrementar o disminuir el contador de ciclo.

En el siguiente ejemplo, inicializamos con i = 0e iteramos mientras nuestra condición i < 5es verdadera. Incrementaremos ien 1cada iteración de bucle como i++nuestra expresión final.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArrayahora tendrá el valor [0, 1, 2, 3, 4].

Utilice un forbucle para insertar los valores del 1 al 5 en myArray.*/
//Ejercicio
/* Deberías estar usando un forbucle para esto.
myArray debe igualar [1, 2, 3, 4, 5].*/
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
