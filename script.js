window.addEventListener("load", () => {
  let index = 0;
  const images = document.querySelectorAll(".carrusel img");
  const total = images.length;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % total;
    images[index].classList.add("active");
  }, 5000);
});




const icono = document.querySelector(".busqueda .icono");
const input = document.querySelector(".busqueda input");
const busqueda = document.querySelector(".busqueda");

icono.addEventListener("click", () => {
  input.classList.toggle("activo");
  busqueda.classList.toggle("activa");

  if (input.classList.contains("activo")) {
    input.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!busqueda.contains(e.target)) {
    input.classList.remove("activo");
    busqueda.classList.remove("activa");
  }
});





const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

















