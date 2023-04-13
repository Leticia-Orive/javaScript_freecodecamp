//Coincidencia de caracteres que aparecen cero o más veces
/* El último desafío usó el signo más +para buscar caracteres que ocurren una o más veces. También hay una opción que hace coincidir los caracteres que aparecen cero o más veces.
El caracter para hacer esto es el asterisco o estrella: *.
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go;*/
/* Aqui sigue el enunciado lo que pasa que el go lleva un asterisco y hace que se me cierre
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
En orden, las tres matchllamadas devolverían los valores ["goooooooo"], ["g"]y null.

Para este desafío, chewieQuotese ha inicializado como la cadena Aaaaaaaaaaaaaaaarrrgh!detrás de escena. Cree una expresión regular chewieRegexque use el *carácter para que coincida con un Acarácter en mayúscula seguido inmediatamente por cero o más acaracteres en minúscula en chewieQuote. Su expresión regular no necesita banderas ni clases de caracteres, y no debe coincidir con ninguna de las otras comillas.
*/
//Ejercicio
/* Su expresión regular chewieRegexdebe usar el *carácter para que coincida con cero o más acaracteres.
Su expresión regular debe coincidir con la cadena Aen chewieQuote.
Su expresión regular debe coincidir con la cadena Aaaaaaaaaaaaaaaaen chewieQuote.
Su expresión regular chewieRegex debe coincidir con 16 caracteres en chewieQuote.
Su expresión regular no debe coincidir con ningún carácter en la cadenaHe made a fair move. Screaming about it can't help you.
Su expresión regular no debe coincidir con ningún carácter en la cadenaLet him have it. It's not wise to upset a Wookiee.*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
