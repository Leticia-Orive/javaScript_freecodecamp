//Búsqueda de perfil
/* Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

Se ha escrito previamente una lookUpProfilefunción que toma namey una propiedad ( ) como argumentos.prop

La función debe verificar si namees un contacto real firstNamey si la propiedad dada ( prop) es una propiedad de ese contacto.

Si ambos son verdaderos, devuelva el "valor" de esa propiedad.

Si name no corresponde a ningún contacto, devuelva la cadena No such contact.

Si propno corresponde a ninguna propiedad válida de un contacto que coincida, name de vuelva la cadena No such property.*/
//Ejercicio
/* lookUpProfile("Kristian", "lastName")debe devolver la cadenaVos
lookUpProfile("Sherlock", "likes") debería volver["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") debe devolver una matriz
lookUpProfile("Bob", "number") debe devolver la cadenaNo such contact
lookUpProfile("Bob", "potato") debe devolver la cadenaNo such contact
lookUpProfile("Akira", "address") debe devolver la cadena No such property*/
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
// Only change code above this line

const data = lookUpProfile("Akira", "likes");
console.log(data);
