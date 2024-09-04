//For Animated Background//
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var font_size = 10; // Font size set to 10
var columns, drops;
var rainSpeed = 20; // Increase/Decrease Rain Speed

// Array of colors
var colors = ["green"];

function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    columns = c.width / font_size;
    drops = Array(Math.floor(columns)).fill(1);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]; // Select a random color from the array
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = "jahin2004@/101"[Math.floor(Math.random() * "jahin2004".length)];
        ctx.fillStyle = getRandomColor(); // Set a random color for each drop
        // Draw text at the specified position
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height || Math.random() > 0.98) drops[i] = 0;
        drops[i]++;
    }
}

function update() {
    draw();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call to set canvas size

setInterval(update, rainSpeed); // Adjust the speed here