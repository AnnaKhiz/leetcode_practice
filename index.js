const arr = [-2,-1,0,1,2];
var filter = function(arr, fn) {
	let filteredArr = [];

	if (!arr.length) return [];
	for (let i = 0; i < arr.length; i++) {

		if (arr.length === 1 && arr[i] === 0) return [0];

		if (fn(arr[i], i)) {
			filteredArr.push(arr[i])
		}
	}
	return filteredArr;
};

function greaterThan10(n) {
	return n > 10;
}

function firstIndex(n, i) {
	return i === 0;
}

function plusOne(n) {
	return n + 1
}

console.log(filter(arr, greaterThan10))
console.log(filter(arr, firstIndex))
console.log(filter(arr, plusOne))

