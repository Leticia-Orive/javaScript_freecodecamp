//Coincidencia de patrones de cadenas finales
/* En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al comienzo de las cadenas. También hay una forma de buscar patrones al final de las cadenas.

Puede buscar el final de las cadenas utilizando el carácter de signo de dólar $al final de la expresión regular.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
La primera testllamada regresaría true, mientras que la segunda regresaría false.

Utilice el carácter ancla ( $) para hacer coincidir la cadena cabooseal final de la cadena caboose.*/
//Ejercicio
/* Debe buscar caboosecon el ancla del signo de dólar $en su expresión regular.
Su expresión regular no debe usar ninguna bandera.
Debes coincidir caboose al final de la cadena.The last car on a train is the caboose*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
