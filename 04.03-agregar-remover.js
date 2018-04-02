/* -------------------------------------------------------------------------------------------------
Agregar elementos a un array
------------------------------------------------------------------------------------------------- */
var frutas = ['Manzana', 'Pera', 'Uvas'];

// Agregar elemento al principio de un array
frutas.unshift('Naranja'); // (4) ["Naranja", "Manzana", "Pera", "Uvas"]

// Agregar elemento al final de un array
frutas.push('Melón'); // (5) ["Naranja", "Manzana", "Pera", "Uvas", "Melón"]


/* -------------------------------------------------------------------------------------------------
Eliminar elementos de un array
------------------------------------------------------------------------------------------------- */
var frutas = ['Naranja', 'Manzana', 'Pera', 'Uvas', 'Melón'];

// Eliminar el primer elemento de un array
frutas.shift(); // (4) ["Manzana", "Pera", "Uvas", "Melón"]

// Eliminar el último elemento de un array
frutas.pop(); // (1) ["Manzana"]


/* -------------------------------------------------------------------------------------------------
Eliminar elementos desde un índice específico
  array.splice(posición, cantidad de elementos)
------------------------------------------------------------------------------------------------- */
var frutas = ['Naranja', 'Manzana', 'Pera', 'Uvas', 'Melón'];
frutas.splice(1, 2); // (2) ["Manzana", "Melón"]


/* -------------------------------------------------------------------------------------------------
Copiar un array
  array.slice()
------------------------------------------------------------------------------------------------- */
var numeros = [1, 2, 3, 4];
var copiaArray = numeros.slice(); // [1, 2, 3, 4]


/* -------------------------------------------------------------------------------------------------
Cortar un array
  arreglo.splice(índice, cantidad)
  - Descripción: Corta los elementos de un array y los pega en otro.
  - Requiere: 2 argumentos, tipo entero.
    Índice: Número desde donde iniciará el corte del arreglo.
    Cantidad: Cantidad de elementos que serán cortados.
------------------------------------------------------------------------------------------------- */
var numeros = [1, 2, 3, 4];
var cortarArray = numeros.splice(0, 3);
// numeros = [4]
// cortarArray = [1, 2, 3]