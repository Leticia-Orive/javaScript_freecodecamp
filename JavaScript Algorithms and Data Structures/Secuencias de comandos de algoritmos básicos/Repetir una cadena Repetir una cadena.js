//Repetir una cadena Repetir una cadena
/* Repetir una cadena dada str(primer argumento) por num tiempos (segundo argumento). Devuelve una cadena vacía si numno es un número positivo. A los efectos de este desafío, no utilice el método incorporado .repeat().*/
//Ejercicio
/* repeatStringNumTimes("*", 3) debe devolver la cadena ***.
repeatStringNumTimes("abc", 3) debe devolver la cadena abcabcabc.
repeatStringNumTimes("abc", 4) debe devolver la cadena abcabcabcabc.
repeatStringNumTimes("abc", 1) debe devolver la cadena abc.
repeatStringNumTimes("*", 8) debe devolver la cadena ********.
repeatStringNumTimes("abc", -2) debe devolver una cadena vacía ( "").
repeat() No se debe utilizar el método integrado .
repeatStringNumTimes("abc", 0) debería ""volver*/

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}
