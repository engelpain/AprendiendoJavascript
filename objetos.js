/* ---------------------------------------------------------------------------------------------------------------------
Getters
  Los son funciones con las cuales se pueden consultar los atributos de un objeto, las buenas
  prácticas de programación orientada a objetos exigen que solo se pueda acceder a los atributos de
  los objetos a través de su método get.

Setters
  Los son funciones con las cuales se pueden establecer los valores de los atributos de un objeto,
  las buenas prácticas de programación orientada a objetos exigen que solo se puedan establecer los
  valores de los a través de su método set.
--------------------------------------------------------------------------------------------------------------------- */
var objetoPrueba = {
  // Atributos
  nombre: "Ezio",
  apellido: "Auditore",
  nacimiento: 1459,

  // Método get
  get darNombre(){
    return this.nombre;
  },

  // Método set
  set darNombre(nombreNuevo){
  	if (nombreNuevo !== "") { this.nombre = nombreNuevo; }
  }
}

// Usando el setter
objetoPrueba.darNombre = "Altair";

// Consultando el getter
console.log(objetoPrueba.darNombre); // Altair

/* ---------------------------------------------------------------------------------------------------------------------
Consulta de objetos
  Se puede acceder a los valores de un objeto de varias formas, las más usadas son:
  - Forma 1: Objeto.atributo
  - Forma 2: Objeto['atributo']
--------------------------------------------------------------------------------------------------------------------- */
// Forma 1
objetoPrueba.apellido // Auditore

// Forma 2:
objetoPrueba['nacimiento'] // 1459

/* ---------------------------------------------------------------------------------------------------------------------
Destructured Assignment
  Es un método usado para consultar los atributos de un objeto y a la vez asignarlos a una variable con ese mismo nombre
--------------------------------------------------------------------------------------------------------------------- */
let {nacimiento} = objetoPrueba;
console.log(nacimiento); // 1459

/* ---------------------------------------------------------------------------------------------------------------------
Optional Chaining
  La sintaxis de encadenamiento opcional le permite acceder a propiedades de objetos profundamente anidadas sin
  preocuparse si la propiedad existe o no. Si existe, ¡genial! Si no, se devolverá indefinido.
--------------------------------------------------------------------------------------------------------------------- */
const opcional1 = objetoPrueba?.apellido // Auditore
const opcional2 = objetoPrueba?.altura // undefined
