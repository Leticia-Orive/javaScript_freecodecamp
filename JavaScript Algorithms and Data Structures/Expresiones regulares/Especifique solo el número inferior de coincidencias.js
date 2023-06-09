//Especifique solo el número inferior de coincidencias
/* Puede especificar el número inferior y superior de patrones con especificadores de cantidad usando corchetes. A veces, solo desea especificar el número inferior de patrones sin límite superior.

Para especificar solo el número más bajo de patrones, mantenga el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo la cadena hahcon la letra aque aparece al menos 3veces, su expresión regular sería /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
En orden, las tres testllamadas devolverían true, falsey true.

Cambie la expresión regular haRegexpara que coincida con la palabra Hazzahsolo cuando tenga cuatro o más letras z.*/
//Ejercicio
/* Su expresión regular debe usar corchetes.
Su expresión regular no debe coincidir con la cadenaHazzah
Su expresión regular no debe coincidir con la cadenaHazzzah
Su expresión regular debe coincidir con la cadenaHazzzzah
Su expresión regular debe coincidir con la cadenaHazzzzzah
Su expresión regular debe coincidir con la cadenaHazzzzzzah
Su expresión regular debe coincidir con la cadena Hazzahcon 30 z's en ella.*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
