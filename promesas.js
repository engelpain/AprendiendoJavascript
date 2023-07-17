/* ---------------------------------------------------------------------------------------------------------------------
Promesas
  - Son bloques de código que se ejecutarán asíncronamente, o coloquialmente "van a su propio ritmo", esto porque no
  interfieren con la ejecución del código que le precede.
  - Las promesas puede estar en 3 estados: pendiente, cumplida o rechazada, dependiendo del estado en el que se
  encuentre, y el valor no necesariamente declarado en el momento que la promesa es creada.
  - Nota: este método se utiliza para crear promesas propias que hagan cosas específicas, para casos menos sencillos
  y sin demasiados quebraderos de cabeza promesas encadenadas (then, catch y finally).
--------------------------------------------------------------------------------------------------------------------- */
// Se define la promesa en una variable
const promesa = new Promise(function(resolve, reject) {
  // Se declara el valor de la promesa para que devuelva en caso de éxito
  setTimeout(resolve, 4000, "Todo bien");
});


/* ---------------------------------------------------------------------------------------------------------------------
Respuestas de la promesa / Promesas encadenadas
   - Existen 3 métodos para consultar la respuesta de una promesa:
     - finally: devuelta cuando la promesa se termina independientemente de la respuesta.
     - then: devuelta cuando la promesa se termina con éxito.
     - catch: devuelta cuando la promesa se termina en fallo.
--------------------------------------------------------------------------------------------------------------------- */

// finally: se dispara al terminar una promesa sin importar el resultado 
promesa.finally(response => { console.log("finalizó la promesa", response) });

// then: se dispara al terminar una promesa con éxito
promesa.then(response => { console.log("finalizó con éxito", response) });

// then: se dispara al fracasar una promesa
promesa.catch(error => { console.log("fracazó la promesa", error) });
