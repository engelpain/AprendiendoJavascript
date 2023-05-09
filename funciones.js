/* ---------------------------------------------------------------------------------------------------------------------
Funciones
  Son algoritmos, pueden responder a un nombre para ser convocadas o ser anónimas.
  En JavaScript las funciones no requieren declarar los argumentos de entrada, también poseen la facilidad de poder ser
  convocadas por otras funciones desde cualquier sitio del código sin importar el orden en el que están escritas.
--------------------------------------------------------------------------------------------------------------------- */
function nombreFuncion() {
  // Código...
}


/* ---------------------------------------------------------------------------------------------------------------------
Funciones embebidas
  Las funciones y algunos métodos de objetos pueden utilizar como argumentos otras funciones.
--------------------------------------------------------------------------------------------------------------------- */
function primeraFuncion() {
  // Código...
}

function requieroLaPrimera(primerafuncion) {
  // Código...
}


/* ---------------------------------------------------------------------------------------------------------------------
Funciones flecha / Arrow functions
  La expresión de función flecha tiene una sintaxis más corta que una expresión de función convencional y no vincula sus
  propios this, arguments, super, o new.target. Las funciones flecha por lo general son anónimas. Estas funciones son
  funciones no relacionadas con métodos y no pueden ser usadas como constructores.
--------------------------------------------------------------------------------------------------------------------- */
// Por lo general las arrow functions siguen la siguiente estructura: 
(param1, param2, ..., paramN) => { sentencias }

// Sin embargo, se puede simplificar su escritura en los siguientes casos:
// Caso 1: Los paréntesis son opcionales cuando la función sólo dispone de un argumento:
singleParam => { sentencias }

// Excepción: Una función sin argumentos requiere paréntesis:
() => { sentencias }

// Caso 2: Se pueden eliminar las llaves si la expresión final solo realiza una tarea, retorno, sentencia, etc.
(param1, param2, ..., paramN) => expresion

/* ---------------------------------------------------------------------------------------------------------------------
Arrow functions nombradas
Las funciones arrow también se pueden utilizar para crear funciones nombradas como las primeras, y son ahora casi el
estandar.
--------------------------------------------------------------------------------------------------------------------- */
// Al convocar a la constante saludo, se disparará la función.
const saludo = () => console.log("Hola mundo");

// También se pueden realizar funciones más complejas
const cambiarLetra2 = texto => {
    let qweasd = texto.toUpperCase();
    console.log(qweasd);
};


/* ---------------------------------------------------------------------------------------------------------------------
Funciones útiles
--------------------------------------------------------------------------------------------------------------------- */

// Imprime texto, variables, funciones, infomación... en la consola del navegador
console.log('Información a imprimir');

// Muestra una ventana emergente en el navegador
alert("Hola mundo");

// Muestra una ventana emergente interactiva en el navegador
prompt("Hola mundo", "");

// Muestra una ventana de confirmación en el navegador
confirm("Ventana de confirmación");

/* ---------------------------------------------------------------------------------------------------------------------
Closures
  Las funciones que están dentro de otras funciones se les define como closures. Tienen como ventaja poder llamar las
  variables heredadas de la función padre.
--------------------------------------------------------------------------------------------------------------------- */
function funcionPadre() {
  var variablePadre = 4;
  function funcionHijo() {
    var variableHijo = Math.pow(variablePadre, 2);
    return variableHijo;
  };
  return funcionHijo();
};

console.log(funcionPadre()); // 16


/* ---------------------------------------------------------------------------------------------------------------------
Nota importante: En proyectos en producción es importante no llenar el scope global con variables vacías, por tanto,
todos los scripts deben escribirse dentro de una función anónima.
--------------------------------------------------------------------------------------------------------------------- */
(function() {
  // Código
})();

// Método a partir de la salida de las arrow functions
(() => { /* Código */ })();
