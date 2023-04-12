//Probar objetos para propiedades
/*A veces es útil verificar si la propiedad de un objeto dado existe o no. Podemos usar el .hasOwnProperty(propname)método de objetos para determinar si ese objeto tiene el nombre de propiedad dado. .hasOwnProperty()devoluciones trueo false si la propiedad se encuentra o no.

Ejemplo

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
El primero hasOwnPropertyregresa true, mientras que el segundo regresa false.

Modifique la función checkObjpara probar si un objeto pasado a la función ( obj) contiene una propiedad específica ( checkProp). Si se encuentra la propiedad, devuelve el valor de esa propiedad. Si no, regresa "Not Found". */
//Ejercicio
/* checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") debe devolver la cadena pony.
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") debe devolver la cadena kitten.
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") debe devolver la cadena Not Found.
checkObj({city: "Seattle"}, "city") debe devolver la cadena Seattle.
checkObj({city: "Seattle"}, "district") debe devolver la cadena Not Found.
checkObj({pet: "kitten", bed: "sleigh"}, "gift") debe devolver la cadena Not Found.*/
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
