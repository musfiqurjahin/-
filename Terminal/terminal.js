         // Create a style element
         const style = document.createElement('style');
         style.innerHTML = `
                 body {
            background-color: black;
            color: #ff0000; /* Red for danger */
            font-family: 'Courier New', Courier, monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden; /* Hide scroll bar */
            position: relative; /* For positioning the loader and shapes */
        }
        #terminal {
            border: 2px solid #ff0000;
            padding: 20px;
            width: 80%;
            max-width: 600px;
            height: 400px;
            background: rgba(0, 0, 0, 0.9);
            box-shadow: 0 0 10px #ff0000;
            position: relative;
            animation: shake 0.5s infinite alternate; /* Shake animation */
            overflow: hidden; /* Hide scroll bar */
            display: none; /* Initially hidden until after loading */
        }
        .blinking-cursor {
            font-weight: bold;
            font-size: 20px;
            color: #ff0000;
            animation: blink 0.8s steps(2, start) infinite;
        }
        .alert {
            color: #ffcc00; /* Yellow for alert messages */
            animation: alert 0.5s ease-in-out infinite alternate;
        }
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes shake {
            0% { transform: translate(0); }
            100% { transform: translate(-2px, -2px); }
        }
        @keyframes alert {
            0% { opacity: 1; }
            100% { opacity: 0.5; }
        }
        #loader {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #ff0000; /* Red */
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite; /* Spin animation */
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `;
        // Append the style element to the head
        document.head.appendChild(style);


        // Simulate terminal login process
        let terminal = document.getElementById("terminal");
        let loader = document.getElementById("loader");
        let messages = [
            'Unauthorized access detected!',
            'Access denied. Invalid credentials!',
            'Security override rejected!',
            'System locked down!',
            'Further attempts will result in a security breach report...'
        ];
        let redirectDelay = 12000; // 12 seconds delay for suspense
        let loadCount = 0;

        let currentIndex = 0;

        // Initially show the loader
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.style.display = 'none'; // Hide loader after page load
                terminal.style.display = 'block'; // Show terminal
            }, 3000); // Delay to simulate loading process
        });

        // Display messages in rapid succession
        let messageInterval = setInterval(() => {
            if (currentIndex < messages.length) {
                terminal.innerHTML += `<p>${messages[currentIndex]}</p>`;
                terminal.scrollTop = terminal.scrollHeight; // Auto scroll to bottom
                currentIndex++;
            } else {
                clearInterval(messageInterval); // Stop when done
            }
        }, 2000); // Show new message every 2 seconds

        setTimeout(() => {
            terminal.innerHTML += '<p class="alert">FINAL WARNING: UNAUTHORIZED ACCESS!</p>';
            terminal.scrollTop = terminal.scrollHeight; // Auto scroll to bottom
        }, 8000); // Show final warning after 8 seconds

        setTimeout(() => {
            terminal.innerHTML += '<p>Redirecting to a secure area...</p>';
            terminal.scrollTop = terminal.scrollHeight; // Final redirect message
        }, 9500); // Final message before redirect

        // Show loader animation again during redirection
        setTimeout(() => {
            terminal.style.display = 'none'; // Hide terminal
            loader.style.display = 'block'; // Show loader again
            const loadingInterval = setInterval(() => {
                loadCount++;
                if (loadCount >= 5) {
                    clearInterval(loadingInterval); // Stop after 5 spins
                }
            }, 1000); // Loader animation every second
        }, 10000); // Show loader after final message

        // Redirect after loading
        setTimeout(() => {
            window.location.href = "../4O4-Error!"; // redirection URL
        }, redirectDelay + 3000); // Redirect after suspense