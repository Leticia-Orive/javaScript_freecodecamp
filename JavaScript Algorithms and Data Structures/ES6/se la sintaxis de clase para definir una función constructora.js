//se la sintaxis de clase para definir una función constructora
/* ES6 proporciona una nueva sintaxis para crear objetos, utilizando la palabra clave class .

En ES5, se puede crear un objeto definiendo una constructorfunción y usando la newpalabra clave para instanciar el objeto.

En ES6, una classdeclaración tiene un constructormétodo que se invoca con la newpalabra clave. Si el constructormétodo no está definido explícitamente, entonces está definido implícitamente sin argumentos.

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
Cabe señalar que la classpalabra clave declara una nueva función, a la que se agrega un constructor. Este constructor se invoca cuando newse llama para crear un nuevo objeto.

Nota: UpperCamelCase debe usarse por convención para los nombres de clase de ES6, como se SpaceShuttleusó anteriormente.

El constructormétodo es un método especial para crear e inicializar un objeto creado con una clase. Aprenderá más al respecto en la sección de Programación Orientada a Objetos de la Certificación de Estructuras de Datos y Algoritmos de JavaScript.

Use la classpalabra clave y escriba a constructorpara crear la Vegetableclase.

La Vegetableclase le permite crear un objeto vegetal con una propiedad nameque se pasa al constructor.*/
//Ejercicio
/* Vegetable debe ser un classcon un método definido constructor.
class Se debe usar la palabra clave.
Vegetable debe poder ser instanciado.
carrot.name debería carrot volver*/

// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
