
// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// CLOSE MENU AFTER CLICKING
document.querySelectorAll("#navLinks a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(function(element) {

        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// RUN WHEN PAGE LOADS
window.addEventListener("load", revealOnScroll);

// WELCOME MESSAGE
console.log("Welcome to Mochi Magic!");
console.log("Website created by Nima Yuthra.");

