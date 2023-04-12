//Devolver valores booleanos de funciones
/*Puede recordar de Comparación con el operador de igualdad que todos los operadores de comparación devuelven un valor booleano trueo false.

A veces, las personas usan una if/elsedeclaración para hacer una comparación, como esta:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Pero hay una mejor manera de hacer esto. Como ===devuelve trueo false, podemos devolver el resultado de la comparación:

function isEqual(a, b) {
  return a === b;
}
Arregle la función isLesspara eliminar las if/elsedeclaraciones. */
//Ejercicio
/* isLess(10, 15)debería volvertrue
isLess(15, 10)debería volverfalse
No debe usar declaraciones if o else*/

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

console.log(isLess(10, 15));
