//Empareja Números y Letras del Alfabeto
/* El uso del guión ( -) para hacer coincidir un rango de caracteres no se limita a las letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/coincide con cualquier número entre 0y 5, incluidos 0y 5.

Además, es posible combinar un rango de letras y números en un solo conjunto de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
Cree una única expresión regular que coincida con un rango de letras entre hy s, y un rango de números entre 2y 6. Recuerde incluir las banderas apropiadas en la expresión regular.

*/
//Ejercicio
/* Su expresión regular myRegexdebe coincidir con 17 elementos.
Su expresión regular myRegexdebe usar la bandera global.
Su expresión regular myRegexdebe usar la bandera que no distingue entre mayúsculas y minúsculas.*/
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
