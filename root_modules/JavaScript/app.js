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
