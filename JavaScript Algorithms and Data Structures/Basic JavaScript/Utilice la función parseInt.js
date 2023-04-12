//Utilice la función parseInt
/* La parseInt()función analiza una cadena y devuelve un número entero. Aquí hay un ejemplo:

const a = parseInt("007");
La función anterior convierte la cadena 007en un número entero 7. Si el primer carácter de la cadena no se puede convertir en un número, devuelve NaN.

Úselo parseInt()en la convertToIntegerfunción para que convierta la cadena de entrada stren un número entero y lo devuelva.*/
//Ejercicio
/* convertToInteger debería usar la parseInt()función
convertToInteger("56") debe devolver un número
convertToInteger("56") debería volver 56
convertToInteger("77") debería volver 77
convertToInteger("JamesBond") debería volverNaN*/
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
