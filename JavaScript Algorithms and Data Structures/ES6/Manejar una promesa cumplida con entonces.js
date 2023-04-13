//Manejar una promesa cumplida con entonces
/* Las promesas son más útiles cuando tiene un proceso que lleva una cantidad de tiempo desconocida en su código (es decir, algo asincrónico), a menudo una solicitud del servidor. Cuando realiza una solicitud del servidor, lleva algo de tiempo y, una vez que se completa, generalmente desea hacer algo con la respuesta del servidor. Esto se puede lograr usando el thenmétodo. El thenmétodo se ejecuta inmediatamente después de que se cumpla su promesa con resolve. Aquí hay un ejemplo:

myPromise.then(result => {
  
});
resultproviene del argumento dado al resolvemétodo.

Agregue el thenmétodo a su promesa. Úselo resultcomo parámetro de su función de devolución de llamada e inicie sesión resulten la consola.*/
//Ejercicios
/* Debe llamar al thenmétodo en la promesa.
Su then método debe tener una función de devolución de llamada resultcomo su parámetro.
Debe iniciar sesión resulten la consola.*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then((result) => {
  console.log(result);
});
