/* -------------------------------------------------------------------------------------------------
Funciones
  Son algoritmos que responden a un nombre para ser convocados.
  En Javascript las funciones no requieren declarar los argumentos de entrada, también tienen la
  facilidad de poder ser convocadas por otras funciones desde cualquier sitio del código sin
  importar el orden en el que están escritas.
------------------------------------------------------------------------------------------------- */
function nombreFuncion(){
  // Código...
}


/* -------------------------------------------------------------------------------------------------
Funciones embebidas
  Las funciones y algunos métodos de objetos pueden utilizar como argumentos otras funciones.
------------------------------------------------------------------------------------------------- */
function primeraFuncion(){
  // Código...
}

function funcionRequiriente(primerafuncion) {
  // Código...
}


/* -------------------------------------------------------------------------------------------------
Funciones útiles
------------------------------------------------------------------------------------------------- */

// Imprime texto, variables, funciones, infomación... en la consola del navegador
console.log('Información a imprimir');

// Muestra una ventana emergente en el navegador
alert("Hola mundo");

// Muestra una ventana emergente interactiva en el navegador
prompt("Hola mundo", "");


/* -------------------------------------------------------------------------------------------------
Closures
  Las funciones que están dentro de otras funciones se les define como closures. Tienen como ventaja
  poder llamar las variables heredadas de la función padre.
------------------------------------------------------------------------------------------------- */

function funcionPadre(){
  var variablePadre = 4;
  function funcionHijo(){
    var variableHijo = Math.pow(variablePadre, 2);
    return variableHijo;
  };
  return funcionHijo();
};

console.log(funcionPadre()); // 16


/* -------------------------------------------------------------------------------------------------
Nota importante: En proyectos en producción es importante no llenar el scope global con variables
vacías, por tanto, todos los scripts deben escribirse dentro de una función que se llame a sí misma.
------------------------------------------------------------------------------------------------- */

(function (){
  // Código
})();

/* -------------------------------------------------------------------------------------------------
Nota: console.log() Es una función que imprime el contenido de lo que se requiera (una función,
una variable, un objeto, etc...). Estos resultados se ven en la consola del navegador.
------------------------------------------------------------------------------------------------- */