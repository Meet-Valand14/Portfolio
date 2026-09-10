// ======================================
// MEET VALAND PORTFOLIO
// JAVASCRIPT
// ======================================


// Portfolio loaded message

console.log("Meet Valand Portfolio Loaded Successfully!");



// ================================
// NAVIGATION CLICK
// ================================

let navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "Navigation: " + link.textContent
        );

    });

});



// ================================
// SCROLL EFFECT
// ================================

window.addEventListener("scroll", function() {

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

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "Welcome to Meet Valand Portfolio!"
    );

});