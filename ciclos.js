/* ---------------------------------------------------------------------------------------------------------------------
Estructuras de Repetición (Ciclos repetitivos)
  - WHILE: Utilizada para repetir procesos hasta que se cumpla la condición.

  while (condición) {
    # Acción a repetir
  }
--------------------------------------------------------------------------------------------------------------------- */
var contador = 0;
while (contador < 5) {
  contador++;
  if (contador % 2 !== 0) {
    continue; // Salta un ciclo
  } else if (contador === 5){
    break; // Detiene el ciclo
  }
  console.log(contador);
  // 2
  // 4
}

/* ---------------------------------------------------------------------------------------------------------------------
Estructuras de Repetición (Ciclos repetitivos)
  - DO WHILE: Utilizada para repetir procesos hasta que se cumpla la condición.
    Se diferencia de WHILE porque este se cumple al menos una vez así no se cumpla con la condición.

  do {
    # Acción a repetir
  } while (condición);
--------------------------------------------------------------------------------------------------------------------- */
var contador = 11;
do {
  contador++;
  if (contador % 2 !== 0) {
    continue;
  } else if (contador === 10){
    break;
  }
  console.log(contador);
} while (contador < 10);


/* ---------------------------------------------------------------------------------------------------------------------
Estructuras de Repetición (Ciclos repetitivos)
  - FOR: Utilizada para repetir procesos hasta que se se llegue a un número determinado de veces.

for (var i = 0; i < variable; i++) {
    # Acción a repetir
  }
--------------------------------------------------------------------------------------------------------------------- */
for (var i = 5; i > 0; i--) {
  console.log(i);
}
