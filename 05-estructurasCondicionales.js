/* -------------------------------------------------------------------------------------------------
Operadores lógicos
  o           -> ||
  y           -> &&
  menor       -> <
  menor/igual -> <=
  mayor       -> >
  mayor/igual -> >=

  JS no diferencia entre enteros y cadenas a menos que se le pida, por ello existe la comparación:
  - igual: con igual cuando se comparan variables, se convierten los valores que se están comparando
  al mismo tipo, es decir, si se están comparando una variable entera (var entero = 30) y una cadena
  (var cadena = '30'), el interprete convertirá los dos al mismo tipo (en este caso en particular
  convertirá la cadena a entero).
  - idéntico: con el idéntico no se realiza esta conversión, por ello es más eficáz aunque no es
  permisivo en caso de que las variables sean de distinto tipo.

  igual        -> ==
  idéntico     -> ===
  negación     -> !
  diferente de -> !=  // Inverso a igual
  diferente de -> !== // Inverso a idéntico
  true         -> verdadero (booleano)
  false        -> falso (booleano)
------------------------------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------------------------------
Estructuras de Condición
  * IF - ELSE IF - ELSE
    Utilizada para condicionar la ejecución de bloques de código:
    Si (condicion) se cumple, entonces: ...
    De lo contrario entonces: ...

    if (condicion) {
      # Acción 1
    } else if (condición) {
      # Acción 2
    } else {
      # Acción 3
    }
------------------------------------------------------------------------------------------------- */

var numeroUno = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
var numeroDos = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
if (numeroUno > numeroDos) {
  console.log(numeroUno + " es mayor que " + numeroDos);
} else if (numeroDos > numeroUno) {
  console.log(numeroUno + " es menor que " + numeroDos);
} else {
  console.log("son iguales");
}

/* -------------------------------------------------------------------------------------------------
Estructuras de Condición
  * operador condicional ternario
  Es una forma simplificada de usar IF - ELSE
  condición ? expr1 : expr2
------------------------------------------------------------------------------------------------- */

console.log(umeroUno > numeroDos ? numeroUno + " es mayor que " + numeroDos : numeroUno + " es menor que " + numeroDos);