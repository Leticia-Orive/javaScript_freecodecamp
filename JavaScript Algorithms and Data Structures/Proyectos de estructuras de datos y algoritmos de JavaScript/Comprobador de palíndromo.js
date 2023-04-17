//Comprobador de palíndromo
/* Devuelve true si la cadena dada es un palíndromo. De lo contrario, regresa false .

Un palíndromo es una palabra u oración que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, el caso y el espacio.

Nota: deberá eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en el mismo caso (minúsculas o mayúsculas) para verificar si hay palíndromos.

Pasaremos cadenas con diferentes formatos, como racecar, RaceCary race CARentre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2y 2_A3*3#A2.*/
//Ejercicios
/* palindrome("eye")debe devolver un valor booleano.
palindrome("eye")debería true volver
palindrome("_eye")debería true volver
palindrome("race car")debería true volver
palindrome("not a palindrome")debería false volver
palindrome("A man, a plan, a canal. Panama")debería true volver
palindrome("never odd or even")debería true volver
palindrome("nope")debería false volver
palindrome("almostomla")debería false volver
palindrome("My age is 0, 0 si ega ym.")debería true volver
palindrome("1 eye for of 1 eye.")debería false volver
palindrome("0_0 (: /-\ :) 0-0")debería true volver
palindrome("five|\_/|four")debería false volver*/

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
palindrome("1 eye for of 1 eye.");
