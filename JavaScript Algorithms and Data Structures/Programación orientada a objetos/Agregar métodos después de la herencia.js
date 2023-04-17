//Agregar métodos después de la herencia
/* Una función constructora que hereda su prototypeobjeto de una función constructora de supertipo aún puede tener sus propios métodos además de los métodos heredados.

Por ejemplo, Birdes un constructor que hereda su prototypede Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Además de lo que se hereda de Animal, desea agregar un comportamiento que sea exclusivo de Birdlos objetos. Aquí, Birdobtendrá una fly()función. Las funciones se agregan de Bird's prototypela misma manera que cualquier función constructora:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Ahora las instancias de Birdtendrán ambos eat()y fly()métodos:

let duck = new Bird();
duck.eat();
duck.fly();
duck.eat()mostraría la cadena nom nom nomen la consola y duck.fly()mostraría la cadena I'm flying!.

Agregue todo el código necesario para que el Dogobjeto se herede de Animaly el Dogconstructor prototypese establezca en Dog. Luego agregue un bark()método al Dogobjeto para que beaglepueda tanto eat()como bark(). El bark()método debe imprimirse Woof!en la consola.*/
//Ejercicio
/* Animalno debe responder al bark()método.
Dog debe heredar el eat()método de Animal.
El Dogproto tipo debe tener un bark()método.
beagledebería ser un instanceof Animal.
El constructor para beagle debe establecerse en Dog.
beagle.eat()debe registrar la cadenanom nom nom
beagle.bark()debe registrar la cadenaWoof!*/

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
