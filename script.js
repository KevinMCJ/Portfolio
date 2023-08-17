// ? ==== NAV TOGGLE BUTTONS ===

const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navList = document.querySelector(".nav_list");

navToggle.addEventListener("click", () => {
  navList.classList.add("nav_active");
  navToggle.style.display = "none"; // ? Oculta el botón de hamburguesa
  navClose.style.display = "block"; // ? Muestra el botón de cierre
});

navClose.addEventListener("click", () => {
  navList.classList.remove("nav_active");
  navToggle.style.display = "block";
  navClose.style.display = "none";
});
