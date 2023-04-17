//Argumentos Opcional
/* Cree una función que sume dos argumentos. Si solo se proporciona un argumento, devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3)debe devolver 5y addTogether(2)debe devolver una función.

Llamar a esta función devuelta con un solo argumento devolverá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3)regresa 5_

Si alguno de los argumentos no es un número válido, devuelve indefinido.*/
//Ejercicio
/* addTogether(2, 3)debe regresar 5.
addTogether(23, 30)debe devolver 53.
addTogether(5)(7)debe devolver 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")debería undefinedvolver
addTogether(2, "3")debería undefinedvolver
addTogether(2)([3])debería undefinedvolver
addTogether("2", 3)debería undefinedvolver
addTogether(5, undefined)debería undefinedvolver*/
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
