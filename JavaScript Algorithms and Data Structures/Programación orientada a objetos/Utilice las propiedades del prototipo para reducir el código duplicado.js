//Utilice las propiedades del prototipo para reducir el código duplicado
/* Dado que numLegsprobablemente tendrá el mismo valor para todas las instancias de Bird, esencialmente tiene una variable duplicada numLegsdentro de cada Birdinstancia.

Esto puede no ser un problema cuando solo hay dos instancias, pero imagínese si hay millones de instancias. Eso sería un montón de variables duplicadas.

Una mejor manera es usar el prototypeof Bird. Las propiedades de prototypese comparten entre TODAS las instancias de Bird. Aquí se explica cómo agregar numLegsa Bird prototype:

Bird.prototype.numLegs = 2;
Ahora todas las instancias de Birdtienen la numLegspropiedad.

console.log(duck.numLegs);
console.log(canary.numLegs);
Dado que todas las instancias tienen automáticamente las propiedades en prototype, piense en a prototypecomo una "receta" para crear objetos. Tenga en cuenta que prototypefor ducky canaryes parte del Birdconstructor como Bird.prototype.

Añadir una numLegspropiedad a la prototypedeDog*/
//Ejercicio
/* beagle debe tener una numLegspropiedad.
beagle.numLegs debería ser un número.
numLegs debe ser una prototype propiedad no una propiedad propia.*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");
