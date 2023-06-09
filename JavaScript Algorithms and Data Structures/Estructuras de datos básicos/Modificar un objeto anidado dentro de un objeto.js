//Modificar un objeto anidado dentro de un objeto
/* Ahora echemos un vistazo a un objeto un poco más complejo. Las propiedades de los objetos se pueden anidar en una profundidad arbitraria y sus valores pueden ser cualquier tipo de datos compatibles con JavaScript, incluidas matrices e incluso otros objetos. Considera lo siguiente:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
nestedObject tiene tres propiedades: id(el valor es un número), date(el valor es una cadena) y data(el valor es un objeto con su estructura anidada). Si bien las estructuras pueden volverse complejas rápidamente, aún podemos usar las mismas notaciones para acceder a la información que necesitamos. Para asignar el valor 10a la busypropiedad del onlineStatusobjeto anidado, usamos la notación de puntos para hacer referencia a la propiedad:

nestedObject.data.onlineStatus.busy = 10;
Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él. Establezca el valor de la onlineclave en 45.*/
//Ejercicio
/* userActivitydebe tener idy datepropiedades data.
userActivity debe tener una dataclave configurada para un objeto con claves totalUsersy online.
La online propiedad anidada en la dataclave de userActivitydebe establecerse en 45
La online propiedad debe establecerse mediante la notación de puntos o corchetes.*/
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);
