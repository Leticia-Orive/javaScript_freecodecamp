//Combina un solo personaje con múltiples posibilidades
/* Aprendió a hacer coincidir patrones literales ( /literal/) y caracteres comodín ( /./). Esos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide con todo. Hay opciones que son un equilibrio entre los dos extremos.

Puede buscar un patrón literal con cierta flexibilidad con las clases de caracteres . Las clases de caracteres le permiten definir un grupo de caracteres que desea hacer coincidir colocándolos entre corchetes ( [y ]).

Por ejemplo, desea hacer coincidir bag, bigy bugpero no bog. Puede crear la expresión regular /b[aiu]g/para hacer esto. es [aiu]la clase de carácter que solo coincidirá con los caracteres a, io u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
En orden, las cuatro matchllamadas devolverían los valores ["big"], ["bag"], ["bug"]y null.

Use una clase de caracteres con vocales ( a, e, i, o, u) en su expresión regular vowelRegexpara encontrar todas las vocales en la cadena quoteSample.

Nota: asegúrese de hacer coincidir las vocales mayúsculas y minúsculas.*/
//Ejercicio
/* Debes encontrar las 25 vocales.
Su expresión regular vowelRegex debe usar una clase de carácter.
Su expresión regular vowelRegex debe usar la bandera global.
Su expresión regular vowelRegex debe usar la bandera que no distingue entre mayúsculas y minúsculas.
Su expresión regular no debe coincidir con ninguna consonante.*/

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
