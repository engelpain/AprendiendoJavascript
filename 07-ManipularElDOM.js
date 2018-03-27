/* -------------------------------------------------------------------------------------------------
La palabra "document" es reservada por el lenguaje para traer todos elementos dentro del DOM
(Document Object Model) en forma de objeto para ser modificado.
Es decir, para gestionar cualquier elemento dentro del DOM, se debe hacer referencia a este objeto.
------------------------------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------------------------------
Funciones para elegir elementos:

getElementsByTagName('tag')
  - Selecciona todos los elementos que sean de ese tipo de etiqueta
------------------------------------------------------------------------------------------------- */
var divs = document.getElementsByTagName('div');

/* -------------------------------------------------------------------------------------------------
getElementById('nombreId')
  - Selecciona un elemento con un ID en específico
------------------------------------------------------------------------------------------------- */
var ids = document.getElementById("id");

/* -------------------------------------------------------------------------------------------------
getElementsByClassName('nombreClase')
  - Selecciona todos los elementos que tengan esa clase
------------------------------------------------------------------------------------------------- */
var clases = document.getElementsByClassName('clase');

/* -------------------------------------------------------------------------------------------------
querySelector()
  - Selecciona el primer elemento que sea del tipo de etiqueta, id o clase referido.
------------------------------------------------------------------------------------------------- */
var primerElementoDiv = document.querySelector("p");
var primerElementoId = document.querySelector("#id");
var primerElementoClase = document.querySelector(".clase");

/* -------------------------------------------------------------------------------------------------
querySelectorAll()
  - Selecciona el primer elemento que sea del tipo de etiqueta, id o clase referido.
------------------------------------------------------------------------------------------------- */
var todosElementosDiv = document.querySelectorAll("p");
var todosElementosId = document.querySelectorAll("#id");
var todosElementosClase = document.querySelectorAll(".clase");

console.log(todosElementosClase);
//document.querySelectorAll();

//ids.classList.add("landing");