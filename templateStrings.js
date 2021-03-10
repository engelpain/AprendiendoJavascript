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


// --------------------------------------
// Ejemplo práctico
//  - Su target será <div id="app"></div>
// --------------------------------------
const $app = document.getElementById("app");
const Avatar = params => {
  const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
  return `<picture>
    <img src="${src}" alt="${params.name}" />
    ${params.name}
  </picture>`;
};
$app.innerHTML += Avatar({ id: 5, name: "Andrea" })
$app.innerHTML += Avatar({ id: 6, name: "Taurina" })