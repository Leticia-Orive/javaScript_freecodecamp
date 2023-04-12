//Construir objetos de JavaScript
/* Es posible que haya escuchado el término objectantes.

Los objetos son similares a arrays, excepto que en lugar de usar índices para acceder y modificar sus datos, accede a los datos en los objetos a través de lo que se llama properties.

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

Aquí hay un objeto gato de muestra:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
En este ejemplo, todas las propiedades se almacenan como cadenas, como name, legsy tails. Sin embargo, también puede usar números como propiedades. Incluso puede omitir las comillas para las propiedades de cadena de una sola palabra, de la siguiente manera:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
Sin embargo, si su objeto tiene propiedades que no son cadenas, JavaScript las encasillará automáticamente como cadenas.

Cree un objeto que represente a un perro llamado myDogque contenga las propiedades name(una cadena), legs, tailsy friends.

Puede establecer estas propiedades de objeto en los valores que desee, siempre que namesea una cadena, legssean tailsnúmeros y friendssea una matriz.*/
//Ejercicio
/* myDog debe contener la propiedad namey debe ser un archivo string.
myDog debe contener la propiedad legsy debe ser un archivo number.
myDog debe contener la propiedad tailsy debe ser un archivo number.
myDog debe contener la propiedad friendsy debe ser un array.
myDog solo debe contener todas las propiedades dadas.*/

const myDog = {
  // Only change code below this line
  name: "Quincy",
  legs: 3,
  tails: 2,
  friends: [],

  // Only change code above this line
};
