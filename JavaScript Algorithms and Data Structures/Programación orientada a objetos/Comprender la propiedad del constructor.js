//Comprender la propiedad del constructor
/* Hay una constructorpropiedad especial ubicada en las instancias del objeto ducky beagleque se creó en los desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Ambas console.logllamadas se mostrarían trueen la consola.

Tenga en cuenta que la constructorpropiedad es una referencia a la función constructora que creó la instancia. La ventaja de la constructorpropiedad es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Aquí hay un ejemplo de cómo se podría usar esto:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
Nota: dado que la constructor propiedad se puede sobrescribir (lo cual se tratará en los siguientes dos desafíos), generalmente es mejor usar el instanceofmétodo para verificar el tipo de un objeto.

Escriba una joinDogFraternity función que tome un candidate parámetro y, usando la constructor propiedad, devuelva true si el candidato es un Dog, de lo contrario devuelva false.*/
//Ejercicio
/* joinDogFraternity debe definirse como una función.
joinDogFraternity debe devolver truesi candidate es una instancia de Dog.
joinDogFraternity debe usar la constructor propiedad.*/

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
