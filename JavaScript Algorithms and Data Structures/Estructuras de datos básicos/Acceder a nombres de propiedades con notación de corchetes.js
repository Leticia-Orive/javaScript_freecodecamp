//Acceder a nombres de propiedades con notación de corchetes
/* En el primer desafío de objetos, mencionamos el uso de la notación de corchetes como una forma de acceder a los valores de propiedad mediante la evaluación de una variable. Por ejemplo, imagine que nuestro foodsobjeto se está utilizando en un programa para una caja registradora de supermercado. Tenemos alguna función que establece el selectedFoody queremos comprobar nuestro foodsobjeto para la presencia de ese alimento. Esto podría verse como:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
Este código evaluará el valor almacenado en la selectedFoodvariable y devolverá el valor de esa clave en el foodsobjeto, o undefinedsi no está presente. La notación de corchetes es muy útil porque a veces las propiedades de los objetos no se conocen antes del tiempo de ejecución o necesitamos acceder a ellos de una manera más dinámica.

Hemos definido una función, checkInventory, que recibe un elemento escaneado como argumento. Devuelve el valor actual de la scannedItemclave en el foodsobjeto. Puede suponer que solo se proporcionarán claves válidas como argumento para checkInventory.*/
//Ejercicio
/* check Inventory debe ser una función.
El foods objeto debe tener solo los siguientes pares clave-valor: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.
checkInventory("apples") debería 25 volver
checkInventory("bananas") debería 13 volver
checkInventory("strawberries") debería 27 volver*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
