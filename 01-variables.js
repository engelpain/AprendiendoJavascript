/* -------------------------------------------------------------------------------------------------
Variables
  Las variables en JavaScript no requieren declarar su tipo, se crean sencillamente escribiendo una
  palabra seguida de un igual (=) y el valor que se le quiera dar. Por buenas prácticas de
  desarrollo, se antepone la palabra var a las variables, sin embargo, no es nesesaria.
  Los tipos de variables pueden ser: indefinidas, cadenas, numéricas, booleanas, matrices y objectos
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

// Variable tipo array (matriz)
var matriz = ['Elemento 1', 2, 'Elemento 3'];

// Variable tipo Objeto
var objeto = { "name":"John", "age":31, "city":"New York" };

/* -------------------------------------------------------------------------------------------------
Operadores Aritméticos
  suma           -> +
  resta          -> -
  multiplicación -> *
  división       -> /
  módulo         -> % (lo que sobra de una división)
------------------------------------------------------------------------------------------------- */

var primero = 2, segundo = 3;
var suma = primero + segundo; // 2 + 3 = 5
var resta = primero - segundo; // 2 - 3 = -1
var multiplicacion = primero * segundo; // 2 * 3 = 6
var division = primero / segundo; // 2 / 3 = 0.6666666666666666
var modulo = primero % segundo; // 2 % 3 = 2

/* -------------------------------------------------------------------------------------------------
Operadores Aritméticos complejos:
  * Potencia
  Math.pow (x, a): donde "x" es la base y "a" es la potencia.

  * Redondeo
  Math.round(numero)

  * Redondear siempre hacia arriba
  Math.ceil(numero)

  * Redondear siempre hacia abajo
    Math.floor(numero)

  * Número PI
  Math.PI

  * Número aleatorio
  Math.random(): Número random entre 0 y 1
  Math.floor(Math.random() * 10) + 1: para números entre 1 y 10
  Math.floor(Math.random() * 100) + 1: números entre 1 y 100
------------------------------------------------------------------------------------------------- */

var primero = 3, segundo = 4, tercero = 3.5;
var potencia = Math.pow(primero, segundo); // 3 ^ 4 = 81
var redondeo = Math.round(tercero); // 3.5 redondeado = 4
var mayor = Math.ceil(tercero); // 3.5 redondeado hacia arriba = 4
var menor = Math.floor(tercero); // 3.5 redondeado hacia abajo = 3
var pi = Math.PI; // 3.141592653589793
var test = Math.random() * 20; // Cualquier número entre 0 y 20


/* Matemáticas

  - Valor absoluto
    abs(x)
  - Potencia de E^x
    exp(x)
  - Logaritmo neperiano de x
    log(x)
  - Máximo
    max(x, y, z, ..., n)
  - Mínimo
    min(x, y, z, ..., n)  Returns the number with the lowest value
  - Potencia de x^y
    pow(x, y) Returns the value of x to the power of y
  - Número aleatorio entre 0 y 1
    random()
  - Raíz cuadrada
    sqrt(x)
*/

/* Razones trigonométricas

  - Coseno de x (x es en radianes)
    cos(x)
  - Seno de x (x es en radianes)
    sin(x)
  - Tangente de x (x es en radianes)
    tan(x)  

  - Arco Seno de x, en radians
    asin(x) 
  - Arco Coseno de x, en radians
    acos(x)
  - Arco Tangente de x, con un valor numérico entre -PI/2 and PI/2 en radians
    atan(x)
  - Arcotangente del cociente de sus argumentos
    atan2(y, x)
*/