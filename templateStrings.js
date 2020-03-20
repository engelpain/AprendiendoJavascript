/* ---------------------------------------------------------------------------------------------------------------------
Templates String
  Son cadenas de caracteres que escribirán explícitamente todo lo que se les declara, incluyendo saltos de línea.
  Se declara el valor dentro de apóstrofes retrasadas.
  En éstas se pueden incorportar funciones o variables.
--------------------------------------------------------------------------------------------------------------------- */
(function(){
var saludo = "Hola mundo";

var template =`
  <div class="container">
    <h2>${saludo}</h2>
  </div>
`;
  document.getElementById("sandbox").innerHTML = template;
})();