const punctuations = "!@#$%^&*().,;'\" ";   // includes spaces

const palindromes = function(string) {
    let removed = removePunctuations(string);
    return removed === reverseString(removed);
}

function removePunctuations(string) {
    return string.toLowerCase().split('')                       // split into array
                .filter(char => (!punctuations.includes(char))) // filter out punctuations
                .join('');                                      // join into string
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

module.exports = palindromes
