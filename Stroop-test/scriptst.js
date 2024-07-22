document.addEventListener('DOMContentLoaded', () => {
    // Initial setup: Show the first container
    showContainer('.container1');

    function showContainer(containerClass) {
        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';
        });
        document.querySelector(containerClass).style.display = 'block';
    }

    document.getElementById('startButton').addEventListener('click', () => {
        showContainer('.container2');
    });

    // Add event listener for 'left click' or 'spacebar' on container2
    function handleContainer2Event(event) {
        if (event.type === 'click' || (event.type === 'keydown' && event.code === 'Space')) {
            showContainer('.container3');
            setupContainer3Timeout(); // Setup the timeout for container3
        }
    }

    document.querySelector('.container2').addEventListener('click', handleContainer2Event);
    document.addEventListener('keydown', handleContainer2Event);

    // Function to handle timeout for container3
    let container3Timeout;

    function setupContainer3Timeout() {
        // Clear any existing timeout if it exists
        clearTimeout(container3Timeout);

        container3Timeout = setTimeout(() => {
            showContainer('.container4');
        }, 5000); // 5 seconds

        function handleContainer3Event(event) {
            if (event.type === 'click') {
                clearTimeout(container3Timeout); // Clear the timeout to prevent transitioning to container4
                showContainer('.container5');
                document.querySelector('.container3').removeEventListener('click', handleContainer3Event);
                document.removeEventListener('keydown', handleContainer3Event);
                setupContainer5Click(); // Set up click event for container5
            } else if (event.type === 'keydown' && event.code === 'Space') {
                clearTimeout(container3Timeout); // Clear the timeout to prevent transitioning to container4
                document.querySelector('.container3').removeEventListener('click', handleContainer3Event);
                document.removeEventListener('keydown', handleContainer3Event);
            }
        }

        document.querySelector('.container3').addEventListener('click', handleContainer3Event);
        document.addEventListener('keydown', handleContainer3Event);
    }

    // Function to handle click on container5
    function setupContainer5Click() {
        document.querySelector('.container5').addEventListener('click', () => {
            showContainer('.container6');
            setupContainer6Click(); // Set up click event for container6
        });
    }

    // Function to handle click on container6
    function setupContainer6Click() {
        document.querySelector('.container6').addEventListener('click', () => {
            showContainer('.container7');
            setupContainer7Click(); // Set up click event for container7
        });
    }

    // Function to handle click on container7
    function setupContainer7Click() {
        document.querySelector('.container7').addEventListener('click', () => {
            showContainer('.container8');
            setupContainer8Click(); // Set up click event and timeout for container8
        });
    }

    // Function to handle click on container4
    function setupContainer4Click() {
        document.querySelector('.container4').addEventListener('click', () => {
            showContainer('.container7');
            setupContainer7Click(); // Set up click event for container7
        });
    }

    // Function to handle click on container8 and setup timeout
    let container8Timeout;

    function setupContainer8Click() {
        document.querySelector('.container8').addEventListener('click', () => {
            showContainer('.container10');
            clearTimeout(container8Timeout); // Clear any existing timeout
            setupContainer10Click(); // Set up click event for container10
        });

        // Setup timeout to transition to container9 after 5 seconds of inactivity
        container8Timeout = setTimeout(() => {
            showContainer('.container9');
            setupContainer9Click(); // Set up click event for container9
        }, 5000); // 5 seconds

        // Reset the timeout on any click inside container8
        document.querySelector('.container8').addEventListener('click', () => {
            clearTimeout(container8Timeout);
        });
    }

    // Function to handle click on container9
    function setupContainer9Click() {
        document.querySelector('.container9').addEventListener('click', () => {
            showContainer('.container11');
            setupContainer11Click(); // Set up click event for container11
        });
    }

    // Function to handle click on container11
    function setupContainer11Click() {
        document.querySelector('.container11').addEventListener('click', () => {
            window.location.href = 'game.html'; // Redirect to game.htm
        });
    }

    // Function to handle click on container10
    function setupContainer10Click() {
        document.querySelector('.container10').addEventListener('click', () => {
            window.location.href = 'game.html'; // Redirect to game.htm
        });
    }

    // Call setupContainer4Click to make sure click event is set for container4
    setupContainer4Click();
});
