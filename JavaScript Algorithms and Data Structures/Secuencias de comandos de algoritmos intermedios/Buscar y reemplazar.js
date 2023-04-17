//Buscar y reemplazar
/* Realice una búsqueda y reemplace en la oración utilizando los argumentos proporcionados y devuelva la nueva oración.

El primer argumento es la oración para realizar la búsqueda y reemplazar.

El segundo argumento es la palabra que reemplazará (antes).

El tercer argumento es con lo que reemplazará el segundo argumento (después).

Nota: Preserve las mayúsculas y minúsculas del primer carácter de la palabra original cuando lo reemplace. Por ejemplo, si desea reemplazar la palabra Bookcon la palabra dog, debe reemplazarse comoDog*/
//Ejercicio
/* myReplace("Let us go to the store", "store", "mall")debe devolver la cadena Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")debe devolver la cadena He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down")debe devolver la cadena I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling")debe devolver la cadena This has a spelling error.
myReplace("His name is Tom", "Tom", "john")debe devolver la cadena His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms")debe devolver la cadena Let us get back to more Algorithms.*/

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
