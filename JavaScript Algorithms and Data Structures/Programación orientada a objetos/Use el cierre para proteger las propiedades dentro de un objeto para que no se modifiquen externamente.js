//Use el cierre para proteger las propiedades dentro de un objeto para que no se modifiquen externamente
/* En el desafío anterior, birdtenía una propiedad pública name. Se considera público porque se puede acceder a él y cambiarlo fuera de la birddefinición de .

bird.name = "Duffy";
Por lo tanto, cualquier parte de su código puede cambiar fácilmente el nombre de birda cualquier valor. Piense en cosas como contraseñas y cuentas bancarias que se pueden modificar fácilmente en cualquier parte de su base de código. Eso podría causar muchos problemas.

La forma más sencilla de hacer que esta propiedad pública sea privada es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora en lugar de estar disponible globalmente. De esta manera, solo se puede acceder a la variable y cambiarla mediante métodos también dentro de la función constructora.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
Aquí getHatchedEggCounthay un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. Esto es posible porque hatchedEggse declara en el mismo contexto que getHatchedEggCount. En JavaScript, una función siempre tiene acceso al contexto en el que fue creada. Esto se closurellama

Cambia cómo weightse declara en la Birdfunción para que sea una variable privada. Luego, cree un método getWeightque devuelva el valor de weight15.*/
//Ejercicio
/* La weight propiedad debe ser una variable privada y se le debe asignar el valor de 15.
Su código debe crear un método llamado Birdque getWeightdevuelva el valor de la variable privada weight.
Su get Weight función debe devolver la variable privada weight.*/

function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}
