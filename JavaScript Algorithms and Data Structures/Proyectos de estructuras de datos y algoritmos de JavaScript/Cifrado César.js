//Cifrado César
/* Uno de los cifrados más simples y ampliamente conocidos es el cifrado César , también conocido como cifrado de desplazamiento . En un cifrado por desplazamiento, los significados de las letras se modifican en una cantidad determinada.

Un uso moderno común es el cifrado ROT13 , donde los valores de las letras se desplazan 13 lugares. Así A ↔ N, B ↔ Oy así sucesivamente.

Escriba una función que tome una cadena codificada ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras serán mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, puntuación), pero páselos.*/
//Ejercicios
/* rot13("SERR PBQR PNZC")debe decodificar a la cadenaFREE CODE CAMP
rot13("SERR CVMMN!")debe decodificar a la cadenaFREE PIZZA!
rot13("SERR YBIR?")debe decodificar a la cadenaFREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")debe decodificar a la cadenaTHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.*/

function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
