//Restringir posibles nombres de usuario
/* Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en sus sitios favoritos.

Debe verificar todos los nombres de usuario en una base de datos. Aquí hay algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario solo pueden usar caracteres alfanuméricos.

Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.

Cambie la expresión regular userCheckpara que se ajuste a las restricciones enumeradas anteriormente.*/
//Ejercicio
/* Su expresión regular debe coincidir con la cadenaJACK
Su expresión regular no debe coincidir con la cadenaJ
Su expresión regular debe coincidir con la cadenaJo
Su expresión regular debe coincidir con la cadenaOceans11
Su expresión regular debe coincidir con la cadenaRegexGuru
Su expresión regular no debe coincidir con la cadena007
Su expresión regular no debe coincidir con la cadena9
Su expresión regular no debe coincidir con la cadenaA1
Su expresión regular no debe coincidir con la cadenaBadUs3rnam3
Su expresión regular debe coincidir con la cadenaZ97
Su expresión regular no debe coincidir con la cadenac57bT3
Su expresión regular debe coincidir con la cadenaAB1
Su expresión regular no debe coincidir con la cadenaJ%4*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result);
