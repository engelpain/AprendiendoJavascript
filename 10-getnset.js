/* -------------------------------------------------------------------------------------------------
Getters
  Los son funciones con las cuales se pueden consultar los atributos de un objeto, las buenas
  prácticas de programación orientada a objetos exigen que solo se pueda acceder a los atributos de
  los objetos a través de su método get.

Setters
  Los son funciones con las cuales se pueden establecer los valores de los atributos de un objeto,
  las buenas prácticas de programación orientada a objetos exigen que solo se puedan establecer los
  valores de los a través de su método set. 
------------------------------------------------------------------------------------------------- */
(function(){
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
      nombreNuevo === ""  ? this.nombre : this.nombre = nombreNuevo;
    }
  }

objetoPrueba.darNombre = "Altair";
console.log(objetoPrueba.darNombre);
})();