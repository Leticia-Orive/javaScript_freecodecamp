//Utilice la lógica condicional con declaraciones If
/* if Las declaraciones se utilizan para tomar decisiones en el código. La palabra clave ifle dice a JavaScript que ejecute el código entre llaves bajo ciertas condiciones, definidas entre paréntesis. Estas condiciones se conocen como Boolean condiciones y solo pueden ser trueo false.

Cuando la condición se evalúa como true, el programa ejecuta la declaración dentro de las llaves. Cuando la condición booleana se evalúa como false, la declaración dentro de las llaves no se ejecutará.

pseudocódigo

if ( la condición es verdadera ) {
  la declaración se ejecuta
}
Ejemplo

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true)devuelve la cadena It was truey test(false)devuelve la cadena It was false.

Cuando testse llama con un valor de true, la ifdeclaración evalúa myConditionpara ver si es así trueo no. Como lo es true, la función devuelve It was true. Cuando llamamos testcon un valor de false, no myCondition lo es y la declaración entre llaves no se ejecuta y la función regresa . true It was false

Cree una ifdeclaración dentro de la función para devolver Yes, that was truesi el parámetro wasThatTruees true y devolver No, that was falseen caso contrario.*/
//Ejercicio
/* trueOrFalse debería ser una función
trueOrFalse(true) debe devolver una cadena
trueOrFalse(false) debe devolver una cadena
trueOrFalse(true) debe devolver la cadena Yes, that was true
trueOrFalse(false) debe devolver la cadena No, that was false*/

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code below this line

  // Only change code above this line
}

console.log(trueOrFalse(true));
