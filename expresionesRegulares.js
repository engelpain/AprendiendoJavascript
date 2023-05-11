/* ---------------------------------------------------------------------------------------------------------------------
Expresiones regulares
Se puede definir una expresión regular de dos formas:
- Usando una expresión regular literal: /ab+c/
- O llamando a la función constructora del objeto RegExp: new RegExp('ab+c')
--------------------------------------------------------------------------------------------------------------------- */
const expresionNativa = /[0-9]/;
const expresionGenerada = new RegExp('0-9')

/* ---------------------------------------------------------------------------------------------------------------------
Métodos útiles para usar con expresiones regulares:
--------------------------------------------------------------------------------------------------------------------- */

// test: Este método verifica si hay una coincidencia en una cadena de texto dada.
const regex = /hola/;
console.log(regex.test('Hola, mundo')); // true
console.log(regex.test('Adiós')); // false

// exec(): Este método busca una coincidencia en una cadena de texto y devuelve un array con información sobre la coincidencia.
const regex = /(\w+)\s(\w+)/;
const result = regex.exec('Hola, mundo');
console.log(result); // ['Hola, mundo', 'Hola', 'mundo']

// match(): Este método busca una coincidencia en una cadena de texto y devuelve una matriz de las coincidencias encontradas.
const regex = /\d+/g;
const result = 'Tengo 25 años'.match(regex);
console.log(result); // ['25']

// replace(): Este método busca una coincidencia en una cadena de texto y la reemplaza con otra cadena o valor.
const regex = /mundo/;
const result = 'Hola, mundo'.replace(regex, 'amigo');
console.log(result); // 'Hola, amigo'
