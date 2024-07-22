document.addEventListener('DOMContentLoaded', () => {
    // Initial setup: Show the first container
    showContainer('.container');

    let transitionStarted = false;
    let transitionToNextContainer = false;
    let container3Or4Displayed = false;
    let container5Displayed = false;
    let container6Displayed = false;
    let container9Displayed = false;
    let container10Displayed = false;
    let container11Displayed = false;
    let container12Displayed = false;

    function showContainer(containerClass) {
        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';
        });
        document.querySelector(containerClass).style.display = 'block';
    }

    function goToNextPage() {
        if (transitionStarted) return; // Prevent multiple transitions

        transitionStarted = true;
        showContainer('.container2');

        // Transition to container3 after 5 seconds if no click has occurred
        const inactivityTimeout = setTimeout(() => {
            if (!transitionToNextContainer) {
                clearTimeout(inactivityTimeout);
                showContainer('.container3');
                container3Or4Displayed = true;
                // Set up event listeners to go to container5 from container3 or container4
                setupNextContainerListeners();
            }
        }, 5000); // 5 seconds

        // Click event to override timeout and show container4 immediately
        document.addEventListener('click', function handleClick() {
            if (!transitionToNextContainer) {
                clearTimeout(inactivityTimeout); // Clear the timeout to prevent transitioning to container3
                showContainer('.container4');
                transitionToNextContainer = true; // Prevent further transitions
                container3Or4Displayed = true;
                setupNextContainerListeners(); // Set up listeners for container4
            }
        });

        // Keydown event to override timeout and show container4 immediately
        document.addEventListener('keydown', function handleKeydown(event) {
            if (event.code === 'Space' && !transitionToNextContainer) {
                clearTimeout(inactivityTimeout); // Clear the timeout to prevent transitioning to container3
                showContainer('.container4');
                transitionToNextContainer = true; // Prevent further transitions
                container3Or4Displayed = true;
                document.removeEventListener('keydown', handleKeydown); // Remove keydown listener after use
                document.removeEventListener('click', handleClick); // Remove click listener after use
                setupNextContainerListeners(); // Set up listeners for container4
            }
        });
    }

    function setupNextContainerListeners() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                if (container3Or4Displayed) {
                    if (!container5Displayed) {
                        showContainer('.container5');
                        container5Displayed = true;
                        document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                        document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                        setupNextContainerAfterFive(); // Set up listeners for container5
                    }
                }
            }
        }

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterFive() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                showContainer('.container6');
                container6Displayed = true;
                document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                setupNextContainerAfterSix(); // Set up listeners for container6
            }
        }

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterSix() {
        const inactivityTimeout = setTimeout(() => {
            if (container6Displayed) {
                showContainer('.container7');
                setupNextContainerAfterSevenOrEight();
            }
        }, 5000); // 5 seconds

        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                if (container6Displayed) {
                    clearTimeout(inactivityTimeout); // Clear the timeout to prevent transitioning to container7
                    showContainer('.container8');
                    container6Displayed = false; // Prevent further transitions from container6
                    document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                    document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                    setupNextContainerAfterSevenOrEight(); // Set up listeners for container8
                }
            }
        }

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterSevenOrEight() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                showContainer('.container9');
                container9Displayed = true;
                document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                setupNextContainerAfterNine(); // Set up listeners for container9
            }
        }

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterNine() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                if (container9Displayed) {
                    showContainer('.container10');
                    container9Displayed = false; // Prevent further transitions from container9
                    container10Displayed = true;
                    document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                    document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                    setupNextContainerAfterTen(); // Set up listeners for container10
                }
            }
        }

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterTen() {
        const inactivityTimeout = setTimeout(() => {
            if (container10Displayed) {
                showContainer('.container11');
                document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                setupNextContainerAfterEleven(); // Set up listeners for container11
            }
        }, 5000); // 5 seconds

        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                if (container10Displayed) {
                    clearTimeout(inactivityTimeout); // Clear the timeout to prevent transitioning to container11
                    showContainer('.container12');
                    container10Displayed = false; // Prevent further transitions from container10
                    document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                    document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
                    setupNextContainerAfterTwelve(); // Set up listeners for container12
                }
            }
        }

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);

        showContainer('.container10');
    }

    function setupNextContainerAfterEleven() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                showContainer('.container13');
                document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
            }
        }

        showContainer('.container11'); // Ensure Container 11 is displayed
        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterTwelve() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                showContainer('.container13');
                document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
            }
        }

        showContainer('.container12'); // Ensure Container 12 is displayed
        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    function setupNextContainerAfterThirteen() {
        function handleClickOrSpace(event) {
            if (event.button === 0 || event.code === 'Space') {
                clearTimeout(inactivityTimeout); // Clear the timeout to prevent transitioning to container15
                showContainer('.container16');
                document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
                document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
            }
        }

        showContainer('.container14');
        const inactivityTimeout = setTimeout(() => {
            showContainer('.container15');
            document.removeEventListener('click', handleClickOrSpace); // Remove click listener after use
            document.removeEventListener('keydown', handleClickOrSpace); // Remove keydown listener after use
        }, 5000); // 5 seconds

        document.addEventListener('click', handleClickOrSpace);
        document.addEventListener('keydown', handleClickOrSpace);
    }

    // Transition from container14 to container15 after 5 seconds of inactivity
    function setupNextContainerAfterFourteen() {
        const inactivityTimeout = setTimeout(() => {
            showContainer('.container15');
        }, 5000); // 5 seconds

        // Click event to transition to container16
        document.querySelector('.container14').addEventListener('click', () => {
            clearTimeout(inactivityTimeout); // Clear the timeout to prevent transitioning to container15
            showContainer('.container16');
        });
    }

    // Event listener to start the transition sequence on click or space
    document.addEventListener('click', function(event) {
        if (event.button === 0) { // Left mouse button
            goToNextPage();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            goToNextPage();
        }
    });

    // New click listener for container13 to transition to container14
    document.querySelector('.container13').addEventListener('click', () => {
        showContainer('.container14');
        setupNextContainerAfterFourteen(); // Set up listeners for container14
    });
});

















