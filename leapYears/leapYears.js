const leapYears = function(year) {
    if(divisibleByFourHundred(year)) {
        return true;
    }
    if(divisibleByOneHundred(year)) {
        return false;
    }
    if(divisibleByFour(year)) {
        return true;
    }
    return false;
}

const divisibleByFour = function(number) {
    return (number % 4 === 0) ? true : false;
}

const divisibleByOneHundred = function(number) {
    return (number % 100 === 0) ? true : false;
}

const divisibleByFourHundred = function(number) {
    return (number % 400 === 0) ? true : false;
}

module.exports = leapYears
