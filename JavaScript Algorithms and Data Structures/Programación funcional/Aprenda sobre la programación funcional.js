//Aprenda sobre la programación funcional
/*La programación funcional es un estilo de programación donde las soluciones son funciones simples y aisladas, sin efectos secundarios fuera del alcance de la función:INPUT -> PROCESS -> OUTPUT

La programación funcional se trata de:

Funciones aisladas: no depende del estado del programa, que incluye variables globales que están sujetas a cambios.

Funciones puras: la misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente

A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones prepareTeay getTeaya están definidas para usted. Llame a la getTeafunción para obtener 40 tazas de té para el equipo y guárdelas en la tea4TeamFCCvariable. */
//Ejercicio
/* La tea4TeamFCC variable debe contener 40 tazas de té para el equipo.
La tea4TeamFCC variable debe contener tazas de té verde.*/
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => "greenTea";

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

console.log(tea4TeamFCC);
