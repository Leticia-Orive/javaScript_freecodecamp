//Haga que el código sea más reutilizable con esta palabra clave
/* El último desafío introdujo un método para el duckobjeto. Usó duck.namela notación de puntos para acceder al valor de la namepropiedad dentro de la declaración de devolución:

sayName: function() {return "The name of this duck is " + duck.name + ".";}
Si bien esta es una forma válida de acceder a la propiedad del objeto, aquí hay una trampa. Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original también deberá actualizarse. En una definición de objeto corta, no es un problema, pero si un objeto tiene muchas referencias a sus propiedades, hay una mayor posibilidad de error.

Una forma de evitar estos problemas es con la thispalabra clave:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
thises un tema profundo, y el ejemplo anterior es solo una forma de usarlo. En el contexto actual, thisse refiere al objeto con el que está asociado el método: duck. Si el nombre del objeto se cambia a mallard, no es necesario encontrar todas las referencias ducken el código. Hace que el código sea reutilizable y más fácil de leer.

Modifique el dog.sayLegsmétodo para eliminar cualquier referencia a dog. Use el duckejemplo como guía.*/
//Ejercicio
/* dog.sayLegs()debe devolver la cadena dada.
Su código debe usar la thispalabra clave para acceder a la numLegspropiedad de dog.*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();
