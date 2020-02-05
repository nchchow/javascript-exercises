const reverseString = function(stringToReverse) {
    let result = '';
    for(i = (stringToReverse.length - 1); i >= 0; --i) {
        result += stringToReverse[i];
    }
    return result;
}

module.exports = reverseString
