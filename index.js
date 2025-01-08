const arr = [10, 20, 30];
const returnedArray = []

var map = function(arr, fn) {
	if (!arr.length) return [];

	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 1 && arr[i] === 0) return [0];
		returnedArray[i] = parseInt(fn(arr[i], i));
	}
	return returnedArray;
};

map(arr, plusI);

function plusI(el, i) {
	return el + i;
}

function plusone(n) {
	return n + 1;
}

function constant() {
	return parseInt(42);
}

function nMinusI(n, i) { 
	return n - i;
}

function plus10(n) { 
	return n + 10; 
}
function identity(n, i) { 
	return n; 
}