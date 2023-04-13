//Utilice la asignación de desestructuración para extraer valores de los objetos
/* La asignación de desestructuración es una sintaxis especial introducida en ES6, para asignar claramente valores tomados directamente de un objeto.

Considere el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
nametendría un valor de la cadena John Doe, y agetendría el número 34.

Aquí hay una declaración de asignación equivalente que usa la sintaxis de desestructuración de ES6:

const { name, age } = user;
Nuevamente, nametendría un valor de la cadena John Doey agetendría el número 34.

Aquí, las variables namey agese crearán y se les asignarán los valores de sus respectivos valores del userobjeto. Puedes ver cuánto más limpio es esto.

Puede extraer tantos o tan pocos valores del objeto como desee.

Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar las variables todayy tomorrowlos valores de todayy tomorrowdesde el HIGH_TEMPERATURESobjeto.*/
//Ejercicio
/* Debe eliminar la sintaxis de asignación de ES5.
Debe utilizar la desestructuración para crear la today variable.
Debe utilizar la desestructuración para crear la tomorrow variable.
today debe ser igual a 77y tomorrowdebe ser igual a 80.*/
/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line 
*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
