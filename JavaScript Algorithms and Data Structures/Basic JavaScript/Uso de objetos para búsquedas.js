//Uso de objetos para búsquedas
/*Los objetos se pueden considerar como un almacenamiento de clave/valor, como un diccionario. Si tiene datos tabulares, puede usar un objeto para buscar valores en lugar de una switchdeclaración o una if/elsecadena. Esto es más útil cuando sabe que sus datos de entrada están limitados a un cierto rango.

Este es un ejemplo de un objeto de artículo:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthores la cadena Kaashan Hussain, articleLinkes la cadena https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/y valueLookupes la cadena How to create objects in JavaScript.

Convierta la declaración de cambio en un objeto llamado lookup. Úselo para buscar valy asignar la cadena asociada a la resultvariable. */
//Ejercicio
/*phoneticLookup("alpha")debe ser igual a la cadenaAdams
phoneticLookup("bravo") debe ser igual a la cadenaBoston
phoneticLookup("charlie") debe ser igual a la cadenaChicago
phoneticLookup("delta") debe ser igual a la cadenaDenver
phoneticLookup("echo") debe ser igual a la cadenaEasy
phoneticLookup("foxtrot") debe ser igual a la cadenaFrank
phoneticLookup("") debe ser igualundefined
No debe modificar la returndeclaración .
No debe usar declaraciones case, switchoif */

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.

  result = lookup[val];
  // Only change code above this line
  return result;
}
