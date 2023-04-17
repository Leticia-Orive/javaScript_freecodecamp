//Convertidor de números romanos
/* Convierte el número dado en un número romano.

números romanos	números arábigos
METRO	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
SG	40
X	10
IX	9
V	5
IV	4
I	1
Todas las respuestas en números romanos  deben proporcionarse en mayúsculas.*/
//Ejercicios
/* convertToRoman(2) debe devolver la cadena II.
convertToRoman(3) debe devolver la cadena III.
convertToRoman(4) debe devolver la cadena IV.
convertToRoman(5) debe devolver la cadena V.
convertToRoman(9) debe devolver la cadena IX.
convertToRoman(12) debe devolver la cadena XII.
convertToRoman(16) debe devolver la cadena XVI.
convertToRoman(29) debe devolver la cadena XXIX.*/

function convertToRoman(num) {
  /* 
  Main IDea
  convert num to str 
  convert each str char to it's corresponding Roman number considering it's order 
  join the result 
  */
  var str = "";
  str += num;
  var result = [];
  var res1 = "";
  var res2 = "";
  var res3 = "";
  var res4 = "";
  if (str.length == 0) {
    result = [];
  } else if (str.length > 0) {
    switch (str[str.length - 1]) {
      case "1":
        res1 = "I";
        break;
      case "2":
        res1 = "II";
        break;
      case "3":
        res1 = "III";
        break;
      case "4":
        res1 = "IV";
        break;
      case "5":
        res1 = "V";
        break;
      case "6":
        res1 = "VI";
        break;
      case "7":
        res1 = "VII";
        break;
      case "8":
        res1 = "VIII";
        break;
      case "9":
        res1 = "IX";
        break;
    }
    switch (str[str.length - 2]) {
      case "1":
        res2 = "X";
        break;
      case "2":
        res2 = "XX";
        break;
      case "3":
        res2 = "XXX";
        break;
      case "4":
        res2 = "XL";
        break;
      case "5":
        res2 = "L";
        break;
      case "6":
        res2 = "LX";
        break;
      case "7":
        res2 = "LXX";
        break;
      case "8":
        res2 = "LXXX";
        break;
      case "9":
        res2 = "XC";
        break;
    }
    switch (str[str.length - 3]) {
      case "1":
        res3 = "C";
        break;
      case "2":
        res3 = "CC";
        break;
      case "3":
        res3 = "CCC";
        break;
      case "4":
        res3 = "CD";
        break;
      case "5":
        res3 = "D";
        break;
      case "6":
        res3 = "DC";
        break;
      case "7":
        res3 = "DCC";
        break;
      case "8":
        res3 = "DCCC";
        break;
      case "9":
        res3 = "CM";
        break;
    }
    switch (str[str.length - 4]) {
      case "1":
        res4 = "M";
        break;
      case "2":
        res4 = "MM";
        break;
      case "3":
        res4 = "MMM";
        break;
    }
  }
  result.push(res4, res3, res2, res1);
  return result.join("");
}

convertToRoman(39999);
