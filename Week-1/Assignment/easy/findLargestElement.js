function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }
    let largest = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; 
        }
    }
    return largest;
}

module.exports = findLargestElement;
