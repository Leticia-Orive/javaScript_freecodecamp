//Extender constructores para recibir argumentos
/* Los constructores Birdy Dogdel último desafío funcionaron bien. Sin embargo, observe que todos Birdslos que se crean con el Birdconstructor se denominan automáticamente Albert, son de color azul y tienen dos patas. ¿Qué pasa si quieres pájaros con diferentes valores de nombre y color? Es posible cambiar las propiedades de cada ave manualmente pero eso sería mucho trabajo:

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
Suponga que está escribiendo un programa para realizar un seguimiento de cientos o incluso miles de aves diferentes en un aviario. Llevaría mucho tiempo crear todos los pájaros y luego cambiar las propiedades a diferentes valores para cada uno. Para crear más fácilmente diferentes Birdobjetos, puede diseñar su constructor Bird para aceptar parámetros:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
Luego pase los valores como argumentos para definir cada ave única en el Birdconstructor: let cardinal = new Bird("Bruce", "red");Esto da una nueva instancia de Birdcon namey colorpropiedades establecidas en Brucey red, respectivamente. La numLegspropiedad todavía está establecida en 2. cardinalTiene estas propiedades:

cardinal.name
cardinal.color
cardinal.numLegs
El constructor es más flexible. Ahora es posible definir las propiedades de cada uno Birden el momento en que se crea, que es una forma en que los constructores de JavaScript son tan útiles. Agrupan objetos en función de características y comportamientos compartidos y definen un modelo que automatiza su creación.

Crea otro Dogconstructor. Esta vez, configúrelo para que tome los parámetros namey color, y fije la propiedad numLegsen 4. Luego cree una nueva Dogguardada en una variable terrier. Pásale dos cadenas como argumentos para las propiedades namey color.*/
//Ejercicio
/* Dog debe recibir un argumento para name.
Dog debe recibir un argumento para color.
Dog debe tener la propiedad numLegsestablecida en 4.
terrier debe crearse utilizando el Dogconstructor.*/

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("George", "White");
