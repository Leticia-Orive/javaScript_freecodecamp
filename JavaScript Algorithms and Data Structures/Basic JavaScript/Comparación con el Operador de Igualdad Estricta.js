//Comparación con el Operador de Igualdad Estricta
/* La igualdad estricta ( ===) es la contrapartida del operador de igualdad ( ==). Sin embargo, a diferencia del operador de igualdad, que intenta convertir ambos valores que se comparan con un tipo común, el operador de igualdad estricta no realiza una conversión de tipo.

Si los valores que se comparan tienen tipos diferentes, se consideran desiguales y el operador de igualdad estricta devolverá falso.

Ejemplos

3 ===  3  // true
3 === '3' // false
En el segundo ejemplo, 3es un Numbertipo y '3'es un Stringtipo.

Utilice el operador de igualdad estricta en la ifinstrucción para que la función devuelva la cadena Equalcuando valsea estrictamente igual a 7.*/
//Ejercicio
/* testStrict(10) debe devolver la cadenaNot Equal
testStrict(7) debe devolver la cadenaEqual
testStrict("7") debe devolver la cadenaNot Equal
Debes usar el ===operador*/

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

/*
3 == 3 
3 === '3' 
*/
