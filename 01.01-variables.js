/* -------------------------------------------------------------------------------------------------
Variables
  Las variables en JavaScript no requieren declarar su tipo, se crean sencillamente escribiendo una
  palabra seguida de un igual "=" y el valor que se le quiera dar. Por buenas prácticas de
  desarrollo, se antepone la palabra "var" a las variables, sin embargo, no es nesesaria.
  Los tipos de variables pueden ser: indefinidas, cadenas, numéricas, booleanas, matrices, objectos
  y hasta funciones.
  Nota: La decalración de variables a partir de EcmaScript 6 permite utilizar la palabra reservada
  "var" y también "let", sus usos son distintos:
  let: es utilizado para declarar variables de bloque, es decir, con valor únicamente donde fueron
  declaradas.
  var: es utilizado para declarar variables de funciones, es decir, podrán ser consultadas en
  cualquier parte de la función que las declara. 
------------------------------------------------------------------------------------------------- */

// Variable Indefinida
var indefinida = undefined;

// Variable tipo Cadena de caracteres
var cadena = 'Ezio';

// Variable tipo entero
var entero = 23;

// Variable tipo float
var flotante = 12.5;

// Variable tipo bool
var booleano = false;

// Variable tipo array (matrices)
var matriz = ['Elemento 1', 2, 'Elemento 3'];

// Función contenida en una variable
var funcion = function function_name(){};

// variables tipo objeto, conocidos como JSON: Javascript Object Notation
var objetos = {

  // Atributos
  nombre: "Universo",
  edad: 13835000000,

  // Métodos
  darEdad: function(){
    return 'El ' + this.nombre + ' tiene ' + this.edad + ' años.';
  }
};

// Constante, mantiene su valor. Las constantes deben ser declaradas con mayúsculas sostenidas
const CONSTANTE = "valor";