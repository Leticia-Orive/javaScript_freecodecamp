//Mutaciones
/* Retorna true si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

Por ejemplo, ["hello", "Hello"]debería regresar true porque todas las letras en la segunda cadena están presentes en el primer caso, ignorando.

Los argumentos ["hello", "hey"]deberían regresar false porque la cadena hellono contiene un y.

Por último, ["Alien", "line"]debería volver true porque todas las letras de lineestán presentes en Alien.*/
//Ejercicio
/* mutation(["hello", "hey"])debería false volver
mutation(["hello", "Hello"])debería true volver
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])debería true volver
mutation(["Mary", "Army"])debería true volver
mutation(["Mary", "Aarmy"])debería true volver
mutation(["Alien", "line"])debería true volver
mutation(["floor", "for"])debería true volver
mutation(["hello", "neo"])debería false volver
mutation(["voodoo", "no"])debería false volver
mutation(["ate", "date"])debería false volver
mutation(["Tiger", "Zebra"])debería false volver
mutation(["Noel", "Ole"])debería true volver*/

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
