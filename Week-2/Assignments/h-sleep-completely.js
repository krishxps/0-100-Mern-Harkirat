/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve =>{
        const start = Date.now();
        while(Date.now() - start < milliseconds){
            resolve();
        }
    })
}

module.exports = sleep;


// PASS  ./2-sleep-completely.test.js (7.487 s)
//   sleep function
//     ✓ resolves after 1 second (1086 ms)
//     ✓ resolves after 2 seconds (2001 ms)
//     ✓ resolves after 3 seconds (3001 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        10.203 s