//Une Todo Menos Letras y Números
/* Has aprendido que puedes usar un atajo para hacer coincidir alfanuméricos [A-Za-z0-9_]usando \w. Un patrón natural que quizás desee buscar es lo opuesto a los alfanuméricos.

Puede buscar el opuesto de \wcon \W. Tenga en cuenta que el patrón opuesto usa una letra mayúscula. Este atajo es el mismo que [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
La primera matchllamada devolvería el valor ["%"]y la segunda devolvería ["!"].

Use la clase de caracteres abreviados \Wpara contar la cantidad de caracteres no alfanuméricos en varias comillas y cadenas.*/
//Ejercicio
/* Su expresión regular debe usar la bandera global.
Su expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena The five boxing wizards jump quickly..
Su expresión regular debe usar el carácter abreviado para hacer coincidir los caracteres que no son alfanuméricos.
Su expresión regular debe encontrar 8 caracteres no alfanuméricos en la cadenaPack my box with five dozen liquor jugs.
Su expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadenaHow vexingly quick daft zebras jump!
Su expresión regular debe encontrar 12 caracteres no alfanuméricos en la cadena123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
