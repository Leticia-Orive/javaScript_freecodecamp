//Título Caso una Oración
/* Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. Asegúrate de que el resto de la palabra esté en minúsculas.
A los efectos de este ejercicio, también debe escribir en mayúsculas las palabras de conexión como they of.*/
//Ejercicio
/* titleCase("I'm a little tea pot")debe devolver una cadena.
titleCase("I'm a little tea pot")debe devolver la cadena I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt")debe devolver la cadena Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")debe devolver la cadena Here Is My Handle Here Is My Spout.*/

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] =
      newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
