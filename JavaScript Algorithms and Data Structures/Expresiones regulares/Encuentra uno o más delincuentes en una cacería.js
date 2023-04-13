//Encuentra uno o más delincuentes en una cacería
/* Es hora de hacer una pausa y probar sus nuevas habilidades de escritura de expresiones regulares. Un grupo de delincuentes escapó de la cárcel y se dio a la fuga, pero no sabes cuántos. Sin embargo, sí sabes que permanecen juntos cuando están cerca de otras personas. Eres responsable de encontrar a todos los criminales a la vez.

Aquí hay un ejemplo para revisar cómo hacer esto:

La expresión regular /z+/coincide con la letra zcuando aparece una o más veces seguidas. Encontraría coincidencias en todas las siguientes cadenas:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Pero no encuentra coincidencias en las siguientes cadenas ya que no hay letras z:

""
"ABC"
"abcabc"
Escriba una expresión regular codiciosa que encuentre uno o más delincuentes dentro de un grupo de otras personas. Un criminal está representado por la letra mayúscula C.*/
//Ejercicio
/* Su expresión regular debe coincidir con un criminal ( C) en la cadenaC
Su expresión regular debe coincidir con dos delincuentes ( CC) en la cadenaCC
Su expresión regular debe coincidir con tres delincuentes ( CCC) en la cadena P1P5P4CCCcP2P6P3.
Su expresión regular debe coincidir con cinco delincuentes ( CCCCC) en la cadenaP6P2P7P4P5CCCCCP3P1
Su expresión regular no debe coincidir con ningún criminal en la cadena vacía""
Su expresión regular no debe coincidir con ningún criminal en la cadenaP1P2P3
Su expresión regular debe coincidir con cincuenta delincuentes ( CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) en la cadena P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.*/

let reCriminals = /C+/; // Change this line
