//Establecer parámetros predeterminados para sus funciones
/* Para ayudarnos a crear funciones más flexibles, ES6 introduce parámetros predeterminados para las funciones.

Mira este código:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
La consola mostrará las cadenas Hello Johny Hello Anonymous.

El parámetro predeterminado se activa cuando no se especifica el argumento (no está definido). Como puede ver en el ejemplo anterior, el parámetro namerecibirá su valor predeterminado Anonymouscuando no proporcione un valor para el parámetro. Puede agregar valores predeterminados para tantos parámetros como desee.

Modifique la función incrementagregando parámetros predeterminados para que agregue 1 numbersi valueno se especifica.*/
//Ejercicio
/* El resultado de increment(5, 2)debería ser 7.
El resultado de increment(5)debería ser 6.
1 Se debe usar un valor de parámetro predeterminado de para value.*/
// Only change code below this line
//const increment = (number, value ) => number + value;
// Only change code above this line
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
