/* -------------------------------------------------------------------------------------------------
Cadenas
  Son variables con un valor alfanumérico. Para denotar una variable con tipo cadena basta con
  envolver el valor entre comillas simples.

Nota: No existe diferencia entre usar comillas simples o dobles, sin embargo las buenas prácticas de
programación declaran que se deben utilizan comillas simples cuando se están declarando cadenas.
------------------------------------------------------------------------------------------------- */

// Variable tipo cadena:
var nombre = 'engelpain';


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.length
  - Descripción: mide el largo de la cadena.
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var largo = cadena.length; // 10


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.indexOf('segmentoABuscar')
  - Descripción: busca palabras dentro de la cadena y devuelve la cantidad de veces que la ha
  encontrado.
  - Excepción: Si no se encuentra coincidencias retorna -1 como valor.
  - Requiere: 1 argumento, variable tipo cadena de caracteres 
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var indiceDe = cadena.indexOf('ola'); // 1


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.charAt(x)
  - Descripción: Buscar la caracter que esté en la posición "x" de la cadena.
  - Requiere: 1 argumento, variable tipo entero
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var caracterEn = cadena.charAt(3); // a


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.replace('a', 'b')
  - Descripción: Reemplaza letras o partes de la cadena, donde "a" es el caracter origen y "b" es el
  reemplazo.
  - Requiere: 2 argumentos:
    - Primer argumento: variable tipo cadena de caracteres, cadena que se buscará.
    - Segundo argumento: variable tipo cadena de caracteres, cadena que reemplazará la buscada.
  - Nota: Solo reemplazará la primera coincidencia que encuentre en la cadena con respecto al patrón
  solicitado.
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var reemplaza = cadena.replace('o', 'a'); // Hala Mundo


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.slice(x,y)
  - Descripción: se utiliza para cortar las cadenas desde un valor "x" hasta un valor "y".
  - Requiere: 2 argumentos
    - Primer argumento: variable tipo entero, posición desde donde comenzará el corte.
    - Segundo argumento: variable tipo entero, posición hasta donde finalizará el corte.
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var cortar = cadena.slice(1, 4); // ola


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.toUpperCase()
  - Descripción: Cambia la cadena a mayúsculas.
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var mayusculas = cadena.toUpperCase(); // HOLA MUNDO


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* cadena.toLowerCase()
  - Descripción: Cambia la cadena a minúsculas
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var minusculas = cadena.toLowerCase(); // hola mundo


/* -------------------------------------------------------------------------------------------------
Operaciones con cadenas
* Concatenar: 'texto plano '+ variable
  - Descripción: Unión entre texto y variables.
------------------------------------------------------------------------------------------------- */
var cadena = 'Hola Mundo';
var concatenar = cadena + '!'; // Hola Mundo!