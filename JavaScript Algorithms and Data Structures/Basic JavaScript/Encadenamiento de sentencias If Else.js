//Encadenamiento de sentencias If Else
/*if/elselas declaraciones se pueden encadenar juntas para una lógica compleja. Aquí está el pseudocódigo de múltiples sentencias if/ encadenadas else if:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Escriba sentencias if/ encadenadas else ifpara cumplir las siguientes condiciones:

num < 5- regreso Tiny
num < 10- regreso Small
num < 15- regreso Medium
num < 20- regreso Large
num >= 20- regresoHuge */
//Ejercicio
/* Debes tener al menos cuatro elsedeclaraciones.
Debes tener al menos cuatro ifdeclaraciones.
Debe tener al menos una returndeclaración
testSize(0) debe devolver la cadenaTiny
testSize(4) debe devolver la cadenaTiny
testSize(5) debe devolver la cadenaSmall
testSize(8) debe devolver la cadenaSmall
testSize(10) debe devolver la cadenaMedium
testSize(14) debe devolver la cadenaMedium
testSize(15) debe devolver la cadenaLarge
testSize(17) debe devolver la cadenaLarge
testSize(20) debe devolver la cadenaHuge
testSize(25) debe devolver la cadenaHuge*/

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(19));
