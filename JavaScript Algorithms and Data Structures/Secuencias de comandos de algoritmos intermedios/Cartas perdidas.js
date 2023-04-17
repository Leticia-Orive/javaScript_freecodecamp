//Cartas perdidas
/* Encuentre la letra que falta en el rango de letras aprobadas y devuélvala.

Si todas las letras están presentes en el rango, devuelve undefined.*/
//Ejercicio
/* fearNotLetter("abce")debe devolver la cadena d.
fearNotLetter("abcdefghjklmno")debe devolver la cadena i.
fearNotLetter("stvwx")debe devolver la cadena u.
fearNotLetter("bcdf")debe devolver la cadena e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz")debería undefined volver*/

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");
