(function(){
  $("#btn").addEventListener("click", function(){
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Correo");
    input.setAttribute("name", "correos[]");
    $("#formulario").appendChild(input);
  })
  function $(selector){
    return document.querySelector(selector);
  }
})();