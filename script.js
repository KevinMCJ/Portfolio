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

// ? ==== CAMBIAR EL HEADER A FIXED CON BLUR AL SCROLLEAR
const scrollHeader = () => {
  const header = document.getElementById("header");
  // * Cuando el scroll sea mayor al 50 del viewport height, añadimos la clase scroll-header al header.
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

// ? PROJECT SECTION CARDS
const projectsContainer = document.querySelector(".cards_container");

fetch("./projects.json")
  .then((response) => response.json())
  .then((projects) => {
    // * Loop proyectos para renderizar las cards.
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project_card");

      const technologiesList = project.technologies
        .map((technology) => {
          return `<li class="tech_item">
            <img
            src=${technology.icon}
            alt="${technology.name} icon"
          />
            <p>${technology.name}</p>
            </li>`;
        })
        .join(""); // Convertir el array de strings en una cadena

      const cardContent = `
        <img src="${project.thumbnail}" alt="${project.name} Thumbnail">
        <div class="project_data">
          <h3>${project.name}</h3>
          <ul class="technology_list">${technologiesList}</ul>
        </div>
      `;

      projectCard.innerHTML = cardContent;
      projectsContainer.appendChild(projectCard);
    });
  })
  .catch((error) => {
    console.error("Error loading projects:", error);
  });
