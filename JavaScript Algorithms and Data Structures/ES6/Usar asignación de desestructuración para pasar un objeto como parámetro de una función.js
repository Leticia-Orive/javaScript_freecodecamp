//Usar asignación de desestructuración para pasar un objeto como parámetro de una función
/* En algunos casos, puede desestructurar el objeto en un argumento de función en sí mismo.

Considere el siguiente código:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Esto efectivamente desestructura el objeto enviado a la función. Esto también se puede hacer en el lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Cuando profileDatase pasa a la función anterior, los valores se desestructuran del parámetro de la función para su uso dentro de la función.

Use la asignación de desestructuración dentro del argumento de la función halfpara enviar solo maxy mindentro de la función.*/
//Ejercicio
/* stats debería ser un object.
half(stats) debiera ser28.015
Se debe utilizar la desestructuración.
Se debe utilizar el parámetro desestructurado.*/

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line
