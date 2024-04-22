function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert both strings to lowercase
    str1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    str2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the length of both strings is the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and check if they are equal
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
