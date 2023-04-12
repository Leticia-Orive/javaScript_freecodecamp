//Utilice la recursividad para crear un rango de números
/* Continuando con el desafío anterior, le brindamos otra oportunidad para crear una función recursiva para resolver un problema.

Hemos definido una función nombrada rangeOfNumberscon dos parámetros. La función debe devolver una matriz de enteros que comienza con un número representado por el startNumparámetro y termina con un número representado por el endNumparámetro. El número inicial siempre será menor o igual que el número final. Su función debe usar recursividad llamándose a sí misma y no usar bucles de ningún tipo. También debería funcionar para los casos en los que ambos startNumy endNumson iguales.*/
//Ejercicio
/* Su función debe devolver una matriz.
Su código no debe usar ninguna sintaxis de bucle ( foro whilefunciones de orden superior como forEach, map, filtero reduce).
rangeOfNumbers debería usar recursividad (llamarse a sí mismo) para resolver este desafío.
rangeOfNumbers(1, 5) debería [1, 2, 3, 4, 5]volver
rangeOfNumbers(6, 9) debería [6, 7, 8, 9]volver
rangeOfNumbers(4, 4) debería [4]volver
Las variables globales no deben usarse para almacenar en caché la matriz.*/
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
