/* -------------------------------------------------------------------------------------------------
Filtrar los elementos de un array
  array.filter(function(currentValue, index, arr), thisValue)
  - Descripción: Filtra los elementos de un array dependiendo de lo que retorne la función.
  - Requiere: 1 función con tres parámetros:
    - Parámetro 1 (Requerido): Valor del elemento actual.
    - Parámetro 2 (Opcional): Índice del elemento actual.
    - Parámetro 3 (Opcional): Array al que pertenece el elemento actual.
  - thisValue (Opcional): un valor que se pasará a la función para ser utilizado como valor "this".
------------------------------------------------------------------------------------------------- */
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

var agesFiltered = ages.filter(checkAdult); // [32, 33, 40]