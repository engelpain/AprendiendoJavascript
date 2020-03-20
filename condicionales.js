/* ---------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------- */

var numeroUno = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
var numeroDos = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
if (numeroUno > numeroDos) {
  console.log(numeroUno + " es mayor que " + numeroDos);
} else if (numeroDos > numeroUno) {
  console.log(numeroUno + " es menor que " + numeroDos);
} else {
  console.log("son iguales");
}

/* ---------------------------------------------------------------------------------------------------------------------
Estructuras de Condición
  * operador condicional ternario
  Es una forma simplificada de usar IF - ELSE
  condición ? expr1 : expr2
--------------------------------------------------------------------------------------------------------------------- */
console.log(numeroUno > numeroDos ? numeroUno + " es el mayor." : numeroDos + " es el mayor.");