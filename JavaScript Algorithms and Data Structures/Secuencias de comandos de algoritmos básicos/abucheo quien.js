//abucheo quien
/* Comprueba si un valor se clasifica como un primitivo booleano. Regresar trueo false.
Las primitivas booleanas son truey false.*/
//Ejercicio
/* booWho(true) debería true volver
booWho(false) debería true volver
booWho([1, 2, 3]) debería false volver
booWho([].slice) debería false volver
booWho({ "a": 1 }) debería false volver
booWho(1) debería false volver
booWho(NaN) debería false volver
booWho("a") debería false volver
booWho("true") debería false volver
booWho("false") debería false volver*/

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
