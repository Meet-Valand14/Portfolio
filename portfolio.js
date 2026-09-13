// ======================================
// MEET VALAND PORTFOLIO
// JAVASCRIPT
// ======================================


// Portfolio loaded message

console.log("Meet Valand Portfolio Loaded Successfully!");


// ================================
// HAMBURGER MENU
// ================================

let menuToggle = document.getElementById("menuToggle");
let navLinks = document.getElementById("navLinks");


// Open / Close Menu

menuToggle.addEventListener("click", function () {

    menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active");

});


// ================================
// NAVIGATION CLICK
// ================================

let navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Navigation: " + link.textContent
        );


        // Menu close after clicking link

        menuToggle.classList.remove("active");

        navLinks.classList.remove("active");

    });

});


// ================================
// SCROLL EFFECT
// ================================

window.addEventListener("scroll", function () {

    let header =
        document.querySelector(".header");


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(8, 11, 20, 0.4)";

    } else {

        header.style.background =
            "transparent";

    }

});


// ================================
// PAGE LOADED
// ================================

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Welcome to Meet Valand Portfolio!"
    );

});
