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





