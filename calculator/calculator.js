function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, value) => (total + value), 0);
}

function multiply (factors) {
	return factors.reduce((product, factor) => (product * factor), 1);
}

function power(b, n) {
	// let product = 1;
	// for(var i = 0; i < n; ++i) {
	// 	product *= b;
	// }
	// return product;
	Math.pow(b, n);
}

function factorial(n) {
	var product = 1;
	for(var i = n; i > 1; --i) {
		product *= i;
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}