function calculateTime(n) {
    let startTime = new Date();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let endTime = new Date();
    let elapsedTime = endTime - startTime;
    let seconds = elapsedTime / 1000;
    return seconds;
}

// Example usage:
console.log("Time to calculate sum from 1 to 100:", calculateTime(100), "seconds");
console.log("Time to calculate sum from 1 to 100000:", calculateTime(100000), "seconds");
console.log("Time to calculate sum from 1 to 1000000000:", calculateTime(1000000000), "seconds");
