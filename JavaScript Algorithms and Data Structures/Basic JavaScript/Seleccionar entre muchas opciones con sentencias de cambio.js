//Seleccionar entre muchas opciones con sentencias de cambio
/* Si necesita hacer coincidir un valor con muchas opciones, puede usar una declaración de cambio . Una switchdeclaración compara el valor con las declaraciones de caso que definen varios valores posibles. Cualquier instrucción de JavaScript válida se puede ejecutar dentro de un bloque de casos y se ejecutará desde el primer casevalor coincidente hasta que breakse encuentre a.

Aquí hay un ejemplo de una switchdeclaración:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
caselos valores se prueban con igualdad estricta ( ===). Le breakdice a JavaScript que deje de ejecutar declaraciones. Si se breakomite, se ejecutará la siguiente instrucción.

Escriba una declaración de cambio que pruebe valy establezca answerlas siguientes condiciones:
1- alpha
2- beta
3- gamma
4-delta*/
//Ejercicio
/* caseInSwitch(1) debe tener un valor de la cadenaalpha
caseInSwitch(2) debe tener un valor de la cadenabeta
caseInSwitch(3) debe tener un valor de la cadenagamma
caseInSwitch(4) debe tener un valor de la cadenadelta
No debe usar declaraciones ifoelse
Debes tener al menos 3 breaksentencias*/
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code below this line

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(3));

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
