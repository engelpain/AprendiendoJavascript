/* -------------------------------------------------------------------------------------------------
Recorrer un array
  arreglo.forEach(function (variable1, variable2, variable3){}, thisValue);
  - Descripción: Revisa un array elemento por elemento, con posibilidad de realizar tareas elemento
  por elemento.
  - Requiere: Una función con 3 argumentos
    - argumento1 (Requerido): Se llenará con el valor del elemento actual.
    - argumento2 (Opcional): Se llenará con el índice del elemento actual.
    - argumento3 (Opcional): Se llenará con el array al que pertenece el elemento actual.
  - thisValue (Opcional): un valor que se pasará a la función para ser utilizado como valor "this".
------------------------------------------------------------------------------------------------- */

var ejemploMatriz = ["Primer bucle", "Segundo bucle", "Tercer bucle", "Último bucle"];

ejemploMatriz.forEach(
  function(elemento, indice){
    console.log(indice, elemento);
  }
);
// 0 "Primer bucle"
// 1 "Segundo bucle"
// 2 "Tercer bucle"
// 3 "Último bucle"


/* -------------------------------------------------------------------------------------------------
Recorrer un array rellenando otro array
  arreglo.map(function (variable1, variable2, variable3){}, thisValue);
  - Descripción: Recorre cada elemento de un array con posibilidad de copiarlo en otro con los
  los elementos alterados.
  - Requiere: Una función con 3 argumentos
    - argumento1 (Requerido): Se llenará con el valor del elemento actual.
    - argumento2: Se llenará con el índice del elemento actual. (Opcional)
    - argumento3: Se llenará con el array al que pertenece el elemento actual. (Opcional)
  - thisValue (Opcional): un valor que se pasará a la función para ser utilizado como valor "this".
------------------------------------------------------------------------------------------------- */
// Array original
var array = [0, 1, 2, 3, 4];

// Array con los valores con potencia al cuadrado
var x = array.map(power);

function power(elemento){
  return Math.pow(elemento, 2);
}

// [0, 1, 2, 3, 4]
// [0, 1, 4, 9, 16]