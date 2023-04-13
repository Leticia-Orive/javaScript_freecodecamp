//Coincidir con espacios en blanco
/* Hasta ahora, los desafíos han abarcado el emparejamiento de letras del alfabeto y números. También puede hacer coincidir los espacios en blanco o los espacios entre letras.

Puede buscar espacios en blanco usando \s, que es una minúscula s. Este patrón no solo coincide con los espacios en blanco, sino también con los caracteres de retorno de carro, tabulación, avance de página y nueva línea. Puedes pensar en ello como similar a la clase de personaje [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
Esta matchllamada volvería [" ", " "].

Cambie la expresión regular countWhiteSpacepara buscar múltiples caracteres de espacio en blanco en una cadena.*/
//Ejercicio
/* Su expresión regular debe usar la bandera global.
Su expresión regular debe usar el carácter abreviado \s para que coincida con todos los caracteres de espacio en blanco.
Su expresión regular debe encontrar ocho espacios en la cadenaMen are from Mars and women are from Venus.
Su expresión regular debe encontrar tres espacios en la cadenaSpace: the final frontier.
Su expresión regular no debería encontrar espacios en la cadenaMindYourPersonalSpace*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
