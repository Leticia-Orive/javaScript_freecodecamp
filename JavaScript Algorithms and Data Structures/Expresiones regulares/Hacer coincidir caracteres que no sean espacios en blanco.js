//Hacer coincidir caracteres que no sean espacios en blanco
/* Aprendiste a buscar espacios en blanco usando \s, con minúsculas s. También puede buscar todo excepto espacios en blanco.

Busque espacios que no sean en blanco usando \S, que es una mayúscula s. Este patrón no coincidirá con espacios en blanco, retornos de carro, tabuladores, avances de página y caracteres de nueva línea. Puedes pensar que es similar a la clase de personaje [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
El valor devuelto por el .lengthmétodo sería 32.

Cambie la expresión regular countNonWhiteSpacepara buscar múltiples caracteres que no sean espacios en blanco en una cadena.*/
//Ejercicio
/*Su expresión regular debe usar la bandera global.
Su expresión regular debe usar el carácter abreviado \Spara hacer coincidir todos los caracteres que no sean espacios en blanco.
Su expresión regular debe encontrar 35 espacios en la cadenaMen are from Mars and women are from Venus.
Su expresión regular debe encontrar 23 no espacios en la cadenaSpace: the final frontier.
Su expresión regular debe encontrar 21 no espacios en la cadenaMindYourPersonalSpace */
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
