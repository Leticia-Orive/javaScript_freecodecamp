//Coincidencia de patrones de cuerdas iniciales
/* Los desafíos anteriores mostraron que las expresiones regulares se pueden usar para buscar varias coincidencias. También se utilizan para buscar patrones en posiciones específicas en cadenas.

En un desafío anterior, usó el carácter de intercalación ( ^) dentro de un conjunto de caracteres para crear un conjunto de caracteres negados en la forma [^thingsThatWillNotBeMatched]. Fuera de un conjunto de caracteres, el signo de intercalación se usa para buscar patrones al comienzo de las cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
La primera testllamada regresaría true, mientras que la segunda regresaría false.

Use el carácter de intercalación en una expresión regular para buscar Calsolo al comienzo de la cadena rickyAndCal.*/
//Ejercicio
/* Su expresión regular debe buscar la cadena Calcon una letra mayúscula.
Su expresión regular no debe usar ninguna bandera.
Su expresión regular debe coincidir con la cadena Calal principio de la cadena.
Su expresión regular no debe coincidir con la cadena Calen el medio de una cadena.*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
