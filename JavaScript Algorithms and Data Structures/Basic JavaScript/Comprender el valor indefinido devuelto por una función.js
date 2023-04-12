//Comprender el valor indefinido devuelto por una función
/* Una función puede incluir la returndeclaración pero no tiene que hacerlo. En el caso de que la función no tenga una returndeclaración, cuando la llama, la función procesa el código interno pero el valor devuelto es undefined.

Ejemplo

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSumes una función sin returnsentencia. La función cambiará la sumvariable global pero el valor devuelto de la función es undefined.

Crea una función addFivesin argumentos. Esta función suma 5 a la sumvariable, pero su valor devuelto es undefined.*/
//Ejercicio
/* addFive debe ser una función.
Una vez que se hayan ejecutado ambas funciones, sumdebería ser igual a 8.
El valor devuelto de addFivedebe ser undefined.
Dentro de la addFivefunción, debe agregar 5a la sumvariable.*/
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
