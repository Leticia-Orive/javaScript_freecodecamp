//Iterar sobre todas las propiedades
/* Ya has visto dos tipos de propiedades: propiedades propias y prototypepropiedades. Las propiedades propias se definen directamente en la propia instancia del objeto. Y las propiedades del prototipo se definen en el archivo prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
Así es como agrega ducklas propiedades propias a la matriz ownPropsy prototypelas propiedades a la matriz prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps)se mostraría ["name"]en la consola y console.log(prototypeProps)se mostraría ["numLegs"].

Agregue todas las propiedades propias de beaglea la matriz ownProps. Agregue todas las prototypepropiedades de Doga la matriz prototypeProps.*/
//Ejercicio
/* La ownPropsmatriz solo debe contener name.
La prototypePropsmatriz solo debe contener numLegs.
Debes resolver este desafío sin usar el método incorporado Object.keys().*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for (let property in beagle) {
  if (Dog.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
