//Coincide con todos los no números
/* El último desafío mostró cómo buscar dígitos usando el atajo \dcon minúsculas d. También puede buscar elementos que no sean dígitos usando un atajo similar que usa mayúsculas Den su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], que busca un solo carácter que no sea un número entre cero y nueve.

Use la clase de caracteres abreviados para no dígitos \Dpara contar cuántos no dígitos hay en los títulos de las películas.*/
//Ejercicio
/* Su expresión regular debe usar el carácter abreviado para hacer coincidir los caracteres que no son dígitos
Su expresión regular debe usar la bandera global.
Su expresión regular no debe encontrar ningún dígito en la cadena 9.
Su expresión regular debe encontrar 6 no dígitos en la cadena Catch 22.
Su expresión regular debe encontrar 11 no dígitos en la cadena 101 Dalmatians.
Su expresión regular debe encontrar 15 no dígitos en la cadena One, Two, Three.
Su expresión regular debe encontrar 12 no dígitos en la cadena 21 Jump Street.
Su expresión regular debe encontrar 17 no dígitos en la cadena 2001: A Space Odyssey.*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
