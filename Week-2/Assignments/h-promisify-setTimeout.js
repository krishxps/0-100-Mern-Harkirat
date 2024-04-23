/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => setTimeout(resolve, n * 1000));
}

module.exports = wait;

// PASS  ./1-promisify-setTimeout.test.js (8.305 s)
//   wait function
//     ✓ resolves after 1 second (1057 ms)
//     ✓ resolves after 2 seconds (2001 ms)
//     ✓ resolves after 3 seconds (3002 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        8.513 s
