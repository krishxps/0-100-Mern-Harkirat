let timeout;

/**
 * Debounce function to delay the execution of populateDiv
 * This helps to avoid calling populateDiv too frequently.
 */
function debouncePopulateDiv() {
    // Clear any existing timeout to cancel previous debounce
    clearTimeout(timeout);

    // Set a new timeout to call populateDiv after 1 second (1000 milliseconds)
    timeout = setTimeout(function() {
        anotherFunc();
    }, 1000);
}

/**
 * Function to fetch 
 * (Placeholder function for demonstration purposes)
 */
function anotherFunc() {
    // Function Lopic
}
