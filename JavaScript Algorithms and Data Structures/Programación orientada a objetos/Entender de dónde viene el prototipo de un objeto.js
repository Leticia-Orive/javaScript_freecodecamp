//Entender de dónde viene el prototipo de un objeto
/* Al igual que las personas heredan genes de sus padres, un objeto hereda prototypedirectamente de la función constructora que lo creó. Por ejemplo, aquí el Birdconstructor crea el duckobjeto:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
duckhereda prototypede la Birdfunción constructora. Puedes mostrar esta relación con el isPrototypeOfmétodo:

Bird.prototype.isPrototypeOf(duck);
Esto volvería true.

Úselo isPrototypeOfpara verificar el prototypede beagle.*/
//Ejercicio
/* Debes mostrar que Dog.prototypees el prototypedebeagle*/
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle);
