//Usar un constructor para crear objetos
/* Aquí está el Birdconstructor del desafío anterior:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTA: this dentro del constructor siempre se refiere al objeto que se está creando.

Tenga en cuenta que el newoperador se usa cuando se llama a un constructor. Esto le dice a JavaScript que cree una nueva instancia de Birdcalled blueBird. Sin el newoperador, thisdentro del constructor no apuntaría al objeto recién creado, dando resultados inesperados. Ahora blueBirdtiene todas las propiedades definidas dentro del Birdconstructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Al igual que cualquier otro objeto, se puede acceder a sus propiedades y modificarlas:

blueBird.name = 'Elvira';
blueBird.name;
Usa el Dogconstructor de la última lección para crear una nueva instancia de Dog, asignándola a una variable hound.*/
//Ejercicio
/* hound debe crearse utilizando el Dogconstructor.
Su código debe usar el newoperador para crear una instancia de Dog.*/

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();
