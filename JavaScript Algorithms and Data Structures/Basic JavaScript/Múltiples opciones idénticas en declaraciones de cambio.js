//Múltiples opciones idénticas en declaraciones de cambio
/* Si breakse omite la declaración de una switchdeclaración case, las siguientes casedeclaraciones se ejecutan hasta que breakse encuentra a. Si tiene varias entradas con la misma salida, puede representarlas en una switchdeclaración como esta:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Los casos 1, 2 y 3 producirán todos el mismo resultado.

Escriba una declaración de cambio para establecer answerlos siguientes rangos:
1-3- Low
4-6- Mid
7-9-High

Nota: Deberá tener una casedeclaración para cada número en el rango.*/
//Ejercicio
/* sequentialSizes(1) debe devolver la cadenaLow
sequentialSizes(2) debe devolver la cadenaLow
sequentialSizes(3) debe devolver la cadenaLow
sequentialSizes(4) debe devolver la cadenaMid
sequentialSizes(5) debe devolver la cadenaMid
sequentialSizes(6) debe devolver la cadenaMid
sequentialSizes(7) debe devolver la cadenaHigh
sequentialSizes(8) debe devolver la cadenaHigh
sequentialSizes(9) debe devolver la cadenaHigh
No debe usar declaraciones ifoelse
Deberías tener nueve casedeclaraciones.*/

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code below this line

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(8));
