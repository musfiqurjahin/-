//Script for Loader:
document.addEventListener('DOMContentLoaded', function() {
    let animationCount = 0;
    const loader = document.getElementById('loader');
    const mainContent = document.querySelector('.main-content');

    // Add the loading class to the body to prevent scrolling
    if (loader) {
        document.body.classList.add('loading');
    }

    // Optional: Hide main content until loader is finished
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    // Listen to animation end event
    const loaderImage = document.querySelector('.loader-image');
    if (loaderImage) {
        loaderImage.addEventListener('animationiteration', () => {
            animationCount++;
            if (animationCount === 1) {
                loader.style.display = 'none'; // Hide the loader
                if (mainContent) {
                    mainContent.style.display = 'block'; // Show the main content
                }
                // Remove the loading class from the body to allow scrolling
                document.body.classList.remove('loading');
            }
        });
    } else {
        // If there's no loader, make sure scrolling is enabled
        document.body.classList.remove('loading');
    }
});

//------------End Loader--------\\


//show/hide navbar:
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});
var typed = new Typed(".input", {
    strings: ["Technophile", "Introvertツ", "Web Developer", "Cyber Warrior", "H4ckTh3Pl4π3t",],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});


// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to open the menu
    function openMenu() {
        document.body.classList.add('no-scroll');
        // Additional code to show the menu
    }

    // Function to close the menu
    function closeMenu() {
        document.body.classList.remove('no-scroll');
        // Additional code to hide the menu
    }

    // Example event listener for toggle button
    document.querySelector('.togglebtn').addEventListener('click', function() {
        if (document.body.classList.contains('no-scroll')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
});
//------------------END-----------------------------------//

//For Scroll-Bar:
document.addEventListener('DOMContentLoaded', function() {
    let scrollTimeout;

    // Function to show the scrollbar
    function showScrollbar() {
        document.body.classList.remove('no-scrollbar');
    }

    // Function to hide the scrollbar after a delay
    function hideScrollbar() {
        document.body.classList.add('no-scrollbar');
    }

    // Listen for scroll events
    window.addEventListener('scroll', function() {
        // Show the scrollbar while scrolling
        showScrollbar();

        // Clear the previous timeout if the user is still scrolling
        clearTimeout(scrollTimeout);

        // Set a timeout to hide the scrollbar after 3 seconds of inactivity
        scrollTimeout = setTimeout(hideScrollbar, 3000); // 3 seconds delay
    });

    // Hide the scrollbar initially after 3 seconds if there's no scroll
    scrollTimeout = setTimeout(hideScrollbar, 3000);
});

//------------------------------END------------------------------------//

//Script for Blog site:\\
function toggleContent(button) {
    const blogPost = button.parentElement;
    const readMoreBtn = blogPost.querySelector('.read-more-btn');
    const showLessBtn = blogPost.querySelector('.show-less-btn');

    if (blogPost.classList.contains("collapsed")) {
    blogPost.classList.remove("collapsed");
    readMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline";
} else {
    blogPost.classList.add("collapsed");
    readMoreBtn.style.display = "inline";
    showLessBtn.style.display = "none";
}
}

document.querySelectorAll('.read-more-btn').forEach(button => {
button.addEventListener('click', function() {
    toggleContent(this);
});
});
    document.querySelectorAll('.show-less-btn').forEach(button => {
    button.addEventListener('click', function() {
    toggleContent(this);
});
});
    // Function to update time and date
    function updateTimeAndDate() {
        const now = new Date();
        const date = now.toDateString();
        const time = now.toLocaleTimeString();
        document.getElementById('current-date').textContent = date;
        document.getElementById('current-time').textContent = time;
    }
    // Update the time and date on page load
    updateTimeAndDate();
    // Set interval to update the time every second
    setInterval(updateTimeAndDate, 1000);

//------------------------END------------------------------//

//Script for Animated Background://
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