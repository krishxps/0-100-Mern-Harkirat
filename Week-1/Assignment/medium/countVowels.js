function countVowels(str) {
    let count = 0;
    let string = str.split("");
    string.forEach((char) => {
        switch (char.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                count += 1;
                break;
            default:
                break;
        }
    });
    return count;
}

module.exports = countVowels;
