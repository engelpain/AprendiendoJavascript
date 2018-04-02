/* -------------------------------------------------------------------------------------------------
Operadores Aritméticos complejos:
------------------------------------------------------------------------------------------------- */
var primero = 3, segundo = 4, tercero = 3.5;

// Potencia -> Math.pow (x, a): donde "x" es la base y "a" es la potencia.
var potencia = Math.pow(primero, segundo); // 3 ^ 4 = 81

// Raíz cuadrada
var raiz = Math.sqrt(segundo); // 4 ^ 1/2 = 2

// Redondeo -> Math.round(numero)
var redondeo = Math.round(tercero); // 3.5 redondeado = 4

// Redondear siempre hacia arriba -> Math.ceil(numero)
var mayor = Math.ceil(tercero); // 3.5 redondeado hacia arriba = 4

// Redondear siempre hacia abajo -> Math.floor(numero)
var menor = Math.floor(tercero); // 3.5 redondeado hacia abajo = 3

// Número PI -> Math.PI
var pi = Math.PI; // 3.141592653589793

// Número aleatorio -> random()
var random_0_1 = Math.random();

// Número aleatorio entre 0 y 10
var random_0_10 = Math.random() * 10;

// Número aleatorio entre 0 y 100
var random_0_100 = Math.random() * 100;

// Número aleatorio entre 1 y 10
var random_1_10 =  Math.floor(Math.random() * 10) + 1;

// Número aleatorio entre 1 y 100
var random_1_100 =  Math.floor(Math.random() * 100) + 1;