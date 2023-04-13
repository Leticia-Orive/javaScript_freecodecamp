//Usar grupos de captura para buscar y reemplazar
/* La búsqueda es útil. Sin embargo, puede hacer que la búsqueda sea aún más poderosa cuando también cambia (o reemplaza) el texto que busca.

Puede buscar y reemplazar texto en una cadena usando .replace()en una cadena. Las entradas para .replace()son primero el patrón de expresiones regulares que desea buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
La replacellamada devolvería la cadena The sky is blue..

También puede acceder a los grupos de captura en la cadena de reemplazo con signos de dólar ( $).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
La replacellamada devolvería la cadena Camp Code.

Escriba una expresión regular fixRegexusando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualice la replaceTextvariable para reemplazarla one two threecon la cadena three two oney asigne el resultado a la resultvariable. Asegúrese de utilizar grupos de captura en la cadena de reemplazo mediante la $sintaxis del signo de dólar ( ).

*/
//Ejercicio
/* Debe utilizar .replace()para buscar y reemplazar.
Su expresión regular debe cambiar la cadena one two threea la cadenathree two one
No debe cambiar la última línea.
fixRegexdebe utilizar al menos tres grupos de captura.
replaceTextdebe usar cadenas de subcoincidencia entre paréntesis (es decir, la enésima cadena de subcoincidencia entre paréntesis, $n, corresponde al enésimo grupo de captura).*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
