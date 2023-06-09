//Anular métodos heredados
/* En lecciones anteriores, aprendiste que un objeto puede heredar su comportamiento (métodos) de otro objeto haciendo referencia a su prototypeobjeto:

ChildObject.prototype = Object.create(ParentObject.prototype);
Luego, ChildObjectrecibió sus propios métodos encadenándolos en su prototype:

ChildObject.prototype.methodName = function() {...};
Es posible anular un método heredado. Se hace de la misma manera: agregando un método para ChildObject.prototypeusar el mismo nombre de método que el que se va a anular. Aquí hay un ejemplo de Birdcómo anular el eat()método heredado de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
Si tiene una instancia let duck = new Bird();y llama duck.eat(), así es como JavaScript busca el método en la prototypecadena de duck:

duck=> ¿Se eat()define aquí? No.
Bird=> ¿Se eat()define aquí? => Sí. Ejecútalo y deja de buscar.
Animal=> eat()también está definido, pero JavaScript dejó de buscar antes de alcanzar este nivel.
Objeto => JavaScript dejó de buscar antes de alcanzar este nivel.
Anule el fly()método para Penguinque devuelva la cadenaAlas, this is a flightless bird.*/
//Ejercicio
/* penguin.fly() debe devolver la cadenaAlas, this is a flightless bird.
El bird.fly()método debe devolver la cadena.I am flying!*/
function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};
