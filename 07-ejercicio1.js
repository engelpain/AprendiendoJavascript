// Número random entre 1 y 100
var numeroSecreto = (Math.random() * 100) + 1;
numeroSecreto = parseInt(numeroSecreto);
console.log(numeroSecreto);

// Mensaje para el usuario
var mensaje = "Ingrese un número";


while(true){
  var numeroUsuario = prompt(mensaje, "0");
  numeroUsuario = parseInt(numeroUsuario);
  if (numeroUsuario === numeroSecreto) {
    alert("WIN");
    break;
  } else if(numeroUsuario > numeroSecreto){
    mensaje = "El número secreto es menor a " + numeroUsuario;
  } else {
    mensaje = "El número secreto es mayor a " + numeroUsuario;
  }
}

/*

document.getElementById("id").innerHTML = "";
*/