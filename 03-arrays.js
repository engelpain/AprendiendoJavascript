/* -------------------------------------------------------------------------------------------------
Arrays (Matrices)
  Son variables que contienen más de un valor.
  Por ejemplo una variable que se llame frutas, dentro de ella puede contener una variedad de
  valores dependiendo de como se les llene.
------------------------------------------------------------------------------------------------- */

// Matriz de una dimensión
var matriz1D = [
  'Elemento 1',
  'Elemento 2'
];

// Matriz de dos dimensiones
var matriz2D = [
  ['0-0', '0-1', '0-2', '0-3'],
  ['1-0', '1-1'],
  ['2-0', '2-1', '2-2'],
];

/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
  - Buscar el primer elemento de un array:
  arreglo[0];
  - Buscar el elemento en una posición "x" de un array:
  arreglo[x];
  - Buscar el último elemento de un array:
  arreglo[arreglo.length - 1];
  - Buscar un elemento del array:
  arreglo.indexOf('Elemento a buscar');
------------------------------------------------------------------------------------------------- */

var frutas = ['Manzana', 'Pera', 'Uvas'];
var primero = frutas[0]; // Manzana
var posicionX = frutas[1]; // Pera
var ultimo = frutas[frutas.length - 1]; // Uvas
var buscarElemento = frutas.indexOf('Pera'); // 1

/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
  - Agregar elementos al principio de un array
  arreglo.unshift('Nuevo elemento');
  - Agregar elementos al final de un array
  arreglo.push('Nuevo elemento');
------------------------------------------------------------------------------------------------- */

var frutas = ['Manzana', 'Pera', 'Uvas'];
frutas.unshift('Naranja'); // (4) ["Naranja", "Manzana", "Pera", "Uvas"]
frutas.push('Melón'); // (5) ["Naranja", "Manzana", "Pera", "Uvas", "Melón"]

/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
  - Eliminar el primer elemento de un array
  arreglo.shift();
  - Eliminar elementos desde un índice específico
  numeros.splice(posición, cantidad de elementos);
  - Eliminar el último elemento de un array
  arreglo.pop();
------------------------------------------------------------------------------------------------- */

var frutas = ['Naranja', 'Manzana', 'Pera', 'Uvas', 'Melón'];
frutas.shift(); // (4) ["Manzana", "Pera", "Uvas", "Melón"]
frutas.splice(1, 2); // (2) ["Manzana", "Melón"]
frutas.pop(); // (1) ["Manzana"]

/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
  - Copiar un array
  var array2 = array1.slice();
  - Cortar un array
  var arrayConElementosExtraidos = arreglo.splice(índice, cantidad);
  Índice: Número desde donde se cortará el arreglo.
  Cantidad: Cantidad de elementos que serán cortados.
------------------------------------------------------------------------------------------------- */

var numeros = [1, 2, 3, 4];
var copiaArray = numeros.slice(); // [1, 2, 3, 4]

var cortarArray = numeros.splice(0, 3);
// numeros: (1) [4]
// cortarArray: (3) [1, 2, 3]

/* -------------------------------------------------------------------------------------------------
Realizar tareas elemento por elemento

  1. Determinar el arreglo que se utilizará
  arreglo

  2. Llamar al método forEach
  arreglo.forEach();

  3. El método forEach requiere una función con hasta 3 variables.
  arreglo.forEach(function (variable1, variable2, variable3){});
  variable1: Se llenará con el valor del elemento actual
  variable2: Se llenará con el índice del elemento actual
  variable3: Se llenará con el array "arreglo"

    3.1. Si se requiere sólo el valor del elemento, la función será:
    arreglo.forEach(function (variable1){});

    3.2. Si se requiere además el índice
    arreglo.forEach(function (variable1, variable2){});

    3.3. Si se requiere el array completo además de los primeros dos argumentos
    arreglo.forEach(function (variable1, variable2, variable3){});


  4. Agregar la acción que se quiera ejecutar en la función
  arreglo.forEach(
    function (elemento, indice, array){
      # Acción a ejecutar
    }
  );
------------------------------------------------------------------------------------------------- */

var ejemploMatriz = ["Primer bucle", "Segundo bucle", "Tercer bucle", "Último bucle"];

ejemploMatriz.forEach(
  function(elemento, indice, array){
    console.log(indice, elemento);
    // 0 "Primer bucle"
    // 1 "Segundo bucle"
    // 2 "Tercer bucle"
    // 3 "Último bucle"
  }
);

