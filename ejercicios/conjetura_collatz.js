/** La Conjetura de Collatz
 * La conjetura enuncia lo siguiente:
 * Dado un número entero positivo: si es par se divide entre dos, si no lo es, se multiplica por 3 y se suma 1.
 * Por tanto, la conjetura dice que siempre alcanzaremos el 1 (y por tanto el ciclo 4, 2, 1) para cualquier número con
 * el que comencemos (con excepción de los números 2 y 4, en donde alcanzamos el 1, pero no se cumple el ciclo 4, 2, 1).
 */
function funcion(dato) {
	console.log(dato);
	while (dato != 1){
		if (dato % 2 == 0) {
			dato = dato / 2;
			console.log(dato);
		} else {
			dato = (dato * 3) + 1;
			console.log(dato);
		}
	}
}

funcion(4102);
