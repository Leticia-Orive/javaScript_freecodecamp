//Cambiar el prototipo a un nuevo objeto
/* Hasta ahora ha estado agregando propiedades a los prototypeindividualmente:

Bird.prototype.numLegs = 2;
Esto se vuelve tedioso después de más de unas pocas propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
Una forma más eficiente es establecer el prototypeen un nuevo objeto que ya contiene las propiedades. De esta manera, las propiedades se agregan todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Agregue la propiedad numLegsy los dos métodos eat()y describe()al prototypede Dogconfigurando el prototypeen un nuevo objeto.*/
//Ejercicio
/* Dog.prototype debe establecerse en un nuevo objeto.
Dog.prototype debe tener la propiedad numLegs.
Dog.prototype debe tener el método eat().
Dog.prototype debe tener el método describe().*/

function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
