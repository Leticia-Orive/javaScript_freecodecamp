//Truncar una cadena
/* Trunca una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). Devuelve la cadena truncada con un ...final.*/
//Ejercicio
/*truncateString("A-tisket a-tasket A green and yellow basket", 8) debe devolver la cadena A-tisket....
truncateString("Peter Piper picked a peck of pickled peppers", 11) debe devolver la cadena Peter Piper....
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) debe devolver la cadena A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) debe devolver la cadena A-tisket a-tasket A green and yellow basket.
truncateString("A-", 1) debe devolver la cadena A....
truncateString("Absolutely Longer", 2) debe devolver la cadena Ab.... */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
