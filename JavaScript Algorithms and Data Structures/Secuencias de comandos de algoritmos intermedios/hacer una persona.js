//hacer una persona
/* Complete el constructor de objetos con los siguientes métodos a continuación:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Ejecute las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar solo un argumento y tiene que ser una cadena. Estos métodos deben ser los únicos medios disponibles para interactuar con el objeto.*/
//Ejercicio
/* No se deben agregar propiedades. Object.keys(bob).lengthsiempre debe regresar 6.
bob instanceof Persondebería truevolver
bob.firstNamedebería undefinedvolver
bob.lastNamedebería undefinedvolver
bob.getFirstName()debe devolver la cadena Bob.
bob.getLastName()debe devolver la cadena Ross.
bob.getFullName()debe devolver la cadena Bob Ross.
bob.getFullName()debe devolver la cadena Haskell Rossdespués de bob.setFirstName("Haskell").
bob.getFullName()debe devolver la cadena Haskell Currydespués de bob.setLastName("Curry").
bob.getFullName()debe devolver la cadena Haskell Currydespués de bob.setFullName("Haskell Curry").
bob.getFirstName()debe devolver la cadena Haskelldespués de bob.setFullName("Haskell Curry").
bob.getLastName()debe devolver la cadena Currydespués de bob.setFullName("Haskell Curry").*/

const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
