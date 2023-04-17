//Buscadores Guardianes
/* Cree una función que mire a través de una matriz arry devuelva el primer elemento que pase una 'prueba de verdad'. Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true. Si ningún elemento pasa la prueba, devuelve undefined.*/
//Ejercicio
/* findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) debería 8 volver
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) debería undefined volver*/
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
