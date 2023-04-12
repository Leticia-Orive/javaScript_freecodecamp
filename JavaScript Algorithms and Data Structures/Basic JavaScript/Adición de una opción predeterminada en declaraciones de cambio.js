//Adición de una opción predeterminada en declaraciones de cambio
/* En una switchdeclaración, es posible que no pueda especificar todos los valores posibles como casedeclaraciones. En su lugar, puede agregar la defaultdeclaración que se ejecutará si no casese encuentran declaraciones coincidentes. Piense en ello como la elsedeclaración final de una if/elsecadena.

Una defaultdeclaración debe ser el último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
Escriba una declaración de cambio para establecer answerlas siguientes condiciones:
a- apple
b- bird
c- cat
default-stuff*/
//Ejercicio
/* switchOfStuff("a") debe devolver la cadenaapple
switchOfStuff("b") debe devolver la cadenabird
switchOfStuff("c") debe devolver la cadenacat
switchOfStuff("d") debe devolver la cadenastuff
switchOfStuff(4) debe devolver la cadenastuff
No debe usar declaraciones ifoelse
Debes usar una defaultdeclaración
Debes tener al menos 3 breaksentencias*/

function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code below this line

  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("c"));
