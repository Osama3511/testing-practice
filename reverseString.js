function reverseString(string) {
    return string.toString().split("").reverse().join("");
}

module.exports = { reverseString };
