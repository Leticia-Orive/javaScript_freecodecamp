//Copie una matriz con el operador de propagación
/* Si bien slice()nos permite ser selectivos sobre qué elementos de una matriz copiar, entre varias otras tareas útiles, el nuevo operador de extensión de ES6 nos permite copiar fácilmente todos los elementos de una matriz, en orden, con una sintaxis simple y fácil de leer. La sintaxis extendida simplemente se ve así:...

En la práctica, podemos usar el operador de propagación para copiar una matriz de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray[true, true, undefined, false, null]es igual thisArraypermanece sin cambios y thatArraycontiene los mismos elementos que thisArray.

Hemos definido una función copyMachineque toma arr(una matriz) y num(un número) como argumentos. Se supone que la función devuelve una nueva matriz formada por numcopias de arr. Hemos hecho la mayor parte del trabajo por usted, pero aún no funciona del todo bien. Modifique la función usando la sintaxis extendida para que funcione correctamente (pista: ¡otro método que ya hemos cubierto podría ser útil aquí!).*/
//Ejercicio
/* copyMachine([true, false, true], 2)debería volver[[true, false, true], [true, false, true]]
copyMachine([1, 2, 3], 5)debería volver[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
copyMachine([true, true, null], 1)debería volver[[true, true, null]]
copyMachine(["it works"], 3)debería volver[["it works"], ["it works"], ["it works"]]
La copyMachine función debe utilizar la spread operatormatriz with arr*/
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
