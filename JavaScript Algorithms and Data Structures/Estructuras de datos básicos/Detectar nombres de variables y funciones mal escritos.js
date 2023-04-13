//Detectar nombres de variables y funciones mal escritos
/* Los métodos console.log()y typeofson las dos formas principales de comprobar los valores intermedios y los tipos de salida del programa. Ahora es el momento de entrar en las formas comunes que toman los errores. Un problema de nivel de sintaxis del que los tipeadores rápidos pueden compadecerse es el humilde error ortográfico.

Los caracteres transpuestos, faltantes o mal escritos en mayúsculas en el nombre de una variable o función harán que el navegador busque un objeto que no existe y se queje en forma de un error de referencia. Los nombres de variables y funciones de JavaScript distinguen entre mayúsculas y minúsculas.

Corrige los dos errores ortográficos del código para que netWorkingCapitalfuncione el cálculo.*/
//Ejercicio
/* Verifique la ortografía de las dos variables utilizadas en el cálculo de netWorkingCapital, la salida de la consola debe mostrar que "El capital de trabajo neto es: 2".
No debe haber instancias de variables mal escritas en el código.
La receivablesvariable debe declararse y usarse correctamente en el código.
No debe haber instancias de variables mal escritas en el código.
La payablesvariable debe declararse y usarse correctamente en el código.*/

// 'i' and 'e' swapped in "receivables" and missing 's' in "payables"

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
