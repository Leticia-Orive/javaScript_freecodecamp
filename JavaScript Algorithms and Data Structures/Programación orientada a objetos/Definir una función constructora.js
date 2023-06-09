//Definir una función constructora
/* Los constructores son funciones que crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piense en ellos como un modelo para la creación de nuevos objetos.

Aquí hay un ejemplo de un constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
Este constructor define un Birdobjeto con las propiedades name, colory numLegsestablecidas en Albert, blue y 2, respectivamente. Los constructores siguen algunas convenciones:

Los constructores se definen con un nombre en mayúsculas para distinguirlos de otras funciones que no lo son constructors.
Los constructores usan la palabra clave thispara establecer las propiedades del objeto que crearán. Dentro del constructor, thisse refiere al nuevo objeto que creará.
Los constructores definen propiedades y comportamientos en lugar de devolver un valor como lo harían otras funciones.
Cree un constructor, Dog, con propiedades name, colory numLegsque se establezcan en una cadena, una cadena y un número, respectivamente.*/
//Ejercicio
/* Dogdebe tener una name propiedad establecida en una cadena.
Dog debe tener una color propiedad establecida en una cadena.
Dog debe tener una numLegs propiedad establecida en un número.*/
function Dog() {
  (this.name = "Geogre"), (this.color = "White"), (this.numLegs = 4);
}
