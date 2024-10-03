const navbarHome = document.getElementById("nav-home");
const navbarAbout = document.getElementById("nav-about");
const navbarProjects = document.getElementById("nav-projects");


// Adding selected class on navbar when option chosen
navbarHome.addEventListener("click", () => {
    navbarAbout.classList.remove("selected");
    navbarProjects.classList.remove("selected");
    navbarHome.classList.add("selected");
});
navbarAbout.addEventListener("click", () => {
    navbarHome.classList.remove("selected");
    navbarProjects.classList.remove("selected");
    navbarAbout.classList.add("selected");
});
navbarProjects.addEventListener("click", () => {
    navbarAbout.classList.remove("selected");
    navbarHome.classList.remove("selected");
    navbarProjects.classList.add("selected");
});

// Temporary highlight on navbar when option hovered
navbarHome.addEventListener("mouseover",
    () => navbarHome.classList.add("highlight"));
navbarHome.addEventListener("mouseout",
    () => navbarHome.classList.remove("highlight"));
navbarAbout.addEventListener("mouseover",
    () => navbarAbout.classList.add("highlight"));
navbarAbout.addEventListener("mouseout",
    () => navbarAbout.classList.remove("highlight"));
navbarProjects.addEventListener("mouseover",
    () => navbarProjects.classList.add("highlight"));
navbarProjects.addEventListener("mouseout",
    () => navbarProjects.classList.remove("highlight"));
