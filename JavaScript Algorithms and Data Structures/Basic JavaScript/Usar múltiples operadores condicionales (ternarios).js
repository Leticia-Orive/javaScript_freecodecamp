//Usar múltiples operadores condicionales (ternarios)
/* En el desafío anterior, utilizó un solo operador condicional. También puede encadenarlos para verificar múltiples condiciones.

La siguiente función usa declaraciones if, else ify elsepara verificar varias condiciones:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
La función anterior se puede reescribir usando múltiples operadores condicionales:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
Se considera una buena práctica formatear múltiples operadores condicionales de modo que cada condición esté en una línea separada, como se muestra arriba. El uso de varios operadores condicionales sin la sangría adecuada puede dificultar la lectura del código. Por ejemplo:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
En la checkSignfunción, use múltiples operadores condicionales, siguiendo el formato recomendado utilizado en findGreaterOrEqual, para verificar si un número es positivo, negativo o cero. La función debería devolver positive, negativeo zero.*/
//Ejercicio
/* checkSign debe usar múltiples operadores condicionales
checkSign(10) debe devolver la cadena positive. Tenga en cuenta que las mayúsculas son importantes
checkSign(-12) debe devolver la cadena negative. Tenga en cuenta que las mayúsculas son importantes
checkSign(0) debe devolver la cadena zero. Tenga en cuenta que las mayúsculas son importantes*/

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(0));
