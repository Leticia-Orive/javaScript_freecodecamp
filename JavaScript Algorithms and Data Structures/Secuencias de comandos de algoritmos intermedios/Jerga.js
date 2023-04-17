//Jerga
/*Pig Latin es una forma de alterar palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y añádala ay.

- Si una palabra comienza con una vocal, solo agregue wayal final.

Traduce la cadena provista a Pig Latin. Se garantiza que las cadenas de entrada son palabras en inglés en minúsculas.

 */
//Ejercicio
/* translatePigLatin("california")debe devolver la cadena aliforniacay.
translatePigLatin("paragraphs")debe devolver la cadena aragraphspay.
translatePigLatin("glove")debe devolver la cadena oveglay.
translatePigLatin("algorithm")debe devolver la cadena algorithmway.
translatePigLatin("eight")debe devolver la cadena eightway.
Debe manejar palabras donde la primera vocal se encuentra en medio de la palabra. translatePigLatin("schwartz")debe devolver la cadena artzschway.
Debe manejar palabras sin vocales. translatePigLatin("rhythm")debe devolver la cadena rhythmay.*/

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
