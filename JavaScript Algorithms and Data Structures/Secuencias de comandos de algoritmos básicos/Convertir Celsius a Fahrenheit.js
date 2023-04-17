//Convertir Celsius a Fahrenheit
/* La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius veces 9/5, más 32.

Se le da una variable celsiusque representa una temperatura en Celsius. Utilice la variable fahrenheitya definida y asígnele la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Use la fórmula mencionada anteriormente para ayudar a convertir la temperatura Celsius a Fahrenheit.*/
//Ejercicio
/* convertCtoF(0)debe devolver un número
convertCtoF(-30)debe devolver un valor de-22
convertCtoF(-10)debe devolver un valor de 14
convertCtoF(0)debe devolver un valor de 32
convertCtoF(20)debe devolver un valor de 68
convertCtoF(30)debe devolver un valor de 86*/
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Change the inputs below to test your code
convertCtoF(30);
