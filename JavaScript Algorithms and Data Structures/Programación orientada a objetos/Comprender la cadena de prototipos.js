//Comprender la cadena de prototipos
/* Todos los objetos en JavaScript (con algunas excepciones) tienen una extensión prototype. Además, un objeto prototypeen sí mismo es un objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
¡ Porque a prototypees un objeto, a prototypepuede tener el suyo propio prototype! En este caso, el prototypede Bird.prototypees Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
¿Cómo es esto útil? Puede recordar el hasOwnPropertymétodo de un desafío anterior:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");
El hasOwnPropertymétodo se define en Object.prototype, al que puede acceder Bird.prototype, al que luego puede acceder duck. Este es un ejemplo de la prototypecadena. En esta prototypecadena, Birdes el supertypefor duck, mientras que duckes el subtype. Objectes a supertypepara ambos Birdy duck. Objectes un supertypepara todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede usar el hasOwnPropertymétodo.

Modifique el código para mostrar la cadena de prototipo correcta.*/
//Ejercicio
/* Su código debe mostrar que Object.prototypees el prototipo deDog.prototype*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
