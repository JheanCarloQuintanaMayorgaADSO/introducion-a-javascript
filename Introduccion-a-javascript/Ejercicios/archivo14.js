/* Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada".Utiliza async / await. */

const miPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resuelta");
  }, 3000);
});

 miPromise.then((mensaje) => {
  console.log(mensaje);
}); 
 