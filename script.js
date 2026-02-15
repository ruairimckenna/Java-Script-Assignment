// "Study" page JavaScript //

const charts = [
    "images/ChartP1.png",
    "images/ChartP2.png",
    "images/ChartP3.png",
    "images/ChartP4.png",
    "images/ChartP5.png",

];

let currentIndex = 0;

const chartImage = document.getElementById("chart-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
    currentIndex = currentIndex + 1;

    if (currentIndex >= charts.length) {
        currentIndex = 0;
    }
    chartImage.src = charts[currentIndex];
});

prevBtn.addEventListener("click", function() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = charts.length - 1;
    }
    chartImage.src = charts[currentIndex];
});





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