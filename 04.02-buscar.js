/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
  - Buscar elementos en el array:
------------------------------------------------------------------------------------------------- */
// Array ejemplo
var frutas = ['Manzana', 'Pera', 'Uvas'];

// Buscar el primer elemento de un array
var primero = frutas[0]; // Manzana

// Buscar el elemento en una posición "x" de un array
var posicionX = frutas[1]; // Pera

// Buscar el último elemento de un array
var ultimo = frutas[frutas.length - 1]; // Uvas


/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
* Buscar un elemento específico
  arreglo.indexOf('Elemento a buscar');
  - Descripción: Busca un elemento del array que coincida con el argumento requerido. Retorna como
  valor el lugar donde esté el elemento.
  - Excepción: Si no se encuentra coincidencias retorna -1 como valor.
  - Requiere: 1 argumento, tipo cadena de caracteres.
------------------------------------------------------------------------------------------------- */
var frutas = ['Manzana', 'Pera', 'Uvas'];
var buscarElemento = frutas.indexOf('Pera'); // 1