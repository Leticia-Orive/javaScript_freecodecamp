//Genera números enteros aleatorios con JavaScript
/* Es genial que podamos generar números decimales aleatorios, pero es aún más útil si lo usamos para generar números enteros aleatorios.

Se usa Math.random()para generar un decimal aleatorio.
Multiplica ese decimal aleatorio por 20.
Use otra función Math.floor()para redondear el número hacia abajo a su número entero más cercano.
Recuerde que Math.random()nunca puede devolver a 1y, debido a que estamos redondeando hacia abajo, es imposible obtener 20. Esta técnica nos dará un número entero entre 0y 19.

Poniendo todo junto, así es como se ve nuestro código:

Math.floor(Math.random() * 20);
Estamos llamando Math.random(), multiplicando el resultado por 20, luego pasando el valor a Math.floor()la función para redondear el valor al número entero más cercano.

Utilice esta técnica para generar y devolver un número entero aleatorio entre 0y 9.*/
//Ejercicio
/* El resultado de randomWholeNum debe ser un número entero.
Debe utilizar Math.randompara generar un número aleatorio.
Deberías haber multiplicado el resultado de Math.random por 10 para convertirlo en un número entre cero y nueve.
Debe usar Math.floorpara eliminar la parte decimal del número.*/
const randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
