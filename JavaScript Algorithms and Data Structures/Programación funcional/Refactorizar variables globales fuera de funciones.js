//Refactorizar variables globales fuera de funciones
/* Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No altere una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. Sugerencia: usar algo como const newArr = arrVar, where arrVaris a array simplemente creará una referencia a la variable existente y no una copia. Entonces, cambiar un valor en newArrcambiaría el valor en arrVar.

Declarar parámetros de función: cualquier cálculo dentro de una función depende solo de los argumentos pasados ​​a la función, y no de ningún objeto o variable global.

Sumar uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con matrices u objetos más complejos.

Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. La addfunción debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.

Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del bookNameparámetro.*/
//Ejercicio
/* bookListno debe cambiar y seguir siendo igual ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
add(bookList, "A Brief History of Time")debería ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]volver
remove(bookList, "On The Electrodynamics of Moving Bodies")debería ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]volver
remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");debe igualar ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].*/
// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
