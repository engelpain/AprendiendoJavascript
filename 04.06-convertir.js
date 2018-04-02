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