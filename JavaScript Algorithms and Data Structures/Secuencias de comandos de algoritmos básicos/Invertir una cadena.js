//Invertir una cadena
/* Invierta la cadena proporcionada y devuelva la cadena invertida.

Por ejemplo, "hello"debería convertirse en "olleh".*/
//Ejercicio
/* reverseString("hello") debe devolver una cadena.
reverseString("hello") debe devolver la cadena olleh.
reverseString("Howdy") debe devolver la cadena ydwoH.
reverseString("Greetings from Earth") debe devolver la cadena htra E morf sgniteerG.*/

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
