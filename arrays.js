/* ---------------------------------------------------------------------------------------------------------------------
Arrays (Matrices)
  Son variables que contienen más de un valor, como las matrices, y se les denomina array.
  En un ejemplo práctico lo podríamos ver de la siguiente manera:
    si realizara la declaración de una variable matríz que contendrá frutas, dentro de esta se escribirían varios tipos
    de frutas, la variable tendría cada uno de ellos como valor, distinguiéndose uno de otro solamente por su índice.
  Para declarar un array se utilizan los corchetes y dentro se incluyen los posibles valores.
  JavaScript permite hacer matrices tanto de una dimensión como múltiples, dependiendo de la necesidad de desarrollador,
  para acceder a los elementos se utiliza el índice este último para mostrar su valor, impidiendo la posibilidad de usar
  clave => valor como índice, porque así se realizan las asignaciones en los objetos, de los que se hablará
  posteriormente.
--------------------------------------------------------------------------------------------------------------------- */
// Matriz de una dimensión
var matriz1D = ['Elemento 1', 'Elemento 2'];

// Matriz de dos dimensiones
var matriz2D = [
  ['0-0', '0-1'],
  ['1-0', '1-1'],
  ['2-0', '2-1', '2-2'],
  ['3-0'],
];

// Matriz de tres dimensiones
var matriz3D = [
  '1',
  ['1.1',
    ['1.1.1']
  ]
];


/* ---------------------------------------------------------------------------------------------------------------------
Operaciones con matrices
  - Buscar elementos en el array:
--------------------------------------------------------------------------------------------------------------------- */
// Array ejemplo
var frutas = ['Manzana', 'Pera', 'Uvas'];

// Buscar el primer elemento de un array
var primero = frutas[0]; // Manzana

// Buscar el elemento en una posición "x" de un array
var posicionX = frutas[1]; // Pera

// Buscar el último elemento de un array
var ultimo = frutas[frutas.length - 1]; // Uvas


/* ---------------------------------------------------------------------------------------------------------------------
Operaciones con matrices
* Buscar un elemento específico
  arreglo.indexOf('Elemento a buscar');
  - Descripción: Busca un elemento del array que coincida con el argumento requerido. Retorna como valor el lugar donde
  esté el elemento.
  - Excepción: Si no se encuentra coincidencias retorna -1 como valor.
  - Requiere: 1 argumento, tipo cadena de caracteres.
--------------------------------------------------------------------------------------------------------------------- */
var frutas = ['Manzana', 'Pera', 'Uvas'];
var buscarElemento = frutas.indexOf('Pera'); // 1


/* ---------------------------------------------------------------------------------------------------------------------
Operaciones con matrices
* Agregar elementos a un array
--------------------------------------------------------------------------------------------------------------------- */
var frutas = ['Manzana', 'Pera', 'Uvas'];

// Agregar elemento al principio de un array
frutas.unshift('Naranja'); // (4) ["Naranja", "Manzana", "Pera", "Uvas"]

// Agregar elemento al final de un array
frutas.push('Melón'); // (5) ["Naranja", "Manzana", "Pera", "Uvas", "Melón"]


/* ---------------------------------------------------------------------------------------------------------------------
Operaciones con matrices
* Eliminar elementos de un array
--------------------------------------------------------------------------------------------------------------------- */
var frutas = ['Naranja', 'Manzana', 'Pera', 'Uvas', 'Melón'];

// Eliminar el primer elemento de un array
frutas.shift(); // (4) ["Manzana", "Pera", "Uvas", "Melón"]

// Eliminar el último elemento de un array
frutas.pop(); // (1) ["Manzana"]


/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
* Eliminar elementos desde un índice específico
  - array.splice(posición, cantidad de elementos)
------------------------------------------------------------------------------------------------- */
var frutas = ['Naranja', 'Manzana', 'Pera', 'Uvas', 'Melón'];
frutas.splice(1, 2); // (2) ["Manzana", "Melón"]


/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
* Copiar un array
  - array.slice()
------------------------------------------------------------------------------------------------- */
var numeros = [1, 2, 3, 4];
var copiaArray = numeros.slice(); // [1, 2, 3, 4]


/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
* Cortar un array
  - arreglo.splice(índice, cantidad)
    - Descripción: Corta los elementos de un array y los pega en otro.
    - Requiere: 2 argumentos, tipo entero.
      Índice: Número desde donde iniciará el corte del arreglo.
      Cantidad: Cantidad de elementos que serán cortados.
------------------------------------------------------------------------------------------------- */
var numeros = [1, 2, 3, 4];
var cortarArray = numeros.splice(0, 3);
// numeros = [4]
// cortarArray = [1, 2, 3]


/* -------------------------------------------------------------------------------------------------
Operaciones con matrices
* Ordenar un array
  - array.sort()
    - Descripción: Ordena los elementos de un arreglo alfabéticamente de menor a mayor
    - Opcional: el método puede utilizar una función como argumento para alterar el orden.
------------------------------------------------------------------------------------------------- */
var numerosDesordenados = [3, 4, 2, 1, 0];

// Ordenado ascendente
numerosDesordenados.sort(); // [0, 1, 2, 3, 4]

// Ordenado descendiente
numerosDesordenados.sort(function(a, b){return b-a}); // [4, 3, 2, 1, 0]
numerosDesordenados.sort((a, b) => b - a); // [4, 3, 2, 1, 0]

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
var agesFiltered = ages.filter((age) => age >= 18 ); // [32, 33, 40]

/* -------------------------------------------------------------------------------------------------
Convertir en array
  array.split("separador", límite);
  - Descripción: Convierte una cadena en un array
  - Requiere: 1 argumento, tipo cadena de caracteres, determinará el separador entre las palabras
  que se utilizará para determinar cuando termina un elemento y comienza otro. Se pueden usar
  expresiones regulares.
  - Opcional: 1 argumento, tipo entero, determinará la cantidad de veces que se realizará la
  búsqueda, llenando el array solo con la cantidad limitante.
------------------------------------------------------------------------------------------------- */
var cadena = 'A, B, C, D';
var array = cadena.split(', '); // ["A", "B", "C", "D"]


/* -------------------------------------------------------------------------------------------------
Convertir elementos de un array
  array.join("separador");
  - Descripción: Convierte un array en una cadena
  - Requiere: 1 argumento, tipo cadena de caracteres, determinará el separador entre las palabras
  que se utilizará para determinar cuando termina un elemento y comienza otro. Se pueden usar
  expresiones regulares.
------------------------------------------------------------------------------------------------- */
var array2 = ["W", "X", "Y", "Z"];
var cadena2 = array2.join(', '); // W, X, Y, Z


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
  function(elemento, indice) {
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

function power(elemento) {
  return Math.pow(elemento, 2);
}

// [0, 1, 2, 3, 4]
// [0, 1, 4, 9, 16]