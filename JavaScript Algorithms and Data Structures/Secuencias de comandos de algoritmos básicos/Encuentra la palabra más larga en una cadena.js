//Encuentra la palabra más larga en una cadena
/* Devuelve la longitud de la palabra más larga en la oración proporcionada.

Su respuesta debe ser un número.*/
//Ejercicio
/* findLongestWordLength("The quick brown fox jumped over the lazy dog")debe devolver un número.
findLongestWordLength("The quick brown fox jumped over the lazy dog")debería 6 volver
findLongestWordLength("May the force be with you")debería 5 volver
findLongestWordLength("Google do a barrel roll")debería 6 volver
findLongestWordLength("What is the average airspeed velocity of an unladen swallow")debería 8 volver
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")debería 19 volver*/

function findLongestWordLength(str) {
  let longestLength = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }

  return longestLength;
}
