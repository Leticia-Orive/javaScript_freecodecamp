//Donde estás
/* Cree una función que mire a través de una matriz de objetos (primer argumento) y devuelva una matriz de todos los objetos que tienen pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección si se va a incluir en la matriz devuelta.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]y el segundo argumento es { last: "Capulet" }, entonces debe devolver el tercer objeto de la matriz (el primer argumento), porque contiene el nombre y su valor, que se pasó como el segundo argumento.

*/
//Ejercicio
/*whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })debería [{ first: "Tybalt", last: "Capulet" }]volver
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })debería [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]volver
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })debería [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]volver
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })debería [{ "apple": 1, "bat": 2, "cookie": 2 }]volver
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })debería [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]volver
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})debería volver[]
whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})debería volver[] */

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(souceKeys[i]) ||
        obj[souceKeys[i]] !== source[souceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
