/** Promesas
 * Son bloques de código que se ejecutarán asincronamente devolviento un valor dependiendo del
 * estado en el que se encuentren, el valor no necesariamente conocido en el momento que es creada
 * la promesa.
 * Las promesas puede estar en 3 estados: pendiente, cumplida o rechazada.
*/

// Se define la promesa en una variable
let promesa = new Promise(function(resolve, reject) {

  // Se declara el valor de la promesa
  setTimeout(resolve, 4000, "Todo bien");

});

// Se solicita el resultado a la promesa
promesa.then(function(response){
  console.log(response)
}, function(error){
  console.log(error);
});