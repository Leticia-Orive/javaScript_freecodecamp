//Coincide con todos los números
/* Ha aprendido métodos abreviados para patrones de cadenas comunes, como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con minúsculas d. Esto es igual a la clase de caracteres [0-9], que busca un solo carácter de cualquier número entre cero y nueve.

Use la clase de caracteres abreviados \dpara contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.*/
//Ejercicio
/* Su expresión regular debe usar el carácter de acceso directo para hacer coincidir los caracteres de dígitos
Su expresión regular debe usar la bandera global.
Su expresión regular debe encontrar 1 dígito en la cadena 9.
Su expresión regular debe encontrar 2 dígitos en la cadena Catch 22.
Su expresión regular debe encontrar 3 dígitos en la cadena 101 Dalmatians.
Su expresión regular no debe encontrar dígitos en la cadena One, Two, Three.
Su expresión regular debe encontrar 2 dígitos en la cadena 21 Jump Street.
Su expresión regular debe encontrar 4 dígitos en la cadena 2001: A Space Odyssey.*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
