//Reutilizar patrones usando grupos de captura
/* Digamos que desea hacer coincidir una palabra que aparece varias veces, como se muestra a continuación.

let repeatStr = "row row row your boat";
Podrías usar /row row row/, pero ¿qué pasa si no sabes la palabra específica que se repite? Los grupos de captura se pueden usar para encontrar subcadenas repetidas.

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular que se va a capturar. En este caso, el objetivo es capturar una palabra que consta de caracteres alfanuméricos, por lo que el grupo de captura estará \w+entre paréntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular usando una barra invertida y el número del grupo de captura (p. ej., \1). Los grupos de captura se numeran automáticamente por la posición de sus paréntesis de apertura (de izquierda a derecha), comenzando en 1.

El siguiente ejemplo coincide con una palabra que aparece tres veces separada por espacios:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
El uso del .match()método en una cadena devolverá una matriz con la subcadena coincidente, junto con sus grupos capturados.

Use grupos de captura para reRegexhacer coincidir una cadena que consiste solo en el mismo número repetido exactamente tres veces separados por espacios simples.*/
//Ejercicio
/* Su expresión regular debe usar la clase de caracteres abreviados para dígitos.
Su expresión regular debe reutilizar un grupo de captura dos veces.
Su expresión regular debe coincidir con la cadena 42 42 42.
Su expresión regular debe coincidir con la cadena 100 100 100.
Su expresión regular no debe coincidir con la cadena 42 42 42 42.
Su expresión regular no debe coincidir con la cadena 42 42.
Su expresión regular no debe coincidir con la cadena 101 102 103.
Su expresión regular no debe coincidir con la cadena 1 2 3.
Su expresión regular debe coincidir con la cadena 10 10 10.
Su expresión regular no debe coincidir con la cadena 42\t42\t42.
Su expresión regular no debe coincidir con la cadena 42  42  42.*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
