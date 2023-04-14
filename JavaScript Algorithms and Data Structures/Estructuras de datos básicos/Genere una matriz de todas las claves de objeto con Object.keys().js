//Genere una matriz de todas las claves de objeto con Object.keys()
/* También podemos generar una matriz que contenga todas las claves almacenadas en un objeto con el Object.keys()método. Este método toma un objeto como argumento y devuelve una matriz de cadenas que representan cada propiedad del objeto. Nuevamente, no habrá un orden específico para las entradas en la matriz.

Termina de escribir la getArrayOfUsersfunción para que devuelva una matriz que contenga todas las propiedades del objeto que recibe como argumento.*/
//Ejercicio
/* El usersobjeto solo debe contener las claves Alan, Jeff, SarahyRyan
La getArrayOfUsers función debe devolver una matriz que contiene todas las claves en el users objeto*/

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));
