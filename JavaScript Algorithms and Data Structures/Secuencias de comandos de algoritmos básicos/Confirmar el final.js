//Confirmar el final
/* Compruebe si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío se puede resolver con el .endsWith()método, que se introdujo en ES2015. Pero para el propósito de este desafío, nos gustaría que use uno de los métodos de subcadena de JavaScript en su lugar.*/
//Ejercicio
/* confirmEnding("Bastian", "n")debería truevolver
confirmEnding("Congratulation", "on")debería truevolver
confirmEnding("Connor", "n")debería falsevolver
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")debería falsevolver
confirmEnding("He has to give me a new name", "name")debería truevolver
confirmEnding("Open sesame", "same")debería truevolver
confirmEnding("Open sesame", "sage")debería falsevolver
confirmEnding("Open sesame", "game")debería falsevolver
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")debería falsevolver
confirmEnding("Abstraction", "action")debería truevolver
Su código no debe usar el método incorporado .endsWith()para resolver el desafío.*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
