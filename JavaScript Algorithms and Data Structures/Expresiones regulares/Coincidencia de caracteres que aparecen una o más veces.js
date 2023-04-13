//Coincidencia de caracteres que aparecen una o más veces
/* A veces, necesita hacer coincidir un carácter (o grupo de caracteres) que aparece una o más veces seguidas. Esto significa que ocurre al menos una vez y puede repetirse.

Puede usar el +carácter para verificar si ese es el caso. Recuerde, el carácter o patrón tiene que estar presente consecutivamente. Es decir, el personaje tiene que repetir uno tras otro.

Por ejemplo, /a+/gencontraría una coincidencia abcy devolvería ["a"]. Debido a +, también encontraría una sola coincidencia aabcy regresaría ["aa"].

Si, en cambio, estuviera verificando la cadena abab, encontraría dos coincidencias y regresaría ["a", "a"]porque los acaracteres no están en una fila, hay una bentre ellos. Finalmente, dado que no hay aen la cadena bcd, no encontrará una coincidencia.

Desea encontrar coincidencias cuando la letra saparece una o más veces en Mississippi. Escriba una expresión regular que use el +signo.*/
//Ejercicio
/* Su expresión regular myRegexdebe usar el +signo para hacer coincidir uno o más s caracteres.
Su expresión regular myRegex debe coincidir con 2 elementos.
La result variable debe ser una matriz con dos coincidencias dess*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);
