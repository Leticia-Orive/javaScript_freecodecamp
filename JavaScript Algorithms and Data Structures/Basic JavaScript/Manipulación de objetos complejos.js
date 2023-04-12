//Manipulación de objetos complejos
/* A veces, es posible que desee almacenar datos en una estructura de datos flexible . Un objeto JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas , números , valores booleanos , matrices , funciones y objetos .

He aquí un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
Esta es una matriz que contiene un objeto dentro. El objeto tiene varios metadatos sobre un álbum. También tiene una formatsmatriz anidada. Si desea agregar más registros de álbumes, puede hacerlo agregando registros a la matriz de nivel superior. Los objetos contienen datos en una propiedad, que tiene un formato de clave-valor. En el ejemplo anterior, "artist": "Daft Punk"es una propiedad que tiene una clave de artisty un valor de Daft Punk.

Nota:  Deberá colocar una coma después de cada objeto de la matriz, a menos que sea el último objeto de la matriz.

Agregue un nuevo álbum a la myMusicmatriz. Suma artisty titlecadenas, release_yearnúmero y una formatsmatriz de cadenas.*/
//Ejercicio
/* myMusic debe ser una matriz
myMusic debe tener al menos dos elementos
Los elementos de la myMusic matriz  deben ser objetos.
Su objeto myMusic debe tener al menos 4 propiedades
Su objeto myMusic debe contener la propiedad artistque es una cadena
Su objeto myMusic debe contener la propiedad titleque es una cadena
Su objeto myMusic debe contener la propiedad release_year que es un número
Su objeto myMusic debe contener una formatspropiedad que es una matriz
formats debe ser una matriz de cadenas con al menos dos elementos*/
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  // Add record here
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"],
  },
];
