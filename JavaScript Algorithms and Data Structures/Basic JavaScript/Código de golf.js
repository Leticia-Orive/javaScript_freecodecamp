//Código de golf
/* En el juego de golf, cada hoyo tiene un par, es decir, el número promedio que strokesse espera que haga un golfista para hundir la bola en el hoyo y completar el juego. Dependiendo de qué tan arriba o abajo parestés strokes, hay un apodo diferente.

Su función será pasada pary strokesargumentos. Devuelve la cadena correcta de acuerdo con esta tabla que enumera los trazos en orden de prioridad; de arriba (más alto) a abajo (más bajo):

trazos	Devolver
1	"¡Hoyo en uno!"
<= par - 2	"Águila"
par - 1	"Pajarito"
par	"Par"
par + 1	"Espectro"
par + 2	"Doble bogey"
>= par + 3	"¡Vete a casa!"
pary strokessiempre será numérico y positivo. Hemos agregado una matriz de todos los nombres para su conveniencia.*/
//Ejercicio
/* golfScore(4, 1)debe devolver la cadenaHole-in-one!
golfScore(4, 2) debe devolver la cadenaEagle
golfScore(5, 2) debe devolver la cadenaEagle
golfScore(4, 3) debe devolver la cadenaBirdie
golfScore(4, 4) debe devolver la cadenaPar
golfScore(1, 1) debe devolver la cadenaHole-in-one!
golfScore(5, 5) debe devolver la cadenaPar
golfScore(4, 5 )debe devolver la cadenaBogey
golfScore(4, 6) debe devolver la cadenaDouble Bogey
golfScore(4, 7) debe devolver la cadenaGo Home!
golfScore(5, 9) debe devolver la cadenaGo Home!*/

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}
