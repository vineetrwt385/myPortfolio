
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const nav = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    // If menu is open and click is outside both nav and hamburger
    if (nav.classList.contains("active") &&
        !nav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        nav.classList.remove("active");
    }
});
