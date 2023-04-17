//Caso de punción lumbar
/* Convierte una cuerda en una caja espinal. El caso espinal es todo-palabras-en-minúsculas-unidas-por-guiones.*/
//Ejercicio
/* spinalCase("This Is Spinal Tap")debe devolver la cadena this-is-spinal-tap.
spinalCase("thisIsSpinalTap")debe devolver la cadena this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show")debe devolver la cadena the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh")debe devolver la cadena teletubbies-say-eh-oh.
spinalCase("AllThe-small Things")debe devolver la cadena all-the-small-things.*/

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
