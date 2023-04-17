//Recuerde establecer la propiedad del constructor al cambiar el prototipo
/* Hay un efecto secundario crucial de configurar manualmente el prototipo en un nuevo objeto. ¡ Borra la constructorpropiedad! Esta propiedad se puede usar para verificar qué función constructora creó la instancia, pero dado que la propiedad se sobrescribió, ahora da resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
En orden, estas expresiones se evaluarían como false, truey true.

Para solucionar esto, siempre que un prototipo se establezca manualmente en un nuevo objeto, recuerde definir la constructorpropiedad:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
Defina la constructorpropiedad en el Dog prototype.*/
//Ejercicio
/* Dog.prototype debe establecer la constructorpropiedad.*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, // Solution
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
