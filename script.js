const navbarHome = document.getElementById("nav-home");
const navbarProjects = document.getElementById("nav-projects");
const navbarContact = document.getElementById("nav-contact");


// Adding selected class on navbar when option chosen
navbarHome.addEventListener("click", () => {
    navbarProjects.classList.remove("selected");
    navbarContact.classList.remove("selected");
    navbarHome.classList.add("selected");
});
navbarProjects.addEventListener("click", () => {
    navbarHome.classList.remove("selected");
    navbarContact.classList.remove("selected");
    navbarProjects.classList.add("selected");
});
navbarContact.addEventListener("click", () => {
    navbarProjects.classList.remove("selected");
    navbarHome.classList.remove("selected");
    navbarContact.classList.add("selected");
});

// Temporary highlight on navbar when option hovered
navbarHome.addEventListener("mouseover",
    () => navbarHome.classList.add("highlight"));
navbarHome.addEventListener("mouseout",
    () => navbarHome.classList.remove("highlight"));
navbarProjects.addEventListener("mouseover",
    () => navbarProjects.classList.add("highlight"));
navbarProjects.addEventListener("mouseout",
    () => navbarProjects.classList.remove("highlight"));
navbarContact.addEventListener("mouseover",
    () => navbarContact.classList.add("highlight"));
navbarContact.addEventListener("mouseout",
    () => navbarContact.classList.remove("highlight"));
