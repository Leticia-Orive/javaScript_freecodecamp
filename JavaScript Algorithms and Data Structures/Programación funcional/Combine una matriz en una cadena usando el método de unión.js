//Combine una matriz en una cadena usando el método de unión
/* El joinmétodo se utiliza para unir los elementos de una matriz para crear una cadena. Toma un argumento para el delimitador que se usa para separar los elementos de la matriz en la cadena.

Aquí hay un ejemplo:

const arr = ["Hello", "World"];
const str = arr.join(" ");
strtendría un valor de la cadena Hello World.

Use el joinmétodo (entre otros) dentro de la sentensifyfunción para hacer una oración a partir de las palabras en la cadena str. La función debe devolver una cadena. Por ejemplo, I-like-Star-Warsse convertiría a I like Star Wars. Para este desafío, no utilice el replacemétodo.*/
//Ejercicio
/* Su código debe usar el joinmétodo.
Su código no debe usar el replacemétodo.
sentensify ("May-the-force-be-with-you")debe devolver una cadena.
sentensify ("May-the-force-be-with-you")debe devolver la cadena May the force be with you.
sentensify ("The.force.is.strong.with.this.one")debe devolver la cadena The force is strong with this one.
sentensify ("There,has,been,an,awakening")debe devolver la cadena There has been an awakening.*/
function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
