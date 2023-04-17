//Aplicar programación funcional para convertir cadenas en slugs de URL
/* Los últimos desafíos cubrieron varios métodos útiles de matrices y cadenas que siguen los principios de programación funcional. También aprendimos sobre reduce, que es un método poderoso que se usa para reducir los problemas a formas más simples. Desde el cálculo de promedios hasta la clasificación, se puede lograr cualquier operación de matriz aplicándola. Recuerde que mapy filterson casos especiales de reduce.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de administración de contenido (CMS) tienen los títulos de una publicación agregados a parte de la URL para propósitos simples de marcadores. Por ejemplo, si escribe una publicación de Medium titulada Stop Using Reduce, es probable que la URL tenga algún tipo de cadena de título ( .../stop-using-reduce). Es posible que ya haya notado esto en el sitio de freeCodeCamp.

Rellene la urlSlugfunción para que convierta una cadena titley devuelva la versión con guión de la URL. Puede usar cualquiera de los métodos que se tratan en esta sección y no use replace. Aquí están los requisitos:

La entrada es una cadena con espacios y palabras en mayúsculas y minúsculas

El resultado es una cadena con los espacios entre palabras reemplazados por un guión ( -)

La salida debe ser todas las letras minúsculas

La salida no debe tener espacios.*/
//Ejercicio
/* Su código no debe usar el replacemétodo para este desafío.
urlSlug("Winter Is Coming")debe devolver la cadena winter-is-coming.
urlSlug(" Winter Is  Coming")debe devolver la cadena winter-is-coming.
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")debe devolver la cadena a-mind-needs-books-like-a-sword-needs-a-whetstone.
urlSlug("Hold The Door")debe devolver la cadena hold-the-door.*/
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
