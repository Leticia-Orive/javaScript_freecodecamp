//Manejar una Promesa Rechazada con catch
/* catches el método utilizado cuando su promesa ha sido rechazada. Se ejecuta inmediatamente después de rejectllamar al método de una promesa. Aquí está la sintaxis:

myPromise.catch(error => {
  
});
errores el argumento pasado al rejectmétodo.

Agregue el catchmétodo a su promesa. Úselo errorcomo parámetro de su función de devolución de llamada e inicie sesión erroren la consola.*/
//Ejercicios
/* Debe llamar al catch método en la promesa.
Su catch método debe tener una función de devolución de llamada error como su parámetro.
Debe iniciar sesión erroren la consola.*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});
makeServerRequest.catch((error) => {
  console.log(error);
});
