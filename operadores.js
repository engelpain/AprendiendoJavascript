/* ---------------------------------------------------------------------------------------------------------------------
Operadores
  Son aquellos que permiten realizar interacciones entre datos. JS posee dos grandes grupos para estos, los operadores
  lógicos y los operadores aritméticos.
--------------------------------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------
Operadores de asignación
  Sirven para asignar valores a variables.
--------------------------------------------------------------------------------------------------------------------- */
// Igualdad
let x = y; // x = y

// Sumar contador
let x += y; //  x = x + y

// Restar contador
let x -= y; // x = x - y

// Multiplicar contador
let x *= y; // x = x * y

// Dividir contador
let x /= y; // x = x / y

// Módulo de contador
let x %= y; // x = x % y

// Potencia de contador
let x **= y; // x = x ** y


/* ---------------------------------------------------------------------------------------------------------------------
Operadores lógicos
  Permiten comparar entre dos o más datos, retornando una respuesta booleana, es decir, verdadero o falso.
    true  -> verdadero (booleano)
    false -> falso (booleano)
--------------------------------------------------------------------------------------------------------------------- */
// Menor
var menor_que = 3 < 4; // true
var menor_o_igual = 3 <= 4; // true

// Mayor
var mayor_que = 3 > 4; // false
var mayor_o_igual = 3 >= 4; // false


/* ---------------------------------------------------------------------------------------------------------------------
Operadores lógicos
  * Negación
    JavaScript también puede negar sentencias, para ello usa el operador negación, denotado por una exclamación (!).
    Es útil al realizar comparaciones, operadores que se ven en el siguiente punto a este.
--------------------------------------------------------------------------------------------------------------------- */
var negacion = !3; // false
var negacion = !false; // true


/* ---------------------------------------------------------------------------------------------------------------------
Operadores lógicos
  JavaScript no diferencia entre enteros y cadenas de caracteres a menos que se le pida, por ello existen dos formas de
  realizar comparaciones: igual e idéntico.
    - igual: con igual cuando se comparan variables, se convierten los valores que se están comparando al mismo tipo,
             es decir, si se están comparando una variable entera (var entero = 30) y una cadena (var cadena = '30'),
             el interprete convertirá los dos al mismo tipo (en este caso en particular convertirá la cadena a entero).
    - idéntico: con el idéntico no se realiza ésta conversión lo que lo hace es más eficiente, es decir, tarda menor
                tiempo y recursos para ejecutar la comparación, aunque no es permisivo en caso de que las variables sean
                de distinto tipo.
--------------------------------------------------------------------------------------------------------------------- */
// Igual e idéntico
var igual = 3 == '3'; // true
var identico = 3 === '3'; // false

// La negación o el inverso del Igual e idéntico
var igual = 3 != '3'; // false
var identico = 3 !== '3'; // true


/* ---------------------------------------------------------------------------------------------------------------------
Operadores Aritméticos:
  Como se infiere por su nombre, se usan para realizar operaciones aritméticas.
--------------------------------------------------------------------------------------------------------------------- */
// Suma (+)
var suma = 2 + 3; // 5

// Resta (-)
var resta = 2 - 3; // 2 - 3 = -1

// Multiplicación (*)
var multiplicacion =  2 * 3; // = 6

// División (/)
var division =  10 / 2; // = 5

// Módulo (%) (lo que sobra de una división)
var modulo = 2 % 3; // 2

var contador = 1;

// Incremento
contador++; // 2

// Decremento
contador--; // 0


/* ---------------------------------------------------------------------------------------------------------------------
Operadores Aritméticos complejos:
--------------------------------------------------------------------------------------------------------------------- */
var primero = 3, segundo = 4, tercero = 3.5;

// Potencia -> Math.pow (x, a): donde "x" es la base y "a" es la potencia.
var potencia = Math.pow(3, 4); // 81

// Raíz cuadrada
var raiz = Math.sqrt(4); // 2

// Redondeo
var redondeo = Math.round(3.5); // 4

// Redondear siempre hacia arriba
var mayor = Math.ceil(3.5); // 4

// Redondear siempre hacia abajo
var menor = Math.floor(3.5); // 3

// Número PI
var pi = Math.PI; // 3.141592653589793

// Número aleatorio
var random_0_1 = Math.random();

// Número aleatorio entre 0 y 10
var random_0_10 = Math.random() * 10;

// Número aleatorio entre 0 y 100
var random_0_100 = Math.random() * 100;

// Número aleatorio entre 1 y 10
var random_1_10 =  Math.floor(Math.random() * 10) + 1;

// Número aleatorio entre 1 y 100
var random_1_100 =  Math.floor(Math.random() * 100) + 1;


/* ---------------------------------------------------------------------------------------------------------------------
Funciones Matemáticas:
--------------------------------------------------------------------------------------------------------------------- */
// Valor absoluto
var absoluto = Math.abs(-5); // 5

// Potencia de e^número -> Math.exp(número)
var e_exponecial = Math.exp(2); // 7.38905609893065

// Logaritmo neperiano -> Math.log(número);
var neperiano = Math.log(10);

// Buscar el número mayor -> Math.max(x, y, z, ..., n)
var mayor = Math.max(1, 2, 3, 4);

// Buscar el número menor -> Math.min(x, y, z, ..., n)
var menor = Math.min(1, 2, 3, 4);


/* ---------------------------------------------------------------------------------------------------------------------
Razones trigonométricas:
--------------------------------------------------------------------------------------------------------------------- */
// Seno de x (x es en radianes)
var seno = Math.sin(90);

// Coseno de x (x es en radianes)
var coseno = Math.cos(90);

// Tangente de x (x es en radianes)
var tangente = Math.tan(90);


/* ---------------------------------------------------------------------------------------------------------------------
Conjuntos
  Cuando se requiere hacer unión o intersección de una condición, se utilizan los operadores "o" e "y".
  condición1 || condición2 -> Debe cumplir la condición 1 o cumplir la condición 2
  condición1 && condición2 -> Debe cumplir la condición 1 y cumplir la condición 2
--------------------------------------------------------------------------------------------------------------------- */
// Unión (||)
var test = 1 + 1 == 2 || 2 - 1 == 3; // true

// Intersección (&&)
var test = 1 + 1 == 2 && 2 - 1 == 3; // false


// Más información en:
// https://www.w3schools.com/js/js_operators.asp
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math