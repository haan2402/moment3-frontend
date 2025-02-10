"use strict";

//element till navigeringsmenyn i mobilläge
let openButton = document.getElementById("open-menu");
let closeButton = document.getElementById("close-menu");
let navEl = document.getElementById("nav-menu");

//skapar två eventlyssnare för öppna och stänga knappen i hambugermenyn
openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

//skapar en funktion för att sedan toggla mellan öppna och stänga i hamburger menyn
function toggleMenu() {
    navEl.classList.toggle("active");
}