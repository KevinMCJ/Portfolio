// ? ==== NAV TOGGLE BUTTONS ===
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("nav_active");
  navToggle.style.display = "none"; // ? Oculta el botón de hamburguesa
  navClose.style.display = "block"; // ? Muestra el botón de cierre
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav_active");
  navToggle.style.display = "block";
  navClose.style.display = "none";
});

// ? ==== AJUSTE VISUAL AL CAMBIAR A TAMAÑO TABLET ===
const desktopMediaQuery = window.matchMedia("(min-width: 1023px)");

desktopMediaQuery.addEventListener("change", (event) => {
  if (event.matches) {
    navMenu.classList.remove("nav_active");
    navToggle.style.display = "none";
    navClose.style.display = "none";
  } else {
    navToggle.style.display = "flex";
  }
});

// ? PROJECT SECTION CARDS
const projectsContainer = document.querySelector(".cards_container");

fetch("./projects.json")
  .then((response) => response.json())
  .then((projects) => {
    // * Loop proyectos para renderizar las cards.
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project_card");

      const cardContent = `
        <img src="${project.thumbnail}" alt="${project.name} Thumbnail">
        <div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
      `;

      projectCard.innerHTML = cardContent;
      projectsContainer.appendChild(projectCard);
    });
  })
  .catch((error) => {
    console.error("Error loading projects:", error);
  });
