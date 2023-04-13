//Hacer coincidir cualquier cosa con el período comodín
/* A veces no conocerá (o no necesitará) los caracteres exactos de sus patrones. Pensar en todas las palabras que coincidan, por ejemplo, con una falta de ortografía llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo usando el carácter comodín:.

El carácter comodín .coincidirá con cualquier carácter. El comodín también se llama doty period. Puede usar el carácter comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si desea hacer coincidir hug, huh, huty hum, puede usar la expresión regular /hu./para hacer coincidir las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Ambas testllamadas regresarían true.

Complete la expresión regular unRegexpara que coincida con las cadenas run, sun, fun, pun, nuny bun. Su expresión regular  debe usar el carácter comodín.*/
//Ejercicio
/*  Deberías usar el .test()método.
 Debe usar el carácter comodín en su expresión regularunRegex
Su expresión regular unRegex debe coincidir runen la cadenaLet us go on a run.
Su expresión regular unRegex debe coincidir sunen la cadenaThe sun is out today.
Su expresión regular unRegex debe coincidir funen la cadenaCoding is a lot of fun.
Su expresión regular unRegex debe coincidir punen la cadenaSeven days without a pun makes one weak.
Su expresión regular unRegex debe coincidir nunen la cadenaOne takes a vow to be a nun.
Su expresión regular unRegex debe coincidir bunen la cadenaShe got fired from the hot dog stand for putting her hair in a bun.
Su expresión regular unRegexno  debe coincidir con la cadenaThere is a bug in my code.
Su expresión regular unRegexno  debe coincidir con la cadenaCatch me if you can.*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
