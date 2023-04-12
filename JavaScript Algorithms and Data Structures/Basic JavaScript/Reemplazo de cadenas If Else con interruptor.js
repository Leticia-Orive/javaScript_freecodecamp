//Reemplazo de cadenas If Else con interruptor
/* Si tiene muchas opciones para elegir, una switchdeclaración puede ser más fácil de escribir que muchas declaraciones if/ encadenadas else if. La siguiente:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
se puede reemplazar con:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Cambie las declaraciones if/ encadenadas else ifen una switchdeclaración.*/
//Ejercicio
/* No debe usar ninguna elsedeclaración en ninguna parte del editor.
No debe usar ninguna ifdeclaración en ninguna parte del editor.
Debes tener al menos cuatro breakdeclaraciones.
chainToSwitch("bob") debe devolver la cadenaMarley
chainToSwitch(42) debe devolver la cadenaThe Answer
chainToSwitch(1) debe devolver la cadenaThere is no #1
chainToSwitch(99) debe devolver la cadenaMissed me by this much!
chainToSwitch(7) debe devolver la cadenaAte Nine
chainToSwitch("John") debería devolver ""(cadena vacía)
chainToSwitch(156) debería devolver ""(cadena vacía)*/

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
