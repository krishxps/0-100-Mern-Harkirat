function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

module.exports = isPalindrome;
