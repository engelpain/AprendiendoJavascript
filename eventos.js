/* ---------------------------------------------------------------------------------------------------------------------
Eventos
Los eventos son disparadores en el DOM que indican en que momento se deben realizar funciones. En JS
los eventos son disparados utilizando una función llamada addEventListener.

  addEventListener
    Agrega un disparador al elemento seleccionado del DOM.

    element.addEventListener(event, function, useCapture)
    Requiere 2 parámentros (event, function)
    * Evento disparador:
      * Focus
        * focus    (Se dispara cuando el elemento obtiene el foco).
        * blur     (Se dispara cuando el elemento pierde el foco).
        * focusin  (Se dispara cuando el elemento está cerca de obtener el foco).
        * focusout (Se dispara cuando el elemento está cerca de perder el foco).
      * Form
        * change     (Se dispara cuando el elemento de un formulario cambia o es llenado).
        * load       (Se dispara cuando un objeto ha sido cargado).
        * loadeddata (Se dispara cuando una "media data" es cargada).
        * submit (Se dispara cuando el formulario es enviado).
      * Keyboard
        * keydown  (Se dispara cuando el usuario está presionando una tecla).
        * keypress (Se dispara cuando el usuario presiona una tecla).
        * keyup    (Se dispara cuando el usuario deja de presionar una tecla).
      * Mouse
        * click (Se dispara cuando se hace click en el elemento).
        * mousedown (Se dispara cuando el usuario presiona el botón del mouse sobre el elemento).
        * mouseup (Se dispara cuando el usuario suelta el botón del mouse sobre el elemento).

        * mouseover (Se dispara cuando el puntero es movido sobre el elemento, o sobre uno de sus hijos).
        * mouseout (Se dispara cuando el puntero sale del elemento, o de uno de sus hijos).

        * mouseenter (Se dispara cuando el puntero es movido sobre el elemento).
        * mousemove (Se dispara cuando el puntero se está moviendo dentro del elemento).
        * mouseleave (Se dispara cuando el puntero es movido fuera del elemento).
    * Función que se ejecutará
    * useCapture (Opcional): Se define cuando se requiere establecer el orden en que elementos embebidos dispararán
    funciones.
      Por ejemplo: Un botón dentro de un div, si el div tiene este elemento como verdadero y el botón como falso,
      el evento que disparado por el div ocurrirá primero que el del botón.
        * true, false
--------------------------------------------------------------------------------------------------------------------- */
document.getElementById('test').addEventListener('click', function(){}, true);


/* ---------------------------------------------------------------------------------------------------------------------
Eventos por tiempo
  Para que se ejecute una acción por tiempo se utiliza la función setTimeout
  * setTimeout(function, milliseconds)
    - Descripción: Ejecuta la función después de pasar el tiempo establecido.
    - Requiere: 1 función.
    - Opcional: 1 argumento, tipo entero, representa los milisegundos que tardará en llamar a la
    función requerida.
--------------------------------------------------------------------------------------------------------------------- */
setTimeout(function() {console.log('Hola mundo');}, 5000);
setTimeout(() => console.log("hola mundo"), 2000);


/* ---------------------------------------------------------------------------------------------------------------------
Eventos para todos
  Para recorrer otorgar un evento a todos los elementos de un mismo tipo o clase
--------------------------------------------------------------------------------------------------------------------- */
document.querySelectorAll('.class').forEach(item => {
  item.addEventListener('click', function(){})
});