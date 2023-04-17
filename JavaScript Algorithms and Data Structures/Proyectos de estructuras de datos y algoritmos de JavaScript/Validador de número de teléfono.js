//Validador de número de teléfono
/* Regresa true si la cadena pasada parece un número de teléfono válido de EE. UU.

El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número de EE. UU. válido. Los siguientes son ejemplos de formatos válidos para números de EE. UU. (consulte las pruebas a continuación para conocer otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
Para este desafío, se le presentará una cadena como 800-692-7753o 8oo-six427676;laskdjf. Su trabajo es validar o rechazar el número de teléfono de EE. UU. en función de cualquier combinación de los formatos proporcionados anteriormente. El código de área es requerido. Si se proporciona el código de país, debe confirmar que el código de país es 1. Devuelve true si la cadena es un número de teléfono válido de EE. UU.; de lo contrario regresa false .*/
//Ejercicios
/* telephoneCheck("555-555-5555")debe devolver un valor booleano.
telephoneCheck("1 555-555-5555") debería true volver
telephoneCheck("1 (555) 555-5555") debería true volver
telephoneCheck("5555555555") debería true volver
telephoneCheck("555-555-5555") debería true volver
telephoneCheck("(555)555-5555") debería true volver
telephoneCheck("1(555)555-5555") debería true volver
telephoneCheck("555-5555") debería false volver
telephoneCheck("5555555") debería false volver
telephoneCheck("1 555)555-5555") debería false volver
telephoneCheck("1 555 555 5555") debería true volver
telephoneCheck("1 456 789 4444") debería true volver
telephoneCheck("123**&!!asdf#") debería false volver
telephoneCheck("55555555") debería false volver
telephoneCheck("(6054756961)") debería false volver
telephoneCheck("2 (757) 622-7382") debería false volver
telephoneCheck("0 (757) 622-7382") debería false volver
telephoneCheck("-1 (757) 622-7382") debería false volver
telephoneCheck("2 757 622-7382") debería false volver
telephoneCheck("10 (757) 622-7382") debería false volver
telephoneCheck("27576227382") debería false volver
telephoneCheck("(275)76227382") debería false volver
telephoneCheck("2(757)6227382") debería false volver
telephoneCheck("2(757)622-7382") debería false volver
telephoneCheck("555)-555-5555") debería false volver
telephoneCheck("(555-555-5555") debería false volver
telephoneCheck("(555)5(55?)-5555") debería false volver
telephoneCheck("55 55-55-555-5") debería false volver
telephoneCheck("11 555-555-5555") debería false volver*/

function telephoneCheck(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  if (rex1.test(str)) {
    return true;
  } else {
    return rex2.test(str) ? true : false;
  }
}
