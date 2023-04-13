//Encuentra más que la primera coincidencia
/* Hasta ahora, solo ha podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Aquí matchvolvería ["Repeat"].

Para buscar o extraer un patrón más de una vez, puede usar el indicador de búsqueda global: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
Y aquí matchdevuelve el valor.["Repeat", "Repeat", "Repeat"]

Usando la expresión regular starRegex, busque y extraiga ambas Twinklepalabras de la cadena twinkleStar.

Nota
Puede tener varias banderas en su expresión regular como/search/gi*/
//Ejercicio
/* Su expresión regular starRegex debe usar la bandera globalg
Su expresión regular starRegex debe usar la bandera que no distingue entre mayúsculas y minúsculas i
Su coincidencia debe coincidir con ambas apariciones de la palabra Twinkle
Su partido result debe tener dos elementos en él.*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
