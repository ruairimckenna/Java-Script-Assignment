// "Train" page JavaScript //

// Table section highlight
const sections = document.querySelectorAll(".table-section");

sections.forEach(section => {
    section.addEventListener("click", () => {
        sections.forEach(s => s.classList.remove("active"));
        section.classList.add("active");

        // Use for quiz answers later

    });
});

// Button functionality placeholders
const nextHandBtn = document.getElementById("next-hand");
const playBtn = document.getElementById("play");
const foldBtn = document.getElementById("fold");

nextHandBtn.addEventListener("click", () => {
    console.log("Next Hand clicked");
});

playBtn.addEventListener("click", () => {
    console.log("Play clicked");
});

foldBtn.addEventListener("click", () => {
    console.log("Fold clicked");
});