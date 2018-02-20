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
  * length
  cadena.length = mide el largo de la cadena.

  * indexOf
  cadena.indexOf("example"); = buscar palabras dentro de la cadena. Si no se encuentra la variable
  retorna -1 como valor.

  * charAt
  cadena.charAt(x) = Buscar la caracter que esté en la posición "x" de la cadena.

  * replace
  cadena.replace("a", "b") = Reemplaza letras o partes de la cadena, donde "a" es el caracter origen
  y "b" es el reemplazo.

  Ejemplo:
  var cadena = 'Lolo';
  var cadenaReemplazada = cadena.replace("olo","apa");
  El resultado sería Lapa.

  Nota: Solo reemplazará el primer caracter que encuentre en la cadena en caso de encontrar más de
  una coincidencia con el patrón:

  var cadena = 'Lolo';
  cadena.replace("o","a");
  el resultado será "Lalo", no "Lala" como se presumiría.

  * slice
  cadena.slice(x,y); se utiliza para cortar las cadenas desde un valor "x" hasta un valor "y".

  * toUpperCase
  cadena.toUpperCase(); Cambia la cadena a mayúsculas

  * toLowerCase
  cadena.toLowerCase(); Cambia la cadena a minúsculas

  * Concatenar
  var cadena = 'Hola '+ nombre; Para concatenar en JS se utiliza + entre las cadenas a concatenar.
------------------------------------------------------------------------------------------------- */

var cadena = 'Hola Mundo';
var largo = cadena.length; // 10
var indiceDe = cadena.indexOf('ola'); // 1
var caracterEn = cadena.charAt(3); // a
var reemplaza = cadena.replace('o', 'a'); // Hala Mundo
var cortar = cadena.slice(1, 4); // ola
var mayusculas = cadena.toUpperCase(); // HOLA MUNDO
var minusculas = cadena.toLowerCase(); // hola mundo
var concatenar = cadena + '!'; // Hola Mundo!