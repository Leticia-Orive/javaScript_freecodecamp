//Usar el parámetro Rest con parámetros de función
/* Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro de descanso para los parámetros de función. Con el parámetro rest, puede crear funciones que toman un número variable de argumentos. Estos argumentos se almacenan en una matriz a la que se puede acceder más tarde desde dentro de la función.

Mira este código:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
La consola mostraría las cadenas You have passed 3 arguments.y You have passed 4 arguments..

El parámetro rest elimina la necesidad de usar el argumentsobjeto y nos permite usar métodos de matriz en la matriz de parámetros pasados ​​a la función howMany.

Modifique la función sumusando el parámetro rest de tal manera que la función sumpueda tomar cualquier número de argumentos y devolver su suma.*/
//Ejercicio
/* El resultado de sum(0,1,2) debe ser 3
El resultado de sum(1,2,3,4) debe ser 10
El resultado de sum(5) debe ser 5
El resultado de sum() debe ser 0
sum debe ser una función de flecha que use la sintaxis de parámetro de descanso ( ...) en el args parámetro.*/

/*const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}*/

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(1, 2, 3)); // 6
