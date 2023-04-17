//Restablecer una propiedad de constructor heredada
/* Cuando un objeto hereda su propiedad prototypede otro objeto, también hereda la propiedad constructora del supertipo.

Aquí hay un ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
Pero ducky todas las instancias de Bird  deben mostrar que fueron construidas por Birdy no Animal. Para hacerlo, puede establecer manualmente la propiedad del constructor Birddel Birdobjeto:

Bird.prototype.constructor = Bird;
duck.constructor
Corrija el código duck.constructory beagle.constructor devuelva sus respectivos constructores.*/
//Ejercicio
/* Bird.prototype debe ser una instancia de Animal.
duck.constructor debería Birdvolver
Dog.prototype debe ser una instancia de Animal.
beagle.constructor debería Dogvolver*/

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
