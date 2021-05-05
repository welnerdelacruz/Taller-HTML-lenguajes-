document.getElementById("form1").addEventListener("submit", registrarOrden);

function registrarOrden(e) {
  let nombre = document.getElementById("nombre").value;
  let ingredientes = document.getElementById("ingredientes").value;
  let tamaño = document.getElementById("tamaño").value;

  let Orden = {
    ingredientes: ingredientes,
    tamaño: tamaño,
    nombre: nombre,
  };

  console.log(Orden);

  document.getElementById("form1").reset();
  e.preventDefault();
}