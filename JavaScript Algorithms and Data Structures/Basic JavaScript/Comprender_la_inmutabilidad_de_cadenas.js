//Comprender la inmutabilidad de cadenas
/*En JavaScript, Stringlos valores son inmutables , lo que significa que no se pueden modificar una vez creados.

Por ejemplo, el siguiente código generará un error porque la letra Bde la cadena Bobno se puede cambiar a la letra J:

let myStr = "Bob";
myStr[0] = "J";
Tenga en cuenta que esto no significa que myStrno se pueda reasignar. La única forma de cambiar myStrsería asignarle un nuevo valor, así:

let myStr = "Bob";
myStr = "Job";
Corrija la asignación para myStrque contenga el valor de cadena del Hello Worlduso del enfoque que se muestra en el ejemplo anterior.*/
//Ejercicio
/*myStr debe tener un valor de la cadena Hello World.
No debe cambiar el código sobre el comentario especificado. */
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World";
// Only change code above this line
myStr[0] = "H"; // Change this line
