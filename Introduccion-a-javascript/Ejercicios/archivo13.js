/* Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla. en javascript */ 

const miPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resuelta");
  }, 3000);
});

miPromise.then((mensaje) => {
  console.log(mensaje);
}); 