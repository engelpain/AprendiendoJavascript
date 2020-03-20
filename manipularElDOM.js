/* ---------------------------------------------------------------------------------------------------------------------
La palabra "document" es reservada por el lenguaje para traer todos elementos dentro del DOM (Document Object Model)
en forma de objeto para ser modificado.
Es decir, para gestionar cualquier elemento dentro del DOM, se debe hacer referencia a este objeto.
--------------------------------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------
Funciones para elegir elementos:

getElementsByTagName('tag')
  - Selecciona todos los elementos que sean de ese tipo de etiqueta
--------------------------------------------------------------------------------------------------------------------- */
var divs = document.getElementsByTagName('div');


/* ---------------------------------------------------------------------------------------------------------------------
getElementById('nombreId')
  - Selecciona un elemento con un ID en específico
--------------------------------------------------------------------------------------------------------------------- */
var ids = document.getElementById("id");


/* ---------------------------------------------------------------------------------------------------------------------
getElementsByClassName('nombreClase')
  - Selecciona todos los elementos que tengan esa clase
--------------------------------------------------------------------------------------------------------------------- */
var clases = document.getElementsByClassName('clase');


/* ---------------------------------------------------------------------------------------------------------------------
querySelector()
  - Selecciona el primer elemento que sea del tipo de etiqueta, id o clase referido.
--------------------------------------------------------------------------------------------------------------------- */
var primerElementoDiv = document.querySelector("div");
var primerElementoId = document.querySelector("#id");
var primerElementoClase = document.querySelector(".clase");


/* ---------------------------------------------------------------------------------------------------------------------
querySelectorAll()
  - Selecciona el primer elemento que sea del tipo de etiqueta, id o clase referido.
--------------------------------------------------------------------------------------------------------------------- */
var todosElementosDiv = document.querySelectorAll("div");
var todosElementosId = document.querySelectorAll("#id");
var todosElementosClase = document.querySelectorAll(".clase");


/* ---------------------------------------------------------------------------------------------------------------------
Escribir en el DOM
  innerHTML
    Descripción: Escribe dentro elemento, reemplazando todo el contenido anterior.
    Requiere: Una cadena de caracteres o una variable.
    Excepción: Si se le pasa una variable de cualquier otro tipo que no sea cadena, se convertirá en
    cadena de caracteres y se imprimirá el contenido textualmente.
--------------------------------------------------------------------------------------------------------------------- */
document.getElementById("sandbox").innerHTML = 'Texto';


/* ---------------------------------------------------------------------------------------------------------------------
Elementos en el DOM
  createElement
  padre.appendChild(elementoHijo);
--------------------------------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------
Atributos para elementos en el DOM
  setAttribute
--------------------------------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------
Clases para elementos en el DOMs
  element.classList.add("NombreClase");
  element.classList.remove("NombreClase");
  element.classList.toggle("NombreClase");
--------------------------------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------
Atajos para funciones
  Se pueden usar "atajos" para usar las funciones de JS, en especial las usadas con las que manipulan el DOM.
--------------------------------------------------------------------------------------------------------------------- */

// 1. Shortcut para llamar a la función console.log() de manera más corta
const log = console.log;
log(value);

// Selectores
// 1. Shortcut a getElementById
// Nota: Siempre devolverá el elemento con ese id
const id = document.getElementById.bind(document);
id('id_selector');

// 2. Shortcut a querySelector
// Nota: Siempre devolverá el primer elemento con ese id, nombre o clase
const selector = document.querySelector.bind(document);
selector('name_selector');
selector('#id_selector');
selector('.class_selector');

// 3. Shortcut a querySelectorAll
// Nota: Siempre devolverá un array de elementos con ese id, nombre o clase
const selectors = document.querySelectorAll.bind(document)
selectors('name_selectors');
selectors('#id_selectors');
selectors('.class_selectors');

// Extraído de:
// https://ed.team/blog/crea-tus-metodos-abreviados-para-el-dom-con-javascript