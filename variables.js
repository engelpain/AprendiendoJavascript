/* ---------------------------------------------------------------------------------------------------------------------
Variables
  Las variables en JavaScript no requieren declarar su tipo, se crean sencillamente escribiendo una palabra seguida de
  un igual "=" y el valor que se le quiera dar. Por buenas prácticas de desarrollo, se antepone la palabra "var" a las
  variables, sin embargo, no es nesesaria.
  Los tipos de variables pueden ser: indefinidas, cadenas, numéricas, booleanas, matrices, objectos y hasta funciones.
  Nota: La declaración de variables a partir de EcmaScript6 utilizan las palabras reservadas "var", "let" y "const",
  y sus usos son distintos:
    let: es utilizado para declarar variables de bloque, es decir, con valor únicamente donde fueron declaradas.
    var: es utilizado para declarar variables de de bloque como globales, es decir, podrán ser consultadas en cualquier
    parte del código, o solamente en la función o bloque donde fue declarada.
    const: es utilizado para declarar constantes tanto de bloque como globales.
--------------------------------------------------------------------------------------------------------------------- */

// Variable Indefinida
var indefinida = undefined;

// Variable tipo Cadena de caracteres
var cadena = 'Ezio';

// Nota: JavaScript permite en el uso de emojis en los valores de las variables
var emoji = "😱";

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

// Constante, mantiene su valor. Las constantes deben ser declaradas con mayúsculas sostenidas
const CONSTANTE = "valor";

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