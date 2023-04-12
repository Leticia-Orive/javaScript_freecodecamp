//Acceso a objetos anidados
/* Se puede acceder a las subpropiedades de los objetos encadenando la notación de punto o corchete.

Aquí hay un objeto anidado:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2sería la cadena secrets, y ourStorage.desk.drawersería la cadena stapler.

Accede al myStorageobjeto y asigna el contenido de la glove boxpropiedad a la gloveBoxContentsvariable. Siempre que sea posible, use la notación de puntos para todas las propiedades; de lo contrario, use la notación de corchetes.*/
//Ejercicio
/* gloveBoxContents debe ser igual a la cadena maps.
Su código debe usar la notación de puntos y corchetes para acceder a myStorage.*/

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
