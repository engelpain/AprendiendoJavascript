/* -------------------------------------------------------------------------------------------------
Ordenar un array
  array.sort()
  - Descripción: Ordena los elementos de un arreglo alfabéticamente de menor a mayor
  - Opcional: el método puede utilizar una función como argumento para alterar el orden.
------------------------------------------------------------------------------------------------- */
var numerosDesordenados = [3, 4, 2, 1, 0];

// Ordenado ascendente
numerosDesordenados.sort(); // [0, 1, 2, 3, 4]

// Ordenado descendiente
numerosDesordenados.sort(function(a, b){return b-a}); // [4, 3, 2, 1, 0]