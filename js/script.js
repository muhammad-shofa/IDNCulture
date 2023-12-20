// loading
const loading = document.getElementById("loading");
const allContent = document.getElementById("all-content");
// sticky nav
let nav = document.querySelector("nav");
let containerNav = document.getElementById("container-nav");
// back to top
let backToTop = document.getElementById("back-to-top");
// icon navbar
let menuIcon = document.getElementById("menu-icon");
// dropdown
let triggerDropdown = document.getElementById("trigger-dropdown-culture");
let triggerDropdownTH = document.getElementById("trigger-dropdown-culture-t-h");
let textCulture = document.getElementById("text-culture");
let containerDropdown = document.getElementById("container-dropdown");
let containerDropdownTH = document.getElementById("dropdown-t-h");

document.addEventListener("DOMContentLoaded", loadingTime);
function loadingTime() {
  allContent.style.display = "none";
  setTimeout(showAllContent, 2500);

  function showAllContent() {
    loading.classList.add("hiddenToTop");
    allContent.style.display = "block";
  }
}

// when windows scroll +20px
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    containerNav.classList.add("sticky");
    containerDropdown.style.backgroundColor = "var(--secondary)";
  } else {
    containerNav.classList.remove("sticky");
    containerDropdown.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  }
});

// event dropdown dekstop
triggerDropdown.addEventListener("mouseover", showDropdown);
containerDropdown.addEventListener("mouseover", showDropdown);
triggerDropdown.addEventListener("mouseout", hiddenDropdown);
containerDropdown.addEventListener("mouseout", hiddenDropdown);

// event tablet & hp
triggerDropdownTH.addEventListener("click", showDropdownTH);
// func dropdown dekstop
function showDropdown() {
  containerDropdown.style.marginTop = "0px";
  textCulture.style.color = "var(--primary)";
}

function hiddenDropdown() {
  containerDropdown.style.marginTop = "-1000px";
  textCulture.style.color = "";
}

// func dropdown tablet & hp
function showDropdownTH() {
  containerDropdownTH.classList.toggle("show-container-dropdown-t-h");
  triggerDropdownTH.classList.toggle("rotate-icon-top-up");
}

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 700) {
    backToTop.style.opacity = 0.8;
  } else {
    backToTop.style.opacity = 0;
  }
});

// nav menu
menuIcon.addEventListener("click", function () {
  this.classList.toggle("close-icon");
  const navUl = document.getElementById("nav-ul");
  if (navUl.classList.contains("hidden-ul")) {
    navUl.classList.remove("hidden-ul");
    navUl.classList.add("show-ul");
  } else {
    navUl.classList.remove("show-ul");
    navUl.classList.add("hidden-ul");
  }
});
