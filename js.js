let menuBtn = document.querySelector("nav > a");
let menuContent = document.querySelector(".menu");
let menuBtnStatus = false;
const y = window.matchMedia("(max-width: 1024px)");

function menuFunction() {
  if (y.matches) {
    menuContent.style.display = flex;
  }
}

function toggleMenu(e) {
  e.preventDefault();

  if (menuBtnStatus == false) {
    menuContent.style.display = "block";
    menuBtnStatus = true;
  } else if (menuBtnStatus == true) {
    menuContent.style.display = "none";
    menuBtnStatus = false;
  }
}

menuBtn.onclick = toggleMenu;
