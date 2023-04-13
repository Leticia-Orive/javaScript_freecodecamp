//Captura el uso mixto de comillas simples y dobles
/* JavaScript permite el uso de comillas simples ( ') y dobles ( ") para declarar una cadena. Decidir cuál usar generalmente se reduce a preferencias personales, con algunas excepciones.

Tener dos opciones es excelente cuando una cadena tiene contracciones u otro fragmento de texto que está entre comillas. Solo tenga cuidado de no cerrar la cadena demasiado pronto, lo que provoca un error de sintaxis.

Estos son algunos ejemplos de mezcla de citas:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
Los dos primeros son correctos, pero el tercero es incorrecto.

Por supuesto, está bien usar solo un estilo de comillas. Puede escapar de las comillas dentro de la cadena usando el \carácter de escape de barra invertida ( ):

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
Arregle la cadena para que use comillas diferentes para el hrefvalor o escape de las existentes. Mantenga las comillas dobles alrededor de toda la cadena.*/
//Ejercicio
/* Su código debe corregir las comillas alrededor del hrefvalor #Homecambiándolas o escapándolas.
Su código debe mantener las comillas dobles alrededor de toda la cadena.*/
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
