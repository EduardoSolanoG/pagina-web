const btn = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("activo");
});
