//Agregar nuevas propiedades a un objeto de JavaScript
/* Puede agregar nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificaría.

Así es como agregaríamos una barkpropiedad a ourDog:

ourDog.bark = "bow-wow";
o

ourDog["bark"] = "bow-wow";
Ahora, cuando evaluemos ourDog.bark, obtendremos su ladrido, bow-wow.

Ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
Agregue una barkpropiedad myDogy configúrela en un sonido de perro, como "guau". Puede utilizar la notación de puntos o corchetes.*/
//Ejercicio
/* Debe agregar la propiedad barka myDog.
No debe agregar barka la inicialización de myDog.*/

const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line.

myDog["bark"] = "woof!";
