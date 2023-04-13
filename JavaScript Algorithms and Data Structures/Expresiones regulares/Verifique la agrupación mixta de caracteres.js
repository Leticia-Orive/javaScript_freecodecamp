//Verifique la agrupación mixta de caracteres
/* A veces queremos verificar grupos de caracteres usando una expresión regular y para lograr eso usamos paréntesis ().

Si desea encontrar Penguino Pumpkinen una cadena, puede usar la siguiente expresión regular:/P(engu|umpk)in/g

Luego verifique si los grupos de cadenas deseados están en la cadena de prueba utilizando el test()método.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
El testmétodo aquí devolvería true.

Arregle la expresión regular para que verifique los nombres de Franklin Roosevelto Eleanor Rooseveltdistinga entre mayúsculas y minúsculas y debería hacer concesiones para los segundos nombres.

Luego corrija el código para que la expresión regular que ha creado se verifique myStringy truese falsedevuelva dependiendo de si la expresión regular coincide.*/
//Ejercicio
/* Su expresión regular myRegexdebería regresar truepara la cadenaFranklin D. Roosevelt
Su expresión regular myRegexdebería regresar truepara la cadenaEleanor Roosevelt
Su expresión regular myRegexdebería regresar falsepara la cadenaFranklin Rosevelt
Su expresión regular myRegexdebería regresar falsepara la cadenaFrank Roosevelt
Su expresión regular myRegexdebería regresar falsepara la cadenaFranklinRoosevelt
Su expresión regular myRegexdebería regresar falsepara la cadenaEleanorRoosevelt
Debe usar .test()para probar la expresión regular.
Tu resultado debería regresar true.*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
