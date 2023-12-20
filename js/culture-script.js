// loading
const loading = document.getElementById("loading");
const allContent = document.getElementById("all-content");
// sticky nav
let nav = document.querySelector("nav");
let containerNav = document.getElementById("container-nav");
// back to top
let backToTop = document.getElementById("back-to-top");
// icon navbar
let menuIconCultures = document.getElementById("menu-icon-cultures");
// side bar
const sideBar = document.getElementById("side-bar");
const containerContentCulture = document.getElementById(
  "container-content-culture"
);
const allArrow = document.getElementById("all-arrow");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

document.addEventListener("DOMContentLoaded", loadingTime);
function loadingTime() {
  allContent.style.display = "none";
  setTimeout(showAllContent, 2500);

  function showAllContent() {
    loading.classList.add("hiddenToTop");
    allContent.style.display = "block";
  }
}

// when windows or side bar scroll > 10px
window.addEventListener("scroll", stickyNav);
sideBar.addEventListener("scroll", stickyNav);
function stickyNav() {
  if (document.documentElement.scrollTop || sideBar.scrollTop > 10) {
    containerNav.classList.add("sticky");
  } else {
    containerNav.classList.remove("sticky");
  }
}

// nav menu
menuIconCultures.addEventListener("click", function () {
  this.classList.toggle("close-icon");
  const navUl = document.getElementById("nav-ul");
  if (navUl.classList.contains("hidden-ul-culture")) {
    navUl.classList.remove("hidden-ul-culture");
    navUl.classList.add("show-ul-culture");
  } else {
    navUl.classList.remove("show-ul-culture");
    navUl.classList.add("hidden-ul-culture");
  }
});

// sidebar
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function toggleSideBar() {
  sideBar.classList.toggle("hidden-side-bar");
  containerContentCulture.classList.toggle("max-container-content-culture");
  allArrow.classList.toggle("in-left");
  arrowLeft.classList.toggle("show-arrow-left");
  arrowLeft.classList.toggle("hidden-arrow-left");
  arrowRight.classList.toggle("show-arrow-right");
  arrowRight.classList.toggle("hidden-arrow-right");
}
