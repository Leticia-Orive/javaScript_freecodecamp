//Eliminar espacios en blanco desde el inicio y el final
/* A veces, los caracteres de espacio en blanco alrededor de las cadenas no se desean, pero están ahí. El procesamiento típico de cadenas es eliminar el espacio en blanco al principio y al final.

Escriba una expresión regular y use los métodos de cadena apropiados para eliminar los espacios en blanco al principio y al final de las cadenas.

Nota: El String.prototype.trim()método funcionaría aquí, pero deberá completar este desafío usando expresiones regulares.

*/
//Ejercicio
/* resultdebe ser igual a la cadenaHello, World!
Su solución no debe usar el String.prototype.trim()método.
La resultvariable no debe establecerse directamente en una cadena
El valor de la hellovariable no debe cambiarse.*/
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
