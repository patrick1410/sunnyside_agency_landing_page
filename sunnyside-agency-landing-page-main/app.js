// HAMBURGER MENU

// SELECTING ELEMENTS
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const h1 = document.querySelector("h1");

// ADD EVENTLISTENER
hamburgerBtn.addEventListener("click", toggleMenu);

// FUNTION FOR HAMBURGER MENU
function toggleMenu() {
  if (hamburgerMenu.classList.contains("hide")) {
    hamburgerMenu.classList.remove("hide");
    h1.style.display = "none";
  } else {
    hamburgerMenu.classList.add("hide");
    h1.style.display = "block";
  }
}
