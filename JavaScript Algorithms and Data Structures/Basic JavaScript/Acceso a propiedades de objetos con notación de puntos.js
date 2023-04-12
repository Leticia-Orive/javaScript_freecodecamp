//Acceso a propiedades de objetos con notación de puntos
/* Hay dos formas de acceder a las propiedades de un objeto: notación de puntos ( .) y notación de corchetes ( []), similar a una matriz.

La notación de puntos es lo que usa cuando sabe el nombre de la propiedad a la que intenta acceder con anticipación.

Aquí hay una muestra del uso de la notación de puntos ( .) para leer la propiedad de un objeto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1valtendría un valor de la cadena val1y prop2valtendría un valor de la cadena val2.

Lea los valores de propiedad del testObjuso de la notación de puntos. Establezca la variable hatValue igual a la propiedad del objeto hat y establezca la variable shirtValue igual a la propiedad del objeto shirt.

*/
//Ejercicio
/* hatValuedebería ser una cadena
El valor de hatValuedebe ser la cadena ballcap
shirtValue debería ser una cadena
El valor de shirtValue debe ser la cadena jersey
Deberías usar la notación de puntos dos veces*/

// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line
