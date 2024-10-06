const navbarHome = document.getElementById("nav-home");
const navbarAbout = document.getElementById("nav-about");
const navbarProjects = document.getElementById("nav-projects");
const homeSection = document.getElementById("home-section");
const aboutSection = document.getElementById("about-section");
const projectsSection = document.getElementById("projects-section");
const languages = document.getElementsByClassName("language");


/* Highlighting currently open section of webpage on the navbar */

// -- HOME --
navbarHome.addEventListener("click", () => {
    navbarAbout.classList.remove("selected");
    navbarProjects.classList.remove("selected");
    navbarHome.classList.remove("highlight");
    navbarHome.classList.add("selected");
});
// -- ABOUT --
navbarAbout.addEventListener("click", () => {
    navbarHome.classList.remove("selected");
    navbarProjects.classList.remove("selected");
    navbarAbout.classList.remove("highlight");
    navbarAbout.classList.add("selected");
});
// -- PROJECTS --
navbarProjects.addEventListener("click", () => {
    navbarAbout.classList.remove("selected");
    navbarHome.classList.remove("selected");
    navbarProjects.classList.remove("highlight");
    navbarProjects.classList.add("selected");
});


/* Temporary highlights navbar options when hovered */

// -- HOME --
navbarHome.addEventListener("mouseover", () => {
    if (!navbarHome.classList.contains("selected")){
        navbarHome.classList.add("highlight")
    }
});
navbarHome.addEventListener("mouseout",
    () => navbarHome.classList.remove("highlight")
);

// -- ABOUT --
navbarAbout.addEventListener("mouseover", () => {
    if (!navbarAbout.classList.contains("selected")){
        navbarAbout.classList.add("highlight")
    }
});
navbarAbout.addEventListener("mouseout",
    () => navbarAbout.classList.remove("highlight")
);

// -- PROJECTS --
navbarProjects.addEventListener("mouseover", () => {
    if (!navbarProjects.classList.contains("selected")){
        navbarProjects.classList.add("highlight")
    }
});
navbarProjects.addEventListener("mouseout",
    () => navbarProjects.classList.remove("highlight")
);


/* Updating navbar if window is scrolled into new section */

// checks if section is the most predominant on the viewport
const isInFocus = (section) => {
    if (section.getBoundingClientRect().y < window.innerHeight / 2) {
        return true;
    } return false;
}

// checks if section is 15% visible on the viewport
const isPartiallyVisible = (section) => {
    if (section.getBoundingClientRect().y < window.innerHeight * 0.85) {
        return true;
    } return false;
}

// updates navbar with new focused section
const updateNavbar = (section) => {
    // clearing all navbar elements
    navbarHome.classList.remove("selected");
    navbarAbout.classList.remove("selected");
    navbarProjects.classList.remove("selected");

    // update navbar
    section.classList.add("selected");
}

// when section is viewed for first time, fades in all elements of the section
const fadeInChildren = (section) => {
    
    // Iterating through each child element of the section, adding animation
    for (const child of section.children) {
        child.classList.remove("start-faded-out");
        child.classList.add("fade-in");
    }
}

// checks current predominant section each time the page is scrolled
window.addEventListener("scroll", () => {

    // Iterating through 2D array of [<section>, <respective navbar element>]
    for (const section of [
        [homeSection, navbarHome], 
        [aboutSection, navbarAbout], 
        [projectsSection, navbarProjects]
    ]) {
        // Checking if section is predominant on the viewport
        if (isInFocus(section[0])) { 
            updateNavbar(section[1]); // Update highlights on navbar
        }
        // Fading in elements when section is partially visible
        if (isPartiallyVisible(section[0])) {
            fadeInChildren(section[0]); // Add animation to children of section
        }
    }
});

for (const language of languages) {
    let hover = document.getElementById(`${language.id}-hover`);

    language.addEventListener("mouseover", () => {
        language.classList.add("colored");
        language.style.backgroundColor = "black";
        hover.style.display = "block";
    });
    language.addEventListener("mouseout", () => {
        language.classList.remove("colored");
        hover.style.display = "none";
        language.style.backgroundColor = "transparent";
    })
}