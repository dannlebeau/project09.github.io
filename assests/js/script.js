function mostrarSeccion(seccion) {
  // Ocultar todas las secciones
  var secciones = document.getElementsByClassName("seccion");
  for (var i = 0; i < secciones.length; i++) {
      secciones[i].style.display = "none";
  }

  // Mostrar la sección especificada
  var seccionActual = document.getElementById("seccion" + seccion);
  if (seccionActual) {
      seccionActual.style.display = "block";
  }
}

var botonesSiguiente = document.getElementsByClassName("boton-avanzar");
var botonesRetroceder = document.getElementsByClassName("boton-retroceder");

for (var i = 0; i < botonesSiguiente.length; i++) {
  botonesSiguiente[i].addEventListener("click", function() {
      var seccionActual = this.parentNode;
      var seccionSiguiente = seccionActual.nextElementSibling;
      while (seccionSiguiente && !seccionSiguiente.classList.contains("seccion")) {
          seccionSiguiente = seccionSiguiente.nextElementSibling;
      }
      if (seccionSiguiente) {
          seccionActual.style.display = "none";
          seccionSiguiente.style.display = "block";
      }
  });
}

for (var i = 0; i < botonesRetroceder.length; i++) {
  botonesRetroceder[i].addEventListener("click", function() {
      var seccionActual = this.parentNode;
      var seccionAnterior = seccionActual.previousElementSibling;
      while (seccionAnterior && !seccionAnterior.classList.contains("seccion")) {
          seccionAnterior = seccionAnterior.previousElementSibling;
      }
      if (seccionAnterior) {
          seccionActual.style.display = "none";
          seccionAnterior.style.display = "block";
      }
  });
}
